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

const objectiveTypes = new Set(['say', 'arabish', 'ayah', 'trivia', 'identity']);
const conversationTypes = new Set(['mizan', 'reflection']);
const competitiveModes = new Set(['all', 'say', 'arabish', 'ayah', 'trivia', 'identity']);
const soloFriendly = new Set(['arabish', 'ayah', 'trivia', 'identity', 'conversation', 'mizan', 'reflection']);
const modeTimes = {all: 60, say: 60, arabish: 90, ayah: 90, trivia: 90, identity: 90, conversation: 0, mizan: 0, reflection: 0};
const styleNames = {teams: 'Teams', duel: '1 vs 1', casual: 'Just for Fun', solo: 'Solo'};
const REPORTS_KEY = 'al-majlis-card-reports-v2';
const SOUND_KEY = 'al-majlis-sound-v1';
const REPORT_EMAIL = ['m.alqaddi', 'outlook.com'].join('@');
const REPORT_ENDPOINT = `https://formsubmit.co/ajax/${REPORT_EMAIL}`;
const totalRounds = 3;
const $ = id => document.getElementById(id);

let mode = null;
let playStyle = null;
let deck = [];
let i = 0;
let scores = {a: 0, b: 0};
let seconds = 60;
let tick;
let activeSide = 'a';
let countdownTick;
let countdownTimeout;
let roundNumber = 1;
let roundStartScore = 0;
let roundLog = [];
let pointEvents = [];
let roundClosed = false;
let matchComplete = false;
let sessionBase = '';
let currentSetupStep = 'modeStep';
let soundEnabled = localStorage.getItem(SOUND_KEY) !== 'off';
let lastReport = null;
let reportShouldResume = false;
let toastTimer;
let lastFocusedBeforeDialog = null;

const sounds = typeof Audio === 'undefined' ? {} : {
  open: new Audio('./majlis-open.mp3'),
  select: new Audio('./majlis-select.mp3'),
  ready: new Audio('./majlis-ready.mp3'),
  correct: new Audio('./majlis-correct.mp3'),
  complete: new Audio('./majlis-complete.mp3')
};
Object.values(sounds).forEach(audio => { audio.preload = 'auto'; audio.volume = .72; });

