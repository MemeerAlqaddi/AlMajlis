const modes = {
  all: ['Game Night Shuffle', 'A competitive mix of all five answer-based games.'],
  say: ['Guess The Word', 'Describe the word without using any of the five forbidden clues.'],
  arabish: ['Decode the Gibberish', 'Read the strange-looking sounds aloud until you discover the hidden Arabic phrase.'],
  ayah: ['Complete the Ayah', 'Complete the missing words, then reveal the Arabic, transliteration, and English meaning.'],
  trivia: ['Trivia', 'Answer challenging questions using your knowledge of the Qur’an, hadith, and Islamic concepts.'],
  identity: ['Riddles', 'Identify the person, event, place, or Qur’anic parable from the clues.'],
  conversation: ['Conversation Shuffle', 'A relaxed mix of Dilemmas and Under the Surface prompts.'],
  mizan: ['Dilemmas', 'Discuss a complicated situation using principles, context, and care.'],
  reflection: ['Under The Surface', 'Explore deeper questions about intention, character, faith, and real life.']
};

const modeInstructions = {
  all: 'Pass the phone to the person taking the turn. Follow the instruction shown on each card.',
  say: 'Hand the phone to the clue-giver. Keep the word and forbidden clues hidden from the guessing side.',
  arabish: 'Hand the phone to the reader. Read the sound-spelling aloud; the other side guesses the Arabic phrase.',
  ayah: 'Only the player taking the turn should see the screen before the answer is revealed.',
  trivia: 'Only the player reading the question should see the answer before Reveal.',
  identity: 'Read the clues aloud without showing the answer to the guessing side.'
};

const objectiveTypes = new Set(['say', 'arabish', 'ayah', 'trivia', 'identity']);
const conversationTypes = new Set(['mizan', 'reflection']);
const competitiveModes = new Set(['all', 'say', 'arabish', 'ayah', 'trivia', 'identity']);
const soloFriendly = new Set(['arabish', 'ayah', 'trivia', 'identity']);
const modeTimes = {all: 60, say: 60, arabish: 90, ayah: 90, trivia: 90, identity: 90, conversation: 0, mizan: 0, reflection: 0};
const styleNames = {teams: 'Teams', duel: '1 vs 1', casual: 'Just for Fun', solo: 'Solo', conversation: 'Untimed conversation'};
const REPORTS_KEY = 'al-majlis-card-reports-v3';
const SOUND_KEY = 'al-majlis-sound-v1';
const APP_VERSION = 29;
const SESSION_KEY = 'al-majlis-active-game-v29';
const REPORT_EMAIL = ['m.alqaddi', 'outlook.com'].join('@');
const REPORT_ENDPOINT = `https://formsubmit.co/ajax/${REPORT_EMAIL}`;
const totalRounds = 3;
const $ = id => document.getElementById(id);

let mode = null;
let playStyle = null;
let deck = [];
let cardIndex = 0;
let scores = {a: 0, b: 0};
let seconds = 60;
let timerTick = null;
let timerDeadline = 0;
let timerRunning = false;
let timerWasRunningBeforeHidden = false;
let activeSide = 'a';
let countdownTick = null;
let roundNumber = 1;
let roundStartScore = 0;
let roundLog = [];
let pointEvents = [];
let roundClosed = false;
let matchComplete = false;
let currentSetupStep = 'modeStep';
const storage = {
  get(key) {
    try { return window.localStorage.getItem(key); }
    catch { return null; }
  },
  set(key, value) {
    try { window.localStorage.setItem(key, value); return true; }
    catch { return false; }
  },
  remove(key) {
    try { window.localStorage.removeItem(key); return true; }
    catch { return false; }
  }
};

let soundEnabled = storage.get(SOUND_KEY) !== 'off';
let countdownAudioContext = null;
let lastReport = null;
let toastTimer = null;
let pointToastTimer = null;
let controlsLocked = false;
let activeDialog = null;
let dialogResumeTimer = false;
let lastFocusedBeforeDialog = null;
let wakeLock = null;
let reportRetryRunning = false;
let restoredAnswerVisible = false;

const sounds = typeof Audio === 'undefined' ? {} : {
  open: new Audio('./majlis-open.mp3'),
  select: new Audio('./majlis-select.mp3'),
  correct: new Audio('./majlis-correct.mp3'),
  complete: new Audio('./majlis-complete.mp3')
};
const soundVolumes = {open: .56, select: .52, correct: .58, complete: .62};
Object.entries(sounds).forEach(([name, audio]) => {
  audio.preload = 'auto';
  audio.volume = soundVolumes[name];
});

