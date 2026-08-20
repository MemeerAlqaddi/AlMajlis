/* v52 Riddles: every row has a distinct answer and layered, source-backed clues. */
const v52RiddleRows = [
  ["Adam","I learned names the angels did not know, was formed from earth, and received words of repentance after a forbidden tree.","Qur’an 2:30–37"],
  ["Idris","Revelation calls me truthful and a prophet, then says I was raised to a high station.","Qur’an 19:56–57"],
  ["Nuh","I preached across centuries, built under divine instruction, and watched a mountain fail to save my son.","Qur’an 11:36–46; 29:14"],
  ["Hud","I warned a powerful people proud of their strength before a furious wind left them fallen.","Qur’an 7:65–72; 69:6–8"],
  ["Salih","My people carved mountain homes, received a she-camel with a water share, then killed the sign.","Qur’an 7:73–79; 26:141–159"],
  ["Ibrahim","I challenged celestial worship, broke idols, survived a fire, and raised foundations with my son.","Qur’an 6:74–79; 21:51–70; 2:127"],
  ["Lut","Angelic guests caused me distress, my people rejected purity, and my wife remained among those left behind.","Qur’an 11:77–83; 7:80–84"],
  ["Isma‘il","I am praised for keeping promises, helped raise the Sacred House, and was both messenger and prophet.","Qur’an 19:54–55; 2:127"],
  ["Ishaq","My birth was announced to aged parents by guests, and revelation counts me among people of strength and insight.","Qur’an 11:69–73; 38:45"],
  ["Ya‘qub","I recognized a false story through a bloodied shirt, lost sight through grief, and regained it through another shirt.","Qur’an 12:17–18; 12:84–96"],
  ["Yusuf","Stars bowed in my dream, a torn shirt defended me, prison delayed me, and storehouses placed a nation under my care.","Qur’an 12"],
  ["Shu‘ayb","I called for full measure and weight, forbade corrupt dealing, and warned the people of Madyan.","Qur’an 11:84–95"],
  ["Ayyub","Harm touched me without erasing reverence; relief came with water after I struck the ground.","Qur’an 21:83–84; 38:41–44"],
  ["Dhul-Kifl","I appear among the patient and righteous, yet revelation gives few narrative details about me.","Qur’an 21:85–86; 38:48"],
  ["Musa","A river protected me as an infant, a fire called me, a staff split the sea, and a journey taught me patience.","Qur’an 20; 26:52–68; 18:60–82"],
  ["Harun","My brother asked for my eloquence, I resisted calf worship, and I feared dividing our people.","Qur’an 28:34; 20:90–94"],
  ["Dawud","Mountains and birds glorified with me, iron softened, armor became my craft, and a dispute tested my judgment.","Qur’an 34:10–11; 38:17–26"],
  ["Sulayman","Wind carried me, jinn built for me, an ant warned her colony, and a bird reported a queen.","Qur’an 27:15–44; 34:12–14"],
  ["Ilyas","I challenged a people who invoked Ba‘l instead of the best Creator and was honored among later generations.","Qur’an 37:123–132"],
  ["Al-Yasa‘","Revelation names me among those favored above peoples and later counts me among the excellent.","Qur’an 6:86; 38:48"],
  ["Yunus","Lots sent me from a laden ship, darkness surrounded my confession, and a gourd shaded my recovery.","Qur’an 37:139–148; 21:87–88"],
  ["Zakariyya","In old age I prayed quietly for an heir, found provision with Maryam, and received silence as a sign.","Qur’an 3:37–41; 19:2–11"],
  ["Yahya","My unprecedented name was announced before birth, and I was told to hold Scripture firmly while still young.","Qur’an 19:7–15"],
  ["Isa","I spoke in infancy, healed by Allah’s permission, received the Injil, and was raised rather than killed.","Qur’an 3:45–55; 4:157–158; 19:29–33"],
  ["Muhammad","A cave sheltered my migration, revelation calls me the final prophet, and a night journey linked two sacred mosques.","Qur’an 9:40; 33:40; 17:1"],
  ["Maryam","An eastern retreat preceded an angelic visitor; a palm tree fed me, and my infant defended my honor.","Qur’an 19:16–34"],
  ["Luqman","My counsel joins gratitude, worship, parental conduct, prayer, patience, humility, pace, and voice.","Qur’an 31:12–19"],
  ["Dhul-Qarnayn","I traveled toward two horizons, judged with justice, and built an iron-copper barrier for a vulnerable people.","Qur’an 18:83–98"],
  ["The knowledgeable servant in Surah Al-Kahf","A damaged boat, a slain youth, and a repaired wall made my actions troubling until their hidden reasons were explained.","Qur’an 18:60–82; Sahih al-Bukhari 122"],
  ["Talut","A prophet appointed me king, a river tested my army, and a small steadfast force advanced against Jalut.","Qur’an 2:246–251"],
  ["Jalut","A smaller believing force faced my army, and Dawud killed me before receiving kingdom and wisdom.","Qur’an 2:249–251"],
  ["Qarun","Keys burdened strong men, display impressed the worldly, and earth swallowed both my wealth and home.","Qur’an 28:76–82"],
  ["Samiri","I fashioned a lowing calf, claimed insight others lacked, and was sentenced to social isolation.","Qur’an 20:85–97"],
  ["Azar","My son challenged my idols and celestial worship; revelation names me in Ibrahim’s appeal.","Qur’an 6:74"],
  ["The wife of ‘Imran","I dedicated what was in my womb, gave birth to Maryam, and sought protection for her descendants.","Qur’an 3:35–36"],
  ["The Queen of Saba","A bird exposed my sun-worshipping kingdom; a letter tested me, and a glass floor preceded submission.","Qur’an 27:22–44"],
  ["The minister’s wife in Surah Yusuf","A locked room, a race to the door, a torn shirt, and later confession expose my role without giving my personal name.","Qur’an 12:23–32; 12:51"],
  ["Nuh’s disbelieving son","I trusted elevation over revelation, sought safety on a mountain, and a wave separated me from my father.","Qur’an 11:42–43"],
  ["The owner of the two gardens","I mistook wealth for permanence, doubted the Hour, and saw my trellised property ruined while wringing my hands.","Qur’an 18:32–44"],
  ["The Companions of the Cave","Young believers withdrew with faith, a dog guarded our entrance, and centuries passed like part of a day.","Qur’an 18:9–26"],
  ["Bakkah","Revelation locates humanity’s first House within me and calls that sanctuary blessed and guiding.","Qur’an 3:96"],
  ["The Ka‘bah","I am the Ancient House, a prayer direction, and the sanctuary whose foundations Ibrahim and Isma‘il raised.","Qur’an 2:125–127; 22:29"],
  ["Safa","I share a verse with Marwah as one of Allah’s symbols crossed during pilgrimage.","Qur’an 2:158"],
  ["Marwah","I complete a paired sacred route whose mention removed concern about walking between two landmarks.","Qur’an 2:158"],
  ["‘Arafah","Pilgrims depart from me toward Al-Mash‘ar Al-Haram, and standing here defines the central Hajj gathering.","Qur’an 2:198; Sahih Muslim 1218"],
  ["Muzdalifah","I lie between ‘Arafah and Mina, host Al-Mash‘ar Al-Haram, and gather pilgrims after sunset.","Qur’an 2:198"],
  ["Mina","Tents, sacrifice, remembered days, and pebble-casting place me near the final stages of Hajj.","Qur’an 2:203; Sahih al-Bukhari 1751"],
  ["Al-Masjid Al-Aqsa","The Night Journey reached my blessed surroundings before signs were shown to the final Messenger.","Qur’an 17:1"],
  ["Mount Tur","A fire drew Musa toward my side, revelation called from a blessed spot, and a mountain later crumbled.","Qur’an 28:29–30; 7:143"],
  ["Al-Judi","Floodwaters receded, the command settled, and Nuh’s ark came to rest upon me.","Qur’an 11:44"],
  ["Madyan","Musa found two women at my well, later served their household, and Shu‘ayb warned my traders.","Qur’an 28:22–28; 11:84"],
  ["Saba","Two productive gardens framed my sign, a dam-flood replaced abundance, and a queen once ruled my people.","Qur’an 34:15–19; 27:22–23"],
  ["Iram","Revelation pairs my lofty pillars with ‘Ad and says no city like me had been built.","Qur’an 89:6–8"],
  ["Al-Hijr","My people carved secure homes in mountains, rejected messengers, and were overtaken in the morning.","Qur’an 15:80–84"],
  ["The cave of Al-Kahf","Sunlight avoided my sleepers in a precise way while their dog stretched at my entrance.","Qur’an 18:17–18"],
  ["The meeting point of the two seas","A forgotten fish marked me, and Musa retraced his path here to begin a difficult lesson.","Qur’an 18:60–65"],
  ["The sacred valley of Tuwa","Musa was told to remove his sandals because he stood within my consecrated ground.","Qur’an 20:11–12"],
  ["The valley of the ants","A single warning within me made Sulayman smile and pray gratefully for righteous action.","Qur’an 27:18–19"],
  ["Egypt in Surah Yusuf","Famine planning, royal dreams, storehouses, and a reunited family turn my land into Yusuf’s stage.","Qur’an 12:43–100"],
  ["Babylon","Two angels and a warning against disbelief appear with my name in the verse about magic.","Qur’an 2:102"],
  ["Surah Al-Fatihah","Seven often-repeated verses move from praise and mercy to worship, dependence, guidance, and two rejected paths.","Qur’an 1:1–7; 15:87"],
  ["Surah Al-Baqarah","A cow gives me my name; debt gives me the longest verse; a Throne verse and final prayers anchor my breadth.","Qur’an 2"],
  ["Surah Ali ‘Imran","A devoted family gives me my title; Maryam, Zakariyya, Uhud, and the mubahalah passage shape my chapters.","Qur’an 3"],
  ["Surah An-Nisa’","Women give me my title while inheritance, marriage, justice, trusts, and social protection dominate my legal counsel.","Qur’an 4"],
  ["Surah Al-Ma’idah","A requested table gives me my name, while contracts, lawful food, wudu, justice, and Isa’s disciples appear within me.","Qur’an 5"],
  ["Surah Al-An‘am","Livestock gives me a title used to confront invented food taboos amid sustained argument for divine oneness.","Qur’an 6"],
  ["Surah Al-A‘raf","The heights between final destinations name me; Adam, Iblis, many prophets, Musa, and covenant testimony fill my span.","Qur’an 7"],
  ["Surah Al-Anfal","War gains name me, yet obedience, unity, treaties, Badr, and restraint organize my treatment of conflict.","Qur’an 8"],
  ["Surah At-Tawbah","I begin without a written basmalah and examine treaties, hypocrisy, Tabuk, charity recipients, and sincere repentance.","Qur’an 9"],
  ["Surah Yunus","A prophet’s people uniquely benefit from timely belief, while revelation, signs, and trust in Allah frame my message.","Qur’an 10"],
  ["Surah Yusuf","One sustained narrative fills nearly all my verses, moving through dream, well, temptation, prison, governance, and reunion.","Qur’an 12"],
  ["Surah Hud","A command to remain upright introduces successive warnings through Nuh, Hud, Salih, Ibrahim, Lut, and Shu‘ayb.","Qur’an 11"],
  ["Surah Ibrahim","A prophet gives me my name; gratitude’s increase, a barren valley prayer, and good and corrupt tree parables distinguish me.","Qur’an 14"],
  ["Surah Al-Hijr","A rocky people name me, while preserved revelation, Adam’s creation, Iblis, angelic guests, and seven repeated verses appear.","Qur’an 15"],
  ["Surah An-Nahl","The bee names me; blessings, justice, migration, lawful food, wisdom in invitation, and Ibrahim’s model run through my counsel.","Qur’an 16"],
  ["Surah Al-Isra’","A night journey opens me before commands on parents, spending, life, privacy, speech, and human responsibility.","Qur’an 17"],
  ["Surah Al-Kahf","A cave names me, but two gardens, Musa’s teacher, and Dhul-Qarnayn add three further trials.","Qur’an 18"],
  ["Surah Maryam","A devoted woman names me; Zakariyya, Yahya, Isa’s infancy, Ibrahim, and several prophets unfold in intimate scenes.","Qur’an 19"],
  ["Surah Ta-Ha","Musa’s call and confrontation dominate me, framed by revelation as reminder and ending with Adam’s forgotten covenant.","Qur’an 20"],
  ["Surah Al-Anbiya’","The prophets name me collectively; many receive compressed portraits before Ibrahim’s idol challenge and universal mercy appear.","Qur’an 21"],
  ["Surah Al-Hajj","Pilgrimage names me, but resurrection, sacrifice, permission to resist aggression, and sacred symbols broaden my themes.","Qur’an 22"],
  ["Surah An-Nur","Light names me through a famous parable, while slander, modesty, entry permission, privacy times, and social evidence surround it.","Qur’an 24"],
  ["Surah Al-Furqan","The Criterion names me; false objections, signs, and a closing portrait of servants of the Most Merciful structure my argument.","Qur’an 25"],
  ["Surah Ash-Shu‘ara’","Poets name me only near my end, after repeated prophetic missions close with nearly identical warnings and reassurance.","Qur’an 26"],
  ["Surah An-Naml","An ant names me; Musa, Sulayman, a hoopoe, a queen, Salih, and Lut populate my signs.","Qur’an 27"],
  ["Surah Al-Qasas","Narratives give me my title; Musa’s infancy, exile, call, return, and Qarun’s collapse lead my account.","Qur’an 28"],
  ["Surah Al-‘Ankabut","A spider’s fragile home names my comparison for reliance on protectors besides Allah amid repeated tests of faith.","Qur’an 29"],
  ["Surah Ar-Rum","Romans name me through a reversal foretold after defeat, followed by signs in marriage, creation, language, rain, and history.","Qur’an 30"],
  ["Surah Luqman","A wise father names me; gratitude, worship, parental limits, prayer, courage, humility, and restrained speech fill his counsel.","Qur’an 31"],
  ["Surah As-Sajdah","Prostration names me, contrasting revelation’s certainty with creation, resurrection, night worship, and two unequal final outcomes.","Qur’an 32"],
  ["Surah Al-Ahzab","Confederates name me; the trench crisis, household rules, adoption lineage, public manners, and entrusted responsibility converge.","Qur’an 33"],
  ["Surah Saba","A grateful kingdom and its dam-flood name me, joined by Dawud’s iron, Sulayman’s workers, and rejected resurrection.","Qur’an 34"],
  ["Surah Fatir","The Originator names me; winged angels, creation, human need, true scholarly awe, and differing responses to revelation appear.","Qur’an 35"],
  ["Surah Ya-Sin","Mysterious opening letters name me; town messengers, a believer from afar, revived earth, cosmic orbits, and resurrection follow.","Qur’an 36"],
  ["Surah As-Saffat","Those ranged in rows name me; prophetic scenes culminate in Ibrahim’s dream, ransom, and a challenge to false divine kinship.","Qur’an 37"],
  ["Surah Sad","A single opening letter names me; Dawud’s litigants, Sulayman’s horses and kingdom, Ayyub’s trial, and Adam-Iblis close my arc.","Qur’an 38"],
  ["Surah Az-Zumar","Groups name me through people driven in companies toward Hell or Paradise after sustained calls to sincere worship and hope.","Qur’an 39"],
  ["Surah Ghafir","The Forgiver names me; a believing man from Pharaoh’s family argues courageously amid warnings, prayer, and rejected signs.","Qur’an 40"],
  ["Surah Fussilat","Detailed explanation names me; creation, stubborn hearing, bodily testimony, steadfast angels, and repelling evil with better conduct distinguish me.","Qur’an 41"],
  ["Surah Ash-Shura","Consultation names me among believers’ qualities while revelation’s unity, divine transcendence, forgiveness, and proportionate justice fill my message.","Qur’an 42"],
  ["Surah Az-Zukhruf","Gold adornments name me as worldly decoration, while inherited religion, Ibrahim’s break, Musa, and Isa confront false prestige.","Qur’an 43"],
  ["Surah Ad-Dukhan","Smoke names my warning; a blessed night, Pharaoh’s drowning, the people of Tubba‘, and contrasting final hospitality appear.","Qur’an 44"],
  ["Surah Al-Jathiyah","Kneeling names the posture of every community awaiting its record amid signs, law, desire, and final judgment.","Qur’an 45"],
  ["Surah Al-Ahqaf","Curving sand dunes name the homeland of ‘Ad, joined by parental gratitude and jinn listening to revelation.","Qur’an 46"],
  ["Surah Muhammad","The final Messenger names me; deeds, conflict ethics, hypocrisy, reflection, and reluctance to spend shape my testing tone.","Qur’an 47"],
  ["Surah Al-Fath","Victory names a treaty that looked like concession, with tranquility, pledge beneath a tree, and a truthful vision.","Qur’an 48"],
  ["Surah Al-Hujurat","Private rooms name me, but manners with the Prophet, verification, reconciliation, mockery, suspicion, backbiting, and human equality define me.","Qur’an 49"],
  ["Surah Qaf","A letter names me; human nearness, recording angels, death’s stupor, trumpet, gathering, Hell, and Paradise drive my urgency.","Qur’an 50"],
  ["Surah Adh-Dhariyat","Scattering winds name me; provision, Ibrahim’s guests, earlier peoples, and the purpose of jinn and human creation appear.","Qur’an 51"],
  ["Surah At-Tur","A mountain names me; oaths, final recompense, Paradise conversations, and accusations against the Messenger receive sharp replies.","Qur’an 52"],
  ["Surah An-Najm","A star names me; the Messenger’s vision, rejected goddesses, limits of assumption, personal responsibility, and earlier scriptures follow.","Qur’an 53"],
  ["Surah Al-Qamar","A moon names me through a split sign, while Nuh, ‘Ad, Thamud, Lut, and Pharaoh repeat a warning made easy to remember.","Qur’an 54"],
  ["Surah Ar-Rahman","The Most Merciful names me; teaching, balance, paired blessings, repeated challenge, two gardens, and two more gardens create my cadence.","Qur’an 55"],
  ["Surah Al-Waqi‘ah","The Inevitable Event names me and divides humanity into three groups before signs of creation and the protected recitation appear.","Qur’an 56"],
  ["Surah Al-Hadid","Iron names me; divine dominion, spending, light, a separating wall, worldly illusion, and balanced treatment of loss and gain unfold.","Qur’an 57"],
  ["Surah Al-Mujadilah","A woman’s argument names me because Allah heard her complaint, followed by private-conversation ethics and divided loyalties.","Qur’an 58"],
  ["Surah Al-Hashr","Gathering names me through an expelled people, distribution, emigrant-helper ethics, hypocrisy, and a majestic sequence of divine names.","Qur’an 59"],
  ["Surah Al-Mumtahanah","A woman examined after migration names me amid loyalty limits, Ibrahim’s example, justice toward peaceful non-Muslims, and women’s pledge.","Qur’an 60"],
  ["Surah As-Saff","A row names me; saying without doing, Musa’s people, Isa’s announcement, trade for salvation, and support of Allah’s cause align.","Qur’an 61"],
  ["Surah Al-Jumu‘ah","Friday congregation names me; an unlettered messenger, neglected scripture, leaving trade, and dispersing after prayer frame my lesson.","Qur’an 62"],
  ["Surah Al-Munafiqun","Hypocrites name me through polished speech, false oaths, arrogance, and wealth or children distracting from remembrance.","Qur’an 63"],
  ["Surah At-Taghabun","Mutual loss and gain name the final Day, while family tests, capacity, listening, and generous lending shape readiness.","Qur’an 64"],
  ["Surah At-Talaq","Divorce names me, regulating timing, witnesses, housing, pregnancy, maintenance, and unexpected provision through taqwa.","Qur’an 65"],
  ["Surah At-Tahrim","Prohibition names a private household incident before repentance, family responsibility, two disbelieving wives, and two believing women appear.","Qur’an 66"],
  ["Surah Al-Mulk","Dominion names me; death and life test excellence, layered heavens invite repeated inspection, and warnings question rejected messengers.","Qur’an 67"],
  ["Surah Al-Qalam","The Pen names me; character, slander, garden owners withholding the poor, the fish companion, and patience fill my warning.","Qur’an 68"],
  ["Surah Al-Haqqah","The Inevitable Reality names me; destroyed nations, trumpet, lifted earth, records in right or left, and revelation’s truth follow.","Qur’an 69"],
  ["Surah Al-Ma‘arij","Ways of ascent name me; impatient humanity, disciplined prayer, protected trusts, and a Day whose ransom includes everyone unfold.","Qur’an 70"],
  ["Surah Nuh","One prophet names my entire plea: public and private invitation, seeking forgiveness, cosmic signs, stubborn leaders, and final flood.","Qur’an 71"],
  ["Surah Al-Jinn","Unseen listeners name me after hearing astonishing recitation, rejecting divine offspring, and learning limits on unseen knowledge.","Qur’an 72"],
  ["Surah Al-Muzzammil","The wrapped one names me; night prayer, measured recitation, heavy revelation, patience, and a later easing of the schedule follow.","Qur’an 73"],
  ["Surah Al-Muddaththir","The cloaked one names me; rise and warn, purify, avoid self-favor, a stubborn denier, Saqar, and nineteen keepers appear.","Qur’an 74"],
  ["Surah Al-Qiyamah","Resurrection names me; the self-reproaching soul, assembled bones, hurried recitation, radiant faces, and life’s final passage unfold.","Qur’an 75"],
  ["Surah Al-Insan","Humanity names me; mixed-drop creation, choice, vows, feeding without return, patience, shaded gardens, and a measured revelation appear.","Qur’an 76"],
  ["Surah Al-Mursalat","Those sent forth name my opening oaths, followed by repeated ruin warnings and signs from creation to final division.","Qur’an 77"],
  ["Surah An-Naba’","The Great News names me; earth, mountains, pairs, sleep, night, day, seven heavens, gardens, trumpet, and final regret assemble.","Qur’an 78"],
  ["Surah An-Nazi‘at","Those who pull forth name me; Musa and Pharaoh interrupt scenes of extraction, cosmic construction, earth’s spread, and the Hour.","Qur’an 79"],
  ["Surah ‘Abasa","A frown names my opening correction when a blind seeker came, before human creation, food, and family flight on Judgment Day.","Qur’an 80"],
  ["Surah At-Takwir","Folding up names the sun’s end; stars fall, mountains move, the buried girl is questioned, records open, and revelation is defended.","Qur’an 81"],
  ["Surah Al-Infitar","Splitting names the sky’s rupture, scattered stars, burst seas, opened graves, recording angels, and the Day of no independent power.","Qur’an 82"],
  ["Surah Al-Mutaffifin","Those who give less name me; dishonest measurement opens before records of wicked and righteous and mocked believers reverse positions.","Qur’an 83"],
  ["Surah Al-Inshiqaq","Splitting open names the obedient sky, leveled earth, human striving, records behind backs, and stages passed one after another.","Qur’an 84"],
  ["Surah Al-Buruj","Constellations name my oath; trench-makers persecute believers, Allah’s grip is severe, and a glorious recitation rests in a preserved tablet.","Qur’an 85"],
  ["Surah At-Tariq","The night visitor names a piercing star, while guarded souls, reproductive origin, hidden secrets, returning rain, and decisive speech follow.","Qur’an 86"],
  ["Surah Al-A‘la","The Most High names me; creation, proportion, pasture, eased recitation, successful purification, and scriptures of Ibrahim and Musa appear.","Qur’an 87"],
  ["Surah Al-Ghashiyah","The Overwhelming Event names me; humbled and joyful faces precede reflection on camel, sky, mountains, and earth.","Qur’an 88"],
  ["Surah Al-Fajr","Dawn names my oath; ‘Ad, Thamud, Pharaoh, mistaken wealth judgments, neglected vulnerable people, and the tranquil soul conclude.","Qur’an 89"],
  ["Surah Al-Balad","The City names me; human struggle, freeing a person, feeding in famine, steep ascent, and two final groups define worth.","Qur’an 90"],
  ["Surah Ash-Shams","The sun names layered cosmic oaths before a soul’s moral capacity and Thamud’s destruction illustrate purification and corruption.","Qur’an 91"],
  ["Surah Al-Layl","Night names me; giving with taqwa and withholding with self-sufficiency lead toward ease or hardship through contrasting paths.","Qur’an 92"],
  ["Surah Ad-Duha","Morning brightness names reassurance after apparent pause: no abandonment, a better future, remembered care, and duties toward vulnerable people.","Qur’an 93"],
  ["Surah Ash-Sharh","Expansion names relief of burden and raised mention, repeating ease beside hardship before commanding renewed effort and longing.","Qur’an 94"],
  ["Surah At-Tin","The fig names an oath with olive, Sinai, and secure city before humanity’s finest form and lowest decline are contrasted.","Qur’an 95"],
  ["Surah Al-‘Alaq","A clinging substance names human origin after the first command to read, followed by the self-sufficient transgressor and commanded prostration.","Qur’an 96"],
  ["Surah Al-Qadr","Decree names a night better than a thousand months when angels and the Spirit descend with peace until dawn.","Qur’an 97"],
  ["Surah Al-Bayyinah","Clear proof names a messenger reciting purified pages, sincere worship, prayer, zakah, and contrasting final communities.","Qur’an 98"],
  ["Surah Az-Zalzalah","Earthquake names the earth’s final convulsion, released burdens, reported news, scattered people, and atom-weight deeds made visible.","Qur’an 99"],
  ["Surah Al-‘Adiyat","Charging horses name opening oaths whose sparks and dust expose human ingratitude, love of wealth, opened graves, and revealed hearts.","Qur’an 100"],
  ["Surah Al-Qari‘ah","The Striking Calamity names people like moths, mountains like wool, and lives decided by heavy or light scales.","Qur’an 101"],
  ["Surah At-Takathur","Competition for increase names distraction that lasts to graves before certainty, Fire, and questioning about blessings.","Qur’an 102"],
  ["Surah Al-‘Asr","Time names my oath that humanity loses except through faith, righteous action, truth, and patience.","Qur’an 103"],
  ["Surah Al-Humazah","A backbiting slanderer names my warning, hoarded wealth promises false permanence, and a crushing fire reaches hearts.","Qur’an 104"],
  ["Surah Al-Fil","The elephant names an army stopped from the Sacred House by flocking birds and baked-clay stones.","Qur’an 105"],
  ["Surah Quraysh","A tribe names me through winter and summer journeys before worship of the House’s Lord and gratitude for food and safety.","Qur’an 106"],
  ["Surah Al-Ma‘un","Small kindness names me after denial appears through mistreating orphans, neglecting the poor, heedless performative prayer, and withholding aid.","Qur’an 107"],
  ["Surah Al-Kawthar","Abundant good names a gift that leads to prayer and sacrifice while the hater is declared cut off.","Qur’an 108"],
  ["Surah Al-Kafirun","Disbelievers name a direct declaration refusing religious compromise while ending with distinct accountability for worship.","Qur’an 109"],
  ["Surah An-Nasr","Divine help names crowds entering the faith after victory, followed not by pride but glorification and seeking forgiveness.","Qur’an 110"],
  ["Surah Al-Masad","Palm fiber names the punishment carried by Abu Lahab’s wife after wealth fails him and flame surrounds them.","Qur’an 111"],
  ["Surah Al-Ikhlas","Sincerity names four compact verses declaring divine oneness, self-sufficiency, no parenthood, and no equal.","Qur’an 112"],
  ["Surah Al-Falaq","Daybreak names the Lord sought against created evil, darkness, harmful spells, and envy.","Qur’an 113"],
  ["Surah An-Nas","Humanity names the Lord, King, and God sought against a retreating whisperer from jinn or people.","Qur’an 114"],
  ["Ayat al-Kursi","Life without slumber, complete ownership, permission-bound intercession, encompassing knowledge, a vast Seat, and effortless preservation identify me.","Qur’an 2:255"],
  ["The final two verses of Surah Al-Baqarah","A Messenger and believers affirm shared faith, then two prayers reject unbearable burden and seek pardon, mercy, and help.","Qur’an 2:285–286"],
  ["The Verse of Light","A niche, lamp, glass like a brilliant star, blessed oil, and layered illumination form my central parable.","Qur’an 24:35"],
  ["The Verse of Debt","Deferred obligations, a scribe, witnesses, dictated terms, travel collateral, and guarded testimony make me the Qur’an’s longest verse.","Qur’an 2:282"],
  ["The verse of mubahalah","After knowledge about Isa, both sides are called to gather children, women, and selves before invoking Allah against liars.","Qur’an 3:61"],
  ["The purification passage in Surah Al-Ahzab","Household instructions frame me, and I state Allah’s will to remove impurity and purify the People of the House.","Qur’an 33:33"],
  ["Nuh’s ark","Eyes and revelation supervised my construction; pairs boarded, waves rose like mountains, and Al-Judi received me.","Qur’an 11:37–44"],
  ["Salih’s she-camel","I was a visible sign with a reserved drinking day, and touching me with harm triggered promised punishment.","Qur’an 7:73; 26:155–158"],
  ["Musa’s staff","I swallowed staged magic, split a sea, drew springs from stone, and appeared as a moving serpent.","Qur’an 7:107–117; 2:60; 26:63"],
  ["Musa’s shining hand","I emerged bright without disease after being drawn close, serving as a second sign beside a staff.","Qur’an 20:22; 28:32"],
  ["The calf of Samiri","I had a body and a lowing sound, became an object of worship, and ended burned and scattered at sea.","Qur’an 20:88–97"],
  ["The stone of twelve springs","A staff struck me, twelve water sources burst forth, and every tribe knew its drinking place.","Qur’an 2:60"],
  ["Manna","I descended with quails as wholesome provision for the Children of Israel in the wilderness.","Qur’an 2:57"],
  ["Quails","I arrived beside manna as food after shade from clouds covered a traveling people.","Qur’an 2:57"],
  ["The Ark of the Covenant","A sign of Talut’s kingship, I returned carrying tranquility and relics from the families of Musa and Harun.","Qur’an 2:248"],
  ["Yusuf’s shirt","False blood covered me once, a rear tear revealed truth later, and my scent and touch finally restored sight.","Qur’an 12:18; 12:25–28; 12:93–96"],
  ["The king’s measuring cup in Surah Yusuf","I was placed in a brother’s bag, announced missing, and used within a lawful plan to keep him.","Qur’an 12:70–76"],
  ["Sulayman’s hoopoe","My absence drew inspection, my report concerned Saba, and I carried a concise letter to its queen.","Qur’an 27:20–28"],
  ["Sulayman’s ant","I recognized an approaching army, warned my colony against accidental crushing, and prompted a grateful smile.","Qur’an 27:18–19"],
  ["The throne of the Queen of Saba","A powerful court discussed transporting me, knowledge moved me in a glance, and disguise tested my recognition.","Qur’an 27:38–42"],
  ["Sulayman’s glass floor","I appeared like deep water, caused a queen to uncover her shins, and preceded her declaration of submission.","Qur’an 27:44"],
  ["Dawud’s armor","Iron was softened and measured links were commanded so that I could protect people from violence.","Qur’an 21:80; 34:10–11"],
  ["Sulayman’s spring of molten copper","I flowed by divine permission while wind and jinn also served a kingdom unlike ordinary rule.","Qur’an 34:12"],
  ["Dhul-Qarnayn’s barrier","Iron blocks and poured copper formed me between two mountains against Ya’juj and Ma’juj until a promised leveling.","Qur’an 18:93–98"],
  ["The fish of Musa’s journey","I escaped at the meeting of seas, became the forgotten sign, and forced two travelers to retrace their steps.","Qur’an 18:60–64"],
  ["The damaged boat in Surah Al-Kahf","Poor workers owned me; a deliberate defect looked cruel until a king’s seizure policy explained it.","Qur’an 18:71; 18:79"],
  ["The adhan","A human voice announces divine greatness, testimony, prayer, success, and the arrival of each appointed worship time.","Sahih al-Bukhari 604"],
  ["Wudu","Face, arms, head, and feet define my Qur’anic sequence before prayer, with purification rather than hardship as my purpose.","Qur’an 5:6"],
  ["Tayammum","Clean earth replaces unavailable water for specific states, wiping face and hands without pretending water was used.","Qur’an 5:6"],
  ["The qiblah","Faces turned from an earlier direction toward the Sacred Mosque, testing who followed the Messenger.","Qur’an 2:142–150"],
  ["Salah","Remembering Allah is my stated purpose; appointed times, bodily actions, recitation, and direction organize my daily return.","Qur’an 20:14; 4:103"],
  ["Jumu‘ah prayer","A call on Friday requires leaving trade, followed by permission to disperse and seek Allah’s bounty.","Qur’an 62:9–10"],
  ["Sawm of Ramadan","Dawn and sunset bound me, desire is restrained, illness and travel receive ease, and taqwa is my stated aim.","Qur’an 2:183–187"],
  ["Zakah","Eight recipient categories govern my distribution, purification describes my effect, and hoarding contradicts my social purpose.","Qur’an 9:60; 9:103"],
  ["Hajj","Known months, ‘Arafah, remembrance, sacrifice, no obscenity or dispute, and a House of ancient worship identify me.","Qur’an 2:197–203; 22:27–37"],
  ["‘Umrah","I share ihram, tawaf, and sa‘i with Hajj but can be completed outside Hajj’s fixed season.","Qur’an 2:196; Sahih al-Bukhari 1773"],
  ["Barzakh","I am a barrier after death and before resurrection, blocking a requested return to worldly action.","Qur’an 23:99–100"],
  ["The trumpet","One blast overwhelms creation, another raises watchers, and an angelic caller marks transition between worlds.","Qur’an 39:68"],
  ["Resurrection","Scattered bones are reassembled down to fingertips, graves release occupants, and denial meets embodied return.","Qur’an 75:3–4; 22:7"],
  ["The Gathering","Flattened earth, exposed ranks, a caller, and none left behind distinguish my universal assembly.","Qur’an 18:47–49"],
  ["The records of deeds","Right hands celebrate me, left or rear hands dread me, and no small or great act escapes my count.","Qur’an 17:13–14; 18:49; 69:19–32"],
  ["The Scale","Mustard-seed precision, heavy success, and light loss describe my just weighing without neglected deeds.","Qur’an 21:47; 101:6–9"],
  ["The bridge over Hell","Believers cross according to deeds while hooks seize whom they are commanded to take.","Sahih Muslim 183"],
  ["The Prophet’s basin","A drink prevents later thirst, yet some approaching people are turned away after changing course.","Sahih al-Bukhari 6579"],
  ["Al-A‘raf","I am a height between two destinations where people recognize inhabitants by their marks and call toward Paradise.","Qur’an 7:46–49"],
  ["Intercession","I belongs entirely to Allah, occurs only by permission, and cannot be treated as independent influence.","Qur’an 2:255; 39:44"],
  ["Taqwa","Fasting aims at me, provision accompanies me, justice approaches me, and unseen restraint matters more than appearance.","Qur’an 2:183; 5:8; 65:2–3"],
  ["Ikhlas","I strip worship of competing masters and public bargaining so religion is directed sincerely to Allah alone.","Qur’an 39:2–3; 98:5"],
  ["Tawakkul","Consultation and decision precede me; responsible means remain, but the outcome is entrusted beyond human control.","Qur’an 3:159"],
  ["Sabr","Prayer accompanies me, hardship tests me, anger challenges me, and unlimited reward is promised to those who embody me.","Qur’an 2:153–157; 39:10"],
  ["Shukr","Increase follows me, denial opposes me, and using blessing responsibly reveals more than verbal praise.","Qur’an 14:7; 27:19"],
  ["Tawbah","Regret begins me, stopping and reform prove me, rights may outlast private remorse, and despair must not block return.","Qur’an 39:53–54; 66:8"],
  ["Ihsan","Worship as if seen defines my inward height, while excellence toward others and doing what is beautiful express me outwardly.","Sahih Muslim 8a; Qur’an 16:90"],
  ["Amanah","Trusts must return to owners, judgment must be just, and even heavens and mountains recoiled from my burden.","Qur’an 4:58; 33:72"],
  ["Ghibah","Truth does not excuse me: I mention an absent person with what they dislike and resemble eating dead flesh.","Qur’an 49:12; Sahih Muslim 2589"],
  ["Islah","I repair what conflict broke, pursue peace without concealing injustice, and can make private conversation praiseworthy.","Qur’an 4:114; 49:9–10"],
  ["Al-Buraq","Larger than a donkey and smaller than a mule, I carried the Prophet on the Night Journey before the ascent.","Sahih Muslim 162a"],
  ["The Black Stone","Set into one corner of the Ka‘bah, I mark the tawaf circuit and was touched by the Prophet without being treated as independently powerful.","Sahih al-Bukhari 1597; 1610"]
];

