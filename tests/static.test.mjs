import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const app = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const css = fs.readFileSync(new URL('../styles.css', import.meta.url), 'utf8');
const sw = fs.readFileSync(new URL('../service-worker.js', import.meta.url), 'utf8');
const manifest = JSON.parse(fs.readFileSync(new URL('../manifest.webmanifest', import.meta.url), 'utf8'));

for (const asset of ['./styles.css','./cards-data.js','./app.js']) {
  assert.ok(html.includes(asset), `index loads ${asset}`);
  assert.ok(sw.includes(asset), `offline cache includes ${asset}`);
}
assert.match(manifest.description, /605-card/);
assert.equal(manifest.start_url, './index.html?v=34');
assert.match(sw, /al-majlis-v34/);
assert.ok(html.includes('./styles.css?v=34') && html.includes('./cards-data.js?v=34') && html.includes('./app.js?v=34'), 'core assets use release-specific URLs');
assert.match(sw, /fetch\(request\)[\s\S]*catch\(\(\) => caches\.match\(request\)\)/, 'core assets update from the network before falling back offline');
assert.match(sw, /request\.method !== 'GET'/);
assert.match(sw, /url\.origin !== self\.location\.origin/);
assert.ok(!sw.includes('majlis-ready.mp3'), 'unused ready sound removed');

assert.equal((html.match(/class="action(?:\s|\")/g) || []).length, 4, 'gameplay has four action controls');
assert.ok(!html.includes('id="next"'), 'redundant Next Card control removed');
assert.ok(html.includes('id="cardHome"') && html.includes('id="exitSheet"'), 'card has a confirmed home control');
assert.ok(html.includes('id="resumeGame"') && app.includes('SESSION_KEY'), 'game recovery is available');
assert.ok(html.includes('id="sourceSheet"') && html.includes('aria-haspopup="dialog"'), 'full sources are expandable');
assert.ok(!html.includes('id="num"') && !html.includes('id="progress"'), 'card IDs and deck counts are absent from gameplay');
assert.ok(!html.includes('data-style="solo"'), 'Solo and Just for Fun are merged into one unscored option');
assert.equal((html.match(/class="styleChoice"/g) || []).length, 3, 'three play-style choices remain');

assert.ok(app.includes("title: 'Competitive Modes'") && app.includes("title: 'Conversational Modes'"), 'all modes share one grouped page');
assert.ok(!app.includes('modeCount(') && !app.includes('cards</small>'), 'mode tiles do not expose deck counts');
assert.match(app, /if \(isConversationMode\(\)\) \{\s*playStyle = 'conversation';\s*launchGame\(\)/);
assert.match(app, /if \(isConversationMode\(\)\) \{\s*seconds = 0;/);
assert.ok(app.includes('Date.now() + seconds * 1000') && app.includes("document.addEventListener('visibilitychange'"), 'timer is timestamp-based and lifecycle-aware');
assert.ok(app.includes("navigator.wakeLock.request('screen')"), 'active play requests a screen wake lock');
assert.ok(app.includes('lockAdvanceControls') && app.includes('undoRecentPoint'), 'rapid taps are locked and points can be undone');
assert.ok(app.includes('retryPendingReports') && app.includes("window.addEventListener('online'"), 'failed reports retry after reconnection');
assert.match(html, /Reports are sent through FormSubmit/);
assert.ok(html.includes('id="settingsOpen"') && !/<section class="screen welcomeScreen"[\s\S]*Reports <span/.test(html), 'reviewer queue is behind settings');
assert.ok(html.includes('aria-hidden="true"') && app.includes("setAttribute('aria-hidden'"), 'hidden answers stay outside accessibility output');
assert.match(css, /\.reportCardButton,.cardHomeButton\{[^}]*width:44px;height:44px/);
assert.match(css, /\.ref\{[^}]*font-size:11px/);
assert.ok(app.includes('trapDialogFocus') && app.includes('element.inert = inert'), 'dialogs trap focus and make the background inert');
assert.match(app, /contentVersion: String\(APP_VERSION\)/);
assert.ok(app.includes('const storage = {') && app.includes('catch { return false; }'), 'blocked browser storage cannot abort game launch');
assert.match(app, /five forbidden clues, their opposites, or their translations in another language/);
assert.match(app, /playRoundStartTone\(\)/);
assert.match(app, /const modeTimes = \{all: 60, say: 60, arabish: 60, ayah: 60, trivia: 60, identity: 60, conversation: 0, mizan: 0, reflection: 0\}/, 'every timed mode is exactly 60 seconds');
assert.match(app, /remaining > 0 && remaining <= 10/);
assert.match(css, /\.actions\{[^}]*display:flex[^}]*justify-content:center/);
assert.match(html, /class="roundActions"/);
assert.match(css, /\.roundActions\{[^}]*display:flex[^}]*align-items:center[^}]*justify-content:center/);
assert.match(css, /\.playStyles\{grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/);
assert.match(css, /html\.roundActive,html\.roundActive body\{[^}]*height:var\(--game-height,100dvh\)[^}]*overflow:hidden/);
assert.match(css, /#gameShell:not\(\[hidden\]\)\{[^}]*height:var\(--game-height,100dvh\)[^}]*overflow:hidden/);
assert.ok(app.includes('window.visualViewport?.height') && app.includes("document.documentElement.classList.toggle('roundActive'"), 'gameplay follows and locks the actual visible phone viewport');
assert.ok(app.includes("document.addEventListener('touchmove'") && app.includes("{passive: false}"), 'gameplay rubber-band scrolling is blocked');
assert.ok(html.includes('id="install" type="button" hidden') && app.includes('isInstalledMode') && app.includes("window.addEventListener('appinstalled'"), 'Install App hides in installed mode and after installation');
assert.match(html, /class="welcomeMain"[\s\S]*class="welcomeUtilities"/, 'home utilities follow the main launch content');
assert.match(css, /\.welcomeScreen\{[^}]*display:grid[^}]*grid-template-rows:minmax\(0,1fr\) auto/);
assert.match(css, /\.welcomeUtilities\{[^}]*justify-self:center[^}]*margin-top:24px/, 'home utilities stay in a spaced bottom row');
assert.ok(html.includes('id="decodeDialect"') && app.includes("card.type === 'arabish' ? card.source"), 'Decode dialect label is visible independently of Reveal');
assert.doesNotMatch(css.match(/\.decodeDialect\{[^}]*\}/)?.[0] || '', /background\s*:/, 'Decode dialect label has no bar background');
assert.match(app, /else roundNumber\+\+;\s*advance\(\);\s*if \(isConversationMode\(\)\)/, 'resuming after a round advances to a fresh card');

console.log('static: lifecycle, recovery, reporting, controls, sources, and accessibility passed');
