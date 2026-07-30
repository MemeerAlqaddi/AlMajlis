/* Al Majlis v47: stable layout, refined Islam vs Culture controls, flexible game exit, gray dark marble. */
{
  const cultureCards = [
    {type:"culture",id:"CULTURE-001",prompt:"Islam requires every married woman to replace her family name with her husband’s family name.",answer:"Culture",classification:"culture",arabic:"ٱدْعُوهُمْ لِآبَآئِهِمْ هُوَ أَقْسَطُ عِندَ ٱللَّهِ",english:"Call them by their fathers’ names; that is more just in the sight of Allah.",evidence:"The verse concerns preserving truthful lineage. Islam does not establish replacing a woman’s family name with her husband’s as a marriage requirement.",source:"Qur’an 33:5"},
    {type:"culture",id:"CULTURE-002",prompt:"A person is more honorable before Allah because of race, tribe, nationality, or family name.",answer:"Culture",classification:"culture",arabic:"إِنَّ أَكْرَمَكُمْ عِندَ ٱللَّهِ أَتْقَىٰكُمْ",english:"The most honored of you before Allah is the one most mindful of Him.",evidence:"People and tribes exist so that people may know one another. Honor before Allah is based on taqwa, not ancestry or nationality.",source:"Qur’an 49:13"},
    {type:"culture",id:"CULTURE-003",prompt:"Women may be denied inheritance so family wealth stays with the men.",answer:"Culture",classification:"culture",arabic:"لِّلرِّجَالِ نَصِيبٌ مِّمَّا تَرَكَ ٱلْوَٰلِدَانِ وَٱلْأَقْرَبُونَ وَلِلنِّسَآءِ نَصِيبٌ مِّمَّا تَرَكَ ٱلْوَٰلِدَانِ وَٱلْأَقْرَبُونَ",english:"Men have a share of what parents and close relatives leave, and women have a share of what they leave.",evidence:"The Qur’an explicitly establishes inheritance shares for both men and women. A family custom cannot erase a share Allah has made obligatory.",source:"Qur’an 4:7"},
    {type:"culture",id:"CULTURE-004",prompt:"The mahr belongs to the bride herself.",answer:"Islam",classification:"islam",arabic:"وَءَاتُوا۟ ٱلنِّسَآءَ صَدُقَـٰتِهِنَّ نِحْلَةً",english:"Give women their bridal gifts graciously.",evidence:"The command addresses the women as the recipients of their mahr. It belongs to the bride unless she willingly gives some of it away.",source:"Qur’an 4:4"},
    {type:"culture",id:"CULTURE-005",prompt:"Parents must be obeyed even when they command something that disobeys Allah.",answer:"Culture",classification:"culture",arabic:"فَلَا تُطِعْهُمَا ۖ وَصَاحِبْهُمَا فِى ٱلدُّنْيَا مَعْرُوفًا",english:"Do not obey them, but continue to keep their company in this world with kindness.",evidence:"The verse joins two duties: refusing a parent’s command to disobey Allah while continuing to treat the parent with goodness.",source:"Qur’an 31:15"},
    {type:"culture",id:"CULTURE-006",prompt:"Lowering the gaze and guarding modesty are responsibilities for men too.",answer:"Islam",classification:"islam",arabic:"قُل لِّلْمُؤْمِنِينَ يَغُضُّوا۟ مِنْ أَبْصَـٰرِهِمْ وَيَحْفَظُوا۟ فُرُوجَهُمْ",english:"Tell the believing men to lower their gaze and guard their chastity.",evidence:"The Qur’an directly gives this command to believing men before giving corresponding guidance to believing women.",source:"Qur’an 24:30–31"},
    {type:"culture",id:"CULTURE-007",prompt:"Protecting the family’s reputation is more important than telling the truth or standing for justice.",answer:"Culture",classification:"culture",arabic:"كُونُوا۟ قَوَّٰمِينَ بِٱلْقِسْطِ شُهَدَآءَ لِلَّهِ وَلَوْ عَلَىٰٓ أَنفُسِكُمْ أَوِ ٱلْوَٰلِدَيْنِ وَٱلْأَقْرَبِينَ",english:"Stand firmly for justice as witnesses for Allah, even against yourselves, parents, or close relatives.",evidence:"Family loyalty cannot be used to conceal injustice. The Qur’an expressly places truthful justice above personal and family interests.",source:"Qur’an 4:135"},
    {type:"culture",id:"CULTURE-008",prompt:"You should ask permission before entering another person’s home, even when you know them well.",answer:"Islam",classification:"islam",arabic:"لَا تَدْخُلُوا۟ بُيُوتًا غَيْرَ بُيُوتِكُمْ حَتَّىٰ تَسْتَأْنِسُوا۟ وَتُسَلِّمُوا۟ عَلَىٰٓ أَهْلِهَا",english:"Do not enter homes other than your own until you seek permission and greet their people.",evidence:"Familiarity does not remove another household’s privacy. Seeking permission and offering salam are Qur’anic manners of entry.",source:"Qur’an 24:27"},
    {type:"culture",id:"CULTURE-009",prompt:"A woman can be married without her consent as long as her family approves.",answer:"Culture",classification:"culture",arabic:"أَنَّ أَبَاهَا زَوَّجَهَا وَهِىَ ثَيِّبٌ فَكَرِهَتْ ذَلِكَ فَأَتَتْ رَسُولَ اللَّهِ ﷺ فَرَدَّ نِكَاحَهُ",english:"Her father married her when she did not want the marriage, so the Messenger of Allah ﷺ invalidated it.",evidence:"Family approval does not replace the woman’s consent. The Prophet ﷺ rejected a marriage imposed on Khansa bint Khidam against her wishes.",source:"Sahih al-Bukhari 5138"},
    {type:"culture",id:"CULTURE-010",prompt:"Mocking another group’s ethnicity, accent, appearance, or background is forbidden.",answer:"Islam",classification:"islam",arabic:"لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ عَسَىٰٓ أَن يَكُونُوا۟ خَيْرًا مِّنْهُمْ",english:"Let no people ridicule another people; those mocked may be better than them.",evidence:"Mockery based on ethnicity, accent, appearance, or background falls under the Qur’an’s prohibition against ridiculing others.",source:"Qur’an 49:11"},
    {type:"culture",id:"CULTURE-011",prompt:"Backbiting is acceptable as long as what you say about the person is true.",answer:"Culture",classification:"culture",arabic:"وَلَا يَغْتَب بَّعْضُكُم بَعْضًا ۚ أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا فَكَرِهْتُمُوهُ",english:"Do not backbite one another. Would any of you like to eat the flesh of a dead brother? You would hate it.",evidence:"Backbiting is precisely speaking truthfully about someone in a way they would dislike. If the statement is false, it becomes slander as well.",source:"Qur’an 49:12; Sahih Muslim 2589"},
    {type:"culture",id:"CULTURE-012",prompt:"Islam requires extravagant wedding spending to honor the families properly.",answer:"Culture",classification:"culture",arabic:"وَكُلُوا۟ وَٱشْرَبُوا۟ وَلَا تُسْرِفُوٓا۟ ۚ إِنَّهُۥ لَا يُحِبُّ ٱلْمُسْرِفِينَ",english:"Eat and drink, but do not be excessive. Surely He does not love excess.",evidence:"Islam permits celebration but does not make extravagance a religious duty. The general Qur’anic principle is to avoid excess.",source:"Qur’an 7:31"},
    {type:"culture",id:"CULTURE-013",prompt:"Believers should work to reconcile two groups of Muslims who are in conflict.",answer:"Islam",classification:"islam",arabic:"إِنَّمَا ٱلْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا۟ بَيْنَ أَخَوَيْكُمْ",english:"The believers are brothers and sisters, so make peace between your fellow believers.",evidence:"The Qur’an treats reconciliation as an active responsibility when conflict arises between believers.",source:"Qur’an 49:10"},
    {type:"culture",id:"CULTURE-014",prompt:"Girls are less valuable to a family than boys.",answer:"Culture",classification:"culture",arabic:"يَهَبُ لِمَن يَشَآءُ إِنَـٰثًا وَيَهَبُ لِمَن يَشَآءُ ٱلذُّكُورَ",english:"He grants daughters to whom He wills and grants sons to whom He wills.",evidence:"Both daughters and sons are gifts Allah chooses to give. The Qur’an also condemns the pre-Islamic shame and grief attached to the birth of a girl.",source:"Qur’an 42:49–50; 16:58–59"},
    {type:"culture",id:"CULTURE-015",prompt:"A Muslim should stand for justice even when doing so goes against personal or family interests.",answer:"Islam",classification:"islam",arabic:"كُونُوا۟ قَوَّٰمِينَ بِٱلْقِسْطِ شُهَدَآءَ لِلَّهِ وَلَوْ عَلَىٰٓ أَنفُسِكُمْ أَوِ ٱلْوَٰلِدَيْنِ وَٱلْأَقْرَبِينَ",english:"Stand firmly for justice as witnesses for Allah, even against yourselves, parents, or close relatives.",evidence:"Justice is not suspended when truth is personally costly. The verse explicitly includes oneself, parents, and close family.",source:"Qur’an 4:135"}
  ];

  modes.culture = ["Islam vs Culture","Read a statement, choose Islam or Culture, then see the evidence before continuing."];
  modeInstructions.culture = "Choose Islam when the statement is an Islamic teaching. Choose Culture when it is a custom or claim that is not an Islamic requirement. Culture does not automatically mean forbidden.";
  competitiveModes.add("culture");
  modeTimes.culture = 60;

  const baseDeckFor = deckFor;
  const baseConfigureControls = configureControls;
  const baseRender = render;
  const baseRenderClosedRound = renderClosedRound;
  const baseCurrentCardReport = currentCardReport;
  const baseCorrectHandler = $("correct").onclick;
  let cultureAnswered = false;
  let resumeCultureTimer = false;

  const isCultureMode = () => mode === "culture";
  deckFor = selectedMode => selectedMode === "culture" ? cultureCards : baseDeckFor(selectedMode);

  currentCardReport = function(){
    if(!isCultureMode()) return baseCurrentCardReport();
    const card=currentCard();
    return {cardId:card.id,mode:modes.culture[0],prompt:card.prompt,answer:`${card.answer} — ${card.evidence}`,source:card.source,contentVersion:"47"};
  };

  const style=document.createElement("style");
  style.textContent=`
  .cultureCard .question{font-size:clamp(1.45rem,5.6vw,2.45rem)!important;line-height:1.12!important;margin-bottom:0!important}
  .cultureChoices{display:grid;grid-template-columns:repeat(2,minmax(0,140px));justify-content:center;gap:12px;width:min(310px,92%);margin:24px auto 0}
  .cultureChoice{min-height:58px;border-radius:2px;border:1px solid var(--aqua);background:var(--surface);box-shadow:inset 0 0 0 3px transparent;color:var(--ink,#172126);font-family:var(--display);font-size:1rem;font-weight:400;letter-spacing:.04em}
  .cultureChoice:disabled{opacity:1}.cultureChoice.correctChoice{background:#1f765f;color:#fff;border-color:#1f765f}.cultureChoice.wrongChoice{background:#8d4343;color:#fff;border-color:#8d4343}.cultureChoice.unselectedChoice{opacity:.46}
  .cultureEvidence{width:min(560px,100%);max-height:min(48dvh,390px);overflow:auto;margin-top:14px;padding:15px 17px;border-radius:2px;border:1px solid var(--aqua);background:var(--surface);text-align:left;scrollbar-width:thin}
  .cultureEvidence[hidden]{display:none!important}.cultureVerdict{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-bottom:10px;border-bottom:1px solid var(--line)}.cultureVerdict strong{font-size:.72rem;letter-spacing:.12em;text-transform:uppercase}.cultureVerdict span{font-family:var(--display);font-size:1.22rem;color:var(--aqua-bright)}
  .cultureEvidenceLabel{margin:12px 0 5px;color:var(--aqua-bright);font-size:.62rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase}.cultureArabic{margin:0;color:var(--ink,#172126);font-family:"Noto Naskh Arabic","Amiri","Traditional Arabic",serif;font-size:clamp(1.05rem,3.4vw,1.32rem);line-height:1.8;text-align:right}.cultureEnglish{margin:0;color:var(--ink,#172126);font-family:var(--display);font-size:.9rem;line-height:1.48}.cultureExplanation{margin:0;color:var(--ink,#172126);font-size:.82rem;line-height:1.5}.cultureSource{display:block;margin-top:12px;padding-top:9px;border-top:1px solid var(--line);color:var(--aqua-bright);font-size:.72rem;font-weight:700}.cultureNote{margin:8px 0 0!important;color:var(--muted,#697477)!important;font-size:.68rem!important;line-height:1.4}
  #roundScreen .roundPanel{width:min(92vw,560px)!important}#roundScreen .matchScoreboard{display:block!important;margin:18px 0!important}#roundScreen .matchScoreboard[hidden]{display:none!important}#roundScreen .finalScores{padding:18px!important;border:1px solid rgba(49,111,123,.25)!important;border-radius:16px!important;background:rgba(49,111,123,.055)!important}
  @media(max-width:560px){.cultureChoices{gap:9px;width:min(286px,94%);margin-top:20px}.cultureChoice{min-height:54px}.cultureEvidence{padding:12px}.cultureEvidence p{font-size:.8rem}}
  `;
  document.head.appendChild(style);

  const choices=document.createElement("div");
  choices.id="cultureChoices"; choices.className="cultureChoices"; choices.hidden=true;
  const islam=document.createElement("button"); islam.type="button"; islam.className="cultureChoice"; islam.dataset.choice="islam"; islam.textContent="Islam";
  const culture=document.createElement("button"); culture.type="button"; culture.className="cultureChoice"; culture.dataset.choice="culture"; culture.textContent="Culture";
  choices.append(islam,culture);
  const evidence=document.createElement("div"); evidence.id="cultureEvidence"; evidence.className="cultureEvidence"; evidence.hidden=true;
  $("gameCard").insertBefore(choices,$("ref")); $("gameCard").insertBefore(evidence,$("ref"));

  const list=document.querySelector('.modeGroup[data-category="competitive"] .modeGroupList');
  if(list&&!list.querySelector('[data-mode="culture"]')){
    const button=document.createElement("button"); button.type="button"; button.className="setupMode"; button.dataset.mode="culture";
    button.innerHTML=`<strong>${modes.culture[0]}</strong><small>${modes.culture[1]}</small>`;
    button.onclick=()=>selectSetupMode("culture"); list.appendChild(button);
  }

  const notes=document.querySelector(".contentNotesCopy");
  if(notes){
    const note=document.createElement("p");
    note.innerHTML='<strong>Islam vs Culture</strong> uses clear, source-based statements. “Culture” means the claim is not itself an Islamic requirement; it does not automatically mean the custom is forbidden. Ambiguous or legitimately disputed rulings are excluded.';
    notes.insertBefore(note,notes.querySelector(".contentCaution"));
  }

  playPassTone=function(){
    primeAudio(); navigator.vibrate?.(45);
    playTone(311.13,{duration:.13,peak:.07,type:"triangle"});
    playTone(233.08,{delay:.095,duration:.17,peak:.075,type:"triangle"});
    playTone(164.81,{delay:.205,duration:.23,peak:.08,type:"sawtooth"});
  };

  configureControls=function(){
    baseConfigureControls();
    if(isCultureMode()){
      choices.hidden=false; evidence.hidden=true;
      $("skip").hidden=true; $("reveal").hidden=true; $("correct").hidden=true; $("finishRound").hidden=true; $("playTimer").hidden=false;
    }else{
      choices.hidden=true; evidence.hidden=true; $("finishRound").hidden=true; $("correct").hidden=false;
    }
  };

  function resetCulture(){
    cultureAnswered=false; resumeCultureTimer=false; evidence.hidden=true; evidence.replaceChildren(); choices.hidden=false;
    [...choices.children].forEach(b=>{b.disabled=false;b.classList.remove("correctChoice","wrongChoice","unselectedChoice")});
    $("correct").hidden=true;
  }

  render=function(){
    if(!isCultureMode()){ $("gameCard").classList.remove("cultureCard"); choices.hidden=true; evidence.hidden=true; baseRender(); return; }
    const card=currentCard(); updateGameContext();
    $("gameCard").classList.remove("ayahCard","reflectionCard","wordCard","dense","promptLong","promptVeryLong"); $("gameCard").classList.add("cultureCard");
    $("type").textContent="ISLAM VS CULTURE"; $("question").textContent=card.prompt; $("promptTransliteration").textContent=""; $("promptTranslation").textContent="";
    $("answer").hidden=true; $("answer").setAttribute("aria-hidden","true"); $("answerRule").hidden=true; $("decodeDialect").hidden=true; $("ref").hidden=true; $("reveal").hidden=true; $("skip").hidden=true; $("finishRound").hidden=true;
    resetCulture(); scheduleCardFit();
  };

  function answerCulture(choice){
    if(!isCultureMode()||cultureAnswered)return;
    cultureAnswered=true; resumeCultureTimer=pauseTimer();
    const card=currentCard(),correct=choice===card.classification;
    if(correct&&isCompetitive()){scores[activeSide]++;pointEvents.push({side:activeSide,cardId:card.id,undone:false})}
    correct?playSound("correct"):playPassTone();
    [...choices.children].forEach(b=>{b.disabled=true;if(b.dataset.choice===card.classification)b.classList.add("correctChoice");else if(b.dataset.choice===choice)b.classList.add("wrongChoice");else b.classList.add("unselectedChoice")});
    const verdict=document.createElement("div"); verdict.className="cultureVerdict";
    const result=document.createElement("strong"); result.textContent=correct?"Correct":"Not quite";
    const label=document.createElement("span"); label.textContent=card.answer; verdict.append(result,label);
    const arabicLabel=document.createElement("div"); arabicLabel.className="cultureEvidenceLabel"; arabicLabel.textContent=card.source.startsWith("Sahih")?"Hadith · Arabic":"Qur’an · Arabic";
    const arabic=document.createElement("p"); arabic.className="cultureArabic"; arabic.lang="ar"; arabic.dir="rtl"; arabic.textContent=card.arabic;
    const englishLabel=document.createElement("div"); englishLabel.className="cultureEvidenceLabel"; englishLabel.textContent="English meaning";
    const english=document.createElement("p"); english.className="cultureEnglish"; english.textContent=card.english;
    const explanationLabel=document.createElement("div"); explanationLabel.className="cultureEvidenceLabel"; explanationLabel.textContent="Why";
    const explanation=document.createElement("p"); explanation.className="cultureExplanation"; explanation.textContent=card.evidence;
    const source=document.createElement("small"); source.className="cultureSource"; source.textContent=card.source;
    const note=document.createElement("p"); note.className="cultureNote"; note.textContent="Culture does not automatically mean forbidden. It means the statement is not itself an Islamic requirement.";
    evidence.replaceChildren(verdict,arabicLabel,arabic,englishLabel,english,explanationLabel,explanation,source,note); evidence.hidden=false;
    $("correct").textContent="Next Statement"; $("correct").classList.add("primary"); $("correct").hidden=false; scheduleCardFit();
  }

  function nextCulture(){
    if(!cultureAnswered)return;
    const shouldResume=resumeCultureTimer; resumeCultureTimer=false; advance();
    if(shouldResume&&seconds>0&&!roundClosed)startTimer();
  }

  islam.onclick=()=>answerCulture("islam"); culture.onclick=()=>answerCulture("culture");
  $("correct").onclick=()=>isCultureMode()?nextCulture():baseCorrectHandler?.();

  function returnToGameModes(){
    closeDialog("exitSheet",{resume:false});
    pauseTimer();
    clearInterval(countdownTick);
    countdownTick=null;
    $("countdownScreen").hidden=true;
    $("roundScreen").hidden=true;
    mode=null;
    playStyle=null;
    document.querySelectorAll(".setupMode,.styleChoice").forEach(element=>element.classList.remove("selected"));
    document.querySelectorAll(".styleChoice").forEach(element=>element.disabled=false);
    $("matchField").hidden=true;
    $("beginGame").disabled=true;
    showScreen("setupScreen");
    showSetupStep("modeStep");
    if(selectedCategory) selectModeCategory(selectedCategory);
    else showCategoryChoices();
  }
  $("returnGameModes").onclick=returnToGameModes;

  renderClosedRound=function(){
    baseRenderClosedRound();
    if(!isCompetitive())return;
    updateMatchScoreboard();
    if(matchComplete)return;
    const latest=roundLog.at(-1);
    $("roundHeading").textContent=activeSide==="b"?`ROUND ${roundNumber} COMPLETE`:`ROUND ${roundNumber} SCORECARD`;
    $("roundScore").textContent=`${latest.label} earned ${latest.points} point${latest.points===1?"":"s"} this turn · ${sideLabel("a")} ${scores.a} — ${scores.b} ${sideLabel("b")}`;
  };
}
