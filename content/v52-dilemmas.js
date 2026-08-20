/* Five distinct applications per source-backed principle. Guides frame discussion, not rulings. */
const v52DilemmaGroups = [
  ["Qur’an 49:6", [
    ["A voice note warning about a local teacher is spreading quickly. The speaker sounds credible, but nobody can identify the original witness.", "urgency, source identity, corroboration, and the harm of both silence and false accusation"],
    ["Your team must decide today whether to suspend an employee after an anonymous complaint that contains one verifiable detail and several untested claims.", "immediate safety, procedural fairness, independent verification, and temporary measures"],
    ["A fundraising post describes a family’s emergency, but the organizer refuses to show documentation because doing so would expose private medical information.", "privacy-preserving verification, donor trust, urgency, and proportional disclosure"],
    ["A relative reports that another family member insulted you. Their version fits an old pattern, yet the quoted words have passed through three people.", "direct clarification, prior bias, chain-of-reporting errors, and family peace"],
    ["A clip appears to show abuse during an arrest, but the beginning is missing and the full video may take days to obtain while public pressure is building.", "visible evidence, missing context, immediate protection, and claims that exceed what is known"]
  ]],
  ["Qur’an 49:12", [
    ["You suspect a teenager is hiding dangerous online activity. Reading every private message may reveal the truth but may also destroy trust without sufficient cause.", "reasonable concern, least-intrusive checks, safety, and the difference between care and spying"],
    ["A spouse notices unexplained transactions and wants access to the other spouse’s entire phone rather than an explanation of the specific concern.", "financial transparency, privacy, evidence, and proportionate reassurance"],
    ["A community board wants volunteers to search a critic’s old posts for hypocrisy before answering the critic’s current evidence.", "relevance, retaliation, public accountability, and searching for concealed faults"],
    ["A friend’s location sharing remains active after the original safety reason has ended. Checking it would answer a question they have avoided.", "consent, residual access, curiosity, and legitimate safety needs"],
    ["Parents consider placing a hidden recorder in an adult child’s room because they fear a harmful relationship but have no evidence of immediate danger.", "adult privacy, credible risk, direct conversation, and escalation only when justified"]
  ]],
  ["Qur’an 4:135", [
    ["Your sibling applies for a role you supervise and is qualified, but another candidate is stronger. The family expects you to ‘take care of your own.’", "conflict of interest, transparent criteria, family pressure, and impartial process"],
    ["You discover that an error in your testimony helped your friend avoid consequences while an uninvolved person absorbed the blame.", "correcting the record, loyalty, restitution, and the cost of delayed truth"],
    ["A parent asks you to confirm a version of a property dispute you know leaves out a promise made to another relative.", "respectful refusal, accurate testimony, family hierarchy, and legal documentation"],
    ["Your organization’s public statement is technically accurate but omits a failure you personally approved.", "self-implication, material omission, institutional trust, and complete accountability"],
    ["A close friend asks you to sit on a panel deciding their complaint because you understand what they suffered better than anyone else.", "empathy, impartiality, recusal, and ensuring the complaint is still heard well"]
  ]],
  ["Qur’an 5:8", [
    ["A person who has repeatedly mocked your faith is falsely accused of a more serious offense, and correcting the rumor may make them look sympathetic.", "truth despite hostility, verified conduct, and refusing to weaponize a falsehood"],
    ["A rival organization proposes a useful community project after years of unfair criticism toward your group.", "public benefit, guarded cooperation, accountability, and resentment"],
    ["An employee you dislike makes a legitimate complaint about a manager you respect.", "separating credibility from affection, evidence, and equal procedural protection"],
    ["A political cause you oppose presents accurate evidence of civilian harm caused by people you generally support.", "consistent moral standards, verified facts, tribal loyalty, and human dignity"],
    ["Someone who once betrayed you now needs a reference containing both genuine strengths and relevant weaknesses.", "decision-relevant truth, revenge, fairness, and appropriate boundaries"]
  ]],
  ["Qur’an 17:53", [
    ["A blunt public reply would stop misinformation quickly, but its contemptuous tone will likely make the audience more defensive.", "accuracy, tone, audience psychology, and the least inflammatory effective response"],
    ["A relative only responds when confronted harshly, yet every harsh exchange deepens a cycle of disrespect.", "firmness, clarity, repeated patterns, and speech that does not feed escalation"],
    ["Your apology is truthful but includes enough explanation that the harmed person may hear it as self-defense.", "ownership, necessary context, timing, and centering repair"],
    ["A colleague asks for honest feedback moments before a high-stakes presentation when no meaningful correction is possible.", "truthfulness, timing, usefulness, and avoiding unnecessary destabilization"],
    ["A friend wants you to repeat an insult exactly so they can understand why another person is upset.", "necessary information, re-injury, paraphrase, and refusing to spread degrading language"]
  ]],
  ["Qur’an 16:125", [
    ["A younger relative shares a confident religious claim learned online. Correcting every detail at dinner may embarrass them; silence may validate it.", "wisdom, private follow-up, material error, and preserving willingness to learn"],
    ["A public speaker’s harmful wording needs correction, but your first response is driven more by anger than by a plan to protect listeners.", "purpose, audience, evidence, tone, and effective correction"],
    ["A friend asks for Islamic advice while in acute grief. The correct principles may be true but poorly timed.", "emotional capacity, presence, truthful hope, and delayed instruction"],
    ["An elder repeats a cultural rule as religion. They will hear direct contradiction from you as humiliation.", "clear evidence, relational language, qualified support, and avoiding false agreement"],
    ["A debate invitation promises a large audience but rewards spectacle, interruption, and simplified positions.", "benefit, format, competence, public confusion, and whether declining serves truth better"]
  ]],
  ["Qur’an 16:91", [
    ["You agreed to volunteer weekly before your health changed. The organization built its schedule around you and has no replacement.", "capacity, notice, reliance, renegotiation, and avoiding harm to health"],
    ["A client’s contract permits cancellation, but you made an informal promise that led them to reject another offer.", "legal permission, moral reliance, disclosure, and fair compensation"],
    ["A friend shared a secret after you promised silence, then the secret became relevant to another person’s safety.", "the scope of the promise, imminent harm, minimum disclosure, and appropriate authority"],
    ["Parents promised equal help with two weddings, but a sudden financial crisis makes the second promise much harder to keep.", "changed capacity, equality, transparent conversation, and nonfinancial repair"],
    ["A campaign pledge was made under assumptions that later proved false. Keeping it literally may now cause the very harm it meant to prevent.", "public trust, changed facts, accountable revision, and explaining rather than hiding reversal"]
  ]],
  ["Qur’an 4:58", [
    ["A former employee left confidential files on your device. The files reveal misconduct but also contain unrelated private information.", "custody of data, relevant evidence, secure reporting, and deletion of what is not yours"],
    ["You are asked to distribute aid among relatives and strangers while the donor gives you no criteria beyond ‘use your judgment.’", "transparent standards, conflicts of interest, urgent need, and recordkeeping"],
    ["A friend leaves a valuable item with you for months, and storing it safely now carries a real cost you never discussed.", "care of entrusted property, notice, reasonable expense, and consent before changing arrangements"],
    ["A manager gives you access to salary data for one task. The information would strengthen employees’ case for correcting inequity.", "authorized purpose, privacy, systemic harm, and lawful internal reporting"],
    ["You inherit administration of an online group whose old moderators collected sensitive member reports with no retention policy.", "data minimization, consent, safeguarding, and responsible deletion or transfer"]
  ]],
  ["Qur’an 42:38", [
    ["A family asks everyone’s opinion about elder care, but one person has already signed a lease without telling the others.", "real consultation, sunk costs, the elder’s voice, and fair distribution of care"],
    ["A board consults staff but never explains why every unpopular recommendation is rejected.", "decision authority, feedback loops, transparency, and consultation that is more than performance"],
    ["A married couple must choose where to live; one spouse earns more while the other will bear most caregiving consequences.", "whose knowledge matters, unequal consequences, finances, and shared decision-making"],
    ["A mosque schedules programs after surveying regular attendees, but people excluded by the existing schedule never received the survey.", "sampling bias, accessibility, absent stakeholders, and revisiting the process"],
    ["An expert warns that the group’s preferred plan is unsafe, while affected residents distrust the expert because of past exclusion.", "technical knowledge, lived experience, institutional history, and a process that can earn trust"]
  ]],
  ["Qur’an 49:9–10", [
    ["Two friends demand that you mediate, but each wants you to begin by declaring the other person wrong.", "neutral process, verified facts, stopping ongoing harm, and conditions for fair mediation"],
    ["A community conflict appears mutual, yet one side controls jobs, housing, and public platforms.", "power imbalance, false equivalence, protection from retaliation, and just reconciliation"],
    ["A reconciliation meeting could restore peace, but the harmed party has not received the information needed to consent safely.", "truth, safety, voluntary participation, and repair before social pressure"],
    ["Leaders want a joint photo to calm public concern while the underlying financial dispute remains unresolved.", "symbolic peace, substantive settlement, transparency, and avoiding a misleading appearance"],
    ["A long conflict has produced wrongs on both sides, but insisting on a complete historical agreement may prevent urgent present-day protections.", "immediate harm reduction, layered accountability, disputed history, and staged reconciliation"]
  ]],
  ["Qur’an 31:15", [
    ["A parent demands that you cut off a lawful friendship because of the friend’s ethnicity, while refusing may cause serious family conflict.", "noncompliance with prejudice, continued kindness, safety, and patient boundaries"],
    ["Your mother expects access to every detail of your marriage as proof that you still honor her.", "parental care, marital privacy, reassurance, and limits without contempt"],
    ["A father asks an adult child to enter a career they believe will damage their health and faith.", "respectful counsel, adult responsibility, family sacrifice, and independent consequences"],
    ["Parents need increasing care, but one sibling is expected to provide it because they are unmarried.", "parental rights, sibling fairness, capacity, and shared planning"],
    ["A parent repeatedly insults your spouse and says enduring it is part of obedience.", "kindness to parents, protection of a spouse, direct limits, and qualified family support"]
  ]],
  ["Qur’an 4:19", [
    ["One spouse earns the income and therefore expects unilateral authority over every household decision.", "financial contribution, companionship, consultation, and coercive use of dependency"],
    ["A spouse is going through depression and contributes less at home, leaving the other exhausted and resentful.", "illness, capacity, mutual rights, practical support, and sustainable redistribution"],
    ["A private marital weakness becomes a joke shared with friends because no names are used.", "intimate privacy, identifiability, social support, and betrayal disguised as humor"],
    ["A couple agreed one spouse would pause a career, but years later the costs and desires have changed.", "changed circumstances, prior reliance, retraining, finances, and good-faith renegotiation"],
    ["One spouse uses religious advice about patience whenever the other raises a repeated pattern of emotional harm.", "good treatment, misuse of religious language, safety, accountability, and qualified counsel"]
  ]],
  ["Qur’an 2:282", [
    ["A close friend asks for a large interest-free loan and says written terms would show distrust.", "documentation, preserving friendship, repayment capacity, and clear expectations"],
    ["Two partners remember an oral profit-sharing agreement differently after the business succeeds.", "records, prior conduct, independent mediation, and avoiding memory shaped by gain"],
    ["A relative guarantees a debt they do not fully understand because refusing would shame the family.", "informed consent, family pressure, liability, and plain-language explanation"],
    ["A freelancer begins urgent work before price and scope are settled, then the client requests repeated additions.", "defined scope, fair compensation, reliance, and pausing before resentment grows"],
    ["A community loan fund avoids paperwork to feel compassionate, but inconsistent memories now produce unequal treatment.", "mercy, documentation, privacy, consistency, and transparent policy"]
  ]],
  ["Qur’an 2:280", [
    ["A borrower who lost work asks for more time but continues spending publicly on nonessential items.", "verified hardship, dignity, accountability, revised terms, and assumptions based on appearances"],
    ["Forgiving a debt would help one family but reduce a small lender’s ability to meet their own obligations.", "real capacity on both sides, extension, partial relief, and fair prioritization"],
    ["A creditor posts indirect messages online hoping social pressure will produce repayment.", "rightful claim, humiliation, private process, and proportionate collection"],
    ["Several relatives owe one person money; only the most outspoken borrower receives repeated extensions.", "consistent criteria, differing hardships, documentation, and avoiding reward for pressure"],
    ["A business can survive only by delaying payment to a small supplier who may then fail.", "distribution of hardship, honest notice, alternatives, and whose survival is being financed"]
  ]],
  ["Qur’an 2:262–264", [
    ["A donor funds a student’s tuition but expects regular grades, photos, and public gratitude not discussed beforehand.", "stewardship, dignity, conditions, consent, and hidden emotional price"],
    ["A relative repeatedly reminds the family of money given during a past crisis whenever their advice is challenged.", "generosity, leverage, boundaries, and repairing a gift turned into control"],
    ["A charity’s most effective advertisement is a recipient’s humiliating before-and-after story.", "fundraising benefit, informed consent, power imbalance, and lasting digital exposure"],
    ["You can help someone anonymously, but revealing your role may encourage others to contribute.", "sincerity, likely benefit, recipient preference, and minimizing self-promotion"],
    ["A sponsor threatens to withdraw support after the recipient makes a lawful personal choice the sponsor dislikes.", "gift conditions, autonomy, legitimate program criteria, and coercion"]
  ]],
  ["Qur’an 2:271", [
    ["Publicizing a large donation may normalize generosity, but you know public recognition also motivates you strongly.", "public benefit, mixed motives, private alternatives, and safeguards against self-display"],
    ["A community needs transparent fundraising totals, yet naming donors may create status competition.", "financial transparency, donor privacy, aggregate reporting, and social pressure"],
    ["A child wants to post a family’s charity project, while the parents want the practice to remain private.", "teaching generosity, family consent, recipient dignity, and digital permanence"],
    ["An employer matches employee donations only if names and amounts appear on an internal leaderboard.", "incentive benefit, coercion, privacy, and alternative verification"],
    ["Someone shares a private gift publicly to thank you, exposing an act you intended to conceal.", "their gratitude, your intention, gentle boundary-setting, and avoiding resentment"]
  ]],
  ["Qur’an 7:31", [
    ["A wedding budget is affordable for the couple but establishes expectations that poorer relatives will feel forced to match.", "personal means, social pressure, celebration, and avoidable excess"],
    ["A host prepares far more food than guests can eat because abundance represents honor in the family.", "hospitality, waste, redistribution plans, and cultural meaning"],
    ["Replacing a working phone supports a small business image but consumes savings intended for emergencies.", "real business benefit, image, financial resilience, and responsible consumption"],
    ["A community event uses luxury decor while its accessibility and childcare needs remain unfunded.", "priorities, beauty, inclusion, and who bears the consequences of the budget"],
    ["A person restricts food so severely in the name of discipline that health and worship suffer.", "moderation, health, control, professional care, and avoiding moral pride in deprivation"]
  ]],
  ["Sahih al-Bukhari 2270", [
    ["A contractor finishes excellent work, but the client delays final payment while disputing a minor item never included in the scope.", "full wages, genuine defects, prompt resolution, and leverage created by withholding payment"],
    ["An unpaid internship offers valuable training but assigns routine work that replaces a salaried employee.", "education, productive value, informed choice, class access, and exploitation"],
    ["A family business expects relatives to work extra hours without tracking them because profits stay ‘within the family.’", "clear compensation, ownership, family obligation, and hidden labor"],
    ["A domestic worker agrees to duties in a language they only partly understand, then is blamed for refusing added tasks.", "informed agreement, power, translation, scope, and fair pay"],
    ["A nonprofit cannot meet payroll unless staff voluntarily defer wages, but leaders have not disclosed all available reserves.", "financial transparency, voluntary sacrifice, leadership responsibility, and equal burden"]
  ]],
  ["Sahih al-Bukhari 7174", [
    ["A vendor sends a valuable gift to the employee who will score its bid, calling it ordinary hospitality.", "role-based influence, timing, disclosure, recusal, and whether the gift would exist without the position"],
    ["Parents give an expensive gift to the teacher just before final grades are submitted.", "gratitude, perceived pressure, equal treatment, and institutional policy"],
    ["A public official accepts free travel to a conference from a company seeking regulatory approval.", "public trust, benefit tied to office, transparency, and independent funding"],
    ["A physician is paid to promote a product they genuinely use without clearly stating the sponsorship.", "truthful experience, material influence, disclosure, and patient trust"],
    ["A community leader receives personal discounts from a venue repeatedly booked with community funds.", "personal benefit, procurement fairness, disclosure, and returning or redirecting the advantage"]
  ]],
  ["Sahih al-Bukhari 7138", [
    ["A manager protects a high performer whose results depend on humiliating junior staff.", "results, duty of care, hidden turnover, corrective process, and protection from retaliation"],
    ["Parents disagree about a teenager’s safety plan, and each privately recruits the child to support their side.", "shared guardianship, the child’s welfare, parental conflict, and unified communication"],
    ["A volunteer leader keeps accepting tasks because others may do them poorly, then becomes unavailable without a handover.", "quality, delegation, continuity, burnout, and building others’ capacity"],
    ["An elder controls family property for several heirs but shares no records because questioning them feels disrespectful.", "fiduciary responsibility, transparent accounts, respect, and the heirs’ rights"],
    ["A moderator removes harmful comments inconsistently because close friends receive private warnings while strangers are banned.", "consistent rules, relationships, proportional discipline, and appeal"]
  ]],
  ["Qur’an 5:32", [
    ["A friend reveals thoughts of immediate self-harm but forbids you from contacting anyone.", "preserving life, immediate professional help, minimum necessary disclosure, and staying present"],
    ["A family hides escalating domestic violence to avoid public shame while children remain in the home.", "immediate safety, qualified safeguarding, truthful documentation, and rejecting reputation as the priority"],
    ["A driver feels too tired to continue safely, but stopping will cause passengers to miss an important event.", "risk to life, social pressure, alternate transport, and refusing preventable danger"],
    ["An employee discovers a safety defect that management wants to study quietly before warning users.", "severity, probability, urgent containment, accurate notice, and protected reporting"],
    ["A patient rejects urgent treatment based on misinformation from a trusted influencer.", "capacity, informed consent, correcting false claims, medical expertise, and emergency limits"]
  ]],
  ["Qur’an 42:40", [
    ["A person who harmed you offers full restitution and change, but renewed closeness still feels unsafe.", "forgiveness, justice, boundaries, evidence of change, and freedom from forced reconciliation"],
    ["Public consequences may deter repeated misconduct, while a private repair process may better restore the specific victim.", "proportional accountability, protection of others, victim preference, and public interest"],
    ["A child breaks something valuable and confesses immediately; replacing it is beyond their means.", "truthfulness, age, restitution, teaching responsibility, and mercy"],
    ["A colleague takes credit for your work, then corrects the record only after being confronted privately.", "repair, trust, future safeguards, and consequences proportionate to a corrected wrong"],
    ["Someone spreads a damaging rumor and later posts a vague apology that does not identify or correct the claim.", "equivalent public correction, dignity, proof of reach, and avoiding retaliatory humiliation"]
  ]],
  ["Qur’an 3:134", [
    ["Your anger is justified, but sending the message tonight will likely turn a solvable issue into a lasting rupture.", "valid anger, timing, clear documentation, and delaying action without burying the issue"],
    ["A child’s repeated carelessness triggers anger intensified by unrelated work stress.", "the actual behavior, displaced emotion, proportionate consequence, and repair after overreaction"],
    ["A public insult requires a response, yet your prepared reply targets the person’s unrelated weakness.", "defending truth, personal retaliation, audience, and limits on counterattack"],
    ["A spouse withdraws during conflict to avoid saying something harmful, but the silence has no agreed endpoint.", "de-escalation, abandonment fears, time-bounded pause, and return to the issue"],
    ["Community anger is mobilizing people toward a good cause, but organizers reward the most dehumanizing language.", "moral energy, truthful speech, long-term character, and effective non-dehumanizing action"]
  ]],
  ["Qur’an 49:12; Sahih Muslim 2589", [
    ["A potential spouse’s family asks about a person you know well. Relevant concerns are mixed with embarrassing details that do not affect the decision.", "sincere warning, verified relevance, minimum disclosure, and avoiding character assassination"],
    ["A support group needs members to discuss harmful behavior by absent relatives in order to receive help.", "seeking support, necessary detail, confidentiality, and refusing entertainment through disclosure"],
    ["An employer asks why a former colleague was dismissed, but the formal record does not capture the safety concern you witnessed.", "truthful reference, legal limits, decision relevance, and protected reporting channels"],
    ["A friend asks whether another friend can keep a secret; your honest answer requires mentioning a past breach.", "specific need, concise fact, repentance or changed behavior, and avoiding broad labels"],
    ["Reviewing a business publicly could protect customers, but including the owner’s family conflict would make the story more persuasive.", "consumer protection, evidence, relevance, and exclusion of private humiliation"]
  ]],
  ["Qur’an 4:17–18", [
    ["A person repeatedly apologizes after being caught but makes no change before the next opportunity.", "remorse, stopping the conduct, concrete prevention, and accountability beyond words"],
    ["Someone privately repents from theft but returning the item would reveal the offense and devastate their family.", "rights of the owner, discreet restitution, qualified guidance, and avoiding self-protective concealment"],
    ["An old harmful post remains online after the author has changed, continuing to influence new viewers.", "removing ongoing harm, transparent correction, evidence of change, and digital responsibility"],
    ["A leader admits wrongdoing only after documents make denial impossible, then asks the community to focus on mercy.", "truthfulness, timing, restitution, loss of authority, and mercy without erased consequences"],
    ["A friend wants to announce every past sin publicly as proof that their repentance is sincere.", "concealment, necessary repair, affected rights, and avoiding a new form of attention-seeking"]
  ]],
  ["Qur’an 3:104; 16:125", [
    ["A harmful joke is common in your workplace. Challenging it publicly may protect targets but could make colleagues defensive.", "severity, audience, repetition, private and public options, and protecting those targeted"],
    ["A relative’s business practice appears unethical, but you do not understand the contract well enough to accuse them.", "learning first, asking questions, qualified expertise, and avoiding silence born only of discomfort"],
    ["A friend’s dangerous driving continues despite gentle reminders that have changed nothing.", "escalating firmness, immediate safety, refusing participation, and appropriate authority"],
    ["A community policy excludes disabled attendees unintentionally; leaders become defensive whenever it is raised.", "clear evidence, affected voices, constructive proposal, persistence, and public accountability if needed"],
    ["You notice a stranger being mistreated in public but cannot tell whether intervening directly will increase danger.", "immediate safety, summoning help, witness responsibilities, and proportionate intervention"]
  ]],
  ["Qur’an 7:199", [
    ["A harmless wedding custom comforts elders but places a heavy planning burden on the couple.", "permissible custom, voluntary participation, family kindness, and preventing custom from becoming coercion"],
    ["Guests expect a host to refuse payment three times before accepting, causing genuine confusion about consent.", "courtesy, clear communication, cultural scripts, and avoiding manipulation"],
    ["A workplace allows religious clothing but treats one ethnic style as less professional than another.", "legitimate dress standards, cultural bias, equal treatment, and respectful accommodation"],
    ["A family uses an honorific custom that a new member experiences as exclusionary and difficult to learn.", "belonging, cultural preservation, explanation, and flexibility without ridicule"],
    ["A funeral tradition is permissible but financially burdens grieving families who fear community judgment.", "comfort, social pressure, expense, and simplifying without condemning what is merely customary"]
  ]],
  ["Qur’an 13:11", [
    ["A person keeps praying for a new job while avoiding the training every available role requires.", "supplication, realistic effort, fear of failure, and a sustainable first action"],
    ["A community blames low youth attendance on weak faith without asking young people about timing, safety, or relevance.", "self-examination, structural barriers, spiritual needs, and evidence-based change"],
    ["A couple wants their conflict to improve but repeats the same conversation without changing when or how it happens.", "agency, process change, outside support, and responsibility on both sides"],
    ["A person describes debt as destiny while refusing to review spending because the numbers create shame.", "decree, agency, compassionate financial help, and facing controllable choices"],
    ["An organization asks Allah for growth while withholding decision-making from everyone capable of carrying new work.", "prayer, delegation, systems, and accepting the consequences of retained control"]
  ]],
  ["Qur’an 3:159", [
    ["After careful consultation, your project fails for a reason nobody predicted. The team now wants someone to blame.", "responsible review, unforeseeable risk, trust in Allah, and learning without scapegoating"],
    ["You must choose between two medically reasonable treatments and keep delaying because certainty is impossible.", "qualified advice, values, bounded uncertainty, decision, and reliance after responsible means"],
    ["A family makes a sound travel plan, then one member insists safety precautions show weak tawakkul.", "taking means, realistic risk, spiritual trust, and avoiding reckless performance of faith"],
    ["An entrepreneur uses ‘rizq is from Allah’ to avoid documenting costs and testing assumptions.", "reliance, stewardship, evidence, planning, and accepting a plan may need to end"],
    ["A parent has researched a child’s school carefully but remains consumed by every unlikely danger.", "reasonable safeguards, limits of control, anxiety support, and entrusting what cannot be controlled"]
  ]],
  ["Qur’an 16:43", [
    ["A popular speaker gives confident mental-health advice outside their training, and listeners assume religious knowledge makes it clinical expertise.", "scope of competence, referral, helpful general principles, and risk of authoritative overreach"],
    ["A doctor answers a detailed fiqh question from personal reading while dismissing the need for a scholar.", "domain expertise, humility, collaboration, and limits of adjacent knowledge"],
    ["A family seeks a ruling from whoever gives the easiest answer without disclosing facts that complicated earlier answers.", "complete facts, qualified counsel, consistency, and shopping for permission"],
    ["An engineer raises a structural concern that community leaders want a religious speaker to overrule.", "technical expertise, decision authority, safety, and the difference between values and measurements"],
    ["Two qualified specialists disagree, and a nonexpert audience chooses the one whose personality feels more trustworthy.", "credentials, methods, evidence, uncertainty, and avoiding charisma as the deciding proof"]
  ]],
  ["Qur’an 4:59", [
    ["Two community teachers give different answers on a recognized legal disagreement, and students begin accusing each other of following desire.", "recognized disagreement, evidence, qualified scholarship, adab, and avoiding claims of consensus"],
    ["A policy follows one scholarly view but serves a diverse congregation that practices several established views.", "institutional consistency, accommodation, safety, and respect for legitimate difference"],
    ["A family disagreement about worship practice becomes a test of loyalty to one side’s teacher.", "source quality, scope of disagreement, family peace, and refusing personality-based allegiance"],
    ["Someone cites obedience to leadership when the organization’s own appeal process is being blocked.", "lawful authority, established review, transparency, and accountability within obedience"],
    ["A Muslim living under civil law faces a contract dispute where religious advice and enforceable legal rights do not fully align.", "qualified legal and Islamic counsel, promises, public law, and avoiding uninformed certainty"]
  ]],
  ["Qur’an 17:36", [
    ["You are invited onto a podcast to discuss a breaking crisis you have followed closely but never studied professionally.", "scope of knowledge, public reach, uncertainty, and redirecting to better expertise"],
    ["A statistic supports your argument, but you cannot locate the study after seeing it repeated in several trusted posts.", "traceable evidence, repetition, withholding the claim, and correcting prior sharing"],
    ["A friend asks what a scholar ‘really meant’ in a language you only partly understand.", "language limits, full context, translation, and refusing to infer private intention"],
    ["A manager must explain a technical failure before engineers know the root cause.", "confirmed facts, hypotheses, transparent uncertainty, and timely safety communication"],
    ["A witness remembers the emotional certainty of an event but is unsure about the exact sequence.", "confidence versus accuracy, contemporaneous records, precise testimony, and admitting memory limits"]
  ]],
  ["Sahih Muslim 1437", [
    ["A spouse shares intimate details with a therapist and wonders what can also be shared with close friends for support.", "need for help, professional confidentiality, intimate privacy, and minimum necessary detail"],
    ["After a divorce, each person tells relatives private details to defend their reputation.", "truth needed for support or rights, intimate secrecy, mutual harm, and qualified mediation"],
    ["A friend reveals another couple’s private conflict because they fear one spouse is unsafe.", "credible risk, appropriate safeguarding, verification, and restricting disclosure to people who can help"],
    ["A memoir could help others but includes identifiable private information about a former spouse who refuses consent.", "public benefit, ownership of shared history, anonymization, and lasting harm"],
    ["A medical condition affects marital rights, yet the person fears disclosure will end an engagement.", "material information, privacy, informed consent, timing, and qualified medical and Islamic guidance"]
  ]],
  ["Qur’an 4:35", [
    ["A couple chooses mediators who love them but have already taken sides based on partial stories.", "mediator neutrality, relevant expertise, confidentiality, and willingness to challenge both parties"],
    ["Family mediation is culturally expected, but one party fears retaliation if private statements reach relatives.", "safety, confidentiality, alternate mediators, and voluntary participation"],
    ["A mediator focuses on preserving the marriage before determining whether abuse is occurring.", "safety assessment, limits of reconciliation, qualified support, and the harmed person’s agency"],
    ["Two mediators agree on the facts but differ on whether the relationship can be repaired.", "goals, evidence of change, rights, time, and separating advice from coercion"],
    ["A couple cannot afford professional help, while informal helpers lack training and keep disclosing details.", "accessible support, confidentiality boundaries, referral, and limiting helpers to their competence"]
  ]],
  ["Qur’an 2:231", [
    ["A spouse delays finalizing a separation mainly to preserve control over housing and finances.", "rights during separation, coercive delay, documentation, and qualified legal guidance"],
    ["A couple repeatedly reconciles under family pressure without addressing the conduct that caused separation.", "genuine reform, voluntary choice, safety, and avoiding reconciliation as a public performance"],
    ["One parent uses access to children to punish the other after divorce.", "children’s welfare, parental rights, conflict boundaries, and professional legal support"],
    ["A spouse threatens divorce during every argument but later says the words should never be taken seriously.", "harm, legal significance, communication patterns, and urgent qualified counsel"],
    ["Families push for a quick private settlement that leaves one spouse unaware of enforceable financial rights.", "informed consent, independent advice, dignity, and no-pressure negotiation"]
  ]],
  ["Qur’an 4:7", [
    ["Siblings agree informally that daughters will waive inheritance so ancestral land remains under one family name.", "fixed rights, genuine consent after ownership, social pressure, and qualified estate guidance"],
    ["An heir provided years of unpaid care and believes equal application of the estate plan is therefore unjust.", "inheritance rights, documented debts or gifts, caregiving labor, and separation of claims"],
    ["A parent distributes nearly all wealth before death to one child who is considered more responsible.", "lifetime gifts, fairness, intent to defeat heirs’ rights, and qualified counsel"],
    ["Family members hide an asset because revealing it would restart a painful legal dispute.", "complete estate inventory, truth, delay costs, and formal resolution"],
    ["An heir wants immediate sale of a home while another heir lives there and has nowhere affordable to go.", "ownership rights, housing vulnerability, fair rent or buyout, time limits, and mediation"]
  ]],
  ["Sahih al-Bukhari 5138", [
    ["A family treats silence during an engagement meeting as consent because the daughter fears contradicting elders.", "freely expressed consent, private opportunity to answer, power pressure, and qualified safeguards"],
    ["A man agrees to marry after months of emotional pressure that refusal will worsen a parent’s illness.", "adult consent, family care, manipulation through guilt, and space for an unpressured decision"],
    ["An engaged couple wants to proceed, but one person withholds a major fact likely to change the other’s consent.", "material disclosure, privacy, timing, and informed choice"],
    ["Parents reject every suitable proposal for reasons tied mainly to ethnicity while claiming broad parental discretion.", "prejudice, family counsel, the adult’s rights, and qualified local guidance"],
    ["A person says yes to avoid public embarrassment after guests and arrangements have already been announced.", "consent at every stage, sunk costs, privacy, and stopping a process that has become coercive"]
  ]],
  ["Sahih al-Bukhari 2587", [
    ["Parents pay one adult child’s debts repeatedly but refuse comparable help to a careful child facing a first emergency.", "need, past support, behavior, equal love, and transparent criteria"],
    ["A child with a disability requires more time and money, while siblings experience the difference as favoritism.", "equity, explanation, privacy, individual need, and meaningful attention for every child"],
    ["Parents give property to the child who stayed nearby and provided care, without discussing whether it is compensation or a gift.", "fairness, documented caregiving, gifts, inheritance effects, and family transparency"],
    ["One child receives stricter discipline because parents believe they are ‘strong enough to handle it.’", "consistent standards, individual needs, stereotypes, and repair of unequal treatment"],
    ["Grandparents fund only grandsons’ education because they expect daughters to marry.", "gender bias, opportunity, family resources, and correcting custom presented as practicality"]
  ]],
  ["Qur’an 4:36", [
    ["A neighbor’s disability requires occasional help, but requests have become frequent and unpredictable.", "neighborly care, capacity, a reliable plan, and connecting wider support"],
    ["You know a neighbor’s loud nighttime activity is tied to caregiving, while your family is losing sleep.", "compassion, real harm, direct conversation, accommodations, and shared solutions"],
    ["A building group chat mocks a neighbor who does not follow unwritten cultural customs.", "actual rights, custom, dignity, and interrupting collective ridicule"],
    ["A neighbor asks you not to report a dangerous code violation because repairs may cause eviction.", "immediate safety, housing vulnerability, notice, assistance, and responsible authorities"],
    ["A family delivers food generously but repeatedly enters the neighbor’s home without waiting for permission.", "kindness, privacy, consent, and changing a helpful habit that crosses a boundary"]
  ]],
  ["Qur’an 24:61", [
    ["A venue is technically accessible through a service entrance that separates disabled guests from everyone else.", "formal access, equal dignity, practical experience, and redesign rather than mere compliance"],
    ["A community meal assumes everyone can stand in a long line and carry a plate without assistance.", "unseen barriers, respectful help, universal design, and asking affected people"],
    ["Captions are omitted from lectures because only a few attendees request them and the budget is limited.", "access to knowledge, recurring cost, prioritization, and lower-cost alternatives"],
    ["A person with an invisible disability is accused of seeking special treatment when they ask for flexibility.", "privacy, reasonable evidence, trust, consistency, and nonhumiliating accommodation"],
    ["An elderly relative is included in decisions but meetings move too quickly for them to process information.", "meaningful participation, pace, supported decision-making, and avoiding symbolic inclusion"]
  ]],
  ["Qur’an 6:141", [
    ["A family discards large amounts of food after events because offering less would appear ungenerous.", "hospitality, planning, redistribution, cultural expectations, and waste"],
    ["A business can reduce packaging waste only by raising prices for customers with limited income.", "environmental harm, affordability, phased change, and honest cost distribution"],
    ["A drought-prone community maintains decorative water use while asking households to reduce essentials.", "shared sacrifice, public example, necessity, and equitable restrictions"],
    ["Cheap clothing allows families to meet needs but depends on opaque labor and disposal practices.", "budget constraints, available evidence, durability, gradual change, and collective responsibility"],
    ["A religious event distributes single-use items for convenience despite having volunteers capable of a reusable system.", "stewardship, sanitation, labor, cost, and aligning practice with stated values"]
  ]],
  ["Qur’an 49:11", [
    ["A friend group uses a nickname the person once accepted but now quietly dislikes.", "current consent, group habit, dignity, and a low-drama correction"],
    ["A public figure’s harmful policy is criticized through jokes about their body and accent.", "substantive accountability, demeaning mockery, audience norms, and refusing irrelevant attacks"],
    ["Students imitate a teacher’s pronunciation as affection, while new students understand it as ridicule.", "intent, impact, power, cultural sensitivity, and changing a normalized joke"],
    ["A relative’s old mistake has become the family’s permanent punchline despite clear repentance.", "memory, humiliation, changed conduct, and the right not to be frozen in a past wrong"],
    ["A meme targets a broad group but no individual person, and sharing it strengthens prejudice toward people you know.", "group dignity, indirect harm, normalization, and responsibility for shared humor"]
  ]],
  ["Qur’an 49:13", [
    ["A family prefers a less compatible marriage proposal because the person shares their tribe and language.", "character, compatibility, family continuity, prejudice, and the adult’s informed choice"],
    ["A mosque board is ethnically uniform because leaders recruit only through trusted personal networks.", "trust, structural exclusion, competence, outreach, and shared ownership"],
    ["A job candidate’s foreign accent is treated as evidence they cannot lead clients, despite strong communication results.", "actual job requirements, bias, evidence, and equal opportunity"],
    ["Community aid quietly prioritizes families from the organizers’ country of origin.", "need-based criteria, kinship feeling, donor intent, and transparent distribution"],
    ["A person celebrates cultural pride using claims that their people are naturally more honorable or religious.", "gratitude for heritage, superiority, taqwa, and speech that does not degrade others"]
  ]],
  ["Qur’an 39:18", [
    ["A ten-second clip contains a troubling sentence, while the full lecture is two hours and not yet transcribed.", "initial concern, full context, withholding final judgment, and timely clarification"],
    ["Two summaries of a policy disagree, and each side links only to commentary rather than the policy itself.", "primary text, material definitions, implementation evidence, and resisting partisan framing"],
    ["A speaker you trust quotes an opponent accurately but omits the opponent’s immediate qualification.", "complete representation, loyalty, correction, and evaluating arguments in their strongest fair form"],
    ["A headline is technically supported by the article but leaves readers with a conclusion the data does not establish.", "literal truth, misleading implication, statistical limits, and responsible sharing"],
    ["An AI summary of a religious answer sounds clear but provides a citation that does not contain the claim.", "opening the source, tool limits, qualified interpretation, and not outsourcing religious judgment"]
  ]],
  ["Qur’an 4:29", [
    ["A workplace’s culture praises extreme hours, and employees technically volunteer because refusing harms promotion chances.", "coercion, health, informed choice, leadership incentives, and sustainable expectations"],
    ["A person stops prescribed treatment after being told spiritual strength should be enough.", "medical expertise, spiritual care, dangerous stigma, and informed treatment decisions"],
    ["A family pressures someone to remain in a dangerous home because separation would cause social shame.", "immediate safety, qualified support, family reputation, and refusal to normalize harm"],
    ["A fitness community rewards increasingly restrictive behavior while members praise visible discipline.", "health, social reinforcement, professional assessment, and the difference between discipline and danger"],
    ["A driver checks messages for work while transporting others because the employer expects immediate replies.", "risk, employer pressure, clear boundaries, and preventing foreseeable harm"]
  ]],
  ["Qur’an 62:9–10", [
    ["A recurring work meeting overlaps Jumu‘ah, and moving it burdens colleagues across several time zones.", "religious obligation, early accommodation, shared burden, and a dependable schedule"],
    ["A healthcare worker cannot leave a patient safely at prayer time because the relief worker is late.", "duty of care, prayer timing, staffing escalation, and avoiding preventable recurrence"],
    ["An employee requests every desirable holiday shift off in addition to prayer accommodations.", "religious need, fairness to colleagues, voluntary trades, and separating obligation from preference"],
    ["A student’s exam schedule permits a prayer break, but requesting it may reveal their faith in a hostile environment.", "worship, safety, confidential accommodation, and institutional responsibility"],
    ["A business closes for Jumu‘ah but pressures hourly workers to absorb the lost income alone.", "worship, employer choice, wage fairness, and transparent scheduling"]
  ]],
  ["Qur’an 5:1", [
    ["A service agreement contains an automatic renewal the customer likely overlooked but legally accepted.", "legal form, informed consent, clear notice, and profit from predictable misunderstanding"],
    ["A tenant promised no pets, then takes in an animal needed for a newly documented disability.", "contract, changed need, lawful accommodation, property impact, and good-faith notice"],
    ["A team agrees to confidentiality, but later discovers the project itself may violate public rules.", "scope of the promise, illegality or harm, protected disclosure, and minimum necessary breach"],
    ["A seller finds that honoring a quoted price will erase the profit because of their own calculation error.", "accepted commitment, genuine mistake, buyer reliance, and honest renegotiation"],
    ["A contract allows termination without cause, but the weaker party invested heavily based on repeated assurances of long-term work.", "written rights, induced reliance, notice, transition support, and moral fairness"]
  ]],
  ["Qur’an 83:1–3", [
    ["A food business lists generous portion sizes that are consistently smaller in practice because customers rarely measure them.", "accurate representation, tolerances, deliberate pattern, and restitution"],
    ["A consultant rounds every partial hour up while expecting subcontractors to bill exact minutes.", "consistent standards, disclosed billing rules, power, and fair measurement"],
    ["An online seller uses lighting that makes product damage almost invisible without technically editing the photo.", "material disclosure, misleading presentation, buyer expectations, and returns"],
    ["A charity reports gross beneficiaries reached without disclosing that many received only a minimal contact.", "truthful metrics, donor understanding, incentives, and meaningful impact"],
    ["A manager measures office staff by visible attendance while judging their own work by outcomes.", "equal standards, job needs, self-exemption, and evidence of performance"]
  ]],
  ["Qur’an 17:36; 49:12", [
    ["An AI tool can summarize private case notes quickly, but the service’s data-retention terms are unclear.", "confidentiality, consent, vendor policy, data minimization, and safer alternatives"],
    ["Face recognition may improve event security while collecting biometric data from every attendee.", "credible threat, proportionality, consent, retention, bias, and nonbiometric options"],
    ["Parents post years of a child’s life publicly before the child can understand digital permanence.", "parental judgment, child dignity, future consent, safety, and selective sharing"],
    ["A group administrator exports member phone numbers into a new platform without asking because the purpose is unchanged.", "purpose limitation, platform risk, fresh consent, and reasonable notice"],
    ["A workplace monitors keystrokes to detect time theft, capturing private messages and disability-related work patterns.", "legitimate oversight, intrusive collection, notice, bias, and outcome-based alternatives"]
  ]],
  ["Qur’an 5:2", [
    ["A useful community project is led by someone with a serious unresolved accountability issue.", "benefit, enabling influence, safeguards, separation of role from project, and the rights of those harmed"],
    ["Employees are asked to implement a marketing tactic they believe deliberately exploits fear but does not violate law.", "cooperation in harm, evidence, internal challenge, refusal, and livelihood consequences"],
    ["A friend asks for transportation without telling you the trip is intended to confront someone aggressively.", "informed cooperation, foreseeable harm, withdrawing help, and offering a safer alternative"],
    ["A charity partner has unmatched reach but weak controls that may divert some aid.", "urgent benefit, due diligence, restricted funding, monitoring, and whether cooperation normalizes misconduct"],
    ["A social campaign pursues a just goal using fabricated images because organizers believe real evidence receives too little attention.", "good ends, false means, public trust, correction, and refusing participation in deception"]
  ]],
  ["Qur’an 2:173", [
    ["A patient in an emergency is offered a medication containing an otherwise prohibited ingredient, with no immediately available substitute.", "genuine necessity, qualified medical advice, available alternatives, minimum use, and later review"],
    ["A stranded traveler considers entering private property for shelter during dangerous weather.", "immediate danger, least intrusion, attempts to seek help, property rights, and notice afterward"],
    ["A family facing eviction considers withholding a material fact on an aid application because the rules exclude their unusual situation.", "necessity, truthful alternatives, appeal routes, rights of other applicants, and qualified counsel"],
    ["An employee is told to break a safety rule briefly to prevent a larger imminent accident.", "immediacy, competence, proportional exception, documentation, and preventing abuse of emergency language"],
    ["A community invokes crisis conditions to suspend normal financial oversight months after the immediate danger has passed.", "time-limited exceptions, continuing necessity, transparency, and restoration of ordinary accountability"]
  ]]
];

const v52DilemmaTemplates = [
  focus => `Separate ${focus}. Identify the least harmful responsible next step and what must be verified first.`,
  focus => `Weigh ${focus}. Name whose rights and safety are affected before proposing a response.`,
  focus => `Examine ${focus}. Distinguish what is known, assumed, urgent, and suitable for qualified help.`,
  focus => `Build a response around ${focus}. Include a proportionate boundary, repair, or review process.`,
  focus => `Discuss ${focus}. What action protects truth and dignity without pretending every context has one ruling?`
];

const v52DilemmaRows = v52DilemmaGroups.flatMap(([source, scenarios]) =>
  scenarios.map(([prompt, focus], index) => [prompt, v52DilemmaTemplates[index](focus), source])
);
if (v52DilemmaRows.length !== 255) throw new Error(`Expected 255 v52 dilemmas, found ${v52DilemmaRows.length}.`);

cards.push(...v52DilemmaRows.map(([prompt, answer, source], index) => ({
  type: 'mizan', prompt, answer, source,
  id: `DILEMMA-${String(index + 46).padStart(3, '0')}`
})));
