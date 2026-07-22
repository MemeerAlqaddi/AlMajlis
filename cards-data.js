/* Stable, reviewable card records. Existing IDs must never be reused. */
const cards = [
  {
    "type": "say",
    "prompt": "ISTIDRAJ",
    "answer": "Do not say: gradual · punishment · blessings · sin · unaware",
    "source": "Qur’an 7:182–183",
    "id": "WORD-001"
  },
  {
    "type": "say",
    "prompt": "KHUSHU’",
    "answer": "Do not say: prayer · humble · focus · heart · stillness",
    "source": "Qur’an 23:1–2",
    "id": "WORD-002"
  },
  {
    "type": "say",
    "prompt": "QANA’AH",
    "answer": "Do not say: contentment · enough · wealth · satisfied · provision",
    "source": "Concept; see Sahih Muslim 1054",
    "id": "WORD-003"
  },
  {
    "type": "say",
    "prompt": "HUSN AL-DHANN",
    "answer": "Do not say: good opinion · assume · suspicion · believer · think",
    "source": "See Qur’an 49:12",
    "id": "WORD-004"
  },
  {
    "type": "say",
    "prompt": "AMANAH",
    "answer": "Do not say: trust · responsibility · return · duty · honest",
    "source": "Qur’an 4:58",
    "id": "WORD-005"
  },
  {
    "type": "say",
    "prompt": "ISLAH",
    "answer": "Do not say: reform · reconcile · improve · conflict · peace",
    "source": "Qur’an 49:10",
    "id": "WORD-006"
  },
  {
    "type": "say",
    "prompt": "GHAFLAH",
    "answer": "Do not say: heedless · forget · distracted · unaware · remembrance",
    "source": "Qur’an 7:179",
    "id": "WORD-007"
  },
  {
    "type": "say",
    "prompt": "SHUBUHAT",
    "answer": "Do not say: doubtful · unclear · halal · haram · avoid",
    "source": "See Sahih al-Bukhari 52",
    "id": "WORD-008"
  },
  {
    "type": "say",
    "prompt": "HASAD",
    "answer": "Do not say: envy · blessing · disappear · jealous · person",
    "source": "See Qur’an 113:5",
    "id": "WORD-009"
  },
  {
    "type": "say",
    "prompt": "TADABBUR",
    "answer": "Do not say: reflect · Qur’an · meaning · ponder · verses",
    "source": "Qur’an 47:24",
    "id": "WORD-010"
  },
  {
    "type": "say",
    "prompt": "TAQWA",
    "answer": "Do not say: fear · Allah · conscious · protect · righteous",
    "source": "Qur’an 2:197",
    "id": "WORD-011"
  },
  {
    "type": "say",
    "prompt": "TAWAKKUL",
    "answer": "Do not say: trust · Allah · rely · outcome · plan",
    "source": "Qur’an 3:159",
    "id": "WORD-012"
  },
  {
    "type": "say",
    "prompt": "SABR",
    "answer": "Do not say: patience · endure · hardship · wait · steadfast",
    "source": "Qur’an 2:153",
    "id": "WORD-013"
  },
  {
    "type": "say",
    "prompt": "SHUKR",
    "answer": "Do not say: gratitude · thank · blessing · increase · appreciate",
    "source": "Qur’an 14:7",
    "id": "WORD-014"
  },
  {
    "type": "say",
    "prompt": "IKHLAS",
    "answer": "Do not say: sincere · intention · pure · Allah · genuine",
    "source": "See Qur’an 98:5",
    "id": "WORD-015"
  },
  {
    "type": "say",
    "prompt": "RIYA",
    "answer": "Do not say: showing off · worship · people · praise · seen",
    "source": "Qur’an 107:4–6",
    "id": "WORD-016"
  },
  {
    "type": "say",
    "prompt": "TAWBAH",
    "answer": "Do not say: repent · return · sin · forgiveness · regret",
    "source": "Qur’an 39:53",
    "id": "WORD-017"
  },
  {
    "type": "say",
    "prompt": "IHSAN",
    "answer": "Do not say: excellence · worship · see · Allah · beautiful",
    "source": "Sahih al-Bukhari 50",
    "id": "WORD-018"
  },
  {
    "type": "say",
    "prompt": "ADL",
    "answer": "Do not say: justice · fair · equal · judge · rights",
    "source": "Qur’an 16:90",
    "id": "WORD-019"
  },
  {
    "type": "say",
    "prompt": "RAHMAH",
    "answer": "Do not say: mercy · compassion · kind · forgive · gentle",
    "source": "See Qur’an 21:107",
    "id": "WORD-020"
  },
  {
    "type": "say",
    "prompt": "FITNAH",
    "answer": "Do not say: trial · temptation · turmoil · test · conflict",
    "source": "See Qur’an 8:25; meaning depends on context",
    "id": "WORD-021"
  },
  {
    "type": "say",
    "prompt": "FIQH",
    "answer": "Do not say: law · understanding · rulings · scholar · madhhab",
    "source": "See Qur’an 9:122",
    "id": "WORD-022"
  },
  {
    "type": "say",
    "prompt": "SUNNAH",
    "answer": "Do not say: Prophet · practice · example · hadith · follow",
    "source": "See Qur’an 33:21",
    "id": "WORD-023"
  },
  {
    "type": "say",
    "prompt": "BID‘AH",
    "answer": "Do not say: innovation · religion · introduce · new · rejected",
    "source": "See Sahih Muslim 1718a",
    "id": "WORD-024"
  },
  {
    "type": "say",
    "prompt": "FARD",
    "answer": "Do not say: obligatory · required · must · sin · duty",
    "source": "Islamic legal category",
    "id": "WORD-025"
  },
  {
    "type": "say",
    "prompt": "MAKRUH",
    "answer": "Do not say: disliked · avoid · haram · ruling · rewarded",
    "source": "Islamic legal category",
    "id": "WORD-026"
  },
  {
    "type": "say",
    "prompt": "MUBAH",
    "answer": "Do not say: permissible · neutral · allowed · halal · choice",
    "source": "Islamic legal category",
    "id": "WORD-027"
  },
  {
    "type": "say",
    "prompt": "WARA‘",
    "answer": "Do not say: cautious · doubtful · avoid · piety · conscience",
    "source": "Ethical concept; related to Sahih al-Bukhari 52",
    "id": "WORD-028"
  },
  {
    "type": "say",
    "prompt": "ZUHD",
    "answer": "Do not say: ascetic · worldly · detach · simple · possessions",
    "source": "See Qur’an 57:20",
    "id": "WORD-029"
  },
  {
    "type": "say",
    "prompt": "TAZKIYAH",
    "answer": "Do not say: purify · soul · growth · cleanse · character",
    "source": "Qur’an 91:9–10",
    "id": "WORD-030"
  },
  {
    "type": "say",
    "prompt": "NIFAQ",
    "answer": "Do not say: hypocrisy · pretend · believer · inside · outside",
    "source": "See Qur’an 2:8–10",
    "id": "WORD-031"
  },
  {
    "type": "say",
    "prompt": "KIBR",
    "answer": "Do not say: arrogance · pride · reject · truth · people",
    "source": "Sahih Muslim 91a",
    "id": "WORD-032"
  },
  {
    "type": "say",
    "prompt": "‘UJB",
    "answer": "Do not say: self-admiration · impressed · ego · deeds · superior",
    "source": "Spiritual-ethics concept",
    "id": "WORD-033"
  },
  {
    "type": "say",
    "prompt": "GHIBAH",
    "answer": "Do not say: backbiting · true · absent · dislike · mention",
    "source": "Qur’an 49:12; Sahih Muslim 2589",
    "id": "WORD-034"
  },
  {
    "type": "say",
    "prompt": "NAMIMAH",
    "answer": "Do not say: gossip · carry · tales · people · conflict",
    "source": "Prohibition of tale-bearing; see Sahih Muslim 105a",
    "id": "WORD-035"
  },
  {
    "type": "say",
    "prompt": "SADAQAH JARIYAH",
    "answer": "Do not say: ongoing · charity · reward · death · benefit",
    "source": "Sahih Muslim 1631",
    "id": "WORD-036"
  },
  {
    "type": "say",
    "prompt": "BARAKAH",
    "answer": "Do not say: blessing · increase · good · abundance · Allah",
    "source": "See Qur’an 7:96",
    "id": "WORD-037"
  },
  {
    "type": "say",
    "prompt": "RIZQ",
    "answer": "Do not say: provision · wealth · sustenance · Allah · provide",
    "source": "See Qur’an 51:58",
    "id": "WORD-038"
  },
  {
    "type": "say",
    "prompt": "DU‘A",
    "answer": "Do not say: supplication · ask · prayer · call · Allah",
    "source": "Qur’an 40:60",
    "id": "WORD-039"
  },
  {
    "type": "say",
    "prompt": "DHIKR",
    "answer": "Do not say: remembrance · Allah · tongue · heart · repeat",
    "source": "Qur’an 33:41",
    "id": "WORD-040"
  },
  {
    "type": "say",
    "prompt": "ISTIGHFAR",
    "answer": "Do not say: forgiveness · seek · Astaghfirullah · sin · repent",
    "source": "See Qur’an 71:10",
    "id": "WORD-041"
  },
  {
    "type": "say",
    "prompt": "SHURA",
    "answer": "Do not say: consultation · decision · community · discuss · advice",
    "source": "Qur’an 42:38",
    "id": "WORD-042"
  },
  {
    "type": "say",
    "prompt": "UMMAH",
    "answer": "Do not say: community · Muslims · nation · people · worldwide",
    "source": "See Qur’an 3:110",
    "id": "WORD-043"
  },
  {
    "type": "say",
    "prompt": "AKHIRAH",
    "answer": "Do not say: afterlife · next · world · death · eternal",
    "source": "Qur’an 87:17",
    "id": "WORD-044"
  },
  {
    "type": "say",
    "prompt": "QADR",
    "answer": "Do not say: decree · destiny · Allah · written · fate",
    "source": "Sahih Muslim 8a",
    "id": "WORD-045"
  },
  {
    "type": "say",
    "prompt": "FITRAH",
    "answer": "Do not say: natural · disposition · born · pure · instinct",
    "source": "Qur’an 30:30",
    "id": "WORD-046"
  },
  {
    "type": "say",
    "prompt": "HALAL",
    "answer": "Do not say: permissible · allowed · food · lawful · haram",
    "source": "See Qur’an 16:116",
    "id": "WORD-047"
  },
  {
    "type": "say",
    "prompt": "HARAM",
    "answer": "Do not say: forbidden · sinful · unlawful · halal · avoid",
    "source": "See Qur’an 16:116",
    "id": "WORD-048"
  },
  {
    "type": "say",
    "prompt": "SHIRK",
    "answer": "Do not say: partners · Allah · worship · associate · unforgiven",
    "source": "Qur’an 4:48",
    "id": "WORD-049"
  },
  {
    "type": "say",
    "prompt": "TAWHID",
    "answer": "Do not say: one · Allah · monotheism · alone · worship",
    "source": "See Qur’an 112:1–4",
    "id": "WORD-050"
  },
  {
    "type": "say",
    "prompt": "NIYYAH",
    "answer": "Do not say: intention · deeds · heart · purpose · reward",
    "source": "Sahih al-Bukhari 1",
    "id": "WORD-051"
  },
  {
    "type": "say",
    "prompt": "MAHR",
    "answer": "Do not say: marriage · bride · gift · husband · dowry",
    "source": "Qur’an 4:4",
    "id": "WORD-052"
  },
  {
    "type": "say",
    "prompt": "WALI",
    "answer": "Do not say: guardian · marriage · bride · consent · father",
    "source": "Marriage-law concept; details require scholarship",
    "id": "WORD-053"
  },
  {
    "type": "say",
    "prompt": "ZAKAH",
    "answer": "Do not say: charity · wealth · obligatory · poor · percentage",
    "source": "See Qur’an 9:60",
    "id": "WORD-054"
  },
  {
    "type": "say",
    "prompt": "SUJUD",
    "answer": "Do not say: prostration · forehead · prayer · ground · bow",
    "source": "See Qur’an 96:19",
    "id": "WORD-055"
  },
  {
    "type": "say",
    "prompt": "QIBLAH",
    "answer": "Do not say: direction · Ka‘bah · prayer · face · Makkah",
    "source": "Qur’an 2:144",
    "id": "WORD-056"
  },
  {
    "type": "say",
    "prompt": "IHRAM",
    "answer": "Do not say: pilgrimage · clothing · Hajj · state · restrictions",
    "source": "See Qur’an 2:196",
    "id": "WORD-057"
  },
  {
    "type": "say",
    "prompt": "WUDU",
    "answer": "Do not say: ablution · wash · prayer · water · face",
    "source": "Qur’an 5:6",
    "id": "WORD-058"
  },
  {
    "type": "say",
    "prompt": "TAYAMMUM",
    "answer": "Do not say: dry · earth · water · purification · dust",
    "source": "Qur’an 5:6",
    "id": "WORD-059"
  },
  {
    "type": "say",
    "prompt": "SIRAT AL-MUSTAQIM",
    "answer": "Do not say: straight · path · guidance · Fatihah · road",
    "source": "Qur’an 1:6",
    "id": "WORD-060"
  },
  {
    "type": "arabish",
    "prompt": "SHOOBE DUCK-MEANY",
    "answer": "شو بدك مني؟ — What do you want from me?",
    "source": "Levantine Arabic",
    "id": "DECODE-001"
  },
  {
    "type": "arabish",
    "prompt": "WAH-LAHM ABBER-EFF",
    "answer": "والله ما بعرف — I swear, I don’t know",
    "source": "Levantine Arabic",
    "id": "DECODE-002"
  },
  {
    "type": "arabish",
    "prompt": "YALL EN-ROOH",
    "answer": "يلا نروح — Come on, let’s go",
    "source": "Common colloquial Arabic",
    "id": "DECODE-003"
  },
  {
    "type": "arabish",
    "prompt": "MAF E-MOOSH KAYLA",
    "answer": "ما في مشكلة — There’s no problem",
    "source": "Common colloquial Arabic",
    "id": "DECODE-004"
  },
  {
    "type": "arabish",
    "prompt": "IN-TAWAIN",
    "answer": "إنت وين؟ — Where are you?",
    "source": "Levantine Arabic",
    "id": "DECODE-005"
  },
  {
    "type": "arabish",
    "prompt": "KHA-LASB UH-AH",
    "answer": "خلص بقى — Enough already",
    "source": "Levantine Arabic",
    "id": "DECODE-006"
  },
  {
    "type": "arabish",
    "prompt": "SHOOSAI YIR-MAAK",
    "answer": "شو صاير معك؟ — What’s going on with you?",
    "source": "Levantine Arabic",
    "id": "DECODE-007"
  },
  {
    "type": "arabish",
    "prompt": "LAK-AN JUD",
    "answer": "لك عنجد؟ — Seriously?",
    "source": "Levantine Arabic",
    "id": "DECODE-008"
  },
  {
    "type": "arabish",
    "prompt": "MA-LAK HAIK",
    "answer": "مالك هيك؟ — Why are you like this?",
    "source": "Levantine Arabic",
    "id": "DECODE-009"
  },
  {
    "type": "arabish",
    "prompt": "A-LOSHOO FEE",
    "answer": "ألو، شو في؟ — Hello, what’s wrong?",
    "source": "Levantine Arabic",
    "id": "DECODE-010"
  },
  {
    "type": "arabish",
    "prompt": "BID-DEE A-CULL",
    "answer": "بدي آكل — I want to eat",
    "source": "Levantine Arabic",
    "id": "DECODE-011"
  },
  {
    "type": "arabish",
    "prompt": "LAYSHMA HAH-KEET",
    "answer": "ليش ما حكيت؟ — Why didn’t you say anything?",
    "source": "Levantine Arabic",
    "id": "DECODE-012"
  },
  {
    "type": "arabish",
    "prompt": "WAH-LAH INNACK MAJ-NOON",
    "answer": "والله إنك مجنون — I swear, you’re crazy (said to a man)",
    "source": "Common colloquial Arabic",
    "id": "DECODE-013"
  },
  {
    "type": "arabish",
    "prompt": "SHWAI-SHWAI YA-LAKE",
    "answer": "شوي شوي عليك — Easy there; take it slow",
    "source": "Common colloquial Arabic",
    "id": "DECODE-014"
  },
  {
    "type": "arabish",
    "prompt": "YA-NEESHO AH-MULL",
    "answer": "يعني شو أعمل؟ — So, what am I supposed to do?",
    "source": "Levantine Arabic",
    "id": "DECODE-015"
  },
  {
    "type": "arabish",
    "prompt": "SHOO-IS MAK",
    "answer": "شو اسمك؟ — What’s your name?",
    "source": "Levantine Arabic",
    "id": "DECODE-016"
  },
  {
    "type": "arabish",
    "prompt": "WAINAK MINZ A-MAN",
    "answer": "وينك من زمان؟ — Where have you been?",
    "source": "Levantine Arabic",
    "id": "DECODE-017"
  },
  {
    "type": "arabish",
    "prompt": "SHOO-AM TA-MULL",
    "answer": "شو عم تعمل؟ — What are you doing? (said to a man)",
    "source": "Levantine Arabic",
    "id": "DECODE-018"
  },
  {
    "type": "arabish",
    "prompt": "MAF-HEM TA-LAKE",
    "answer": "ما فهمت عليك — I didn’t understand you",
    "source": "Levantine Arabic",
    "id": "DECODE-019"
  },
  {
    "type": "arabish",
    "prompt": "EHK-EE SHWAI-SHWAI",
    "answer": "احكي شوي شوي — Speak slowly",
    "source": "Levantine Arabic",
    "id": "DECODE-020"
  },
  {
    "type": "arabish",
    "prompt": "AN-JUDD BIT-HAK-EE",
    "answer": "عنجد بتحكي؟ — Are you serious?",
    "source": "Levantine Arabic",
    "id": "DECODE-021"
  },
  {
    "type": "arabish",
    "prompt": "KHAL-LEE NAN-BALLISH",
    "answer": "خلينا نبلّش — Let’s start",
    "source": "Levantine Arabic",
    "id": "DECODE-022"
  },
  {
    "type": "arabish",
    "prompt": "ISTAN-NASH WAI",
    "answer": "استنى شوي — Wait a moment",
    "source": "Levantine Arabic",
    "id": "DECODE-023"
  },
  {
    "type": "arabish",
    "prompt": "MA-ILLY KHALL-ACK",
    "answer": "ما إلي خلق — I’m not in the mood",
    "source": "Levantine Arabic",
    "id": "DECODE-024"
  },
  {
    "type": "arabish",
    "prompt": "WALA-YA HEMMACK",
    "answer": "ولا يهمك — Don’t worry about it",
    "source": "Levantine Arabic",
    "id": "DECODE-025"
  },
  {
    "type": "arabish",
    "prompt": "YAA-TEAK AL-AF EE-YA",
    "answer": "يعطيك العافية — May Allah grant you wellness",
    "source": "Common Arabic expression",
    "id": "DECODE-026"
  },
  {
    "type": "arabish",
    "prompt": "ALLA-YA FEECK",
    "answer": "الله يعافيك — May Allah grant you wellness too",
    "source": "Common reply",
    "id": "DECODE-027"
  },
  {
    "type": "arabish",
    "prompt": "TICK-RAM AINACK",
    "answer": "تكرم عينك — Consider it done",
    "source": "Levantine Arabic",
    "id": "DECODE-028"
  },
  {
    "type": "arabish",
    "prompt": "ALA-RAH SEE",
    "answer": "على راسي — With pleasure / out of respect",
    "source": "Common colloquial Arabic",
    "id": "DECODE-029"
  },
  {
    "type": "arabish",
    "prompt": "SHOO-RAA YACK",
    "answer": "شو رأيك؟ — What do you think?",
    "source": "Levantine Arabic",
    "id": "DECODE-030"
  },
  {
    "type": "arabish",
    "prompt": "HAS-SABIL MOW-KIFF",
    "answer": "حسب الموقف — It depends on the situation",
    "source": "Common Arabic",
    "id": "DECODE-031"
  },
  {
    "type": "arabish",
    "prompt": "MAF-EE DAH-EE",
    "answer": "ما في داعي — There’s no need",
    "source": "Common colloquial Arabic",
    "id": "DECODE-032"
  },
  {
    "type": "arabish",
    "prompt": "SAAR-KHAIR",
    "answer": "صار خير — It’s all right now",
    "source": "Levantine Arabic",
    "id": "DECODE-033"
  },
  {
    "type": "arabish",
    "prompt": "BE-SEAT-AH",
    "answer": "بسيطة — It’s no big deal",
    "source": "Common colloquial Arabic",
    "id": "DECODE-034"
  },
  {
    "type": "arabish",
    "prompt": "MISHMOOSH KAYLA",
    "answer": "مش مشكلة — Not a problem",
    "source": "Common colloquial Arabic",
    "id": "DECODE-035"
  },
  {
    "type": "arabish",
    "prompt": "WAIN-BID NAN-ROOH",
    "answer": "وين بدنا نروح؟ — Where should we go?",
    "source": "Levantine Arabic",
    "id": "DECODE-036"
  },
  {
    "type": "arabish",
    "prompt": "MEAN-JAI MA-ANA",
    "answer": "مين جاي معنا؟ — Who’s coming with us?",
    "source": "Levantine Arabic",
    "id": "DECODE-037"
  },
  {
    "type": "arabish",
    "prompt": "ADDAY-SHISS AA-AH",
    "answer": "قديش الساعة؟ — What time is it?",
    "source": "Levantine Arabic",
    "id": "DECODE-038"
  },
  {
    "type": "arabish",
    "prompt": "TA-AKHAR NAK-TEER",
    "answer": "تأخرنا كتير — We’re very late",
    "source": "Levantine Arabic",
    "id": "DECODE-039"
  },
  {
    "type": "arabish",
    "prompt": "DUCK-LEE LAMM A-TOE-SAL",
    "answer": "دقلي لما توصل — Call me when you arrive",
    "source": "Levantine Arabic",
    "id": "DECODE-040"
  },
  {
    "type": "arabish",
    "prompt": "LATAN-SAL MIF-TAH",
    "answer": "لا تنسى المفتاح — Don’t forget the key",
    "source": "Common colloquial Arabic",
    "id": "DECODE-041"
  },
  {
    "type": "arabish",
    "prompt": "BA-AT-TELL ACKR ESS-ALEH",
    "answer": "بعثتلك رسالة — I sent you a message",
    "source": "Levantine Arabic",
    "id": "DECODE-042"
  },
  {
    "type": "arabish",
    "prompt": "SHIF-TISH OOSAR",
    "answer": "شفت شو صار؟ — Did you see what happened?",
    "source": "Levantine Arabic",
    "id": "DECODE-043"
  },
  {
    "type": "arabish",
    "prompt": "MAB-SAD DICK",
    "answer": "ما بصدق — I can’t believe it",
    "source": "Levantine Arabic",
    "id": "DECODE-044"
  },
  {
    "type": "arabish",
    "prompt": "KINT-BAM ZAH",
    "answer": "كنت بمزح — I was joking",
    "source": "Levantine Arabic",
    "id": "DECODE-045"
  },
  {
    "type": "arabish",
    "prompt": "LAT-AKHOD HASH ACK-SEE",
    "answer": "لا تاخدها شخصي — Don’t take it personally",
    "source": "Common colloquial Arabic",
    "id": "DECODE-046"
  },
  {
    "type": "arabish",
    "prompt": "AL-MOW DOOT-AWEEL",
    "answer": "الموضوع طويل — It’s a long story",
    "source": "Common Arabic",
    "id": "DECODE-047"
  },
  {
    "type": "arabish",
    "prompt": "MIN-AL AKH-HER",
    "answer": "من الآخر — Here’s the bottom line",
    "source": "Common colloquial Arabic",
    "id": "DECODE-048"
  },
  {
    "type": "arabish",
    "prompt": "BAY-NEE W-BAY-NACK",
    "answer": "بيني وبينك — Between you and me",
    "source": "Common Arabic",
    "id": "DECODE-049"
  },
  {
    "type": "arabish",
    "prompt": "ISMAA-NEE LIL-AKHER",
    "answer": "اسمعني للآخر — Hear me out",
    "source": "Levantine Arabic",
    "id": "DECODE-050"
  },
  {
    "type": "arabish",
    "prompt": "AAT-TEEN EE-FORSA",
    "answer": "أعطيني فرصة — Give me a chance",
    "source": "Common colloquial Arabic",
    "id": "DECODE-051"
  },
  {
    "type": "arabish",
    "prompt": "KHA-LAS ITTA-FAKNA",
    "answer": "خلص اتفقنا — All right, it’s a deal",
    "source": "Levantine Arabic",
    "id": "DECODE-052"
  },
  {
    "type": "arabish",
    "prompt": "KULL-SHEET AM-MAM",
    "answer": "كل شي تمام — Everything is fine",
    "source": "Common colloquial Arabic",
    "id": "DECODE-053"
  },
  {
    "type": "arabish",
    "prompt": "AL-HAMDIL LAH-AS SALA-MEH",
    "answer": "الحمد لله عالسلامة — Welcome back safely",
    "source": "Common Arabic expression",
    "id": "DECODE-054"
  },
  {
    "type": "arabish",
    "prompt": "NAW-WART OONA",
    "answer": "نورتونا — You brightened our gathering",
    "source": "Common Arabic welcome",
    "id": "DECODE-055"
  },
  {
    "type": "arabish",
    "prompt": "AL-BAIT BAY-TACK",
    "answer": "البيت بيتك — Make yourself at home",
    "source": "Common Arabic expression",
    "id": "DECODE-056"
  },
  {
    "type": "arabish",
    "prompt": "SAH-HAWH ANA",
    "answer": "صحة وهنا — Enjoy your meal",
    "source": "Common Arabic expression",
    "id": "DECODE-057"
  },
  {
    "type": "arabish",
    "prompt": "SHOO-BID DAK-TISH-RUB",
    "answer": "شو بدك تشرب؟ — What would you like to drink?",
    "source": "Levantine Arabic",
    "id": "DECODE-058"
  },
  {
    "type": "arabish",
    "prompt": "AL-AH WAH-JAHZ EH",
    "answer": "القهوة جاهزة — The coffee is ready",
    "source": "Common Arabic",
    "id": "DECODE-059"
  },
  {
    "type": "arabish",
    "prompt": "BID-DACK SHEE",
    "answer": "بدك شي؟ — Do you need anything?",
    "source": "Levantine Arabic",
    "id": "DECODE-060"
  },
  {
    "type": "arabish",
    "prompt": "MABID-DEE SHEE",
    "answer": "ما بدي شي — I don’t want anything",
    "source": "Levantine Arabic",
    "id": "DECODE-061"
  },
  {
    "type": "arabish",
    "prompt": "MEAN-BID DOYIB-DA",
    "answer": "مين بده يبدأ؟ — Who wants to start?",
    "source": "Levantine Arabic",
    "id": "DECODE-062"
  },
  {
    "type": "arabish",
    "prompt": "DOW-REE WALA DOR-ACK",
    "answer": "دوري ولا دورك؟ — My turn or yours?",
    "source": "Common colloquial Arabic",
    "id": "DECODE-063"
  },
  {
    "type": "arabish",
    "prompt": "INTAB EH-ALWAKT",
    "answer": "انتبه عالوقت — Watch the time",
    "source": "Levantine Arabic",
    "id": "DECODE-064"
  },
  {
    "type": "arabish",
    "prompt": "ARRAB AL-WAKT YIKHLAS",
    "answer": "قرّب الوقت يخلص — Time is almost up",
    "source": "Levantine Arabic",
    "id": "DECODE-065"
  },
  {
    "type": "arabish",
    "prompt": "MEAN-RIB EH",
    "answer": "مين ربح؟ — Who won?",
    "source": "Levantine Arabic",
    "id": "DECODE-066"
  },
  {
    "type": "arabish",
    "prompt": "TA-AH DALNA",
    "answer": "تعادلنا — We tied",
    "source": "Common colloquial Arabic",
    "id": "DECODE-067"
  },
  {
    "type": "arabish",
    "prompt": "LAT-GHAI YIR-AL MOWDOO",
    "answer": "لا تغيّر الموضوع — Don’t change the subject",
    "source": "Common Arabic",
    "id": "DECODE-068"
  },
  {
    "type": "arabish",
    "prompt": "JAW-WIB BIS-RAH HA",
    "answer": "جاوب بصراحة — Answer honestly",
    "source": "Common colloquial Arabic",
    "id": "DECODE-069"
  },
  {
    "type": "arabish",
    "prompt": "ASSO-AL SAAB",
    "answer": "السؤال صعب — The question is difficult",
    "source": "Common Arabic",
    "id": "DECODE-070"
  },
  {
    "type": "arabish",
    "prompt": "ANDEE FIK-RAH AHSAN",
    "answer": "عندي فكرة أحسن — I have a better idea",
    "source": "Common colloquial Arabic",
    "id": "DECODE-071"
  },
  {
    "type": "arabish",
    "prompt": "KHAL-LEE NAN-SAW WIT",
    "answer": "خلينا نصوّت — Let’s vote",
    "source": "Levantine Arabic",
    "id": "DECODE-072"
  },
  {
    "type": "arabish",
    "prompt": "MISHMUK TANEA",
    "answer": "مش مقتنع — I’m not convinced (said by a man)",
    "source": "Common colloquial Arabic",
    "id": "DECODE-073"
  },
  {
    "type": "arabish",
    "prompt": "MA-AK HAK",
    "answer": "معك حق — You’re right",
    "source": "Common Arabic",
    "id": "DECODE-074"
  },
  {
    "type": "arabish",
    "prompt": "YIM-KIN MA-AK HAK",
    "answer": "يمكن معك حق — Maybe you’re right",
    "source": "Common colloquial Arabic",
    "id": "DECODE-075"
  },
  {
    "type": "arabish",
    "prompt": "ANA GHAL-TAN",
    "answer": "أنا غلطان — I was wrong (said by a man)",
    "source": "Common colloquial Arabic",
    "id": "DECODE-076"
  },
  {
    "type": "arabish",
    "prompt": "SOO-ET AFA-HUM",
    "answer": "سوء تفاهم — A misunderstanding",
    "source": "Common Arabic",
    "id": "DECODE-077"
  },
  {
    "type": "arabish",
    "prompt": "WAD-DAH LEEAK-TAR",
    "answer": "وضّحلي أكتر — Explain it to me more clearly",
    "source": "Levantine Arabic",
    "id": "DECODE-078"
  },
  {
    "type": "arabish",
    "prompt": "SHOO-AS DACK",
    "answer": "شو قصدك؟ — What do you mean?",
    "source": "Levantine Arabic",
    "id": "DECODE-079"
  },
  {
    "type": "arabish",
    "prompt": "MA-KAN AS-DEE",
    "answer": "ما كان قصدي — I didn’t mean it",
    "source": "Common colloquial Arabic",
    "id": "DECODE-080"
  },
  {
    "type": "trivia",
    "prompt": "Which surah contains two occurrences of the basmalah?",
    "answer": "Surah An-Naml: once at its opening and once in Sulayman’s letter",
    "source": "Qur’an 27:30, plus the surah’s opening basmalah",
    "id": "TRIVIA-001"
  },
  {
    "type": "trivia",
    "prompt": "What is the longest single ayah in the Qur’an primarily about?",
    "answer": "Documenting deferred debts and financial transactions",
    "source": "Qur’an 2:282",
    "id": "TRIVIA-002"
  },
  {
    "type": "trivia",
    "prompt": "Which two prophets’ scriptures are named together in the closing verses of Surah Al-A‘la?",
    "answer": "Ibrahim and Musa",
    "source": "Qur’an 87:18–19",
    "id": "TRIVIA-003"
  },
  {
    "type": "trivia",
    "prompt": "After warning that some suspicion is sinful, which two related behaviors does the same verse prohibit?",
    "answer": "Spying and backbiting",
    "source": "Qur’an 49:12",
    "id": "TRIVIA-004"
  },
  {
    "type": "trivia",
    "prompt": "In Surah Al-Kahf, what did Musa and his young companion discover they had left behind before retracing their path?",
    "answer": "The fish, which had made its way into the sea",
    "source": "Qur’an 18:60–64",
    "id": "TRIVIA-005"
  },
  {
    "type": "trivia",
    "prompt": "What request did the disciples of Isa make that became the title of a surah?",
    "answer": "A table spread with food sent down from heaven",
    "source": "Qur’an 5:112–115",
    "id": "TRIVIA-006"
  },
  {
    "type": "trivia",
    "prompt": "According to the hadith, what three things continue benefiting a person after death?",
    "answer": "Ongoing charity, beneficial knowledge, and a righteous child who prays for them",
    "source": "Sahih Muslim 1631",
    "id": "TRIVIA-007"
  },
  {
    "type": "trivia",
    "prompt": "Which two phrases are described as light on the tongue, heavy on the Scale, and beloved to the Most Merciful?",
    "answer": "SubhanAllahi al-‘Azim; SubhanAllahi wa bihamdihi",
    "source": "Sahih al-Bukhari 6406",
    "id": "TRIVIA-008"
  },
  {
    "type": "trivia",
    "prompt": "A bankrupt person in the famous hadith arrives with worship but loses reward because of what?",
    "answer": "Insulting or slandering others, consuming their wealth unlawfully, shedding their blood, or beating them",
    "source": "Sahih Muslim 2581",
    "id": "TRIVIA-009"
  },
  {
    "type": "trivia",
    "prompt": "What distinction does the hadith make between ghibah and buhtan?",
    "answer": "Ghibah is mentioning a true fault the person dislikes; if it is false, it is slander (buhtan)",
    "source": "Sahih Muslim 2589",
    "id": "TRIVIA-010"
  },
  {
    "type": "trivia",
    "prompt": "Which surah is the only one not preceded by a written basmalah in the standard mushaf?",
    "answer": "Surah At-Tawbah (also called Bara’ah)",
    "source": "Standard mushaf arrangement; Surah 9",
    "id": "TRIVIA-011"
  },
  {
    "type": "trivia",
    "prompt": "Which prophet was taught by Allah to make protective coats of armor?",
    "answer": "Dawud",
    "source": "Qur’an 21:80",
    "id": "TRIVIA-012"
  },
  {
    "type": "trivia",
    "prompt": "Which bird brought Sulayman intelligence about the people of Saba?",
    "answer": "The hoopoe",
    "source": "Qur’an 27:20–24",
    "id": "TRIVIA-013"
  },
  {
    "type": "trivia",
    "prompt": "Who brought the Queen of Saba’s throne before Sulayman’s glance returned to him?",
    "answer": "One who had knowledge of the Scripture",
    "source": "Qur’an 27:38–40",
    "id": "TRIVIA-014"
  },
  {
    "type": "trivia",
    "prompt": "What happened immediately before Yunus was cast from the laden ship?",
    "answer": "He drew lots and was among those selected",
    "source": "Qur’an 37:140–141",
    "id": "TRIVIA-015"
  },
  {
    "type": "trivia",
    "prompt": "How long does the Qur’an say the Companions of the Cave remained in their cave?",
    "answer": "Three hundred years, adding nine",
    "source": "Qur’an 18:25",
    "id": "TRIVIA-016"
  },
  {
    "type": "trivia",
    "prompt": "How many keepers over the Fire are specified in Surah Al-Muddaththir?",
    "answer": "Nineteen",
    "source": "Qur’an 74:30–31",
    "id": "TRIVIA-017"
  },
  {
    "type": "trivia",
    "prompt": "What did Musa strike when twelve springs burst forth for his people?",
    "answer": "A stone",
    "source": "Qur’an 2:60",
    "id": "TRIVIA-018"
  },
  {
    "type": "trivia",
    "prompt": "During Talut’s river test, what small amount was permitted?",
    "answer": "A scoop taken with one hand",
    "source": "Qur’an 2:249",
    "id": "TRIVIA-019"
  },
  {
    "type": "trivia",
    "prompt": "What skill of the people of Thamud is mentioned alongside Salih’s warning?",
    "answer": "Carving homes into mountains",
    "source": "Qur’an 7:73–74",
    "id": "TRIVIA-020"
  },
  {
    "type": "trivia",
    "prompt": "How many birds was Ibrahim told to take in the demonstration of resurrection?",
    "answer": "Four birds",
    "source": "Qur’an 2:260",
    "id": "TRIVIA-021"
  },
  {
    "type": "trivia",
    "prompt": "Which prophet asked Allah for a kingdom that would belong to no one after him?",
    "answer": "Sulayman",
    "source": "Qur’an 38:35",
    "id": "TRIVIA-022"
  },
  {
    "type": "trivia",
    "prompt": "What tree was Maryam told to shake during childbirth?",
    "answer": "The trunk of a palm tree",
    "source": "Qur’an 19:23–25",
    "id": "TRIVIA-023"
  },
  {
    "type": "trivia",
    "prompt": "What sign was given to Zakariyya after the announcement of Yahya?",
    "answer": "He would not speak to people for three nights despite being sound",
    "source": "Qur’an 19:10",
    "id": "TRIVIA-024"
  },
  {
    "type": "trivia",
    "prompt": "What was unusual about Yahya’s name when it was announced?",
    "answer": "Allah said no one before him had been given that name",
    "source": "Qur’an 19:7",
    "id": "TRIVIA-025"
  },
  {
    "type": "trivia",
    "prompt": "On what mountain did Nuh’s ark come to rest?",
    "answer": "Al-Judi",
    "source": "Qur’an 11:44",
    "id": "TRIVIA-026"
  },
  {
    "type": "trivia",
    "prompt": "What did Musa’s staff visibly become before Pharaoh and his chiefs?",
    "answer": "A real serpent",
    "source": "Qur’an 7:107",
    "id": "TRIVIA-027"
  },
  {
    "type": "trivia",
    "prompt": "What did Musa notice near the side of Mount Tur while travelling with his family?",
    "answer": "A fire",
    "source": "Qur’an 28:29",
    "id": "TRIVIA-028"
  },
  {
    "type": "trivia",
    "prompt": "What happened to Qarun and his home after his display of wealth?",
    "answer": "The earth swallowed him and his home",
    "source": "Qur’an 28:76–81",
    "id": "TRIVIA-029"
  },
  {
    "type": "trivia",
    "prompt": "Which two materials did Dhul-Qarnayn use to build the barrier?",
    "answer": "Blocks of iron and molten copper",
    "source": "Qur’an 18:95–96",
    "id": "TRIVIA-030"
  },
  {
    "type": "trivia",
    "prompt": "What unusual route did the fish take when Musa and his young assistant reached the meeting point?",
    "answer": "It made its way into the sea like a tunnel",
    "source": "Qur’an 18:60–61",
    "id": "TRIVIA-031"
  },
  {
    "type": "trivia",
    "prompt": "Why did the knowledgeable servant damage the boat in Surah Al-Kahf?",
    "answer": "A king ahead was seizing every serviceable boat by force",
    "source": "Qur’an 18:71, 18:79",
    "id": "TRIVIA-032"
  },
  {
    "type": "trivia",
    "prompt": "For whom was the treasure beneath the repaired wall being preserved?",
    "answer": "Two orphan boys whose father had been righteous",
    "source": "Qur’an 18:77, 18:82",
    "id": "TRIVIA-033"
  },
  {
    "type": "trivia",
    "prompt": "In the dispute presented to Dawud, how many ewes did one brother possess?",
    "answer": "Ninety-nine; he demanded his brother’s single ewe as well",
    "source": "Qur’an 38:22–24",
    "id": "TRIVIA-034"
  },
  {
    "type": "trivia",
    "prompt": "What replaced the two gardens of Saba after they turned away?",
    "answer": "Two gardens producing bitter fruit, tamarisk, and a few lote trees",
    "source": "Qur’an 34:15–16",
    "id": "TRIVIA-035"
  },
  {
    "type": "trivia",
    "prompt": "What was the ant afraid Sulayman’s army might do unknowingly?",
    "answer": "Crush the ants",
    "source": "Qur’an 27:18",
    "id": "TRIVIA-036"
  },
  {
    "type": "trivia",
    "prompt": "Why did the Queen of Saba uncover her shins upon entering Sulayman’s palace?",
    "answer": "She mistook the glass floor for a body of water",
    "source": "Qur’an 27:44",
    "id": "TRIVIA-037"
  },
  {
    "type": "trivia",
    "prompt": "What did Isa form from clay before it became alive by Allah’s permission?",
    "answer": "The shape of a bird",
    "source": "Qur’an 3:49",
    "id": "TRIVIA-038"
  },
  {
    "type": "trivia",
    "prompt": "What does Surah Al-Jumu‘ah tell believers to leave when the Friday prayer is called?",
    "answer": "Trade",
    "source": "Qur’an 62:9",
    "id": "TRIVIA-039"
  },
  {
    "type": "trivia",
    "prompt": "What purpose of fasting is stated at the end of Qur’an 2:183?",
    "answer": "That believers may attain taqwa",
    "source": "Qur’an 2:183",
    "id": "TRIVIA-040"
  },
  {
    "type": "trivia",
    "prompt": "How does the Qur’an describe the timing of Hajj rather than listing the months by name?",
    "answer": "It says Hajj is during well-known months",
    "source": "Qur’an 2:197",
    "id": "TRIVIA-041"
  },
  {
    "type": "trivia",
    "prompt": "What must be accounted for before the inheritance shares in Qur’an 4 are distributed?",
    "answer": "Any bequest and debt",
    "source": "Qur’an 4:11–12",
    "id": "TRIVIA-042"
  },
  {
    "type": "trivia",
    "prompt": "What should a creditor do when a debtor is in genuine hardship?",
    "answer": "Grant more time; waiving it as charity is even better",
    "source": "Qur’an 2:280",
    "id": "TRIVIA-043"
  },
  {
    "type": "trivia",
    "prompt": "How many witnesses does Qur’an 24:4 require from those who accuse chaste women of unlawful sexual conduct?",
    "answer": "Four witnesses",
    "source": "Qur’an 24:4",
    "id": "TRIVIA-044"
  },
  {
    "type": "trivia",
    "prompt": "How should a greeting be answered according to Qur’an 4:86?",
    "answer": "With one better than it or at least equal to it",
    "source": "Qur’an 4:86",
    "id": "TRIVIA-045"
  },
  {
    "type": "trivia",
    "prompt": "What must believers do when an unreliable person brings consequential news?",
    "answer": "Verify it before harming people in ignorance",
    "source": "Qur’an 49:6",
    "id": "TRIVIA-046"
  },
  {
    "type": "trivia",
    "prompt": "What must hatred of a people never cause believers to abandon?",
    "answer": "Justice",
    "source": "Qur’an 5:8",
    "id": "TRIVIA-047"
  },
  {
    "type": "trivia",
    "prompt": "After consultation and a firm decision, what does Qur’an 3:159 command?",
    "answer": "Place trust in Allah",
    "source": "Qur’an 3:159",
    "id": "TRIVIA-048"
  },
  {
    "type": "trivia",
    "prompt": "What must people change before Allah changes their condition?",
    "answer": "What is within themselves",
    "source": "Qur’an 13:11",
    "id": "TRIVIA-049"
  },
  {
    "type": "trivia",
    "prompt": "What would happen to a mountain if the Qur’an were sent down upon it?",
    "answer": "It would be humbled and split apart from awe of Allah",
    "source": "Qur’an 59:21",
    "id": "TRIVIA-050"
  },
  {
    "type": "trivia",
    "prompt": "What principle opens Sahih al-Bukhari regarding the value of deeds?",
    "answer": "Deeds are judged by intentions, and each person receives according to what they intended",
    "source": "Sahih al-Bukhari 1",
    "id": "TRIVIA-051"
  },
  {
    "type": "trivia",
    "prompt": "What three signs of a hypocrite are listed in the famous hadith?",
    "answer": "Lying when speaking, breaking promises, and betraying trusts",
    "source": "Sahih al-Bukhari 33",
    "id": "TRIVIA-052"
  },
  {
    "type": "trivia",
    "prompt": "How many categories of people are promised Allah’s shade in the famous hadith?",
    "answer": "Seven",
    "source": "Sahih al-Bukhari 660",
    "id": "TRIVIA-053"
  },
  {
    "type": "trivia",
    "prompt": "Which believer is described as better and more beloved to Allah, while good exists in both?",
    "answer": "The strong believer",
    "source": "Sahih Muslim 2664",
    "id": "TRIVIA-054"
  },
  {
    "type": "trivia",
    "prompt": "What does Allah look at rather than people’s bodies and wealth?",
    "answer": "Their hearts and deeds",
    "source": "Sahih Muslim 2564c",
    "id": "TRIVIA-055"
  },
  {
    "type": "trivia",
    "prompt": "To whom is sincere counsel owed in the hadith “Religion is sincere counsel”?",
    "answer": "Allah, His Book, His Messenger, Muslim leaders, and the Muslim public",
    "source": "Sahih Muslim 55a",
    "id": "TRIVIA-056"
  },
  {
    "type": "trivia",
    "prompt": "What is described as half of faith in Sahih Muslim?",
    "answer": "Purification",
    "source": "Sahih Muslim 223",
    "id": "TRIVIA-057"
  },
  {
    "type": "trivia",
    "prompt": "What should not happen to a believer from the same hole twice?",
    "answer": "They should not be stung from it twice",
    "source": "Sahih al-Bukhari 6133",
    "id": "TRIVIA-058"
  },
  {
    "type": "trivia",
    "prompt": "What two blessings does the hadith say many people waste?",
    "answer": "Health and free time",
    "source": "Sahih al-Bukhari 6412",
    "id": "TRIVIA-059"
  },
  {
    "type": "trivia",
    "prompt": "What does the hadith pair with belief in Allah and the Last Day regarding speech?",
    "answer": "Speak good or remain silent",
    "source": "Sahih al-Bukhari 6018; Sahih Muslim 47a",
    "id": "TRIVIA-060"
  },
  {
    "type": "identity",
    "prompt": "Wisdom—not prophethood—is the gift explicitly named for me. My advice moves from tawhid to prayer, patience, humility, and even lowering the voice. Who am I?",
    "answer": "Luqman",
    "source": "Qur’an 31:12–19",
    "id": "RIDDLE-001"
  },
  {
    "type": "identity",
    "prompt": "I learned names no angel had been taught. Clay was my beginning, a garden my first home, and earth the place of my trial. Who am I?",
    "answer": "Adam",
    "source": "Qur’an 2:30–38",
    "id": "RIDDLE-002"
  },
  {
    "type": "identity",
    "prompt": "My Qur’anic biography is only two verses long: I am called truthful and a prophet, then raised to a high station. Who am I?",
    "answer": "Idris",
    "source": "Qur’an 19:56–57",
    "id": "RIDDLE-003"
  },
  {
    "type": "identity",
    "prompt": "Planks and nails carried my trust. A mountain could not save one who rejected the call, and the vessel finally rested on Al-Judi. Who am I?",
    "answer": "Nuh",
    "source": "Qur’an 11:36–44; 54:13",
    "id": "RIDDLE-004"
  },
  {
    "type": "identity",
    "prompt": "I warned a people proud of their strength. Their towers did not shield them when a furious wind continued for seven nights and eight days. Who am I?",
    "answer": "Hud",
    "source": "Qur’an 7:65–72; 69:6–8",
    "id": "RIDDLE-005"
  },
  {
    "type": "identity",
    "prompt": "My people carved homes into mountains. Their test walked on four legs, drank on an appointed day, and was harmed despite my warning. Who am I?",
    "answer": "Salih",
    "source": "Qur’an 7:73–77; 26:141–159",
    "id": "RIDDLE-006"
  },
  {
    "type": "identity",
    "prompt": "I asked a silent line of statues why they would not eat, then faced a fire whose command became coolness and safety. Who am I?",
    "answer": "Ibrahim",
    "source": "Qur’an 37:91–96; 21:51–70",
    "id": "RIDDLE-007"
  },
  {
    "type": "identity",
    "prompt": "Angelic guests reached my home before I knew who they were. I offered protection while my people rushed toward the house. Who am I?",
    "answer": "Lut",
    "source": "Qur’an 11:77–83",
    "id": "RIDDLE-008"
  },
  {
    "type": "identity",
    "prompt": "I helped raise foundations older than my nation. Father and son worked together, asking that the deed be accepted. Who am I?",
    "answer": "Ismail",
    "source": "Qur’an 2:125–129",
    "id": "RIDDLE-009"
  },
  {
    "type": "identity",
    "prompt": "My birth was announced to a laughing mother; in the same message came news of my son Yaqub. Who am I?",
    "answer": "Ishaq",
    "source": "Qur’an 11:69–73",
    "id": "RIDDLE-010"
  },
  {
    "type": "identity",
    "prompt": "Grief turned my eyes white, but not my hope. The scent of a shirt reached me before the caravan did. Who am I?",
    "answer": "Yaqub",
    "source": "Qur’an 12:84–96",
    "id": "RIDDLE-011"
  },
  {
    "type": "identity",
    "prompt": "One shirt was stained but not torn; another was torn from behind; a third restored sight. Whose story ties all three together?",
    "answer": "Yusuf",
    "source": "Qur’an 12:18, 12:25–28, 12:93–96",
    "id": "RIDDLE-012"
  },
  {
    "type": "identity",
    "prompt": "The marketplace was my pulpit: I demanded full measure and weight while warning against corruption in the land. Who am I?",
    "answer": "Shu‘ayb",
    "source": "Qur’an 11:84–88",
    "id": "RIDDLE-013"
  },
  {
    "type": "identity",
    "prompt": "After loss and illness, my remedy began with a command to strike the ground. Cool water followed, and so did restoration. Who am I?",
    "answer": "Ayyub",
    "source": "Qur’an 38:41–44",
    "id": "RIDDLE-014"
  },
  {
    "type": "identity",
    "prompt": "A ship, a lot, and a great fish mark my flight; layers of darkness mark my prayer. Who am I?",
    "answer": "Yunus",
    "source": "Qur’an 21:87–88; 37:139–148",
    "id": "RIDDLE-015"
  },
  {
    "type": "identity",
    "prompt": "Old age had reached me and my wife was barren, yet my private prayer was answered. Silence for three nights became my sign. Who am I?",
    "answer": "Zakariyya",
    "source": "Qur’an 19:2–11",
    "id": "RIDDLE-016"
  },
  {
    "type": "identity",
    "prompt": "Before I was born, my name was declared unique. As a child I received wisdom and was commanded to hold firmly to the Scripture. Who am I?",
    "answer": "Yahya",
    "source": "Qur’an 19:7–15",
    "id": "RIDDLE-017"
  },
  {
    "type": "identity",
    "prompt": "Solitude, an angelic message, a palm trunk, and a newborn who spoke in my defense—whose story is this?",
    "answer": "Maryam",
    "source": "Qur’an 19:16–33",
    "id": "RIDDLE-018"
  },
  {
    "type": "identity",
    "prompt": "I spoke before ordinary speech, formed a bird from clay by Allah’s permission, and confirmed the Torah before me. Who am I?",
    "answer": "Isa",
    "source": "Qur’an 3:45–51; 5:110",
    "id": "RIDDLE-019"
  },
  {
    "type": "identity",
    "prompt": "A river carried me as an infant; a staff led me as a prophet; the sea opened before me as a leader. Who am I?",
    "answer": "Musa",
    "source": "Qur’an 28:7–13; 26:60–68",
    "id": "RIDDLE-020"
  },
  {
    "type": "identity",
    "prompt": "My brother called me more eloquent and asked Allah to make me his supporting minister. Who am I?",
    "answer": "Harun",
    "source": "Qur’an 20:29–36; 28:34–35",
    "id": "RIDDLE-021"
  },
  {
    "type": "identity",
    "prompt": "I defeated a giant before receiving kingship. Mountains and birds joined my praise, and iron was softened for my craft. Who am I?",
    "answer": "Dawud",
    "source": "Qur’an 2:251; 21:79–80; 34:10",
    "id": "RIDDLE-022"
  },
  {
    "type": "identity",
    "prompt": "I understood the speech of birds, smiled at an ant, and asked for a kingdom unlike any after me. Who am I?",
    "answer": "Sulayman",
    "source": "Qur’an 27:15–19; 38:35",
    "id": "RIDDLE-023"
  },
  {
    "type": "identity",
    "prompt": "I challenged worshippers of Ba‘l: “Do you call upon a crafted god and leave the Best of creators?” Who am I?",
    "answer": "Ilyas",
    "source": "Qur’an 37:123–132",
    "id": "RIDDLE-024"
  },
  {
    "type": "identity",
    "prompt": "I am named only briefly, once among prophets favored above the worlds and once among the outstanding. Who am I?",
    "answer": "Al-Yasa",
    "source": "Qur’an 6:86; 38:48",
    "id": "RIDDLE-025"
  },
  {
    "type": "identity",
    "prompt": "I appear beside Ismail and Idris among the patient, then beside Al-Yasa among the outstanding. Who am I?",
    "answer": "Dhul-Kifl",
    "source": "Qur’an 21:85–86; 38:48",
    "id": "RIDDLE-026"
  },
  {
    "type": "identity",
    "prompt": "My journeys reached two horizons. Between two mountain walls I used iron and molten copper to restrain Ya’juj and Ma’juj. Who am I?",
    "answer": "Dhul-Qarnayn",
    "source": "Qur’an 18:83–98",
    "id": "RIDDLE-027"
  },
  {
    "type": "identity",
    "prompt": "The keys to my treasures burdened strong men. I claimed knowledge earned my wealth; then earth swallowed both house and owner. Who am I?",
    "answer": "Qarun",
    "source": "Qur’an 28:76–82",
    "id": "RIDDLE-028"
  },
  {
    "type": "identity",
    "prompt": "No royal bloodline is given for me, yet I was appointed king. A river reduced my army before a smaller force met Jalut. Who am I?",
    "answer": "Talut",
    "source": "Qur’an 2:246–251",
    "id": "RIDDLE-029"
  },
  {
    "type": "identity",
    "prompt": "My army faced a much smaller force whose soldiers had just been tested at a river. A future prophet-king killed me, and my defeat began his rise. Who am I?",
    "answer": "Jalut",
    "source": "Qur’an 2:249–251",
    "id": "RIDDLE-030"
  },
  {
    "type": "identity",
    "prompt": "I shaped a calf from ornaments while Musa was away, then claimed insight others did not see. My punishment included saying, “No contact.” Who am I?",
    "answer": "As-Samiri",
    "source": "Qur’an 20:85–97",
    "id": "RIDDLE-031"
  },
  {
    "type": "identity",
    "prompt": "A tyrant ordered me to bake clay and raise a tower. Elsewhere my name is grouped with Qarun among the enemies of Musa. Who am I?",
    "answer": "Haman",
    "source": "Qur’an 28:6, 28:38; 40:36–37",
    "id": "RIDDLE-032"
  },
  {
    "type": "identity",
    "prompt": "I gathered people and claimed, “I am your lord, most high.” At the sea I declared belief only when drowning overtook me. Who am I?",
    "answer": "Pharaoh",
    "source": "Qur’an 79:23–24; 10:90–92",
    "id": "RIDDLE-033"
  },
  {
    "type": "identity",
    "prompt": "A bird reported my throne before I received a letter beginning with the name of Allah. I recognized truth after mistaking glass for water. Who am I?",
    "answer": "The Queen of Saba",
    "source": "Qur’an 27:22–44",
    "id": "RIDDLE-034"
  },
  {
    "type": "identity",
    "prompt": "I brought revelation to Muhammad’s heart by Allah’s permission; hostility toward me is answered by name in the Qur’an. Who am I?",
    "answer": "Jibril",
    "source": "Qur’an 2:97–98",
    "id": "RIDDLE-035"
  },
  {
    "type": "identity",
    "prompt": "I am named once in the Qur’an, beside Jibril, in a warning about taking Allah’s angels as enemies. Who am I?",
    "answer": "Mikail",
    "source": "Qur’an 2:98",
    "id": "RIDDLE-036"
  },
  {
    "type": "identity",
    "prompt": "People of the Fire call my name and ask that their Lord finish them, but I answer that they will remain. Who am I?",
    "answer": "Malik, the keeper of Hell",
    "source": "Qur’an 43:74–77",
    "id": "RIDDLE-037"
  },
  {
    "type": "identity",
    "prompt": "We are two angels named together in Babylon. People learned from our trial only after hearing our warning not to disbelieve. Who are we?",
    "answer": "Harut and Marut",
    "source": "Qur’an 2:102",
    "id": "RIDDLE-038"
  },
  {
    "type": "identity",
    "prompt": "I was absent from a royal gathering, returned from Saba with certain news, and carried a sealed letter. What bird am I?",
    "answer": "The hoopoe",
    "source": "Qur’an 27:20–31",
    "id": "RIDDLE-039"
  },
  {
    "type": "identity",
    "prompt": "I am the smallest speaker in a royal march. My warning sent my colony indoors and made a prophet smile. What am I?",
    "answer": "The ant in Sulayman’s story",
    "source": "Qur’an 27:18–19",
    "id": "RIDDLE-040"
  },
  {
    "type": "identity",
    "prompt": "My shade, age, and labor history became a dispute. Only after I was slaughtered did part of me reveal a murderer. What am I?",
    "answer": "The cow of Bani Israel",
    "source": "Qur’an 2:67–73",
    "id": "RIDDLE-041"
  },
  {
    "type": "identity",
    "prompt": "In one hand I moved like a serpent; at the sea I became a means of passage; at a rock I opened twelve springs. What am I?",
    "answer": "The staff of Musa",
    "source": "Qur’an 7:107; 26:63; 2:60",
    "id": "RIDDLE-042"
  },
  {
    "type": "identity",
    "prompt": "I arrived as proof of a king’s appointment. Within me were tranquility and relics left by the families of Musa and Harun. What am I?",
    "answer": "The Tabut—the Ark mentioned as Talut’s sign",
    "source": "Qur’an 2:248",
    "id": "RIDDLE-043"
  },
  {
    "type": "identity",
    "prompt": "I was built before rain was visible, mocked before water rose, and carried pairs through waves like mountains. What am I?",
    "answer": "The ark of Nuh",
    "source": "Qur’an 11:36–44",
    "id": "RIDDLE-044"
  },
  {
    "type": "identity",
    "prompt": "I had an appointed drink and my people had theirs. I was a sign, not livestock to be harmed, yet they hamstrung me. What am I?",
    "answer": "The she-camel of Salih",
    "source": "Qur’an 7:73–77; 26:155–157",
    "id": "RIDDLE-045"
  },
  {
    "type": "identity",
    "prompt": "I did not sleep inside the cave, yet the Qur’an places me at its entrance with forelegs stretched out. What am I?",
    "answer": "The dog of the Companions of the Cave",
    "source": "Qur’an 18:18",
    "id": "RIDDLE-046"
  },
  {
    "type": "identity",
    "prompt": "A murder left a body and no burial lesson. I scratched the ground, teaching a son of Adam what to do. What am I?",
    "answer": "The crow sent after the first murder",
    "source": "Qur’an 5:27–31",
    "id": "RIDDLE-047"
  },
  {
    "type": "identity",
    "prompt": "A prophet entered me after lots were drawn. A prayer from darkness preceded my casting onto the open shore. What am I?",
    "answer": "The great fish that swallowed Yunus",
    "source": "Qur’an 21:87–88; 37:139–146",
    "id": "RIDDLE-048"
  },
  {
    "type": "identity",
    "prompt": "I build the frailest home, yet I anchor a parable about seeking protectors besides Allah. What am I?",
    "answer": "The spider’s house",
    "source": "Qur’an 29:41",
    "id": "RIDDLE-049"
  },
  {
    "type": "identity",
    "prompt": "I am an ancient name for the location of the first House established for humanity, described as blessed and a guidance. What am I?",
    "answer": "Bakkah",
    "source": "Qur’an 3:96",
    "id": "RIDDLE-050"
  },
  {
    "type": "mizan",
    "prompt": "A private mistake becomes public. Correcting the false public narrative may expose a person’s real private sin. What information is actually necessary to disclose?",
    "answer": "Distinguish correcting harm from satisfying curiosity. Propose the least exposing response that restores the truth.",
    "source": "Principles of verification and justice; see Qur’an 49:6 and 5:8",
    "id": "DILEMMA-001"
  },
  {
    "type": "mizan",
    "prompt": "A speaker quotes an authentic hadith correctly, then removes its context to shame a particular group. Is citing a true text enough?",
    "answer": "Evaluate the source, interpretation, purpose, likely harm, and whether the application is sound—not merely whether the quotation exists.",
    "source": "Method question; qualified scholarship may be required",
    "id": "DILEMMA-002"
  },
  {
    "type": "mizan",
    "prompt": "Your loyalty to a Muslim friend makes you minimize harm they caused. Another person’s dislike makes them exaggerate it.",
    "answer": "Build a response that avoids both defensive loyalty and hostile injustice. What facts must be separated from interpretation?",
    "source": "See Qur’an 4:135 and 5:8",
    "id": "DILEMMA-003"
  },
  {
    "type": "mizan",
    "prompt": "You believe someone is manipulating others and could publicly expose them, but your evidence includes assumptions and private messages obtained indirectly.",
    "answer": "Identify what must be verified, whose rights are involved, and when the matter should go to an appropriate authority instead of an audience.",
    "source": "See Qur’an 49:6 and 49:12",
    "id": "DILEMMA-004"
  },
  {
    "type": "mizan",
    "prompt": "A family tradition is not religiously required, but rejecting it harshly would deeply wound your parents. Complying would not itself be sinful.",
    "answer": "How do you preserve principle without turning every preference into a religious confrontation? Give a gracious boundary or compromise.",
    "source": "See Qur’an 17:23–24; no single ruling implied",
    "id": "DILEMMA-005"
  },
  {
    "type": "mizan",
    "prompt": "An older relative gives harmful advice publicly. Correcting them immediately may protect others but humiliate them. Waiting may allow the advice to spread.",
    "answer": "Choose what must be corrected now, what can wait, and language that protects truth without using truth as a weapon.",
    "source": "Principles of wisdom and gracious speech; see Qur’an 16:125",
    "id": "DILEMMA-006"
  },
  {
    "type": "mizan",
    "prompt": "A close friend privately admits serious wrongdoing that may still be harming someone else. They demand absolute secrecy because they trusted you.",
    "answer": "Separate confidentiality from enabling harm. What safety, restitution, or qualified guidance is now necessary?",
    "source": "Rights and safety may require qualified guidance",
    "id": "DILEMMA-007"
  },
  {
    "type": "mizan",
    "prompt": "Someone asks whether a potential business partner is trustworthy. You know relevant negative facts, but sharing everything would become gossip.",
    "answer": "State only verified, decision-relevant information. Distinguish sincere warning from character assassination.",
    "source": "See Qur’an 49:12; context may require scholarship",
    "id": "DILEMMA-008"
  },
  {
    "type": "mizan",
    "prompt": "A mandatory work meeting repeatedly overlaps with prayer time. Leaving abruptly risks your job; saying nothing makes the conflict permanent.",
    "answer": "Design a response that combines planning, respectful accommodation, and responsibility rather than panic or silent resentment.",
    "source": "Practical dilemma; local law and scholarship may matter",
    "id": "DILEMMA-009"
  },
  {
    "type": "mizan",
    "prompt": "A charity campaign will raise more money if recipients’ most painful moments are filmed. Consent is technically obtained, but the power imbalance is obvious.",
    "answer": "Weigh dignity, meaningful consent, fundraising benefit, and less-exposing alternatives.",
    "source": "Human dignity and charity ethics",
    "id": "DILEMMA-010"
  },
  {
    "type": "mizan",
    "prompt": "Your public advocacy is effective, but you notice that anger, applause, and personal visibility increasingly motivate you.",
    "answer": "How can you protect the beneficial work while correcting intention, tone, and accountability?",
    "source": "Reflection on intention; see Sahih al-Bukhari 1",
    "id": "DILEMMA-011"
  },
  {
    "type": "mizan",
    "prompt": "Your spouse requests a boundary with extended family. Your parents interpret the boundary as rejection and demand loyalty.",
    "answer": "Identify actual duties, negotiable expectations, and a way to refuse triangulation without abandoning kindness.",
    "source": "Family rights require context and qualified counsel",
    "id": "DILEMMA-012"
  },
  {
    "type": "mizan",
    "prompt": "A generous friend keeps lending money to someone who repeatedly avoids repayment and manipulates their sympathy.",
    "answer": "When does generosity become enabling? Propose compassion with documentation, limits, and accountability.",
    "source": "See Qur’an 2:282; individual circumstances matter",
    "id": "DILEMMA-013"
  },
  {
    "type": "mizan",
    "prompt": "A product is technically permissible, but its advertising deliberately creates insecurity and pressures vulnerable buyers.",
    "answer": "Assess more than the product label: examine deception, harm, consent, and the ethics of the sales method.",
    "source": "Business-ethics discussion; qualified review may be needed",
    "id": "DILEMMA-014"
  },
  {
    "type": "mizan",
    "prompt": "A shocking clip is spreading rapidly. Waiting to verify it may feel like silence in the face of injustice; sharing it may amplify a lie.",
    "answer": "What can you responsibly say before verification, and what evidence would justify stronger action?",
    "source": "Qur’an 49:6",
    "id": "DILEMMA-015"
  },
  {
    "type": "mizan",
    "prompt": "Friends begin backbiting someone who genuinely hurt the group. Stopping them feels like defending the offender.",
    "answer": "Interrupt the prohibited behavior without erasing the harm. What healthier process could replace the conversation?",
    "source": "Qur’an 49:12; Sahih Muslim 2589",
    "id": "DILEMMA-016"
  },
  {
    "type": "mizan",
    "prompt": "Someone says relying on Allah means they do not need preparation, professional advice, or contingency plans.",
    "answer": "Explain how trust in Allah can coexist with responsible means, effort, and acceptance of the outcome.",
    "source": "See Qur’an 3:159",
    "id": "DILEMMA-017"
  },
  {
    "type": "mizan",
    "prompt": "A wedding custom is permissible but financially extravagant. Refusing it may trigger family conflict and social embarrassment.",
    "answer": "Separate generosity from performance. What budget, boundary, or alternative preserves joy without avoidable debt?",
    "source": "Financial and family dilemma; no single ruling implied",
    "id": "DILEMMA-018"
  },
  {
    "type": "mizan",
    "prompt": "You volunteered for a good cause with mixed motives. Part of you wants reward from Allah; another part wants belonging and recognition.",
    "answer": "Must mixed motives end the good work, or can intention be repaired during it? Give concrete safeguards.",
    "source": "Intention discussion; see Sahih al-Bukhari 1",
    "id": "DILEMMA-019"
  },
  {
    "type": "mizan",
    "prompt": "You have forgiven someone internally, but rebuilding closeness would expose you to the same pattern of harm. They say forgiveness requires full access.",
    "answer": "Distinguish releasing vengeance, restoring rights, reconciliation, and renewed trust.",
    "source": "Personal-safety and character discussion",
    "id": "DILEMMA-020"
  },
  {
    "type": "mizan",
    "prompt": "A person offers an apology only if you promise never to mention the harm again, even when disclosure may protect others.",
    "answer": "What would make the condition reasonable, manipulative, or unsafe? Identify whose rights remain involved.",
    "source": "Context-sensitive rights dilemma",
    "id": "DILEMMA-021"
  },
  {
    "type": "mizan",
    "prompt": "A respected community leader is deciding a matter that benefits their relative. They insist their intentions are pure.",
    "answer": "What process protects everyone even if the leader is sincere? Consider disclosure, recusal, and independent review.",
    "source": "Justice and conflict-of-interest discussion",
    "id": "DILEMMA-022"
  },
  {
    "type": "mizan",
    "prompt": "You receive harsh but potentially useful advice from an anonymous account. You cannot assess the person’s motives or knowledge.",
    "answer": "How much should the messenger’s identity matter when evaluating the claim? Separate evidence from tone.",
    "source": "Verification and self-accountability",
    "id": "DILEMMA-023"
  },
  {
    "type": "mizan",
    "prompt": "Private messages exposing misconduct were leaked. The leak itself was wrong, but the messages may reveal real ongoing harm.",
    "answer": "Avoid the false choice that only one wrong can matter. What must be verified, protected, and handled by proper authorities?",
    "source": "Qur’an 49:6, 49:12; legal advice may be needed",
    "id": "DILEMMA-024"
  },
  {
    "type": "mizan",
    "prompt": "A short clip of a scholar appears to support a harsh conclusion, but the full lecture and question are unavailable.",
    "answer": "What should you verify before quoting, condemning, or applying the clip to another person?",
    "source": "Context and qualified scholarship required",
    "id": "DILEMMA-025"
  },
  {
    "type": "mizan",
    "prompt": "A boycott campaign names a company using evidence that is emotionally powerful but incomplete. Participation may help a cause or unjustly harm workers.",
    "answer": "Set an evidence threshold and decide what uncertainty should change about your language and action.",
    "source": "Collective-action dilemma; verify current facts",
    "id": "DILEMMA-026"
  },
  {
    "type": "mizan",
    "prompt": "A colleague makes space for your religious practice but expects you to cover an unfair share of work in return.",
    "answer": "How do you express gratitude without accepting an exploitative trade? Propose a fair arrangement.",
    "source": "Workplace ethics; local policies may apply",
    "id": "DILEMMA-027"
  },
  {
    "type": "mizan",
    "prompt": "A financially irresponsible sibling asks whether they can receive your zakah. Giving may help urgently or sustain the pattern.",
    "answer": "Identify the separate questions: eligibility, immediate need, method of support, and whether expert guidance is required.",
    "source": "Zakah ruling requires qualified scholarship",
    "id": "DILEMMA-028"
  },
  {
    "type": "mizan",
    "prompt": "Someone asks you for a religious ruling because you are “the practicing one” in the group. You know a little but are not qualified.",
    "answer": "How can you be helpful without guessing, performing certainty, or abandoning them with no next step?",
    "source": "See Qur’an 16:43; refer questions to qualified people",
    "id": "DILEMMA-029"
  },
  {
    "type": "mizan",
    "prompt": "A person’s public sin is already widely known. Sharing another humiliating detail would make the warning more persuasive.",
    "answer": "Does public knowledge remove all privacy? Use the least information necessary to prevent specific harm.",
    "source": "Dignity, verification, and proportionality",
    "id": "DILEMMA-030"
  },
  {
    "type": "mizan",
    "prompt": "A survivor is pressured to forgive publicly so the community can “move on,” while accountability remains incomplete.",
    "answer": "Center safety and rights. Distinguish spiritual encouragement from coercion and image management.",
    "source": "Trauma-sensitive dilemma; professional support may be needed",
    "id": "DILEMMA-031"
  },
  {
    "type": "mizan",
    "prompt": "Everyone agrees a communal need matters, but each person assumes someone else will handle it. You are already overcommitted.",
    "answer": "What is your fair share? Consider capacity, coordination, and the cost of heroic promises you cannot sustain.",
    "source": "Collective responsibility discussion",
    "id": "DILEMMA-032"
  },
  {
    "type": "mizan",
    "prompt": "A friend is clearly wrong in a dispute, but the opposing person speaks with contempt and exaggerates the facts.",
    "answer": "Defend your friend from injustice without defending their wrongdoing. What would principled loyalty sound like?",
    "source": "Qur’an 4:135 and 5:8",
    "id": "DILEMMA-033"
  },
  {
    "type": "mizan",
    "prompt": "A supplier sends an expensive personal gift just before you choose between competing bids. No explicit favor is requested.",
    "answer": "Assess timing, influence, transparency, policy, and whether accepting would compromise trust.",
    "source": "Potential conflict of interest; legal rules may apply",
    "id": "DILEMMA-034"
  },
  {
    "type": "mizan",
    "prompt": "An influencer’s religious reminders help people, but urgency and guilt are used to sell expensive products attached to every post.",
    "answer": "Evaluate benefit and exploitation separately. What disclosure, pricing, or boundaries would make the model more ethical?",
    "source": "Commerce, sincerity, and influence discussion",
    "id": "DILEMMA-035"
  },
  {
    "type": "reflection",
    "prompt": "Which belief do you affirm intellectually but struggle to live as though it is true?",
    "answer": "",
    "source": "Private reflection; passing is always allowed",
    "id": "SURFACE-001"
  },
  {
    "type": "reflection",
    "prompt": "What situation exposes the widest gap between what you believe and how you live?",
    "answer": "",
    "source": "Private reflection; passing is always allowed",
    "id": "SURFACE-002"
  },
  {
    "type": "reflection",
    "prompt": "When does “protecting your peace” become avoidance of an obligation, repair, or necessary discomfort?",
    "answer": "",
    "source": "Reflection; context may require scholarship",
    "id": "SURFACE-003"
  },
  {
    "type": "reflection",
    "prompt": "How do you distinguish a healthy boundary from an escape from necessary discomfort?",
    "answer": "",
    "source": "Reflection; context may require scholarship",
    "id": "SURFACE-004"
  },
  {
    "type": "reflection",
    "prompt": "Which is more dangerous for you personally: being misunderstood or becoming insincere while trying to be understood?",
    "answer": "",
    "source": "Reflection on intention",
    "id": "SURFACE-005"
  },
  {
    "type": "reflection",
    "prompt": "How do you protect sincerity without making every misunderstanding your responsibility?",
    "answer": "",
    "source": "Reflection on intention",
    "id": "SURFACE-006"
  },
  {
    "type": "reflection",
    "prompt": "What criticism do you reject because it is false—and what smaller truth might still be hidden inside it?",
    "answer": "",
    "source": "Reflection",
    "id": "SURFACE-007"
  },
  {
    "type": "reflection",
    "prompt": "How can you separate unfair criticism from any useful truth hidden inside it?",
    "answer": "",
    "source": "Reflection",
    "id": "SURFACE-008"
  },
  {
    "type": "reflection",
    "prompt": "What religious habit could remain outwardly impressive even after its inner purpose has weakened?",
    "answer": "",
    "source": "Reflection on sincerity and renewal",
    "id": "SURFACE-009"
  },
  {
    "type": "reflection",
    "prompt": "How can you notice when a good deed has lost meaning without abandoning it?",
    "answer": "",
    "source": "Reflection on sincerity and renewal",
    "id": "SURFACE-010"
  },
  {
    "type": "reflection",
    "prompt": "Which act of worship changes most when nobody knows you performed it?",
    "answer": "",
    "source": "Private reflection on sincerity",
    "id": "SURFACE-011"
  },
  {
    "type": "reflection",
    "prompt": "What does private worship reveal about your need to be noticed?",
    "answer": "",
    "source": "Private reflection on sincerity",
    "id": "SURFACE-012"
  },
  {
    "type": "reflection",
    "prompt": "When does envy disguise itself as “honest criticism” in your inner dialogue?",
    "answer": "",
    "source": "Reflection on envy and fairness",
    "id": "SURFACE-013"
  },
  {
    "type": "reflection",
    "prompt": "What evidence helps you distinguish principled concern from envy of someone else’s success?",
    "answer": "",
    "source": "Reflection on envy and fairness",
    "id": "SURFACE-014"
  },
  {
    "type": "reflection",
    "prompt": "Have you ever apologized mainly to stop feeling like the bad person rather than to repair what happened?",
    "answer": "",
    "source": "Reflection on accountability",
    "id": "SURFACE-015"
  },
  {
    "type": "reflection",
    "prompt": "What would an apology centered on the harmed person require from you?",
    "answer": "",
    "source": "Reflection on accountability",
    "id": "SURFACE-016"
  },
  {
    "type": "reflection",
    "prompt": "Which situations make control feel safer to you than tawakkul?",
    "answer": "",
    "source": "Reflection on effort and trust",
    "id": "SURFACE-017"
  },
  {
    "type": "reflection",
    "prompt": "Which outcomes are you still trying to control after taking every responsible action available to you?",
    "answer": "",
    "source": "Reflection on effort and trust",
    "id": "SURFACE-018"
  },
  {
    "type": "reflection",
    "prompt": "Which boundary protects something valuable, and which boundary mainly protects your ego from discomfort?",
    "answer": "",
    "source": "Reflection on boundaries",
    "id": "SURFACE-019"
  },
  {
    "type": "reflection",
    "prompt": "How can you judge whether a boundary is proportionate and consistent with your obligations?",
    "answer": "",
    "source": "Reflection on boundaries",
    "id": "SURFACE-020"
  },
  {
    "type": "reflection",
    "prompt": "Whose praise changes your energy for good deeds the most?",
    "answer": "",
    "source": "Reflection on approval",
    "id": "SURFACE-021"
  },
  {
    "type": "reflection",
    "prompt": "What happens to your motivation for good deeds when the person whose praise matters most does not notice?",
    "answer": "",
    "source": "Reflection on approval",
    "id": "SURFACE-022"
  },
  {
    "type": "reflection",
    "prompt": "Have you ever missed the closeness to Allah you felt during a hardship after the hardship ended?",
    "answer": "",
    "source": "Reflection on spiritual consistency",
    "id": "SURFACE-023"
  },
  {
    "type": "reflection",
    "prompt": "What practice could preserve a lesson learned through hardship without romanticizing the pain?",
    "answer": "",
    "source": "Reflection on spiritual consistency",
    "id": "SURFACE-024"
  },
  {
    "type": "reflection",
    "prompt": "Toward whom is your compassion most selective?",
    "answer": "",
    "source": "Reflection on mercy and bias",
    "id": "SURFACE-025"
  },
  {
    "type": "reflection",
    "prompt": "What story makes another person’s pain feel less deserving of your compassion?",
    "answer": "",
    "source": "Reflection on mercy and bias",
    "id": "SURFACE-026"
  },
  {
    "type": "reflection",
    "prompt": "What has a delayed du‘a exposed about what you believe Allah owes you?",
    "answer": "",
    "source": "Reflection on supplication",
    "id": "SURFACE-027"
  },
  {
    "type": "reflection",
    "prompt": "How can hope, grief, and good expectation of Allah coexist without pretending disappointment is absent?",
    "answer": "",
    "source": "Reflection on supplication",
    "id": "SURFACE-028"
  },
  {
    "type": "reflection",
    "prompt": "When does humility become self-erasure rather than honest modesty?",
    "answer": "",
    "source": "Reflection on humility",
    "id": "SURFACE-029"
  },
  {
    "type": "reflection",
    "prompt": "How can you acknowledge your strengths without turning them into superiority?",
    "answer": "",
    "source": "Reflection on humility",
    "id": "SURFACE-030"
  },
  {
    "type": "reflection",
    "prompt": "Which anger do you label “righteous” because that label protects it from examination?",
    "answer": "",
    "source": "Reflection on anger",
    "id": "SURFACE-031"
  },
  {
    "type": "reflection",
    "prompt": "How much of your anger is truly about principle, and how much is personal hurt or pride?",
    "answer": "",
    "source": "Reflection on anger",
    "id": "SURFACE-032"
  },
  {
    "type": "reflection",
    "prompt": "Which family or cultural expectation has become entangled with your religious identity?",
    "answer": "",
    "source": "Reflection on faith and culture",
    "id": "SURFACE-033"
  },
  {
    "type": "reflection",
    "prompt": "What remains of a family or cultural expectation after you separate revelation, loyalty, culture, and fear of judgment?",
    "answer": "",
    "source": "Reflection on faith and culture",
    "id": "SURFACE-034"
  },
  {
    "type": "reflection",
    "prompt": "What belief would you still practice if it brought no social belonging, image, or advantage?",
    "answer": "",
    "source": "Reflection on conviction",
    "id": "SURFACE-035"
  },
  {
    "type": "reflection",
    "prompt": "What makes a belief durable when belonging, image, and other external rewards disappear?",
    "answer": "",
    "source": "Reflection on conviction",
    "id": "SURFACE-036"
  },
  {
    "type": "reflection",
    "prompt": "Which subject do you keep studying partly to delay acting on what you already know?",
    "answer": "",
    "source": "Reflection on knowledge and action",
    "id": "SURFACE-037"
  },
  {
    "type": "reflection",
    "prompt": "What small action would turn something you already know into a responsibility you actually live?",
    "answer": "",
    "source": "Reflection on knowledge and action",
    "id": "SURFACE-038"
  },
  {
    "type": "reflection",
    "prompt": "When does contentment become an excuse not to improve a changeable situation?",
    "answer": "",
    "source": "Reflection on contentment and action",
    "id": "SURFACE-039"
  },
  {
    "type": "reflection",
    "prompt": "How do you distinguish accepting Allah’s decree from surrendering your agency in a changeable situation?",
    "answer": "",
    "source": "Reflection on contentment and action",
    "id": "SURFACE-040"
  },
  {
    "type": "reflection",
    "prompt": "Can gratitude and grief be present at the same time in your life?",
    "answer": "",
    "source": "Reflection on emotional honesty",
    "id": "SURFACE-041"
  },
  {
    "type": "reflection",
    "prompt": "What is genuinely good in your life that you can name without using it to silence what hurts?",
    "answer": "",
    "source": "Reflection on emotional honesty",
    "id": "SURFACE-042"
  },
  {
    "type": "reflection",
    "prompt": "Which private wrong have you made easier to repeat by giving it a softer name?",
    "answer": "",
    "source": "Reflection on repentance",
    "id": "SURFACE-043"
  },
  {
    "type": "reflection",
    "prompt": "Can you name a private wrong accurately without collapsing into despair or self-hatred?",
    "answer": "",
    "source": "Reflection on repentance",
    "id": "SURFACE-044"
  },
  {
    "type": "reflection",
    "prompt": "What part of your identity is threatened by admitting you need to repent again?",
    "answer": "",
    "source": "Reflection on tawbah",
    "id": "SURFACE-045"
  },
  {
    "type": "reflection",
    "prompt": "How can you keep returning to Allah after repeating a sin without normalizing the sin?",
    "answer": "",
    "source": "Reflection on tawbah",
    "id": "SURFACE-046"
  },
  {
    "type": "reflection",
    "prompt": "Have you confused forgiving someone with denying the seriousness of what happened?",
    "answer": "",
    "source": "Reflection on forgiveness",
    "id": "SURFACE-047"
  },
  {
    "type": "reflection",
    "prompt": "What would forgiveness look like if truth, boundaries, and consequences remained intact?",
    "answer": "",
    "source": "Reflection on forgiveness",
    "id": "SURFACE-048"
  },
  {
    "type": "reflection",
    "prompt": "How much of your self-worth is tied to productivity, usefulness, or being needed?",
    "answer": "",
    "source": "Reflection on worth and service",
    "id": "SURFACE-049"
  },
  {
    "type": "reflection",
    "prompt": "What remains valuable about you when your productivity and usefulness are limited?",
    "answer": "",
    "source": "Reflection on worth and service",
    "id": "SURFACE-050"
  },
  {
    "type": "reflection",
    "prompt": "Which religious aesthetic or lifestyle signal do you instinctively mistake for stronger faith?",
    "answer": "",
    "source": "Reflection on perception",
    "id": "SURFACE-051"
  },
  {
    "type": "reflection",
    "prompt": "What evidence of character matters more than religious aesthetics or lifestyle signals?",
    "answer": "",
    "source": "Reflection on perception",
    "id": "SURFACE-052"
  },
  {
    "type": "reflection",
    "prompt": "Do you help people in ways that quietly make them dependent on you?",
    "answer": "",
    "source": "Reflection on service and ego",
    "id": "SURFACE-053"
  },
  {
    "type": "reflection",
    "prompt": "How can you support someone’s dignity and growth without making yourself central to their life?",
    "answer": "",
    "source": "Reflection on service and ego",
    "id": "SURFACE-054"
  },
  {
    "type": "reflection",
    "prompt": "Which difficult person exposes a trait in you that easier relationships never test?",
    "answer": "",
    "source": "Reflection on character",
    "id": "SURFACE-055"
  },
  {
    "type": "reflection",
    "prompt": "What lesson is a difficult relationship exposing in you without excusing the other person’s harmful behavior?",
    "answer": "",
    "source": "Reflection on character",
    "id": "SURFACE-056"
  },
  {
    "type": "reflection",
    "prompt": "What advice do you give others that you resist applying to yourself?",
    "answer": "",
    "source": "Reflection on consistency",
    "id": "SURFACE-057"
  },
  {
    "type": "reflection",
    "prompt": "What fear or cost appears when advice you give easily to others becomes personal?",
    "answer": "",
    "source": "Reflection on consistency",
    "id": "SURFACE-058"
  },
  {
    "type": "reflection",
    "prompt": "Which standard protects you from an unhealthy relationship, and which standard protects you from vulnerability itself?",
    "answer": "",
    "source": "Reflection on relationships",
    "id": "SURFACE-059"
  },
  {
    "type": "reflection",
    "prompt": "How do you distinguish a standard that protects you from harm from one that protects you from vulnerability?",
    "answer": "",
    "source": "Reflection on relationships",
    "id": "SURFACE-060"
  },
  {
    "type": "reflection",
    "prompt": "Where do you perform certainty because admitting “I don’t know” feels unsafe?",
    "answer": "",
    "source": "Reflection on intellectual humility",
    "id": "SURFACE-061"
  },
  {
    "type": "reflection",
    "prompt": "What would responsible uncertainty sound like when saying “I don’t know” feels unsafe?",
    "answer": "",
    "source": "Reflection on intellectual humility",
    "id": "SURFACE-062"
  },
  {
    "type": "reflection",
    "prompt": "What do you hope people remember about how they felt around you?",
    "answer": "",
    "source": "Reflection on character and legacy",
    "id": "SURFACE-063"
  },
  {
    "type": "reflection",
    "prompt": "Which current habit shapes how people feel around you—for better or worse?",
    "answer": "",
    "source": "Reflection on character and legacy",
    "id": "SURFACE-064"
  },
  {
    "type": "reflection",
    "prompt": "If your public achievements disappeared, what private legacy would you still want to leave?",
    "answer": "",
    "source": "Reflection on lasting impact",
    "id": "SURFACE-065"
  },
  {
    "type": "reflection",
    "prompt": "Which relationship, habit, or contribution could carry the private legacy you want to leave?",
    "answer": "",
    "source": "Reflection on lasting impact",
    "id": "SURFACE-066"
  },
  {
    "type": "reflection",
    "prompt": "At what moment in salah does your attention most often leave?",
    "answer": "",
    "source": "Reflection on khushu‘",
    "id": "SURFACE-067"
  },
  {
    "type": "reflection",
    "prompt": "What usually pulls your attention away in salah, and what small preparation could help?",
    "answer": "",
    "source": "Reflection on khushu‘",
    "id": "SURFACE-068"
  },
  {
    "type": "reflection",
    "prompt": "Which Qur’anic teaching do you find emotionally harder to accept than intellectually difficult to understand?",
    "answer": "",
    "source": "Private reflection; qualified guidance may help",
    "id": "SURFACE-069"
  },
  {
    "type": "reflection",
    "prompt": "What fear, wound, or attachment might be shaping your emotional resistance to a Qur’anic teaching?",
    "answer": "",
    "source": "Private reflection; qualified guidance may help",
    "id": "SURFACE-070"
  },
  {
    "type": "ayah",
    "prompt": "إِيَّاكَ نَعۡبُدُ …",
    "promptTransliteration": "Iyyāka naʿbudu…",
    "promptTranslation": "You alone we worship…",
    "answer": "وَإِيَّاكَ نَسۡتَعِينُ",
    "answerTransliteration": "wa iyyāka nastaʿīn",
    "answerTranslation": "and You alone we ask for help.",
    "source": "Qur’an 1:5",
    "id": "AYAH-001"
  },
  {
    "type": "ayah",
    "prompt": "إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ ۝ ٱهۡدِنَا …",
    "promptTransliteration": "Iyyāka naʿbudu wa iyyāka nastaʿīn. Ihdinā…",
    "promptTranslation": "You alone we worship, and You alone we ask for help. Guide us…",
    "answer": "ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ",
    "answerTransliteration": "aṣ-ṣirāṭ al-mustaqīm",
    "answerTranslation": "to the straight path.",
    "source": "Qur’an 1:5–6",
    "id": "AYAH-002"
  },
  {
    "type": "ayah",
    "prompt": "فَٱذۡكُرُونِيٓ …",
    "promptTransliteration": "Fadhkurūnī…",
    "promptTranslation": "So remember Me…",
    "answer": "أَذۡكُرۡكُمۡ",
    "answerTransliteration": "adhkurkum",
    "answerTranslation": "and I will remember you.",
    "source": "Qur’an 2:152",
    "id": "AYAH-003"
  },
  {
    "type": "ayah",
    "prompt": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱسۡتَعِينُواْ …",
    "promptTransliteration": "Yā ayyuhalladhīna āmanū istaʿīnū…",
    "promptTranslation": "O believers, seek help…",
    "answer": "بِٱلصَّبۡرِ وَٱلصَّلَوٰةِۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
    "answerTransliteration": "biṣ-ṣabri waṣ-ṣalāh; inna Allāha maʿaṣ-ṣābirīn",
    "answerTranslation": "through patience and prayer. Surely Allah is with the patient.",
    "source": "Qur’an 2:153",
    "id": "AYAH-004"
  },
  {
    "type": "ayah",
    "prompt": "كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبۡلِكُمۡ …",
    "promptTransliteration": "Kamā kutiba ʿalalladhīna min qablikum…",
    "promptTranslation": "As it was prescribed for those before you…",
    "answer": "لَعَلَّكُمۡ تَتَّقُونَ",
    "answerTransliteration": "laʿallakum tattaqūn",
    "answerTranslation": "so that you may become mindful of Allah.",
    "source": "Qur’an 2:183",
    "id": "AYAH-005"
  },
  {
    "type": "ayah",
    "prompt": "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي …",
    "promptTransliteration": "Wa idhā sa’alaka ʿibādī ʿannī…",
    "promptTranslation": "When My servants ask you about Me…",
    "answer": "فَإِنِّي قَرِيبٌ",
    "answerTransliteration": "fa-innī qarīb",
    "answerTranslation": "then surely I am near.",
    "source": "Qur’an 2:186",
    "id": "AYAH-006"
  },
  {
    "type": "ayah",
    "prompt": "رَبَّنَآ ءَاتِنَا فِي ٱلدُّنۡيَا حَسَنَةٗ …",
    "promptTransliteration": "Rabbanā ātinā fid-dunyā ḥasanah…",
    "promptTranslation": "Our Lord, give us good in this world…",
    "answer": "وَفِي ٱلۡأٓخِرَةِ حَسَنَةٗ وَقِنَا عَذَابَ ٱلنَّارِ",
    "answerTransliteration": "wa fil-ākhirati ḥasanatan wa qinā ʿadhāban-nār",
    "answerTranslation": "and good in the Hereafter, and protect us from the Fire.",
    "source": "Qur’an 2:201",
    "id": "AYAH-007"
  },
  {
    "type": "ayah",
    "prompt": "وَعَسَىٰٓ أَن تَكۡرَهُواْ شَيۡـٔٗا …",
    "promptTransliteration": "Wa ʿasā an takrahū shay’an…",
    "promptTranslation": "Perhaps you dislike something…",
    "answer": "وَهُوَ خَيۡرٞ لَّكُمۡ",
    "answerTransliteration": "wa huwa khayrun lakum",
    "answerTranslation": "while it is good for you.",
    "source": "Qur’an 2:216",
    "id": "AYAH-008"
  },
  {
    "type": "ayah",
    "prompt": "لَا تَأۡخُذُهُۥ …",
    "promptTransliteration": "Lā ta’khudhuhu…",
    "promptTranslation": "He is not overtaken by…",
    "answer": "سِنَةٞ وَلَا نَوۡمٞ",
    "answerTransliteration": "sinatun wa lā nawm",
    "answerTranslation": "drowsiness or sleep.",
    "source": "Qur’an 2:255",
    "id": "AYAH-009"
  },
  {
    "type": "ayah",
    "prompt": "لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا …",
    "promptTransliteration": "Lā yukallifu Allāhu nafsan illā wusʿahā; lahā mā…",
    "promptTranslation": "Allah does not burden a soul beyond its capacity. It will have whatever…",
    "answer": "كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡ",
    "answerTransliteration": "kasabat wa ʿalayhā maktasabat",
    "answerTranslation": "good it has earned, and bear whatever evil it has committed.",
    "source": "Qur’an 2:286",
    "id": "AYAH-010"
  },
  {
    "type": "ayah",
    "prompt": "رَبَّنَا لَا تُزِغۡ قُلُوبَنَا بَعۡدَ إِذۡ هَدَيۡتَنَا …",
    "promptTransliteration": "Rabbanā lā tuzigh qulūbanā baʿda idh hadaytanā…",
    "promptTranslation": "Our Lord, do not let our hearts deviate after You guided us…",
    "answer": "وَهَبۡ لَنَا مِن لَّدُنكَ رَحۡمَةً",
    "answerTransliteration": "wa hab lanā min ladunka raḥmah",
    "answerTranslation": "and grant us mercy from Yourself.",
    "source": "Qur’an 3:8",
    "id": "AYAH-011"
  },
  {
    "type": "ayah",
    "prompt": "قُلۡ إِن كُنتُمۡ تُحِبُّونَ ٱللَّهَ …",
    "promptTransliteration": "Qul in kuntum tuḥibbūna Allāha…",
    "promptTranslation": "Say: If you love Allah…",
    "answer": "فَٱتَّبِعُونِي يُحۡبِبۡكُمُ ٱللَّهُ",
    "answerTransliteration": "fattabiʿūnī yuḥbibkumu Allāh",
    "answerTranslation": "then follow me; Allah will love you.",
    "source": "Qur’an 3:31",
    "id": "AYAH-012"
  },
  {
    "type": "ayah",
    "prompt": "لَن تَنَالُواْ ٱلۡبِرَّ …",
    "promptTransliteration": "Lan tanālul-birra…",
    "promptTranslation": "You will never attain true righteousness…",
    "answer": "حَتَّىٰ تُنفِقُواْ مِمَّا تُحِبُّونَ",
    "answerTransliteration": "ḥattā tunfiqū mimmā tuḥibbūn",
    "answerTranslation": "until you give from what you love.",
    "source": "Qur’an 3:92",
    "id": "AYAH-013"
  },
  {
    "type": "ayah",
    "prompt": "وَٱعۡتَصِمُواْ بِحَبۡلِ ٱللَّهِ جَمِيعٗا …",
    "promptTransliteration": "Waʿtaṣimū biḥabli Allāhi jamīʿan…",
    "promptTranslation": "Hold firmly together to the rope of Allah…",
    "answer": "وَلَا تَفَرَّقُواْ",
    "answerTransliteration": "wa lā tafarraqū",
    "answerTranslation": "and do not become divided.",
    "source": "Qur’an 3:103",
    "id": "AYAH-014"
  },
  {
    "type": "ayah",
    "prompt": "وَلَا تَهِنُواْ وَلَا تَحۡزَنُواْ …",
    "promptTransliteration": "Wa lā tahinū wa lā taḥzanū…",
    "promptTranslation": "Do not weaken or grieve…",
    "answer": "وَأَنتُمُ ٱلۡأَعۡلَوۡنَ إِن كُنتُم مُّؤۡمِنِينَ",
    "answerTransliteration": "wa antumul-aʿlawna in kuntum mu’minīn",
    "answerTranslation": "for you will prevail if you are believers.",
    "source": "Qur’an 3:139",
    "id": "AYAH-015"
  },
  {
    "type": "ayah",
    "prompt": "فَإِذَا عَزَمۡتَ …",
    "promptTransliteration": "Fa-idhā ʿazamta…",
    "promptTranslation": "Once you have decided…",
    "answer": "فَتَوَكَّلۡ عَلَى ٱللَّهِ",
    "answerTransliteration": "fatawakkal ʿala Allāh",
    "answerTranslation": "then put your trust in Allah.",
    "source": "Qur’an 3:159",
    "id": "AYAH-016"
  },
  {
    "type": "ayah",
    "prompt": "فَزَادَهُمۡ إِيمَٰنٗا وَقَالُواْ حَسۡبُنَا ٱللَّهُ …",
    "promptTransliteration": "Fazādahum īmānan wa qālū ḥasbunā Allāhu…",
    "promptTranslation": "This increased them in faith, and they said, ‘Allah is sufficient for us…’",
    "answer": "وَنِعۡمَ ٱلۡوَكِيلُ",
    "answerTransliteration": "wa niʿmal-wakīl",
    "answerTranslation": "and He is the finest Guardian.",
    "source": "Qur’an 3:173",
    "id": "AYAH-017"
  },
  {
    "type": "ayah",
    "prompt": "وَإِذَا حُيِّيتُم بِتَحِيَّةٖ …",
    "promptTransliteration": "Wa idhā ḥuyyītum bitaḥiyyatin…",
    "promptTranslation": "When you are greeted…",
    "answer": "فَحَيُّواْ بِأَحۡسَنَ مِنۡهَآ أَوۡ رُدُّوهَآ",
    "answerTransliteration": "faḥayyū bi-aḥsana minhā aw ruddūhā",
    "answerTranslation": "respond with a better greeting or return it equally.",
    "source": "Qur’an 4:86",
    "id": "AYAH-018"
  },
  {
    "type": "ayah",
    "prompt": "وَتَعَاوَنُواْ عَلَى ٱلۡبِرِّ وَٱلتَّقۡوَىٰۖ …",
    "promptTransliteration": "Wa taʿāwanū ʿalal-birri wat-taqwā…",
    "promptTranslation": "Cooperate in righteousness and mindfulness…",
    "answer": "وَلَا تَعَاوَنُواْ عَلَى ٱلۡإِثۡمِ وَٱلۡعُدۡوَٰنِ",
    "answerTransliteration": "wa lā taʿāwanū ʿalal-ithmi wal-ʿudwān",
    "answerTranslation": "and do not cooperate in sin and aggression.",
    "source": "Qur’an 5:2",
    "id": "AYAH-019"
  },
  {
    "type": "ayah",
    "prompt": "ٱعۡدِلُواْ هُوَ …",
    "promptTransliteration": "Iʿdilū; huwa…",
    "promptTranslation": "Be just; that is…",
    "answer": "أَقۡرَبُ لِلتَّقۡوَىٰ",
    "answerTransliteration": "aqrabu lit-taqwā",
    "answerTranslation": "closer to mindfulness of Allah.",
    "source": "Qur’an 5:8",
    "id": "AYAH-020"
  },
  {
    "type": "ayah",
    "prompt": "مَن جَآءَ بِٱلۡحَسَنَةِ فَلَهُۥ عَشۡرُ …",
    "promptTransliteration": "Man jā’a bil-ḥasanati falahu ʿashru…",
    "promptTranslation": "Whoever comes with a good deed will have ten…",
    "answer": "أَمۡثَالِهَاۖ وَمَن جَآءَ بِٱلسَّيِّئَةِ فَلَا يُجۡزَىٰٓ إِلَّا مِثۡلَهَا",
    "answerTransliteration": "amthālihā; wa man jā’a bis-sayyi’ati falā yujzā illā mithlahā",
    "answerTranslation": "times its like; and whoever comes with an evil deed will be repaid only with its equivalent.",
    "source": "Qur’an 6:160",
    "id": "AYAH-021"
  },
  {
    "type": "ayah",
    "prompt": "رَبَّنَا ظَلَمۡنَآ أَنفُسَنَا …",
    "promptTransliteration": "Rabbanā ẓalamnā anfusanā…",
    "promptTranslation": "Our Lord, we have wronged ourselves…",
    "answer": "وَإِن لَّمۡ تَغۡفِرۡ لَنَا وَتَرۡحَمۡنَا لَنَكُونَنَّ مِنَ ٱلۡخَٰسِرِينَ",
    "answerTransliteration": "wa il-lam taghfir lanā wa tarḥamnā lanakūnanna minal-khāsirīn",
    "answerTranslation": "and unless You forgive and have mercy on us, we will be among the losers.",
    "source": "Qur’an 7:23",
    "id": "AYAH-022"
  },
  {
    "type": "ayah",
    "prompt": "إِنَّ رَحۡمَتَ ٱللَّهِ …",
    "promptTransliteration": "Inna raḥmata Allāhi…",
    "promptTranslation": "Surely the mercy of Allah is…",
    "answer": "قَرِيبٞ مِّنَ ٱلۡمُحۡسِنِينَ",
    "answerTransliteration": "qarībun minal-muḥsinīn",
    "answerTranslation": "near to those who do good.",
    "source": "Qur’an 7:56",
    "id": "AYAH-023"
  },
  {
    "type": "ayah",
    "prompt": "إِنَّمَا ٱلۡمُؤۡمِنُونَ ٱلَّذِينَ إِذَا ذُكِرَ ٱللَّهُ وَجِلَتۡ قُلُوبُهُمۡ …",
    "promptTransliteration": "Innamal-mu’minūna alladhīna idhā dhukira Allāhu wajilat qulūbuhum…",
    "promptTranslation": "The believers are those whose hearts tremble when Allah is mentioned…",
    "answer": "وَإِذَا تُلِيَتۡ عَلَيۡهِمۡ ءَايَٰتُهُۥ زَادَتۡهُمۡ إِيمَٰنٗا وَعَلَىٰ رَبِّهِمۡ يَتَوَكَّلُونَ",
    "answerTransliteration": "wa idhā tuliyat ʿalayhim āyātuhu zādathum īmānan wa ʿalā rabbihim yatawakkalūn",
    "answerTranslation": "and when His verses are recited to them, they increase in faith, and they trust in their Lord.",
    "source": "Qur’an 8:2",
    "id": "AYAH-024"
  },
  {
    "type": "ayah",
    "prompt": "وَلَا تَنَٰزَعُواْ فَتَفۡشَلُواْ وَتَذۡهَبَ رِيحُكُمۡۖ …",
    "promptTransliteration": "Wa lā tanāzaʿū fatafshalū wa tadhhaba rīḥukum…",
    "promptTranslation": "Do not dispute, or you will lose courage and strength…",
    "answer": "وَٱصۡبِرُوٓاْۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
    "answerTransliteration": "waṣbirū; inna Allāha maʿaṣ-ṣābirīn",
    "answerTranslation": "and be patient; Allah is with the patient.",
    "source": "Qur’an 8:46",
    "id": "AYAH-025"
  },
  {
    "type": "ayah",
    "prompt": "قُل لَّن يُصِيبَنَآ …",
    "promptTransliteration": "Qul lan yuṣībanā…",
    "promptTranslation": "Say: Nothing will ever befall us…",
    "answer": "إِلَّا مَا كَتَبَ ٱللَّهُ لَنَا",
    "answerTransliteration": "illā mā kataba Allāhu lanā",
    "answerTranslation": "except what Allah has written for us.",
    "source": "Qur’an 9:51",
    "id": "AYAH-026"
  },
  {
    "type": "ayah",
    "prompt": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱتَّقُواْ ٱللَّهَ وَكُونُواْ …",
    "promptTransliteration": "Yā ayyuhalladhīna āmanū ittaqū Allāha wa kūnū…",
    "promptTranslation": "O believers, be mindful of Allah and be…",
    "answer": "مَعَ ٱلصَّـٰدِقِينَ",
    "answerTransliteration": "maʿaṣ-ṣādiqīn",
    "answerTranslation": "with the truthful.",
    "source": "Qur’an 9:119",
    "id": "AYAH-027"
  },
  {
    "type": "ayah",
    "prompt": "أَلَآ إِنَّ أَوۡلِيَآءَ ٱللَّهِ …",
    "promptTransliteration": "Alā inna awliyā’a Allāhi…",
    "promptTranslation": "Surely the close servants of Allah…",
    "answer": "لَا خَوۡفٌ عَلَيۡهِمۡ وَلَا هُمۡ يَحۡزَنُونَ",
    "answerTransliteration": "lā khawfun ʿalayhim wa lā hum yaḥzanūn",
    "answerTranslation": "will have no fear, nor will they grieve.",
    "source": "Qur’an 10:62",
    "id": "AYAH-028"
  },
  {
    "type": "ayah",
    "prompt": "وَمَا تَوۡفِيقِيٓ …",
    "promptTransliteration": "Wa mā tawfīqī…",
    "promptTranslation": "My success is only…",
    "answer": "إِلَّا بِٱللَّهِ",
    "answerTransliteration": "illā billāh",
    "answerTranslation": "through Allah.",
    "source": "Qur’an 11:88",
    "id": "AYAH-029"
  },
  {
    "type": "ayah",
    "prompt": "وَلَا تَاْيۡـَٔسُواْ …",
    "promptTransliteration": "Wa lā tay’asū…",
    "promptTranslation": "Do not despair…",
    "answer": "مِن رَّوۡحِ ٱللَّهِ",
    "answerTransliteration": "mir-rawḥi Allāh",
    "answerTranslation": "of relief from Allah.",
    "source": "Qur’an 12:87",
    "id": "AYAH-030"
  },
  {
    "type": "ayah",
    "prompt": "إِنَّ ٱللَّهَ لَا يُغَيِّرُ مَا بِقَوۡمٍ …",
    "promptTransliteration": "Inna Allāha lā yughayyiru mā biqawmin…",
    "promptTranslation": "Allah does not change the condition of a people…",
    "answer": "حَتَّىٰ يُغَيِّرُواْ مَا بِأَنفُسِهِمۡ",
    "answerTransliteration": "ḥattā yughayyirū mā bi-anfusihim",
    "answerTranslation": "until they change what is within themselves.",
    "source": "Qur’an 13:11",
    "id": "AYAH-031"
  },
  {
    "type": "ayah",
    "prompt": "أَلَا بِذِكۡرِ ٱللَّهِ …",
    "promptTransliteration": "Alā bidhikri Allāhi…",
    "promptTranslation": "Surely in the remembrance of Allah…",
    "answer": "تَطۡمَئِنُّ ٱلۡقُلُوبُ",
    "answerTransliteration": "taṭma’innul-qulūb",
    "answerTranslation": "hearts find rest.",
    "source": "Qur’an 13:28",
    "id": "AYAH-032"
  },
  {
    "type": "ayah",
    "prompt": "لَئِن شَكَرۡتُمۡ …",
    "promptTransliteration": "La’in shakartum…",
    "promptTranslation": "If you are grateful…",
    "answer": "لَأَزِيدَنَّكُمۡ",
    "answerTransliteration": "la-azīdannakum",
    "answerTranslation": "I will certainly give you more.",
    "source": "Qur’an 14:7",
    "id": "AYAH-033"
  },
  {
    "type": "ayah",
    "prompt": "وَٱعۡبُدۡ رَبَّكَ …",
    "promptTransliteration": "Waʿbud rabbaka…",
    "promptTranslation": "Worship your Lord…",
    "answer": "حَتَّىٰ يَأۡتِيَكَ ٱلۡيَقِينُ",
    "answerTransliteration": "ḥattā ya’tiyakal-yaqīn",
    "answerTranslation": "until certainty comes to you.",
    "source": "Qur’an 15:99",
    "id": "AYAH-034"
  },
  {
    "type": "ayah",
    "prompt": "وَإِن تَعُدُّواْ نِعۡمَةَ ٱللَّهِ …",
    "promptTransliteration": "Wa in taʿuddū niʿmata Allāhi…",
    "promptTranslation": "If you tried to count Allah’s blessings…",
    "answer": "لَا تُحۡصُوهَآ",
    "answerTransliteration": "lā tuḥṣūhā",
    "answerTranslation": "you could never enumerate them.",
    "source": "Qur’an 16:18",
    "id": "AYAH-035"
  },
  {
    "type": "ayah",
    "prompt": "إِنَّ ٱللَّهَ يَأۡمُرُ بِٱلۡعَدۡلِ وَٱلۡإِحۡسَٰنِ …",
    "promptTransliteration": "Inna Allāha ya’muru bil-ʿadli wal-iḥsān…",
    "promptTranslation": "Allah commands justice and excellence…",
    "answer": "وَإِيتَآيِٕ ذِي ٱلۡقُرۡبَىٰ",
    "answerTransliteration": "wa ītā’i dhil-qurbā",
    "answerTranslation": "and generosity toward relatives.",
    "source": "Qur’an 16:90",
    "id": "AYAH-036"
  },
  {
    "type": "ayah",
    "prompt": "فَلَا تَقُل لَّهُمَآ أُفّٖ وَلَا تَنۡهَرۡهُمَا …",
    "promptTransliteration": "Falā taqul lahumā uffin wa lā tanharhumā…",
    "promptTranslation": "Do not even say “uff” to your parents or repel them…",
    "answer": "وَقُل لَّهُمَا قَوۡلٗا كَرِيمٗا",
    "answerTransliteration": "wa qul lahumā qawlan karīman",
    "answerTranslation": "but speak to them with noble words.",
    "source": "Qur’an 17:23",
    "id": "AYAH-037"
  },
  {
    "type": "ayah",
    "prompt": "رَّبِّ ٱرۡحَمۡهُمَا …",
    "promptTransliteration": "Rabbir-ḥamhumā…",
    "promptTranslation": "My Lord, have mercy on them…",
    "answer": "كَمَا رَبَّيَانِي صَغِيرٗا",
    "answerTransliteration": "kamā rabbayānī ṣaghīran",
    "answerTranslation": "as they raised me when I was small.",
    "source": "Qur’an 17:24",
    "id": "AYAH-038"
  },
  {
    "type": "ayah",
    "prompt": "رَبَّنَآ ءَاتِنَا مِن لَّدُنكَ رَحۡمَةٗ …",
    "promptTransliteration": "Rabbanā ātinā mil-ladunka raḥmatan…",
    "promptTranslation": "Our Lord, grant us mercy from Yourself…",
    "answer": "وَهَيِّئۡ لَنَا مِنۡ أَمۡرِنَا رَشَدٗا",
    "answerTransliteration": "wa hayyi’ lanā min amrinā rashadan",
    "answerTranslation": "and set our affair on a right course.",
    "source": "Qur’an 18:10",
    "id": "AYAH-039"
  },
  {
    "type": "ayah",
    "prompt": "إِلَّآ أَن يَشَآءَ ٱللَّهُۚ وَٱذۡكُر رَّبَّكَ …",
    "promptTransliteration": "Illā an yashā’a Allāhu; wadhkur rabbaka…",
    "promptTranslation": "Except by saying, ‘If Allah wills.’ And remember your Lord…",
    "answer": "إِذَا نَسِيتَ وَقُلۡ عَسَىٰٓ أَن يَهۡدِيَنِ رَبِّي لِأَقۡرَبَ مِنۡ هَٰذَا رَشَدٗا",
    "answerTransliteration": "idhā nasīta wa qul ʿasā an yahdiyani rabbī li-aqraba min hādhā rashadā",
    "answerTranslation": "when you forget, and say, ‘Perhaps my Lord will guide me to what is nearer than this to right conduct.’",
    "source": "Qur’an 18:24",
    "id": "AYAH-040"
  },
  {
    "type": "ayah",
    "prompt": "ٱذۡهَبۡ إِلَىٰ فِرۡعَوۡنَ إِنَّهُۥ طَغَىٰ ۝ قَالَ رَبِّ …",
    "promptTransliteration": "Idhhab ilā Firʿawna innahu ṭaghā. Qāla rabbi…",
    "promptTranslation": "Go to Pharaoh, for he has transgressed. He said, ‘My Lord…’",
    "answer": "ٱشۡرَحۡ لِي صَدۡرِي",
    "answerTransliteration": "ishraḥ lī ṣadrī",
    "answerTranslation": "open my heart for me.",
    "source": "Qur’an 20:24–25",
    "id": "AYAH-041"
  },
  {
    "type": "ayah",
    "prompt": "وَلَا تَعۡجَلۡ بِٱلۡقُرۡءَانِ مِن قَبۡلِ أَن يُقۡضَىٰٓ إِلَيۡكَ وَحۡيُهُۥۖ وَقُل رَّبِّ …",
    "promptTransliteration": "Wa lā taʿjal bil-Qur’āni min qabli an yuqḍā ilayka waḥyuhu; wa qul rabbi…",
    "promptTranslation": "Do not rush to recite before the revelation is completed to you, and say, ‘My Lord…’",
    "answer": "زِدۡنِي عِلۡمٗا",
    "answerTransliteration": "zidnī ʿilman",
    "answerTranslation": "increase me in knowledge.",
    "source": "Qur’an 20:114",
    "id": "AYAH-042"
  },
  {
    "type": "ayah",
    "prompt": "لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبۡحَٰنَكَ …",
    "promptTransliteration": "Lā ilāha illā anta subḥānaka…",
    "promptTranslation": "There is no god but You; glory be to You…",
    "answer": "إِنِّي كُنتُ مِنَ ٱلظَّـٰلِمِينَ",
    "answerTransliteration": "innī kuntu minaẓ-ẓālimīn",
    "answerTranslation": "I have truly been among the wrongdoers.",
    "source": "Qur’an 21:87",
    "id": "AYAH-043"
  },
  {
    "type": "ayah",
    "prompt": "قَدۡ أَفۡلَحَ ٱلۡمُؤۡمِنُونَ ٱلَّذِينَ …",
    "promptTransliteration": "Qad aflaḥal-mu’minūn alladhīna…",
    "promptTranslation": "Successful indeed are the believers—those who…",
    "answer": "هُمۡ فِي صَلَاتِهِمۡ خَٰشِعُونَ",
    "answerTransliteration": "hum fī ṣalātihim khāshiʿūn",
    "answerTranslation": "are humble in their prayer.",
    "source": "Qur’an 23:1–2",
    "id": "AYAH-044"
  },
  {
    "type": "ayah",
    "prompt": "وَلۡيَعۡفُواْ وَلۡيَصۡفَحُوٓاْۗ …",
    "promptTransliteration": "Walyaʿfū walyaṣfaḥū…",
    "promptTranslation": "Let them pardon and overlook…",
    "answer": "أَلَا تُحِبُّونَ أَن يَغۡفِرَ ٱللَّهُ لَكُمۡ",
    "answerTransliteration": "alā tuḥibbūna an yaghfira Allāhu lakum",
    "answerTranslation": "would you not love for Allah to forgive you?",
    "source": "Qur’an 24:22",
    "id": "AYAH-045"
  },
  {
    "type": "ayah",
    "prompt": "ٱللَّهُ نُورُ ٱلسَّمَٰوَٰتِ …",
    "promptTransliteration": "Allāhu nūrus-samāwāti…",
    "promptTranslation": "Allah is the Light of the heavens…",
    "answer": "وَٱلۡأَرۡضِۚ مَثَلُ نُورِهِۦ كَمِشۡكَوٰةٖ فِيهَا مِصۡبَاحٌ",
    "answerTransliteration": "wal-arḍ; mathalu nūrihi kamishkātin fīhā miṣbāḥ",
    "answerTranslation": "and the earth. The example of His light is like a niche in which there is a lamp.",
    "source": "Qur’an 24:35",
    "id": "AYAH-046"
  },
  {
    "type": "ayah",
    "prompt": "وَعِبَادُ ٱلرَّحۡمَٰنِ ٱلَّذِينَ يَمۡشُونَ عَلَى ٱلۡأَرۡضِ هَوۡنٗا …",
    "promptTransliteration": "Wa ʿibādur-Raḥmāni alladhīna yamshūna ʿalal-arḍi hawnan…",
    "promptTranslation": "The servants of the Most Merciful walk humbly on the earth…",
    "answer": "وَإِذَا خَاطَبَهُمُ ٱلۡجَٰهِلُونَ قَالُواْ سَلَٰمٗا",
    "answerTransliteration": "wa idhā khāṭabahumul-jāhilūna qālū salāman",
    "answerTranslation": "and when the ignorant address them, they respond with peace.",
    "source": "Qur’an 25:63",
    "id": "AYAH-047"
  },
  {
    "type": "ayah",
    "prompt": "رَبَّنَا هَبۡ لَنَا مِنۡ أَزۡوَٰجِنَا وَذُرِّيَّـٰتِنَا قُرَّةَ أَعۡيُنٖ …",
    "promptTransliteration": "Rabbanā hab lanā min azwājinā wa dhurriyyātinā qurrata aʿyunin…",
    "promptTranslation": "Our Lord, grant us comfort in our spouses and children…",
    "answer": "وَٱجۡعَلۡنَا لِلۡمُتَّقِينَ إِمَامًا",
    "answerTransliteration": "wajʿalnā lil-muttaqīna imāman",
    "answerTranslation": "and make us examples for the mindful.",
    "source": "Qur’an 25:74",
    "id": "AYAH-048"
  },
  {
    "type": "ayah",
    "prompt": "إِنَّ ٱلصَّلَوٰةَ تَنۡهَىٰ …",
    "promptTransliteration": "Innaṣ-ṣalāta tanhā…",
    "promptTranslation": "Surely prayer restrains…",
    "answer": "عَنِ ٱلۡفَحۡشَآءِ وَٱلۡمُنكَرِ",
    "answerTransliteration": "ʿanil-faḥshā’i wal-munkar",
    "answerTranslation": "from indecency and wrongdoing.",
    "source": "Qur’an 29:45",
    "id": "AYAH-049"
  },
  {
    "type": "ayah",
    "prompt": "وَٱلَّذِينَ جَٰهَدُواْ فِينَا …",
    "promptTransliteration": "Walladhīna jāhadū fīnā…",
    "promptTranslation": "Those who strive for Our sake…",
    "answer": "لَنَهۡدِيَنَّهُمۡ سُبُلَنَا",
    "answerTransliteration": "lanahdiyannahum subulanā",
    "answerTranslation": "We will surely guide them to Our ways.",
    "source": "Qur’an 29:69",
    "id": "AYAH-050"
  },
  {
    "type": "ayah",
    "prompt": "وَأۡمُرۡ بِٱلۡمَعۡرُوفِ وَٱنۡهَ عَنِ ٱلۡمُنكَرِ …",
    "promptTransliteration": "Wa’mur bil-maʿrūfi wanha ʿanil-munkari…",
    "promptTranslation": "Encourage what is right and forbid what is wrong…",
    "answer": "وَٱصۡبِرۡ عَلَىٰ مَآ أَصَابَكَ",
    "answerTransliteration": "waṣbir ʿalā mā aṣābaka",
    "answerTranslation": "and be patient with whatever befalls you.",
    "source": "Qur’an 31:17",
    "id": "AYAH-051"
  },
  {
    "type": "ayah",
    "prompt": "لَّقَدۡ كَانَ لَكُمۡ فِي رَسُولِ ٱللَّهِ …",
    "promptTransliteration": "Laqad kāna lakum fī rasūli Allāhi…",
    "promptTranslation": "In the Messenger of Allah you truly have…",
    "answer": "أُسۡوَةٌ حَسَنَةٞ",
    "answerTransliteration": "uswatun ḥasanah",
    "answerTranslation": "an excellent example.",
    "source": "Qur’an 33:21",
    "id": "AYAH-052"
  },
  {
    "type": "ayah",
    "prompt": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱذۡكُرُواْ ٱللَّهَ …",
    "promptTransliteration": "Yā ayyuhalladhīna āmanū udhkurū Allāha…",
    "promptTranslation": "O believers, remember Allah…",
    "answer": "ذِكۡرٗا كَثِيرٗا",
    "answerTransliteration": "dhikran kathīran",
    "answerTranslation": "with frequent remembrance.",
    "source": "Qur’an 33:41",
    "id": "AYAH-053"
  },
  {
    "type": "ayah",
    "prompt": "لَا تَقۡنَطُواْ …",
    "promptTransliteration": "Lā taqnaṭū…",
    "promptTranslation": "Do not lose hope…",
    "answer": "مِن رَّحۡمَةِ ٱللَّهِ",
    "answerTransliteration": "mir-raḥmati Allāh",
    "answerTranslation": "in Allah’s mercy.",
    "source": "Qur’an 39:53",
    "id": "AYAH-054"
  },
  {
    "type": "ayah",
    "prompt": "ٱدۡفَعۡ بِٱلَّتِي هِيَ أَحۡسَنُ فَإِذَا …",
    "promptTransliteration": "Idfaʿ billatī hiya aḥsanu fa-idhā…",
    "promptTranslation": "Respond to evil with what is best, and then…",
    "answer": "ٱلَّذِي بَيۡنَكَ وَبَيۡنَهُۥ عَدَٰوَةٞ كَأَنَّهُۥ وَلِيٌّ حَمِيمٞ",
    "answerTransliteration": "alladhī baynaka wa baynahu ʿadāwatun ka-annahu waliyyun ḥamīm",
    "answerTranslation": "an enemy may become like a close friend.",
    "source": "Qur’an 41:34",
    "id": "AYAH-055"
  },
  {
    "type": "ayah",
    "prompt": "إِنَّمَا ٱلۡمُؤۡمِنُونَ إِخۡوَةٞ …",
    "promptTransliteration": "Innamal-mu’minūna ikhwatun…",
    "promptTranslation": "The believers are one brotherhood…",
    "answer": "فَأَصۡلِحُواْ بَيۡنَ أَخَوَيۡكُمۡ",
    "answerTransliteration": "fa-aṣliḥū bayna akhawaykum",
    "answerTranslation": "so make peace between your brothers.",
    "source": "Qur’an 49:10",
    "id": "AYAH-056"
  },
  {
    "type": "ayah",
    "prompt": "وَلَا تَجَسَّسُواْ …",
    "promptTransliteration": "Wa lā tajassasū…",
    "promptTranslation": "Do not spy…",
    "answer": "وَلَا يَغۡتَب بَّعۡضُكُم بَعۡضًا",
    "answerTransliteration": "wa lā yaghtab baʿḍukum baʿḍan",
    "answerTranslation": "or backbite one another.",
    "source": "Qur’an 49:12",
    "id": "AYAH-057"
  },
  {
    "type": "ayah",
    "prompt": "وَأَن لَّيۡسَ لِلۡإِنسَٰنِ …",
    "promptTransliteration": "Wa an laysa lil-insāni…",
    "promptTranslation": "A person will have nothing…",
    "answer": "إِلَّا مَا سَعَىٰ",
    "answerTransliteration": "illā mā saʿā",
    "answerTranslation": "except what they strive for.",
    "source": "Qur’an 53:39",
    "id": "AYAH-058"
  },
  {
    "type": "ayah",
    "prompt": "وَمَن يَتَّقِ ٱللَّهَ يَجۡعَل لَّهُۥ مَخۡرَجٗا وَيَرۡزُقۡهُ …",
    "promptTransliteration": "Wa man yattaqi Allāha yajʿal lahu makhrajan wa yarzuqhu…",
    "promptTranslation": "Whoever is mindful of Allah, He will make a way out for them and provide for them…",
    "answer": "مِنۡ حَيۡثُ لَا يَحۡتَسِبُ",
    "answerTransliteration": "min ḥaythu lā yaḥtasib",
    "answerTranslation": "from sources they could never imagine.",
    "source": "Qur’an 65:2–3",
    "id": "AYAH-059"
  },
  {
    "type": "ayah",
    "prompt": "فَإِنَّ مَعَ ٱلۡعُسۡرِ …",
    "promptTransliteration": "Fa-inna maʿal-ʿusri…",
    "promptTranslation": "Surely with hardship comes…",
    "answer": "يُسۡرًا",
    "answerTransliteration": "yusran",
    "answerTranslation": "ease.",
    "source": "Qur’an 94:5",
    "id": "AYAH-060"
  },
  {
    "type": "say",
    "prompt": "SIDQ",
    "answer": "Do not say: truth · honest · lie · sincere · speech",
    "source": "See Qur’an 9:119",
    "id": "WORD-061"
  },
  {
    "type": "say",
    "prompt": "HAYA",
    "answer": "Do not say: modesty · shame · faith · shy · character",
    "source": "Sahih al-Bukhari 24",
    "id": "WORD-062"
  },
  {
    "type": "say",
    "prompt": "HILM",
    "answer": "Do not say: forbearance · calm · anger · gentle · restraint",
    "source": "Islamic character concept",
    "id": "WORD-063"
  },
  {
    "type": "say",
    "prompt": "‘AFW",
    "answer": "Do not say: pardon · forgive · erase · overlook · mercy",
    "source": "See Qur’an 24:22",
    "id": "WORD-064"
  },
  {
    "type": "say",
    "prompt": "SULH",
    "answer": "Do not say: settlement · peace · dispute · agreement · reconcile",
    "source": "See Qur’an 4:128",
    "id": "WORD-065"
  },
  {
    "type": "say",
    "prompt": "SILAT AR-RAHIM",
    "answer": "Do not say: relatives · family · ties · visit · maintain",
    "source": "See Sahih al-Bukhari 5984",
    "id": "WORD-066"
  },
  {
    "type": "say",
    "prompt": "BIRR AL-WALIDAYN",
    "answer": "Do not say: parents · kindness · obey · mother · father",
    "source": "Qur’an 17:23–24",
    "id": "WORD-067"
  },
  {
    "type": "say",
    "prompt": "UKHUWWAH",
    "answer": "Do not say: brotherhood · believers · community · bond · unity",
    "source": "Qur’an 49:10",
    "id": "WORD-068"
  },
  {
    "type": "say",
    "prompt": "MUHASABAH",
    "answer": "Do not say: self-accounting · examine · deeds · reflect · soul",
    "source": "Spiritual-ethics concept",
    "id": "WORD-069"
  },
  {
    "type": "say",
    "prompt": "MURAQABAH",
    "answer": "Do not say: watchful · Allah · aware · seen · heart",
    "source": "See Qur’an 4:1",
    "id": "WORD-070"
  },
  {
    "type": "say",
    "prompt": "MAHABBAH",
    "answer": "Do not say: love · Allah · heart · affection · beloved",
    "source": "See Qur’an 5:54",
    "id": "WORD-071"
  },
  {
    "type": "say",
    "prompt": "KHAWF",
    "answer": "Do not say: fear · Allah · punishment · heart · awe",
    "source": "See Qur’an 3:175",
    "id": "WORD-072"
  },
  {
    "type": "say",
    "prompt": "RAJA’",
    "answer": "Do not say: hope · mercy · expect · Allah · reward",
    "source": "See Qur’an 18:110",
    "id": "WORD-073"
  },
  {
    "type": "say",
    "prompt": "RIDHA",
    "answer": "Do not say: content · pleased · decree · accept · Allah",
    "source": "Spiritual-ethics concept",
    "id": "WORD-074"
  },
  {
    "type": "say",
    "prompt": "BALA’",
    "answer": "Do not say: trial · test · hardship · affliction · patience",
    "source": "See Qur’an 2:155",
    "id": "WORD-075"
  },
  {
    "type": "say",
    "prompt": "NASIHAH",
    "answer": "Do not say: sincere advice · counsel · religion · guide · correct",
    "source": "Sahih Muslim 55a",
    "id": "WORD-076"
  },
  {
    "type": "say",
    "prompt": "AMR BIL-MA‘RUF",
    "answer": "Do not say: command · good · right · community · encourage",
    "source": "Qur’an 3:104",
    "id": "WORD-077"
  },
  {
    "type": "say",
    "prompt": "NAHY ‘ANIL-MUNKAR",
    "answer": "Do not say: forbid · wrong · evil · stop · community",
    "source": "Qur’an 3:104",
    "id": "WORD-078"
  },
  {
    "type": "say",
    "prompt": "DHULM",
    "answer": "Do not say: injustice · oppression · wrong · rights · darkness",
    "source": "See Qur’an 31:13",
    "id": "WORD-079"
  },
  {
    "type": "say",
    "prompt": "ISRAF",
    "answer": "Do not say: excess · waste · spend · food · limits",
    "source": "Qur’an 7:31",
    "id": "WORD-080"
  },
  {
    "type": "say",
    "prompt": "TABDHIR",
    "answer": "Do not say: squander · wasteful · money · spend · reckless",
    "source": "Qur’an 17:26–27",
    "id": "WORD-081"
  },
  {
    "type": "say",
    "prompt": "RIBA",
    "answer": "Do not say: interest · usury · loan · increase · forbidden",
    "source": "Qur’an 2:275",
    "id": "WORD-082"
  },
  {
    "type": "say",
    "prompt": "GHARAR",
    "answer": "Do not say: uncertainty · contract · risk · unclear · sale",
    "source": "See Sahih Muslim 1513",
    "id": "WORD-083"
  },
  {
    "type": "say",
    "prompt": "WAQF",
    "answer": "Do not say: endowment · charity · property · ongoing · preserve",
    "source": "See Sahih al-Bukhari 2737",
    "id": "WORD-084"
  },
  {
    "type": "say",
    "prompt": "KAFFARAH",
    "answer": "Do not say: expiation · compensate · oath · fasting · penalty",
    "source": "See Qur’an 5:89",
    "id": "WORD-085"
  },
  {
    "type": "say",
    "prompt": "FIDYAH",
    "answer": "Do not say: compensation · fasting · feed · unable · ransom",
    "source": "See Qur’an 2:184",
    "id": "WORD-086"
  },
  {
    "type": "say",
    "prompt": "NAFILAH",
    "answer": "Do not say: voluntary · extra · worship · prayer · optional",
    "source": "Islamic legal category",
    "id": "WORD-087"
  },
  {
    "type": "say",
    "prompt": "QIYAM AL-LAYL",
    "answer": "Do not say: night · prayer · stand · sleep · worship",
    "source": "See Qur’an 73:2",
    "id": "WORD-088"
  },
  {
    "type": "say",
    "prompt": "WITR",
    "answer": "Do not say: odd · prayer · night · rak‘ah · final",
    "source": "See Sahih al-Bukhari 990",
    "id": "WORD-089"
  },
  {
    "type": "say",
    "prompt": "I‘TIKAF",
    "answer": "Do not say: retreat · mosque · Ramadan · worship · stay",
    "source": "See Qur’an 2:187",
    "id": "WORD-090"
  },
  {
    "type": "say",
    "prompt": "‘UMRAH",
    "answer": "Do not say: pilgrimage · Makkah · Ka‘bah · ihram · tawaf",
    "source": "See Qur’an 2:196",
    "id": "WORD-091"
  },
  {
    "type": "say",
    "prompt": "TALBIYAH",
    "answer": "Do not say: Labbayk · Hajj · call · pilgrimage · chant",
    "source": "Pilgrimage rite; Sahih Muslim 1184a",
    "id": "WORD-092"
  },
  {
    "type": "say",
    "prompt": "TAKBIR",
    "answer": "Do not say: Allahu Akbar · great · prayer · Eid · phrase",
    "source": "See Qur’an 2:185",
    "id": "WORD-093"
  },
  {
    "type": "say",
    "prompt": "TASBIH",
    "answer": "Do not say: SubhanAllah · glorify · beads · remembrance · perfect",
    "source": "See Qur’an 33:42",
    "id": "WORD-094"
  },
  {
    "type": "say",
    "prompt": "TAHLIL",
    "answer": "Do not say: la ilaha illallah · one · declaration · dhikr · worship",
    "source": "Remembrance formula",
    "id": "WORD-095"
  },
  {
    "type": "say",
    "prompt": "SALAWAT",
    "answer": "Do not say: Prophet · blessings · peace · Muhammad · send",
    "source": "Qur’an 33:56",
    "id": "WORD-096"
  },
  {
    "type": "say",
    "prompt": "JANAZAH",
    "answer": "Do not say: funeral · deceased · prayer · burial · body",
    "source": "Islamic funeral rite; see Sahih al-Bukhari 1335",
    "id": "WORD-097"
  },
  {
    "type": "say",
    "prompt": "QISAS",
    "answer": "Do not say: retaliation · justice · murder · equal · law",
    "source": "Qur’an 2:178",
    "id": "WORD-098"
  },
  {
    "type": "say",
    "prompt": "DIYAH",
    "answer": "Do not say: blood money · compensation · killing · family · payment",
    "source": "See Qur’an 4:92",
    "id": "WORD-099"
  },
  {
    "type": "say",
    "prompt": "SHAHADAH",
    "answer": "Do not say: testimony · faith · witness · Allah · Messenger",
    "source": "Testimony of faith; see Sahih Muslim 8a",
    "id": "WORD-100"
  },
  {
    "type": "arabish",
    "prompt": "KEE-FACK AL-YOM",
    "answer": "كيفك اليوم؟ — How are you today? (said to a man)",
    "source": "Levantine Arabic",
    "id": "DECODE-081"
  },
  {
    "type": "arabish",
    "prompt": "SHOO-BID NAN-SAWWEE",
    "answer": "شو بدنا نسوي؟ — What are we going to do?",
    "source": "Levantine Arabic",
    "id": "DECODE-082"
  },
  {
    "type": "arabish",
    "prompt": "MAF-EE AH-LA",
    "answer": "ما في أحلى — Nothing could be nicer",
    "source": "Common colloquial Arabic",
    "id": "DECODE-083"
  },
  {
    "type": "arabish",
    "prompt": "IN-TEE MIN-WAIN",
    "answer": "إنتِ من وين؟ — Where are you from? (said to a woman)",
    "source": "Levantine Arabic",
    "id": "DECODE-084"
  },
  {
    "type": "arabish",
    "prompt": "ALLAH-YAH DEEK",
    "answer": "الله يهديك — May Allah guide you",
    "source": "Common colloquial Arabic",
    "id": "DECODE-085"
  },
  {
    "type": "arabish",
    "prompt": "YA-RAIT NEE-MA ROHET",
    "answer": "يا ريتني ما رحت — I wish I had not gone",
    "source": "Levantine Arabic",
    "id": "DECODE-086"
  },
  {
    "type": "arabish",
    "prompt": "FEEN-AL MIF-TAH",
    "answer": "فين المفتاح؟ — Where is the key?",
    "source": "Egyptian Arabic",
    "id": "DECODE-087"
  },
  {
    "type": "arabish",
    "prompt": "MISH-FAHIM HAA-GA",
    "answer": "مش فاهم حاجة — I do not understand anything (said by a man)",
    "source": "Egyptian Arabic",
    "id": "DECODE-088"
  },
  {
    "type": "arabish",
    "prompt": "KOLL-HAA GAT-A-MAM",
    "answer": "كل حاجة تمام — Everything is fine",
    "source": "Egyptian Arabic",
    "id": "DECODE-089"
  },
  {
    "type": "arabish",
    "prompt": "BUK-RAH N-SHOO-FACK",
    "answer": "بكرا نشوفك — We will see you tomorrow",
    "source": "Levantine Arabic",
    "id": "DECODE-090"
  },
  {
    "type": "arabish",
    "prompt": "MAA-A LAYK",
    "answer": "ما عليك — Do not worry about it",
    "source": "Gulf / colloquial Arabic",
    "id": "DECODE-091"
  },
  {
    "type": "arabish",
    "prompt": "MIN-AI YOO-NEE",
    "answer": "من عيوني — With pleasure; literally, from my eyes",
    "source": "Common colloquial Arabic",
    "id": "DECODE-092"
  },
  {
    "type": "arabish",
    "prompt": "HAA-DA KAL-AM",
    "answer": "هذا كلام؟ — Does that make any sense?",
    "source": "Common colloquial Arabic",
    "id": "DECODE-093"
  },
  {
    "type": "arabish",
    "prompt": "SAD-DICK NEE",
    "answer": "صدقني — Believe me (said to a man)",
    "source": "Common colloquial Arabic",
    "id": "DECODE-094"
  },
  {
    "type": "arabish",
    "prompt": "YAL-LAN IM-SHEE",
    "answer": "يلا نمشي — Come on, let us go",
    "source": "Common colloquial Arabic",
    "id": "DECODE-095"
  },
  {
    "type": "arabish",
    "prompt": "SHLO-NACK AL-YOM",
    "answer": "شلونك اليوم؟ — How are you today? (said to a man)",
    "source": "Gulf / Iraqi Arabic",
    "id": "DECODE-096"
  },
  {
    "type": "arabish",
    "prompt": "WAIN-KUNT",
    "answer": "وين كنت؟ — Where were you? (said to a man)",
    "source": "Levantine Arabic",
    "id": "DECODE-097"
  },
  {
    "type": "arabish",
    "prompt": "SHOO-HAL HA-KEE",
    "answer": "شو هالحكي؟ — What is this talk?",
    "source": "Levantine Arabic",
    "id": "DECODE-098"
  },
  {
    "type": "arabish",
    "prompt": "MOO-MUS DOOG",
    "answer": "مو مصدّق — I cannot believe it",
    "source": "Levantine / Gulf Arabic",
    "id": "DECODE-099"
  },
  {
    "type": "arabish",
    "prompt": "AN-JUD KHA-LASS",
    "answer": "عنجد خلص؟ — Seriously, it is over?",
    "source": "Levantine Arabic",
    "id": "DECODE-100"
  },
  {
    "type": "arabish",
    "prompt": "LAK WAYN HAL GHAY BEH",
    "answer": "لك وين هالغيبة؟ — Where have you been all this time?",
    "source": "Levantine Arabic · common in Syria",
    "id": "DECODE-101"
  },
  {
    "type": "arabish",
    "prompt": "SHOO IL ISS SEH MIN AWW LAH LA AKH RAH",
    "answer": "شو القصة من أولها لآخرها؟ — What is the whole story from beginning to end?",
    "source": "Levantine Arabic · common in Syria",
    "id": "DECODE-102"
  },
  {
    "type": "arabish",
    "prompt": "MOO NAA KISS NA GHAIR HAL ISS SEH",
    "answer": "مو ناقصنا غير هالقصة — Just what we needed (sarcastic)",
    "source": "Levantine Arabic · common in Syria",
    "id": "DECODE-103"
  },
  {
    "type": "arabish",
    "prompt": "EE ZA BAD DAK IS SA RAA HAH MA IK TA NA AT",
    "answer": "إذا بدك الصراحة، ما اقتنعت — Honestly, I was not convinced",
    "source": "Levantine Arabic · common in Syria",
    "id": "DECODE-104"
  },
  {
    "type": "arabish",
    "prompt": "DEER BAA LAK A HAA LAK",
    "answer": "دير بالك ع حالك — Take care of yourself",
    "source": "Levantine Arabic · common in Syria",
    "id": "DECODE-105"
  },
  {
    "type": "arabish",
    "prompt": "LA TAA KOL HAM BIT TIN HALL",
    "answer": "لا تاكل هم، بتنحل — Do not worry; it will work itself out",
    "source": "Levantine Arabic · common in Syria",
    "id": "DECODE-106"
  },
  {
    "type": "arabish",
    "prompt": "MA ILL EE KHEL LICK IH KEE HAL LA",
    "answer": "ما إلي خلق إحكي هلأ — I do not feel like talking right now",
    "source": "Levantine Arabic · common in Syria",
    "id": "DECODE-107"
  },
  {
    "type": "arabish",
    "prompt": "SHOO AM T HAA WIL T OO L",
    "answer": "شو عم تحاول تقول؟ — What are you trying to say?",
    "source": "Levantine Arabic · common in Syria",
    "id": "DECODE-108"
  },
  {
    "type": "arabish",
    "prompt": "TAW WIL BAA LAK SHWAY",
    "answer": "طوّل بالك شوي — Be patient for a moment",
    "source": "Levantine Arabic · common in Syria",
    "id": "DECODE-109"
  },
  {
    "type": "arabish",
    "prompt": "KHAL LEE NA NAA KHOD HA MIN KSAI RA",
    "answer": "خلّينا ناخدها من قصيرها — Let us cut to the chase",
    "source": "Levantine Arabic · common in Syria",
    "id": "DECODE-110"
  },
  {
    "type": "arabish",
    "prompt": "HAY SHUGH LEH BID DA RA WAA",
    "answer": "هاي الشغلة بدها رواق — This situation needs calm and patience",
    "source": "Levantine Arabic · common in Syria",
    "id": "DECODE-111"
  },
  {
    "type": "arabish",
    "prompt": "MA FEE DAA EE T KAB BIR IL MAW DOO",
    "answer": "ما في داعي تكبّر الموضوع — There is no need to blow this out of proportion",
    "source": "Levantine Arabic · common in Syria",
    "id": "DECODE-112"
  },
  {
    "type": "arabish",
    "prompt": "SHOO AM TA MIL HAA LAK MISH SHAA YIF",
    "answer": "شو عم تعمل حالك مش شايف؟ — Why are you pretending not to see?",
    "source": "Levantine Arabic · common in Lebanon",
    "id": "DECODE-113"
  },
  {
    "type": "arabish",
    "prompt": "BAAD BAK KEER A HAL HA KEE",
    "answer": "بعد بكير ع هالحكي — It is still too early for that talk",
    "source": "Levantine Arabic · common in Lebanon",
    "id": "DECODE-114"
  },
  {
    "type": "arabish",
    "prompt": "MA BAA FEE YE T HAM MAL",
    "answer": "ما بقى فيّي إتحمّل — I cannot take it anymore",
    "source": "Levantine Arabic · common in Lebanon",
    "id": "DECODE-115"
  },
  {
    "type": "arabish",
    "prompt": "WA LA Y HIM MAK BIT T DAB BAR",
    "answer": "ولا يهمك، بتتدبّر — Do not worry; it will get sorted out",
    "source": "Levantine Arabic · common in Lebanon",
    "id": "DECODE-116"
  },
  {
    "type": "arabish",
    "prompt": "KHAL LEE NA NIH KEE BIL MAW DOO AAL MAK SHOOF",
    "answer": "خلّينا نحكي بالموضوع عالمكشوف — Let us discuss the subject openly",
    "source": "Levantine Arabic · common in Lebanon",
    "id": "DECODE-117"
  },
  {
    "type": "arabish",
    "prompt": "AN JAD AM TIM ZAH MAA EE",
    "answer": "عنجد عم تمزح معي؟ — Are you seriously joking with me?",
    "source": "Levantine Arabic · common in Lebanon",
    "id": "DECODE-118"
  },
  {
    "type": "arabish",
    "prompt": "MA KHS SAK BI HAL ISS SEH",
    "answer": "ما خصّك بهالقصة — This is none of your business",
    "source": "Levantine Arabic · common in Lebanon",
    "id": "DECODE-119"
  },
  {
    "type": "arabish",
    "prompt": "DOK IL HA DEED W HOO WEE HAA MEE",
    "answer": "دقّ الحديد وهو حامي — Strike while the iron is hot",
    "source": "Levantine Arabic · common in Lebanon",
    "id": "DECODE-120"
  },
  {
    "type": "arabish",
    "prompt": "EE JA Y KAH HIL HA A MA HA",
    "answer": "إجا ليكحّلها عماها — He tried to fix it and made it worse",
    "source": "Levantine Arabic · common in Lebanon",
    "id": "DECODE-121"
  },
  {
    "type": "arabish",
    "prompt": "MIT LIL ATRASH BIZ ZAFF EH",
    "answer": "متل الأطرش بالزفّة — Like someone completely unaware of what is happening",
    "source": "Levantine Arabic · common in Lebanon",
    "id": "DECODE-122"
  },
  {
    "type": "arabish",
    "prompt": "KILL TA KH EE REH FEE HA KHAI RAH",
    "answer": "كل تأخيرة فيها خيرة — Every delay may carry something good",
    "source": "Levantine Arabic · common in Lebanon",
    "id": "DECODE-123"
  },
  {
    "type": "arabish",
    "prompt": "IL LEE S TAH HOO MAA TOO",
    "answer": "اللي استحوا ماتوا — Some people have no shame (literally: those who were shy died)",
    "source": "Levantine Arabic · common in Lebanon",
    "id": "DECODE-124"
  },
  {
    "type": "arabish",
    "prompt": "SHOO MAA LAK AA LIB WIJ HAK",
    "answer": "شو مالك قالب وجهك؟ — Why the long face?",
    "source": "Levantine Arabic · common in Palestine",
    "id": "DECODE-125"
  },
  {
    "type": "arabish",
    "prompt": "BID DAK IS SAA FEE WA LA IB N AM MO",
    "answer": "بدّك الصافي ولا ابن عمّه؟ — Do you want the plain truth or a softened version?",
    "source": "Levantine Arabic · common in Palestine",
    "id": "DECODE-126"
  },
  {
    "type": "arabish",
    "prompt": "IL LEE MA B AAR FAK B JAH LAK",
    "answer": "اللي ما بعرفك بجهلك — Someone who does not know you may misjudge you",
    "source": "Levantine Arabic · common in Palestine",
    "id": "DECODE-127"
  },
  {
    "type": "arabish",
    "prompt": "MISH KILL MAR RAH BIT S LAM IL JAR RAH",
    "answer": "مش كل مرّة بتسلم الجرّة — You cannot expect to get away with it every time",
    "source": "Levantine Arabic · common in Palestine",
    "id": "DECODE-128"
  },
  {
    "type": "arabish",
    "prompt": "IL IRD B AYN IM MO GHA ZAAL",
    "answer": "القرد بعين أمّه غزال — In his mother’s eyes, even a monkey is a gazelle",
    "source": "Levantine Arabic · common in Palestine",
    "id": "DECODE-129"
  },
  {
    "type": "arabish",
    "prompt": "B KAF FEE LAFF W DA WA RAAN",
    "answer": "بكفّي لف ودوران — Enough beating around the bush",
    "source": "Levantine Arabic · common in Palestine",
    "id": "DECODE-130"
  },
  {
    "type": "arabish",
    "prompt": "HOTT AK LAK B RAA SAK W AAR RAF KHA LAA SAK",
    "answer": "حطّ عقلك براسك واعرف خلاصك — Think wisely and know what is best for you",
    "source": "Levantine Arabic · common in Palestine",
    "id": "DECODE-131"
  },
  {
    "type": "arabish",
    "prompt": "MA DALL GHAI RAK YIH KEE",
    "answer": "ما ضلّ غيرك يحكي — As if you were the only person left to speak",
    "source": "Levantine Arabic · common in Palestine",
    "id": "DECODE-132"
  },
  {
    "type": "arabish",
    "prompt": "IJ IT IL HA ZEE NEH TIF RAH MA LAA AT IL HA MAT RAH",
    "answer": "إجت الحزينة تفرح ما لقتلها مطرح — When the unlucky one came to celebrate, she found no place",
    "source": "Levantine Arabic · common in Palestine",
    "id": "DECODE-133"
  },
  {
    "type": "arabish",
    "prompt": "IL HA KEE IL LAK YA JAA RAH",
    "answer": "الحكي إلك يا جارة — The message is really meant for you, neighbor",
    "source": "Levantine Arabic · common in Palestine",
    "id": "DECODE-134"
  },
  {
    "type": "arabish",
    "prompt": "MIN BAR RA HAL LAH HAL LAH W MIN JOW WA YAA LAM AL LAH",
    "answer": "من برّا هالله هالله ومن جوّا يعلم الله — Impressive outside; only Allah knows what is inside",
    "source": "Levantine Arabic · common in Palestine",
    "id": "DECODE-135"
  },
  {
    "type": "arabish",
    "prompt": "IL LEE BID REE BID REE W IL LEE MA BID REE B OO L KAFF A DAS",
    "answer": "اللي بدري بدري، واللي ما بدري بقول كف عدس — Those who know, know; those who do not invent explanations",
    "source": "Levantine Arabic · common in Palestine",
    "id": "DECODE-136"
  },
  {
    "type": "arabish",
    "prompt": "SHOO HAL HA KEE IL LEE MA IL LO DAA EE",
    "answer": "شو هالحكي اللي ما إله داعي؟ — What is this pointless talk?",
    "source": "Levantine Arabic · common in Jordan",
    "id": "DECODE-137"
  },
  {
    "type": "arabish",
    "prompt": "LA T DALL LAK T LIF W T DOOR",
    "answer": "لا تظلّك تلف وتدور — Stop going around in circles",
    "source": "Levantine Arabic · common in Jordan",
    "id": "DECODE-138"
  },
  {
    "type": "arabish",
    "prompt": "HAS SA F HIMT A LAYK",
    "answer": "هسّه فهمت عليك — Now I understand what you mean",
    "source": "Levantine Arabic · common in Jordan",
    "id": "DECODE-139"
  },
  {
    "type": "arabish",
    "prompt": "MIN IL AA KHIR SHOO BAD DAK",
    "answer": "من الآخر، شو بدّك؟ — Bottom line: what do you want?",
    "source": "Levantine Arabic · common in Jordan",
    "id": "DECODE-140"
  },
  {
    "type": "arabish",
    "prompt": "RAW WIK NA YA ZA LA MEH",
    "answer": "روّقنا يا زلمة — Give us a break and calm down, man",
    "source": "Levantine Arabic · common in Jordan",
    "id": "DECODE-141"
  },
  {
    "type": "arabish",
    "prompt": "MA BIT M SHEE A LAY HAL SA WAA LIF",
    "answer": "ما بتمشي عليّ هالسوالف — I am not buying these stories",
    "source": "Levantine Arabic · common in Jordan",
    "id": "DECODE-142"
  },
  {
    "type": "arabish",
    "prompt": "HAIK BID DA HA IL ISS SEH",
    "answer": "هيك بدها القصّة — This is how the situation needs to be handled",
    "source": "Levantine Arabic · common in Jordan",
    "id": "DECODE-143"
  },
  {
    "type": "arabish",
    "prompt": "YA JA BAL MA Y HIZ ZAK REEH",
    "answer": "يا جبل ما يهزّك ريح — Be like a mountain no wind can shake",
    "source": "Levantine Arabic · common in Jordan",
    "id": "DECODE-144"
  },
  {
    "type": "arabish",
    "prompt": "IL MAK TOOB M BAY YAN MIN IN WAA NO",
    "answer": "المكتوب مبيّن من عنوانه — You can tell what is coming from the title",
    "source": "Levantine Arabic · common in Jordan",
    "id": "DECODE-145"
  },
  {
    "type": "arabish",
    "prompt": "KILL WAA HID AK LO B RAA SO B AAR RAF KHA LAA SO",
    "answer": "كل واحد عقله براسه بعرف خلاصه — Everyone has a mind and knows what serves them",
    "source": "Levantine Arabic · common in Jordan",
    "id": "DECODE-146"
  },
  {
    "type": "arabish",
    "prompt": "BAD DAK EE YA NEE A SAD DIK HAL HA KEE",
    "answer": "بدّك إيّاني أصدّق هالحكي؟ — You expect me to believe this?",
    "source": "Levantine Arabic · common in Jordan",
    "id": "DECODE-147"
  },
  {
    "type": "arabish",
    "prompt": "IN KAN HAIK KHAL LEE NA N KHALLIS MIN HAS SA",
    "answer": "إن كان هيك، خلّينا نخلّص من هسّه — If that is the case, let us finish it now",
    "source": "Levantine Arabic · common in Jordan",
    "id": "DECODE-148"
  },
  {
    "type": "arabish",
    "prompt": "HELL YOUM KIN AN TOO EED MAH COOL TAH",
    "answer": "هل يمكن أن تعيد ما قلته؟ — Could you repeat what you said?",
    "source": "Modern Standard Arabic",
    "id": "DECODE-149"
  },
  {
    "type": "arabish",
    "prompt": "LESS TOO MOO TAH ACK KID DAN MIN SIH HAT HAA THEE HILL MAH LOO MAH",
    "answer": "لست متأكداً من صحة هذه المعلومة — I am not certain this information is correct",
    "source": "Modern Standard Arabic",
    "id": "DECODE-150"
  },
  {
    "type": "arabish",
    "prompt": "LA TOO AJ JILL AM A LIL YOUM EE LAL GHAD",
    "answer": "لا تؤجّل عمل اليوم إلى الغد — Do not put off today’s work until tomorrow",
    "source": "Modern Standard Arabic",
    "id": "DECODE-151"
  },
  {
    "type": "arabish",
    "prompt": "LEE COOL LEE MA COM IN MA CALL",
    "answer": "لكلّ مقامٍ مقال — Every situation calls for the right words",
    "source": "Modern Standard Arabic",
    "id": "DECODE-152"
  },
  {
    "type": "arabish",
    "prompt": "MA COOL LOO MA YAL MA OO THA HA BAN",
    "answer": "ما كلّ ما يلمع ذهباً — Not everything that glitters is gold",
    "source": "Modern Standard Arabic",
    "id": "DECODE-153"
  },
  {
    "type": "arabish",
    "prompt": "MIN JAD DA WA JAD WA MIN ZA RA A HA SAD",
    "answer": "من جدّ وجد، ومن زرع حصد — Whoever works hard succeeds; whoever plants reaps",
    "source": "Modern Standard Arabic",
    "id": "DECODE-154"
  },
  {
    "type": "arabish",
    "prompt": "RUB BA DAR RAT IN NAA FEE AH",
    "answer": "رُبّ ضارّةٍ نافعة — Something harmful may ultimately bring benefit",
    "source": "Modern Standard Arabic",
    "id": "DECODE-155"
  },
  {
    "type": "arabish",
    "prompt": "TAJ REE REE YAA HOO BEE MAA LA TASH TA HEE SUF FUN",
    "answer": "تجري الرياح بما لا تشتهي السفن — The winds do not always blow as ships wish",
    "source": "Modern Standard Arabic",
    "id": "DECODE-156"
  },
  {
    "type": "arabish",
    "prompt": "KHAI RUL OO MOO REE AWS SA TOO HAA",
    "answer": "خير الأمور أوسطها — The best course is the balanced one",
    "source": "Modern Standard Arabic",
    "id": "DECODE-157"
  },
  {
    "type": "arabish",
    "prompt": "LA TAH KOOM A LAL KEE TAB MIN GHEE LAA FEE HEE",
    "answer": "لا تحكم على الكتاب من غلافه — Do not judge a book by its cover",
    "source": "Modern Standard Arabic",
    "id": "DECODE-158"
  },
  {
    "type": "arabish",
    "prompt": "MIN TA LA BAL OO LA SA HAA RAL LAY AA LEE",
    "answer": "من طلب العُلا سهر الليالي — Whoever seeks excellence must endure long nights",
    "source": "Modern Standard Arabic",
    "id": "DECODE-159"
  },
  {
    "type": "arabish",
    "prompt": "AS SA DEE KOO WAK TAD DEEK",
    "answer": "الصديق وقت الضيق — A true friend appears in times of hardship",
    "source": "Modern Standard Arabic",
    "id": "DECODE-160"
  },
  {
    "type": "trivia",
    "prompt": "Where does the Qur’an locate the first House established for humanity?",
    "answer": "At Bakkah—the location of the Ka‘bah",
    "source": "Qur’an 3:96",
    "id": "TRIVIA-061"
  },
  {
    "type": "trivia",
    "prompt": "What does the Qur’an call Safa and Marwah?",
    "answer": "Among the symbols or sacred rites of Allah",
    "source": "Qur’an 2:158",
    "id": "TRIVIA-062"
  },
  {
    "type": "trivia",
    "prompt": "How many months does the Qur’an say are in Allah’s decree, and how many are sacred?",
    "answer": "Twelve months, of which four are sacred",
    "source": "Qur’an 9:36",
    "id": "TRIVIA-063"
  },
  {
    "type": "trivia",
    "prompt": "How many recipient categories for zakah are listed in Qur’an 9:60?",
    "answer": "Eight categories",
    "source": "Qur’an 9:60",
    "id": "TRIVIA-064"
  },
  {
    "type": "trivia",
    "prompt": "Why did Sulayman order the Queen of Saba’s throne to be disguised?",
    "answer": "To test whether she would recognize it and show insight",
    "source": "Qur’an 27:41–42",
    "id": "TRIVIA-065"
  },
  {
    "type": "trivia",
    "prompt": "What happened to the mountain when Allah manifested His glory to it after Musa asked to see Him?",
    "answer": "It crumbled, and Musa fell unconscious",
    "source": "Qur’an 7:143",
    "id": "TRIVIA-066"
  },
  {
    "type": "trivia",
    "prompt": "Which event is mentioned at the opening of Surah Al-Qamar as a sign?",
    "answer": "The moon was split",
    "source": "Qur’an 54:1–2",
    "id": "TRIVIA-067"
  },
  {
    "type": "trivia",
    "prompt": "Into what were the Sabbath-breakers commanded to become?",
    "answer": "Despised apes",
    "source": "Qur’an 2:65; 7:166",
    "id": "TRIVIA-068"
  },
  {
    "type": "trivia",
    "prompt": "Which prophet is named with Ismail and Idris as one of the steadfast?",
    "answer": "Dhul-Kifl",
    "source": "Qur’an 21:85",
    "id": "TRIVIA-069"
  },
  {
    "type": "trivia",
    "prompt": "What status did Allah promise Ibrahim after testing him with commands that he fulfilled?",
    "answer": "A leader—an imam—for humanity",
    "source": "Qur’an 2:124",
    "id": "TRIVIA-070"
  },
  {
    "type": "trivia",
    "prompt": "What are the three main expiation options stated for a broken deliberate oath before fasting is used?",
    "answer": "Feed ten needy people, clothe them, or free an enslaved person",
    "source": "Qur’an 5:89",
    "id": "TRIVIA-071"
  },
  {
    "type": "trivia",
    "prompt": "If the standard two male witnesses are unavailable for a deferred debt, what alternative does Qur’an 2:282 give?",
    "answer": "One man and two women from acceptable witnesses",
    "source": "Qur’an 2:282",
    "id": "TRIVIA-072"
  },
  {
    "type": "trivia",
    "prompt": "What did Zakariyya repeatedly find with Maryam in her prayer chamber?",
    "answer": "Provision",
    "source": "Qur’an 3:37",
    "id": "TRIVIA-073"
  },
  {
    "type": "trivia",
    "prompt": "What animal appears in the parable of people entrusted with scripture but failing to carry its meaning?",
    "answer": "A donkey carrying books",
    "source": "Qur’an 62:5",
    "id": "TRIVIA-074"
  },
  {
    "type": "trivia",
    "prompt": "What two natural examples illustrate truth remaining and falsehood passing away in Qur’an 13:17?",
    "answer": "Flowing water and melted metal, with useless foam disappearing from both",
    "source": "Qur’an 13:17",
    "id": "TRIVIA-075"
  },
  {
    "type": "trivia",
    "prompt": "What was the first thing the crow taught one son of Adam after the killing?",
    "answer": "How to bury or conceal his brother’s body",
    "source": "Qur’an 5:31",
    "id": "TRIVIA-076"
  },
  {
    "type": "trivia",
    "prompt": "What did the owners of the garden in Surah Al-Qalam intend to withhold when they planned an early harvest?",
    "answer": "The share of the poor",
    "source": "Qur’an 68:17–33",
    "id": "TRIVIA-077"
  },
  {
    "type": "trivia",
    "prompt": "What destroyed the fertile gardens of Saba after the people turned away?",
    "answer": "A devastating flood from the dam",
    "source": "Qur’an 34:15–16",
    "id": "TRIVIA-078"
  },
  {
    "type": "trivia",
    "prompt": "Which two women are presented as examples of disbelief despite being married to righteous prophets?",
    "answer": "The wives of Nuh and Lut",
    "source": "Qur’an 66:10",
    "id": "TRIVIA-079"
  },
  {
    "type": "trivia",
    "prompt": "What number of grains does the charity parable produce from seven ears with one hundred grains each?",
    "answer": "Seven hundred grains",
    "source": "Qur’an 2:261",
    "id": "TRIVIA-080"
  },
  {
    "type": "identity",
    "prompt": "A fire drew Musa toward me, but revelation made me sacred. Before hearing his mission, he was told to remove his sandals. What valley am I?",
    "answer": "The sacred valley of Tuwa",
    "source": "Qur’an 20:9–14",
    "id": "RIDDLE-051"
  },
  {
    "type": "identity",
    "prompt": "When water was told to subside, an ark settled upon me. I am named in a single command that ends with distance from wrongdoing people. What mountain am I?",
    "answer": "Al-Judi",
    "source": "Qur’an 11:44",
    "id": "RIDDLE-052"
  },
  {
    "type": "identity",
    "prompt": "Musa reached my water alone and found shepherds crowding around it while two women waited back. Where was he?",
    "answer": "The water of Madyan",
    "source": "Qur’an 28:22–28",
    "id": "RIDDLE-053"
  },
  {
    "type": "identity",
    "prompt": "My people were ‘Ad; my pillars were lofty; and the Qur’an says nothing like me had been created in the lands. What ancient city or people am I?",
    "answer": "Iram of the pillars",
    "source": "Qur’an 89:6–8",
    "id": "RIDDLE-054"
  },
  {
    "type": "identity",
    "prompt": "A brother of ‘Ad warned his people among my curved sand hills. My name later became the title of a Qur’anic surah. What region am I?",
    "answer": "Al-Ahqaf—the sand hills",
    "source": "Qur’an 46:21–26",
    "id": "RIDDLE-055"
  },
  {
    "type": "identity",
    "prompt": "The Night Journey reached me from Al-Masjid al-Haram. The Qur’an calls my surroundings blessed. What sanctuary am I?",
    "answer": "Al-Masjid al-Aqsa—the Farthest Mosque",
    "source": "Qur’an 17:1",
    "id": "RIDDLE-056"
  },
  {
    "type": "identity",
    "prompt": "I am better than a thousand months. Angels and the Spirit descend during me, and peace lasts until dawn. What night am I?",
    "answer": "Laylat al-Qadr—the Night of Decree",
    "source": "Qur’an 97:1–5",
    "id": "RIDDLE-057"
  },
  {
    "type": "identity",
    "prompt": "Fasting is tied to me, but my defining Qur’anic honor is that revelation began within me as guidance for humanity. What month am I?",
    "answer": "Ramadan",
    "source": "Qur’an 2:185",
    "id": "RIDDLE-058"
  },
  {
    "type": "identity",
    "prompt": "The believers were few and materially weak when Allah granted victory here. A plea for help was answered with angelic support. What battle am I?",
    "answer": "The Battle of Badr",
    "source": "Qur’an 3:123; 8:9–12",
    "id": "RIDDLE-059"
  },
  {
    "type": "identity",
    "prompt": "We left our people for faith, turned inside a cave as we slept, and woke debating whether a day or part of one had passed. Who are we?",
    "answer": "The Companions of the Cave",
    "source": "Qur’an 18:9–26",
    "id": "RIDDLE-060"
  },
  {
    "type": "identity",
    "prompt": "Fire was dug below us while witnesses sat above. Our only “crime” was believing in Allah, the Mighty, the Praiseworthy. Who are we?",
    "answer": "The People of the Trench",
    "source": "Qur’an 85:4–10",
    "id": "RIDDLE-061"
  },
  {
    "type": "identity",
    "prompt": "An army’s largest animal gives us our title, but flocks of birds ended the march before the Sacred House fell. Who are we?",
    "answer": "The Companions of the Elephant",
    "source": "Qur’an 105:1–5",
    "id": "RIDDLE-062"
  },
  {
    "type": "identity",
    "prompt": "I have seven verses, open the Book, move from praise to covenant, and end with a plea for the straight path. Which surah am I?",
    "answer": "Surah Al-Fatihah",
    "source": "Qur’an 1:1–7; Sahih al-Bukhari 4474",
    "id": "RIDDLE-063"
  },
  {
    "type": "identity",
    "prompt": "My title comes from an animal in a murder investigation, but I am the Qur’an’s longest surah. Which surah am I?",
    "answer": "Surah Al-Baqarah",
    "source": "Standard mushaf arrangement; Qur’an 2:67–73",
    "id": "RIDDLE-064"
  },
  {
    "type": "identity",
    "prompt": "An ant gives me my title, a hoopoe delivers my evidence, and a queen’s throne crosses a great distance within me. Which surah am I?",
    "answer": "Surah An-Naml",
    "source": "Qur’an 27:18–44",
    "id": "RIDDLE-065"
  },
  {
    "type": "identity",
    "prompt": "A cave gives me my title, but my pages also hold two gardens, a mysterious journey with Musa, and a barrier of iron. Which surah am I?",
    "answer": "Surah Al-Kahf",
    "source": "Qur’an 18:9–98",
    "id": "RIDDLE-066"
  },
  {
    "type": "identity",
    "prompt": "A dream of eleven stars opens my story; a family bow closes it. The Qur’an calls the account the best of narratives. Which surah am I?",
    "answer": "Surah Yusuf",
    "source": "Qur’an 12:3–101",
    "id": "RIDDLE-067"
  },
  {
    "type": "identity",
    "prompt": "I begin with a woman’s complaint being heard above a private conversation. My title means “the woman who disputes.” Which surah am I?",
    "answer": "Surah Al-Mujadilah",
    "source": "Qur’an 58:1–4",
    "id": "RIDDLE-068"
  },
  {
    "type": "identity",
    "prompt": "I answer one historical question in five short verses: what became of the army that approached the Ka‘bah with an elephant? Which surah am I?",
    "answer": "Surah Al-Fil",
    "source": "Qur’an 105:1–5",
    "id": "RIDDLE-069"
  },
  {
    "type": "identity",
    "prompt": "Four verses deny ancestry, offspring, likeness, and need while affirming absolute oneness. Which surah am I?",
    "answer": "Surah Al-Ikhlas",
    "source": "Qur’an 112:1–4",
    "id": "RIDDLE-070"
  },
  {
    "type": "mizan",
    "prompt": "A friend shares a serious accusation about someone and asks you to warn the whole group immediately. The claim may be true, but no one has verified it. What do you do?",
    "answer": "Protect people from possible harm without spreading an unverified charge: clarify urgency, preserve evidence, involve an appropriate responsible person, and verify before broadcasting.",
    "source": "Principles: Qur’an 49:6; avoid harm and reckless suspicion",
    "id": "DILEMMA-036"
  },
  {
    "type": "mizan",
    "prompt": "Your family expects you to conceal a relative’s financial abuse because exposing it would “break the family.” The harmed person is still losing money. What takes priority?",
    "answer": "Stop the ongoing harm and seek a fair, discreet process. Family unity cannot require enabling injustice; limit disclosure to those needed for protection and resolution.",
    "source": "Principles: Qur’an 4:135; 5:8",
    "id": "DILEMMA-037"
  },
  {
    "type": "mizan",
    "prompt": "Someone apologizes publicly for humiliating you, but privately pressures you to say everything is resolved before trust has been rebuilt. Must forgiveness mean immediate access?",
    "answer": "No. You can pardon without pretending trust is restored. State what repair requires, keep proportionate boundaries, and avoid revenge or public humiliation.",
    "source": "Principles: Qur’an 24:22; 42:40",
    "id": "DILEMMA-038"
  },
  {
    "type": "mizan",
    "prompt": "A community fundraiser uses emotional claims that are technically true but omit facts donors would consider important. The cause is good. Is the tactic acceptable?",
    "answer": "A worthy goal does not justify material deception. Correct the presentation, disclose relevant facts, and let donors choose with informed consent.",
    "source": "Principles: truthful dealing and amanah; Qur’an 4:58",
    "id": "DILEMMA-039"
  },
  {
    "type": "mizan",
    "prompt": "Your manager asks you to take credit for a colleague’s work because it will help your team secure funding that benefits everyone. What is the principled response?",
    "answer": "Refuse false attribution, document contributions accurately, and propose an honest team-based case for funding. Shared benefit does not make misrepresentation fair.",
    "source": "Principles: Qur’an 5:8; 9:119",
    "id": "DILEMMA-040"
  },
  {
    "type": "mizan",
    "prompt": "A friend confides that they are quietly leaving harmful behavior but asks you never to tell anyone. Later, you see signs of immediate danger. Do you keep the confidence?",
    "answer": "Confidentiality has limits when serious, imminent harm is credible. Tell the friend what you must do if safe, involve the smallest appropriate circle, and avoid unnecessary exposure.",
    "source": "Principles: preserve life, minimize harm, keep trusts responsibly",
    "id": "DILEMMA-041"
  },
  {
    "type": "mizan",
    "prompt": "You discover a religious post you shared contains a false quotation. Deleting it silently would protect your reputation, while correcting it may draw attention to the error. What do you do?",
    "answer": "Remove or clearly correct it, acknowledge the mistake in proportion to its reach, and share the verified source. Repair matters more than protecting an image of certainty.",
    "source": "Principles: verification and honesty; Qur’an 49:6",
    "id": "DILEMMA-042"
  },
  {
    "type": "mizan",
    "prompt": "A relative repeatedly gives unsolicited religious advice in a harsh way. Their point is sometimes correct, but the method damages your relationship. How do you respond?",
    "answer": "Separate truth from delivery: accept what is sound, name the harmful pattern calmly, request a better time and manner, and set boundaries if the behavior continues.",
    "source": "Principles: wisdom and gracious counsel; Qur’an 16:125",
    "id": "DILEMMA-043"
  },
  {
    "type": "mizan",
    "prompt": "Two friends are in conflict. Each tells you private details and expects loyalty. You can see faults on both sides. What does fair mediation require?",
    "answer": "Do not become a messenger for private attacks. Obtain consent before sharing details, correct each side honestly, and focus on repair rather than winning.",
    "source": "Principles: reconciliation and justice; Qur’an 49:9–10",
    "id": "DILEMMA-044"
  },
  {
    "type": "mizan",
    "prompt": "A financially struggling friend refuses help out of dignity, but you know a bill is overdue. How can you help without taking control away from them?",
    "answer": "Offer specific choices, preserve privacy, and let them decide. If serious harm is near, explore discreet support that does not manipulate or shame them.",
    "source": "Principles: charity with dignity; Qur’an 2:262–264",
    "id": "DILEMMA-045"
  },
  {
    "type": "reflection",
    "prompt": "What part of your religious routine still has form but has quietly lost meaning?",
    "answer": "",
    "source": "Reflection on renewal",
    "id": "SURFACE-071"
  },
  {
    "type": "reflection",
    "prompt": "Which part of one religious practice needs renewed intention, better understanding, rest, or a smaller sustainable form?",
    "answer": "",
    "source": "Reflection on renewal",
    "id": "SURFACE-072"
  },
  {
    "type": "reflection",
    "prompt": "When you say “Allah knows my heart,” are you seeking comfort, avoiding accountability, or both?",
    "answer": "",
    "source": "Reflection on intention and action",
    "id": "SURFACE-073"
  },
  {
    "type": "reflection",
    "prompt": "What do your outward choices reveal about your heart, even when your intention feels more complicated?",
    "answer": "",
    "source": "Reflection on intention and action",
    "id": "SURFACE-074"
  },
  {
    "type": "reflection",
    "prompt": "Which person do you find easiest to reduce to their worst mistake?",
    "answer": "",
    "source": "Reflection on mercy and judgment",
    "id": "SURFACE-075"
  },
  {
    "type": "reflection",
    "prompt": "What would justice, caution, and belief in repentance each ask of you toward someone you judge by their worst mistake?",
    "answer": "",
    "source": "Reflection on mercy and judgment",
    "id": "SURFACE-076"
  },
  {
    "type": "reflection",
    "prompt": "What blessing have you normalized so completely that you only notice it when threatened?",
    "answer": "",
    "source": "Reflection on gratitude",
    "id": "SURFACE-077"
  },
  {
    "type": "reflection",
    "prompt": "How could gratitude change how you use a blessing—not only how you speak about it?",
    "answer": "",
    "source": "Reflection on gratitude",
    "id": "SURFACE-078"
  },
  {
    "type": "reflection",
    "prompt": "Which unanswered question about faith are you afraid to voice because of how people might judge you?",
    "answer": "",
    "source": "Reflection on questions and belonging",
    "id": "SURFACE-079"
  },
  {
    "type": "reflection",
    "prompt": "What kind of trustworthy teacher, evidence, or setting would help you voice an unanswered question about faith?",
    "answer": "",
    "source": "Reflection on questions and belonging",
    "id": "SURFACE-080"
  },
  {
    "type": "reflection",
    "prompt": "Where has avoiding conflict allowed resentment to grow?",
    "answer": "",
    "source": "Reflection on courageous communication",
    "id": "SURFACE-081"
  },
  {
    "type": "reflection",
    "prompt": "What would a truthful, gentle conversation sound like if the goal were repair rather than releasing anger?",
    "answer": "",
    "source": "Reflection on courageous communication",
    "id": "SURFACE-082"
  },
  {
    "type": "reflection",
    "prompt": "Which act of worship do you treat mainly as a test of willpower?",
    "answer": "",
    "source": "Reflection on worship",
    "id": "SURFACE-083"
  },
  {
    "type": "reflection",
    "prompt": "What would change if you approached an act of worship as a relationship, a need, and a source of formation—not only a test of willpower?",
    "answer": "",
    "source": "Reflection on worship",
    "id": "SURFACE-084"
  },
  {
    "type": "reflection",
    "prompt": "When you imagine becoming “better,” whose approval is hidden inside that picture?",
    "answer": "",
    "source": "Reflection on identity",
    "id": "SURFACE-085"
  },
  {
    "type": "reflection",
    "prompt": "Which change you want is rooted in worship and character, and which is driven mainly by comparison?",
    "answer": "",
    "source": "Reflection on identity",
    "id": "SURFACE-086"
  },
  {
    "type": "reflection",
    "prompt": "What do you ask Allah to remove that may also be teaching you a boundary, skill, or truth?",
    "answer": "",
    "source": "Reflection on hardship and agency",
    "id": "SURFACE-087"
  },
  {
    "type": "reflection",
    "prompt": "What lesson can you take from a hardship without assuming the hardship must remain or harm should be tolerated?",
    "answer": "",
    "source": "Reflection on hardship and agency",
    "id": "SURFACE-088"
  },
  {
    "type": "reflection",
    "prompt": "Which commitment would survive if progress became invisible for a full year?",
    "answer": "",
    "source": "Reflection on steadfastness",
    "id": "SURFACE-089"
  },
  {
    "type": "reflection",
    "prompt": "What does your need for visible progress reveal about patience and sincerity?",
    "answer": "",
    "source": "Reflection on steadfastness",
    "id": "SURFACE-090"
  }
];
