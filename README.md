# Al Majlis v51

An installable, offline-capable Islamic and Arabic gathering game with 605 cards.

## Play structure

- Competitive modes are timed and may be scored.
- Conversational modes are untimed, unscored, and begin directly from mode selection.
- Active games are saved on the device and can be resumed after leaving, refreshing, or closing the app.

V39 keeps every prior content, phone-fit, gameplay, timing, and audio correction. It restores the Install App option on the regular website and hides it only while Al Majlis is running as an installed home-screen app. Every timed mode uses one consistent 60-second round. The quiet 3–2–1 notes remain intact, followed by a separate uplifting round-start chime. Round-complete controls share one centered layout in every play style and mode.

Dark marble is the default appearance for new installs. Light mode remains available in Settings and now uses a continuous cool-grey stone wash with visible mineral movement instead of white-looking panels. The saved theme choice applies throughout setup, countdowns, gameplay, dialogs, and score screens.

## Owner access

Local previews on `localhost`, `127.0.0.1`, or a directly opened file automatically unlock every pack for editing and review. This does not unlock premium packs for customers on the published website.

For private owner access on the published app, add a Vercel environment variable named `AL_MAJLIS_OWNER_KEY` with a unique code of at least 20 characters. Then open the published URL once with `?owner=1`, enter that code, and the verified owner cookie keeps that device unlocked. Do not share the code or put it in GitHub.

## Stripe setup

The Vercel project needs matching `STRIPE_SECRET_KEY` and `STRIPE_PUBLISHABLE_KEY` values from the same Stripe test or live mode. Checkout is embedded in the existing popup. A completed payment is verified against Stripe before the selected pack or premium bundle unlocks.

The safe status URL `/api/create-checkout-session` reports only whether Stripe and private owner access are configured; it never returns either key. Android installation instructions support Microsoft Edge and Samsung Internet without requiring Chrome.

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
