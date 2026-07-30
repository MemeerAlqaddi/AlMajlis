/* Al Majlis v45: countdown/header fixes, external card utilities, scorecard, pass sound, Islam vs Culture. */
{
  const cultureCards = [
    {type:"culture",id:"CULTURE-001",prompt:"A divorced woman may be pressured not to remarry because her family considers remarriage shameful.",answer:"Culture",classification:"culture",evidence:"Guardians are explicitly told not to prevent a divorced woman from remarrying when the couple agrees honorably.",source:"Qur’an 2:232"},
    {type:"culture",id:"CULTURE-002",prompt:"A woman may include lawful conditions in her marriage contract, and those conditions should be honored.",answer:"Islam",classification:"islam",evidence:"The Prophet ﷺ said the conditions most deserving of fulfillment are those connected to the marriage contract.",source:"Sahih al-Bukhari 2721; 5151"},
    {type:"culture",id:"CULTURE-003",prompt:"A family may accept a marriage on a woman’s behalf even when she clearly refuses it.",answer:"Culture",classification:"culture",evidence:"The Prophet ﷺ required a woman’s consent and invalidated a forced marriage when the woman objected.",source:"Sahih al-Bukhari 5136, 5138; Sahih Muslim 1419"},
    {type:"culture",id:"CULTURE-004",prompt:"A widow must wear black and avoid normal social life for one full year after her husband dies.",answer:"Culture",classification:"culture",evidence:"Islam specifies an ‘iddah of four months and ten days for a widow; a one-year black-clothing rule is not an Islamic requirement.",source:"Qur’an 2:234"},
    {type:"culture",id:"CULTURE-005",prompt:"An adopted child should be presented as the biological child of the adoptive father and take his lineage as though it were biological.",answer:"Culture",classification:"culture",evidence:"The Qur’an commands that adopted children be called by their biological fathers when known, while preserving their dignity and belonging in the Muslim community.",source:"Qur’an 33:5"},
    {type:"culture",id:"CULTURE-006",prompt:"A woman’s earnings and property automatically belong to the men in her family.",answer:"Culture",classification:"culture",evidence:"The Qur’an recognizes for women a share of what they earn, just as it recognizes for men a share of what they earn.",source:"Qur’an 4:32"},
    {type:"culture",id:"CULTURE-007",prompt:"A husband may forbid his wife from attending the mosque simply because he personally prefers that she never go.",answer:"Culture",classification:"culture",evidence:"The Prophet ﷺ instructed men not to prevent women from going to the mosque when they ask permission, subject to the Islamic etiquette mentioned in the hadith.",source:"Sahih Muslim 442a–h"},
    {type:"culture",id:"CULTURE-008",prompt:"Protecting family reputation is more important than giving truthful testimony against a relative who committed injustice.",answer:"Culture",classification:"culture",evidence:"Believers are commanded to stand firmly for justice even when it is against themselves, their parents, or close relatives.",source:"Qur’an 4:135"},
    {type:"culture",id:"CULTURE-009",prompt:"A husband may keep a wife trapped in a marriage mainly to punish her, control her, or make her give up her rights.",answer:"Culture",classification:"culture",evidence:"The Qur’an forbids retaining a divorced woman in order to harm her or take advantage of her.",source:"Qur’an 2:231"},
    {type:"culture",id:"CULTURE-010",prompt:"The bride’s mahr belongs to her family to spend unless they choose to give some of it to her.",answer:"Culture",classification:"culture",evidence:"The Qur’an commands that women be given their bridal gifts graciously; the mahr belongs to the bride unless she willingly gives from it.",source:"Qur’an 4:4"},
    {type:"culture",id:"CULTURE-011",prompt:"A family may deprive daughters of inheritance because property should remain with male relatives.",answer:"Culture",classification:"culture",evidence:"The Qur’an explicitly grants women obligatory shares from the estates of parents and close relatives.",source:"Qur’an 4:7, 4:11–12"},
    {type:"culture",id:"CULTURE-012",prompt:"A Muslim should conceal abuse or serious wrongdoing whenever exposing it might embarrass the family.",answer:"Culture",classification:"culture",evidence:"Islam commands justice and permits the wronged person to speak about the wrong done to them; family image does not erase accountability.",source:"Qur’an 4:135; 4:148"},
    {type:"culture",id:"CULTURE-013",prompt:"A person must obey parents in every command, even when the command clearly involves disobedience to Allah.",answer:"Culture",classification:"culture",evidence:"The Qur’an requires kindness to parents while making clear that they are not obeyed in commands that contradict obedience to Allah.",source:"Qur’an 31:15"},
    {type:"culture",id:"CULTURE-014",prompt:"A Muslim may reject an otherwise suitable spouse solely because the person is from a different race, tribe, nationality, or social class.",answer:"Culture",classification:"culture",evidence:"The Qur’an rejects ancestry as the measure of honor before Allah and makes taqwa the true measure.",source:"Qur’an 49:13"},
    {type:"culture",id:"CULTURE-015",prompt:"Men are responsible for lowering the gaze and guarding modesty, not only women.",answer:"Islam",classification:"islam",evidence:"The Qur’an first commands believing men to lower their gaze and guard their chastity, then gives related guidance to believing women.",source:"Qur’an 24:30–31"},
    {type:"culture",id:"CULTURE-016",prompt:"A woman who was previously married may be prevented from choosing remarriage because relatives fear gossip.",answer:"Culture",classification:"culture",evidence:"The Qur’an forbids guardians from blocking an honorable remarriage once the woman’s waiting period has ended.",source:"Qur’an 2:232"},
    {type:"culture",id:"CULTURE-017",prompt:"A marriage contract is only ceremonial; promises and agreed conditions made in it do not carry serious religious weight.",answer:"Culture",classification:"culture",evidence:"The Prophet ﷺ described marriage-contract conditions as among the conditions most deserving of fulfillment.",source:"Sahih al-Bukhari 2721; 5151"},
    {type:"culture",id:"CULTURE-018",prompt:"It is acceptable to accuse a woman of sexual misconduct based on rumors, family suspicion, or community gossip.",answer:"Culture",classification:"culture",evidence:"The Qur’an requires four witnesses for such an accusation and condemns those who spread it without proof.",source:"Qur’an 24:4, 24:12–16"},
    {type:"culture",id:"CULTURE-019",prompt:"A family’s customs can overrule a clear Islamic right when following that right would upset older relatives.",answer:"Culture",classification:"culture",evidence:"Kindness to relatives remains required, but no custom or family pressure can turn a clear wrong into a religious obligation.",source:"Qur’an 31:15; 4:135"},
    {type:"culture",id:"CULTURE-020",prompt:"A cultural practice may be permissible without being an Islamic requirement.",answer:"Islam",classification:"islam",evidence:"Islam distinguishes between what revelation requires and what people simply practice. A custom is not automatically forbidden, but it should not be presented as a religious obligation without evidence.",source:"Qur’an 7:32; 16:116"}
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
    return {cardId:card.id,mode:modes.culture[0],prompt:card.prompt,answer:`${card.answer} — ${card.evidence}`,source:card.source,contentVersion:"45"};
  };

  const style=document.createElement("style");
  style.textContent=`
  html[data-theme="light"] body{
    background:
      linear-gradient(rgba(244,243,239,.42),rgba(244,243,239,.42)),
      url("./assets/marble-light.webp") center/cover fixed!important;
  }
  html[data-theme="dark"] body{
    background:
      linear-gradient(rgba(7,9,10,.24),rgba(7,9,10,.24)),
      url("./assets/marble-dark.webp") center/cover fixed!important;
  }
  body::before{
    content:"";position:fixed;inset:0;pointer-events:none;z-index:-1;
    background:
      radial-gradient(circle at 16% 12%,rgba(255,255,255,.38),transparent 28%),
      radial-gradient(circle at 82% 24%,rgba(115,122,126,.22),transparent 33%),
      radial-gradient(circle at 28% 78%,rgba(255,255,255,.26),transparent 32%);
    mix-blend-mode:soft-light;
  }
  html[data-theme="dark"] body::before{
    background:
      radial-gradient(circle at 16% 12%,rgba(215,220,222,.15),transparent 28%),
      radial-gradient(circle at 84% 30%,rgba(122,130,134,.18),transparent 34%),
      radial-gradient(circle at 32% 80%,rgba(235,238,239,.10),transparent 34%);
  }
  .screen,.shell,.countdownScreen,.roundScreen,.sheetBackdrop{background-color:transparent!important}
  .welcomeScreen,.setupScreen{
    background:
      linear-gradient(135deg,rgba(255,255,255,.20),rgba(145,150,154,.10)),
      transparent!important;
    backdrop-filter:saturate(90%);
  }
  html[data-theme="dark"] .welcomeScreen,
  html[data-theme="dark"] .setupScreen{
    background:
      linear-gradient(135deg,rgba(245,245,245,.035),rgba(120,126,130,.07)),
      transparent!important;
  }

  #countdownScreen{position:fixed!important;inset:0!important;z-index:1600!important;padding:0!important;background:var(--page,#ecebea)!important;display:flex!important;flex-direction:column!important;overflow:hidden!important}
  #countdownScreen[hidden]{display:none!important}
  .v44CountdownLayout{min-height:100%;display:grid;grid-template-rows:auto auto 1fr auto;align-items:center;text-align:center}
  .v44CountdownHeader{width:100%;min-height:58px;padding:max(14px,env(safe-area-inset-top)) 22px 14px;background:#316f7b;color:#fff;display:flex;align-items:center;justify-content:center;gap:10px;text-transform:uppercase;letter-spacing:.16em;font-size:.75rem;font-weight:700}
  .v44CountdownHeader strong{font:inherit;opacity:.82}
  .v44CountdownBismillah{padding:24px 16px 4px;color:var(--ink,#172126);font-family:Georgia,"Times New Roman",serif;font-size:clamp(1rem,4vw,1.35rem);direction:rtl}
  .v44CountdownCenter{display:flex;align-items:center;justify-content:center;padding:20px}
  .v44CountdownCircle{width:min(46vw,210px);aspect-ratio:1;border-radius:50%;border:2px solid #316f7b;display:grid;place-items:center;background:rgba(49,111,123,.06);box-shadow:0 20px 60px rgba(25,58,64,.12)}
  #countdownNumber{font-family:Georgia,"Times New Roman",serif;font-size:clamp(4.8rem,21vw,8.4rem);line-height:1;color:#316f7b}
  .v44CountdownReady{padding:0 20px max(44px,env(safe-area-inset-bottom));font-size:.78rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--muted,#697477)}
  .gameUtilityBar{width:min(100%,760px);display:flex;justify-content:flex-end;align-items:center;gap:9px;flex:0 0 auto;padding:0 4px}
  #gameShell .cardHomeButton,#gameShell .reportCardButton{position:static!important;inset:auto!important;transform:none!important;width:42px!important;height:42px!important;min-width:42px!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:var(--card,#f8f7f2)!important;border:1px solid rgba(49,111,123,.32)!important;color:#316f7b!important;box-shadow:0 5px 16px rgba(18,37,42,.08)!important;font-size:1rem!important;z-index:auto!important}
  #gameShell .stage{gap:9px!important}
  #gameShell #gameCard{margin-top:0!important}
  .cultureCard .question{font-size:clamp(1.45rem,5.6vw,2.45rem)!important;line-height:1.12!important;margin-bottom:18px!important}
  .cultureChoices{display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%;margin-top:auto}
  .cultureChoice{min-height:64px;border-radius:14px;border:1px solid rgba(49,111,123,.38);background:rgba(49,111,123,.055);color:var(--ink,#172126);font-size:1rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
  .cultureChoice:disabled{opacity:1}.cultureChoice.correctChoice{background:#1f765f;color:#fff;border-color:#1f765f}.cultureChoice.wrongChoice{background:#8d4343;color:#fff;border-color:#8d4343}.cultureChoice.unselectedChoice{opacity:.46}
  .cultureEvidence{width:100%;margin-top:14px;padding:14px 15px;border-radius:14px;border:1px solid rgba(49,111,123,.24);background:rgba(49,111,123,.07);text-align:left}
  .cultureEvidence[hidden]{display:none!important}.cultureVerdict{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:8px}.cultureVerdict strong{font-size:.8rem;letter-spacing:.12em;text-transform:uppercase}.cultureVerdict span{font-family:Georgia,"Times New Roman",serif;font-size:1.2rem;color:#316f7b}
  .cultureEvidence p{margin:0;color:var(--ink,#172126);font-size:.88rem;line-height:1.45}.cultureEvidence small{display:block;margin-top:9px;color:#316f7b;font-weight:700;font-size:.76rem}.cultureNote{margin-top:8px!important;color:var(--muted,#697477)!important;font-size:.72rem!important}
  #roundScreen .roundPanel{width:min(92vw,560px)!important}#roundScreen .matchScoreboard{display:block!important;margin:18px 0!important}#roundScreen .matchScoreboard[hidden]{display:none!important}#roundScreen .finalScores{padding:18px!important;border:1px solid rgba(49,111,123,.25)!important;border-radius:16px!important;background:rgba(49,111,123,.055)!important}
  @media(max-width:560px){.v44CountdownHeader{min-height:54px;padding-left:14px;padding-right:14px;font-size:.68rem}.gameUtilityBar{padding:0 2px}#gameShell .cardHomeButton,#gameShell .reportCardButton{width:38px!important;height:38px!important;min-width:38px!important}.cultureChoices{gap:9px}.cultureChoice{min-height:58px}.cultureEvidence{padding:12px}.cultureEvidence p{font-size:.8rem}}
  `;
  document.head.appendChild(style);

  $("countdownScreen").innerHTML=`<div class="v44CountdownLayout"><div class="v44CountdownHeader"><span id="countdownRound">Round 1</span><strong id="countdownSide">Team A</strong></div><div class="v44CountdownBismillah" lang="ar" dir="rtl">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</div><div class="v44CountdownCenter"><div class="v44CountdownCircle"><strong id="countdownNumber">3</strong></div></div><div class="v44CountdownReady">Get Ready</div></div>`;

  const utilityBar=document.createElement("div");
  utilityBar.className="gameUtilityBar";
  utilityBar.setAttribute("aria-label","Game controls");
  utilityBar.append($("cardHome"),$("reportCard"));
  $("gameCard").before(utilityBar);

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
    note.innerHTML='<strong>Islam vs Culture</strong> focuses on meaningful rights, marriage, lineage, justice, inheritance, consent, and family pressure using clear source-based statements. “Culture” means the claim is not itself an Islamic requirement; it does not automatically mean the custom is forbidden. Ambiguous or legitimately disputed rulings are excluded.';
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
      choices.hidden=true; evidence.hidden=true; $("finishRound").hidden=false; $("correct").hidden=false;
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
