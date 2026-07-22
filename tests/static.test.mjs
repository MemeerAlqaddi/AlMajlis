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
assert.match(sw, /al-majlis-v29/);
assert.ok(html.includes('./styles.css?v=29') && html.includes('./cards-data.js?v=29') && html.includes('./app.js?v=29'), 'core assets use release-specific URLs');
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

console.log('static: lifecycle, recovery, reporting, controls, sources, and accessibility passed');
