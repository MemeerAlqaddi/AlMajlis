# Al Majlis content methodology

## Release target

Version 52 requires at least 300 distinct cards in each base deck:

- Guess the Word
- Decode the Gibberish
- Complete the Ayah
- Trivia
- Riddles
- Islam vs Culture
- Dilemmas
- Under the Surface

Game Night Shuffle and Conversation Starters are mixed modes. They reuse cards
from the base decks and do not count as additional unique content.

## What "unique" means

A new ID is not enough. Two cards are duplicates when they test or discuss the
same idea with only names, settings, word order, or surface details changed.

Every release audit checks:

- permanent unique IDs;
- normalized exact prompt matches;
- high-overlap near matches;
- repeated sentence openings and answer patterns;
- repeated scenarios or conclusions during editorial review;
- topic balance within each deck.

Existing IDs are never reassigned. A corrected card keeps its ID and receives a
review-log entry.

## Source standard

Source labels must support the exact claim on the card, not merely mention the
same broad topic.

1. Qur'anic Arabic and verse boundaries are checked against Quran Foundation or
   Tanzil text and identified by surah and ayah.
2. Qur'anic meaning is described as a concise gameplay paraphrase, never as the
   Qur'an itself or as a substitute for tafsir.
3. Hadith cards name the collection and number. Reports outside Sahih al-Bukhari
   and Sahih Muslim also record the displayed grading and grader where available.
4. Legal claims that have recognized scholarly disagreement are excluded from
   single-answer games or explicitly framed as matters requiring qualified
   scholarship.
5. Islam vs Culture uses clear source-based principles. "Culture" means a claim
   is not itself an Islamic requirement; it does not automatically mean the
   custom is forbidden.
6. Dilemmas identify relevant principles and questions. They do not issue a
   fatwa or imply one universal ruling for a context-dependent situation.
7. Under the Surface prompts do not need a proof-text for a personal question,
   but they must not smuggle in an unsupported religious claim.
8. Decode phrases require natural Arabic spelling, a usable sound-spelling, and
   an accurate usage label. Country labels mean common usage, not exclusivity.

## Adult difficulty and wording

Cards are written for adults. Difficulty comes from useful distinctions,
layered recall, context, and judgment, not obscure wording.

- Guess the Word avoids elementary terms unless the forbidden-word set makes
  the clue genuinely challenging.
- Decode avoids transparent one-word prompts and misleading sound spellings.
- Complete the Ayah leaves a meaningful multi-word continuation and avoids
  fragments that occur in several places without enough context.
- Trivia avoids rote children's-lesson questions and unsupported trick wording.
- Riddles use multiple discriminating clues and avoid revealing the answer in a
  title, epithet, or unique keyword too early.
- Islam vs Culture avoids caricatures, obvious moral slogans, and disputed fiqh
  presented as consensus.
- Dilemmas contain a real tension between duties, harms, rights, or intentions;
  one side cannot be obviously reckless or cruel.
- Under the Surface avoids therapy cliches, motivational slogans, and repeated
  "how can you" prompts. Questions should invite specific, honest reflection.

Sentences must be natural when read aloud. Editors remove filler, accidental
ambiguity, stacked clauses, repetitive frames, moralizing, and childish tone.

## Review labels

- **Structurally checked:** schema, counts, IDs, and duplicate tests pass.
- **Source checked:** the cited source was opened and supports the card's claim.
- **Editorially reviewed:** wording, difficulty, variety, and answer clarity were
  reviewed in the final in-app form.
- **Qualified review complete:** a named Islamic or native-language reviewer has
  approved the card and the review scope is documented.

The app must not say "scholar verified" or "native-speaker reviewed" until named
qualified reviewers complete and document that review.

## Primary reference registry

- Quran Foundation: https://quran.com/about-us
- Quran Foundation Content API documentation: https://api-docs.quran.com/
- Tanzil verified Qur'an text: https://tanzil.net/docs/
- QuranEnc translations and API: https://quranenc.com/en/home
- Sunnah.com collection, numbering, and grading notes: https://sunnah.com/about

Automated checks support review; they never replace qualified human judgment.
