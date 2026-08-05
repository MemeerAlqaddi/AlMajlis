import test from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/owner-access.js';

function responseMock() {
  return {
    headers: {},
    statusCode: 200,
    body: null,
    setHeader(name, value) { this.headers[name.toLowerCase()] = value; },
    status(code) { this.statusCode = code; return this; },
    json(body) { this.body = body; return this; }
  };
}

test('owner access is server-verified and restored by an HttpOnly cookie', () => {
  const previous = process.env.AL_MAJLIS_OWNER_KEY;
  process.env.AL_MAJLIS_OWNER_KEY = 'a-private-owner-code-over-20-characters';

  try {
    const rejected = responseMock();
    handler(
      {method: 'POST', headers: {}, body: {code: 'incorrect-owner-code'}},
      rejected
    );
    assert.equal(rejected.statusCode, 403);
    assert.equal(rejected.body.owner, undefined);

    const accepted = responseMock();
    handler(
      {
        method: 'POST',
        headers: {},
        body: {code: process.env.AL_MAJLIS_OWNER_KEY}
      },
      accepted
    );
    assert.equal(accepted.statusCode, 200);
    assert.equal(accepted.body.owner, true);
    assert.match(accepted.headers['set-cookie'], /HttpOnly; Secure; SameSite=Strict/);

    const restored = responseMock();
    handler(
      {method: 'GET', headers: {cookie: accepted.headers['set-cookie']}},
      restored
    );
    assert.equal(restored.statusCode, 200);
    assert.equal(restored.body.owner, true);
  } finally {
    if (previous === undefined) delete process.env.AL_MAJLIS_OWNER_KEY;
    else process.env.AL_MAJLIS_OWNER_KEY = previous;
  }
});
