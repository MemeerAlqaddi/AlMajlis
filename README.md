# The Majlis v28

An installable, offline-capable Islamic and Arabic gathering game with 605 cards.

## Play structure

- Competitive modes are timed and may be scored.
- Conversational modes are untimed, unscored, and begin directly from mode selection.
- Active games are saved on the device and can be resumed after leaving, refreshing, or closing the app.

## Content status

Qur’an and hadith references are included for checking, but this release is not represented as scholar-certified or native-dialect-certified. `CONTENT-METHODOLOGY.md` explains the limits, and `HUMAN-REVIEW-CHECKLIST.md` provides a card-by-card sign-off process.

## Reports and privacy

Card reports are saved locally first, then sent to the owner through FormSubmit. Failed deliveries retry when the device reconnects. Players are asked not to include personal information.

## Verification

Run `npm test` to validate all 605 card objects, stable IDs, deck separation, accessibility hooks, recovery logic, reporting safeguards, timer lifecycle, and gameplay flows.