function playSound(name) {
  if (!soundEnabled || !sounds[name]) return;
  const audio = sounds[name];
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function getCardId(card) { return card[card[0] === 'ayah' ? 8 : 4]; }
function getCardSource(card) { return card[0] === 'ayah' ? card[7] : card[3]; }
function getCardAnswer(card) { return card[0] === 'ayah' ? card[4] : card[2]; }
function isConversationCard(card) { return conversationTypes.has(card[0]); }
function isCompetitive() { return ['teams', 'duel'].includes(playStyle); }
function isConversationMode() { return ['conversation', 'mizan', 'reflection'].includes(mode); }
function deckFor(selectedMode) {
  if (selectedMode === 'all') return cards.filter(card => objectiveTypes.has(card[0]));
  if (selectedMode === 'conversation') return cards.filter(card => conversationTypes.has(card[0]));
  return cards.filter(card => card[0] === selectedMode);
}

function updateSoundToggle() {
  $('soundToggle').textContent = `Sound · ${soundEnabled ? 'On' : 'Off'}`;
  $('soundToggle').setAttribute('aria-pressed', String(soundEnabled));
}

function getReports() {
  try {
    const value = JSON.parse(localStorage.getItem(REPORTS_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch { return []; }
}

function saveReports(reports) {
  localStorage.setItem(REPORTS_KEY, JSON.stringify(reports));
  updateReportCount();
}

function updateReportCount() {
  const count = getReports().length;
  $('reportCount').textContent = count;
  $('reportsOpen').setAttribute('aria-label', `${count} saved card report${count === 1 ? '' : 's'}`);
}

function currentCardReport() {
  const card = deck[i % deck.length];
  return {
    cardId: getCardId(card),
    mode: modes[card[0]][0],
    prompt: card[1],
    answer: getCardAnswer(card),
    source: getCardSource(card),
    contentVersion: '24'
  };
}

function showToast(message) {
  clearTimeout(toastTimer);
  $('softToast').textContent = message;
  $('softToast').classList.add('show');
  toastTimer = setTimeout(() => $('softToast').classList.remove('show'), 1800);
}

function openDialog(id, focusId) {
  lastFocusedBeforeDialog = document.activeElement;
  $(id).hidden = false;
  $(focusId)?.focus();
}

function closeDialog(id) {
  if ($(id).hidden) return;
  $(id).hidden = true;
  lastFocusedBeforeDialog?.focus?.();
}

function pauseForReport() {
  reportShouldResume = Boolean(modeTimes[mode] && seconds > 0 && !roundClosed && $('countdownScreen').hidden);
  clearInterval(tick);
}

function resumeAfterReport() {
  if (!reportShouldResume) return;
  reportShouldResume = false;
  startTimer();
}

function openReport() {
  pauseForReport();
  const card = currentCardReport();
  $('reportCardMeta').textContent = `${card.mode} · ${card.cardId}`;
  $('reportForm').reset();
  $('reportForm').hidden = false;
  $('reportThanks').hidden = true;
  openDialog('reportSheet', 'reportClose');
}

function closeReport() {
  if ($('reportSheet').hidden) return;
  closeDialog('reportSheet');
  resumeAfterReport();
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
  return result;
}

function renderReportSummary() {
  const reports = getReports();
  const counts = {};
  reports.forEach(report => counts[report.issue] = (counts[report.issue] || 0) + 1);
  $('reportSummary').innerHTML = reports.length
    ? `<div class="reportSummaryRow"><span>Total cards flagged</span><b>${reports.length}</b></div>${Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([issue, count]) => `<div class="reportSummaryRow"><span>${issue}</span><b>${count}</b></div>`).join('')}`
    : '<div class="reportEmpty">No cards have been flagged on this device.</div>';
  $('reportExport').hidden = !reports.length;
}

function exportReports() {
  const reports = getReports();
  const quote = value => `"${String(value ?? '').replace(/"/g, '""')}"`;
  const rows = [
    ['Card ID', 'Mode', 'Issue', 'Note', 'Prompt', 'Answer', 'Source', 'Content version', 'Reported at'],
    ...reports.map(report => [report.cardId, report.mode, report.issue, report.note, report.prompt, report.answer, report.source, report.contentVersion, report.reportedAt])
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

const arabicDisplay = value => value.replace(/ۡ/g, 'ْ').replace(/[ۣۖۗۘۙۚۛۜ۟۠ۢۤۥۦۧۨ۩۪ۭ۫۬]/g, '');

function shuffle(items) {
  const copy = [...items];
  for (let n = copy.length - 1; n > 0; n--) {
    const j = Math.floor(Math.random() * (n + 1));
    [copy[n], copy[j]] = [copy[j], copy[n]];
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
    const active = screenId === id;
    element.hidden = !active;
    element.classList.remove('screenEntering');
    if (active) { void element.offsetWidth; element.classList.add('screenEntering'); }
  });
  document.body.classList.toggle('roundActive', id === 'gameShell');
  resetViewport();
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

  const canCompete = competitiveModes.has(selectedMode);
  const canSolo = soloFriendly.has(selectedMode);
  const teamsButton = document.querySelector('[data-style="teams"]');
  const duelButton = document.querySelector('[data-style="duel"]');
  const soloButton = document.querySelector('[data-style="solo"]');
  teamsButton.disabled = !canCompete;
  duelButton.disabled = !canCompete;
  soloButton.disabled = !canSolo;
  teamsButton.querySelector('small').textContent = canCompete ? 'Two teams compete and alternate turns' : 'Conversation modes are not scored';
  duelButton.querySelector('small').textContent = canCompete ? 'Two players go head-to-head' : 'Conversation modes are not scored';
  soloButton.querySelector('small').textContent = canSolo ? 'Explore or challenge yourself at your own pace' : 'This mode needs at least two players';
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
  $('beginGame').textContent = isConversationMode() ? 'Begin Conversation' : 'Start Countdown';
  $('beginGame').disabled = !(mode && playStyle);
  showSetupStep('playersStep');
}

function modeCount(key) { return deckFor(key).length; }

Object.entries(modes).forEach(([key, value]) => {
  const button = document.createElement('button');
  const canCompete = competitiveModes.has(key);
  const canSolo = soloFriendly.has(key);
  const formats = canCompete ? `${canSolo ? 'SOLO · ' : ''}TEAMS · 1V1 · CASUAL` : 'CONVERSATION · NO SCORING';
  button.type = 'button';
  button.className = 'setupMode';
  button.dataset.mode = key;
  button.innerHTML = `<strong>${value[0]}</strong><small>${value[1]} · ${modeCount(key)} cards</small><span class="formatBadge">${formats}</span>`;
  button.onclick = () => selectSetupMode(key);
  $('setupModes').appendChild(button);
});

function prepareGame() {
  deck = shuffle(deckFor(mode));
  i = 0;
  scores = {a: 0, b: 0};
  activeSide = 'a';
  roundNumber = 1;
  roundStartScore = 0;
  roundLog = [];
  pointEvents = [];
  roundClosed = false;
  matchComplete = false;
  $('roundScreen').hidden = true;
  $('countdownScreen').hidden = true;
  $('matchFinal').hidden = true;
  $('undoPoint').hidden = true;
  $('currentMode').textContent = modes[mode][0];
  $('modeHelp').textContent = modes[mode][1];
  sessionBase = playStyle === 'teams' ? 'TEAMS' : playStyle === 'duel' ? '1 VS 1' : playStyle === 'solo' ? 'SOLO' : 'JUST FOR FUN';
  const competitive = isCompetitive();
  $('labelA').textContent = playStyle === 'duel' ? 'PLAYER 1' : 'TEAM A';
  $('labelB').textContent = playStyle === 'duel' ? 'PLAYER 2' : 'TEAM B';
  $('turnCard').style.display = competitive ? '' : 'none';
  document.querySelectorAll('.score').forEach(element => element.style.display = competitive ? '' : 'none');
  configureControls();
  updateScoreDisplay();
  updateTurn();
  render();
  showScreen('gameShell');
  startCountdown();
}

function configureControls() {
  const conversation = isConversationMode();
  $('correct').textContent = conversation ? 'Next Prompt' : isCompetitive() ? 'Correct +1' : 'Next Card';
  $('correct').classList.toggle('primary', conversation || !isCompetitive());
  $('skip').hidden = conversation;
  $('finishRound').textContent = conversation ? 'End Session' : isCompetitive() ? 'End Turn' : 'End Round';
  $('endRound').textContent = $('finishRound').textContent;
}

function updateScoreDisplay() {
  $('a').textContent = scores.a;
  $('b').textContent = scores.b;
}

function turnLabel(side = activeSide) {
  if (playStyle === 'teams') return side === 'a' ? 'Team A' : 'Team B';
  return side === 'a' ? 'Player 1' : 'Player 2';
}

function updateTurn() {
  const competitive = isCompetitive();
  $('activeTurn').textContent = turnLabel();
  $('roundStatus').textContent = competitive ? `ROUND ${roundNumber} OF ${totalRounds}` : `SESSION ${roundNumber}`;
  $('sessionLabel').textContent = `${sessionBase} · ${competitive ? `ROUND ${roundNumber}/${totalRounds}` : `SESSION ${roundNumber}`}`;
  document.querySelectorAll('.score').forEach((element, index) => element.style.outline = competitive && ((index === 0) === (activeSide === 'a')) ? '1px solid var(--aqua)' : 'none');
}

function startCountdown() {
  clearInterval(countdownTick);
  clearTimeout(countdownTimeout);
  clearInterval(tick);
  roundClosed = false;
  roundStartScore = scores[activeSide];
  pointEvents = [];
  seconds = modeTimes[mode];
  showTime();
  const competitive = isCompetitive();
  $('countdownMode').textContent = competitive ? `ROUND ${roundNumber} · ${turnLabel().toUpperCase()} · ${modes[mode][0].toUpperCase()}` : modes[mode][0].toUpperCase();
  $('countdownScreen').hidden = false;
  let count = 3;
  $('countdownNumber').textContent = count;
  countdownTick = setInterval(() => {
    count--;
    if (count > 0) $('countdownNumber').textContent = count;
    else {
      clearInterval(countdownTick);
      $('countdownNumber').textContent = 'GO';
      playSound('ready');
      countdownTimeout = setTimeout(() => {
        $('countdownScreen').hidden = true;
        $('question').focus({preventScroll: true});
        if (seconds) startTimer();
      }, 450);
    }
  }, 700);
}

function setAnswerVisible(visible) {
  $('answer').hidden = !visible;
  $('answer').setAttribute('aria-hidden', String(!visible));
  $('answerRule').hidden = !visible;
  $('ref').hidden = !visible;
  $('reveal').setAttribute('aria-expanded', String(visible));
  scheduleCardFit();
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
  const card = deck[i % deck.length];
  const isAyah = card[0] === 'ayah';
  const isReflection = card[0] === 'reflection';
  const isDilemma = card[0] === 'mizan';
  const isWord = card[0] === 'say';
  const dense = !isAyah && !isReflection && (card[1].length > 105 || card[2].length > 130);
  const source = getCardSource(card);

  $('type').textContent = modes[card[0]][0].toUpperCase();
  $('question').textContent = isAyah ? arabicDisplay(card[1]) : card[1];
  $('gameCard').classList.toggle('ayahCard', isAyah);
  $('gameCard').classList.toggle('reflectionCard', isReflection);
  $('gameCard').classList.toggle('dense', dense);
  $('promptTransliteration').textContent = isAyah ? card[2] : '';
  $('promptTranslation').textContent = isAyah ? card[3] : '';
  $('answerMain').textContent = isAyah ? arabicDisplay(card[4]) : card[2];
  $('answerTransliteration').textContent = isAyah ? card[5] : '';
  $('answerTranslation').textContent = isAyah ? card[6] : '';
  $('ref').dataset.source = source;
  $('ref').textContent = source;
  $('reveal').hidden = isWord || isReflection;
  $('reveal').textContent = isDilemma ? 'Considerations' : 'Reveal';
  setAnswerVisible(isWord);
  if (isReflection) {
    $('answer').hidden = true;
    $('answerRule').hidden = true;
    $('ref').hidden = true;
  }
  $('num').textContent = getCardId(card);
  $('progress').textContent = `${i + 1} / ${deck.length}`;
  $('deckLabel').textContent = modes[mode][0].toUpperCase();
  $('timerHint').textContent = modeTimes[mode] ? `${modeTimes[mode]}-second round` : 'Untimed conversation';
  $('start').disabled = !seconds;
  scheduleCardFit();
}

function advance() {
  if (i + 1 >= deck.length) {
    const last = deck[i];
    deck = shuffle(deck);
    if (deck.length > 1 && deck[0] === last) [deck[0], deck[1]] = [deck[1], deck[0]];
    i = 0;
  } else i++;
  render();
  $('question').focus({preventScroll: true});
}

function revealAnswer() {
  const visible = !$('answer').hidden;
  setAnswerVisible(!visible);
  $('reveal').textContent = visible ? (deck[i][0] === 'mizan' ? 'Considerations' : 'Reveal') : 'Hide';
}

function awardAndAdvance() {
  if (isCompetitive()) {
    scores[activeSide]++;
    pointEvents.push({side: activeSide, cardId: getCardId(deck[i])});
    updateScoreDisplay();
    playSound('correct');
  }
  advance();
}

function showTime() {
  const display = seconds || '—';
  const low = seconds > 0 && seconds <= 10;
  $('timer').textContent = display;
  $('playTimer').textContent = display;
  $('timer').classList.toggle('low', low);
  $('playTimer').classList.toggle('low', low);
}

function startTimer() {
  if (!seconds || roundClosed) return;
  clearInterval(tick);
  tick = setInterval(() => {
    seconds--;
    showTime();
    if (seconds <= 0) {
      clearInterval(tick);
      navigator.vibrate?.([150, 80, 150]);
      endRound();
    }
  }, 1000);
}

function renderRoundHistory() {
  $('roundHistory').innerHTML = roundLog.map(entry => `<div class="historyRow"><span>Round ${entry.round} · ${entry.label}</span><b>+${entry.points}</b></div>`).join('');
}

function showMatchWinner() {
  matchComplete = true;
  $('roundHeading').textContent = 'MATCH COMPLETE';
  $('roundResult').textContent = scores.a === scores.b ? 'It’s a tie!' : `${turnLabel(scores.a > scores.b ? 'a' : 'b')} wins!`;
  $('roundScore').textContent = `Final score · ${$('labelA').textContent} ${scores.a} — ${$('labelB').textContent} ${scores.b}`;
  $('finalLabelA').textContent = $('labelA').textContent;
  $('finalLabelB').textContent = $('labelB').textContent;
  $('finalA').textContent = scores.a;
  $('finalB').textContent = scores.b;
  renderRoundHistory();
  $('matchFinal').hidden = false;
  $('nextRound').textContent = 'Play Again';
}

function updateBetweenTurnSummary() {
  const latest = roundLog.at(-1);
  const label = latest.label;
  $('roundScore').textContent = `${label} earned ${latest.points} point${latest.points === 1 ? '' : 's'} · Match score ${$('labelA').textContent} ${scores.a} — ${$('labelB').textContent} ${scores.b}`;
  $('undoPoint').hidden = latest.points < 1;
}

function endRound() {
  if (roundClosed) return;
  roundClosed = true;
  playSound('complete');
  clearInterval(tick);
  clearInterval(countdownTick);
  clearTimeout(countdownTimeout);
  $('countdownScreen').hidden = true;
  $('matchFinal').hidden = true;
  $('undoPoint').hidden = true;
  $('nextRound').textContent = 'Next Round';

  if (isCompetitive()) {
    const entry = {round: roundNumber, side: activeSide, label: turnLabel(), points: Math.max(0, scores[activeSide] - roundStartScore)};
    roundLog.push(entry);
    $('roundHeading').textContent = 'TURN COMPLETE';
    updateBetweenTurnSummary();
    if (roundNumber === totalRounds && activeSide === 'b') showMatchWinner();
    else if (activeSide === 'a') {
      $('roundResult').textContent = `${entry.label} finished · ${turnLabel('b')} is next`;
      $('nextRound').textContent = 'Next Turn';
    } else $('roundResult').textContent = `Round ${roundNumber} finished · Round ${roundNumber + 1} is next`;
  } else {
    $('roundHeading').textContent = isConversationMode() ? 'SESSION COMPLETE' : 'ROUND COMPLETE';
    $('roundResult').textContent = isConversationMode() ? 'Conversation paused' : `Round ${roundNumber} finished`;
    $('roundScore').textContent = 'Continue only when everyone is ready.';
  }
  $('roundScreen').hidden = false;
  $('nextRound').focus();
}

function undoLastPoint() {
  const latest = roundLog.at(-1);
  if (!latest || latest.side !== activeSide || latest.points < 1 || scores[activeSide] < 1) return;
  scores[activeSide]--;
  latest.points--;
  pointEvents.pop();
  updateScoreDisplay();
  updateBetweenTurnSummary();
  if (matchComplete) showMatchWinner();
  showToast('Last point removed');
}

function setTime(value) {
  clearInterval(tick);
  seconds = value;
  $('start').disabled = false;
  $('timerHint').textContent = `${value}-second round selected`;
  showTime();
}

function beginNextRound() {
  if (matchComplete) { prepareGame(); return; }
  $('roundScreen').hidden = true;
  if (isCompetitive()) {
    if (activeSide === 'a') activeSide = 'b';
    else { activeSide = 'a'; roundNumber++; }
  } else roundNumber++;
  updateTurn();
  startCountdown();
}

function goHome() {
  clearInterval(tick);
  clearInterval(countdownTick);
  clearTimeout(countdownTimeout);
  $('roundScreen').hidden = true;
  $('countdownScreen').hidden = true;
  showScreen('welcomeScreen');
}

$('openSetup').onclick = () => { playSound('open'); showScreen('setupScreen'); resetSetup(); };
$('setupBack').onclick = () => {
  if (currentSetupStep === 'playersStep') showSetupStep('styleStep');
  else if (currentSetupStep === 'styleStep') showSetupStep('modeStep');
  else showScreen('welcomeScreen');
};
document.querySelectorAll('.styleChoice').forEach(button => button.onclick = () => selectStyle(button.dataset.style));
$('beginGame').onclick = prepareGame;
$('reveal').onclick = revealAnswer;
$('skip').onclick = advance;
$('correct').onclick = awardAndAdvance;
$('finishRound').onclick = endRound;
$('endRound').onclick = endRound;
$('start').onclick = startTimer;
$('reset').onclick = () => { clearInterval(tick); seconds = modeTimes[mode]; showTime(); };
$('thirty').onclick = () => setTime(30);
$('sixty').onclick = () => setTime(60);
$('ninety').onclick = () => setTime(90);
$('nextRound').onclick = beginNextRound;
$('undoPoint').onclick = undoLastPoint;
$('gameHome').onclick = goHome;
$('roundHome').onclick = goHome;

$('soundToggle').onclick = () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem(SOUND_KEY, soundEnabled ? 'on' : 'off');
  updateSoundToggle();
  if (soundEnabled) playSound('select');
};

$('reportCard').onclick = openReport;
$('reportClose').onclick = closeReport;
$('reportDone').onclick = closeReport;
$('reportSheet').onclick = event => { if (event.target === $('reportSheet')) closeReport(); };
$('reportForm').onsubmit = async event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const report = {...currentCardReport(), issue: data.get('reportIssue'), note: $('reportNote').value.trim(), reportedAt: new Date().toISOString()};
  const reports = getReports();
  reports.push(report);
  saveReports(reports);
  lastReport = report;
  $('reportForm').hidden = true;
  $('reportThanks').hidden = false;
  $('reportThanksText').textContent = 'Sending your report…';
  $('reportShare').hidden = true;
  $('reportDone').focus();
  try {
    await sendReportByEmail(report);
    $('reportThanksText').textContent = 'Your report was sent for review. The game is exactly where you left it.';
    showToast('Report sent');
  } catch {
    $('reportThanksText').textContent = 'It is saved safely on this device, but email delivery did not complete.';
    $('reportShare').hidden = false;
    showToast('Saved locally — email unavailable');
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
$('reportsOpen').onclick = () => { renderReportSummary(); openDialog('reportsSheet', 'reportsClose'); };
$('reportsClose').onclick = () => closeDialog('reportsSheet');
$('reportsSheet').onclick = event => { if (event.target === $('reportsSheet')) closeDialog('reportsSheet'); };
$('reportExport').onclick = exportReports;

$('contentNotesOpen').onclick = () => openDialog('contentNotesSheet', 'contentNotesClose');
$('contentNotesClose').onclick = () => closeDialog('contentNotesSheet');
$('contentNotesSheet').onclick = event => { if (event.target === $('contentNotesSheet')) closeDialog('contentNotesSheet'); };

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (!$('reportSheet').hidden) closeReport();
  else if (!$('reportsSheet').hidden) closeDialog('reportsSheet');
  else if (!$('contentNotesSheet').hidden) closeDialog('contentNotesSheet');
  else if (!$('installSheet').hidden) closeInstallSheet();
});

let installPrompt;
function openInstallSheet() {
  $('installNative').hidden = !installPrompt;
  openDialog('installSheet', 'installClose');
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
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));
showScreen('welcomeScreen');
