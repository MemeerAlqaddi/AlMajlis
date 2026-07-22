import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const app = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const sw = fs.readFileSync(new URL('../service-worker.js', import.meta.url), 'utf8');
const manifest = JSON.parse(fs.readFileSync(new URL('../manifest.webmanifest', import.meta.url), 'utf8'));

for (const asset of ['./styles.css','./cards-data.js','./app.js']) {
  assert.ok(html.includes(asset), `index loads ${asset}`);
  assert.ok(sw.includes(asset), `offline cache includes ${asset}`);
}
assert.match(manifest.description, /605-card/);
assert.ok(!html.includes('id="next"'), 'redundant Next Card control removed');
assert.equal((html.match(/class="action(?:\s|")/g) || []).length, 4, 'gameplay has four action controls');
assert.ok(html.includes('id="undoPoint"'), 'undo point control exists');
assert.ok(app.includes("conversation: ['Conversation Shuffle'"), 'conversation shuffle exists');
assert.ok(app.includes("all: ['Game Night Shuffle'"), 'competitive shuffle exists');
assert.ok(app.includes('REPORT_ENDPOINT'), 'email report delivery is configured');
assert.ok(html.includes('aria-hidden="true"') && app.includes("setAttribute('aria-hidden'"), 'hidden answers are removed from accessibility output');
console.log('static: assets, controls, metadata, reporting, and accessibility passed');
