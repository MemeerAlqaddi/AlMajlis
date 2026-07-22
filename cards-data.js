/* Stable, reviewable card records. Existing IDs must never be reused. */
const cards = [
  [
    "say",
    "ISTIDRAJ",
    "Do not say: gradual · punishment · blessings · sin · unaware",
    "Qur’an 7:182–183",
    "WORD-001"
  ],
  [
    "say",
    "KHUSHU’",
    "Do not say: prayer · humble · focus · heart · stillness",
    "Qur’an 23:1–2",
    "WORD-002"
  ],
  [
    "say",
    "QANA’AH",
    "Do not say: contentment · enough · wealth · satisfied · provision",
    "Concept; see Sahih Muslim 1054",
    "WORD-003"
  ],
  [
    "say",
    "HUSN AL-DHANN",
    "Do not say: good opinion · assume · suspicion · believer · think",
    "See Qur’an 49:12",
    "WORD-004"
  ],
  [
    "say",
    "AMANAH",
    "Do not say: trust · responsibility · return · duty · honest",
    "Qur’an 4:58",
    "WORD-005"
  ],
  [
    "say",
    "ISLAH",
    "Do not say: reform · reconcile · improve · conflict · peace",
    "Qur’an 49:10",
    "WORD-006"
  ],
  [
    "say",
    "GHAFLAH",
    "Do not say: heedless · forget · distracted · unaware · remembrance",
    "Qur’an 7:179",
    "WORD-007"
  ],
  [
    "say",
    "SHUBUHAT",
    "Do not say: doubtful · unclear · halal · haram · avoid",
    "See Sahih al-Bukhari 52",
    "WORD-008"
  ],
  [
    "say",
    "HASAD",
    "Do not say: envy · blessing · disappear · jealous · person",
    "See Qur’an 113:5",
    "WORD-009"
  ],
  [
    "say",
    "TADABBUR",
    "Do not say: reflect · Qur’an · meaning · ponder · verses",
    "Qur’an 47:24",
    "WORD-010"
  ],
  [
    "say",
    "TAQWA",
    "Do not say: fear · Allah · conscious · protect · righteous",
    "Qur’an 2:197",
    "WORD-011"
  ],
  [
    "say",
    "TAWAKKUL",
    "Do not say: trust · Allah · rely · outcome · plan",
    "Qur’an 3:159",
    "WORD-012"
  ],
  [
    "say",
    "SABR",
    "Do not say: patience · endure · hardship · wait · steadfast",
    "Qur’an 2:153",
    "WORD-013"
  ],
  [
    "say",
    "SHUKR",
    "Do not say: gratitude · thank · blessing · increase · appreciate",
    "Qur’an 14:7",
    "WORD-014"
  ],
  [
    "say",
    "IKHLAS",
    "Do not say: sincere · intention · pure · Allah · genuine",
    "See Qur’an 98:5",
    "WORD-015"
  ],
  [
    "say",
    "RIYA",
    "Do not say: showing off · worship · people · praise · seen",
    "Qur’an 107:4–6",
    "WORD-016"
  ],
  [
    "say",
    "TAWBAH",
    "Do not say: repent · return · sin · forgiveness · regret",
    "Qur’an 39:53",
    "WORD-017"
  ],
  [
    "say",
    "IHSAN",
    "Do not say: excellence · worship · see · Allah · beautiful",
    "Sahih al-Bukhari 50",
    "WORD-018"
  ],
  [
    "say",
    "ADL",
    "Do not say: justice · fair · equal · judge · rights",
    "Qur’an 16:90",
    "WORD-019"
  ],
  [
    "say",
    "RAHMAH",
    "Do not say: mercy · compassion · kind · forgive · gentle",
    "See Qur’an 21:107",
    "WORD-020"
  ],
  [
    "say",
    "FITNAH",
    "Do not say: trial · temptation · turmoil · test · conflict",
    "See Qur’an 8:25; meaning depends on context",
    "WORD-021"
  ],
  [
    "say",
    "FIQH",
    "Do not say: law · understanding · rulings · scholar · madhhab",
    "See Qur’an 9:122",
    "WORD-022"
  ],
  [
    "say",
    "SUNNAH",
    "Do not say: Prophet · practice · example · hadith · follow",
    "See Qur’an 33:21",
    "WORD-023"
  ],
  [
    "say",
    "BID‘AH",
    "Do not say: innovation · religion · introduce · new · rejected",
    "See Sahih Muslim 1718a",
    "WORD-024"
  ],
  [
    "say",
    "FARD",
    "Do not say: obligatory · required · must · sin · duty",
    "Islamic legal category",
    "WORD-025"
  ],
  [
    "say",
    "MAKRUH",
    "Do not say: disliked · avoid · haram · ruling · rewarded",
    "Islamic legal category",
    "WORD-026"
  ],
  [
    "say",
    "MUBAH",
    "Do not say: permissible · neutral · allowed · halal · choice",
    "Islamic legal category",
    "WORD-027"
  ],
  [
    "say",
    "WARA‘",
    "Do not say: cautious · doubtful · avoid · piety · conscience",
    "Ethical concept; related to Sahih al-Bukhari 52",
    "WORD-028"
  ],
  [
    "say",
    "ZUHD",
    "Do not say: ascetic · worldly · detach · simple · possessions",
    "See Qur’an 57:20",
    "WORD-029"
  ],
  [
    "say",
    "TAZKIYAH",
    "Do not say: purify · soul · growth · cleanse · character",
    "Qur’an 91:9–10",
    "WORD-030"
  ],
  [
    "say",
    "NIFAQ",
    "Do not say: hypocrisy · pretend · believer · inside · outside",
    "See Qur’an 2:8–10",
    "WORD-031"
  ],
  [
    "say",
    "KIBR",
    "Do not say: arrogance · pride · reject · truth · people",
    "Sahih Muslim 91a",
    "WORD-032"
  ],
  [
    "say",
    "‘UJB",
    "Do not say: self-admiration · impressed · ego · deeds · superior",
    "Spiritual-ethics concept",
    "WORD-033"
  ],
  [
    "say",
    "GHIBAH",
    "Do not say: backbiting · true · absent · dislike · mention",
    "Qur’an 49:12; Sahih Muslim 2589",
    "WORD-034"
  ],
  [
    "say",
    "NAMIMAH",
    "Do not say: gossip · carry · tales · people · conflict",
    "Prohibition of tale-bearing; see Sahih Muslim 105a",
    "WORD-035"
  ],
  [
    "say",
    "SADAQAH JARIYAH",
    "Do not say: ongoing · charity · reward · death · benefit",
    "Sahih Muslim 1631",
    "WORD-036"
  ],
  [
    "say",
    "BARAKAH",
    "Do not say: blessing · increase · good · abundance · Allah",
    "See Qur’an 7:96",
    "WORD-037"
  ],
  [
    "say",
    "RIZQ",
    "Do not say: provision · wealth · sustenance · Allah · provide",
    "See Qur’an 51:58",
    "WORD-038"
  ],
  [
    "say",
    "DU‘A",
    "Do not say: supplication · ask · prayer · call · Allah",
    "Qur’an 40:60",
    "WORD-039"
  ],
  [
    "say",
    "DHIKR",
    "Do not say: remembrance · Allah · tongue · heart · repeat",
    "Qur’an 33:41",
    "WORD-040"
  ],
  [
    "say",
    "ISTIGHFAR",
    "Do not say: forgiveness · seek · Astaghfirullah · sin · repent",
    "See Qur’an 71:10",
    "WORD-041"
  ],
  [
    "say",
    "SHURA",
    "Do not say: consultation · decision · community · discuss · advice",
    "Qur’an 42:38",
    "WORD-042"
  ],
  [
    "say",
    "UMMAH",
    "Do not say: community · Muslims · nation · people · worldwide",
    "See Qur’an 3:110",
    "WORD-043"
  ],
  [
    "say",
    "AKHIRAH",
    "Do not say: afterlife · next · world · death · eternal",
    "Qur’an 87:17",
    "WORD-044"
  ],
  [
    "say",
    "QADR",
    "Do not say: decree · destiny · Allah · written · fate",
    "Sahih Muslim 8a",
    "WORD-045"
  ],
  [
    "say",
    "FITRAH",
    "Do not say: natural · disposition · born · pure · instinct",
    "Qur’an 30:30",
    "WORD-046"
  ],
  [
    "say",
    "HALAL",
    "Do not say: permissible · allowed · food · lawful · haram",
    "See Qur’an 16:116",
    "WORD-047"
  ],
  [
    "say",
    "HARAM",
    "Do not say: forbidden · sinful · unlawful · halal · avoid",
    "See Qur’an 16:116",
    "WORD-048"
  ],
  [
    "say",
    "SHIRK",
    "Do not say: partners · Allah · worship · associate · unforgiven",
    "Qur’an 4:48",
    "WORD-049"
  ],
  [
    "say",
    "TAWHID",
    "Do not say: one · Allah · monotheism · alone · worship",
    "See Qur’an 112:1–4",
    "WORD-050"
  ],
  [
    "say",
    "NIYYAH",
    "Do not say: intention · deeds · heart · purpose · reward",
    "Sahih al-Bukhari 1",
    "WORD-051"
  ],
  [
    "say",
    "MAHR",
    "Do not say: marriage · bride · gift · husband · dowry",
    "Qur’an 4:4",
    "WORD-052"
  ],
  [
    "say",
    "WALI",
    "Do not say: guardian · marriage · bride · consent · father",
    "Marriage-law concept; details require scholarship",
    "WORD-053"
  ],
  [
    "say",
    "ZAKAH",
    "Do not say: charity · wealth · obligatory · poor · percentage",
    "See Qur’an 9:60",
    "WORD-054"
  ],
  [
    "say",
    "SUJUD",
    "Do not say: prostration · forehead · prayer · ground · bow",
    "See Qur’an 96:19",
    "WORD-055"
  ],
  [
    "say",
    "QIBLAH",
    "Do not say: direction · Ka‘bah · prayer · face · Makkah",
    "Qur’an 2:144",
    "WORD-056"
  ],
  [
    "say",
    "IHRAM",
    "Do not say: pilgrimage · clothing · Hajj · state · restrictions",
    "See Qur’an 2:196",
    "WORD-057"
  ],
  [
    "say",
    "WUDU",
    "Do not say: ablution · wash · prayer · water · face",
    "Qur’an 5:6",
    "WORD-058"
  ],
  [
    "say",
    "TAYAMMUM",
    "Do not say: dry · earth · water · purification · dust",
    "Qur’an 5:6",
    "WORD-059"
  ],
  [
    "say",
    "SIRAT AL-MUSTAQIM",
    "Do not say: straight · path · guidance · Fatihah · road",
    "Qur’an 1:6",
    "WORD-060"
  ],
  [
    "arabish",
    "SHOE BED DUCK MINI",
    "شو بدك مني؟ — What do you want from me?",
    "Levantine Arabic",
    "DECODE-001"
  ],
  [
    "arabish",
    "WALL LAH MAH BAH REF",
    "والله ما بعرف — I swear, I don’t know",
    "Levantine Arabic",
    "DECODE-002"
  ],
  [
    "arabish",
    "YALL AH N ROOH",
    "يلا نروح — Come on, let’s go",
    "Common colloquial Arabic",
    "DECODE-003"
  ],
  [
    "arabish",
    "MA FEE MUSH KEY LAH",
    "ما في مشكلة — There’s no problem",
    "Common colloquial Arabic",
    "DECODE-004"
  ],
  [
    "arabish",
    "IN TAH WAYNE",
    "إنت وين؟ — Where are you?",
    "Levantine Arabic",
    "DECODE-005"
  ],
  [
    "arabish",
    "KHA LASS BAH AH",
    "خلص بقى — Enough already",
    "Levantine Arabic",
    "DECODE-006"
  ],
  [
    "arabish",
    "SHOE SIGH YER MA ACK",
    "شو صاير معك؟ — What’s going on with you?",
    "Levantine Arabic",
    "DECODE-007"
  ],
  [
    "arabish",
    "LUCK ON JUDD",
    "لك عنجد؟ — Seriously?",
    "Levantine Arabic",
    "DECODE-008"
  ],
  [
    "arabish",
    "MAH LUCK HAYK",
    "مالك هيك؟ — Why are you like this?",
    "Levantine Arabic",
    "DECODE-009"
  ],
  [
    "arabish",
    "AH LOW SHOE FEE",
    "ألو، شو في؟ — Hello, what’s wrong?",
    "Levantine Arabic",
    "DECODE-010"
  ],
  [
    "arabish",
    "BID DEE AH COLE",
    "بدي آكل — I want to eat",
    "Levantine Arabic",
    "DECODE-011"
  ],
  [
    "arabish",
    "LAYSH MAH HA KEET",
    "ليش ما حكيت؟ — Why didn’t you say anything?",
    "Levantine Arabic",
    "DECODE-012"
  ],
  [
    "arabish",
    "WALL LAH IN NUCK MAJ NOON",
    "والله إنك مجنون — I swear, you’re crazy (said to a man)",
    "Common colloquial Arabic",
    "DECODE-013"
  ],
  [
    "arabish",
    "SHWAY SHWAY AH LAKE",
    "شوي شوي عليك — Easy there; take it slow",
    "Common colloquial Arabic",
    "DECODE-014"
  ],
  [
    "arabish",
    "YAH NEE SHOE AH MULL",
    "يعني شو أعمل؟ — So, what am I supposed to do?",
    "Levantine Arabic",
    "DECODE-015"
  ],
  [
    "arabish",
    "SHOE IS MUCK",
    "شو اسمك؟ — What’s your name?",
    "Levantine Arabic",
    "DECODE-016"
  ],
  [
    "arabish",
    "WAY NUCK MIN ZAH MAN",
    "وينك من زمان؟ — Where have you been?",
    "Levantine Arabic",
    "DECODE-017"
  ],
  [
    "arabish",
    "SHOE AM TAH MULL",
    "شو عم تعمل؟ — What are you doing? (said to a man)",
    "Levantine Arabic",
    "DECODE-018"
  ],
  [
    "arabish",
    "MAH F HE MET AH LAKE",
    "ما فهمت عليك — I didn’t understand you",
    "Levantine Arabic",
    "DECODE-019"
  ],
  [
    "arabish",
    "HACK KEY SHWAY SHWAY",
    "احكي شوي شوي — Speak slowly",
    "Levantine Arabic",
    "DECODE-020"
  ],
  [
    "arabish",
    "ON JUDD BIT HACK KEY",
    "عنجد بتحكي؟ — Are you serious?",
    "Levantine Arabic",
    "DECODE-021"
  ],
  [
    "arabish",
    "KHA LEE NAH N BAL LISH",
    "خلينا نبلّش — Let’s start",
    "Levantine Arabic",
    "DECODE-022"
  ],
  [
    "arabish",
    "STAN NAH SHWAY",
    "استنى شوي — Wait a moment",
    "Levantine Arabic",
    "DECODE-023"
  ],
  [
    "arabish",
    "MAH ILL EE KHA LUCK",
    "ما إلي خلق — I’m not in the mood",
    "Levantine Arabic",
    "DECODE-024"
  ],
  [
    "arabish",
    "WALL AH YAY HEM MACK",
    "ولا يهمك — Don’t worry about it",
    "Levantine Arabic",
    "DECODE-025"
  ],
  [
    "arabish",
    "YAH TEEK IL AH FEE YEH",
    "يعطيك العافية — May Allah grant you wellness",
    "Common Arabic expression",
    "DECODE-026"
  ],
  [
    "arabish",
    "ALL AH YAH FEECK",
    "الله يعافيك — May Allah grant you wellness too",
    "Common reply",
    "DECODE-027"
  ],
  [
    "arabish",
    "TOOK RUM EYE NUCK",
    "تكرم عينك — Consider it done",
    "Levantine Arabic",
    "DECODE-028"
  ],
  [
    "arabish",
    "AH LAH RAH SEE",
    "على راسي — With pleasure / out of respect",
    "Common colloquial Arabic",
    "DECODE-029"
  ],
  [
    "arabish",
    "SHOE RYE UCK",
    "شو رأيك؟ — What do you think?",
    "Levantine Arabic",
    "DECODE-030"
  ],
  [
    "arabish",
    "HASS SUB IL MOW KIF",
    "حسب الموقف — It depends on the situation",
    "Common Arabic",
    "DECODE-031"
  ],
  [
    "arabish",
    "MAH FEE DAH EE",
    "ما في داعي — There’s no need",
    "Common colloquial Arabic",
    "DECODE-032"
  ],
  [
    "arabish",
    "SAR KHAIR",
    "صار خير — It’s all right now",
    "Levantine Arabic",
    "DECODE-033"
  ],
  [
    "arabish",
    "BUH SEA TAH",
    "بسيطة — It’s no big deal",
    "Common colloquial Arabic",
    "DECODE-034"
  ],
  [
    "arabish",
    "MISH MUSH KEY LAH",
    "مش مشكلة — Not a problem",
    "Common colloquial Arabic",
    "DECODE-035"
  ],
  [
    "arabish",
    "WAYNE BID NAH N ROOH",
    "وين بدنا نروح؟ — Where should we go?",
    "Levantine Arabic",
    "DECODE-036"
  ],
  [
    "arabish",
    "MEEN JAI MAH NAH",
    "مين جاي معنا؟ — Who’s coming with us?",
    "Levantine Arabic",
    "DECODE-037"
  ],
  [
    "arabish",
    "CUD DASH IS SAH AH",
    "قديش الساعة؟ — What time is it?",
    "Levantine Arabic",
    "DECODE-038"
  ],
  [
    "arabish",
    "TA AKH HAR NAH KTEER",
    "تأخرنا كتير — We’re very late",
    "Levantine Arabic",
    "DECODE-039"
  ],
  [
    "arabish",
    "DUCK LEE LUM MAH TOH SAL",
    "دقلي لما توصل — Call me when you arrive",
    "Levantine Arabic",
    "DECODE-040"
  ],
  [
    "arabish",
    "LAH TIN SA IL MIF TAH",
    "لا تنسى المفتاح — Don’t forget the key",
    "Common colloquial Arabic",
    "DECODE-041"
  ],
  [
    "arabish",
    "BAH ATH TILL LUCK REE SAH LEH",
    "بعثتلك رسالة — I sent you a message",
    "Levantine Arabic",
    "DECODE-042"
  ],
  [
    "arabish",
    "SHIF T SHOE SAR",
    "شفت شو صار؟ — Did you see what happened?",
    "Levantine Arabic",
    "DECODE-043"
  ],
  [
    "arabish",
    "MAH B SAD DICK",
    "ما بصدق — I can’t believe it",
    "Levantine Arabic",
    "DECODE-044"
  ],
  [
    "arabish",
    "KINT BAM ZAH",
    "كنت بمزح — I was joking",
    "Levantine Arabic",
    "DECODE-045"
  ],
  [
    "arabish",
    "LAH TAH KHUD HA SHAKH SEE",
    "لا تاخدها شخصي — Don’t take it personally",
    "Common colloquial Arabic",
    "DECODE-046"
  ],
  [
    "arabish",
    "IL MOW DOO TA WEEL",
    "الموضوع طويل — It’s a long story",
    "Common Arabic",
    "DECODE-047"
  ],
  [
    "arabish",
    "MIN IL AH KHIR",
    "من الآخر — Here’s the bottom line",
    "Common colloquial Arabic",
    "DECODE-048"
  ],
  [
    "arabish",
    "BAY NEE OOH BAY NUCK",
    "بيني وبينك — Between you and me",
    "Common Arabic",
    "DECODE-049"
  ],
  [
    "arabish",
    "IS MA NEE LIL AH KHIR",
    "اسمعني للآخر — Hear me out",
    "Levantine Arabic",
    "DECODE-050"
  ],
  [
    "arabish",
    "AH TEE NEE FUR SAH",
    "أعطيني فرصة — Give me a chance",
    "Common colloquial Arabic",
    "DECODE-051"
  ],
  [
    "arabish",
    "KHA LAS IT TA FAQ NAH",
    "خلص اتفقنا — All right, it’s a deal",
    "Levantine Arabic",
    "DECODE-052"
  ],
  [
    "arabish",
    "KULL SHEE TAM MAM",
    "كل شي تمام — Everything is fine",
    "Common colloquial Arabic",
    "DECODE-053"
  ],
  [
    "arabish",
    "IL HAMD LIL LAH AS SAH LAH MEH",
    "الحمد لله عالسلامة — Welcome back safely",
    "Common Arabic expression",
    "DECODE-054"
  ],
  [
    "arabish",
    "NAW WAR TOO NAH",
    "نورتونا — You brightened our gathering",
    "Common Arabic welcome",
    "DECODE-055"
  ],
  [
    "arabish",
    "IL BAYT BAY TUCK",
    "البيت بيتك — Make yourself at home",
    "Common Arabic expression",
    "DECODE-056"
  ],
  [
    "arabish",
    "SAH HA OOH HAH NAH",
    "صحة وهنا — Enjoy your meal",
    "Common Arabic expression",
    "DECODE-057"
  ],
  [
    "arabish",
    "SHOE BED DACK TISH RUB",
    "شو بدك تشرب؟ — What would you like to drink?",
    "Levantine Arabic",
    "DECODE-058"
  ],
  [
    "arabish",
    "IL AH WEH JAH H ZEH",
    "القهوة جاهزة — The coffee is ready",
    "Common Arabic",
    "DECODE-059"
  ],
  [
    "arabish",
    "BED DACK SHEE",
    "بدك شي؟ — Do you need anything?",
    "Levantine Arabic",
    "DECODE-060"
  ],
  [
    "arabish",
    "MAH BID DEE SHEE",
    "ما بدي شي — I don’t want anything",
    "Levantine Arabic",
    "DECODE-061"
  ],
  [
    "arabish",
    "MEEN BED DOH YIB DAH",
    "مين بده يبدأ؟ — Who wants to start?",
    "Levantine Arabic",
    "DECODE-062"
  ],
  [
    "arabish",
    "DOW REE WALL AH DOW RUCK",
    "دوري ولا دورك؟ — My turn or yours?",
    "Common colloquial Arabic",
    "DECODE-063"
  ],
  [
    "arabish",
    "IN TIB HIL WAK IT",
    "انتبه عالوقت — Watch the time",
    "Levantine Arabic",
    "DECODE-064"
  ],
  [
    "arabish",
    "AR RUB IL WAK IT YIKH LAS",
    "قرّب الوقت يخلص — Time is almost up",
    "Levantine Arabic",
    "DECODE-065"
  ],
  [
    "arabish",
    "MEEN REE BIH",
    "مين ربح؟ — Who won?",
    "Levantine Arabic",
    "DECODE-066"
  ],
  [
    "arabish",
    "TA AH DULL NAH",
    "تعادلنا — We tied",
    "Common colloquial Arabic",
    "DECODE-067"
  ],
  [
    "arabish",
    "LAH T GHA YIR IL MOW DOO",
    "لا تغيّر الموضوع — Don’t change the subject",
    "Common Arabic",
    "DECODE-068"
  ],
  [
    "arabish",
    "JAH WUB B SARA HAH",
    "جاوب بصراحة — Answer honestly",
    "Common colloquial Arabic",
    "DECODE-069"
  ],
  [
    "arabish",
    "IS SOO AL SA AB",
    "السؤال صعب — The question is difficult",
    "Common Arabic",
    "DECODE-070"
  ],
  [
    "arabish",
    "IN DEE FICK RAH AH SAN",
    "عندي فكرة أحسن — I have a better idea",
    "Common colloquial Arabic",
    "DECODE-071"
  ],
  [
    "arabish",
    "KHA LEE NAH N SAW WIT",
    "خلينا نصوّت — Let’s vote",
    "Levantine Arabic",
    "DECODE-072"
  ],
  [
    "arabish",
    "MISH MUK TAH NAY",
    "مش مقتنع — I’m not convinced (said by a man)",
    "Common colloquial Arabic",
    "DECODE-073"
  ],
  [
    "arabish",
    "MA ACK HUCK",
    "معك حق — You’re right",
    "Common Arabic",
    "DECODE-074"
  ],
  [
    "arabish",
    "YIM KIN MA ACK HUCK",
    "يمكن معك حق — Maybe you’re right",
    "Common colloquial Arabic",
    "DECODE-075"
  ],
  [
    "arabish",
    "AH NAH GHAL TAN",
    "أنا غلطان — I was wrong (said by a man)",
    "Common colloquial Arabic",
    "DECODE-076"
  ],
  [
    "arabish",
    "SOO TAH FAH HUM",
    "سوء تفاهم — A misunderstanding",
    "Common Arabic",
    "DECODE-077"
  ],
  [
    "arabish",
    "WAD DIH LEE AK TAR",
    "وضّحلي أكتر — Explain it to me more clearly",
    "Levantine Arabic",
    "DECODE-078"
  ],
  [
    "arabish",
    "SHOE AS DUCK",
    "شو قصدك؟ — What do you mean?",
    "Levantine Arabic",
    "DECODE-079"
  ],
  [
    "arabish",
    "MAH KAHN AS DEE",
    "ما كان قصدي — I didn’t mean it",
    "Common colloquial Arabic",
    "DECODE-080"
  ],
  [
    "trivia",
    "Which surah contains two occurrences of the basmalah?",
    "Surah An-Naml: once at its opening and once in Sulayman’s letter",
    "Qur’an 27:30, plus the surah’s opening basmalah",
    "TRIVIA-001"
  ],
  [
    "trivia",
    "What is the longest single ayah in the Qur’an primarily about?",
    "Documenting deferred debts and financial transactions",
    "Qur’an 2:282",
    "TRIVIA-002"
  ],
  [
    "trivia",
    "Which two prophets’ scriptures are named together in the closing verses of Surah Al-A‘la?",
    "Ibrahim and Musa",
    "Qur’an 87:18–19",
    "TRIVIA-003"
  ],
  [
    "trivia",
    "After warning that some suspicion is sinful, which two related behaviors does the same verse prohibit?",
    "Spying and backbiting",
    "Qur’an 49:12",
    "TRIVIA-004"
  ],
  [
    "trivia",
    "In Surah Al-Kahf, what did Musa and his young companion discover they had left behind before retracing their path?",
    "The fish, which had made its way into the sea",
    "Qur’an 18:60–64",
    "TRIVIA-005"
  ],
  [
    "trivia",
    "What request did the disciples of Isa make that became the title of a surah?",
    "A table spread with food sent down from heaven",
    "Qur’an 5:112–115",
    "TRIVIA-006"
  ],
  [
    "trivia",
    "According to the hadith, what three things continue benefiting a person after death?",
    "Ongoing charity, beneficial knowledge, and a righteous child who prays for them",
    "Sahih Muslim 1631",
    "TRIVIA-007"
  ],
  [
    "trivia",
    "Which two phrases are described as light on the tongue, heavy on the Scale, and beloved to the Most Merciful?",
    "SubhanAllahi al-‘Azim; SubhanAllahi wa bihamdihi",
    "Sahih al-Bukhari 6406",
    "TRIVIA-008"
  ],
  [
    "trivia",
    "A bankrupt person in the famous hadith arrives with worship but loses reward because of what?",
    "Insulting or slandering others, consuming their wealth unlawfully, shedding their blood, or beating them",
    "Sahih Muslim 2581",
    "TRIVIA-009"
  ],
  [
    "trivia",
    "What distinction does the hadith make between ghibah and buhtan?",
    "Ghibah is mentioning a true fault the person dislikes; if it is false, it is slander (buhtan)",
    "Sahih Muslim 2589",
    "TRIVIA-010"
  ],
  [
    "trivia",
    "Which surah is the only one not preceded by a written basmalah in the standard mushaf?",
    "Surah At-Tawbah (also called Bara’ah)",
    "Standard mushaf arrangement; Surah 9",
    "TRIVIA-011"
  ],
  [
    "trivia",
    "Which prophet was taught by Allah to make protective coats of armor?",
    "Dawud",
    "Qur’an 21:80",
    "TRIVIA-012"
  ],
  [
    "trivia",
    "Which bird brought Sulayman intelligence about the people of Saba?",
    "The hoopoe",
    "Qur’an 27:20–24",
    "TRIVIA-013"
  ],
  [
    "trivia",
    "Who brought the Queen of Saba’s throne before Sulayman’s glance returned to him?",
    "One who had knowledge of the Scripture",
    "Qur’an 27:38–40",
    "TRIVIA-014"
  ],
  [
    "trivia",
    "What happened immediately before Yunus was cast from the laden ship?",
    "He drew lots and was among those selected",
    "Qur’an 37:140–141",
    "TRIVIA-015"
  ],
  [
    "trivia",
    "How long does the Qur’an say the Companions of the Cave remained in their cave?",
    "Three hundred years, adding nine",
    "Qur’an 18:25",
    "TRIVIA-016"
  ],
  [
    "trivia",
    "How many keepers over the Fire are specified in Surah Al-Muddaththir?",
    "Nineteen",
    "Qur’an 74:30–31",
    "TRIVIA-017"
  ],
  [
    "trivia",
    "What did Musa strike when twelve springs burst forth for his people?",
    "A stone",
    "Qur’an 2:60",
    "TRIVIA-018"
  ],
  [
    "trivia",
    "During Talut’s river test, what small amount was permitted?",
    "A scoop taken with one hand",
    "Qur’an 2:249",
    "TRIVIA-019"
  ],
  [
    "trivia",
    "What skill of the people of Thamud is mentioned alongside Salih’s warning?",
    "Carving homes into mountains",
    "Qur’an 7:73–74",
    "TRIVIA-020"
  ],
  [
    "trivia",
    "How many birds was Ibrahim told to take in the demonstration of resurrection?",
    "Four birds",
    "Qur’an 2:260",
    "TRIVIA-021"
  ],
  [
    "trivia",
    "Which prophet asked Allah for a kingdom that would belong to no one after him?",
    "Sulayman",
    "Qur’an 38:35",
    "TRIVIA-022"
  ],
  [
    "trivia",
    "What tree was Maryam told to shake during childbirth?",
    "The trunk of a palm tree",
    "Qur’an 19:23–25",
    "TRIVIA-023"
  ],
  [
    "trivia",
    "What sign was given to Zakariyya after the announcement of Yahya?",
    "He would not speak to people for three nights despite being sound",
    "Qur’an 19:10",
    "TRIVIA-024"
  ],
  [
    "trivia",
    "What was unusual about Yahya’s name when it was announced?",
    "Allah said no one before him had been given that name",
    "Qur’an 19:7",
    "TRIVIA-025"
  ],
  [
    "trivia",
    "On what mountain did Nuh’s ark come to rest?",
    "Al-Judi",
    "Qur’an 11:44",
    "TRIVIA-026"
  ],
  [
    "trivia",
    "What did Musa’s staff visibly become before Pharaoh and his chiefs?",
    "A real serpent",
    "Qur’an 7:107",
    "TRIVIA-027"
  ],
  [
    "trivia",
    "What did Musa notice near the side of Mount Tur while travelling with his family?",
    "A fire",
    "Qur’an 28:29",
    "TRIVIA-028"
  ],
  [
    "trivia",
    "What happened to Qarun and his home after his display of wealth?",
    "The earth swallowed him and his home",
    "Qur’an 28:76–81",
    "TRIVIA-029"
  ],
  [
    "trivia",
    "Which two materials did Dhul-Qarnayn use to build the barrier?",
    "Blocks of iron and molten copper",
    "Qur’an 18:95–96",
    "TRIVIA-030"
  ],
  [
    "trivia",
    "What unusual route did the fish take when Musa and his young assistant reached the meeting point?",
    "It made its way into the sea like a tunnel",
    "Qur’an 18:60–61",
    "TRIVIA-031"
  ],
  [
    "trivia",
    "Why did the knowledgeable servant damage the boat in Surah Al-Kahf?",
    "A king ahead was seizing every serviceable boat by force",
    "Qur’an 18:71, 18:79",
    "TRIVIA-032"
  ],
  [
    "trivia",
    "For whom was the treasure beneath the repaired wall being preserved?",
    "Two orphan boys whose father had been righteous",
    "Qur’an 18:77, 18:82",
    "TRIVIA-033"
  ],
  [
    "trivia",
    "In the dispute presented to Dawud, how many ewes did one brother possess?",
    "Ninety-nine; he demanded his brother’s single ewe as well",
    "Qur’an 38:22–24",
    "TRIVIA-034"
  ],
  [
    "trivia",
    "What replaced the two gardens of Saba after they turned away?",
    "Two gardens producing bitter fruit, tamarisk, and a few lote trees",
    "Qur’an 34:15–16",
    "TRIVIA-035"
  ],
  [
    "trivia",
    "What was the ant afraid Sulayman’s army might do unknowingly?",
    "Crush the ants",
    "Qur’an 27:18",
    "TRIVIA-036"
  ],
  [
    "trivia",
    "Why did the Queen of Saba uncover her shins upon entering Sulayman’s palace?",
    "She mistook the glass floor for a body of water",
    "Qur’an 27:44",
    "TRIVIA-037"
  ],
  [
    "trivia",
    "What did Isa form from clay before it became alive by Allah’s permission?",
    "The shape of a bird",
    "Qur’an 3:49",
    "TRIVIA-038"
  ],
  [
    "trivia",
    "What does Surah Al-Jumu‘ah tell believers to leave when the Friday prayer is called?",
    "Trade",
    "Qur’an 62:9",
    "TRIVIA-039"
  ],
  [
    "trivia",
    "What purpose of fasting is stated at the end of Qur’an 2:183?",
    "That believers may attain taqwa",
    "Qur’an 2:183",
    "TRIVIA-040"
  ],
  [
    "trivia",
    "How does the Qur’an describe the timing of Hajj rather than listing the months by name?",
    "It says Hajj is during well-known months",
    "Qur’an 2:197",
    "TRIVIA-041"
  ],
  [
    "trivia",
    "What must be accounted for before the inheritance shares in Qur’an 4 are distributed?",
    "Any bequest and debt",
    "Qur’an 4:11–12",
    "TRIVIA-042"
  ],
  [
    "trivia",
    "What should a creditor do when a debtor is in genuine hardship?",
    "Grant more time; waiving it as charity is even better",
    "Qur’an 2:280",
    "TRIVIA-043"
  ],
  [
    "trivia",
    "How many witnesses does Qur’an 24:4 require from those who accuse chaste women of unlawful sexual conduct?",
    "Four witnesses",
    "Qur’an 24:4",
    "TRIVIA-044"
  ],
  [
    "trivia",
    "How should a greeting be answered according to Qur’an 4:86?",
    "With one better than it or at least equal to it",
    "Qur’an 4:86",
    "TRIVIA-045"
  ],
  [
    "trivia",
    "What must believers do when an unreliable person brings consequential news?",
    "Verify it before harming people in ignorance",
    "Qur’an 49:6",
    "TRIVIA-046"
  ],
  [
    "trivia",
    "What must hatred of a people never cause believers to abandon?",
    "Justice",
    "Qur’an 5:8",
    "TRIVIA-047"
  ],
  [
    "trivia",
    "After consultation and a firm decision, what does Qur’an 3:159 command?",
    "Place trust in Allah",
    "Qur’an 3:159",
    "TRIVIA-048"
  ],
  [
    "trivia",
    "What must people change before Allah changes their condition?",
    "What is within themselves",
    "Qur’an 13:11",
    "TRIVIA-049"
  ],
  [
    "trivia",
    "What would happen to a mountain if the Qur’an were sent down upon it?",
    "It would be humbled and split apart from awe of Allah",
    "Qur’an 59:21",
    "TRIVIA-050"
  ],
  [
    "trivia",
    "What principle opens Sahih al-Bukhari regarding the value of deeds?",
    "Deeds are judged by intentions, and each person receives according to what they intended",
    "Sahih al-Bukhari 1",
    "TRIVIA-051"
  ],
  [
    "trivia",
    "What three signs of a hypocrite are listed in the famous hadith?",
    "Lying when speaking, breaking promises, and betraying trusts",
    "Sahih al-Bukhari 33",
    "TRIVIA-052"
  ],
  [
    "trivia",
    "How many categories of people are promised Allah’s shade in the famous hadith?",
    "Seven",
    "Sahih al-Bukhari 660",
    "TRIVIA-053"
  ],
  [
    "trivia",
    "Which believer is described as better and more beloved to Allah, while good exists in both?",
    "The strong believer",
    "Sahih Muslim 2664",
    "TRIVIA-054"
  ],
  [
    "trivia",
    "What does Allah look at rather than people’s bodies and wealth?",
    "Their hearts and deeds",
    "Sahih Muslim 2564c",
    "TRIVIA-055"
  ],
  [
    "trivia",
    "To whom is sincere counsel owed in the hadith “Religion is sincere counsel”?",
    "Allah, His Book, His Messenger, Muslim leaders, and the Muslim public",
    "Sahih Muslim 55a",
    "TRIVIA-056"
  ],
  [
    "trivia",
    "What is described as half of faith in Sahih Muslim?",
    "Purification",
    "Sahih Muslim 223",
    "TRIVIA-057"
  ],
  [
    "trivia",
    "What should not happen to a believer from the same hole twice?",
    "They should not be stung from it twice",
    "Sahih al-Bukhari 6133",
    "TRIVIA-058"
  ],
  [
    "trivia",
    "What two blessings does the hadith say many people waste?",
    "Health and free time",
    "Sahih al-Bukhari 6412",
    "TRIVIA-059"
  ],
  [
    "trivia",
    "What does the hadith pair with belief in Allah and the Last Day regarding speech?",
    "Speak good or remain silent",
    "Sahih al-Bukhari 6018; Sahih Muslim 47a",
    "TRIVIA-060"
  ],
  [
    "identity",
    "Wisdom—not prophethood—is the gift explicitly named for me. My advice moves from tawhid to prayer, patience, humility, and even lowering the voice. Who am I?",
    "Luqman",
    "Qur’an 31:12–19",
    "RIDDLE-001"
  ],
  [
    "identity",
    "I learned names no angel had been taught. Clay was my beginning, a garden my first home, and earth the place of my trial. Who am I?",
    "Adam",
    "Qur’an 2:30–38",
    "RIDDLE-002"
  ],
  [
    "identity",
    "My Qur’anic biography is only two verses long: I am called truthful and a prophet, then raised to a high station. Who am I?",
    "Idris",
    "Qur’an 19:56–57",
    "RIDDLE-003"
  ],
  [
    "identity",
    "Planks and nails carried my trust. A mountain could not save one who rejected the call, and the vessel finally rested on Al-Judi. Who am I?",
    "Nuh",
    "Qur’an 11:36–44; 54:13",
    "RIDDLE-004"
  ],
  [
    "identity",
    "I warned a people proud of their strength. Their towers did not shield them when a furious wind continued for seven nights and eight days. Who am I?",
    "Hud",
    "Qur’an 7:65–72; 69:6–8",
    "RIDDLE-005"
  ],
  [
    "identity",
    "My people carved homes into mountains. Their test walked on four legs, drank on an appointed day, and was harmed despite my warning. Who am I?",
    "Salih",
    "Qur’an 7:73–77; 26:141–159",
    "RIDDLE-006"
  ],
  [
    "identity",
    "I asked a silent line of statues why they would not eat, then faced a fire whose command became coolness and safety. Who am I?",
    "Ibrahim",
    "Qur’an 37:91–96; 21:51–70",
    "RIDDLE-007"
  ],
  [
    "identity",
    "Angelic guests reached my home before I knew who they were. I offered protection while my people rushed toward the house. Who am I?",
    "Lut",
    "Qur’an 11:77–83",
    "RIDDLE-008"
  ],
  [
    "identity",
    "I helped raise foundations older than my nation. Father and son worked together, asking that the deed be accepted. Who am I?",
    "Ismail",
    "Qur’an 2:125–129",
    "RIDDLE-009"
  ],
  [
    "identity",
    "My birth was announced to a laughing mother; in the same message came news of my son Yaqub. Who am I?",
    "Ishaq",
    "Qur’an 11:69–73",
    "RIDDLE-010"
  ],
  [
    "identity",
    "Grief turned my eyes white, but not my hope. The scent of a shirt reached me before the caravan did. Who am I?",
    "Yaqub",
    "Qur’an 12:84–96",
    "RIDDLE-011"
  ],
  [
    "identity",
    "One shirt was stained but not torn; another was torn from behind; a third restored sight. Whose story ties all three together?",
    "Yusuf",
    "Qur’an 12:18, 12:25–28, 12:93–96",
    "RIDDLE-012"
  ],
  [
    "identity",
    "The marketplace was my pulpit: I demanded full measure and weight while warning against corruption in the land. Who am I?",
    "Shu‘ayb",
    "Qur’an 11:84–88",
    "RIDDLE-013"
  ],
  [
    "identity",
    "After loss and illness, my remedy began with a command to strike the ground. Cool water followed, and so did restoration. Who am I?",
    "Ayyub",
    "Qur’an 38:41–44",
    "RIDDLE-014"
  ],
  [
    "identity",
    "A ship, a lot, and a great fish mark my flight; layers of darkness mark my prayer. Who am I?",
    "Yunus",
    "Qur’an 21:87–88; 37:139–148",
    "RIDDLE-015"
  ],
  [
    "identity",
    "Old age had reached me and my wife was barren, yet my private prayer was answered. Silence for three nights became my sign. Who am I?",
    "Zakariyya",
    "Qur’an 19:2–11",
    "RIDDLE-016"
  ],
  [
    "identity",
    "Before I was born, my name was declared unique. As a child I received wisdom and was commanded to hold firmly to the Scripture. Who am I?",
    "Yahya",
    "Qur’an 19:7–15",
    "RIDDLE-017"
  ],
  [
    "identity",
    "Solitude, an angelic message, a palm trunk, and a newborn who spoke in my defense—whose story is this?",
    "Maryam",
    "Qur’an 19:16–33",
    "RIDDLE-018"
  ],
  [
    "identity",
    "I spoke before ordinary speech, formed a bird from clay by Allah’s permission, and confirmed the Torah before me. Who am I?",
    "Isa",
    "Qur’an 3:45–51; 5:110",
    "RIDDLE-019"
  ],
  [
    "identity",
    "A river carried me as an infant; a staff led me as a prophet; the sea opened before me as a leader. Who am I?",
    "Musa",
    "Qur’an 28:7–13; 26:60–68",
    "RIDDLE-020"
  ],
  [
    "identity",
    "My brother called me more eloquent and asked Allah to make me his supporting minister. Who am I?",
    "Harun",
    "Qur’an 20:29–36; 28:34–35",
    "RIDDLE-021"
  ],
  [
    "identity",
    "I defeated a giant before receiving kingship. Mountains and birds joined my praise, and iron was softened for my craft. Who am I?",
    "Dawud",
    "Qur’an 2:251; 21:79–80; 34:10",
    "RIDDLE-022"
  ],
  [
    "identity",
    "I understood the speech of birds, smiled at an ant, and asked for a kingdom unlike any after me. Who am I?",
    "Sulayman",
    "Qur’an 27:15–19; 38:35",
    "RIDDLE-023"
  ],
  [
    "identity",
    "I challenged worshippers of Ba‘l: “Do you call upon a crafted god and leave the Best of creators?” Who am I?",
    "Ilyas",
    "Qur’an 37:123–132",
    "RIDDLE-024"
  ],
  [
    "identity",
    "I am named only briefly, once among prophets favored above the worlds and once among the outstanding. Who am I?",
    "Al-Yasa",
    "Qur’an 6:86; 38:48",
    "RIDDLE-025"
  ],
  [
    "identity",
    "I appear beside Ismail and Idris among the patient, then beside Al-Yasa among the outstanding. Who am I?",
    "Dhul-Kifl",
    "Qur’an 21:85–86; 38:48",
    "RIDDLE-026"
  ],
  [
    "identity",
    "My journeys reached two horizons. Between two mountain walls I used iron and molten copper to restrain Ya’juj and Ma’juj. Who am I?",
    "Dhul-Qarnayn",
    "Qur’an 18:83–98",
    "RIDDLE-027"
  ],
  [
    "identity",
    "The keys to my treasures burdened strong men. I claimed knowledge earned my wealth; then earth swallowed both house and owner. Who am I?",
    "Qarun",
    "Qur’an 28:76–82",
    "RIDDLE-028"
  ],
  [
    "identity",
    "No royal bloodline is given for me, yet I was appointed king. A river reduced my army before a smaller force met Jalut. Who am I?",
    "Talut",
    "Qur’an 2:246–251",
    "RIDDLE-029"
  ],
  [
    "identity",
    "My army faced a much smaller force whose soldiers had just been tested at a river. A future prophet-king killed me, and my defeat began his rise. Who am I?",
    "Jalut",
    "Qur’an 2:249–251",
    "RIDDLE-030"
  ],
  [
    "identity",
    "I shaped a calf from ornaments while Musa was away, then claimed insight others did not see. My punishment included saying, “No contact.” Who am I?",
    "As-Samiri",
    "Qur’an 20:85–97",
    "RIDDLE-031"
  ],
  [
    "identity",
    "A tyrant ordered me to bake clay and raise a tower. Elsewhere my name is grouped with Qarun among the enemies of Musa. Who am I?",
    "Haman",
    "Qur’an 28:6, 28:38; 40:36–37",
    "RIDDLE-032"
  ],
  [
    "identity",
    "I gathered people and claimed, “I am your lord, most high.” At the sea I declared belief only when drowning overtook me. Who am I?",
    "Pharaoh",
    "Qur’an 79:23–24; 10:90–92",
    "RIDDLE-033"
  ],
  [
    "identity",
    "A bird reported my throne before I received a letter beginning with the name of Allah. I recognized truth after mistaking glass for water. Who am I?",
    "The Queen of Saba",
    "Qur’an 27:22–44",
    "RIDDLE-034"
  ],
  [
    "identity",
    "I brought revelation to Muhammad’s heart by Allah’s permission; hostility toward me is answered by name in the Qur’an. Who am I?",
    "Jibril",
    "Qur’an 2:97–98",
    "RIDDLE-035"
  ],
  [
    "identity",
    "I am named once in the Qur’an, beside Jibril, in a warning about taking Allah’s angels as enemies. Who am I?",
    "Mikail",
    "Qur’an 2:98",
    "RIDDLE-036"
  ],
  [
    "identity",
    "People of the Fire call my name and ask that their Lord finish them, but I answer that they will remain. Who am I?",
    "Malik, the keeper of Hell",
    "Qur’an 43:74–77",
    "RIDDLE-037"
  ],
  [
    "identity",
    "We are two angels named together in Babylon. People learned from our trial only after hearing our warning not to disbelieve. Who are we?",
    "Harut and Marut",
    "Qur’an 2:102",
    "RIDDLE-038"
  ],
  [
    "identity",
    "I was absent from a royal gathering, returned from Saba with certain news, and carried a sealed letter. What bird am I?",
    "The hoopoe",
    "Qur’an 27:20–31",
    "RIDDLE-039"
  ],
  [
    "identity",
    "I am the smallest speaker in a royal march. My warning sent my colony indoors and made a prophet smile. What am I?",
    "The ant in Sulayman’s story",
    "Qur’an 27:18–19",
    "RIDDLE-040"
  ],
  [
    "identity",
    "My shade, age, and labor history became a dispute. Only after I was slaughtered did part of me reveal a murderer. What am I?",
    "The cow of Bani Israel",
    "Qur’an 2:67–73",
    "RIDDLE-041"
  ],
  [
    "identity",
    "In one hand I moved like a serpent; at the sea I became a means of passage; at a rock I opened twelve springs. What am I?",
    "The staff of Musa",
    "Qur’an 7:107; 26:63; 2:60",
    "RIDDLE-042"
  ],
  [
    "identity",
    "I arrived as proof of a king’s appointment. Within me were tranquility and relics left by the families of Musa and Harun. What am I?",
    "The Tabut—the Ark mentioned as Talut’s sign",
    "Qur’an 2:248",
    "RIDDLE-043"
  ],
  [
    "identity",
    "I was built before rain was visible, mocked before water rose, and carried pairs through waves like mountains. What am I?",
    "The ark of Nuh",
    "Qur’an 11:36–44",
    "RIDDLE-044"
  ],
  [
    "identity",
    "I had an appointed drink and my people had theirs. I was a sign, not livestock to be harmed, yet they hamstrung me. What am I?",
    "The she-camel of Salih",
    "Qur’an 7:73–77; 26:155–157",
    "RIDDLE-045"
  ],
  [
    "identity",
    "I did not sleep inside the cave, yet the Qur’an places me at its entrance with forelegs stretched out. What am I?",
    "The dog of the Companions of the Cave",
    "Qur’an 18:18",
    "RIDDLE-046"
  ],
  [
    "identity",
    "A murder left a body and no burial lesson. I scratched the ground, teaching a son of Adam what to do. What am I?",
    "The crow sent after the first murder",
    "Qur’an 5:27–31",
    "RIDDLE-047"
  ],
  [
    "identity",
    "A prophet entered me after lots were drawn. A prayer from darkness preceded my casting onto the open shore. What am I?",
    "The great fish that swallowed Yunus",
    "Qur’an 21:87–88; 37:139–146",
    "RIDDLE-048"
  ],
  [
    "identity",
    "I build the frailest home, yet I anchor a parable about seeking protectors besides Allah. What am I?",
    "The spider’s house",
    "Qur’an 29:41",
    "RIDDLE-049"
  ],
  [
    "identity",
    "I am an ancient name for the location of the first House established for humanity, described as blessed and a guidance. What am I?",
    "Bakkah",
    "Qur’an 3:96",
    "RIDDLE-050"
  ],
  [
    "mizan",
    "A private mistake becomes public. Correcting the false public narrative may expose a person’s real private sin. What information is actually necessary to disclose?",
    "Distinguish correcting harm from satisfying curiosity. Propose the least exposing response that restores the truth.",
    "Principles of verification and justice; see Qur’an 49:6 and 5:8",
    "DILEMMA-001"
  ],
  [
    "mizan",
    "A speaker quotes an authentic hadith correctly, then removes its context to shame a particular group. Is citing a true text enough?",
    "Evaluate the source, interpretation, purpose, likely harm, and whether the application is sound—not merely whether the quotation exists.",
    "Method question; qualified scholarship may be required",
    "DILEMMA-002"
  ],
  [
    "mizan",
    "Your loyalty to a Muslim friend makes you minimize harm they caused. Another person’s dislike makes them exaggerate it.",
    "Build a response that avoids both defensive loyalty and hostile injustice. What facts must be separated from interpretation?",
    "See Qur’an 4:135 and 5:8",
    "DILEMMA-003"
  ],
  [
    "mizan",
    "You believe someone is manipulating others and could publicly expose them, but your evidence includes assumptions and private messages obtained indirectly.",
    "Identify what must be verified, whose rights are involved, and when the matter should go to an appropriate authority instead of an audience.",
    "See Qur’an 49:6 and 49:12",
    "DILEMMA-004"
  ],
  [
    "mizan",
    "A family tradition is not religiously required, but rejecting it harshly would deeply wound your parents. Complying would not itself be sinful.",
    "How do you preserve principle without turning every preference into a religious confrontation? Give a gracious boundary or compromise.",
    "See Qur’an 17:23–24; no single ruling implied",
    "DILEMMA-005"
  ],
  [
    "mizan",
    "An older relative gives harmful advice publicly. Correcting them immediately may protect others but humiliate them. Waiting may allow the advice to spread.",
    "Choose what must be corrected now, what can wait, and language that protects truth without using truth as a weapon.",
    "Principles of wisdom and gracious speech; see Qur’an 16:125",
    "DILEMMA-006"
  ],
  [
    "mizan",
    "A close friend privately admits serious wrongdoing that may still be harming someone else. They demand absolute secrecy because they trusted you.",
    "Separate confidentiality from enabling harm. What safety, restitution, or qualified guidance is now necessary?",
    "Rights and safety may require qualified guidance",
    "DILEMMA-007"
  ],
  [
    "mizan",
    "Someone asks whether a potential business partner is trustworthy. You know relevant negative facts, but sharing everything would become gossip.",
    "State only verified, decision-relevant information. Distinguish sincere warning from character assassination.",
    "See Qur’an 49:12; context may require scholarship",
    "DILEMMA-008"
  ],
  [
    "mizan",
    "A mandatory work meeting repeatedly overlaps with prayer time. Leaving abruptly risks your job; saying nothing makes the conflict permanent.",
    "Design a response that combines planning, respectful accommodation, and responsibility rather than panic or silent resentment.",
    "Practical dilemma; local law and scholarship may matter",
    "DILEMMA-009"
  ],
  [
    "mizan",
    "A charity campaign will raise more money if recipients’ most painful moments are filmed. Consent is technically obtained, but the power imbalance is obvious.",
    "Weigh dignity, meaningful consent, fundraising benefit, and less-exposing alternatives.",
    "Human dignity and charity ethics",
    "DILEMMA-010"
  ],
  [
    "mizan",
    "Your public advocacy is effective, but you notice that anger, applause, and personal visibility increasingly motivate you.",
    "How can you protect the beneficial work while correcting intention, tone, and accountability?",
    "Reflection on intention; see Sahih al-Bukhari 1",
    "DILEMMA-011"
  ],
  [
    "mizan",
    "Your spouse requests a boundary with extended family. Your parents interpret the boundary as rejection and demand loyalty.",
    "Identify actual duties, negotiable expectations, and a way to refuse triangulation without abandoning kindness.",
    "Family rights require context and qualified counsel",
    "DILEMMA-012"
  ],
  [
    "mizan",
    "A generous friend keeps lending money to someone who repeatedly avoids repayment and manipulates their sympathy.",
    "When does generosity become enabling? Propose compassion with documentation, limits, and accountability.",
    "See Qur’an 2:282; individual circumstances matter",
    "DILEMMA-013"
  ],
  [
    "mizan",
    "A product is technically permissible, but its advertising deliberately creates insecurity and pressures vulnerable buyers.",
    "Assess more than the product label: examine deception, harm, consent, and the ethics of the sales method.",
    "Business-ethics discussion; qualified review may be needed",
    "DILEMMA-014"
  ],
  [
    "mizan",
    "A shocking clip is spreading rapidly. Waiting to verify it may feel like silence in the face of injustice; sharing it may amplify a lie.",
    "What can you responsibly say before verification, and what evidence would justify stronger action?",
    "Qur’an 49:6",
    "DILEMMA-015"
  ],
  [
    "mizan",
    "Friends begin backbiting someone who genuinely hurt the group. Stopping them feels like defending the offender.",
    "Interrupt the prohibited behavior without erasing the harm. What healthier process could replace the conversation?",
    "Qur’an 49:12; Sahih Muslim 2589",
    "DILEMMA-016"
  ],
  [
    "mizan",
    "Someone says relying on Allah means they do not need preparation, professional advice, or contingency plans.",
    "Explain how trust in Allah can coexist with responsible means, effort, and acceptance of the outcome.",
    "See Qur’an 3:159",
    "DILEMMA-017"
  ],
  [
    "mizan",
    "A wedding custom is permissible but financially extravagant. Refusing it may trigger family conflict and social embarrassment.",
    "Separate generosity from performance. What budget, boundary, or alternative preserves joy without avoidable debt?",
    "Financial and family dilemma; no single ruling implied",
    "DILEMMA-018"
  ],
  [
    "mizan",
    "You volunteered for a good cause with mixed motives. Part of you wants reward from Allah; another part wants belonging and recognition.",
    "Must mixed motives end the good work, or can intention be repaired during it? Give concrete safeguards.",
    "Intention discussion; see Sahih al-Bukhari 1",
    "DILEMMA-019"
  ],
  [
    "mizan",
    "You have forgiven someone internally, but rebuilding closeness would expose you to the same pattern of harm. They say forgiveness requires full access.",
    "Distinguish releasing vengeance, restoring rights, reconciliation, and renewed trust.",
    "Personal-safety and character discussion",
    "DILEMMA-020"
  ],
  [
    "mizan",
    "A person offers an apology only if you promise never to mention the harm again, even when disclosure may protect others.",
    "What would make the condition reasonable, manipulative, or unsafe? Identify whose rights remain involved.",
    "Context-sensitive rights dilemma",
    "DILEMMA-021"
  ],
  [
    "mizan",
    "A respected community leader is deciding a matter that benefits their relative. They insist their intentions are pure.",
    "What process protects everyone even if the leader is sincere? Consider disclosure, recusal, and independent review.",
    "Justice and conflict-of-interest discussion",
    "DILEMMA-022"
  ],
  [
    "mizan",
    "You receive harsh but potentially useful advice from an anonymous account. You cannot assess the person’s motives or knowledge.",
    "How much should the messenger’s identity matter when evaluating the claim? Separate evidence from tone.",
    "Verification and self-accountability",
    "DILEMMA-023"
  ],
  [
    "mizan",
    "Private messages exposing misconduct were leaked. The leak itself was wrong, but the messages may reveal real ongoing harm.",
    "Avoid the false choice that only one wrong can matter. What must be verified, protected, and handled by proper authorities?",
    "Qur’an 49:6, 49:12; legal advice may be needed",
    "DILEMMA-024"
  ],
  [
    "mizan",
    "A short clip of a scholar appears to support a harsh conclusion, but the full lecture and question are unavailable.",
    "What should you verify before quoting, condemning, or applying the clip to another person?",
    "Context and qualified scholarship required",
    "DILEMMA-025"
  ],
  [
    "mizan",
    "A boycott campaign names a company using evidence that is emotionally powerful but incomplete. Participation may help a cause or unjustly harm workers.",
    "Set an evidence threshold and decide what uncertainty should change about your language and action.",
    "Collective-action dilemma; verify current facts",
    "DILEMMA-026"
  ],
  [
    "mizan",
    "A colleague makes space for your religious practice but expects you to cover an unfair share of work in return.",
    "How do you express gratitude without accepting an exploitative trade? Propose a fair arrangement.",
    "Workplace ethics; local policies may apply",
    "DILEMMA-027"
  ],
  [
    "mizan",
    "A financially irresponsible sibling asks whether they can receive your zakah. Giving may help urgently or sustain the pattern.",
    "Identify the separate questions: eligibility, immediate need, method of support, and whether expert guidance is required.",
    "Zakah ruling requires qualified scholarship",
    "DILEMMA-028"
  ],
  [
    "mizan",
    "Someone asks you for a religious ruling because you are “the practicing one” in the group. You know a little but are not qualified.",
    "How can you be helpful without guessing, performing certainty, or abandoning them with no next step?",
    "See Qur’an 16:43; refer questions to qualified people",
    "DILEMMA-029"
  ],
  [
    "mizan",
    "A person’s public sin is already widely known. Sharing another humiliating detail would make the warning more persuasive.",
    "Does public knowledge remove all privacy? Use the least information necessary to prevent specific harm.",
    "Dignity, verification, and proportionality",
    "DILEMMA-030"
  ],
  [
    "mizan",
    "A survivor is pressured to forgive publicly so the community can “move on,” while accountability remains incomplete.",
    "Center safety and rights. Distinguish spiritual encouragement from coercion and image management.",
    "Trauma-sensitive dilemma; professional support may be needed",
    "DILEMMA-031"
  ],
  [
    "mizan",
    "Everyone agrees a communal need matters, but each person assumes someone else will handle it. You are already overcommitted.",
    "What is your fair share? Consider capacity, coordination, and the cost of heroic promises you cannot sustain.",
    "Collective responsibility discussion",
    "DILEMMA-032"
  ],
  [
    "mizan",
    "A friend is clearly wrong in a dispute, but the opposing person speaks with contempt and exaggerates the facts.",
    "Defend your friend from injustice without defending their wrongdoing. What would principled loyalty sound like?",
    "Qur’an 4:135 and 5:8",
    "DILEMMA-033"
  ],
  [
    "mizan",
    "A supplier sends an expensive personal gift just before you choose between competing bids. No explicit favor is requested.",
    "Assess timing, influence, transparency, policy, and whether accepting would compromise trust.",
    "Potential conflict of interest; legal rules may apply",
    "DILEMMA-034"
  ],
  [
    "mizan",
    "An influencer’s religious reminders help people, but urgency and guilt are used to sell expensive products attached to every post.",
    "Evaluate benefit and exploitation separately. What disclosure, pricing, or boundaries would make the model more ethical?",
    "Commerce, sincerity, and influence discussion",
    "DILEMMA-035"
  ],
  [
    "reflection",
    "Which belief do you affirm intellectually but struggle to live as though it is true?",
    "",
    "Private reflection; passing is always allowed",
    "SURFACE-001"
  ],
  [
    "reflection",
    "What situation exposes the widest gap between what you believe and how you live?",
    "",
    "Private reflection; passing is always allowed",
    "SURFACE-002"
  ],
  [
    "reflection",
    "When does “protecting your peace” become avoidance of an obligation, repair, or necessary discomfort?",
    "",
    "Reflection; context may require scholarship",
    "SURFACE-003"
  ],
  [
    "reflection",
    "How do you distinguish a healthy boundary from an escape from necessary discomfort?",
    "",
    "Reflection; context may require scholarship",
    "SURFACE-004"
  ],
  [
    "reflection",
    "Which is more dangerous for you personally: being misunderstood or becoming insincere while trying to be understood?",
    "",
    "Reflection on intention",
    "SURFACE-005"
  ],
  [
    "reflection",
    "How do you protect sincerity without making every misunderstanding your responsibility?",
    "",
    "Reflection on intention",
    "SURFACE-006"
  ],
  [
    "reflection",
    "What criticism do you reject because it is false—and what smaller truth might still be hidden inside it?",
    "",
    "Reflection",
    "SURFACE-007"
  ],
  [
    "reflection",
    "How can you separate unfair criticism from any useful truth hidden inside it?",
    "",
    "Reflection",
    "SURFACE-008"
  ],
  [
    "reflection",
    "What religious habit could remain outwardly impressive even after its inner purpose has weakened?",
    "",
    "Reflection on sincerity and renewal",
    "SURFACE-009"
  ],
  [
    "reflection",
    "How can you notice when a good deed has lost meaning without abandoning it?",
    "",
    "Reflection on sincerity and renewal",
    "SURFACE-010"
  ],
  [
    "reflection",
    "Which act of worship changes most when nobody knows you performed it?",
    "",
    "Private reflection on sincerity",
    "SURFACE-011"
  ],
  [
    "reflection",
    "What does private worship reveal about your need to be noticed?",
    "",
    "Private reflection on sincerity",
    "SURFACE-012"
  ],
  [
    "reflection",
    "When does envy disguise itself as “honest criticism” in your inner dialogue?",
    "",
    "Reflection on envy and fairness",
    "SURFACE-013"
  ],
  [
    "reflection",
    "What evidence helps you distinguish principled concern from envy of someone else’s success?",
    "",
    "Reflection on envy and fairness",
    "SURFACE-014"
  ],
  [
    "reflection",
    "Have you ever apologized mainly to stop feeling like the bad person rather than to repair what happened?",
    "",
    "Reflection on accountability",
    "SURFACE-015"
  ],
  [
    "reflection",
    "What would an apology centered on the harmed person require from you?",
    "",
    "Reflection on accountability",
    "SURFACE-016"
  ],
  [
    "reflection",
    "Which situations make control feel safer to you than tawakkul?",
    "",
    "Reflection on effort and trust",
    "SURFACE-017"
  ],
  [
    "reflection",
    "Which outcomes are you still trying to control after taking every responsible action available to you?",
    "",
    "Reflection on effort and trust",
    "SURFACE-018"
  ],
  [
    "reflection",
    "Which boundary protects something valuable, and which boundary mainly protects your ego from discomfort?",
    "",
    "Reflection on boundaries",
    "SURFACE-019"
  ],
  [
    "reflection",
    "How can you judge whether a boundary is proportionate and consistent with your obligations?",
    "",
    "Reflection on boundaries",
    "SURFACE-020"
  ],
  [
    "reflection",
    "Whose praise changes your energy for good deeds the most?",
    "",
    "Reflection on approval",
    "SURFACE-021"
  ],
  [
    "reflection",
    "What happens to your motivation for good deeds when the person whose praise matters most does not notice?",
    "",
    "Reflection on approval",
    "SURFACE-022"
  ],
  [
    "reflection",
    "Have you ever missed the closeness to Allah you felt during a hardship after the hardship ended?",
    "",
    "Reflection on spiritual consistency",
    "SURFACE-023"
  ],
  [
    "reflection",
    "What practice could preserve a lesson learned through hardship without romanticizing the pain?",
    "",
    "Reflection on spiritual consistency",
    "SURFACE-024"
  ],
  [
    "reflection",
    "Toward whom is your compassion most selective?",
    "",
    "Reflection on mercy and bias",
    "SURFACE-025"
  ],
  [
    "reflection",
    "What story makes another person’s pain feel less deserving of your compassion?",
    "",
    "Reflection on mercy and bias",
    "SURFACE-026"
  ],
  [
    "reflection",
    "What has a delayed du‘a exposed about what you believe Allah owes you?",
    "",
    "Reflection on supplication",
    "SURFACE-027"
  ],
  [
    "reflection",
    "How can hope, grief, and good expectation of Allah coexist without pretending disappointment is absent?",
    "",
    "Reflection on supplication",
    "SURFACE-028"
  ],
  [
    "reflection",
    "When does humility become self-erasure rather than honest modesty?",
    "",
    "Reflection on humility",
    "SURFACE-029"
  ],
  [
    "reflection",
    "How can you acknowledge your strengths without turning them into superiority?",
    "",
    "Reflection on humility",
    "SURFACE-030"
  ],
  [
    "reflection",
    "Which anger do you label “righteous” because that label protects it from examination?",
    "",
    "Reflection on anger",
    "SURFACE-031"
  ],
  [
    "reflection",
    "How much of your anger is truly about principle, and how much is personal hurt or pride?",
    "",
    "Reflection on anger",
    "SURFACE-032"
  ],
  [
    "reflection",
    "Which family or cultural expectation has become entangled with your religious identity?",
    "",
    "Reflection on faith and culture",
    "SURFACE-033"
  ],
  [
    "reflection",
    "What remains of a family or cultural expectation after you separate revelation, loyalty, culture, and fear of judgment?",
    "",
    "Reflection on faith and culture",
    "SURFACE-034"
  ],
  [
    "reflection",
    "What belief would you still practice if it brought no social belonging, image, or advantage?",
    "",
    "Reflection on conviction",
    "SURFACE-035"
  ],
  [
    "reflection",
    "What makes a belief durable when belonging, image, and other external rewards disappear?",
    "",
    "Reflection on conviction",
    "SURFACE-036"
  ],
  [
    "reflection",
    "Which subject do you keep studying partly to delay acting on what you already know?",
    "",
    "Reflection on knowledge and action",
    "SURFACE-037"
  ],
  [
    "reflection",
    "What small action would turn something you already know into a responsibility you actually live?",
    "",
    "Reflection on knowledge and action",
    "SURFACE-038"
  ],
  [
    "reflection",
    "When does contentment become an excuse not to improve a changeable situation?",
    "",
    "Reflection on contentment and action",
    "SURFACE-039"
  ],
  [
    "reflection",
    "How do you distinguish accepting Allah’s decree from surrendering your agency in a changeable situation?",
    "",
    "Reflection on contentment and action",
    "SURFACE-040"
  ],
  [
    "reflection",
    "Can gratitude and grief be present at the same time in your life?",
    "",
    "Reflection on emotional honesty",
    "SURFACE-041"
  ],
  [
    "reflection",
    "What is genuinely good in your life that you can name without using it to silence what hurts?",
    "",
    "Reflection on emotional honesty",
    "SURFACE-042"
  ],
  [
    "reflection",
    "Which private wrong have you made easier to repeat by giving it a softer name?",
    "",
    "Reflection on repentance",
    "SURFACE-043"
  ],
  [
    "reflection",
    "Can you name a private wrong accurately without collapsing into despair or self-hatred?",
    "",
    "Reflection on repentance",
    "SURFACE-044"
  ],
  [
    "reflection",
    "What part of your identity is threatened by admitting you need to repent again?",
    "",
    "Reflection on tawbah",
    "SURFACE-045"
  ],
  [
    "reflection",
    "How can you keep returning to Allah after repeating a sin without normalizing the sin?",
    "",
    "Reflection on tawbah",
    "SURFACE-046"
  ],
  [
    "reflection",
    "Have you confused forgiving someone with denying the seriousness of what happened?",
    "",
    "Reflection on forgiveness",
    "SURFACE-047"
  ],
  [
    "reflection",
    "What would forgiveness look like if truth, boundaries, and consequences remained intact?",
    "",
    "Reflection on forgiveness",
    "SURFACE-048"
  ],
  [
    "reflection",
    "How much of your self-worth is tied to productivity, usefulness, or being needed?",
    "",
    "Reflection on worth and service",
    "SURFACE-049"
  ],
  [
    "reflection",
    "What remains valuable about you when your productivity and usefulness are limited?",
    "",
    "Reflection on worth and service",
    "SURFACE-050"
  ],
  [
    "reflection",
    "Which religious aesthetic or lifestyle signal do you instinctively mistake for stronger faith?",
    "",
    "Reflection on perception",
    "SURFACE-051"
  ],
  [
    "reflection",
    "What evidence of character matters more than religious aesthetics or lifestyle signals?",
    "",
    "Reflection on perception",
    "SURFACE-052"
  ],
  [
    "reflection",
    "Do you help people in ways that quietly make them dependent on you?",
    "",
    "Reflection on service and ego",
    "SURFACE-053"
  ],
  [
    "reflection",
    "How can you support someone’s dignity and growth without making yourself central to their life?",
    "",
    "Reflection on service and ego",
    "SURFACE-054"
  ],
  [
    "reflection",
    "Which difficult person exposes a trait in you that easier relationships never test?",
    "",
    "Reflection on character",
    "SURFACE-055"
  ],
  [
    "reflection",
    "What lesson is a difficult relationship exposing in you without excusing the other person’s harmful behavior?",
    "",
    "Reflection on character",
    "SURFACE-056"
  ],
  [
    "reflection",
    "What advice do you give others that you resist applying to yourself?",
    "",
    "Reflection on consistency",
    "SURFACE-057"
  ],
  [
    "reflection",
    "What fear or cost appears when advice you give easily to others becomes personal?",
    "",
    "Reflection on consistency",
    "SURFACE-058"
  ],
  [
    "reflection",
    "Which standard protects you from an unhealthy relationship, and which standard protects you from vulnerability itself?",
    "",
    "Reflection on relationships",
    "SURFACE-059"
  ],
  [
    "reflection",
    "How do you distinguish a standard that protects you from harm from one that protects you from vulnerability?",
    "",
    "Reflection on relationships",
    "SURFACE-060"
  ],
  [
    "reflection",
    "Where do you perform certainty because admitting “I don’t know” feels unsafe?",
    "",
    "Reflection on intellectual humility",
    "SURFACE-061"
  ],
  [
    "reflection",
    "What would responsible uncertainty sound like when saying “I don’t know” feels unsafe?",
    "",
    "Reflection on intellectual humility",
    "SURFACE-062"
  ],
  [
    "reflection",
    "What do you hope people remember about how they felt around you?",
    "",
    "Reflection on character and legacy",
    "SURFACE-063"
  ],
  [
    "reflection",
    "Which current habit shapes how people feel around you—for better or worse?",
    "",
    "Reflection on character and legacy",
    "SURFACE-064"
  ],
  [
    "reflection",
    "If your public achievements disappeared, what private legacy would you still want to leave?",
    "",
    "Reflection on lasting impact",
    "SURFACE-065"
  ],
  [
    "reflection",
    "Which relationship, habit, or contribution could carry the private legacy you want to leave?",
    "",
    "Reflection on lasting impact",
    "SURFACE-066"
  ],
  [
    "reflection",
    "At what moment in salah does your attention most often leave?",
    "",
    "Reflection on khushu‘",
    "SURFACE-067"
  ],
  [
    "reflection",
    "What usually pulls your attention away in salah, and what small preparation could help?",
    "",
    "Reflection on khushu‘",
    "SURFACE-068"
  ],
  [
    "reflection",
    "Which Qur’anic teaching do you find emotionally harder to accept than intellectually difficult to understand?",
    "",
    "Private reflection; qualified guidance may help",
    "SURFACE-069"
  ],
  [
    "reflection",
    "What fear, wound, or attachment might be shaping your emotional resistance to a Qur’anic teaching?",
    "",
    "Private reflection; qualified guidance may help",
    "SURFACE-070"
  ],
  [
    "ayah",
    "إِيَّاكَ نَعۡبُدُ …",
    "Iyyāka naʿbudu…",
    "You alone we worship…",
    "وَإِيَّاكَ نَسۡتَعِينُ",
    "wa iyyāka nastaʿīn",
    "and You alone we ask for help.",
    "Qur’an 1:5",
    "AYAH-001"
  ],
  [
    "ayah",
    "ٱهۡدِنَا …",
    "Ihdinā…",
    "Guide us…",
    "ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ",
    "aṣ-ṣirāṭ al-mustaqīm",
    "to the straight path.",
    "Qur’an 1:6",
    "AYAH-002"
  ],
  [
    "ayah",
    "فَٱذۡكُرُونِيٓ …",
    "Fadhkurūnī…",
    "So remember Me…",
    "أَذۡكُرۡكُمۡ",
    "adhkurkum",
    "and I will remember you.",
    "Qur’an 2:152",
    "AYAH-003"
  ],
  [
    "ayah",
    "ٱسۡتَعِينُواْ بِٱلصَّبۡرِ وَٱلصَّلَوٰةِۚ …",
    "Istaʿīnū biṣ-ṣabri waṣ-ṣalāh…",
    "Seek help through patience and prayer…",
    "إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
    "inna Allāha maʿaṣ-ṣābirīn",
    "Surely Allah is with the patient.",
    "Qur’an 2:153",
    "AYAH-004"
  ],
  [
    "ayah",
    "كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبۡلِكُمۡ …",
    "Kamā kutiba ʿalalladhīna min qablikum…",
    "As it was prescribed for those before you…",
    "لَعَلَّكُمۡ تَتَّقُونَ",
    "laʿallakum tattaqūn",
    "so that you may become mindful of Allah.",
    "Qur’an 2:183",
    "AYAH-005"
  ],
  [
    "ayah",
    "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي …",
    "Wa idhā sa’alaka ʿibādī ʿannī…",
    "When My servants ask you about Me…",
    "فَإِنِّي قَرِيبٌ",
    "fa-innī qarīb",
    "then surely I am near.",
    "Qur’an 2:186",
    "AYAH-006"
  ],
  [
    "ayah",
    "رَبَّنَآ ءَاتِنَا فِي ٱلدُّنۡيَا حَسَنَةٗ …",
    "Rabbanā ātinā fid-dunyā ḥasanah…",
    "Our Lord, give us good in this world…",
    "وَفِي ٱلۡأٓخِرَةِ حَسَنَةٗ وَقِنَا عَذَابَ ٱلنَّارِ",
    "wa fil-ākhirati ḥasanatan wa qinā ʿadhāban-nār",
    "and good in the Hereafter, and protect us from the Fire.",
    "Qur’an 2:201",
    "AYAH-007"
  ],
  [
    "ayah",
    "وَعَسَىٰٓ أَن تَكۡرَهُواْ شَيۡـٔٗا …",
    "Wa ʿasā an takrahū shay’an…",
    "Perhaps you dislike something…",
    "وَهُوَ خَيۡرٞ لَّكُمۡ",
    "wa huwa khayrun lakum",
    "while it is good for you.",
    "Qur’an 2:216",
    "AYAH-008"
  ],
  [
    "ayah",
    "لَا تَأۡخُذُهُۥ …",
    "Lā ta’khudhuhu…",
    "He is not overtaken by…",
    "سِنَةٞ وَلَا نَوۡمٞ",
    "sinatun wa lā nawm",
    "drowsiness or sleep.",
    "Qur’an 2:255",
    "AYAH-009"
  ],
  [
    "ayah",
    "لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا …",
    "Lā yukallifu Allāhu nafsan…",
    "Allah does not burden a soul…",
    "إِلَّا وُسۡعَهَا",
    "illā wusʿahā",
    "beyond its capacity.",
    "Qur’an 2:286",
    "AYAH-010"
  ],
  [
    "ayah",
    "رَبَّنَا لَا تُزِغۡ قُلُوبَنَا بَعۡدَ إِذۡ هَدَيۡتَنَا …",
    "Rabbanā lā tuzigh qulūbanā baʿda idh hadaytanā…",
    "Our Lord, do not let our hearts deviate after You guided us…",
    "وَهَبۡ لَنَا مِن لَّدُنكَ رَحۡمَةً",
    "wa hab lanā min ladunka raḥmah",
    "and grant us mercy from Yourself.",
    "Qur’an 3:8",
    "AYAH-011"
  ],
  [
    "ayah",
    "قُلۡ إِن كُنتُمۡ تُحِبُّونَ ٱللَّهَ …",
    "Qul in kuntum tuḥibbūna Allāha…",
    "Say: If you love Allah…",
    "فَٱتَّبِعُونِي يُحۡبِبۡكُمُ ٱللَّهُ",
    "fattabiʿūnī yuḥbibkumu Allāh",
    "then follow me; Allah will love you.",
    "Qur’an 3:31",
    "AYAH-012"
  ],
  [
    "ayah",
    "لَن تَنَالُواْ ٱلۡبِرَّ …",
    "Lan tanālul-birra…",
    "You will never attain true righteousness…",
    "حَتَّىٰ تُنفِقُواْ مِمَّا تُحِبُّونَ",
    "ḥattā tunfiqū mimmā tuḥibbūn",
    "until you give from what you love.",
    "Qur’an 3:92",
    "AYAH-013"
  ],
  [
    "ayah",
    "وَٱعۡتَصِمُواْ بِحَبۡلِ ٱللَّهِ جَمِيعٗا …",
    "Waʿtaṣimū biḥabli Allāhi jamīʿan…",
    "Hold firmly together to the rope of Allah…",
    "وَلَا تَفَرَّقُواْ",
    "wa lā tafarraqū",
    "and do not become divided.",
    "Qur’an 3:103",
    "AYAH-014"
  ],
  [
    "ayah",
    "وَلَا تَهِنُواْ وَلَا تَحۡزَنُواْ …",
    "Wa lā tahinū wa lā taḥzanū…",
    "Do not weaken or grieve…",
    "وَأَنتُمُ ٱلۡأَعۡلَوۡنَ إِن كُنتُم مُّؤۡمِنِينَ",
    "wa antumul-aʿlawna in kuntum mu’minīn",
    "for you will prevail if you are believers.",
    "Qur’an 3:139",
    "AYAH-015"
  ],
  [
    "ayah",
    "فَإِذَا عَزَمۡتَ …",
    "Fa-idhā ʿazamta…",
    "Once you have decided…",
    "فَتَوَكَّلۡ عَلَى ٱللَّهِ",
    "fatawakkal ʿala Allāh",
    "then put your trust in Allah.",
    "Qur’an 3:159",
    "AYAH-016"
  ],
  [
    "ayah",
    "حَسۡبُنَا ٱللَّهُ …",
    "Ḥasbunā Allāhu…",
    "Allah is sufficient for us…",
    "وَنِعۡمَ ٱلۡوَكِيلُ",
    "wa niʿmal-wakīl",
    "and He is the finest Guardian.",
    "Qur’an 3:173",
    "AYAH-017"
  ],
  [
    "ayah",
    "وَإِذَا حُيِّيتُم بِتَحِيَّةٖ …",
    "Wa idhā ḥuyyītum bitaḥiyyatin…",
    "When you are greeted…",
    "فَحَيُّواْ بِأَحۡسَنَ مِنۡهَآ أَوۡ رُدُّوهَآ",
    "faḥayyū bi-aḥsana minhā aw ruddūhā",
    "respond with a better greeting or return it equally.",
    "Qur’an 4:86",
    "AYAH-018"
  ],
  [
    "ayah",
    "وَتَعَاوَنُواْ عَلَى ٱلۡبِرِّ وَٱلتَّقۡوَىٰۖ …",
    "Wa taʿāwanū ʿalal-birri wat-taqwā…",
    "Cooperate in righteousness and mindfulness…",
    "وَلَا تَعَاوَنُواْ عَلَى ٱلۡإِثۡمِ وَٱلۡعُدۡوَٰنِ",
    "wa lā taʿāwanū ʿalal-ithmi wal-ʿudwān",
    "and do not cooperate in sin and aggression.",
    "Qur’an 5:2",
    "AYAH-019"
  ],
  [
    "ayah",
    "ٱعۡدِلُواْ …",
    "Iʿdilū…",
    "Be just…",
    "هُوَ أَقۡرَبُ لِلتَّقۡوَىٰ",
    "huwa aqrabu lit-taqwā",
    "for that is closer to mindfulness of Allah.",
    "Qur’an 5:8",
    "AYAH-020"
  ],
  [
    "ayah",
    "مَن جَآءَ بِٱلۡحَسَنَةِ …",
    "Man jā’a bil-ḥasanati…",
    "Whoever comes with a good deed…",
    "فَلَهُۥ عَشۡرُ أَمۡثَالِهَا",
    "falahu ʿashru amthālihā",
    "will have ten times its like.",
    "Qur’an 6:160",
    "AYAH-021"
  ],
  [
    "ayah",
    "رَبَّنَا ظَلَمۡنَآ أَنفُسَنَا …",
    "Rabbanā ẓalamnā anfusanā…",
    "Our Lord, we have wronged ourselves…",
    "وَإِن لَّمۡ تَغۡفِرۡ لَنَا وَتَرۡحَمۡنَا لَنَكُونَنَّ مِنَ ٱلۡخَٰسِرِينَ",
    "wa il-lam taghfir lanā wa tarḥamnā lanakūnanna minal-khāsirīn",
    "and unless You forgive and have mercy on us, we will be among the losers.",
    "Qur’an 7:23",
    "AYAH-022"
  ],
  [
    "ayah",
    "إِنَّ رَحۡمَتَ ٱللَّهِ …",
    "Inna raḥmata Allāhi…",
    "Surely the mercy of Allah is…",
    "قَرِيبٞ مِّنَ ٱلۡمُحۡسِنِينَ",
    "qarībun minal-muḥsinīn",
    "near to those who do good.",
    "Qur’an 7:56",
    "AYAH-023"
  ],
  [
    "ayah",
    "إِذَا ذُكِرَ ٱللَّهُ وَجِلَتۡ قُلُوبُهُمۡ …",
    "Idhā dhukira Allāhu wajilat qulūbuhum…",
    "When Allah is mentioned, their hearts tremble…",
    "وَإِذَا تُلِيَتۡ عَلَيۡهِمۡ ءَايَٰتُهُۥ زَادَتۡهُمۡ إِيمَٰنٗا",
    "wa idhā tuliyat ʿalayhim āyātuhu zādathum īmānan",
    "and when His verses are recited, they increase in faith.",
    "Qur’an 8:2",
    "AYAH-024"
  ],
  [
    "ayah",
    "وَلَا تَنَٰزَعُواْ فَتَفۡشَلُواْ وَتَذۡهَبَ رِيحُكُمۡۖ …",
    "Wa lā tanāzaʿū fatafshalū wa tadhhaba rīḥukum…",
    "Do not dispute, or you will lose courage and strength…",
    "وَٱصۡبِرُوٓاْۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
    "waṣbirū; inna Allāha maʿaṣ-ṣābirīn",
    "and be patient; Allah is with the patient.",
    "Qur’an 8:46",
    "AYAH-025"
  ],
  [
    "ayah",
    "قُل لَّن يُصِيبَنَآ …",
    "Qul lan yuṣībanā…",
    "Say: Nothing will ever befall us…",
    "إِلَّا مَا كَتَبَ ٱللَّهُ لَنَا",
    "illā mā kataba Allāhu lanā",
    "except what Allah has written for us.",
    "Qur’an 9:51",
    "AYAH-026"
  ],
  [
    "ayah",
    "ٱتَّقُواْ ٱللَّهَ …",
    "Ittaqū Allāha…",
    "Be mindful of Allah…",
    "وَكُونُواْ مَعَ ٱلصَّـٰدِقِينَ",
    "wa kūnū maʿaṣ-ṣādiqīn",
    "and be with the truthful.",
    "Qur’an 9:119",
    "AYAH-027"
  ],
  [
    "ayah",
    "أَلَآ إِنَّ أَوۡلِيَآءَ ٱللَّهِ …",
    "Alā inna awliyā’a Allāhi…",
    "Surely the close servants of Allah…",
    "لَا خَوۡفٌ عَلَيۡهِمۡ وَلَا هُمۡ يَحۡزَنُونَ",
    "lā khawfun ʿalayhim wa lā hum yaḥzanūn",
    "will have no fear, nor will they grieve.",
    "Qur’an 10:62",
    "AYAH-028"
  ],
  [
    "ayah",
    "وَمَا تَوۡفِيقِيٓ …",
    "Wa mā tawfīqī…",
    "My success is only…",
    "إِلَّا بِٱللَّهِ",
    "illā billāh",
    "through Allah.",
    "Qur’an 11:88",
    "AYAH-029"
  ],
  [
    "ayah",
    "وَلَا تَاْيۡـَٔسُواْ …",
    "Wa lā tay’asū…",
    "Do not despair…",
    "مِن رَّوۡحِ ٱللَّهِ",
    "mir-rawḥi Allāh",
    "of relief from Allah.",
    "Qur’an 12:87",
    "AYAH-030"
  ],
  [
    "ayah",
    "إِنَّ ٱللَّهَ لَا يُغَيِّرُ مَا بِقَوۡمٍ …",
    "Inna Allāha lā yughayyiru mā biqawmin…",
    "Allah does not change the condition of a people…",
    "حَتَّىٰ يُغَيِّرُواْ مَا بِأَنفُسِهِمۡ",
    "ḥattā yughayyirū mā bi-anfusihim",
    "until they change what is within themselves.",
    "Qur’an 13:11",
    "AYAH-031"
  ],
  [
    "ayah",
    "أَلَا بِذِكۡرِ ٱللَّهِ …",
    "Alā bidhikri Allāhi…",
    "Surely in the remembrance of Allah…",
    "تَطۡمَئِنُّ ٱلۡقُلُوبُ",
    "taṭma’innul-qulūb",
    "hearts find rest.",
    "Qur’an 13:28",
    "AYAH-032"
  ],
  [
    "ayah",
    "لَئِن شَكَرۡتُمۡ …",
    "La’in shakartum…",
    "If you are grateful…",
    "لَأَزِيدَنَّكُمۡ",
    "la-azīdannakum",
    "I will certainly give you more.",
    "Qur’an 14:7",
    "AYAH-033"
  ],
  [
    "ayah",
    "وَٱعۡبُدۡ رَبَّكَ …",
    "Waʿbud rabbaka…",
    "Worship your Lord…",
    "حَتَّىٰ يَأۡتِيَكَ ٱلۡيَقِينُ",
    "ḥattā ya’tiyakal-yaqīn",
    "until certainty comes to you.",
    "Qur’an 15:99",
    "AYAH-034"
  ],
  [
    "ayah",
    "وَإِن تَعُدُّواْ نِعۡمَةَ ٱللَّهِ …",
    "Wa in taʿuddū niʿmata Allāhi…",
    "If you tried to count Allah’s blessings…",
    "لَا تُحۡصُوهَآ",
    "lā tuḥṣūhā",
    "you could never enumerate them.",
    "Qur’an 16:18",
    "AYAH-035"
  ],
  [
    "ayah",
    "إِنَّ ٱللَّهَ يَأۡمُرُ بِٱلۡعَدۡلِ وَٱلۡإِحۡسَٰنِ …",
    "Inna Allāha ya’muru bil-ʿadli wal-iḥsān…",
    "Allah commands justice and excellence…",
    "وَإِيتَآيِٕ ذِي ٱلۡقُرۡبَىٰ",
    "wa ītā’i dhil-qurbā",
    "and generosity toward relatives.",
    "Qur’an 16:90",
    "AYAH-036"
  ],
  [
    "ayah",
    "فَلَا تَقُل لَّهُمَآ أُفّٖ وَلَا تَنۡهَرۡهُمَا …",
    "Falā taqul lahumā uffin wa lā tanharhumā…",
    "Do not even say “uff” to your parents or repel them…",
    "وَقُل لَّهُمَا قَوۡلٗا كَرِيمٗا",
    "wa qul lahumā qawlan karīman",
    "but speak to them with noble words.",
    "Qur’an 17:23",
    "AYAH-037"
  ],
  [
    "ayah",
    "رَّبِّ ٱرۡحَمۡهُمَا …",
    "Rabbir-ḥamhumā…",
    "My Lord, have mercy on them…",
    "كَمَا رَبَّيَانِي صَغِيرٗا",
    "kamā rabbayānī ṣaghīran",
    "as they raised me when I was small.",
    "Qur’an 17:24",
    "AYAH-038"
  ],
  [
    "ayah",
    "رَبَّنَآ ءَاتِنَا مِن لَّدُنكَ رَحۡمَةٗ …",
    "Rabbanā ātinā mil-ladunka raḥmatan…",
    "Our Lord, grant us mercy from Yourself…",
    "وَهَيِّئۡ لَنَا مِنۡ أَمۡرِنَا رَشَدٗا",
    "wa hayyi’ lanā min amrinā rashadan",
    "and set our affair on a right course.",
    "Qur’an 18:10",
    "AYAH-039"
  ],
  [
    "ayah",
    "وَٱذۡكُر رَّبَّكَ …",
    "Wadhkur rabbaka…",
    "Remember your Lord…",
    "إِذَا نَسِيتَ",
    "idhā nasīta",
    "whenever you forget.",
    "Qur’an 18:24",
    "AYAH-040"
  ],
  [
    "ayah",
    "قَالَ رَبِّ …",
    "Qāla rabbi…",
    "He said: My Lord…",
    "ٱشۡرَحۡ لِي صَدۡرِي",
    "ishraḥ lī ṣadrī",
    "open my heart for me.",
    "Qur’an 20:25",
    "AYAH-041"
  ],
  [
    "ayah",
    "وَقُل رَّبِّ …",
    "Wa qul rabbi…",
    "And say: My Lord…",
    "زِدۡنِي عِلۡمٗا",
    "zidnī ʿilman",
    "increase me in knowledge.",
    "Qur’an 20:114",
    "AYAH-042"
  ],
  [
    "ayah",
    "لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبۡحَٰنَكَ …",
    "Lā ilāha illā anta subḥānaka…",
    "There is no god but You; glory be to You…",
    "إِنِّي كُنتُ مِنَ ٱلظَّـٰلِمِينَ",
    "innī kuntu minaẓ-ẓālimīn",
    "I have truly been among the wrongdoers.",
    "Qur’an 21:87",
    "AYAH-043"
  ],
  [
    "ayah",
    "قَدۡ أَفۡلَحَ …",
    "Qad aflaḥa…",
    "Successful indeed are…",
    "ٱلۡمُؤۡمِنُونَ",
    "al-mu’minūn",
    "the believers.",
    "Qur’an 23:1",
    "AYAH-044"
  ],
  [
    "ayah",
    "وَلۡيَعۡفُواْ وَلۡيَصۡفَحُوٓاْۗ …",
    "Walyaʿfū walyaṣfaḥū…",
    "Let them pardon and overlook…",
    "أَلَا تُحِبُّونَ أَن يَغۡفِرَ ٱللَّهُ لَكُمۡ",
    "alā tuḥibbūna an yaghfira Allāhu lakum",
    "would you not love for Allah to forgive you?",
    "Qur’an 24:22",
    "AYAH-045"
  ],
  [
    "ayah",
    "ٱللَّهُ نُورُ …",
    "Allāhu nūru…",
    "Allah is the Light of…",
    "ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ",
    "as-samāwāti wal-arḍ",
    "the heavens and the earth.",
    "Qur’an 24:35",
    "AYAH-046"
  ],
  [
    "ayah",
    "وَعِبَادُ ٱلرَّحۡمَٰنِ ٱلَّذِينَ يَمۡشُونَ عَلَى ٱلۡأَرۡضِ هَوۡنٗا …",
    "Wa ʿibādur-Raḥmāni alladhīna yamshūna ʿalal-arḍi hawnan…",
    "The servants of the Most Merciful walk humbly on the earth…",
    "وَإِذَا خَاطَبَهُمُ ٱلۡجَٰهِلُونَ قَالُواْ سَلَٰمٗا",
    "wa idhā khāṭabahumul-jāhilūna qālū salāman",
    "and when the ignorant address them, they respond with peace.",
    "Qur’an 25:63",
    "AYAH-047"
  ],
  [
    "ayah",
    "رَبَّنَا هَبۡ لَنَا مِنۡ أَزۡوَٰجِنَا وَذُرِّيَّـٰتِنَا قُرَّةَ أَعۡيُنٖ …",
    "Rabbanā hab lanā min azwājinā wa dhurriyyātinā qurrata aʿyunin…",
    "Our Lord, grant us comfort in our spouses and children…",
    "وَٱجۡعَلۡنَا لِلۡمُتَّقِينَ إِمَامًا",
    "wajʿalnā lil-muttaqīna imāman",
    "and make us examples for the mindful.",
    "Qur’an 25:74",
    "AYAH-048"
  ],
  [
    "ayah",
    "إِنَّ ٱلصَّلَوٰةَ تَنۡهَىٰ …",
    "Innaṣ-ṣalāta tanhā…",
    "Surely prayer restrains…",
    "عَنِ ٱلۡفَحۡشَآءِ وَٱلۡمُنكَرِ",
    "ʿanil-faḥshā’i wal-munkar",
    "from indecency and wrongdoing.",
    "Qur’an 29:45",
    "AYAH-049"
  ],
  [
    "ayah",
    "وَٱلَّذِينَ جَٰهَدُواْ فِينَا …",
    "Walladhīna jāhadū fīnā…",
    "Those who strive for Our sake…",
    "لَنَهۡدِيَنَّهُمۡ سُبُلَنَا",
    "lanahdiyannahum subulanā",
    "We will surely guide them to Our ways.",
    "Qur’an 29:69",
    "AYAH-050"
  ],
  [
    "ayah",
    "وَأۡمُرۡ بِٱلۡمَعۡرُوفِ وَٱنۡهَ عَنِ ٱلۡمُنكَرِ …",
    "Wa’mur bil-maʿrūfi wanha ʿanil-munkari…",
    "Encourage what is right and forbid what is wrong…",
    "وَٱصۡبِرۡ عَلَىٰ مَآ أَصَابَكَ",
    "waṣbir ʿalā mā aṣābaka",
    "and be patient with whatever befalls you.",
    "Qur’an 31:17",
    "AYAH-051"
  ],
  [
    "ayah",
    "لَّقَدۡ كَانَ لَكُمۡ فِي رَسُولِ ٱللَّهِ …",
    "Laqad kāna lakum fī rasūli Allāhi…",
    "In the Messenger of Allah you truly have…",
    "أُسۡوَةٌ حَسَنَةٞ",
    "uswatun ḥasanah",
    "an excellent example.",
    "Qur’an 33:21",
    "AYAH-052"
  ],
  [
    "ayah",
    "ٱذۡكُرُواْ ٱللَّهَ …",
    "Udhkurū Allāha…",
    "Remember Allah…",
    "ذِكۡرٗا كَثِيرٗا",
    "dhikran kathīran",
    "with frequent remembrance.",
    "Qur’an 33:41",
    "AYAH-053"
  ],
  [
    "ayah",
    "لَا تَقۡنَطُواْ …",
    "Lā taqnaṭū…",
    "Do not lose hope…",
    "مِن رَّحۡمَةِ ٱللَّهِ",
    "mir-raḥmati Allāh",
    "in Allah’s mercy.",
    "Qur’an 39:53",
    "AYAH-054"
  ],
  [
    "ayah",
    "ٱدۡفَعۡ بِٱلَّتِي هِيَ أَحۡسَنُ …",
    "Idfaʿ billatī hiya aḥsanu…",
    "Respond to evil with what is best…",
    "فَإِذَا ٱلَّذِي بَيۡنَكَ وَبَيۡنَهُۥ عَدَٰوَةٞ كَأَنَّهُۥ وَلِيٌّ حَمِيمٞ",
    "fa-idhalladhī baynaka wa baynahu ʿadāwatun ka-annahu waliyyun ḥamīm",
    "then an enemy may become like a close friend.",
    "Qur’an 41:34",
    "AYAH-055"
  ],
  [
    "ayah",
    "إِنَّمَا ٱلۡمُؤۡمِنُونَ إِخۡوَةٞ …",
    "Innamal-mu’minūna ikhwatun…",
    "The believers are one brotherhood…",
    "فَأَصۡلِحُواْ بَيۡنَ أَخَوَيۡكُمۡ",
    "fa-aṣliḥū bayna akhawaykum",
    "so make peace between your brothers.",
    "Qur’an 49:10",
    "AYAH-056"
  ],
  [
    "ayah",
    "وَلَا تَجَسَّسُواْ …",
    "Wa lā tajassasū…",
    "Do not spy…",
    "وَلَا يَغۡتَب بَّعۡضُكُم بَعۡضًا",
    "wa lā yaghtab baʿḍukum baʿḍan",
    "or backbite one another.",
    "Qur’an 49:12",
    "AYAH-057"
  ],
  [
    "ayah",
    "وَأَن لَّيۡسَ لِلۡإِنسَٰنِ …",
    "Wa an laysa lil-insāni…",
    "A person will have nothing…",
    "إِلَّا مَا سَعَىٰ",
    "illā mā saʿā",
    "except what they strive for.",
    "Qur’an 53:39",
    "AYAH-058"
  ],
  [
    "ayah",
    "وَمَن يَتَّقِ ٱللَّهَ …",
    "Wa man yattaqi Allāha…",
    "Whoever is mindful of Allah…",
    "يَجۡعَل لَّهُۥ مَخۡرَجٗا",
    "yajʿal lahu makhrajan",
    "He will make a way out for them.",
    "Qur’an 65:2",
    "AYAH-059"
  ],
  [
    "ayah",
    "فَإِنَّ مَعَ ٱلۡعُسۡرِ …",
    "Fa-inna maʿal-ʿusri…",
    "Surely with hardship comes…",
    "يُسۡرًا",
    "yusran",
    "ease.",
    "Qur’an 94:5",
    "AYAH-060"
  ],
  [
    "say",
    "SIDQ",
    "Do not say: truth · honest · lie · sincere · speech",
    "See Qur’an 9:119",
    "WORD-061"
  ],
  [
    "say",
    "HAYA",
    "Do not say: modesty · shame · faith · shy · character",
    "Sahih al-Bukhari 24",
    "WORD-062"
  ],
  [
    "say",
    "HILM",
    "Do not say: forbearance · calm · anger · gentle · restraint",
    "Islamic character concept",
    "WORD-063"
  ],
  [
    "say",
    "‘AFW",
    "Do not say: pardon · forgive · erase · overlook · mercy",
    "See Qur’an 24:22",
    "WORD-064"
  ],
  [
    "say",
    "SULH",
    "Do not say: settlement · peace · dispute · agreement · reconcile",
    "See Qur’an 4:128",
    "WORD-065"
  ],
  [
    "say",
    "SILAT AR-RAHIM",
    "Do not say: relatives · family · ties · visit · maintain",
    "See Sahih al-Bukhari 5984",
    "WORD-066"
  ],
  [
    "say",
    "BIRR AL-WALIDAYN",
    "Do not say: parents · kindness · obey · mother · father",
    "Qur’an 17:23–24",
    "WORD-067"
  ],
  [
    "say",
    "UKHUWWAH",
    "Do not say: brotherhood · believers · community · bond · unity",
    "Qur’an 49:10",
    "WORD-068"
  ],
  [
    "say",
    "MUHASABAH",
    "Do not say: self-accounting · examine · deeds · reflect · soul",
    "Spiritual-ethics concept",
    "WORD-069"
  ],
  [
    "say",
    "MURAQABAH",
    "Do not say: watchful · Allah · aware · seen · heart",
    "See Qur’an 4:1",
    "WORD-070"
  ],
  [
    "say",
    "MAHABBAH",
    "Do not say: love · Allah · heart · affection · beloved",
    "See Qur’an 5:54",
    "WORD-071"
  ],
  [
    "say",
    "KHAWF",
    "Do not say: fear · Allah · punishment · heart · awe",
    "See Qur’an 3:175",
    "WORD-072"
  ],
  [
    "say",
    "RAJA’",
    "Do not say: hope · mercy · expect · Allah · reward",
    "See Qur’an 18:110",
    "WORD-073"
  ],
  [
    "say",
    "RIDHA",
    "Do not say: content · pleased · decree · accept · Allah",
    "Spiritual-ethics concept",
    "WORD-074"
  ],
  [
    "say",
    "BALA’",
    "Do not say: trial · test · hardship · affliction · patience",
    "See Qur’an 2:155",
    "WORD-075"
  ],
  [
    "say",
    "NASIHAH",
    "Do not say: sincere advice · counsel · religion · guide · correct",
    "Sahih Muslim 55a",
    "WORD-076"
  ],
  [
    "say",
    "AMR BIL-MA‘RUF",
    "Do not say: command · good · right · community · encourage",
    "Qur’an 3:104",
    "WORD-077"
  ],
  [
    "say",
    "NAHY ‘ANIL-MUNKAR",
    "Do not say: forbid · wrong · evil · stop · community",
    "Qur’an 3:104",
    "WORD-078"
  ],
  [
    "say",
    "DHULM",
    "Do not say: injustice · oppression · wrong · rights · darkness",
    "See Qur’an 31:13",
    "WORD-079"
  ],
  [
    "say",
    "ISRAF",
    "Do not say: excess · waste · spend · food · limits",
    "Qur’an 7:31",
    "WORD-080"
  ],
  [
    "say",
    "TABDHIR",
    "Do not say: squander · wasteful · money · spend · reckless",
    "Qur’an 17:26–27",
    "WORD-081"
  ],
  [
    "say",
    "RIBA",
    "Do not say: interest · usury · loan · increase · forbidden",
    "Qur’an 2:275",
    "WORD-082"
  ],
  [
    "say",
    "GHARAR",
    "Do not say: uncertainty · contract · risk · unclear · sale",
    "See Sahih Muslim 1513",
    "WORD-083"
  ],
  [
    "say",
    "WAQF",
    "Do not say: endowment · charity · property · ongoing · preserve",
    "See Sahih al-Bukhari 2737",
    "WORD-084"
  ],
  [
    "say",
    "KAFFARAH",
    "Do not say: expiation · compensate · oath · fasting · penalty",
    "See Qur’an 5:89",
    "WORD-085"
  ],
  [
    "say",
    "FIDYAH",
    "Do not say: compensation · fasting · feed · unable · ransom",
    "See Qur’an 2:184",
    "WORD-086"
  ],
  [
    "say",
    "NAFILAH",
    "Do not say: voluntary · extra · worship · prayer · optional",
    "Islamic legal category",
    "WORD-087"
  ],
  [
    "say",
    "QIYAM AL-LAYL",
    "Do not say: night · prayer · stand · sleep · worship",
    "See Qur’an 73:2",
    "WORD-088"
  ],
  [
    "say",
    "WITR",
    "Do not say: odd · prayer · night · rak‘ah · final",
    "See Sahih al-Bukhari 990",
    "WORD-089"
  ],
  [
    "say",
    "I‘TIKAF",
    "Do not say: retreat · mosque · Ramadan · worship · stay",
    "See Qur’an 2:187",
    "WORD-090"
  ],
  [
    "say",
    "‘UMRAH",
    "Do not say: pilgrimage · Makkah · Ka‘bah · ihram · tawaf",
    "See Qur’an 2:196",
    "WORD-091"
  ],
  [
    "say",
    "TALBIYAH",
    "Do not say: Labbayk · Hajj · call · pilgrimage · chant",
    "Pilgrimage rite; Sahih Muslim 1184a",
    "WORD-092"
  ],
  [
    "say",
    "TAKBIR",
    "Do not say: Allahu Akbar · great · prayer · Eid · phrase",
    "See Qur’an 2:185",
    "WORD-093"
  ],
  [
    "say",
    "TASBIH",
    "Do not say: SubhanAllah · glorify · beads · remembrance · perfect",
    "See Qur’an 33:42",
    "WORD-094"
  ],
  [
    "say",
    "TAHLIL",
    "Do not say: la ilaha illallah · one · declaration · dhikr · worship",
    "Remembrance formula",
    "WORD-095"
  ],
  [
    "say",
    "SALAWAT",
    "Do not say: Prophet · blessings · peace · Muhammad · send",
    "Qur’an 33:56",
    "WORD-096"
  ],
  [
    "say",
    "JANAZAH",
    "Do not say: funeral · deceased · prayer · burial · body",
    "Islamic funeral rite; see Sahih al-Bukhari 1335",
    "WORD-097"
  ],
  [
    "say",
    "QISAS",
    "Do not say: retaliation · justice · murder · equal · law",
    "Qur’an 2:178",
    "WORD-098"
  ],
  [
    "say",
    "DIYAH",
    "Do not say: blood money · compensation · killing · family · payment",
    "See Qur’an 4:92",
    "WORD-099"
  ],
  [
    "say",
    "SHAHADAH",
    "Do not say: testimony · faith · witness · Allah · Messenger",
    "Testimony of faith; see Sahih Muslim 8a",
    "WORD-100"
  ],
  [
    "arabish",
    "KEE FACK IL YOUM",
    "كيفك اليوم؟ — How are you today? (said to a man)",
    "Levantine Arabic",
    "DECODE-081"
  ],
  [
    "arabish",
    "SHOE BID NACK N SAW WEE",
    "شو بدنا نسوي؟ — What are we going to do?",
    "Levantine Arabic",
    "DECODE-082"
  ],
  [
    "arabish",
    "MAH FEE AH HA LAH",
    "ما في أحلى — Nothing could be nicer",
    "Common colloquial Arabic",
    "DECODE-083"
  ],
  [
    "arabish",
    "IN TEE MIN WAYNE",
    "إنتِ من وين؟ — Where are you from? (said to a woman)",
    "Levantine Arabic",
    "DECODE-084"
  ],
  [
    "arabish",
    "ALLAH YEH DEEK",
    "الله يهديك — May Allah guide you",
    "Common colloquial Arabic",
    "DECODE-085"
  ],
  [
    "arabish",
    "YAH REIT NEE MA RO HIT",
    "يا ريتني ما رحت — I wish I had not gone",
    "Levantine Arabic",
    "DECODE-086"
  ],
  [
    "arabish",
    "FEEN IL MAF TAH",
    "فين المفتاح؟ — Where is the key?",
    "Egyptian Arabic",
    "DECODE-087"
  ],
  [
    "arabish",
    "MISH FAY HIM HA GA",
    "مش فاهم حاجة — I do not understand anything (said by a man)",
    "Egyptian Arabic",
    "DECODE-088"
  ],
  [
    "arabish",
    "KOL HA GA TAMAM",
    "كل حاجة تمام — Everything is fine",
    "Egyptian Arabic",
    "DECODE-089"
  ],
  [
    "arabish",
    "BAH KER N SHOO FACK",
    "بكرا نشوفك — We will see you tomorrow",
    "Levantine Arabic",
    "DECODE-090"
  ],
  [
    "arabish",
    "MAH A LAYK",
    "ما عليك — Do not worry about it",
    "Gulf / colloquial Arabic",
    "DECODE-091"
  ],
  [
    "arabish",
    "MIN EYE YOON EE",
    "من عيوني — With pleasure; literally, from my eyes",
    "Common colloquial Arabic",
    "DECODE-092"
  ],
  [
    "arabish",
    "HAD AH KAL LAM",
    "هذا كلام؟ — Does that make any sense?",
    "Common colloquial Arabic",
    "DECODE-093"
  ],
  [
    "arabish",
    "SAH DICK NEE",
    "صدقني — Believe me (said to a man)",
    "Common colloquial Arabic",
    "DECODE-094"
  ],
  [
    "arabish",
    "YAH LAH NIM SHEE",
    "يلا نمشي — Come on, let us go",
    "Common colloquial Arabic",
    "DECODE-095"
  ],
  [
    "arabish",
    "SHLOE NUCK IL YOUM",
    "شلونك اليوم؟ — How are you today? (said to a man)",
    "Gulf / Iraqi Arabic",
    "DECODE-096"
  ],
  [
    "arabish",
    "WAIN KUNT",
    "وين كنت؟ — Where were you? (said to a man)",
    "Levantine Arabic",
    "DECODE-097"
  ],
  [
    "arabish",
    "SHOE HAL HA KEE",
    "شو هالحكي؟ — What is this talk?",
    "Levantine Arabic",
    "DECODE-098"
  ],
  [
    "arabish",
    "MOO MAS DOOG",
    "مو مصدّق — I cannot believe it",
    "Levantine / Gulf Arabic",
    "DECODE-099"
  ],
  [
    "arabish",
    "AAN JUD KHA LASS",
    "عنجد خلص؟ — Seriously, it is over?",
    "Levantine Arabic",
    "DECODE-100"
  ],
  [
    "arabish",
    "LAK WAYN HAL GHAY BEH",
    "لك وين هالغيبة؟ — Where have you been all this time?",
    "Levantine Arabic · common in Syria",
    "DECODE-101"
  ],
  [
    "arabish",
    "SHOO IL ISS SEH MIN AWW LAH LA AKH RAH",
    "شو القصة من أولها لآخرها؟ — What is the whole story from beginning to end?",
    "Levantine Arabic · common in Syria",
    "DECODE-102"
  ],
  [
    "arabish",
    "MOO NAA KISS NA GHAIR HAL ISS SEH",
    "مو ناقصنا غير هالقصة — Just what we needed (sarcastic)",
    "Levantine Arabic · common in Syria",
    "DECODE-103"
  ],
  [
    "arabish",
    "EE ZA BAD DAK IS SA RAA HAH MA IK TA NA AT",
    "إذا بدك الصراحة، ما اقتنعت — Honestly, I was not convinced",
    "Levantine Arabic · common in Syria",
    "DECODE-104"
  ],
  [
    "arabish",
    "DEER BAA LAK A HAA LAK",
    "دير بالك ع حالك — Take care of yourself",
    "Levantine Arabic · common in Syria",
    "DECODE-105"
  ],
  [
    "arabish",
    "LA TAA KOL HAM BIT TIN HALL",
    "لا تاكل هم، بتنحل — Do not worry; it will work itself out",
    "Levantine Arabic · common in Syria",
    "DECODE-106"
  ],
  [
    "arabish",
    "MA ILL EE KHEL LICK IH KEE HAL LA",
    "ما إلي خلق إحكي هلأ — I do not feel like talking right now",
    "Levantine Arabic · common in Syria",
    "DECODE-107"
  ],
  [
    "arabish",
    "SHOO AM T HAA WIL T OO L",
    "شو عم تحاول تقول؟ — What are you trying to say?",
    "Levantine Arabic · common in Syria",
    "DECODE-108"
  ],
  [
    "arabish",
    "TAW WIL BAA LAK SHWAY",
    "طوّل بالك شوي — Be patient for a moment",
    "Levantine Arabic · common in Syria",
    "DECODE-109"
  ],
  [
    "arabish",
    "KHAL LEE NA NAA KHOD HA MIN KSAI RA",
    "خلّينا ناخدها من قصيرها — Let us cut to the chase",
    "Levantine Arabic · common in Syria",
    "DECODE-110"
  ],
  [
    "arabish",
    "HAY SHUGH LEH BID DA RA WAA",
    "هاي الشغلة بدها رواق — This situation needs calm and patience",
    "Levantine Arabic · common in Syria",
    "DECODE-111"
  ],
  [
    "arabish",
    "MA FEE DAA EE T KAB BIR IL MAW DOO",
    "ما في داعي تكبّر الموضوع — There is no need to blow this out of proportion",
    "Levantine Arabic · common in Syria",
    "DECODE-112"
  ],
  [
    "arabish",
    "SHOO AM TA MIL HAA LAK MISH SHAA YIF",
    "شو عم تعمل حالك مش شايف؟ — Why are you pretending not to see?",
    "Levantine Arabic · common in Lebanon",
    "DECODE-113"
  ],
  [
    "arabish",
    "BAAD BAK KEER A HAL HA KEE",
    "بعد بكير ع هالحكي — It is still too early for that talk",
    "Levantine Arabic · common in Lebanon",
    "DECODE-114"
  ],
  [
    "arabish",
    "MA BAA FEE YE T HAM MAL",
    "ما بقى فيّي إتحمّل — I cannot take it anymore",
    "Levantine Arabic · common in Lebanon",
    "DECODE-115"
  ],
  [
    "arabish",
    "WA LA Y HIM MAK BIT T DAB BAR",
    "ولا يهمك، بتتدبّر — Do not worry; it will get sorted out",
    "Levantine Arabic · common in Lebanon",
    "DECODE-116"
  ],
  [
    "arabish",
    "KHAL LEE NA NIH KEE BIL MAW DOO AAL MAK SHOOF",
    "خلّينا نحكي بالموضوع عالمكشوف — Let us discuss the subject openly",
    "Levantine Arabic · common in Lebanon",
    "DECODE-117"
  ],
  [
    "arabish",
    "AN JAD AM TIM ZAH MAA EE",
    "عنجد عم تمزح معي؟ — Are you seriously joking with me?",
    "Levantine Arabic · common in Lebanon",
    "DECODE-118"
  ],
  [
    "arabish",
    "MA KHS SAK BI HAL ISS SEH",
    "ما خصّك بهالقصة — This is none of your business",
    "Levantine Arabic · common in Lebanon",
    "DECODE-119"
  ],
  [
    "arabish",
    "DOK IL HA DEED W HOO WEE HAA MEE",
    "دقّ الحديد وهو حامي — Strike while the iron is hot",
    "Levantine Arabic · common in Lebanon",
    "DECODE-120"
  ],
  [
    "arabish",
    "EE JA Y KAH HIL HA A MA HA",
    "إجا ليكحّلها عماها — He tried to fix it and made it worse",
    "Levantine Arabic · common in Lebanon",
    "DECODE-121"
  ],
  [
    "arabish",
    "MIT LIL ATRASH BIZ ZAFF EH",
    "متل الأطرش بالزفّة — Like someone completely unaware of what is happening",
    "Levantine Arabic · common in Lebanon",
    "DECODE-122"
  ],
  [
    "arabish",
    "KILL TA KH EE REH FEE HA KHAI RAH",
    "كل تأخيرة فيها خيرة — Every delay may carry something good",
    "Levantine Arabic · common in Lebanon",
    "DECODE-123"
  ],
  [
    "arabish",
    "IL LEE S TAH HOO MAA TOO",
    "اللي استحوا ماتوا — Some people have no shame (literally: those who were shy died)",
    "Levantine Arabic · common in Lebanon",
    "DECODE-124"
  ],
  [
    "arabish",
    "SHOO MAA LAK AA LIB WIJ HAK",
    "شو مالك قالب وجهك؟ — Why the long face?",
    "Levantine Arabic · common in Palestine",
    "DECODE-125"
  ],
  [
    "arabish",
    "BID DAK IS SAA FEE WA LA IB N AM MO",
    "بدّك الصافي ولا ابن عمّه؟ — Do you want the plain truth or a softened version?",
    "Levantine Arabic · common in Palestine",
    "DECODE-126"
  ],
  [
    "arabish",
    "IL LEE MA B AAR FAK B JAH LAK",
    "اللي ما بعرفك بجهلك — Someone who does not know you may misjudge you",
    "Levantine Arabic · common in Palestine",
    "DECODE-127"
  ],
  [
    "arabish",
    "MISH KILL MAR RAH BIT S LAM IL JAR RAH",
    "مش كل مرّة بتسلم الجرّة — You cannot expect to get away with it every time",
    "Levantine Arabic · common in Palestine",
    "DECODE-128"
  ],
  [
    "arabish",
    "IL IRD B AYN IM MO GHA ZAAL",
    "القرد بعين أمّه غزال — In his mother’s eyes, even a monkey is a gazelle",
    "Levantine Arabic · common in Palestine",
    "DECODE-129"
  ],
  [
    "arabish",
    "B KAF FEE LAFF W DA WA RAAN",
    "بكفّي لف ودوران — Enough beating around the bush",
    "Levantine Arabic · common in Palestine",
    "DECODE-130"
  ],
  [
    "arabish",
    "HOTT AK LAK B RAA SAK W AAR RAF KHA LAA SAK",
    "حطّ عقلك براسك واعرف خلاصك — Think wisely and know what is best for you",
    "Levantine Arabic · common in Palestine",
    "DECODE-131"
  ],
  [
    "arabish",
    "MA DALL GHAI RAK YIH KEE",
    "ما ضلّ غيرك يحكي — As if you were the only person left to speak",
    "Levantine Arabic · common in Palestine",
    "DECODE-132"
  ],
  [
    "arabish",
    "IJ IT IL HA ZEE NEH TIF RAH MA LAA AT IL HA MAT RAH",
    "إجت الحزينة تفرح ما لقتلها مطرح — When the unlucky one came to celebrate, she found no place",
    "Levantine Arabic · common in Palestine",
    "DECODE-133"
  ],
  [
    "arabish",
    "IL HA KEE IL LAK YA JAA RAH",
    "الحكي إلك يا جارة — The message is really meant for you, neighbor",
    "Levantine Arabic · common in Palestine",
    "DECODE-134"
  ],
  [
    "arabish",
    "MIN BAR RA HAL LAH HAL LAH W MIN JOW WA YAA LAM AL LAH",
    "من برّا هالله هالله ومن جوّا يعلم الله — Impressive outside; only Allah knows what is inside",
    "Levantine Arabic · common in Palestine",
    "DECODE-135"
  ],
  [
    "arabish",
    "IL LEE BID REE BID REE W IL LEE MA BID REE B OO L KAFF A DAS",
    "اللي بدري بدري، واللي ما بدري بقول كف عدس — Those who know, know; those who do not invent explanations",
    "Levantine Arabic · common in Palestine",
    "DECODE-136"
  ],
  [
    "arabish",
    "SHOO HAL HA KEE IL LEE MA IL LO DAA EE",
    "شو هالحكي اللي ما إله داعي؟ — What is this pointless talk?",
    "Levantine Arabic · common in Jordan",
    "DECODE-137"
  ],
  [
    "arabish",
    "LA T DALL LAK T LIF W T DOOR",
    "لا تظلّك تلف وتدور — Stop going around in circles",
    "Levantine Arabic · common in Jordan",
    "DECODE-138"
  ],
  [
    "arabish",
    "HAS SA F HIMT A LAYK",
    "هسّه فهمت عليك — Now I understand what you mean",
    "Levantine Arabic · common in Jordan",
    "DECODE-139"
  ],
  [
    "arabish",
    "MIN IL AA KHIR SHOO BAD DAK",
    "من الآخر، شو بدّك؟ — Bottom line: what do you want?",
    "Levantine Arabic · common in Jordan",
    "DECODE-140"
  ],
  [
    "arabish",
    "RAW WIK NA YA ZA LA MEH",
    "روّقنا يا زلمة — Give us a break and calm down, man",
    "Levantine Arabic · common in Jordan",
    "DECODE-141"
  ],
  [
    "arabish",
    "MA BIT M SHEE A LAY HAL SA WAA LIF",
    "ما بتمشي عليّ هالسوالف — I am not buying these stories",
    "Levantine Arabic · common in Jordan",
    "DECODE-142"
  ],
  [
    "arabish",
    "HAIK BID DA HA IL ISS SEH",
    "هيك بدها القصّة — This is how the situation needs to be handled",
    "Levantine Arabic · common in Jordan",
    "DECODE-143"
  ],
  [
    "arabish",
    "YA JA BAL MA Y HIZ ZAK REEH",
    "يا جبل ما يهزّك ريح — Be like a mountain no wind can shake",
    "Levantine Arabic · common in Jordan",
    "DECODE-144"
  ],
  [
    "arabish",
    "IL MAK TOOB M BAY YAN MIN IN WAA NO",
    "المكتوب مبيّن من عنوانه — You can tell what is coming from the title",
    "Levantine Arabic · common in Jordan",
    "DECODE-145"
  ],
  [
    "arabish",
    "KILL WAA HID AK LO B RAA SO B AAR RAF KHA LAA SO",
    "كل واحد عقله براسه بعرف خلاصه — Everyone has a mind and knows what serves them",
    "Levantine Arabic · common in Jordan",
    "DECODE-146"
  ],
  [
    "arabish",
    "BAD DAK EE YA NEE A SAD DIK HAL HA KEE",
    "بدّك إيّاني أصدّق هالحكي؟ — You expect me to believe this?",
    "Levantine Arabic · common in Jordan",
    "DECODE-147"
  ],
  [
    "arabish",
    "IN KAN HAIK KHAL LEE NA N KHALLIS MIN HAS SA",
    "إن كان هيك، خلّينا نخلّص من هسّه — If that is the case, let us finish it now",
    "Levantine Arabic · common in Jordan",
    "DECODE-148"
  ],
  [
    "arabish",
    "HELL YOUM KIN AN TOO EED MAH COOL TAH",
    "هل يمكن أن تعيد ما قلته؟ — Could you repeat what you said?",
    "Modern Standard Arabic",
    "DECODE-149"
  ],
  [
    "arabish",
    "LESS TOO MOO TAH ACK KID DAN MIN SIH HAT HAA THEE HILL MAH LOO MAH",
    "لست متأكداً من صحة هذه المعلومة — I am not certain this information is correct",
    "Modern Standard Arabic",
    "DECODE-150"
  ],
  [
    "arabish",
    "LA TOO AJ JILL AM A LIL YOUM EE LAL GHAD",
    "لا تؤجّل عمل اليوم إلى الغد — Do not put off today’s work until tomorrow",
    "Modern Standard Arabic",
    "DECODE-151"
  ],
  [
    "arabish",
    "LEE COOL LEE MA COM IN MA CALL",
    "لكلّ مقامٍ مقال — Every situation calls for the right words",
    "Modern Standard Arabic",
    "DECODE-152"
  ],
  [
    "arabish",
    "MA COOL LOO MA YAL MA OO THA HA BAN",
    "ما كلّ ما يلمع ذهباً — Not everything that glitters is gold",
    "Modern Standard Arabic",
    "DECODE-153"
  ],
  [
    "arabish",
    "MIN JAD DA WA JAD WA MIN ZA RA A HA SAD",
    "من جدّ وجد، ومن زرع حصد — Whoever works hard succeeds; whoever plants reaps",
    "Modern Standard Arabic",
    "DECODE-154"
  ],
  [
    "arabish",
    "RUB BA DAR RAT IN NAA FEE AH",
    "رُبّ ضارّةٍ نافعة — Something harmful may ultimately bring benefit",
    "Modern Standard Arabic",
    "DECODE-155"
  ],
  [
    "arabish",
    "TAJ REE REE YAA HOO BEE MAA LA TASH TA HEE SUF FUN",
    "تجري الرياح بما لا تشتهي السفن — The winds do not always blow as ships wish",
    "Modern Standard Arabic",
    "DECODE-156"
  ],
  [
    "arabish",
    "KHAI RUL OO MOO REE AWS SA TOO HAA",
    "خير الأمور أوسطها — The best course is the balanced one",
    "Modern Standard Arabic",
    "DECODE-157"
  ],
  [
    "arabish",
    "LA TAH KOOM A LAL KEE TAB MIN GHEE LAA FEE HEE",
    "لا تحكم على الكتاب من غلافه — Do not judge a book by its cover",
    "Modern Standard Arabic",
    "DECODE-158"
  ],
  [
    "arabish",
    "MIN TA LA BAL OO LA SA HAA RAL LAY AA LEE",
    "من طلب العُلا سهر الليالي — Whoever seeks excellence must endure long nights",
    "Modern Standard Arabic",
    "DECODE-159"
  ],
  [
    "arabish",
    "AS SA DEE KOO WAK TAD DEEK",
    "الصديق وقت الضيق — A true friend appears in times of hardship",
    "Modern Standard Arabic",
    "DECODE-160"
  ],
  [
    "trivia",
    "Where does the Qur’an locate the first House established for humanity?",
    "At Bakkah—the location of the Ka‘bah",
    "Qur’an 3:96",
    "TRIVIA-061"
  ],
  [
    "trivia",
    "What does the Qur’an call Safa and Marwah?",
    "Among the symbols or sacred rites of Allah",
    "Qur’an 2:158",
    "TRIVIA-062"
  ],
  [
    "trivia",
    "How many months does the Qur’an say are in Allah’s decree, and how many are sacred?",
    "Twelve months, of which four are sacred",
    "Qur’an 9:36",
    "TRIVIA-063"
  ],
  [
    "trivia",
    "How many recipient categories for zakah are listed in Qur’an 9:60?",
    "Eight categories",
    "Qur’an 9:60",
    "TRIVIA-064"
  ],
  [
    "trivia",
    "Why did Sulayman order the Queen of Saba’s throne to be disguised?",
    "To test whether she would recognize it and show insight",
    "Qur’an 27:41–42",
    "TRIVIA-065"
  ],
  [
    "trivia",
    "What happened to the mountain when Allah manifested His glory to it after Musa asked to see Him?",
    "It crumbled, and Musa fell unconscious",
    "Qur’an 7:143",
    "TRIVIA-066"
  ],
  [
    "trivia",
    "Which event is mentioned at the opening of Surah Al-Qamar as a sign?",
    "The moon was split",
    "Qur’an 54:1–2",
    "TRIVIA-067"
  ],
  [
    "trivia",
    "Into what were the Sabbath-breakers commanded to become?",
    "Despised apes",
    "Qur’an 2:65; 7:166",
    "TRIVIA-068"
  ],
  [
    "trivia",
    "Which prophet is named with Ismail and Idris as one of the steadfast?",
    "Dhul-Kifl",
    "Qur’an 21:85",
    "TRIVIA-069"
  ],
  [
    "trivia",
    "What status did Allah promise Ibrahim after testing him with commands that he fulfilled?",
    "A leader—an imam—for humanity",
    "Qur’an 2:124",
    "TRIVIA-070"
  ],
  [
    "trivia",
    "What are the three main expiation options stated for a broken deliberate oath before fasting is used?",
    "Feed ten needy people, clothe them, or free an enslaved person",
    "Qur’an 5:89",
    "TRIVIA-071"
  ],
  [
    "trivia",
    "If the standard two male witnesses are unavailable for a deferred debt, what alternative does Qur’an 2:282 give?",
    "One man and two women from acceptable witnesses",
    "Qur’an 2:282",
    "TRIVIA-072"
  ],
  [
    "trivia",
    "What did Zakariyya repeatedly find with Maryam in her prayer chamber?",
    "Provision",
    "Qur’an 3:37",
    "TRIVIA-073"
  ],
  [
    "trivia",
    "What animal appears in the parable of people entrusted with scripture but failing to carry its meaning?",
    "A donkey carrying books",
    "Qur’an 62:5",
    "TRIVIA-074"
  ],
  [
    "trivia",
    "What two natural examples illustrate truth remaining and falsehood passing away in Qur’an 13:17?",
    "Flowing water and melted metal, with useless foam disappearing from both",
    "Qur’an 13:17",
    "TRIVIA-075"
  ],
  [
    "trivia",
    "What was the first thing the crow taught one son of Adam after the killing?",
    "How to bury or conceal his brother’s body",
    "Qur’an 5:31",
    "TRIVIA-076"
  ],
  [
    "trivia",
    "What did the owners of the garden in Surah Al-Qalam intend to withhold when they planned an early harvest?",
    "The share of the poor",
    "Qur’an 68:17–33",
    "TRIVIA-077"
  ],
  [
    "trivia",
    "What destroyed the fertile gardens of Saba after the people turned away?",
    "A devastating flood from the dam",
    "Qur’an 34:15–16",
    "TRIVIA-078"
  ],
  [
    "trivia",
    "Which two women are presented as examples of disbelief despite being married to righteous prophets?",
    "The wives of Nuh and Lut",
    "Qur’an 66:10",
    "TRIVIA-079"
  ],
  [
    "trivia",
    "What number of grains does the charity parable produce from seven ears with one hundred grains each?",
    "Seven hundred grains",
    "Qur’an 2:261",
    "TRIVIA-080"
  ],
  [
    "identity",
    "A fire drew Musa toward me, but revelation made me sacred. Before hearing his mission, he was told to remove his sandals. What valley am I?",
    "The sacred valley of Tuwa",
    "Qur’an 20:9–14",
    "RIDDLE-051"
  ],
  [
    "identity",
    "When water was told to subside, an ark settled upon me. I am named in a single command that ends with distance from wrongdoing people. What mountain am I?",
    "Al-Judi",
    "Qur’an 11:44",
    "RIDDLE-052"
  ],
  [
    "identity",
    "Musa reached my water alone and found shepherds crowding around it while two women waited back. Where was he?",
    "The water of Madyan",
    "Qur’an 28:22–28",
    "RIDDLE-053"
  ],
  [
    "identity",
    "My people were ‘Ad; my pillars were lofty; and the Qur’an says nothing like me had been created in the lands. What ancient city or people am I?",
    "Iram of the pillars",
    "Qur’an 89:6–8",
    "RIDDLE-054"
  ],
  [
    "identity",
    "A brother of ‘Ad warned his people among my curved sand hills. My name later became the title of a Qur’anic surah. What region am I?",
    "Al-Ahqaf—the sand hills",
    "Qur’an 46:21–26",
    "RIDDLE-055"
  ],
  [
    "identity",
    "The Night Journey reached me from Al-Masjid al-Haram. The Qur’an calls my surroundings blessed. What sanctuary am I?",
    "Al-Masjid al-Aqsa—the Farthest Mosque",
    "Qur’an 17:1",
    "RIDDLE-056"
  ],
  [
    "identity",
    "I am better than a thousand months. Angels and the Spirit descend during me, and peace lasts until dawn. What night am I?",
    "Laylat al-Qadr—the Night of Decree",
    "Qur’an 97:1–5",
    "RIDDLE-057"
  ],
  [
    "identity",
    "Fasting is tied to me, but my defining Qur’anic honor is that revelation began within me as guidance for humanity. What month am I?",
    "Ramadan",
    "Qur’an 2:185",
    "RIDDLE-058"
  ],
  [
    "identity",
    "The believers were few and materially weak when Allah granted victory here. A plea for help was answered with angelic support. What battle am I?",
    "The Battle of Badr",
    "Qur’an 3:123; 8:9–12",
    "RIDDLE-059"
  ],
  [
    "identity",
    "We left our people for faith, turned inside a cave as we slept, and woke debating whether a day or part of one had passed. Who are we?",
    "The Companions of the Cave",
    "Qur’an 18:9–26",
    "RIDDLE-060"
  ],
  [
    "identity",
    "Fire was dug below us while witnesses sat above. Our only “crime” was believing in Allah, the Mighty, the Praiseworthy. Who are we?",
    "The People of the Trench",
    "Qur’an 85:4–10",
    "RIDDLE-061"
  ],
  [
    "identity",
    "An army’s largest animal gives us our title, but flocks of birds ended the march before the Sacred House fell. Who are we?",
    "The Companions of the Elephant",
    "Qur’an 105:1–5",
    "RIDDLE-062"
  ],
  [
    "identity",
    "I have seven verses, open the Book, move from praise to covenant, and end with a plea for the straight path. Which surah am I?",
    "Surah Al-Fatihah",
    "Qur’an 1:1–7; Sahih al-Bukhari 4474",
    "RIDDLE-063"
  ],
  [
    "identity",
    "My title comes from an animal in a murder investigation, but I am the Qur’an’s longest surah. Which surah am I?",
    "Surah Al-Baqarah",
    "Standard mushaf arrangement; Qur’an 2:67–73",
    "RIDDLE-064"
  ],
  [
    "identity",
    "An ant gives me my title, a hoopoe delivers my evidence, and a queen’s throne crosses a great distance within me. Which surah am I?",
    "Surah An-Naml",
    "Qur’an 27:18–44",
    "RIDDLE-065"
  ],
  [
    "identity",
    "A cave gives me my title, but my pages also hold two gardens, a mysterious journey with Musa, and a barrier of iron. Which surah am I?",
    "Surah Al-Kahf",
    "Qur’an 18:9–98",
    "RIDDLE-066"
  ],
  [
    "identity",
    "A dream of eleven stars opens my story; a family bow closes it. The Qur’an calls the account the best of narratives. Which surah am I?",
    "Surah Yusuf",
    "Qur’an 12:3–101",
    "RIDDLE-067"
  ],
  [
    "identity",
    "I begin with a woman’s complaint being heard above a private conversation. My title means “the woman who disputes.” Which surah am I?",
    "Surah Al-Mujadilah",
    "Qur’an 58:1–4",
    "RIDDLE-068"
  ],
  [
    "identity",
    "I answer one historical question in five short verses: what became of the army that approached the Ka‘bah with an elephant? Which surah am I?",
    "Surah Al-Fil",
    "Qur’an 105:1–5",
    "RIDDLE-069"
  ],
  [
    "identity",
    "Four verses deny ancestry, offspring, likeness, and need while affirming absolute oneness. Which surah am I?",
    "Surah Al-Ikhlas",
    "Qur’an 112:1–4",
    "RIDDLE-070"
  ],
  [
    "mizan",
    "A friend shares a serious accusation about someone and asks you to warn the whole group immediately. The claim may be true, but no one has verified it. What do you do?",
    "Protect people from possible harm without spreading an unverified charge: clarify urgency, preserve evidence, involve an appropriate responsible person, and verify before broadcasting.",
    "Principles: Qur’an 49:6; avoid harm and reckless suspicion",
    "DILEMMA-036"
  ],
  [
    "mizan",
    "Your family expects you to conceal a relative’s financial abuse because exposing it would “break the family.” The harmed person is still losing money. What takes priority?",
    "Stop the ongoing harm and seek a fair, discreet process. Family unity cannot require enabling injustice; limit disclosure to those needed for protection and resolution.",
    "Principles: Qur’an 4:135; 5:8",
    "DILEMMA-037"
  ],
  [
    "mizan",
    "Someone apologizes publicly for humiliating you, but privately pressures you to say everything is resolved before trust has been rebuilt. Must forgiveness mean immediate access?",
    "No. You can pardon without pretending trust is restored. State what repair requires, keep proportionate boundaries, and avoid revenge or public humiliation.",
    "Principles: Qur’an 24:22; 42:40",
    "DILEMMA-038"
  ],
  [
    "mizan",
    "A community fundraiser uses emotional claims that are technically true but omit facts donors would consider important. The cause is good. Is the tactic acceptable?",
    "A worthy goal does not justify material deception. Correct the presentation, disclose relevant facts, and let donors choose with informed consent.",
    "Principles: truthful dealing and amanah; Qur’an 4:58",
    "DILEMMA-039"
  ],
  [
    "mizan",
    "Your manager asks you to take credit for a colleague’s work because it will help your team secure funding that benefits everyone. What is the principled response?",
    "Refuse false attribution, document contributions accurately, and propose an honest team-based case for funding. Shared benefit does not make misrepresentation fair.",
    "Principles: Qur’an 5:8; 9:119",
    "DILEMMA-040"
  ],
  [
    "mizan",
    "A friend confides that they are quietly leaving harmful behavior but asks you never to tell anyone. Later, you see signs of immediate danger. Do you keep the confidence?",
    "Confidentiality has limits when serious, imminent harm is credible. Tell the friend what you must do if safe, involve the smallest appropriate circle, and avoid unnecessary exposure.",
    "Principles: preserve life, minimize harm, keep trusts responsibly",
    "DILEMMA-041"
  ],
  [
    "mizan",
    "You discover a religious post you shared contains a false quotation. Deleting it silently would protect your reputation, while correcting it may draw attention to the error. What do you do?",
    "Remove or clearly correct it, acknowledge the mistake in proportion to its reach, and share the verified source. Repair matters more than protecting an image of certainty.",
    "Principles: verification and honesty; Qur’an 49:6",
    "DILEMMA-042"
  ],
  [
    "mizan",
    "A relative repeatedly gives unsolicited religious advice in a harsh way. Their point is sometimes correct, but the method damages your relationship. How do you respond?",
    "Separate truth from delivery: accept what is sound, name the harmful pattern calmly, request a better time and manner, and set boundaries if the behavior continues.",
    "Principles: wisdom and gracious counsel; Qur’an 16:125",
    "DILEMMA-043"
  ],
  [
    "mizan",
    "Two friends are in conflict. Each tells you private details and expects loyalty. You can see faults on both sides. What does fair mediation require?",
    "Do not become a messenger for private attacks. Obtain consent before sharing details, correct each side honestly, and focus on repair rather than winning.",
    "Principles: reconciliation and justice; Qur’an 49:9–10",
    "DILEMMA-044"
  ],
  [
    "mizan",
    "A financially struggling friend refuses help out of dignity, but you know a bill is overdue. How can you help without taking control away from them?",
    "Offer specific choices, preserve privacy, and let them decide. If serious harm is near, explore discreet support that does not manipulate or shame them.",
    "Principles: charity with dignity; Qur’an 2:262–264",
    "DILEMMA-045"
  ],
  [
    "reflection",
    "What part of your religious routine still has form but has quietly lost meaning?",
    "",
    "Reflection on renewal",
    "SURFACE-071"
  ],
  [
    "reflection",
    "Which part of one religious practice needs renewed intention, better understanding, rest, or a smaller sustainable form?",
    "",
    "Reflection on renewal",
    "SURFACE-072"
  ],
  [
    "reflection",
    "When you say “Allah knows my heart,” are you seeking comfort, avoiding accountability, or both?",
    "",
    "Reflection on intention and action",
    "SURFACE-073"
  ],
  [
    "reflection",
    "What do your outward choices reveal about your heart, even when your intention feels more complicated?",
    "",
    "Reflection on intention and action",
    "SURFACE-074"
  ],
  [
    "reflection",
    "Which person do you find easiest to reduce to their worst mistake?",
    "",
    "Reflection on mercy and judgment",
    "SURFACE-075"
  ],
  [
    "reflection",
    "What would justice, caution, and belief in repentance each ask of you toward someone you judge by their worst mistake?",
    "",
    "Reflection on mercy and judgment",
    "SURFACE-076"
  ],
  [
    "reflection",
    "What blessing have you normalized so completely that you only notice it when threatened?",
    "",
    "Reflection on gratitude",
    "SURFACE-077"
  ],
  [
    "reflection",
    "How could gratitude change how you use a blessing—not only how you speak about it?",
    "",
    "Reflection on gratitude",
    "SURFACE-078"
  ],
  [
    "reflection",
    "Which unanswered question about faith are you afraid to voice because of how people might judge you?",
    "",
    "Reflection on questions and belonging",
    "SURFACE-079"
  ],
  [
    "reflection",
    "What kind of trustworthy teacher, evidence, or setting would help you voice an unanswered question about faith?",
    "",
    "Reflection on questions and belonging",
    "SURFACE-080"
  ],
  [
    "reflection",
    "Where has avoiding conflict allowed resentment to grow?",
    "",
    "Reflection on courageous communication",
    "SURFACE-081"
  ],
  [
    "reflection",
    "What would a truthful, gentle conversation sound like if the goal were repair rather than releasing anger?",
    "",
    "Reflection on courageous communication",
    "SURFACE-082"
  ],
  [
    "reflection",
    "Which act of worship do you treat mainly as a test of willpower?",
    "",
    "Reflection on worship",
    "SURFACE-083"
  ],
  [
    "reflection",
    "What would change if you approached an act of worship as a relationship, a need, and a source of formation—not only a test of willpower?",
    "",
    "Reflection on worship",
    "SURFACE-084"
  ],
  [
    "reflection",
    "When you imagine becoming “better,” whose approval is hidden inside that picture?",
    "",
    "Reflection on identity",
    "SURFACE-085"
  ],
  [
    "reflection",
    "Which change you want is rooted in worship and character, and which is driven mainly by comparison?",
    "",
    "Reflection on identity",
    "SURFACE-086"
  ],
  [
    "reflection",
    "What do you ask Allah to remove that may also be teaching you a boundary, skill, or truth?",
    "",
    "Reflection on hardship and agency",
    "SURFACE-087"
  ],
  [
    "reflection",
    "What lesson can you take from a hardship without assuming the hardship must remain or harm should be tolerated?",
    "",
    "Reflection on hardship and agency",
    "SURFACE-088"
  ],
  [
    "reflection",
    "Which commitment would survive if progress became invisible for a full year?",
    "",
    "Reflection on steadfastness",
    "SURFACE-089"
  ],
  [
    "reflection",
    "What does your need for visible progress reveal about patience and sincerity?",
    "",
    "Reflection on steadfastness",
    "SURFACE-090"
  ]
];
