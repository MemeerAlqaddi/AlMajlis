# Al Majlis v38

An installable, offline-capable Islamic and Arabic gathering game with 605 cards.

## Play structure

- Competitive modes are timed and may be scored.
- Conversational modes are untimed, unscored, and begin directly from mode selection.
- Active games are saved on the device and can be resumed after leaving, refreshing, or closing the app.

V38 keeps every prior content, phone-fit, gameplay, timing, and audio correction. Every timed mode uses one consistent 60-second round. The quiet 3–2–1 notes remain intact, followed by a separate uplifting round-start chime. Round-complete controls share one centered layout in every play style and mode.

Design A is the default light appearance, while Design B is available as dark mode in Settings. Light-mode setup panels and mode cards now use layered grey marble, editorial numbering, depth, and restrained aqua details instead of flat white boxes. The Bismillah appears only on the home and countdown screens. The saved theme choice applies throughout setup, countdowns, gameplay, dialogs, and score screens. Saved-game recovery also remains in Settings so the home screen stays uncluttered.

The app icon now matches both themes: charcoal marble, a narrow pale-marble inlay, a restrained aqua divider, and the Al Majlis Arabic/English wordmark.

Round results use a clear status, turn summary, two-column scoreboard, and grouped match history. The in-play point-undo toast has been removed; the quieter end-of-turn undo remains available before continuing.

The home-screen Sound, Content Notes, and Settings controls sit in a separate bottom utility row so the primary launch area stays uncluttered.

Audio cues are event-specific: a louder immediate opening sound, a matching short mode-selection cue, soft countdown notes, a round-start chime, a positive Correct/Next sound in every mode, a negative Pass sound, subtle ticks during the final ten seconds, and a round-complete cue. Every cue follows the Sound On/Off setting.

## Content status

Qur’an and hadith references are included for checking, but this release is not represented as scholar-certified or native-dialect-certified. `CONTENT-METHODOLOGY.md` explains the limits, and `HUMAN-REVIEW-CHECKLIST.md` provides a card-by-card sign-off process.

## Reports and privacy

Card reports are saved locally first, then sent to the owner through FormSubmit. Failed deliveries retry when the device reconnects. Players are asked not to include personal information.

## Verification

Run `npm test` to validate all 605 card objects, stable IDs, deck separation, accessibility hooks, recovery logic, reporting safeguards, timer lifecycle, and gameplay flows.