const v52RiddleReplacements = {
  'RIDDLE-071': [
    'Iblis',
    'Fire was my argument against clay; respite was my request, misguidance my vow, and sincere servants the exception I admitted.',
    "Qur'an 7:12-18; 15:39-40"
  ],
  'RIDDLE-072': [
    'The crow sent to a son of Adam',
    'After the first recorded killing, Allah sent me to scratch the ground and expose a murderer\'s ignorance of how to cover his brother.',
    "Qur'an 5:31"
  ],
  'RIDDLE-073': [
    'The ant of Sulayman',
    'I recognized an approaching army, warned my colony to enter its homes, and made a king-prophet smile at speech others might miss.',
    "Qur'an 27:18-19"
  ],
  'RIDDLE-074': [
    "Musa's white-hand sign",
    'Drawn from beneath an arm, I appeared luminous without disease and accompanied the staff among signs carried toward Pharaoh.',
    "Qur'an 20:22; 27:12; 28:32"
  ],
  'RIDDLE-075': [
    "The king's measuring cup",
    "Placed in a brother's bag, I triggered a public search and allowed Yusuf to retain him under the law applied by his own family.",
    "Qur'an 12:70-76"
  ],
  'RIDDLE-076': [
    'The whale of Yunus',
    'I swallowed a blameworthy passenger after lots were drawn; glorification kept his confinement from lasting until resurrection.',
    "Qur'an 37:141-144"
  ],
  'RIDDLE-077': [
    'The gourd plant of Yunus',
    'After a sick prophet was cast onto open ground, Allah caused me to grow over him as part of his recovery.',
    "Qur'an 37:145-146"
  ],
  'RIDDLE-079': [
    'The dog of the cave',
    'My forelegs stretched across an entrance while sleepers were turned from side to side; later guesses counted me alongside their disputed number.',
    "Qur'an 18:18; 18:22"
  ],
  'RIDDLE-081': [
    'The boat in Surah Al-Kahf',
    'Poor workers depended on me, a hidden teacher damaged me, and a king seizing every sound vessel explained why the defect was protective.',
    "Qur'an 18:71; 18:79"
  ],
  'RIDDLE-082': [
    'The wall in Surah Al-Kahf',
    'Raised without payment in an unwelcoming town, I concealed treasure for two orphans until maturity because their father had been righteous.',
    "Qur'an 18:77; 18:82"
  ],
  'RIDDLE-083': [
    "Sulayman's letter",
    'A hoopoe carried me to a queen; I opened with Allah\'s name, identified my royal sender, and demanded submission rather than arrogance.',
    "Qur'an 27:28-31"
  ],
  'RIDDLE-084': [
    'The glass floor',
    'A queen mistook me for deep water and uncovered her legs before learning that my transparent surface belonged to a refined palace.',
    "Qur'an 27:44"
  ],
  'RIDDLE-085': [
    'Sidrat al-Muntaha',
    'Near the Garden of Refuge, I marked a boundary during the ascent; revelation describes what covered me while the Prophet\'s sight remained steady.',
    "Qur'an 53:13-18"
  ],
  'RIDDLE-086': [
    'Al-Kawthar',
    'A short surah announces that I was granted abundantly, then joins prayer and sacrifice before declaring the enemy cut off.',
    "Qur'an 108:1-3"
  ],
  'RIDDLE-087': [
    'The Preserved Tablet',
    'A glorious recitation is said to rest within me after a surah recalls armies, the people of the ditch, and Allah\'s encompassing power.',
    "Qur'an 85:17-22"
  ],
  'RIDDLE-088': [
    'Maqam Ibrahim',
    'Revelation calls me a clear sign and directs worshippers to take a place of prayer from the standing place associated with Ibrahim.',
    "Qur'an 2:125; 3:97"
  ],
  'RIDDLE-089': [
    'Cave Hira',
    'Before public revelation, the Prophet withdrew to me for worship; an angel came here with the command to read.',
    'Sahih al-Bukhari 3'
  ],
  'RIDDLE-090': [
    'The Ansar',
    'We gave refuge before later arrivals came, loved those who migrated, felt no resentment over what they received, and preferred them despite need.',
    "Qur'an 9:100; 59:9"
  ],
  'RIDDLE-091': [
    'The Muhajirun',
    'Driven from homes and property while seeking Allah\'s favor, we are named before the hosts who welcomed us and preferred us over themselves.',
    "Qur'an 59:8-9"
  ],
  'RIDDLE-092': [
    'The People of the Ditch',
    'A fire-filled trench defines our account; persecutors sat watching believers punished for faith in the Almighty, the Praiseworthy.',
    "Qur'an 85:4-9"
  ],
  'RIDDLE-093': [
    'The People of the Garden in Surah Al-Qalam',
    'We swore to harvest early without making an exception, planned to exclude the poor, then found our orchard devastated and recognized our wrongdoing.',
    "Qur'an 68:17-33"
  ],
  'RIDDLE-094': [
    "The believing man from Pharaoh's family",
    'I concealed faith, challenged the plan to kill Musa, recalled earlier destroyed peoples, and was protected from the schemes I opposed.',
    "Qur'an 40:28-45"
  ],
  'RIDDLE-096': [
    'Zayd ibn Harithah',
    'I am the companion named directly in the Qur\'an within a passage correcting adoption-era naming and marriage assumptions.',
    "Qur'an 33:37"
  ],
  'RIDDLE-097': [
    'Abu Lahab',
    'A surah condemns my hands and earnings, says my wealth will not benefit me, and links my fate to a blazing fire.',
    "Qur'an 111:1-3"
  ],
  'RIDDLE-098': [
    'The wife of Abu Lahab',
    'I appear as a carrier of firewood with a fiber rope around my neck in the same surah that condemns my husband.',
    "Qur'an 111:4-5"
  ],
  'RIDDLE-100': [
    "Musa's mother",
    'I was inspired to nurse my infant, place him in a river when afraid, resist grief, and receive him back after other nurses were refused.',
    "Qur'an 28:7-13"
  ],
  'RIDDLE-101': [
    "Musa's sister",
    'Told to follow from a distance, I watched unseen and directed Pharaoh\'s household toward a family able to care sincerely for the infant.',
    "Qur'an 28:11-12"
  ],
  'RIDDLE-102': [
    "Ya'juj and Ma'juj",
    'A vulnerable people described our corruption, a just ruler built a barrier against us, and revelation foretells its collapse and our later surge.',
    "Qur'an 18:94-99; 21:96"
  ],
  'RIDDLE-106': [
    'The Beast of the Earth',
    'When the decree arrives, I emerge from the earth and address people because they did not hold certainty about Allah\'s signs.',
    "Qur'an 27:82"
  ],
  'RIDDLE-110': [
    'Sijjin',
    'The record of the wicked is placed in me; the passage asks what could explain me and then calls that record inscribed.',
    "Qur'an 83:7-9"
  ],
  'RIDDLE-111': [
    'Illiyyun',
    'The record of the righteous is placed in me, described as inscribed and witnessed by those brought near.',
    "Qur'an 83:18-21"
  ],
  'RIDDLE-120': [
    'Tasnim',
    'I am the spring whose mixture enters the drink of the righteous and from which those brought near drink directly.',
    "Qur'an 83:27-28"
  ],
  'RIDDLE-127': [
    'Salsabil',
    'A cup in Paradise is mixed with ginger and drawn from a spring whose name suggests an easy, flowing drink.',
    "Qur'an 76:17-18"
  ],
  'RIDDLE-131': [
    'Zaqqum',
    'I grow from the depths of Hell, bear fruit compared to devils\' heads, and become food that fills condemned stomachs.',
    "Qur'an 37:62-68; 44:43-46"
  ],
  'RIDDLE-132': [
    'The sealed nectar',
    'The righteous are given me as a pure drink whose seal is musk, and competitors are told to compete for that end.',
    "Qur'an 83:25-26"
  ],
  'RIDDLE-141': [
    'The believing man in Surah Ya-Sin',
    'I came running from the farthest part of the city, urged my people to follow unpaid messengers, and after entering Paradise wished they knew my honor.',
    "Qur'an 36:20-27"
  ],
  'RIDDLE-147': [
    'The smoke',
    'A clear form of me is awaited from the sky, enveloping people in a painful punishment before a temporary removal and return.',
    "Qur'an 44:10-16"
  ],
  'RIDDLE-155': [
    'The companions of the right',
    'A surah places us among thornless lote trees, layered fruit, extended shade, flowing water, and honored companionship.',
    "Qur'an 56:27-40"
  ],
  'RIDDLE-186': [
    'The foremost',
    'Repeated first in faith and obedience, we are brought near in gardens of bliss, with many from earlier peoples and fewer from later ones.',
    "Qur'an 56:10-26"
  ],
  'RIDDLE-233': [
    "Pharaoh's magicians",
    'We arrived seeking reward and status, recognized the staff\'s sign, fell in prostration, and held to faith despite threats of mutilation and crucifixion.',
    "Qur'an 7:113-126; 20:70-73"
  ],
  'RIDDLE-240': [
    'The man who warned Musa',
    'I came running from the farthest part of the city to report that leaders were plotting murder and to advise immediate departure.',
    "Qur'an 28:20-21"
  ]
};

if (v52RiddleRows.length !== 230) throw new Error(`Expected 230 v52 riddles, found ${v52RiddleRows.length}.`);

cards.push(...v52RiddleRows.map((row, index) => {
  const id = `RIDDLE-${String(index + 71).padStart(3, '0')}`;
  const [answer, clues, source] = v52RiddleReplacements[id] || row;
  return {type: 'identity', prompt: clues, answer, source, id};
}));
