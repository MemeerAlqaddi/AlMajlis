# Al Majlis v52 Content Review Log

This log records substantive v52 edits. Stable card IDs are preserved so reports continue to identify the same records.

## Automated release result

The strict content audit currently passes with:

- 2,400 card records and 2,400 unique IDs;
- exactly 300 cards in each of the eight base decks;
- zero exact duplicate prompts;
- zero high-overlap near-duplicate prompt pairs;
- 300 distinct Riddle answers;
- zero malformed or out-of-range Qur'anic references;
- zero wording, minimum-difficulty, or source-format flags;
- seven forbidden clues on every Guess the Word card; and
- a multi-word continuation on every Complete the Ayah card.

Repeated two-word openings are reported separately as an editorial aid. They are not duplicate cards by themselves.

## Existing-card corrections

| Card(s) | Change | Review status |
| --- | --- | --- |
| WORD-003, WORD-025-027, WORD-033, WORD-053, WORD-063, WORD-069, WORD-074, WORD-087, WORD-095 | Replaced vague category labels with identifiable primary-text references. | Structurally checked; qualified review pending |
| AYAH-003, AYAH-060 | Expanded one-word continuations into meaningful multi-word answers. Arabic and verse boundaries were checked against the published Qur'anic text. | Source checked; editorially reviewed |
| AYAH-033 | Expanded both sides of Qur'an 14:7 so the answer is not a one-phrase giveaway. | Source checked; editorially reviewed |
| TRIVIA-011 | Replaced the generic mushaf label with an identifiable Qur'an 9 reference. | Structurally checked; qualified review pending |
| DILEMMA-002, 007, 009-010, 012, 014, 018, 020-023, 025-028, 030-032, 034-035, 041 | Replaced vague topic labels with the primary principles used by each discussion guide. | Structurally checked; qualified review pending |
| SURFACE-002 through SURFACE-090 (even IDs) | Replaced paired follow-ups with 45 independent adult reflection prompts. | Editorially reviewed |
| DECODE-156 | No content change. Its apparent repeated word crosses Arabic word boundaries, so the English repeated-word heuristic does not apply. | Editorially reviewed; native-speaker review pending |

## New-card corrections

| Card(s) | Change | Review status |
| --- | --- | --- |
| TRIVIA-124, TRIVIA-287 | Removed claims that leaned on later narrative context and replaced them with questions directly answered by Qur'an 12:18 and 8:30. | Source checked; editorially reviewed |
| TRIVIA-140, TRIVIA-159, TRIVIA-243 | Strengthened short prompts so the question is clear without becoming a giveaway. | Editorially reviewed |
| RIDDLE-071-240 (41 selected IDs) | Replaced answers duplicated from the original deck with distinct, multi-clue, source-backed answers. The final deck has 300 distinct answers. | Structurally checked; editorially reviewed; qualified review pending |
| RIDDLE-071-300 | Removed ten repeated wrapper sentences so each card begins directly with its own clues. | Editorially reviewed |

## Generated source material

- AYAH-061 through AYAH-300 use Arabic and full English meanings generated from QuranEnc `english_rwwad` v1.0.19. Arabic is kept verbatim and split only at word boundaries.
- CULTURE-016 through CULTURE-300 use Qur'anic Arabic generated from the same QuranEnc release. The gameplay explanation is concise authored prose, not a translation or tafsir.
- Every Qur'anic chapter, verse, and range appearing in a card source is checked against canonical surah lengths by the strict audit.

## Release boundary

Automated checks and cited-source checks reduce errors; they are not a substitute for qualified human review. v52 must not be described as scholar-certified or native-speaker-certified until named reviewers complete the checklist in `HUMAN-REVIEW-CHECKLIST.md`.
