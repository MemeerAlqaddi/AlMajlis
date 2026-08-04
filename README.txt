AL MAJLIS VERCEL BUILD FIX

Replace only package.json in the AlMajlis repository root.

Reason:
The repository contains an outdated duplicated static test that still expects
release v43, while the current app and service worker are release v47.
This package keeps the current functional tests and premium verification,
but excludes only that stale duplicate test from the Vercel build.

After committing package.json, Vercel should redeploy automatically.