function playSound(name) {
  if (!soundEnabled || !sounds[name]) return;
  const audio = sounds[name];
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function playCountdownTone(value) {
  if (!soundEnabled) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  try {
    countdownAudioContext ||= new AudioContextClass();
    if (countdownAudioContext.state === 'suspended') countdownAudioContext.resume().catch(() => {});
    const now = countdownAudioContext.currentTime;
    const oscillator = countdownAudioContext.createOscillator();
    const gain = countdownAudioContext.createGain();
    const notes = {3: 392, 2: 440, 1: 523.25};
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(notes[value] || 440, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.018, now + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    oscillator.connect(gain);
    gain.connect(countdownAudioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.19);
  } catch {}
}

function isCompetitive() { return ['teams', 'duel'].includes(playStyle); }
function isConversationMode() { return ['conversation', 'mizan', 'reflection'].includes(mode); }
function deckFor(selectedMode) {
  if (selectedMode === 'all') return cards.filter(card => objectiveTypes.has(card.type));
  if (selectedMode === 'conversation') return cards.filter(card => conversationTypes.has(card.type));
  return cards.filter(card => card.type === selectedMode);
}
function currentCard() { return deck[cardIndex % deck.length]; }
function sideLabel(side = activeSide) {
  if (playStyle === 'duel') return side === 'a' ? 'Player 1' : 'Player 2';
  return side === 'a' ? 'Team A' : 'Team B';
}

function updateSoundToggle() {
  $('soundToggle').textContent = `Sound · ${soundEnabled ? 'On' : 'Off'}`;
  $('soundToggle').setAttribute('aria-pressed', String(soundEnabled));
  $('settingsSoundValue').textContent = soundEnabled ? 'On' : 'Off';
}

function getReports() {
  try {
    const value = JSON.parse(storage.get(REPORTS_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch { return []; }
}

function saveReports(reports) {
  storage.set(REPORTS_KEY, JSON.stringify(reports));
  updateReportCount();
}

function updateReportCount() {
  const reports = getReports();
  const pending = reports.filter(report => report.deliveryStatus !== 'sent').length;
  $('reportCount').textContent = pending ? `${pending} pending` : String(reports.length);
  $('reportsOpen').setAttribute('aria-label', `${pending} pending and ${reports.length} total saved card reports`);
}

function currentCardReport() {
  const card = currentCard();
  return {
    cardId: card.id,
    mode: modes[card.type][0],
    prompt: card.prompt,
    answer: card.answer,
    source: card.source,
    contentVersion: String(APP_VERSION)
  };
}

function reportText(report) {
  return `The Majlis card report\n${report.mode} · ${report.cardId}\nIssue: ${report.issue}\nPrompt: ${report.prompt}\nAnswer: ${report.answer}\nSource: ${report.source}${report.note ? `\nNote: ${report.note}` : ''}`;
}

async function sendReportByEmail(report) {
  const response = await fetch(REPORT_ENDPOINT, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Accept: 'application/json'},
    body: JSON.stringify({
      _subject: `The Majlis card report · ${report.cardId}`,
      _template: 'table',
      _captcha: 'false',
      card_id: report.cardId,
      content_version: report.contentVersion,
      game_mode: report.mode,
      issue: report.issue,
      note: report.note || 'No note supplied',
      prompt: report.prompt,
      answer: report.answer,
      source: report.source,
      reported_at: report.reportedAt
    })
  });
  if (!response.ok) throw new Error(`Report delivery failed (${response.status})`);
  const result = await response.json();
  if (String(result.success) !== 'true') throw new Error(result.message || 'Report delivery failed');
}

async function deliverStoredReport(index, announce = false) {
  const reports = getReports();
  const report = reports[index];
  if (!report || report.deliveryStatus === 'sent') return true;
  try {
    await sendReportByEmail(report);
    const latest = getReports();
    if (!latest[index] || latest[index].reportedAt !== report.reportedAt) return true;
    latest[index] = {...latest[index], deliveryStatus: 'sent', deliveredAt: new Date().toISOString(), attempts: (latest[index].attempts || 0) + 1};
    saveReports(latest);
    if (announce) showToast('Report sent');
    return true;
  } catch {
    const latest = getReports();
    if (latest[index] && latest[index].reportedAt === report.reportedAt) {
      latest[index] = {...latest[index], deliveryStatus: 'pending', attempts: (latest[index].attempts || 0) + 1, lastAttemptAt: new Date().toISOString()};
      saveReports(latest);
    }
    return false;
  }
}

async function retryPendingReports() {
  if (reportRetryRunning || navigator.onLine === false) return;
  reportRetryRunning = true;
  try {
    const reports = getReports();
    for (let index = 0; index < reports.length; index++) {
      if (reports[index].deliveryStatus !== 'sent') await deliverStoredReport(index);
    }
  } finally { reportRetryRunning = false; }
}

function renderReportSummary() {
  const reports = getReports();
  const pending = reports.filter(report => report.deliveryStatus !== 'sent').length;
  const counts = {};
  reports.forEach(report => counts[report.issue] = (counts[report.issue] || 0) + 1);
  $('reportSummary').innerHTML = reports.length
    ? `<div class="reportSummaryRow"><span>Total saved</span><b>${reports.length}</b></div><div class="reportSummaryRow"><span>Waiting to send</span><b>${pending}</b></div>${Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([issue, count]) => `<div class="reportSummaryRow"><span>${issue}</span><b>${count}</b></div>`).join('')}`
    : '<div class="reportEmpty">No cards have been flagged on this device.</div>';
  $('reportExport').hidden = !reports.length;
}

function exportReports() {
  const reports = getReports();
  const quote = value => `"${String(value ?? '').replace(/"/g, '""')}"`;
  const rows = [
    ['Card ID', 'Mode', 'Issue', 'Note', 'Prompt', 'Answer', 'Source', 'Delivery', 'Content version', 'Reported at'],
    ...reports.map(report => [report.cardId, report.mode, report.issue, report.note, report.prompt, report.answer, report.source, report.deliveryStatus, report.contentVersion, report.reportedAt])
  ];
  const blob = new Blob([rows.map(row => row.map(quote).join(',')).join('\n')], {type: 'text/csv;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'the-majlis-card-reports.csv';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 500);
  showToast('Report file ready');
}

function showToast(message) {
  clearTimeout(toastTimer);
  $('softToast').textContent = message;
  $('softToast').classList.add('show');
  toastTimer = setTimeout(() => $('softToast').classList.remove('show'), 1900);
}

function setBackgroundInert(dialog, inert) {
  [...document.body.children].forEach(element => {
    if (element === dialog || element.tagName === 'SCRIPT' || element.id === 'softToast' || element.id === 'pointToast') return;
    element.inert = inert;
  });
}

function pauseTimer() {
  if (!timerRunning) return false;
  seconds = Math.max(0, Math.ceil((timerDeadline - Date.now()) / 1000));
  clearInterval(timerTick);
  timerTick = null;
  timerRunning = false;
  timerDeadline = 0;
  showTime();
  persistSession();
  return true;
}

function openDialog(id, focusId, {pauseGame = true} = {}) {
  if (activeDialog) closeDialog(activeDialog.id, {resume: false, restoreFocus: false});
  lastFocusedBeforeDialog = document.activeElement;
  dialogResumeTimer = pauseGame && pauseTimer();
  const dialog = $(id);
  dialog.hidden = false;
  activeDialog = dialog;
  setBackgroundInert(dialog, true);
  $(focusId)?.focus();
}

function closeDialog(id, {resume = true, restoreFocus = true} = {}) {
  const dialog = $(id);
  if (!dialog || dialog.hidden) return;
  dialog.hidden = true;
  setBackgroundInert(dialog, false);
  activeDialog = null;
  const shouldResume = dialogResumeTimer && resume && !$('gameShell').hidden && !roundClosed;
  dialogResumeTimer = false;
  if (restoreFocus) lastFocusedBeforeDialog?.focus?.();
  if (shouldResume) startTimer();
}

function trapDialogFocus(event) {
  if (!activeDialog || event.key !== 'Tab') return;
  const focusables = [...activeDialog.querySelectorAll('button:not([disabled]),input:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(element => !element.hidden);
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables.at(-1);
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

function openReport() {
  const card = currentCardReport();
  $('reportCardMeta').textContent = `${card.mode} · ${card.cardId}`;
  $('reportForm').reset();
  $('reportForm').hidden = false;
  $('reportThanks').hidden = true;
  openDialog('reportSheet', 'reportClose');
}

function closeReport() { closeDialog('reportSheet'); }

const arabicDisplay = value => value.replace(/ۡ/g, 'ْ').replace(/[ۣۖۗۘۙۚۛۜ۟۠ۢۤۥۦۧۨ۩۪ۭ۫۬]/g, '');

function shuffle(items) {
  const copy = [...items];
  for (let n = copy.length - 1; n > 0; n--) {
    const randomIndex = Math.floor(Math.random() * (n + 1));
    [copy[n], copy[randomIndex]] = [copy[randomIndex], copy[n]];
  }
  return copy;
}

function resetViewport() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function showScreen(id) {
  ['welcomeScreen', 'setupScreen', 'gameShell'].forEach(screenId => {
    const element = $(screenId);
    element.hidden = screenId !== id;
  });
  document.body.classList.toggle('roundActive', id === 'gameShell');
  resetViewport();
  if (id === 'gameShell') requestWakeLock();
  else releaseWakeLock();
}

function showSetupStep(step) {
  currentSetupStep = step;
  ['modeStep', 'styleStep', 'playersStep'].forEach(id => $(id).hidden = id !== step);
  $('setupBack').textContent = step === 'modeStep' ? '← Home' : step === 'styleStep' ? '← Game modes' : '← Play styles';
  resetViewport();
  const heading = $(step).querySelector('h2');
  heading?.setAttribute('tabindex', '-1');
  heading?.focus({preventScroll: true});
}

function resetSetup() {
  mode = null;
  playStyle = null;
  document.querySelectorAll('.setupMode,.styleChoice').forEach(element => element.classList.remove('selected'));
  document.querySelectorAll('.styleChoice').forEach(element => element.disabled = false);
  $('matchField').hidden = true;
  $('beginGame').disabled = true;
  showSetupStep('modeStep');
}

function selectSetupMode(selectedMode) {
  playSound('select');
  mode = selectedMode;
  playStyle = null;
  document.querySelectorAll('.setupMode').forEach(element => element.classList.toggle('selected', element.dataset.mode === selectedMode));
  document.querySelectorAll('.styleChoice').forEach(element => element.classList.remove('selected'));

  if (isConversationMode()) {
    playStyle = 'conversation';
    launchGame();
    return;
  }

  const canCompete = competitiveModes.has(selectedMode);
  const canSolo = soloFriendly.has(selectedMode);
  document.querySelector('[data-style="teams"]').disabled = !canCompete;
  document.querySelector('[data-style="duel"]').disabled = !canCompete;
  document.querySelector('[data-style="solo"]').disabled = !canSolo;
  $('styleModeName').textContent = modes[selectedMode][0];
  showSetupStep('styleStep');
}

function selectStyle(style) {
  if ((['teams', 'duel'].includes(style) && !competitiveModes.has(mode)) || (style === 'solo' && !soloFriendly.has(mode))) return;
  playSound('select');
  playStyle = style;
  document.querySelectorAll('.styleChoice').forEach(element => element.classList.toggle('selected', element.dataset.style === style));
  const competitive = isCompetitive();
  $('matchField').hidden = !competitive;
  $('playersTitle').textContent = style === 'teams' ? 'Teams ready?' : style === 'duel' ? 'Ready for 1 vs 1?' : style === 'solo' ? 'Ready for a solo session?' : 'Ready to play?';
  $('selectedModeName').textContent = modes[mode][0];
  $('selectedStyleName').textContent = `${styleNames[style]}${competitive ? ' · 3 rounds' : ''}`;
  $('modeInstruction').textContent = modeInstructions[mode];
  $('beginGame').textContent = 'Start Game';
  $('beginGame').disabled = false;
  showSetupStep('playersStep');
}

const modeGroups = [
  {title: 'Competitive Modes', note: 'Answer-based games with optional scoring and timed rounds.', keys: ['all', 'say', 'arabish', 'ayah', 'trivia', 'identity']},
  {title: 'Conversational Modes', note: 'One simple format: untimed, unscored, and made for talking.', keys: ['conversation', 'mizan', 'reflection']}
];

modeGroups.forEach(group => {
  const section = document.createElement('section');
  section.className = 'modeGroup';
  const heading = document.createElement('h3');
  heading.textContent = group.title;
  const note = document.createElement('p');
  note.textContent = group.note;
  const list = document.createElement('div');
  list.className = 'modeGroupList';
  group.keys.forEach(key => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'setupMode';
    button.dataset.mode = key;
    button.innerHTML = `<strong>${modes[key][0]}</strong><small>${modes[key][1]}</small>`;
    button.onclick = () => selectSetupMode(key);
    list.appendChild(button);
  });
  section.append(heading, note, list);
  $('setupModes').appendChild(section);
});

function prepareGame() {
  storage.remove(SESSION_KEY);
  deck = shuffle(deckFor(mode));
  cardIndex = 0;
  scores = {a: 0, b: 0};
  activeSide = 'a';
  roundNumber = 1;
  roundStartScore = 0;
  roundLog = [];
  pointEvents = [];
  roundClosed = false;
  matchComplete = false;
  restoredAnswerVisible = false;
  $('roundScreen').hidden = true;
  $('countdownScreen').hidden = true;
  $('matchFinal').hidden = true;
  $('undoPoint').hidden = true;
  configureControls();
  render();
  showScreen('gameShell');
  try { history.pushState({majlisGame: true}, '', location.href); } catch {}
  if (isConversationMode()) {
    seconds = 0;
    showTime();
    $('question').focus({preventScroll: true});
    persistSession();
  } else startCountdown();
}

function launchGame() {
  if (!mode || !playStyle) return;
  try {
    prepareGame();
  } catch (error) {
    console.error('The Majlis could not start the selected game.', error);
    pauseTimer();
    clearInterval(countdownTick);
    countdownTick = null;
    $('countdownScreen').hidden = true;
    showScreen('setupScreen');
    showToast('That game could not start. Please try again.');
  }
}

function configureControls() {
  const conversation = isConversationMode();
  $('playTimer').hidden = conversation;
  $('correct').textContent = conversation ? 'Next Prompt' : isCompetitive() ? 'Correct +1' : 'Next Card';
  $('correct').classList.toggle('primary', conversation || !isCompetitive());
  $('skip').hidden = conversation;
  $('finishRound').textContent = conversation ? 'End Session' : isCompetitive() ? 'End Turn' : 'End Round';
}

function startCountdown() {
  clearInterval(countdownTick);
  pauseTimer();
  roundClosed = false;
  roundStartScore = scores[activeSide];
  pointEvents = [];
  seconds = modeTimes[mode];
  showTime();
  $('countdownScreen').hidden = false;
  let count = 3;
  const showCount = value => {
    const number = $('countdownNumber');
    number.textContent = value;
    number.classList.remove('countdownPulse');
    void number.offsetWidth;
    number.classList.add('countdownPulse');
    playCountdownTone(value);
  };
  showCount(count);
  countdownTick = setInterval(() => {
    count--;
    if (count > 0) showCount(count);
    else {
      clearInterval(countdownTick);
      countdownTick = null;
      $('countdownScreen').hidden = true;
      $('question').focus({preventScroll: true});
      startTimer();
    }
  }, 560);
}

function setAnswerVisible(visible) {
  $('answer').hidden = !visible;
  $('answer').setAttribute('aria-hidden', String(!visible));
  $('answerRule').hidden = !visible;
  $('ref').hidden = !visible;
  $('reveal').setAttribute('aria-expanded', String(visible));
  restoredAnswerVisible = visible;
  scheduleCardFit();
  persistSession();
}

function fitCardToViewport() {
  const card = $('gameCard');
  if (!card || $('gameShell').hidden) return;
  card.classList.remove('fitLevel1', 'fitLevel2');
  if (card.scrollHeight > card.clientHeight) card.classList.add('fitLevel1');
  if (card.scrollHeight > card.clientHeight) card.classList.add('fitLevel2');
}

function scheduleCardFit() { requestAnimationFrame(() => requestAnimationFrame(fitCardToViewport)); }

function render() {
  const card = currentCard();
  const isAyah = card.type === 'ayah';
  const isReflection = card.type === 'reflection';
  const isDilemma = card.type === 'mizan';
  const isWord = card.type === 'say';
  const dense = !isAyah && !isReflection && (card.prompt.length > 105 || card.answer.length > 130);

  $('type').textContent = modes[card.type][0].toUpperCase();
  $('question').textContent = isAyah ? arabicDisplay(card.prompt) : card.prompt;
  $('gameCard').classList.toggle('ayahCard', isAyah);
  $('gameCard').classList.toggle('reflectionCard', isReflection);
  $('gameCard').classList.toggle('dense', dense);
  $('promptTransliteration').textContent = card.promptTransliteration || '';
  $('promptTranslation').textContent = card.promptTranslation || '';
  $('answerMain').textContent = isAyah ? arabicDisplay(card.answer) : card.answer;
  $('answerTransliteration').textContent = card.answerTransliteration || '';
  $('answerTranslation').textContent = card.answerTranslation || '';
  $('ref').textContent = card.source;
  $('fullSource').textContent = card.source;
  $('reveal').hidden = isWord || isReflection;
  $('reveal').textContent = isDilemma ? 'Considerations' : 'Reveal';
  setAnswerVisible(isWord || restoredAnswerVisible);
  if (isReflection) {
    $('answer').hidden = true;
    $('answerRule').hidden = true;
    $('ref').hidden = true;
  }
  scheduleCardFit();
}

function lockAdvanceControls() {
  if (controlsLocked) return false;
  controlsLocked = true;
  ['correct', 'skip'].forEach(id => $(id).disabled = true);
  setTimeout(() => {
    controlsLocked = false;
    ['correct', 'skip'].forEach(id => $(id).disabled = false);
  }, 420);
  return true;
}

function advance() {
  if (cardIndex + 1 >= deck.length) {
    const lastCard = currentCard();
    deck = shuffle(deck);
    if (deck.length > 1 && deck[0].id === lastCard.id) [deck[0], deck[1]] = [deck[1], deck[0]];
    cardIndex = 0;
  } else cardIndex++;
  restoredAnswerVisible = false;
  render();
  $('question').focus({preventScroll: true});
  persistSession();
}

function revealAnswer() {
  const visible = !$('answer').hidden;
  setAnswerVisible(!visible);
  $('reveal').textContent = visible ? (currentCard().type === 'mizan' ? 'Considerations' : 'Reveal') : 'Hide';
}

function showPointUndo() {
  clearTimeout(pointToastTimer);
  $('pointToast').hidden = false;
  pointToastTimer = setTimeout(() => $('pointToast').hidden = true, 4200);
}

function undoRecentPoint() {
  const event = pointEvents.at(-1);
  if (!event || event.undone || scores[event.side] < 1 || roundClosed) return;
  scores[event.side]--;
  event.undone = true;
  $('pointToast').hidden = true;
  showToast('Point removed');
  persistSession();
}

function awardAndAdvance() {
  if (!lockAdvanceControls()) return;
  if (isCompetitive()) {
    scores[activeSide]++;
    pointEvents.push({side: activeSide, cardId: currentCard().id, undone: false});
    playSound('correct');
    showPointUndo();
  }
  advance();
}

function passAndAdvance() {
  if (!lockAdvanceControls()) return;
  advance();
}

function showTime() {
  const display = seconds || '—';
  const low = seconds > 0 && seconds <= 10;
  $('playTimer').textContent = display;
  $('playTimer').classList.toggle('low', low);
}

function timerFrame() {
  if (!timerRunning) return;
  const remaining = Math.max(0, Math.ceil((timerDeadline - Date.now()) / 1000));
  if (remaining !== seconds) {
    seconds = remaining;
    showTime();
    persistSession();
  }
  if (remaining <= 0) {
    clearInterval(timerTick);
    timerTick = null;
    timerRunning = false;
    timerDeadline = 0;
    navigator.vibrate?.([120, 60, 120]);
    endRound();
  }
}

function startTimer() {
  if (!seconds || roundClosed || isConversationMode()) return;
  clearInterval(timerTick);
  timerDeadline = Date.now() + seconds * 1000;
  timerRunning = true;
  timerTick = setInterval(timerFrame, 200);
  persistSession();
}

function renderRoundHistory() {
  $('roundHistory').innerHTML = roundLog.map(entry => `<div class="historyRow"><span>Round ${entry.round} · ${entry.label}</span><b>+${entry.points}</b></div>`).join('');
}

function showMatchWinner() {
  matchComplete = true;
  $('roundHeading').textContent = 'MATCH COMPLETE';
  $('roundResult').textContent = scores.a === scores.b ? 'It’s a tie!' : `${sideLabel(scores.a > scores.b ? 'a' : 'b')} wins!`;
  $('roundScore').textContent = `Final score · ${sideLabel('a')} ${scores.a} — ${sideLabel('b')} ${scores.b}`;
  $('finalLabelA').textContent = sideLabel('a');
  $('finalLabelB').textContent = sideLabel('b');
  $('finalA').textContent = scores.a;
  $('finalB').textContent = scores.b;
  renderRoundHistory();
  $('matchFinal').hidden = false;
  $('nextRound').textContent = 'Play Again';
}

function updateBetweenTurnSummary() {
  const latest = roundLog.at(-1);
  $('roundScore').textContent = `${latest.label} earned ${latest.points} point${latest.points === 1 ? '' : 's'} · Match score ${sideLabel('a')} ${scores.a} — ${sideLabel('b')} ${scores.b}`;
  $('undoPoint').hidden = latest.points < 1;
}

function renderClosedRound() {
  $('matchFinal').hidden = true;
  $('undoPoint').hidden = true;
  if (isCompetitive()) {
    $('roundHeading').textContent = 'TURN COMPLETE';
    updateBetweenTurnSummary();
    if (matchComplete) showMatchWinner();
    else if (activeSide === 'a') {
      $('roundResult').textContent = `${sideLabel()} finished · ${sideLabel('b')} is next`;
      $('nextRound').textContent = 'Next Turn';
    } else {
      $('roundResult').textContent = `Round ${roundNumber} finished · Round ${roundNumber + 1} is next`;
      $('nextRound').textContent = 'Next Round';
    }
  } else {
    $('roundHeading').textContent = isConversationMode() ? 'SESSION COMPLETE' : 'ROUND COMPLETE';
    $('roundResult').textContent = isConversationMode() ? 'Conversation paused' : `Round ${roundNumber} finished`;
    $('roundScore').textContent = 'Continue only when everyone is ready.';
    $('nextRound').textContent = isConversationMode() ? 'Keep Talking' : 'Next Round';
  }
  $('roundScreen').hidden = false;
}

function endRound() {
  if (roundClosed) return;
  roundClosed = true;
  playSound('complete');
  pauseTimer();
  clearInterval(countdownTick);
  countdownTick = null;
  $('countdownScreen').hidden = true;
  $('pointToast').hidden = true;

  if (isCompetitive()) {
    const entry = {round: roundNumber, side: activeSide, label: sideLabel(), points: Math.max(0, scores[activeSide] - roundStartScore)};
    roundLog.push(entry);
    if (roundNumber === totalRounds && activeSide === 'b') matchComplete = true;
  }
  renderClosedRound();
  persistSession();
  $('nextRound').focus();
}

function undoLastPoint() {
  const latest = roundLog.at(-1);
  if (!latest || latest.side !== activeSide || latest.points < 1 || scores[activeSide] < 1) return;
  scores[activeSide]--;
  latest.points--;
  const event = [...pointEvents].reverse().find(item => !item.undone);
  if (event) event.undone = true;
  updateBetweenTurnSummary();
  if (matchComplete) showMatchWinner();
  persistSession();
  showToast('Last point removed');
}

function beginNextRound() {
  if (matchComplete) { launchGame(); return; }
  $('roundScreen').hidden = true;
  roundClosed = false;
  if (isCompetitive()) {
    if (activeSide === 'a') activeSide = 'b';
    else { activeSide = 'a'; roundNumber++; }
  } else roundNumber++;
  if (isConversationMode()) {
    $('question').focus({preventScroll: true});
    persistSession();
  } else startCountdown();
}

function sessionSnapshot() {
  if (!mode || !playStyle || !deck.length) return null;
  return {
    version: APP_VERSION,
    mode,
    playStyle,
    deckIds: deck.map(card => card.id),
    cardIndex,
    scores,
    seconds,
    timerRunning,
    activeSide,
    roundNumber,
    roundStartScore,
    roundLog,
    pointEvents,
    roundClosed,
    matchComplete,
    answerVisible: !$('answer').hidden,
    savedAt: new Date().toISOString()
  };
}

function persistSession() {
  const snapshot = sessionSnapshot();
  if (!snapshot) return;
  storage.set(SESSION_KEY, JSON.stringify(snapshot));
  updateResumeAvailability();
}

function getSavedSession() {
  try {
    const saved = JSON.parse(storage.get(SESSION_KEY) || 'null');
    if (!saved || saved.version !== APP_VERSION || !modes[saved.mode] || !Array.isArray(saved.deckIds) || !saved.deckIds.length) return null;
    return saved;
  } catch { return null; }
}

function updateResumeAvailability() {
  const available = Boolean(getSavedSession());
  $('resumeGame').hidden = !available;
  $('discardSavedGame').hidden = !available;
}

function discardSavedSession() {
  storage.remove(SESSION_KEY);
  updateResumeAvailability();
  showToast('Saved game removed');
}

function restoreGame() {
  const saved = getSavedSession();
  if (!saved) { updateResumeAvailability(); return; }
  const byId = new Map(cards.map(card => [card.id, card]));
  const restoredDeck = saved.deckIds.map(id => byId.get(id)).filter(Boolean);
  if (restoredDeck.length !== saved.deckIds.length) { discardSavedSession(); return; }
  mode = saved.mode;
  playStyle = saved.playStyle;
  deck = restoredDeck;
  cardIndex = Math.min(Math.max(0, saved.cardIndex || 0), deck.length - 1);
  scores = {a: Number(saved.scores?.a) || 0, b: Number(saved.scores?.b) || 0};
  seconds = Math.max(0, Number(saved.seconds) || 0);
  activeSide = saved.activeSide === 'b' ? 'b' : 'a';
  roundNumber = Math.max(1, Number(saved.roundNumber) || 1);
  roundStartScore = Number(saved.roundStartScore) || 0;
  roundLog = Array.isArray(saved.roundLog) ? saved.roundLog : [];
  pointEvents = Array.isArray(saved.pointEvents) ? saved.pointEvents : [];
  roundClosed = Boolean(saved.roundClosed);
  matchComplete = Boolean(saved.matchComplete);
  restoredAnswerVisible = Boolean(saved.answerVisible);
  configureControls();
  render();
  showScreen('gameShell');
  $('countdownScreen').hidden = true;
  $('roundScreen').hidden = true;
  if (roundClosed) renderClosedRound();
  else if (saved.timerRunning && seconds > 0 && !isConversationMode()) startTimer();
  $('question').focus({preventScroll: true});
  showToast('Game restored');
}

async function requestWakeLock() {
  if (!('wakeLock' in navigator) || document.visibilityState !== 'visible' || $('gameShell').hidden) return;
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    wakeLock.addEventListener?.('release', () => { wakeLock = null; });
  } catch {}
}

async function releaseWakeLock() {
  try { await wakeLock?.release?.(); } catch {}
  wakeLock = null;
}

function openExitConfirmation() { openDialog('exitSheet', 'keepPlaying'); }
function keepPlaying() { closeDialog('exitSheet'); }
function returnHome() {
  closeDialog('exitSheet', {resume: false});
  pauseTimer();
  clearInterval(countdownTick);
  countdownTick = null;
  $('countdownScreen').hidden = true;
  $('roundScreen').hidden = true;
  persistSession();
  showScreen('welcomeScreen');
  updateResumeAvailability();
}

$('openSetup').onclick = () => { playSound('open'); showScreen('setupScreen'); resetSetup(); };
$('resumeGame').onclick = restoreGame;
$('setupBack').onclick = () => {
  if (currentSetupStep === 'playersStep') showSetupStep('styleStep');
  else if (currentSetupStep === 'styleStep') showSetupStep('modeStep');
  else showScreen('welcomeScreen');
};
document.querySelectorAll('.styleChoice').forEach(button => button.onclick = () => selectStyle(button.dataset.style));
$('beginGame').onclick = launchGame;
$('reveal').onclick = revealAnswer;
$('skip').onclick = passAndAdvance;
$('correct').onclick = awardAndAdvance;
$('finishRound').onclick = endRound;
$('nextRound').onclick = beginNextRound;
$('undoPoint').onclick = undoLastPoint;
$('undoRecentPoint').onclick = undoRecentPoint;
$('cardHome').onclick = openExitConfirmation;
$('roundHome').onclick = returnHome;
$('exitClose').onclick = keepPlaying;
$('keepPlaying').onclick = keepPlaying;
$('confirmHome').onclick = returnHome;
$('exitSheet').onclick = event => { if (event.target === $('exitSheet')) keepPlaying(); };

function toggleSound() {
  soundEnabled = !soundEnabled;
  storage.set(SOUND_KEY, soundEnabled ? 'on' : 'off');
  updateSoundToggle();
  if (soundEnabled) playSound('select');
}
$('soundToggle').onclick = toggleSound;
$('settingsSound').onclick = toggleSound;

$('reportCard').onclick = openReport;
$('reportClose').onclick = closeReport;
$('reportDone').onclick = closeReport;
$('reportSheet').onclick = event => { if (event.target === $('reportSheet')) closeReport(); };
$('reportForm').onsubmit = async event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const report = {...currentCardReport(), issue: data.get('reportIssue'), note: $('reportNote').value.trim(), reportedAt: new Date().toISOString(), deliveryStatus: 'pending', attempts: 0};
  const reports = getReports();
  reports.push(report);
  saveReports(reports);
  const index = reports.length - 1;
  lastReport = report;
  $('reportForm').hidden = true;
  $('reportThanks').hidden = false;
  $('reportThanksText').textContent = 'Sending your report…';
  $('reportShare').hidden = true;
  $('reportDone').focus();
  const delivered = await deliverStoredReport(index, true);
  if (delivered) $('reportThanksText').textContent = 'Your report was sent for review. The game is exactly where you left it.';
  else {
    $('reportThanksText').textContent = 'It is saved on this device and will retry automatically when the connection returns.';
    $('reportShare').hidden = false;
    showToast('Saved — waiting to send');
  }
};
$('reportShare').onclick = async () => {
  if (!lastReport) return;
  const text = reportText(lastReport);
  if (navigator.share) {
    try { await navigator.share({title: 'The Majlis card report', text}); return; }
    catch (error) { if (error.name === 'AbortError') return; }
  }
  try { await navigator.clipboard.writeText(text); showToast('Report copied to share'); }
  catch { showToast('Report remains saved on this device'); }
};

$('settingsOpen').onclick = () => openDialog('settingsSheet', 'settingsClose', {pauseGame: false});
$('settingsClose').onclick = () => closeDialog('settingsSheet');
$('settingsSheet').onclick = event => { if (event.target === $('settingsSheet')) closeDialog('settingsSheet'); };
$('reportsOpen').onclick = () => {
  closeDialog('settingsSheet', {resume: false, restoreFocus: false});
  renderReportSummary();
  openDialog('reportsSheet', 'reportsClose', {pauseGame: false});
};
$('reportsClose').onclick = () => closeDialog('reportsSheet');
$('reportsSheet').onclick = event => { if (event.target === $('reportsSheet')) closeDialog('reportsSheet'); };
$('reportExport').onclick = exportReports;
$('discardSavedGame').onclick = () => { discardSavedSession(); closeDialog('settingsSheet'); };

$('contentNotesOpen').onclick = () => openDialog('contentNotesSheet', 'contentNotesClose', {pauseGame: false});
$('contentNotesClose').onclick = () => closeDialog('contentNotesSheet');
$('contentNotesSheet').onclick = event => { if (event.target === $('contentNotesSheet')) closeDialog('contentNotesSheet'); };
$('ref').onclick = () => {
  $('fullSource').textContent = currentCard().source;
  openDialog('sourceSheet', 'sourceClose');
};
$('sourceClose').onclick = () => closeDialog('sourceSheet');
$('sourceSheet').onclick = event => { if (event.target === $('sourceSheet')) closeDialog('sourceSheet'); };

document.addEventListener('keydown', event => {
  trapDialogFocus(event);
  if (event.key !== 'Escape' || !activeDialog) return;
  if (activeDialog.id === 'exitSheet') keepPlaying();
  else if (activeDialog.id === 'reportSheet') closeReport();
  else closeDialog(activeDialog.id);
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    timerWasRunningBeforeHidden = pauseTimer();
    releaseWakeLock();
  } else {
    if (timerWasRunningBeforeHidden && !$('gameShell').hidden && !roundClosed && !activeDialog) startTimer();
    timerWasRunningBeforeHidden = false;
    if (!$('gameShell').hidden) requestWakeLock();
    retryPendingReports();
  }
});
window.addEventListener('pagehide', () => { pauseTimer(); persistSession(); });
window.addEventListener('online', retryPendingReports);
window.addEventListener('popstate', () => {
  if (!$('gameShell').hidden) {
    try { history.pushState({majlisGame: true}, '', location.href); } catch {}
    if (!activeDialog) openExitConfirmation();
  } else if (!$('setupScreen').hidden) showScreen('welcomeScreen');
});

let installPrompt;
function openInstallSheet() {
  $('installNative').hidden = !installPrompt;
  openDialog('installSheet', 'installClose', {pauseGame: false});
}
function closeInstallSheet() { closeDialog('installSheet'); }
async function runNativeInstall() {
  if (!installPrompt) { openInstallSheet(); return; }
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  $('installNative').hidden = true;
}
window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); installPrompt = event; });
window.addEventListener('appinstalled', () => {
  $('install').textContent = 'Installed';
  setTimeout(() => $('install').textContent = 'Install App', 2200);
});
window.addEventListener('resize', scheduleCardFit);
$('install').onclick = () => installPrompt ? runNativeInstall() : openInstallSheet();
$('installNative').onclick = runNativeInstall;
$('installClose').onclick = closeInstallSheet;
$('installSheet').onclick = event => { if (event.target === $('installSheet')) closeInstallSheet(); };

updateSoundToggle();
updateReportCount();
updateResumeAvailability();
retryPendingReports();
if ('serviceWorker' in navigator) window.addEventListener('load', async () => {
  try {
    const registration = await navigator.serviceWorker.register('./service-worker.js?v=29', {updateViaCache: 'none'});
    registration.update().catch(() => {});
  } catch {}
});
showScreen('welcomeScreen');
