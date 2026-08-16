import test from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/create-checkout-session.js';

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

test('checkout creates an embedded Stripe session with matching keys', async () => {
  const previousSecret = process.env.STRIPE_SECRET_KEY;
  const previousPublic = process.env.STRIPE_PUBLISHABLE_KEY;
  const previousFetch = global.fetch;
  process.env.STRIPE_SECRET_KEY = 'sk_test_example';
  process.env.STRIPE_PUBLISHABLE_KEY = 'pk_test_example';

  let requestBody = '';
  global.fetch = async (_url, options) => {
    requestBody = String(options.body);
    return {
      ok: true,
      async json() {
        return {
          id: 'cs_test_example',
          client_secret: 'cs_test_example_secret_example'
        };
      }
    };
  };

  try {
    const response = responseMock();
    await handler({
      method: 'POST',
      body: {product: 'bundle'},
      headers: {
        host: 'al-majlis-eight.vercel.app',
        'x-forwarded-proto': 'https'
      }
    }, response);

    assert.equal(response.statusCode, 200);
    assert.equal(response.body.sessionId, 'cs_test_example');
    assert.equal(response.body.publishableKey, 'pk_test_example');
    assert.match(requestBody, /ui_mode=embedded/);
    assert.match(requestBody, /metadata%5Bal_majlis_product%5D=bundle/);
    assert.match(requestBody, /unit_amount%5D=799/);
    assert.doesNotMatch(requestBody, /payment_method_types%5B1%5D/);
  } finally {
    global.fetch = previousFetch;
    if (previousSecret === undefined) delete process.env.STRIPE_SECRET_KEY;
    else process.env.STRIPE_SECRET_KEY = previousSecret;
    if (previousPublic === undefined) delete process.env.STRIPE_PUBLISHABLE_KEY;
    else process.env.STRIPE_PUBLISHABLE_KEY = previousPublic;
  }
});

test('checkout health reports only safe configuration status', async () => {
  const previousSecret = process.env.STRIPE_SECRET_KEY;
  const previousPublic = process.env.STRIPE_PUBLISHABLE_KEY;
  const previousOwner = process.env.AL_MAJLIS_OWNER_KEY;
  process.env.STRIPE_SECRET_KEY = 'sk_test_example';
  process.env.STRIPE_PUBLISHABLE_KEY = 'pk_test_example';
  process.env.AL_MAJLIS_OWNER_KEY = 'a-private-owner-code-over-20-characters';

  try {
    const response = responseMock();
    await handler({method: 'GET', headers: {}}, response);
    assert.equal(response.statusCode, 200);
    assert.deepEqual(response.body, {
      stripeConfigured: true,
      stripeMode: 'test',
      ownerConfigured: true
    });
    assert.equal(response.headers['cache-control'], 'no-store');
    assert.doesNotMatch(JSON.stringify(response.body), /sk_|pk_|private-owner-code/);
  } finally {
    if (previousSecret === undefined) delete process.env.STRIPE_SECRET_KEY;
    else process.env.STRIPE_SECRET_KEY = previousSecret;
    if (previousPublic === undefined) delete process.env.STRIPE_PUBLISHABLE_KEY;
    else process.env.STRIPE_PUBLISHABLE_KEY = previousPublic;
    if (previousOwner === undefined) delete process.env.AL_MAJLIS_OWNER_KEY;
    else process.env.AL_MAJLIS_OWNER_KEY = previousOwner;
  }
});

test('checkout refuses mixed Stripe test and live keys', async () => {
  const previousSecret = process.env.STRIPE_SECRET_KEY;
  const previousPublic = process.env.STRIPE_PUBLISHABLE_KEY;
  process.env.STRIPE_SECRET_KEY = 'sk_test_example';
  process.env.STRIPE_PUBLISHABLE_KEY = 'pk_live_example';

  try {
    const response = responseMock();
    await handler({method: 'POST', body: {product: 'bundle'}, headers: {}}, response);
    assert.equal(response.statusCode, 503);
    assert.match(response.body.error, /same test or live mode/);
  } finally {
    if (previousSecret === undefined) delete process.env.STRIPE_SECRET_KEY;
    else process.env.STRIPE_SECRET_KEY = previousSecret;
    if (previousPublic === undefined) delete process.env.STRIPE_PUBLISHABLE_KEY;
    else process.env.STRIPE_PUBLISHABLE_KEY = previousPublic;
  }
});
