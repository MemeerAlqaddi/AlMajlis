/* 95 Qur’anic principles x 3 distinct modern applications = 285 cards. */
const v52CultureGroups = [
  ["2:177","Righteousness joins sound belief, generous action, worship, promises, and patience; it is not reduced to a visible direction or symbol.",[
    ["culture","Visible religious presentation is enough to establish someone’s righteousness even when they break promises and mistreat people.","The verse rejects reducing righteousness to an outward marker and names belief, giving, worship, promises, and patience together."],
    ["islam","Religious character is tested across worship, money, commitments, and hardship rather than by one public sign alone.","Qur’an 2:177 presents these dimensions as one integrated description of righteousness."],
    ["culture","Private financial dishonesty is a secondary issue if a person’s public worship looks correct.","The verse places giving, covenant-keeping, and patience inside righteousness, not outside it."]
  ]],
  ["2:188","Do not consume one another’s wealth wrongfully or use authorities to gain what you know is not yours.",[
    ["islam","A transaction can remain wrongful even when influence or legal procedure makes it technically successful.","The verse condemns using authorities to consume others’ wealth knowingly and wrongfully."],
    ["culture","Winning a financial dispute through connections proves the money has become Islamically clean.","A favorable outcome does not erase knowing wrongdoing or abuse of influence."],
    ["culture","Small unofficial payments are harmless whenever they speed up a result you believe you deserve.","The Qur’anic principle focuses on wrongful access to wealth and decision-makers, not only on the payment’s size."]
  ]],
  ["2:256","Faith cannot be produced through compulsion; truth and falsehood have been made distinct.",[
    ["islam","Coercion can produce outward compliance without producing sincere faith.","The verse directly rejects compulsion in religion and points to clarity between guidance and error."],
    ["culture","Family pressure is a reliable substitute for conviction when an adult has religious doubts.","Pressure may silence questions, but it does not create the inward conviction described by faith."],
    ["culture","Threatening social exclusion is acceptable whenever the intended outcome is more religious behavior.","A desired religious appearance does not turn coercive methods into sincere belief."]
  ]],
  ["2:264","Charity can be ruined by reminders, injury, and giving for people to see.",[
    ["culture","A donor retains moral authority over a recipient because financial help creates a permanent debt of obedience.","The verse warns that reminders and injury can nullify the moral value of charity."],
    ["islam","Protecting a recipient from humiliation is part of protecting the charity itself.","The passage treats emotional injury and public display as spiritually serious, not as irrelevant side effects."],
    ["culture","Publicly retelling someone’s crisis is acceptable without renewed consent because the story helped raise money.","Fundraising benefit does not erase the verse’s warning about injury and show-driven giving." ]
  ]],
  ["2:280","A debtor in genuine hardship should receive time, and forgiving the debt as charity is better.",[
    ["islam","A creditor’s valid claim does not remove the duty to recognize verified hardship.","The verse preserves the debt while commanding respite for a debtor in difficulty."],
    ["culture","Publicly humiliating a struggling debtor is justified because the money is genuinely owed.","A rightful claim does not authorize every collection method; the verse directs creditors toward time and generosity."],
    ["culture","Compassion always requires cancelling every debt, even when the lender would then face serious hardship.","The verse commands extension and praises forgiveness; it does not erase context or impose one identical outcome on every creditor." ]
  ]],
  ["2:282","Deferred debts should be documented carefully, with fair writing and reliable testimony.",[
    ["culture","Writing loan terms between close friends signals weak faith and should be avoided to preserve trust.","The Qur’an commands documentation precisely to protect people and reduce later doubt."],
    ["islam","Clear records can preserve relationships by separating memory from obligation.","The verse treats writing, dictation, and witnesses as safeguards rather than insults."],
    ["culture","Informal religious language makes price, scope, and repayment details unnecessary in business.","Good intention does not replace the detailed clarity encouraged by the longest Qur’anic verse." ]
  ]],
  ["3:7","The Qur’an contains foundational clear verses and others requiring careful treatment; distorted hearts chase ambiguity to create turmoil.",[
    ["islam","An ambiguous passage should be read in light of clearer revelation rather than isolated for a sensational claim.","The verse distinguishes foundational verses from ambiguous ones and criticizes misuse of the latter."],
    ["culture","The most mysterious interpretation is usually the deepest because ordinary meanings are for beginners.","Novelty and obscurity are not evidence; the verse warns against chasing ambiguity."],
    ["culture","A short ambiguous text can settle a disputed issue without examining clearer texts or qualified explanation.","The Qur’anic method makes clear passages foundational and calls for humility around what is not clear." ]
  ]],
  ["3:103","Believers are commanded to hold firmly together to Allah’s rope and not become divided.",[
    ["culture","Unity requires hiding serious wrongdoing so outsiders never see disagreement.","Holding together around Allah does not mean protecting injustice or replacing truth with image management."],
    ["islam","Shared commitment to revelation is a stronger basis for unity than ethnicity, personality, or faction.","The verse locates unity in holding to Allah’s rope and remembering reconciliation after hostility."],
    ["culture","Any respectful disagreement is disunity, even when people remain fair and seek evidence.","The command opposes destructive division, not every good-faith difference in understanding." ]
  ]],
  ["3:104","A community should cultivate people who call to good, encourage what is right, and resist what is wrong.",[
    ["islam","Communal moral responsibility needs knowledge, purpose, and organized effort rather than random public outrage.","The verse describes a group undertaking a sustained call to good and resistance to wrong."],
    ["culture","Correcting wrongdoing is valid only when the person correcting it has no faults of their own.","Personal imperfection does not erase communal responsibility, though sincerity and self-accountability still matter."],
    ["culture","Every suspected wrong should be exposed to the largest possible audience.","The verse establishes responsibility for good; it does not make maximum publicity the method for every case." ]
  ]],
  ["3:134","People of taqwa spend in ease and hardship, restrain anger, and pardon people.",[
    ["islam","Strength can include controlling justified anger before choosing a proportionate response.","The verse praises restraint and pardon without pretending that anger itself never exists."],
    ["culture","A powerful person’s outburst deserves more tolerance because authority makes anger harder to control.","Greater power increases the impact of anger; the verse praises restraint rather than status-based excuses."],
    ["culture","Pardoning someone always requires restoring their previous access and trust immediately.","Pardon is praised, but the verse does not collapse forgiveness, safety, trust, and consequences into one decision." ]
  ]],
  ["3:159","Gentleness, pardon, consultation, decision, and reliance on Allah are joined in leadership.",[
    ["islam","Tawakkul begins after sincere consultation and a responsible decision, not instead of them.","The verse orders consultation, then resolution, then reliance on Allah."],
    ["culture","A leader weakens authority by inviting meaningful disagreement before deciding.","Consultation is part of the prophetic leadership pattern named in the verse."],
    ["culture","Harshness is necessary for religious leadership because gentleness makes people less disciplined.","The verse says harshness would have driven people away and explicitly praises gentleness." ]
  ]],
  ["4:3","The polygyny passage is tied to justice and fear of failing vulnerable people; one marriage is directed when justice is feared.",[
    ["culture","A man’s desire alone settles every ethical question about polygyny, regardless of foreseeable injustice.","The verse repeatedly centers justice and directs one marriage when fair treatment is feared."],
    ["islam","Permissibility does not remove accountability for equal rights, financial capacity, and harm.","The passage frames permission through responsibility rather than unrestricted entitlement."],
    ["culture","Questioning a specific person’s ability to act justly is equivalent to denying a Qur’anic permission.","Recognizing permission and evaluating a person’s capacity to meet its stated conditions are different questions." ]
  ]],
  ["4:4","Women are to receive their bridal gifts graciously and may voluntarily remit part of them.",[
    ["islam","The mahr belongs to the bride, not automatically to her parents, husband, or wedding budget.","The verse addresses women as the recipients and permits use by others only when they willingly give."],
    ["culture","Family elders may take the mahr because they negotiated the marriage.","Negotiation does not transfer the bride’s ownership established by the verse."],
    ["culture","A bride’s embarrassed silence proves she freely donated part of her mahr to relatives.","The verse makes her willing choice the condition; social pressure is not the same as genuine consent." ]
  ]],
  ["4:7","Men and women both have obligatory shares in what parents and close relatives leave.",[
    ["culture","Daughters may be asked to waive inheritance before receiving it because keeping property under male control protects the family.","A family objective cannot erase the shares Allah established for women."],
    ["islam","Inheritance distribution begins from divinely recognized rights, not from assumptions about which heir needs or deserves wealth.","The verse explicitly establishes shares for both men and women, whether the estate is small or large."],
    ["culture","Years of family silence make an undistributed estate acceptable even while some heirs use it exclusively.","Delay and informal control do not remove the named rights of the other heirs." ]
  ]],
  ["4:19","Women may not be inherited or constrained for financial recovery, and spouses must live together honorably.",[
    ["culture","Marriage gives one family ownership over a woman’s movement, wealth, and major decisions.","The verse rejects treating women as inherited property and commands honorable treatment."],
    ["islam","Dislike during marital strain does not cancel the duty of ma‘ruf conduct.","The verse commands honorable living even while acknowledging that a spouse may dislike something containing good."],
    ["culture","Religious advice about patience excuses a spouse from addressing repeated humiliation or coercion.","Patience does not replace the Qur’anic standard of honorable treatment." ]
  ]],
  ["4:29","Wealth must not be consumed wrongfully; trade requires mutual consent, and people must not destroy themselves or one another.",[
    ["islam","A signature obtained through deception or severe pressure does not fulfill the spirit of mutual consent.","The verse joins lawful exchange to genuine agreement and forbids wrongful consumption."],
    ["culture","Any profitable contract is acceptable if a lawyer can make it enforceable.","Legal enforceability does not transform wrongful consumption or manipulated consent into ethical trade."],
    ["culture","Workplace pressure that predictably destroys health is admirable sacrifice whenever revenue increases.","The verse links economic conduct with protection from destructive harm." ]
  ]],
  ["4:35","Serious marital conflict may call for mediators from both sides who genuinely seek reconciliation.",[
    ["islam","Mediation should pursue repair through trustworthy people, not recruit relatives as competing advocates.","The verse appoints arbiters from both families with reconciliation as the stated purpose."],
    ["culture","Family mediation is always appropriate even when disclosure to relatives would create danger or retaliation.","The verse gives a repair mechanism, not permission to ignore safety or the competence of mediators."],
    ["culture","Preserving the appearance of marriage is the mediator’s goal even when ongoing harm has not been assessed.","Reconciliation must be genuine and just; image alone is not the Qur’anic objective." ]
  ]],
  ["4:58","Trusts must be returned to those entitled to them, and judgments between people must be just.",[
    ["islam","Access to private data for one task does not make that information yours for personal use.","The verse applies amanah to what is placed under a person’s control."],
    ["culture","A respected leader may avoid financial records because asking for them shows poor adab.","Respect does not remove the leader’s duty to return trusts and judge or administer justly."],
    ["culture","Good intentions excuse favoritism when distributing money entrusted for people in need.","Trust and justice concern the method and rights involved, not intention alone." ]
  ]],
  ["4:86","A greeting should be answered with one better than it or at least its equal.",[
    ["islam","Returning a greeting is a duty of social recognition, not merely optional friendliness toward people you prefer.","The verse gives a direct standard for answering greetings."],
    ["culture","Ignoring someone’s salam is an acceptable way to show disapproval without speaking harshly.","Withholding the required response turns a greeting into a tool of social punishment."],
    ["culture","Ethnic or class status determines whose greeting deserves warmth.","The command is not ranked by social prestige." ]
  ]],
  ["4:94","Believers are warned not to deny another person’s stated peace or faith while seeking worldly gain.",[
    ["islam","Material incentives should make people more careful, not less careful, when judging another person’s identity or intentions.","The verse warns against dismissing a peaceful declaration for worldly benefit."],
    ["culture","A person’s accent or background is enough to treat their stated Muslim identity as suspicious.","The verse requires restraint from denying a person’s declaration without rightful basis."],
    ["culture","Security concerns justify certainty about motives before evidence is available.","Caution may be necessary, but the verse condemns turning desire or gain into false certainty." ]
  ]],
  ["4:135","Justice and truthful testimony must stand even against oneself, parents, close relatives, rich people, or poor people.",[
    ["culture","Protecting the family name is more important than correcting a false story that harms someone else.","The verse explicitly places justice above self and family interest."],
    ["islam","Neither wealth nor vulnerability automatically proves a person right; justice must resist bias in both directions.","The verse names rich and poor and says Allah has greater claim over both."],
    ["culture","Admitting your own role in wrongdoing weakens the community and should be avoided.","The command begins with justice even against oneself." ]
  ]],
  ["5:1","Believers are commanded to fulfill binding commitments.",[
    ["islam","A contract’s moral weight includes what the other party reasonably relied upon, not only loopholes discovered later.","The opening command is to fulfill obligations rather than search for technical escape."],
    ["culture","A verbal commitment carries no ethical weight once a more profitable option appears.","The principle of fulfilling commitments is broader than opportunistic convenience."],
    ["culture","Religious trust makes clear written terms unnecessary for paid work.","Fulfilling obligations is easier, not harder, when scope and terms are clear." ]
  ]],
  ["5:2","Cooperation is commanded in righteousness and taqwa, and forbidden in sin and transgression.",[
    ["islam","A worthy goal does not make fabricated evidence or abusive methods acceptable.","The verse evaluates both the cooperative goal and the conduct used to pursue it."],
    ["culture","Loyalty requires helping friends carry out plans you know will wrong someone.","Cooperation ends where sin and transgression begin."],
    ["culture","Refusing to participate in a harmful group action is betrayal even when you still support the group’s lawful goals.","One can support good while refusing cooperation in wrongdoing." ]
  ]],
  ["5:6","Purification rules precede prayer, while illness, travel, and lack of water receive tayammum; Allah intends purification, not hardship.",[
    ["islam","Religious purification includes lawful concessions when water is unavailable or harmful.","The verse itself provides tayammum and states that Allah does not intend hardship."],
    ["culture","Using a concession is spiritually inferior even when revelation explicitly provides it for your condition.","Treating Allah’s ease as shame can turn culture into a stricter rule than the text."],
    ["culture","Extra difficulty is automatically more pious than following the prescribed form.","The verse ties obedience to purification and gratitude, not to inventing hardship." ]
  ]],
  ["5:8","Hatred of a people must not cause injustice; believers are commanded to be just because justice is nearer to taqwa.",[
    ["islam","A true accusation must remain precise even when the accused person has treated you badly.","Hostility does not loosen the Qur’anic standard of justice."],
    ["culture","Exaggeration is acceptable against harmful people because the larger cause is correct.","The verse forbids hatred from producing injustice, including through inflated claims."],
    ["culture","Fairness toward an opponent signals weak commitment to your own community.","Qur’anic commitment is shown by justice precisely when bias would be easier." ]
  ]],
  ["5:32","Saving a life carries immense moral weight, while killing without right is treated as an assault on humanity.",[
    ["islam","Immediate danger can justify breaking ordinary confidentiality to reach people capable of protecting life.","The value placed on preserving life requires proportionate action when danger is credible."],
    ["culture","Family reputation should delay outside help during escalating violence or a suicide emergency.","Protecting life takes priority over preserving an image."],
    ["culture","Only physical treatment counts as life-preserving help; mental-health intervention is a sign of weak faith.","Preserving life includes using competent means for serious psychological danger." ]
  ]],
  ["5:87","Believers must not declare forbidden the wholesome things Allah made lawful or cross limits.",[
    ["islam","Personal abstinence does not automatically become a religious rule for everyone else.","The verse separates lawful personal restraint from falsely forbidding what Allah allowed."],
    ["culture","The strictest available lifestyle choice is always closest to Allah, even without evidence.","Greater restriction is not automatically greater piety when it changes lawful things into religious prohibitions."],
    ["culture","A family may label any unfamiliar lawful practice haram to preserve tradition.","Cultural discomfort does not possess authority to create prohibition." ]
  ]],
  ["5:89","Deliberate broken oaths have defined expiation options; careless expressions are not treated identically.",[
    ["islam","Religious accountability distinguishes a deliberate oath from casual speech and provides structured repair.","The verse names intent and a specific expiation rather than relying on shame or improvisation."],
    ["culture","Any use of ‘wallahi’ carries the same legal consequence regardless of intention or context.","The verse explicitly distinguishes thoughtless wording from deliberate oaths."],
    ["culture","A broken oath is repaired simply by making another promise.","The Qur’an specifies feeding, clothing, freeing, or fasting in sequence, not an unsupported replacement." ]
  ]],
  ["5:105","Personal accountability does not mean indifference to guidance; people return to Allah after doing what responsibility requires.",[
    ["culture","‘Worry about yourself’ means Muslims should never challenge public harm or offer sincere counsel.","The verse cannot be separated from Qur’anic commands to justice, counsel, and communal responsibility."],
    ["islam","You are not accountable for forcing another person’s heart after offering truthful guidance responsibly.","The verse limits ultimate accountability while preserving the duty to remain guided."],
    ["culture","Another person’s refusal to change proves every method you used to advise them was wise.","You control your own truthfulness and method, not the outcome; failed coercion is not validated by frustration." ]
  ]],
  ["6:108","Muslims must not insult what others invoke besides Allah lest they insult Allah in hostile ignorance.",[
    ["islam","Rejecting a belief does not require humiliating its followers or mocking what they hold sacred.","The verse forbids insult because predictable escalation produces greater wrong."],
    ["culture","Religious confidence is measured by how aggressively a person can ridicule another faith.","The Qur’anic command shows restraint can serve truth better than provocation."],
    ["culture","Only your intention matters when speech predictably triggers greater abuse and hostility.","The verse explicitly considers foreseeable consequences, not intention alone." ]
  ]],
  ["6:141","Produce should be enjoyed and its due given, but waste and excess are forbidden.",[
    ["islam","Hospitality includes planning so abundance does not become routine waste.","The verse joins enjoyment, giving what is due, and refusing excess."],
    ["culture","Throwing away untouched food is the unavoidable price of proving generosity at events.","A social performance cannot make waste spiritually neutral."],
    ["culture","Environmental responsibility is unrelated to Islamic character because modern waste systems did not exist in early society.","The Qur’anic prohibition of excess applies beyond one historical disposal method." ]
  ]],
  ["7:26","Clothing covers vulnerability and provides adornment, while the garment of taqwa is best.",[
    ["islam","Modesty has outward requirements, but clothing cannot substitute for inward taqwa and ethical conduct.","The verse recognizes physical clothing and then directs attention to the superior garment of taqwa."],
    ["culture","A specific ethnic fashion proves stronger faith even when the wearer’s conduct harms others.","Cultural style and the garment of taqwa are not identical."],
    ["culture","Because taqwa is inward, outward modesty and appropriate covering have no religious relevance.","The verse affirms both clothing’s covering function and inward taqwa rather than cancelling either." ]
  ]],
  ["7:31","People may dress well and enjoy food and drink without excess; Allah does not love the wasteful.",[
    ["islam","Enjoying beauty and lawful food can coexist with disciplined moderation.","The verse permits adornment, eating, and drinking while drawing a boundary at excess."],
    ["culture","Extravagance becomes a religious duty when hosting a wedding or Eid gathering.","Celebration does not turn excess into worship."],
    ["culture","Visible deprivation is always more spiritual than balanced enjoyment of lawful blessings.","The verse does not oppose enjoyment; it opposes excess." ]
  ]],
  ["7:199","The Prophet is told to accept what is reasonable, command recognized good, and turn away from the ignorant.",[
    ["islam","Islamic practice can recognize sound custom where revelation has not made one fixed form obligatory.","The command to accept what is recognized supports reasonable custom within religious limits."],
    ["culture","Any inherited custom becomes sacred merely because elders practiced it.","Custom is considered, but it remains subject to what is good and lawful."],
    ["culture","Every rude provocation deserves a full response so silence is never mistaken for weakness.","The verse includes turning away from the persistently ignorant rather than feeding every confrontation." ]
  ]],
  ["8:27","Believers must not knowingly betray Allah, the Messenger, or trusts placed with them.",[
    ["islam","Confidential access remains an amanah even when sharing the information would make you influential.","The verse condemns knowing betrayal of entrusted matters."],
    ["culture","A group chat is private enough to share someone’s secret if all members promise not to forward it.","Expanding the audience without permission is still a breach of trust."],
    ["culture","Loyalty to a friend requires hiding information when another person remains in serious danger.","Trust is not a license to cooperate in continuing harm; disclosure must be limited to those who can protect." ]
  ]],
  ["8:61","When an opposing party genuinely inclines toward peace, believers are told to incline toward it and trust Allah.",[
    ["islam","Accepting a credible path to peace can be principled even after serious conflict.","The verse commands inclination toward peace when the other side inclines toward it."],
    ["culture","Seeking negotiated peace always proves cowardice and lack of trust in Allah.","The command to incline toward peace is paired with tawakkul, not contrasted with it."],
    ["culture","A peace offer must be accepted without due diligence, safeguards, or attention to deception.","The verse supports peace, while surrounding guidance still permits alertness and responsible protection." ]
  ]],
  ["9:6","A person from the enemy seeking protection must be granted safety, allowed to hear, and escorted to a secure place.",[
    ["islam","Even during conflict, a person seeking safe passage retains rights to protection and truthful access to the message.","The verse orders both asylum and secure escort for an opposing person who asks."],
    ["culture","Group identity removes every individual protection once conflict begins.","The verse distinguishes an individual seeker from collective hostility and grants specific rights."],
    ["culture","Religious outreach permits trapping a vulnerable listener after they request to leave.","The verse requires delivery to a place of safety, not coercive retention." ]
  ]],
  ["9:60","Zakah is restricted to eight named recipient categories and is not an unrestricted community budget.",[
    ["islam","Good intentions do not permit redirecting zakah to any popular project without checking recipient eligibility.","The verse defines specific categories for distribution."],
    ["culture","A wealthy donor may reserve zakah for projects that increase the family’s status even when eligible people are ignored.","Zakah follows Allah’s categories rather than donor prestige."],
    ["culture","Administrative convenience is enough reason to exclude an eligible category entirely without review.","Responsible administration serves the defined recipients; it does not replace them." ]
  ]],
  ["9:71","Believing men and women are allies who share responsibility for good, worship, charity, and resisting wrong.",[
    ["islam","Moral and communal responsibility belongs to believing women as well as believing men.","The verse directly names both as allies carrying shared religious duties."],
    ["culture","Women may benefit from community decisions but should have no meaningful role in shaping them.","Shared alliance and responsibility are inconsistent with automatic exclusion from every voice or contribution."],
    ["culture","Men alone are accountable for correcting harmful community norms.","The verse assigns mutual responsibility to both believing men and women." ]
  ]],
  ["9:119","Believers are commanded to have taqwa and remain with truthful people.",[
    ["islam","The company a person keeps can support or erode commitment to truth.","The verse joins taqwa with being among the truthful."],
    ["culture","Protective loyalty requires confirming a friend’s version before hearing the facts.","Truthful companionship does not mean automatic agreement."],
    ["culture","A truthful friend is one who never says anything uncomfortable.","Truthfulness can require respectful correction rather than permanent reassurance." ]
  ]],
  ["10:99","If Allah had willed, everyone on earth could have believed; people are not to be compelled into faith.",[
    ["islam","Human guidance cannot be manufactured by pressure even when a person deeply wants good for others.","The verse rejects forcing people to become believers."],
    ["culture","A parent has fulfilled religious duty once a child performs outwardly under fear, regardless of inward belief.","Compelled behavior and faith are not the same achievement."],
    ["culture","More force is always the correct response when sincere teaching does not produce immediate agreement.","The verse places limits on human control over another person’s belief." ]
  ]],
  ["11:85","Shu‘ayb commands full measure and weight, forbids depriving people, and condemns spreading corruption.",[
    ["islam","Ethical trade includes accurate measurement and full delivery, not merely a technically valid payment.","The verse ties commerce to fairness in what each person receives."],
    ["culture","Small systematic under-delivery is acceptable if customers rarely notice.","Repeated small deprivation is precisely the kind of dishonest measurement condemned."],
    ["culture","Religious branding compensates for unclear fees and misleading product descriptions.","Invoking faith does not replace giving people their due." ]
  ]],
  ["12:55","Yusuf requests responsibility for storehouses by naming both trustworthiness and relevant knowledge.",[
    ["islam","Competence and integrity are both legitimate considerations for positions carrying public trust.","Yusuf identifies himself as a knowledgeable guardian rather than relying on status alone."],
    ["culture","Family connection is a better qualification for leadership than proven ability and amanah.","The verse presents stewardship and knowledge as relevant grounds for responsibility."],
    ["culture","Religious appearance alone is enough qualification for a technical role affecting people’s welfare.","Piety does not eliminate the need for task-specific knowledge." ]
  ]],
  ["13:11","Allah does not change a people’s condition until they change what is within themselves.",[
    ["islam","Du‘a and tawakkul can require changing habits, systems, and choices within human responsibility.","The verse connects changed condition with internal and collective change."],
    ["culture","Mentioning qadr is enough reason to avoid every practical step toward a changeable problem.","Decree does not erase agency the Qur’an explicitly addresses."],
    ["culture","Every hardship proves the sufferer failed to improve themselves.","The verse establishes responsibility, not a simplistic explanation for every trial or injustice." ]
  ]],
  ["14:7","Gratitude is promised increase, while ingratitude carries a severe warning.",[
    ["islam","Gratitude includes recognizing a blessing and using it responsibly, not only saying words of thanks.","The verse treats gratitude as a serious response to what Allah has given."],
    ["culture","Naming grief or seeking change is automatically ingratitude for existing blessings.","Gratitude can coexist with honest pain and responsible action."],
    ["culture","Wealth proves gratitude and restricted provision proves ingratitude.","The verse promises increase as Allah wills; it does not make visible wealth a simple moral score." ]
  ]],
  ["16:43","People who do not know are commanded to ask those who possess relevant knowledge.",[
    ["islam","Religious humility includes recognizing when a question requires qualified expertise.","The verse directs the unknowing toward people of knowledge."],
    ["culture","Popularity makes someone qualified to answer every religious, medical, legal, and financial question.","Influence is not the same as relevant knowledge."],
    ["culture","A sincere personal feeling is enough to overrule specialists on technical facts.","Sincerity matters, but the verse still commands consultation with knowledgeable people." ]
  ]],
  ["16:90","Allah commands justice, excellence, and generosity to relatives, and forbids indecency, wrong, and transgression.",[
    ["islam","Family generosity and public justice belong together; one does not excuse violating the other.","The verse joins family care with universal justice and ihsan."],
    ["culture","Helping relatives permits favoritism with funds or roles entrusted for everyone.","Kinship generosity cannot be financed through injustice or betrayal of a public trust."],
    ["culture","Avoiding scandal matters more than stopping transgression within a respected family.","The verse forbids transgression without creating a family-status exception." ]
  ]],
  ["16:91","Covenants made in Allah’s name must be fulfilled and not broken after confirmation.",[
    ["islam","A religious promise should make a person more careful before committing and more responsible afterward.","The verse warns against confirmed commitments made with Allah as witness."],
    ["culture","Saying ‘inshaAllah’ removes responsibility for a promise you already intend not to keep.","Invoking Allah is not a device for disguising unreliability."],
    ["culture","A commitment may be abandoned without explanation as soon as keeping it becomes inconvenient.","Difficulty may require honest renegotiation, not silent betrayal." ]
  ]],
  ["16:125","Invitation to Allah’s way uses wisdom, good instruction, and the best manner of discussion.",[
    ["islam","Correct content can still be delivered through an unwise or harmful method.","The verse regulates both what people are invited toward and how discussion occurs."],
    ["culture","Public humiliation is the strongest form of da‘wah because embarrassment forces attention.","The command is wisdom and the best manner, not maximum shame."],
    ["culture","Aggression proves certainty, while gentleness shows doubt.","The verse makes wise, excellent engagement part of faithful invitation." ]
  ]],
  ["17:23-24","Parents must receive respectful speech, humble care, and prayer for mercy, especially in old age.",[
    ["islam","Disagreeing with a parent can still require gentle language and continued care.","The verses set a high standard for speech and mercy without claiming parents are never wrong."],
    ["culture","Respect for parents means obeying every request even when it requires disobedience to Allah or harm to another person.","Other Qur’anic guidance, including 31:15, limits obedience while preserving kind companionship."],
    ["culture","A parent’s age gives permission to humiliate an adult child or spouse without boundaries.","Parental rights are great, but they do not turn mistreatment into an Islamic requirement." ]
  ]],
  ["17:26-27","Relatives, people in need, and travelers have rights, while wasteful spending is condemned severely.",[
    ["islam","Financial responsibility includes both close relationships and people made vulnerable by need or travel.","The passage names several claims on wealth before condemning waste."],
    ["culture","Spending heavily on family image is justified even when debts and vulnerable relatives are ignored.","Family duty is not the same as prestige spending, and waste remains condemned."],
    ["culture","Unused food and decor at religious events are spiritually neutral because the event itself was good.","A good occasion does not change waste into responsible spending." ]
  ]],
  ["17:31","Children must not be killed from fear of poverty; Allah provides for them and their parents.",[
    ["islam","A child’s worth is not measured by whether the family expected or economically preferred that child.","The verse rejects destroying children based on fear of provision."],
    ["culture","Daughters may receive less care because sons are expected to support the family financially.","Economic expectation cannot justify devaluing a child."],
    ["culture","Shaming poor parents for having children is a religious response to financial anxiety.","The verse answers fear of provision with trust and protection of children, not contempt." ]
  ]],
  ["17:32","Believers are told not merely to avoid zina but not to approach it because it is a shameful, harmful path.",[
    ["islam","Prevention can include boundaries before an action reaches its final prohibited form.","The wording ‘do not approach’ addresses pathways and conditions, not only the final act."],
    ["culture","Only women carry responsibility for sexual boundaries because men’s behavior is naturally uncontrollable.","Qur’anic moral responsibility applies to both sexes; men are directly commanded regarding gaze and chastity in 24:30."],
    ["culture","Public suspicion and surveillance are justified against anyone whose lifestyle seems unfamiliar.","Preventive boundaries do not cancel prohibitions on suspicion, spying, and false accusation." ]
  ]],
  ["17:34","Orphan property may be approached only in the best manner until maturity, and commitments must be fulfilled.",[
    ["islam","Managing vulnerable people’s assets requires a higher standard than merely avoiding obvious theft.","The verse permits only the best manner of stewardship and links it to accountable promises."],
    ["culture","A guardian may borrow from an orphan’s funds without records because family intention guarantees repayment.","Kinship does not weaken fiduciary responsibility."],
    ["culture","Orphans should remain excluded from understanding their own property because adults know best indefinitely.","The verse anticipates maturity and transfer of responsible control rather than permanent dependency." ]
  ]],
  ["17:36","Do not pursue what you lack knowledge of; hearing, sight, and heart will all be questioned.",[
    ["islam","Sharing a claim creates responsibility even when you add ‘I’m not sure’ after making it sound credible.","The verse makes information conduct accountable across what people hear, see, and conclude."],
    ["culture","A viral repetition counts as evidence because so many people cannot all be wrong.","Frequency is not knowledge, and the verse forbids following what has not been established."],
    ["culture","Religious content is exempt from fact-checking when the message feels beneficial.","A good theme does not permit false attribution or unsupported claims." ]
  ]],
  ["17:53","Believers are told to say what is best because Satan stirs conflict between people.",[
    ["islam","Preventing escalation is part of responsible truth-telling, not a betrayal of truth.","The verse connects chosen speech with the danger of conflict being inflamed."],
    ["culture","The harshest wording is the most honest wording.","Truth can be stated clearly without choosing language that predictably deepens hostility."],
    ["culture","Once your factual point is correct, the relational damage caused by delivery is irrelevant.","The command concerns speech itself and its effect between people." ]
  ]],
  ["18:28","The Prophet is told to remain with sincere worshippers and not let worldly adornment shift attention away from them.",[
    ["islam","Wealth and social polish are not reliable measures of whose company deserves honor.","The verse directs attention toward sincere remembrance rather than worldly display."],
    ["culture","Poor, disabled, or socially awkward Muslims should be kept out of visible spaces so programs appear professional.","Exclusion for image contradicts the verse’s correction of status-based attention."],
    ["culture","Networking with influential people is always more beneficial than listening to people with little status.","The verse warns against letting worldly attraction displace sincere people." ]
  ]],
  ["18:109","Even an ocean of ink, doubled again, would run out before the words of Allah were exhausted.",[
    ["islam","Human scholarship can be deep while remaining limited before Allah’s knowledge.","The verse uses an immense image to establish the inexhaustibility of Allah’s words."],
    ["culture","Mastering one field makes a person qualified to speak with certainty about every other field.","Human knowledge remains bounded, and expertise does not transfer automatically."],
    ["culture","Saying ‘I do not know’ is embarrassing for a religious teacher and should be avoided.","Recognizing limits is consistent with the Qur’anic scale of divine knowledge." ]
  ]],
  ["22:40","Protection from aggression is connected to preserving monasteries, churches, synagogues, and mosques where Allah is much remembered.",[
    ["islam","Protecting houses of worship can include those belonging to communities other than one’s own.","The verse explicitly names several kinds of worship spaces in the context of preventing their destruction."],
    ["culture","Religious loyalty requires indifference when another community’s lawful house of worship is attacked.","The verse recognizes protection of multiple worship spaces as part of restraining aggression."],
    ["culture","Respecting another community’s safety means agreeing with every belief practiced there.","Protection from injustice and theological agreement are separate matters." ]
  ]],
  ["23:8","Successful believers faithfully observe trusts and commitments.",[
    ["islam","Reliability in ordinary agreements is part of faith, not merely a business personality trait.","The verse includes trusts and promises inside the portrait of successful believers."],
    ["culture","Repeated lateness and broken commitments are harmless if the person is generous in other ways.","One good quality does not erase the separate duty of reliability."],
    ["culture","A promise to a child or employee matters less than a promise to someone powerful.","Amanah is not graded by the social status of the person relying on it." ]
  ]],
  ["24:4","An accusation of unlawful sexual conduct requires four witnesses; unsupported accusation carries severe consequences.",[
    ["islam","A reputational accusation requires an exceptionally high evidentiary standard, not rumor dressed as concern.","The verse directly establishes four witnesses and punishment for unsupported accusation."],
    ["culture","Several people repeating the same anonymous story are equivalent to four witnesses.","Repetition does not transform hearsay into the testimony specified by the verse."],
    ["culture","Deleting a false accusation after it spreads fully repairs the person’s honor.","Public harm may require clear public correction and accountability, not quiet deletion alone." ]
  ]],
  ["24:11","The slander incident is treated as a collective test; each participant bears what they earned, and leading it carries greater burden.",[
    ["islam","Passing along a rumor without inventing it can still create moral responsibility.","The passage distributes responsibility among those who participated in spreading the slander."],
    ["culture","Forwarding a scandal ‘for awareness’ is neutral when you did not write the original claim.","Amplification is participation when evidence is absent and honor is at stake."],
    ["culture","A community should avoid correcting a popular false story because public correction keeps the scandal alive.","The passage teaches believers how to reject and learn from slander rather than preserve it through silence." ]
  ]],
  ["24:27","People must seek permission and greet residents before entering homes other than their own.",[
    ["islam","Family closeness does not erase another household’s right to notice and consent before entry.","The verse applies permission to homes other than one’s own without a family-status exception."],
    ["culture","Parents may enter an adult married child’s home at any time because boundaries imply rejection.","Love and parental honor do not cancel the household privacy established by the verse."],
    ["culture","Having a spare key means ongoing permission to use it whenever convenient.","Physical access and present consent are not the same thing." ]
  ]],
  ["24:30","Believing men are commanded to lower their gaze and guard chastity.",[
    ["islam","Men carry direct responsibility for gaze and sexual conduct rather than shifting the burden entirely onto women.","The Qur’an addresses believing men first with an explicit command."],
    ["culture","A man’s behavior is excused whenever he believes a woman was dressed immodestly.","Another person’s conduct does not cancel the command addressed to him."],
    ["culture","Modesty discussions should focus almost exclusively on women because male gaze is only a secondary issue.","The verse makes male responsibility primary and direct." ]
  ]],
  ["24:31","Believing women receive commands concerning gaze, chastity, adornment, and modest covering.",[
    ["islam","Women’s modesty is an act of worship, not a family-owned symbol that permits coercion or humiliation.","The command addresses believing women as moral agents."],
    ["culture","A woman’s clothing allows others to measure her entire faith and character with certainty.","One visible practice cannot reveal the heart or erase every other dimension of righteousness."],
    ["culture","Men have no modesty obligations because this verse contains detailed guidance for women.","The immediately preceding verse directly commands men regarding gaze and chastity." ]
  ]],
  ["24:58","Children and household servants must ask permission during three private times.",[
    ["islam","Children can be taught privacy and consent inside the home without treating those values as foreign to Islam.","The verse creates age-appropriate permission rules around vulnerable household moments."],
    ["culture","Parents have no privacy rights from children because family life should be completely open.","The verse explicitly names private times even within one household."],
    ["culture","Teaching a child to knock shows emotional distance and weak family bonds.","Permission is Qur’anic adab, not rejection." ]
  ]],
  ["25:63","Servants of the Most Merciful walk humbly and answer ignorant aggression with peaceful words.",[
    ["islam","Refusing a degrading argument can be strength when engagement would only feed ignorance.","The verse praises humble conduct and a peaceful response to hostile ignorance."],
    ["culture","Every insult must receive an equal insult so silence is never mistaken for weakness.","The Qur’anic portrait values restraint over ego-driven escalation."],
    ["culture","Humility means allowing people to violate your rights without any boundary or lawful response.","Peaceful dignity is not the same as surrendering every right or enabling harm." ]
  ]],
  ["25:67","Faithful spending avoids both extravagance and stinginess and holds a balanced course.",[
    ["islam","Responsible generosity considers sustainability as well as immediate emotion.","The verse praises a middle course rather than uncontrolled spending or withholding."],
    ["culture","Going into avoidable debt for appearances is generosity rather than excess.","Social approval does not move extravagance into the balanced category."],
    ["culture","Saving every possible amount is always prudence, even when dependents’ reasonable rights are neglected.","The verse rejects stinginess as well as excess." ]
  ]],
  ["28:26","Strength and trustworthiness are both named as reasons to hire someone.",[
    ["islam","Hiring can consider technical ability and character together.","The recommendation in the verse identifies both strength and amanah."],
    ["culture","A relative should receive a role before a more capable trustworthy candidate because family loyalty comes first.","Kinship is not named as a substitute for the qualities the work requires."],
    ["culture","Religious vocabulary compensates for inability to perform a safety-critical job.","Trustworthiness includes not accepting responsibility beyond one’s competence." ]
  ]],
  ["28:77","Seek the Hereafter through what Allah gives, do not forget a lawful worldly share, do good, and do not seek corruption.",[
    ["islam","Preparing for the Hereafter does not require denying every lawful worldly need or responsibility.","The verse explicitly says not to forget one’s share of the world while orienting wealth toward the Hereafter."],
    ["culture","Career, rest, family enjoyment, and lawful beauty are signs of weak spirituality by themselves.","The Qur’anic balance permits a worldly share while forbidding corruption."],
    ["culture","Material success proves a person has fulfilled the verse even when the way it was gained harms others.","The passage ends by forbidding corruption and commanding good." ]
  ]],
  ["30:21","Marriage is described through tranquility, affection, and mercy as signs for people who reflect.",[
    ["islam","Emotional safety, affection, and mercy are central marital values, not optional decoration after legal rights.","The verse uses all three to describe the divine sign within marriage."],
    ["culture","A marriage is successful as long as it remains legally intact, even if contempt and fear define daily life.","Legal continuity alone does not fulfill the tranquility, affection, and mercy described."],
    ["culture","Public romance is a better measure of marital health than private mercy and dependable care.","The verse points to lived relational qualities, not performance for an audience." ]
  ]],
  ["31:15","Parents are not obeyed in shirk, yet they must still receive kind companionship in worldly life.",[
    ["islam","Refusing a parent’s sinful demand and continuing respectful care can both be required.","The verse holds nonobedience and kind companionship together."],
    ["culture","Any boundary with parents is disobedience even when the requested act is wrong or harmful.","The Qur’an itself describes a limit on obedience."],
    ["culture","Once a parent makes a sinful demand, the child no longer owes kindness or ordinary care.","The verse rejects the command while preserving ma‘ruf companionship." ]
  ]],
  ["31:18","Luqman warns against turning away from people in contempt or walking the earth arrogantly.",[
    ["islam","Body language and ordinary social behavior can reveal arrogance even without an explicit boast.","The verse addresses posture toward people and manner of walking."],
    ["culture","Status permits a scholar, elder, or wealthy person to ignore greetings from people below them.","The warning against contempt does not contain a prestige exception."],
    ["culture","Humility requires denying your skills whenever someone compliments you.","Rejecting arrogance does not require false statements or ingratitude for ability." ]
  ]],
  ["33:5","People should be called by their true fathers’ lineage when known; mistakes are distinguished from deliberate intention.",[
    ["islam","Marriage does not require a woman to erase her family lineage and adopt her husband’s family name.","The verse’s principle is truthful lineage, not a mandatory surname transfer at marriage."],
    ["culture","An adopted child must be told a false biological lineage to prove they are fully loved.","Care and belonging do not require knowingly changing ancestry."],
    ["culture","Every naming error carries the same guilt even when no one knew the correct lineage.","The verse distinguishes honest mistakes from what hearts deliberately intend." ]
  ]],
  ["33:35","Believing men and women are named in parallel across worship and character, with equal forgiveness and great reward.",[
    ["islam","Spiritual accountability and reward apply directly to women and men across the same core virtues.","The verse repeatedly names both sexes for submission, faith, truth, patience, charity, fasting, chastity, and remembrance."],
    ["culture","A woman’s spiritual worth is measured mainly through the reputation of her male relatives.","The verse addresses women as independent believers receiving forgiveness and reward."],
    ["culture","Men’s public service automatically outweighs women’s less visible worship and sacrifice.","Allah’s reward follows the named virtues, not a culture’s visibility hierarchy." ]
  ]],
  ["33:53","Believers receive detailed etiquette about invitations, leaving after meals, privacy, and speaking from behind a barrier in the Prophet’s household.",[
    ["islam","Hospitality does not cancel a host’s right to time, privacy, and an ending to the visit.","The verse corrects guests who lingered and caused discomfort."],
    ["culture","A good host must tolerate guests indefinitely and may never signal that a gathering has ended.","The Qur’anic etiquette recognizes the host’s private space."],
    ["culture","Social closeness gives permission to enter private household areas without asking.","The passage establishes boundaries even in a deeply honored and communal household." ]
  ]],
  ["33:70","Believers are commanded to fear Allah and speak words that are straight, sound, and appropriate.",[
    ["islam","Accuracy can require correcting an impression created by words that were technically true but materially misleading.","Straight speech concerns truthful effect, not only literal defensibility."],
    ["culture","Vagueness is acceptable when clear speech would make you accountable.","The command calls for direct, sound speech rather than strategic ambiguity."],
    ["culture","Politeness requires agreeing verbally while privately intending the opposite.","Courteous delivery does not justify deceptive speech." ]
  ]],
  ["39:9","Those who know and those who do not know are not treated as equal; people of understanding take heed.",[
    ["islam","Relevant knowledge matters when choosing whose judgment to rely on.","The verse explicitly distinguishes knowledge from its absence."],
    ["culture","Every opinion deserves equal authority regardless of evidence or expertise.","Equal human dignity does not make all claims equally informed."],
    ["culture","A degree or title makes a person’s claim correct outside the field they actually studied.","Knowledge must be relevant; prestige alone is not the distinction praised." ]
  ]],
  ["39:18","People of understanding listen carefully to speech and follow what is best.",[
    ["islam","Fair listening can precede disagreement; understanding a claim is not the same as accepting it.","The verse praises those who listen and then follow the best."],
    ["culture","Hearing an opposing view is disloyal because only weak people need to understand both sides.","Discernment requires listening before selecting what is best."],
    ["culture","The most emotionally satisfying interpretation should be chosen without comparing evidence.","Following the best requires judgment, not impulse." ]
  ]],
  ["39:53","People who have greatly wronged themselves are told not to despair of Allah’s mercy and to return to Him.",[
    ["islam","Serious sin does not close the door of sincere repentance while life and opportunity remain.","The verse addresses people who have transgressed greatly and forbids despair."],
    ["culture","Shame that convinces a person never to return to worship is proof of sincere remorse.","Remorse should lead back to Allah, not turn despair into a permanent identity."],
    ["culture","Hope in Allah’s mercy removes the need to stop wrongdoing or repair other people’s rights.","The following verse commands return and submission; mercy is not permission to continue harm." ]
  ]],
  ["41:34","Good and evil are not equal; repelling evil with what is better can transform hostility into close friendship.",[
    ["islam","A principled response may be both firm against wrong and better in method than the wrong received.","The command is not passivity but choosing the better response."],
    ["culture","Mirroring another person’s cruelty is necessary to avoid appearing weak.","The verse directly rejects equivalence between good and evil responses."],
    ["culture","Responding with what is better guarantees immediate reconciliation in every unsafe relationship.","The verse describes a moral possibility, not a command to abandon boundaries or ignore danger." ]
  ]],
  ["42:38","Believers answer their Lord, establish prayer, conduct affairs through consultation, and spend from provision.",[
    ["islam","Consultation is a community virtue tied to worship, not a cosmetic survey after decisions are final.","The verse describes affairs as genuinely conducted through mutual consultation."],
    ["culture","The person funding a project should decide everything because money creates greater moral insight.","Provision and consultation are listed together without turning spending into unchecked authority."],
    ["culture","Seeking input weakens a leader when the leader already feels certain.","Shura is praised as a standing quality, not only an emergency for confused leaders." ]
  ]],
  ["42:40","A wrong may receive an equivalent response, while pardon and reconciliation carry reward; Allah does not love wrongdoing.",[
    ["islam","Islam recognizes both proportional justice and virtuous pardon without making them identical.","The verse permits equivalent response and separately praises pardon that produces repair."],
    ["culture","Forgiveness proves that the original harm was minor and consequences are no longer appropriate.","Pardon can be morally great precisely when the wrong was real; proportional accountability remains recognized."],
    ["culture","Being wronged permits unlimited retaliation against the person and their reputation.","The verse limits response to equivalence and closes by rejecting wrongdoing." ]
  ]],
  ["42:43","Patient endurance and forgiveness are described as matters requiring real resolve.",[
    ["islam","Forgiveness can be difficult moral work rather than denial that harm occurred.","The verse pairs patience and forgiveness with determined resolve."],
    ["culture","A harmed person must forgive on demand to protect everyone else from discomfort.","A praised virtue cannot be manufactured through social coercion or used to erase accountability."],
    ["culture","Maintaining a safety boundary proves forgiveness was insincere.","Forgiveness of the heart and restoration of access are not the same decision." ]
  ]],
  ["49:6","Consequential news from an unreliable source must be verified before people are harmed in ignorance.",[
    ["islam","Urgency increases the need for verification when a false claim could injure people.","The verse connects unverified action with harm and later regret."],
    ["culture","A screenshot is self-verifying evidence even when its source, date, and context are unknown.","An image can also be incomplete or manipulated; the Qur’anic duty concerns verification, not format."],
    ["culture","Correcting misinformation shared by your own side weakens the cause and should wait.","Loyalty does not remove responsibility for preventable harm through false information." ]
  ]],
  ["49:9","Conflict between believers requires reconciliation with justice, including resistance to the party that persists in aggression.",[
    ["islam","Reconciliation is not neutral between ongoing aggression and the person being harmed.","The verse first requires confronting the transgressing party, then restoring peace with justice."],
    ["culture","Peace means asking both sides to apologize equally even when one side still controls and harms the other.","Equal wording can hide unequal conduct; the verse centers justice."],
    ["culture","Once a conflict is called ‘community drama,’ leaders have no duty to examine facts or stop harm.","The verse assigns active duties of intervention, reconciliation, and fairness." ]
  ]],
  ["49:11","People must not ridicule, defame, or call others offensive nicknames; those mocked may be better before Allah.",[
    ["islam","Humor remains morally accountable when it depends on race, accent, body, disability, or a disliked nickname.","The verse prohibits ridicule and degrading labels without a comedy exception."],
    ["culture","A nickname is harmless forever if the person laughed the first time.","Current dignity and consent matter; group pressure can hide discomfort."],
    ["culture","Mocking a public figure’s appearance is acceptable when their ideas deserve criticism.","Relevant criticism does not require the separate wrong of personal ridicule." ]
  ]],
  ["49:12","Believers must avoid much suspicion, spying, and backbiting.",[
    ["islam","A true statement can still be ghibah when it exposes an absent person in a way they would dislike without a valid need.","The verse forbids backbiting; truth distinguishes it from slander but does not make it harmless."],
    ["culture","Concern for someone gives unlimited permission to search their private messages.","Care does not erase the separate prohibition on spying; credible danger calls for proportionate safeguards."],
    ["culture","Private suspicion is harmless because no words have been spoken.","The verse begins by identifying some suspicion itself as sinful." ]
  ]],
  ["49:13","Human diversity supports mutual knowledge, while honor before Allah rests on taqwa rather than ancestry.",[
    ["islam","Ethnic, tribal, and national identities may be valued without becoming measures of superiority.","The verse affirms peoples and tribes while replacing ancestry with taqwa as the standard of honor."],
    ["culture","A family name makes someone a more suitable Muslim spouse regardless of character and compatibility.","Lineage cannot function as a divine ranking of worth."],
    ["culture","Racism exists only when someone openly says another race is inferior.","Status preferences, exclusion, and unequal assumptions can also contradict the verse’s standard." ]
  ]],
  ["53:32","Allah’s forgiveness is vast, and people must not declare themselves pure because Allah knows best who has taqwa.",[
    ["islam","Religious growth should increase humility about one’s own standing before Allah.","The verse forbids self-purification claims and returns knowledge of taqwa to Allah."],
    ["culture","Visible religious consistency gives a person certainty that they are spiritually superior to others.","Outward evidence does not grant knowledge of final inward rank."],
    ["culture","Refusing self-praise means denying every blessing, skill, or improvement Allah has given.","Humility rejects spiritual superiority, not truthful gratitude." ]
  ]],
  ["58:11","Believers should make room in gatherings, and Allah raises people of faith and knowledge in rank.",[
    ["islam","Religious gatherings should make practical room for others rather than rewarding whoever occupies space first.","The verse begins with an instruction to expand space before mentioning raised ranks."],
    ["culture","Knowledge raises status so a scholar no longer needs to observe ordinary courtesy.","The verse joins rank with obedience to social instruction, not exemption from it."],
    ["culture","Newcomers should remain at the margins until long-term members decide they belong.","Making room is a direct command, not a favor reserved for insiders." ]
  ]],
  ["60:8","Kindness and justice are permitted toward people who do not fight Muslims for faith or expel them from their homes.",[
    ["islam","Religious difference does not cancel ordinary justice, kindness, and good neighborly conduct.","The verse explicitly permits birr and justice toward peaceful non-Muslims."],
    ["culture","Fair treatment of non-Muslims shows weak loyalty to Islam.","Allah says He loves those who act justly in this context."],
    ["culture","Kindness requires pretending theological differences do not exist.","The verse combines principled religious identity with justice and good conduct." ]
  ]],
  ["61:2","Believers are strongly rebuked for saying what they do not do.",[
    ["islam","Public religious advice creates a duty to examine whether your own conduct contradicts it.","The verse targets the gap between speech and action."],
    ["culture","A persuasive reminder is fully successful even when the speaker knowingly refuses to practice it.","Benefit to listeners does not erase the speaker’s accountability for contradiction."],
    ["culture","Because nobody is perfect, people should never advise good until they have no faults.","The rebuke calls for aligned action, not abandonment of both counsel and self-reform." ]
  ]],
  ["64:15","Wealth and children are a test, while tremendous reward remains with Allah.",[
    ["islam","A blessing can also test priorities, justice, gratitude, and attachment.","The verse refuses the assumption that possession is only proof of approval."],
    ["culture","A child’s success proves the parents are more favored by Allah than parents carrying a harder test.","Children are described as a trial, not a simple ranking of divine love."],
    ["culture","Providing financially excuses neglecting ethical or spiritual responsibility toward family.","Wealth itself is part of the test, including how it is earned and used." ]
  ]],
  ["65:2-3","Taqwa is connected with a way out, unexpected provision, and reliance on Allah, whose decree reaches its measure.",[
    ["islam","Taqwa can require difficult boundaries or lawful action before an unexpected opening appears.","The promise occurs within verses regulating responsible conduct, not passive wishfulness."],
    ["culture","Tawakkul means refusing planning because provision must arrive without human effort.","Reliance on Allah accompanies obedience and action throughout the passage."],
    ["culture","Financial difficulty proves a person lacks taqwa because the promised provision must always appear as immediate wealth.","Provision and a way out occur as Allah measures; the verse is not a license to judge another person’s inner state." ]
  ]]
];

const v52CultureEvidence = globalThis.alMajlisV52CultureEvidence || {};
const v52CultureRows = v52CultureGroups.flatMap(([ref, meaning, statements]) =>
  statements.map(([classification, prompt, evidence]) => ({ ref, meaning, classification, prompt, evidence }))
);
if (v52CultureGroups.length !== 95 || v52CultureGroups.some(([, , rows]) => rows.length !== 3) || v52CultureRows.length !== 285) {
  throw new Error(`Expected 95 three-card culture groups; found ${v52CultureGroups.length} groups and ${v52CultureRows.length} cards.`);
}

globalThis.alMajlisV52CultureCards = v52CultureRows.map((row, index) => {
  const arabic = v52CultureEvidence[row.ref];
  if (!arabic) throw new Error(`Missing v52 culture evidence for Qur’an ${row.ref}.`);
  return {
    type: 'culture',
    id: `CULTURE-${String(index + 16).padStart(3, '0')}`,
    prompt: row.prompt,
    answer: row.classification === 'islam' ? 'Islam' : 'Culture',
    classification: row.classification,
    arabic,
    english: row.meaning,
    evidence: row.evidence,
    source: `Qur’an ${row.ref.replace('-', '–')}`
  };
});
