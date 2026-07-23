const modes = {
  all: ['Game Night Shuffle', 'A competitive mix of all five answer-based games.'],
  say: ['Guess The Word', 'Describe the word without using any of the seven forbidden clues, their opposites, or their translations in another language.'],
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
  say: 'Hand the phone to the clue-giver. Keep the word and forbidden clues hidden from the guessing side. You may not use a forbidden clue, its opposite, or translate it into another language.',
  arabish: 'Hand the phone to the reader. Read the sound-spelling aloud; the other side guesses the Arabic phrase.',
  ayah: 'Only the player taking the turn should see the screen before the answer is revealed.',
  trivia: 'Only the player reading the question should see the answer before Reveal.',
  identity: 'Read the clues aloud without showing the answer to the guessing side.'
};

const objectiveTypes = new Set(['say', 'arabish', 'ayah', 'trivia', 'identity']);
const conversationTypes = new Set(['mizan', 'reflection']);
const competitiveModes = new Set(['all', 'say', 'arabish', 'ayah', 'trivia', 'identity']);
const modeTimes = {all: 60, say: 60, arabish: 60, ayah: 60, trivia: 60, identity: 60, conversation: 0, mizan: 0, reflection: 0};
const styleNames = {teams: 'Teams', duel: '1 vs 1', casual: 'Just for Fun', conversation: 'Untimed conversation'};
const SOUND_KEY = 'al-majlis-sound-v42';
const THEME_KEY = 'al-majlis-theme-v1';
const APP_VERSION = 42;
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
let lastTimerCueSecond = null;
let activeSide = 'a';
let countdownTick = null;
let roundNumber = 1;
let roundStartScore = 0;
let roundLog = [];
let pointEvents = [];
let roundClosed = false;
let matchComplete = false;
let currentSetupStep = 'modeStep';
let selectedCategory = null;
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
let activeTheme = storage.get(THEME_KEY) === 'dark' ? 'dark' : 'light';
let countdownAudioContext = null;
let lastReport = null;
let toastTimer = null;
let controlsLocked = false;
let activeDialog = null;
let dialogResumeTimer = false;
let lastFocusedBeforeDialog = null;
let wakeLock = null;
let restoredAnswerVisible = false;

const sounds = typeof Audio === 'undefined' ? {} : {
  open: new Audio('./majlis-open.mp3'),
  select: new Audio('./majlis-select.mp3'),
  correct: new Audio('./majlis-correct.mp3'),
  complete: new Audio('./majlis-complete.mp3')
};
const soundVolumes = {open: .9, select: .78, correct: .92, complete: .82};
Object.entries(sounds).forEach(([name, audio]) => {
  audio.preload = 'auto';
  audio.volume = soundVolumes[name];
  audio.load?.();
});

function audioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass || !soundEnabled) return null;
  try { return countdownAudioContext ||= new AudioContextClass(); }
  catch { return null; }
}

function playSoundFallback(name) {
  if (name === 'open') {
    playTone(392, {duration: .15, peak: .032});
    playTone(523.25, {delay: .09, duration: .22, peak: .038});
  } else if (name === 'select') {
    playTone(659.25, {duration: .12, peak: .028});
  } else if (name === 'correct') playPointTone();
  else if (name === 'complete') {
    playTone(523.25, {duration: .16, peak: .032});
    playTone(659.25, {delay: .1, duration: .2, peak: .038});
  }
}

function playSound(name) {
  if (!soundEnabled || !sounds[name]) return;
  primeAudio();
  const audio = sounds[name];
  audio.currentTime = 0;
  try {
    const attempt = audio.play();
    attempt?.catch?.(() => playSoundFallback(name));
  } catch { playSoundFallback(name); }
}

function primeAudio() {
  Object.values(sounds).forEach(audio => audio.load?.());
  if (!soundEnabled) return;
  const context = audioContext();
  if (context?.state === 'suspended') context.resume().catch(() => {});
}

