# The Majlis v33

An installable, offline-capable Islamic and Arabic gathering game with 605 cards.

## Play structure

- Competitive modes are timed and may be scored.
- Conversational modes are untimed, unscored, and begin directly from mode selection.
- Active games are saved on the device and can be resumed after leaving, refreshing, or closing the app.

V33 keeps every v31 phone-fit, gameplay, and audio correction. Sixteen formerly ambiguous Ayah cards now include enough Qur’anic context to identify the intended passage while leaving a meaningful multi-word continuation. The first 100 everyday Decode cards each use an individually reviewed phonetic disguise without changing the Arabic phrase, meaning, or variety label. Each Decode variety remains quiet text before Reveal, and continuing after a completed round starts on a fresh card.

Audio cues are event-specific: a louder immediate opening sound, soft countdown notes, a round-start chime, a positive point sound, subtle ticks during the final ten seconds, and a round-complete cue. Every cue follows the Sound On/Off setting.

## Content status

Qur’an and hadith references are included for checking, but this release is not represented as scholar-certified or native-dialect-certified. `CONTENT-METHODOLOGY.md` explains the limits, and `HUMAN-REVIEW-CHECKLIST.md` provides a card-by-card sign-off process.

## Reports and privacy

Card reports are saved locally first, then sent to the owner through FormSubmit. Failed deliveries retry when the device reconnects. Players are asked not to include personal information.

## Verification

Run `npm test` to validate all 605 card objects, stable IDs, deck separation, accessibility hooks, recovery logic, reporting safeguards, timer lifecycle, and gameplay flows.
