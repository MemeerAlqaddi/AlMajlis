# The Majlis

A source-aware Islamic game night and conversation PWA with 605 cards.

## Structure

- `index.html` — accessible screens and dialogs
- `styles.css` — responsive, scroll-free gameplay layout
- `cards-data.js` — versioned card records with stable IDs
- `app.js` — setup, gameplay, scoring, reporting, and installation
- `service-worker.js` — offline asset cache
- `tests/` — content and release checks

Run the release checks with:

```sh
node --check app.js
node tests/content.test.mjs
node tests/static.test.mjs
```

See [CONTENT-METHODOLOGY.md](CONTENT-METHODOLOGY.md) for the content boundaries and review rules.