function playTone(frequency, {delay = 0, duration = .12, peak = .018, type = 'sine'} = {}) {
  if (!soundEnabled) return;
  const context = audioContext();
  if (!context) return;
  const schedule = () => {
    try {
    const now = context.currentTime + delay;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(peak, now + .012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + duration + .01);
    } catch {}
  };
  if (context.state === 'suspended') context.resume().then(schedule).catch(() => {});
  else schedule();
}

function playCountdownTone(value) {
  const notes = {3: 392, 2: 440, 1: 523.25};
  playTone(notes[value] || 440, {duration: .18, peak: .022});
}

function playRoundStartTone() {
  playTone(659.25, {duration: .16, peak: .034});
  playTone(880, {delay: .105, duration: .2, peak: .04});
}

function playPointTone() {
  playTone(783.99, {duration: .1, peak: .034, type: 'sine'});
  playTone(1046.5, {delay: .075, duration: .19, peak: .042, type: 'sine'});
}

function playPassTone() {
  playTone(246.94, {duration: .12, peak: .025, type: 'triangle'});
  playTone(174.61, {delay: .085, duration: .2, peak: .029, type: 'triangle'});
}

function playFinalSecondsTick() {
  playTone(760, {duration: .055, peak: .012, type: 'triangle'});
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

function applyTheme(theme, {save = false} = {}) {
  activeTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = activeTheme;
  document.documentElement.style.colorScheme = activeTheme;
  $('themeLight').setAttribute('aria-pressed', String(activeTheme === 'light'));
  $('themeDark').setAttribute('aria-pressed', String(activeTheme === 'dark'));
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', activeTheme === 'dark' ? '#0a0c0d' : '#ecebea');
  document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')?.setAttribute('content', activeTheme === 'dark' ? 'black-translucent' : 'default');
  if (save) storage.set(THEME_KEY, activeTheme);
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
  return `Al Majlis card report\n${report.mode} · ${report.cardId}\nIssue: ${report.issue}\nPrompt: ${report.prompt}\nAnswer: ${report.answer}\nSource: ${report.source}${report.note ? `\nNote: ${report.note}` : ''}`;
}

async function sendReportByEmail(report) {
  const response = await fetch(REPORT_ENDPOINT, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Accept: 'application/json'},
    body: JSON.stringify({
      _subject: `Al Majlis card report · ${report.cardId}`,
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

function showToast(message) {
  clearTimeout(toastTimer);
  $('softToast').textContent = message;
  $('softToast').classList.add('show');
  toastTimer = setTimeout(() => $('softToast').classList.remove('show'), 1900);
}

function setBackgroundInert(dialog, inert) {
  [...document.body.children].forEach(element => {
    if (element === dialog || element.tagName === 'SCRIPT' || element.id === 'softToast') return;
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

function syncGameplayViewport() {
  const visibleHeight = Math.round(window.visualViewport?.height || window.innerHeight || document.documentElement.clientHeight);
  if (visibleHeight > 0) document.documentElement.style.setProperty('--game-height', `${visibleHeight}px`);
  scheduleCardFit();
}

function showScreen(id) {
  ['welcomeScreen', 'setupScreen', 'gameShell'].forEach(screenId => {
    const element = $(screenId);
    element.hidden = screenId !== id;
  });
  document.body.classList.toggle('roundActive', id === 'gameShell');
  document.documentElement.classList.toggle('roundActive', id === 'gameShell');
  syncGameplayViewport();
  resetViewport();
  if (id === 'gameShell') requestWakeLock();
  else releaseWakeLock();
}

function showSetupStep(step) {
  currentSetupStep = step;
  ['modeStep', 'styleStep', 'playersStep'].forEach(id => $(id).hidden = id !== step);
  $('setupBack').textContent = step === 'modeStep' ? (selectedCategory ? '← Game categories' : '← Home') : step === 'styleStep' ? '← Game modes' : '← Play styles';
  resetViewport();
  const heading = $(step).querySelector('h2');
  heading?.setAttribute('tabindex', '-1');
  heading?.focus({preventScroll: true});
}

function resetSetup() {
  mode = null;
  playStyle = null;
  selectedCategory = null;
  document.querySelectorAll('.setupMode,.styleChoice').forEach(element => element.classList.remove('selected'));
  document.querySelectorAll('.styleChoice').forEach(element => element.disabled = false);
  $('matchField').hidden = true;
  $('beginGame').disabled = true;
  showCategoryChoices();
  showSetupStep('modeStep');
}

function showCategoryChoices() {
  selectedCategory = null;
  $('categoryChoices').hidden = false;
  $('modeReveal').hidden = true;
  $('modeStepTitle').textContent = 'What are you in the mood for?';
  $('modeStepIntro').textContent = 'Choose the kind of gathering first. The matching games will appear next.';
  document.querySelectorAll('.categoryChoice').forEach(button => button.classList.remove('selected'));
  $('setupBack').textContent = '← Home';
  resetViewport();
}

function selectModeCategory(category) {
  if (!['competitive', 'conversation'].includes(category)) return;
  playSound('select');
  selectedCategory = category;
  $('categoryChoices').hidden = true;
  $('modeReveal').hidden = false;
  $('modeStepTitle').textContent = category === 'competitive' ? 'Choose a competitive game' : 'Choose a conversation';
  $('modeStepIntro').textContent = category === 'competitive'
    ? 'Knowledge, clues, and friendly competition. Choose the game for this round.'
    : 'Untimed, unscored prompts for a thoughtful gathering.';
  document.querySelectorAll('.modeGroup').forEach(group => { group.hidden = group.dataset.category !== category; });
  document.querySelectorAll('.categoryChoice').forEach(button => button.classList.toggle('selected', button.dataset.category === category));
  $('setupBack').textContent = '← Game categories';
  resetViewport();
  $('modeStepTitle').focus({preventScroll: true});
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
  document.querySelector('[data-style="teams"]').disabled = !canCompete;
  document.querySelector('[data-style="duel"]').disabled = !canCompete;
  $('styleModeName').textContent = modes[selectedMode][0];
  showSetupStep('styleStep');
}

function selectStyle(style) {
  if (['teams', 'duel'].includes(style) && !competitiveModes.has(mode)) return;
  playSound('select');
  playStyle = style;
  document.querySelectorAll('.styleChoice').forEach(element => element.classList.toggle('selected', element.dataset.style === style));
  const competitive = isCompetitive();
  $('matchField').hidden = !competitive;
  $('playersTitle').textContent = style === 'teams' ? 'Teams ready?' : style === 'duel' ? 'Ready for 1 vs 1?' : 'Ready to play?';
  $('selectedModeName').textContent = modes[mode][0];
  $('selectedStyleName').textContent = `${styleNames[style]}${competitive ? ' · 3 rounds' : ''}`;
  $('modeInstruction').textContent = modeInstructions[mode];
  $('beginGame').textContent = 'Start Game';
  $('beginGame').disabled = false;
  showSetupStep('playersStep');
}

const modeGroups = [
  {category: 'competitive', title: 'Competitive Games', note: 'Answer-based games with optional scoring and timed rounds.', keys: ['all', 'say', 'arabish', 'ayah', 'trivia', 'identity']},
  {category: 'conversation', title: 'Conversations', note: 'One simple format: untimed, unscored, and made for talking.', keys: ['conversation', 'mizan', 'reflection']}
];

modeGroups.forEach(group => {
  const section = document.createElement('section');
  section.className = 'modeGroup';
  section.dataset.category = group.category;
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

document.querySelectorAll('.categoryChoice').forEach(button => {
  button.onclick = () => selectModeCategory(button.dataset.category);
});
$('categoryReturn').onclick = showCategoryChoices;

function prepareGame() {
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
  $('matchScoreboard').hidden = true;
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
    console.error('Al Majlis could not start the selected game.', error);
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

function updateGameContext() {
  const conversation = isConversationMode();
  const side = conversation ? 'Conversation' : isCompetitive() ? sideLabel() : 'Just for Fun';
  const round = conversation ? 'Untimed' : `Round ${roundNumber}`;
  $('gameSide').textContent = side;
  $('gameRound').textContent = round;
  $('countdownSide').textContent = side;
  $('countdownRound').textContent = round;
}

function startCountdown() {
  clearInterval(countdownTick);
  pauseTimer();
  roundClosed = false;
  roundStartScore = scores[activeSide];
  pointEvents = [];
  seconds = modeTimes[mode];
  lastTimerCueSecond = null;
  showTime();
  updateGameContext();
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
      playRoundStartTone();
      startTimer();
    }
  }, 1000);
}

function setAnswerVisible(visible) {
  $('answer').hidden = !visible;
  $('answer').setAttribute('aria-hidden', String(!visible));
  $('answerRule').hidden = !visible;
  $('ref').hidden = !visible || currentCard()?.type === 'arabish';
  $('reveal').setAttribute('aria-expanded', String(visible));
  restoredAnswerVisible = visible;
  scheduleCardFit();
  persistSession();
}

function fitCardToViewport() {
  const card = $('gameCard');
  if (!card || $('gameShell').hidden) return;
  card.classList.remove('fitLevel1', 'fitLevel2', 'fitLevel3');
  if (card.scrollHeight > card.clientHeight) card.classList.add('fitLevel1');
  if (card.scrollHeight > card.clientHeight) card.classList.add('fitLevel2');
  if (card.scrollHeight > card.clientHeight) card.classList.add('fitLevel3');
}

function scheduleCardFit() { requestAnimationFrame(() => requestAnimationFrame(fitCardToViewport)); }

function decodeDisplay(card) {
  return card.prompt;
}

function render() {
  const card = currentCard();
  const isAyah = card.type === 'ayah';
  const isReflection = card.type === 'reflection';
  const isDilemma = card.type === 'mizan';
  const isWord = card.type === 'say';
  const dense = !isAyah && !isReflection && (card.prompt.length > 105 || card.answer.length > 130);
  const promptLong = !isAyah && card.prompt.length > 72;
  const promptVeryLong = !isAyah && card.prompt.length > 125;

  updateGameContext();

  $('type').textContent = modes[card.type][0].toUpperCase();
  $('question').textContent = isAyah ? arabicDisplay(card.prompt) : decodeDisplay(card);
  $('gameCard').classList.toggle('ayahCard', isAyah);
  $('gameCard').classList.toggle('reflectionCard', isReflection);
  $('gameCard').classList.toggle('wordCard', isWord);
  $('gameCard').classList.toggle('dense', dense);
  $('gameCard').classList.toggle('promptLong', promptLong);
  $('gameCard').classList.toggle('promptVeryLong', promptVeryLong);
  $('promptTransliteration').textContent = card.promptTransliteration || '';
  $('promptTranslation').textContent = card.promptTranslation || '';
  if (isWord) {
    const forbiddenWords = card.answer.replace(/^Do not say:\s*/i, '').split('·').map(word => word.trim()).filter(Boolean);
    const heading = document.createElement('span');
    heading.className = 'forbiddenHeading';
    heading.textContent = 'Do not say';
    const list = document.createElement('span');
    list.className = 'forbiddenList';
    list.setAttribute('aria-label', `Forbidden clues: ${forbiddenWords.join(', ')}`);
    forbiddenWords.forEach(word => {
      const item = document.createElement('span');
      item.className = 'forbiddenWord';
      item.textContent = word;
      list.append(item);
    });
    $('answerMain').replaceChildren(heading, list);
  } else {
    $('answerMain').textContent = isAyah ? arabicDisplay(card.answer) : card.answer;
  }
  $('answerTransliteration').textContent = card.answerTransliteration || '';
  $('answerTranslation').textContent = card.answerTranslation || '';
  $('ref').textContent = card.source;
  $('fullSource').textContent = card.source;
  $('decodeDialect').textContent = card.type === 'arabish' ? card.source : '';
  $('decodeDialect').hidden = card.type !== 'arabish';
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

function awardAndAdvance() {
  if (!lockAdvanceControls()) return;
  if (isCompetitive()) {
    scores[activeSide]++;
    pointEvents.push({side: activeSide, cardId: currentCard().id, undone: false});
  }
  // Correct, Next Card, and Next Prompt share the same positive chime.
  playSound('correct');
  advance();
}

function passAndAdvance() {
  if (!lockAdvanceControls()) return;
  playPassTone();
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
    if (remaining > 0 && remaining <= 10 && remaining !== lastTimerCueSecond) {
      lastTimerCueSecond = remaining;
      playFinalSecondsTick();
    }
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
  $('roundHistory').innerHTML = roundLog.map(entry => `<div class="historyRow"><span><small>Round ${entry.round}</small>${entry.label}</span><b>+${entry.points}</b></div>`).join('');
}

function updateMatchScoreboard() {
  $('finalLabelA').textContent = sideLabel('a');
  $('finalLabelB').textContent = sideLabel('b');
  $('finalA').textContent = scores.a;
  $('finalB').textContent = scores.b;
  $('matchScoreboard').hidden = false;
}

function showMatchWinner() {
  matchComplete = true;
  $('roundHeading').textContent = 'MATCH COMPLETE';
  $('roundResult').textContent = scores.a === scores.b ? 'It’s a tie!' : `${sideLabel(scores.a > scores.b ? 'a' : 'b')} wins!`;
  $('roundScore').textContent = 'Final score';
  updateMatchScoreboard();
  renderRoundHistory();
  $('matchFinal').hidden = false;
  $('nextRound').textContent = 'Play Again';
}

function updateBetweenTurnSummary() {
  const latest = roundLog.at(-1);
  $('roundScore').textContent = `${latest.label} scored ${latest.points} point${latest.points === 1 ? '' : 's'} this turn`;
  updateMatchScoreboard();
  $('undoPoint').hidden = latest.points < 1;
}

function renderClosedRound() {
  $('matchFinal').hidden = true;
  $('matchScoreboard').hidden = true;
  $('undoPoint').hidden = true;
  if (isCompetitive()) {
    $('roundHeading').textContent = 'TURN COMPLETE';
    updateBetweenTurnSummary();
    if (matchComplete) showMatchWinner();
    else if (activeSide === 'a') {
      $('roundResult').textContent = `${sideLabel('b')} is up next`;
      $('nextRound').textContent = 'Next Turn';
    } else {
      $('roundResult').textContent = `Round ${roundNumber} complete`;
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
  advance();
  if (isConversationMode()) {
    $('question').focus({preventScroll: true});
    persistSession();
  } else startCountdown();
}

// Games intentionally end when the player returns home; no game state is stored.
function persistSession() {}

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
  showScreen('welcomeScreen');
}

$('openSetup').onpointerdown = primeAudio;
$('beginGame').onpointerdown = primeAudio;
$('nextRound').onpointerdown = primeAudio;
document.addEventListener('pointerdown', primeAudio, {capture: true});
document.addEventListener('touchstart', primeAudio, {capture: true, passive: true});
$('openSetup').onclick = () => { playSound('open'); showScreen('setupScreen'); resetSetup(); };
$('setupBack').onclick = () => {
  if (currentSetupStep === 'playersStep') showSetupStep('styleStep');
  else if (currentSetupStep === 'styleStep') showSetupStep('modeStep');
  else if (selectedCategory) showCategoryChoices();
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
$('themeLight').onclick = () => applyTheme('light', {save: true});
$('themeDark').onclick = () => applyTheme('dark', {save: true});

$('reportCard').onclick = openReport;
$('reportClose').onclick = closeReport;
$('reportDone').onclick = closeReport;
$('reportSheet').onclick = event => { if (event.target === $('reportSheet')) closeReport(); };
$('reportForm').onsubmit = async event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const report = {...currentCardReport(), issue: data.get('reportIssue'), note: $('reportNote').value.trim(), reportedAt: new Date().toISOString()};
  lastReport = report;
  $('reportForm').hidden = true;
  $('reportThanks').hidden = false;
  $('reportThanksText').textContent = 'Sending your report…';
  $('reportShare').hidden = true;
  $('reportDone').focus();
  try {
    await sendReportByEmail(report);
    $('reportThanksText').textContent = 'Your report was sent for review.';
    showToast('Report sent');
  } catch {
    $('reportThanksText').textContent = 'The report could not send. You can share it another way.';
    $('reportShare').hidden = false;
    showToast('Report not sent');
  }
};
$('reportShare').onclick = async () => {
  if (!lastReport) return;
  const text = reportText(lastReport);
  if (navigator.share) {
    try { await navigator.share({title: 'Al Majlis card report', text}); return; }
    catch (error) { if (error.name === 'AbortError') return; }
  }
  try { await navigator.clipboard.writeText(text); showToast('Report copied to share'); }
  catch { showToast('Could not copy report'); }
};

$('settingsOpen').onclick = () => openDialog('settingsSheet', 'settingsClose', {pauseGame: false});
$('settingsClose').onclick = () => closeDialog('settingsSheet');
$('settingsSheet').onclick = event => { if (event.target === $('settingsSheet')) closeDialog('settingsSheet'); };
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
  }
});
document.addEventListener('touchmove', event => {
  if (!document.body.classList.contains('roundActive')) return;
  if (event.target.closest?.('.sheetPanel,.installPanel,.roundPanel')) return;
  event.preventDefault();
}, {passive: false});
window.addEventListener('pagehide', pauseTimer);
window.addEventListener('popstate', () => {
  if (!$('gameShell').hidden) {
    try { history.pushState({majlisGame: true}, '', location.href); } catch {}
    if (!activeDialog) openExitConfirmation();
  } else if (!$('setupScreen').hidden) showScreen('welcomeScreen');
});

let installPrompt;
function isInstalledMode() {
  return window.matchMedia?.('(display-mode: standalone)').matches === true
    || window.navigator.standalone === true
    || document.referrer.startsWith('android-app://');
}
function updateInstallVisibility() {
  const installed = isInstalledMode();
  $('install').hidden = installed;
  if (installed) {
    installPrompt = null;
    $('installNative').hidden = true;
    if (!$('installSheet').hidden) closeInstallSheet();
  }
}
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
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  if (isInstalledMode()) return;
  installPrompt = event;
  $('install').hidden = false;
});
window.addEventListener('appinstalled', () => {
  installPrompt = null;
  $('installNative').hidden = true;
  updateInstallVisibility();
});
window.addEventListener('resize', syncGameplayViewport);
window.addEventListener('orientationchange', syncGameplayViewport);
window.visualViewport?.addEventListener('resize', syncGameplayViewport);
window.visualViewport?.addEventListener('scroll', syncGameplayViewport);
$('install').onclick = () => installPrompt ? runNativeInstall() : openInstallSheet();
$('installNative').onclick = runNativeInstall;
$('installClose').onclick = closeInstallSheet;
$('installSheet').onclick = event => { if (event.target === $('installSheet')) closeInstallSheet(); };

updateSoundToggle();
applyTheme(activeTheme);
syncGameplayViewport();
updateInstallVisibility();
if ('serviceWorker' in navigator) window.addEventListener('load', async () => {
  try {
    const registration = await navigator.serviceWorker.register('./service-worker.js?v=42', {updateViaCache: 'none'});
    registration.update().catch(() => {});
  } catch {}
});
showScreen('welcomeScreen');
