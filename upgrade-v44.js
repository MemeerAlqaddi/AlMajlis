/* Al Majlis v46: stable countdown/gameplay layout, scorecard, pass sound, Islam vs Culture. */
{
  const cultureCards = [
    {type:"culture",id:"CULTURE-001",prompt:"Islam requires every married woman to replace her family name with her husband’s family name.",answer:"Culture",classification:"culture",evidence:"No Qur’anic verse or authentic hadith makes this a marriage requirement. The Qur’an emphasizes truthful attribution of known lineage.",source:"Qur’an 33:5"},
    {type:"culture",id:"CULTURE-002",prompt:"A person is more honorable before Allah because of race, tribe, nationality, or family name.",answer:"Culture",classification:"culture",evidence:"Peoples and tribes exist so people may know one another. Honor before Allah is based on taqwa—not ancestry.",source:"Qur’an 49:13"},
    {type:"culture",id:"CULTURE-003",prompt:"Women may be denied inheritance so family wealth stays with the men.",answer:"Culture",classification:"culture",evidence:"The Qur’an explicitly gives both men and women determined shares from what parents and close relatives leave.",source:"Qur’an 4:7"},
    {type:"culture",id:"CULTURE-004",prompt:"The mahr belongs to the bride herself.",answer:"Islam",classification:"islam",evidence:"Allah commands that women be given their bridal gifts graciously. It belongs to her unless she willingly gives from it.",source:"Qur’an 4:4"},
    {type:"culture",id:"CULTURE-005",prompt:"Parents must be obeyed even when they command something that disobeys Allah.",answer:"Culture",classification:"culture",evidence:"The Qur’an commands kindness to parents while making clear that they are not obeyed when they pressure a person toward disobedience to Allah.",source:"Qur’an 31:15"},
    {type:"culture",id:"CULTURE-006",prompt:"Lowering the gaze and guarding modesty are responsibilities for men too.",answer:"Islam",classification:"islam",evidence:"The Qur’an directly commands believing men to lower their gaze and guard their chastity before giving related guidance to believing women.",source:"Qur’an 24:30–31"},
    {type:"culture",id:"CULTURE-007",prompt:"Protecting the family’s reputation is more important than telling the truth or standing for justice.",answer:"Culture",classification:"culture",evidence:"Believers are commanded to stand firmly for justice even when the truth is against themselves, their parents, or close relatives.",source:"Qur’an 4:135"},
    {type:"culture",id:"CULTURE-008",prompt:"You should ask permission before entering another person’s home, even when you know them well.",answer:"Islam",classification:"islam",evidence:"The Qur’an instructs believers not to enter homes other than their own until they have sought permission and greeted the occupants.",source:"Qur’an 24:27"},
    {type:"culture",id:"CULTURE-009",prompt:"A woman can be married without her consent as long as her family approves.",answer:"Culture",classification:"culture",evidence:"The Prophet ﷺ required a woman’s permission for marriage and rejected forced marriage.",source:"Sahih Muslim 1419a; Sahih al-Bukhari 5138"},
    {type:"culture",id:"CULTURE-010",prompt:"Mocking another group’s ethnicity, accent, appearance, or background is forbidden.",answer:"Islam",classification:"islam",evidence:"The Qur’an forbids one people from ridiculing another, because those being mocked may be better than those mocking them.",source:"Qur’an 49:11"},
    {type:"culture",id:"CULTURE-011",prompt:"Backbiting is acceptable as long as what you say about the person is true.",answer:"Culture",classification:"culture",evidence:"The Qur’an explicitly forbids backbiting and compares it to eating the flesh of one’s dead brother.",source:"Qur’an 49:12"},
    {type:"culture",id:"CULTURE-012",prompt:"Islam requires extravagant wedding spending to honor the families properly.",answer:"Culture",classification:"culture",evidence:"Islam does not make extravagance a religious requirement. The Qur’an commands people not to be excessive.",source:"Qur’an 7:31"},
    {type:"culture",id:"CULTURE-013",prompt:"Believers should work to reconcile two groups of Muslims who are in conflict.",answer:"Islam",classification:"islam",evidence:"The Qur’an describes believers as brothers and commands reconciliation between them.",source:"Qur’an 49:10"},
    {type:"culture",id:"CULTURE-014",prompt:"Girls are less valuable to a family than boys.",answer:"Culture",classification:"culture",evidence:"The Qur’an condemns shame at the birth of daughters and describes both daughters and sons as gifts Allah grants as He wills.",source:"Qur’an 16:58–59; 42:49–50"},
    {type:"culture",id:"CULTURE-015",prompt:"A Muslim should stand for justice even when doing so goes against personal or family interests.",answer:"Islam",classification:"islam",evidence:"Allah commands believers to stand firmly for justice, even against themselves, their parents, or their closest relatives.",source:"Qur’an 4:135"}
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
    return {cardId:card.id,mode:modes.culture[0],prompt:card.prompt,answer:`${card.answer} — ${card.evidence}`,source:card.source,contentVersion:"46"};
  };

  const style=document.createElement("style");
  style.textContent=`
  .cultureCard .question{font-size:clamp(1.45rem,5.6vw,2.45rem)!important;line-height:1.12!important;margin-bottom:18px!important}
  .cultureChoices{display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%;margin-top:auto}
  .cultureChoice{min-height:64px;border-radius:14px;border:1px solid rgba(49,111,123,.38);background:rgba(49,111,123,.055);color:var(--ink,#172126);font-size:1rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
  .cultureChoice:disabled{opacity:1}.cultureChoice.correctChoice{background:#1f765f;color:#fff;border-color:#1f765f}.cultureChoice.wrongChoice{background:#8d4343;color:#fff;border-color:#8d4343}.cultureChoice.unselectedChoice{opacity:.46}
  .cultureEvidence{width:100%;margin-top:14px;padding:14px 15px;border-radius:14px;border:1px solid rgba(49,111,123,.24);background:rgba(49,111,123,.07);text-align:left}
  .cultureEvidence[hidden]{display:none!important}.cultureVerdict{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:8px}.cultureVerdict strong{font-size:.8rem;letter-spacing:.12em;text-transform:uppercase}.cultureVerdict span{font-family:Georgia,"Times New Roman",serif;font-size:1.2rem;color:#316f7b}
  .cultureEvidence p{margin:0;color:var(--ink,#172126);font-size:.88rem;line-height:1.45}.cultureEvidence small{display:block;margin-top:9px;color:#316f7b;font-weight:700;font-size:.76rem}.cultureNote{margin-top:8px!important;color:var(--muted,#697477)!important;font-size:.72rem!important}
  #roundScreen .roundPanel{width:min(92vw,560px)!important}#roundScreen .matchScoreboard{display:block!important;margin:18px 0!important}#roundScreen .matchScoreboard[hidden]{display:none!important}#roundScreen .finalScores{padding:18px!important;border:1px solid rgba(49,111,123,.25)!important;border-radius:16px!important;background:rgba(49,111,123,.055)!important}
  @media(max-width:560px){.cultureChoices{gap:9px}.cultureChoice{min-height:58px}.cultureEvidence{padding:12px}.cultureEvidence p{font-size:.8rem}}
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
    const explanation=document.createElement("p"); explanation.textContent=card.evidence;
    const source=document.createElement("small"); source.textContent=card.source;
    const note=document.createElement("p"); note.className="cultureNote"; note.textContent="Culture does not automatically mean forbidden. It means the statement is not itself an Islamic requirement.";
    evidence.replaceChildren(verdict,explanation,source,note); evidence.hidden=false;
    $("correct").textContent="Next Statement"; $("correct").classList.add("primary"); $("correct").hidden=false; scheduleCardFit();
  }

  function nextCulture(){
    if(!cultureAnswered)return;
    const shouldResume=resumeCultureTimer; resumeCultureTimer=false; advance();
    if(shouldResume&&seconds>0&&!roundClosed)startTimer();
  }

  islam.onclick=()=>answerCulture("islam"); culture.onclick=()=>answerCulture("culture");
  $("correct").onclick=()=>isCultureMode()?nextCulture():baseCorrectHandler?.();

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
