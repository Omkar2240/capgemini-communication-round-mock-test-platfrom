import fs from "fs";
import path from "path";

const OUT_DIR = path.resolve("./data/mock-tests");
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const topicsList = [
  "Subject-Verb Agreement",
  "Tenses",
  "Articles",
  "Prepositions",
  "Pronouns",
  "Conjunctions",
  "Active and Passive Voice",
  "Direct and Indirect Speech",
  "Sentence Correction",
  "Vocabulary in Context",
];

// Helper to generate 15 distinct, high-caliber mock tests
function buildMockTest(index) {
  const num = index + 1;
  const id = `mock-${num < 10 ? "0" + num : num}`;
  const isFoundation = num <= 5;
  const isIntermediate = num > 5 && num <= 10;
  const difficulty = isFoundation ? "Foundation" : isIntermediate ? "Intermediate" : "Advanced";

  const themes = [
    {
      title: "Client Onboarding & Project Kickoff",
      desc: "Foundational business English, team orientation, kickoff correspondence, and initial project coordination.",
      domain: "Client Services",
    },
    {
      title: "Cross-Functional Team Collaboration",
      desc: "Internal sprint communication, task handoffs between QA and developers, and clarifying work requirements.",
      domain: "Agile Engineering",
    },
    {
      title: "Customer Escalation & Service Delivery",
      desc: "Diplomatic response to service hiccups, empathetic client messaging, and professional SLA updates.",
      domain: "Support Operations",
    },
    {
      title: "Sprint Retrospective & Process Refinement",
      desc: "Constructive feedback phrasing, active listening during standups, and structured post-sprint documentation.",
      domain: "Product Management",
    },
    {
      title: "Workplace Policy & Remote Operations",
      desc: "Hybrid work norms, asynchronous etiquette, data security hygiene, and clear workplace inquiries.",
      domain: "People & Workplace",
    },
    {
      title: "Enterprise Cloud Migration & Architecture",
      desc: "Technical change management, coordinating downtime with stakeholders, and infrastructure updates.",
      domain: "Cloud Infrastructure",
    },
    {
      title: "Stakeholder Alignment & Budget Variance",
      desc: "Communicating resource constraints, budget variance explanations, and steering committee briefings.",
      domain: "Finance & Strategy",
    },
    {
      title: "Major Incident Management & RCA",
      desc: "High-pressure incident triage, bridge communication, and blameless post-mortem writing.",
      domain: "Site Reliability",
    },
    {
      title: "Third-Party Vendor & Partner Negotiation",
      desc: "SOW review, SLA breach dispute management, and maintaining diplomatic commercial relationships.",
      domain: "Procurement & Legal",
    },
    {
      title: "Product Release & Go-To-Market Enablement",
      desc: "Release notes, user adoption FAQs, sales engineering alignment, and multi-tier launch communication.",
      domain: "Product Marketing",
    },
    {
      title: "Strategic Digital Transformation & Org Change",
      desc: "Overcoming employee resistance, articulating long-term modernization vision, and change leadership.",
      domain: "Transformation Office",
    },
    {
      title: "Executive Board Briefing & Crisis Response",
      desc: "High-stakes investor relations, urgent press clarification, and boardroom-level communication precision.",
      domain: "Executive Leadership",
    },
    {
      title: "Enterprise Data Governance & Compliance",
      desc: "Regulatory GDPR/HIPAA compliance communications, audit preparation, and cross-border data transfer protocols.",
      domain: "Data Governance",
    },
    {
      title: "AI Adoption Ethics & Workforce Reskilling",
      desc: "Responsible AI guidelines, addressing automation anxieties, and communicating learning roadmaps.",
      domain: "Emerging Tech & AI",
    },
    {
      title: "Global Multi-Region Operations & M&A Integration",
      desc: "Cross-cultural diplomacy, merging distinct corporate communications styles, and global continuity.",
      domain: "Global Operations",
    },
  ];

  const currentTheme = themes[index];

  // 1. GRAMMAR (10 items)
  const grammarQuestions = [
    {
      id: `${id}-gram-01`,
      type: "grammar",
      prompt: isFoundation
        ? "Neither of the account representatives _____ prepared to take the incoming escalation call."
        : isIntermediate
        ? "Neither the principal architect nor the senior DevOps engineers _____ able to pinpoint the latency anomaly in yesterday's staging cluster."
        : "Neither the chief compliance officer nor the board directors _____ that the proprietary algorithm breached statutory antitrust stipulations.",
      options: isFoundation
        ? ["was", "were", "are", "have been"]
        : isIntermediate
        ? ["was", "were", "has been", "is being"]
        : ["contends", "contend", "is contending", "has contended"],
      correctAnswer: isFoundation ? 0 : isIntermediate ? 1 : 1,
      explanation: isFoundation
        ? "'Neither of the...' takes a singular verb ('was') when referring to individual units distributive in formal English."
        : isIntermediate
        ? "When subject parts are connected by 'neither... nor', the verb agrees with the subject closer to it ('engineers' is plural -> 'were')."
        : "When subjects are joined by 'neither... nor', the verb agrees with the plural subject closer to it ('board directors' -> plural 'contend').",
      topic: "Subject-Verb Agreement",
      difficulty: isFoundation ? "easy" : isIntermediate ? "medium" : "hard",
    },
    {
      id: `${id}-gram-02`,
      type: "grammar",
      prompt: isFoundation
        ? "By the time the client arrived for the status update, the engineering team _____ the demo environment."
        : isIntermediate
        ? "Had the delivery manager flagged the dependency earlier, the infrastructure team _____ the resource bottlenecks prior to deployment."
        : "By the close of Q4, the steering committee _____ the entire core banking migration roadmap for over twenty-four months.",
      options: isFoundation
        ? ["had already configured", "already configured", "has already configured", "was already configuring"]
        : isIntermediate
        ? ["would resolve", "would have resolved", "will resolve", "had resolved"]
        : ["will be overseeing", "will have been overseeing", "has overseen", "would oversee"],
      correctAnswer: isFoundation ? 0 : isIntermediate ? 1 : 1,
      explanation: isFoundation
        ? "Past perfect ('had already configured') is required for an event that took place before another past reference event ('arrived')."
        : isIntermediate
        ? "Third conditional ('Had the... flagged, ... would have resolved') expresses an unreal condition and outcome in the past."
        : "Future perfect continuous ('will have been overseeing') is used for an ongoing action evaluated at a future milestone.",
      topic: "Tenses",
      difficulty: isFoundation ? "easy" : isIntermediate ? "medium" : "hard",
    },
    {
      id: `${id}-gram-03`,
      type: "grammar",
      prompt: isFoundation
        ? "The team delivered _____ unique solution tailored to the client's automated payroll requirements."
        : isIntermediate
        ? "The audit committee demanded _____ thorough breakdown of the European Union data sovereignty compliance framework."
        : "She authored _____ unanimous resolution stipulating mandatory multi-factor authentication protocols across European subsidiaries.",
      options: ["a", "an", "the", "no article needed"],
      correctAnswer: isFoundation ? 0 : isIntermediate ? 0 : 0,
      explanation:
        "Words beginning with a consonant sound like 'unique' (/juːˈniːk/) or 'unanimous' (/juːˈnæn.ɪ.məs/) take the indefinite article 'a', not 'an'.",
      topic: "Articles",
      difficulty: isFoundation ? "easy" : isIntermediate ? "medium" : "hard",
    },
    {
      id: `${id}-gram-04`,
      type: "grammar",
      prompt: isFoundation
        ? "The new security guidelines comply _____ all international financial services data protection standards."
        : isIntermediate
        ? "The enterprise client insisted _____ receiving weekly burn-rate telemetry alongside the standard deliverables."
        : "The lead auditor took exception _____ the unilateral indemnification clause embedded within the amended master services agreement.",
      options: isFoundation
        ? ["with", "to", "for", "against"]
        : isIntermediate
        ? ["on", "for", "with", "at"]
        : ["to", "from", "against", "over"],
      correctAnswer: isFoundation ? 0 : isIntermediate ? 0 : 0,
      explanation: isFoundation
        ? "'Comply' is properly paired with the preposition 'with'."
        : isIntermediate
        ? "'Insist' takes the preposition 'on' (or 'upon') when introducing a gerund phrase ('insisted on receiving')."
        : "The corporate idiom 'to take exception to' means to object to or disagree with something strongly.",
      topic: "Prepositions",
      difficulty: isFoundation ? "easy" : isIntermediate ? "medium" : "hard",
    },
    {
      id: `${id}-gram-05`,
      type: "grammar",
      prompt: isFoundation
        ? "Between you and _____, the revised delivery timeline appears far more feasible."
        : isIntermediate
        ? "The scrum master distributed the user stories between the frontend developer and _____ before the daily standup."
        : "The external ombudsman met with the whistleblowers, all of _____ requested anonymized meeting minutes.",
      options: isFoundation
        ? ["me", "I", "myself", "mine"]
        : isIntermediate
        ? ["her", "she", "herself", "they"]
        : ["whom", "who", "which", "whose"],
      correctAnswer: isFoundation ? 0 : isIntermediate ? 0 : 0,
      explanation: isFoundation
        ? "'Between' is a preposition, so its pronoun complements must be in the objective case ('between you and me')."
        : isIntermediate
        ? "Preposition 'between' takes objective case pronouns ('between the frontend developer and her')."
        : "'All of whom' is the standard formal relative pronoun phrase referring to people following a preposition.",
      topic: "Pronouns",
      difficulty: isFoundation ? "easy" : isIntermediate ? "medium" : "hard",
    },
    {
      id: `${id}-gram-06`,
      type: "grammar",
      prompt: isFoundation
        ? "The regression testing was exhaustive, _____ several edge-case UI glitches were detected prior to production."
        : isIntermediate
        ? "The cloud migration finished under budget, _____ the team encountered unforeseen network throughput bottlenecks."
        : "The executive sponsor refused to endorse the proposal _____ the vendor provided audited financial security attestations.",
      options: isFoundation
        ? ["yet", "because", "so", "unless"]
        : isIntermediate
        ? ["notwithstanding", "although", "whereas", "consequently"]
        : ["unless", "lest", "inasmuch as", "provided that"],
      correctAnswer: isFoundation ? 0 : isIntermediate ? 1 : 0,
      explanation: isFoundation
        ? "'Yet' acts as an adversative conjunction showing contrast between exhaustive testing and surviving glitches."
        : isIntermediate
        ? "'Although' is a subordinating conjunction indicating a concession or counter-expectation."
        : "'Unless' introduces the essential negative conditional clause required to validate endorsement.",
      topic: "Conjunctions",
      difficulty: isFoundation ? "easy" : isIntermediate ? "medium" : "hard",
    },
    {
      id: `${id}-gram-07`,
      type: "grammar",
      prompt: isFoundation
        ? "Identify the sentence written in correct passive voice: 'The quality analyst audited the build.'"
        : isIntermediate
        ? "Choose the most professional passive formulation for a status report: 'The team overlooked several database indexes.'"
        : "Convert to passive voice without losing legal precision: 'The vendor must remediate critical vulnerabilities within 48 hours.'",
      options: isFoundation
        ? [
            "The build was audited by the quality analyst.",
            "The build has been audited by the quality analyst.",
            "The build had audited by the quality analyst.",
            "The build is audited by the quality analyst.",
          ]
        : isIntermediate
        ? [
            "Several database indexes were inadvertently overlooked during the initial sprint review.",
            "The team has been overlooked several database indexes.",
            "Overlooking of database indexes was executed by team members.",
            "Several database indexes had been overlooking by the team.",
          ]
        : [
            "Critical vulnerabilities must be remediated by the vendor within 48 hours.",
            "Critical vulnerabilities should have remediated within 48 hours by vendor.",
            "Remediation of vulnerabilities is to be having done within 48 hours.",
            "Within 48 hours, critical vulnerabilities will remediate by the vendor.",
          ],
      correctAnswer: 0,
      explanation:
        "The standard passive formulation converts object into subject with the appropriate form of auxiliary 'be' + past participle.",
      topic: "Active and Passive Voice",
      difficulty: isFoundation ? "easy" : isIntermediate ? "medium" : "hard",
    },
    {
      id: `${id}-gram-08`,
      type: "grammar",
      prompt: isFoundation
        ? "Change to indirect speech: The manager said, 'We will release the patch tomorrow.'"
        : isIntermediate
        ? "Change to indirect speech: The client asked, 'When can your technical team deploy the hotfix?'"
        : "Change to indirect speech: The security officer warned, 'Do not share your corporate VPN credentials under any circumstances.'",
      options: isFoundation
        ? [
            "The manager said that they would release the patch the following day.",
            "The manager said that we will release the patch tomorrow.",
            "The manager stated that they will release the patch the following day.",
            "The manager says that they would release the patch tomorrow.",
          ]
        : isIntermediate
        ? [
            "The client inquired when our technical team could deploy the hotfix.",
            "The client asked when can our technical team deploy the hotfix.",
            "The client inquired that when our technical team could deploy the hotfix.",
            "The client asked when our technical team will be deploying the hotfix.",
          ]
        : [
            "The security officer instructed employees not to share their corporate VPN credentials under any circumstances.",
            "The security officer said that do not share your corporate VPN credentials under any circumstances.",
            "The security officer warned that we cannot share corporate VPN credentials.",
            "The security officer advised to not be sharing corporate VPN credentials.",
          ],
      correctAnswer: 0,
      explanation:
        "In indirect speech, verb tenses shift into the past ('will' -> 'would', 'can' -> 'could', imperatives convert to infinitive 'not to share'), and temporal adverbs shift accordingly ('tomorrow' -> 'the following day').",
      topic: "Direct and Indirect Speech",
      difficulty: isFoundation ? "easy" : isIntermediate ? "medium" : "hard",
    },
    {
      id: `${id}-gram-09`,
      type: "grammar",
      prompt: isFoundation
        ? "Select the grammatically correct sentence:"
        : isIntermediate
        ? "Identify the sentence that maintains impeccable parallel structure and clarity:"
        : "Select the sentence free of dangling modifiers, comma splices, or mixed metaphors:",
      options: isFoundation
        ? [
            "The project manager requested that each team member submit their timesheets on Friday.",
            "The project manager requested that each team members submit his timesheet on Friday.",
            "The project manager requested that every team member to submit timesheets on Friday.",
            "The project manager has requested that each team member submitting their timesheet on Friday.",
          ]
        : isIntermediate
        ? [
            "The consultant recommended refactoring legacy modules, automating unit tests, and optimizing database indices.",
            "The consultant recommended to refactor legacy modules, unit test automation, and optimizing database indices.",
            "The consultant recommended refactoring legacy modules, to automate unit tests, and the optimization of database indices.",
            "The consultant recommended that legacy modules be refactored, automating unit tests, and optimizing database indices.",
          ]
        : [
            "Having reviewed the quarterly metrics thoroughly, the steering committee approved the budgetary reallocation.",
            "Having reviewed the quarterly metrics thoroughly, the budgetary reallocation was approved by the committee.",
            "Having reviewed the quarterly metrics thoroughly, approval was granted to the budget.",
            "Having reviewed the quarterly metrics thoroughly, it was decided to approve the budget.",
          ],
      correctAnswer: 0,
      explanation: isFoundation
        ? "The sentence maintains clean subjunctive mood and standard business English pronoun agreement."
        : isIntermediate
        ? "All elements in the series follow identical gerund forms ('refactoring', 'automating', 'optimizing'), satisfying parallelism."
        : "The participial phrase 'Having reviewed the quarterly metrics thoroughly' correctly modifies the logical subject 'the steering committee'.",
      topic: "Sentence Correction",
      difficulty: isFoundation ? "easy" : isIntermediate ? "medium" : "hard",
    },
    {
      id: `${id}-gram-10`,
      type: "grammar",
      prompt: isFoundation
        ? "Choose the word closest in meaning to 'METICULOUS' as used in: 'Her meticulous documentation prevented critical deployment bugs.'"
        : isIntermediate
        ? "Choose the word most appropriate in corporate context: 'The product owner took a _____ approach, preemptively addressing client objections before the demo.'"
        : "Choose the word that precisely describes: 'A communication approach characterized by diplomatic tact, conciseness, and judicious restraint under duress.'",
      options: isFoundation
        ? ["thorough and precise", "quick and hurried", "creative and artistic", "general and casual"]
        : isIntermediate
        ? ["proactive", "reactive", "superfluous", "provisional"]
        : ["measured", "precipitous", "bombastic", "perfunctory"],
      correctAnswer: 0,
      explanation: isFoundation
        ? "'Meticulous' denotes paying extremely careful attention to precision and detail."
        : isIntermediate
        ? "'Proactive' describes taking initiative to anticipate and resolve future issues before they happen."
        : "'Measured' in communication denotes carefully considered, restrained, and diplomatic language.",
      topic: "Vocabulary in Context",
      difficulty: isFoundation ? "easy" : isIntermediate ? "medium" : "hard",
    },
  ];

  // 2. BUSINESS WRITING (2 tasks)
  const writingTasks = [
    {
      id: `${id}-wri-01`,
      type: "writing",
      prompt: isFoundation
        ? "Draft a formal email to your Delivery Manager requesting a 3-day extension on your sprint deliverables due to unforeseen API schema changes from a third-party payment partner."
        : isIntermediate
        ? "Write a professional email to an Enterprise Client notifying them of a scheduled 2-hour maintenance outage during off-peak weekend hours for critical database failover testing."
        : "Compose an executive communication to Senior Leadership detailing the mitigation plan for a supply-chain cloud service provider outage that impacted customer-facing SLAs.",
      scenario: `Context: ${currentTheme.title}. Domain: ${currentTheme.domain}. A time-sensitive issue requires formal, transparent, and solution-oriented written communication.`,
      expectedFormat: "professional_email",
      recommendedWordCount: { min: 100, max: 160 },
      evaluationCriteria: [
        "Clarity of purpose and opening context",
        "Professional tone and diplomatic phrasing",
        "Actionable mitigation steps and timeline",
        "Flawless grammar, structure, and corporate formatting",
      ],
      modelResponse: `Dear Delivery Leadership,\n\nI am writing to provide an important update regarding our sprint deliverables for the payment integration stream. Following recent breaking changes to our partner's API schema, our team must adjust internal payload validations to guarantee data integrity.\n\nTo ensure thorough regression testing and prevent customer-facing disruptions, we respectfully request a three-business-day extension to our delivery deadline, shifting completion to Thursday, October 15th. We have already reallocated two senior backend engineers to expedite testing and will provide daily status digests at 10:00 AM.\n\nThank you for your guidance and support. Please let me know if an emergency alignment sync would be helpful today.\n\nBest regards,\nLead Technical Consultant`,
      keyPoints: ["reason for extension or outage", "mitigation or action taken", "revised timeline", "professional greeting and signoff"],
    },
    {
      id: `${id}-wri-02`,
      type: "writing",
      prompt: isFoundation
        ? "Draft a project update memo for your team summarizing the key takeaways from today's sprint planning session and outlining assigned responsibilities for the upcoming milestone."
        : isIntermediate
        ? "Draft an internal policy advisory memo announcing the adoption of mandatory peer code reviews and automated static security analysis before pull requests can be merged."
        : "Draft a formal briefing memo for department heads on implementing enterprise AI usage governance and data leak prevention protocols across client engagements.",
      scenario: `Context: ${currentTheme.desc}. You need to align cross-functional peers around structured processes without generating friction or ambiguity.`,
      expectedFormat: "formal_memo",
      recommendedWordCount: { min: 110, max: 175 },
      evaluationCriteria: [
        "Executive memo structure (To, From, Date, Subject, Overview)",
        "Bulleted actionable guidelines",
        "Clear rationale and business value",
        "Polite call to action and support channels",
      ],
      modelResponse: `MEMORANDUM\n\nTO: Cross-Functional Engineering & QA Teams\nFROM: Project Management Office\nDATE: November 4, 2026\nSUBJECT: New Peer Review & Automated Static Code Analysis Standards\n\n1. Purpose\nTo enhance delivery predictability and minimize production defects, we are introducing enhanced quality standards effective next Monday.\n\n2. Key Updates\n- Two Approvals Required: Every pull request targeting the staging branch must receive sign-off from at least two peers.\n- Automated Security Linting: Builds failing automated SAST scans will be blocked until remediated.\n- Turnaround Target: Reviews should be completed within four business hours of request.\n\n3. Support & Enablement\nA 30-minute walkthrough is scheduled for Thursday at 2:00 PM. Please direct process questions to the DevOps Slack channel.\n\nThank you for your continued commitment to engineering excellence.`,
      keyPoints: ["effective date", "operational guidelines", "business rationale", "support channels"],
    },
  ];

  // 3. SITUATIONAL AWARENESS (6 workplace scenarios)
  const situationalScenarios = [
    {
      id: `${id}-sit-01`,
      type: "situational",
      context: `During the ${currentTheme.title} phase, your lead developer informs you 30 minutes before the client demo that an untested edge case causes the dashboard to display mock data instead of live figures.`,
      challenge: "The client VP is joining the call specifically to verify live data synchronization.",
      options: [
        "Immediately contact the client with transparency, explaining that staging requires a brief 20-minute cache re-index, and offer to walk through backend metrics first while the patch settles.",
        "Proceed with the demo as planned, pretend the mock data is real, and hope the client does not inspect the specific date ranges.",
        "Cancel the meeting 5 minutes before the start with no explanation, blaming technical difficulties.",
        "Confront the developer publicly on the call so the client realizes the fault lies with engineering rather than project management.",
      ],
      bestOption: 0,
      bestOptionRationale:
        "Transparent, proactive communication combined with a viable immediate alternative preserves stakeholder trust without risking credibility.",
      writtenPrompt: "Write a concise 2-sentence Slack message to your Delivery Lead updating them on how you are handling this situation.",
      communicationFormat: "chat",
      modelWrittenResponse: "Hi Rahul, we noticed a live data sync bug 30 mins before the demo. I'm guiding the client through backend metrics first while Priya finishes the index patch, keeping our agenda productive.",
    },
    {
      id: `${id}-sit-02`,
      type: "situational",
      context: "A counterpart from another department repeatedly misses shared dependencies, threatening your team's sprint velocity and delivery timeline.",
      challenge: "You need the deliverables without escalating prematurely or damaging cross-team relations.",
      options: [
        "Schedule a brief 15-minute 1-on-1 sync to understand their blockers, review mutual dependencies, and co-create an adjusted micro-milestone plan.",
        "Immediately send a strongly worded email CCing their VP and HR demanding accountability.",
        "Completely stop working on your side of the project until they deliver their portion.",
        "Complete their portion of the work yourself secretly in the evening to avoid talking to them.",
      ],
      bestOption: 0,
      bestOptionRationale:
        "Collaborative problem-solving establishes shared empathy and clarifies dependencies before considering formal escalation channels.",
      writtenPrompt: "Draft a polite, collaborative email to your colleague requesting an alignment sync.",
      communicationFormat: "email",
      modelWrittenResponse: "Hi Alex,\n\nI hope your week is going well. I wanted to check in regarding the shared API schema dependencies for Sprint 14. Could we grab 15 minutes tomorrow morning to review blockers and align on a workable timeline?\n\nBest regards,\nJordan",
    },
    {
      id: `${id}-sit-03`,
      type: "situational",
      context: "In a client steering meeting, the client requests a major new reporting capability that was explicitly categorized as out of scope for Phase 1.",
      challenge: "Saying a blunt 'no' might offend the client, but accepting it immediately will derail the agreed budget and go-live date.",
      options: [
        "Acknowledge the high business value of the feature, validate its strategic merit, and explain the change control procedure: assess effort, present cost/timeline trade-offs, or queue it as a top priority for Phase 2.",
        "Immediately accept the request without checking with your technical architect to impress the client.",
        "Tell the client firmly that they did not read the signed contract and that such demands are unprofessional.",
        "Agree in the meeting but privately instruct the team to completely ignore the request.",
      ],
      bestOption: 0,
      bestOptionRationale:
        "Validating client priorities while upholding contractual boundaries through formal change management is the hallmark of senior consulting.",
      writtenPrompt: "Write a brief follow-up email sentence summarizing the change request evaluation agreed upon during the call.",
      communicationFormat: "email",
      modelWrittenResponse: "Thank you for highlighting the automated reporting feature today; our solutions team will analyze the effort requirements and provide a formal scope impact assessment for Phase 2 integration by Thursday.",
    },
    {
      id: `${id}-sit-04`,
      type: "situational",
      context: "A junior team member makes a noticeable error during a live presentation to internal stakeholders.",
      challenge: "You want to uphold professional standards without embarrassing your colleague in front of leadership.",
      options: [
        "Seamlessly bridge the conversation during the call by providing clarifying context or gentle refinement, then offer private, constructive coaching after the meeting.",
        "Interrupt the junior member mid-sentence and correct them loudly so stakeholders know you know the right answer.",
        "Remain silent, and afterward send an email CCing the entire team highlighting their mistake.",
        "Privately message the stakeholders during the call disowning the junior member's presentation.",
      ],
      bestOption: 0,
      bestOptionRationale:
        "Publicly supporting teammates while maintaining accuracy builds high-trust culture; corrective feedback must always be delivered constructively in private.",
      writtenPrompt: "Write a private 2-sentence Slack message to encourage the junior colleague and offer constructive feedback.",
      communicationFormat: "chat",
      modelWrittenResponse: "Great job presenting the complex billing workflow today, Priya! Let's do a quick 10-minute catchup tomorrow morning to fine-tune how we address edge-case questions during executive reviews.",
    },
    {
      id: `${id}-sit-05`,
      type: "situational",
      context: "A critical production incident occurs outside standard business hours. Multiple conflicting hypotheses are being argued heatedly in the incident chat.",
      challenge: "The incident bridge needs decisive leadership, calm communication, and objective root-cause identification.",
      options: [
        "Establish an orderly triage cadence: appoint a single communication scribe, assign specific engineers to validate one hypothesis at a time with telemetry data, and mute speculative debate.",
        "Join the argument and shout louder than everyone else to impose your authority.",
        "Leave the bridge until the team figures it out on their own.",
        "Post speculative customer alerts on social media before confirming the actual root cause.",
      ],
      bestOption: 0,
      bestOptionRationale:
        "Structured triage, data-driven hypothesis validation, and clear communication protocols restore order and accelerate incident resolution.",
      writtenPrompt: "Write a 1-sentence status broadcast to internal stakeholders on the current incident triage progress.",
      communicationFormat: "chat",
      modelWrittenResponse: "Incident Update [22:15 UTC]: Triage team has isolated the latency spike to the database replica; telemetry verification is underway with our next operational update scheduled in 20 minutes.",
    },
    {
      id: `${id}-sit-06`,
      type: "situational",
      context: "You receive conflicting prioritization directives from two senior stakeholders (e.g., Product Manager wants feature velocity, Security Lead requires immediate patching).",
      challenge: "Fulfilling one directive risks non-compliance or missed commercial deadlines.",
      options: [
        "Compile a transparent impact assessment outlining resource trade-offs, security vulnerabilities, and release implications, and convene a brief joint alignment session with both stakeholders to agree on a unified priority.",
        "Privately choose the stakeholder you like better and ignore the other.",
        "Work 100 hours a week to secretly do both and burn yourself out.",
        "Tell both stakeholders that you refuse to do any work until they stop arguing.",
      ],
      bestOption: 0,
      bestOptionRationale:
        "Consultative prioritization frames conflict in terms of business impact, empowering executive stakeholders to make an informed joint decision.",
      writtenPrompt: "Draft a short email to both leads inviting them to a 20-minute prioritization alignment.",
      communicationFormat: "email",
      modelWrittenResponse: "Dear Maya and Dev,\n\nTo ensure our team delivers both optimal sprint velocity and uncompromising security posture, I have summarized the trade-off metrics attached. Could we convene for a 20-minute alignment sync tomorrow at 11 AM to finalize our sprint resource allocations?\n\nBest regards,\nKiran",
    },
  ];

  // 4. READING COMPREHENSION (Passage + 4 MCQs)
  const readingData = {
    id: `${id}-read-sec`,
    type: "reading",
    passageTitle: `${currentTheme.title}: The Evolution of Enterprise Synergy`,
    passageTopic: currentTheme.domain,
    wordCount: 380,
    passageContent: `In contemporary global enterprise architectures, organizational resilience hinges fundamentally on communicative cohesion rather than purely computational capability. As cross-functional ecosystems expand across decentralized time zones, the velocity of technical innovation frequently outpaces traditional hierarchical reporting conduits. When distributed teams operate under asynchronous conditions, semantic misalignment—subtle divergences in how requirements, architectural constraints, and operational urgencies are articulated—emerges as the primary bottleneck to predictable delivery.\n\nHistorically, enterprises attempted to mitigate coordination overhead by multiplying synchronous governance touchpoints, including standing daily scrums, weekly steering assemblies, and rigid status presentations. However, empirical workplace telemetry reveals that excessive synchronous meetings precipitate cognitive fragmentation, diminishing high-focus engineering intervals by as much as forty percent. Consequently, forward-thinking organizations are transitioning toward structured asynchronous documentation artifacts: concise architectural decision records (ADRs), contextual user stories with explicit acceptance criteria, and blameless retrospective summaries.\n\nCrucially, the success of this paradigm shift depends upon individual communicative rigor. Clear, empathetic prose reduces ambiguity, while proactive contextualization prevents reactive crisis escalations. Rather than viewing communication as an administrative burden secondary to technical execution, high-performing corporate cultures treat deliberate language as an essential engineering discipline. By articulating trade-offs transparently and framing feedback through shared business objectives, modern professionals cultivate psychological safety, accelerate consensus, and ensure sustained organizational agility.`,
    questions: [
      {
        id: `${id}-read-q01`,
        prompt: "According to the passage, what has emerged as the primary bottleneck to predictable project delivery in decentralized environments?",
        options: [
          "Semantic misalignment and subtle divergences in requirement articulation.",
          "Insufficient cloud computing infrastructure and server latency.",
          "A complete lack of technical aptitude among senior engineering leaders.",
          "Excessive reliance on automated continuous integration pipelines.",
        ],
        correctAnswer: 0,
        explanation:
          "Paragraph 1 explicitly notes: 'semantic misalignment—subtle divergences in how requirements, architectural constraints, and operational urgencies are articulated—emerges as the primary bottleneck to predictable delivery.'",
        questionType: "factual",
      },
      {
        id: `${id}-read-q02`,
        prompt: "What is the primary unintended consequence of multiplying synchronous governance touchpoints, according to empirical telemetry?",
        options: [
          "Cognitive fragmentation that diminishes high-focus engineering intervals by up to forty percent.",
          "Immediate reduction in cloud infrastructure expenses.",
          "Enhanced psychological safety and improved employee retention across subsidiaries.",
          "Complete elimination of asynchronous documentation requirements.",
        ],
        correctAnswer: 0,
        explanation:
          "Paragraph 2 states that excessive synchronous meetings cause 'cognitive fragmentation, diminishing high-focus engineering intervals by as much as forty percent.'",
        questionType: "factual",
      },
      {
        id: `${id}-read-q03`,
        prompt: "What can be inferred from the author's characterization of 'deliberate language' in the final paragraph?",
        options: [
          "Clear communication is not merely administrative overhead, but a foundational competency that drives organizational outcomes.",
          "Engineers should avoid writing emails and rely entirely on vocal phone calls.",
          "Synchronous meetings are superior to written documentation in all corporate contexts.",
          "Psychological safety can only be achieved when code reviews are abolished.",
        ],
        correctAnswer: 0,
        explanation:
          "The passage explicitly concludes that high-performing cultures treat deliberate language as an essential engineering discipline that accelerates consensus and agility.",
        questionType: "inference",
      },
      {
        id: `${id}-read-q04`,
        prompt: "As used in paragraph 2, what does the term 'PRECIPITATE' most closely mean?",
        options: ["Trigger or cause to occur prematurely", "Prevent from happening", "Systematically organize", "Clarify with precision"],
        correctAnswer: 0,
        explanation:
          "In this contextual usage, 'precipitate' means to cause an undesirable situation or event to happen abruptly or prematurely.",
        questionType: "vocabulary",
      },
    ],
  };

  // 5. LISTENING COMPREHENSION (Audio Script + 4 MCQs)
  const listeningData = {
    id: `${id}-list-sec`,
    type: "listening",
    title: `Sync Call: ${currentTheme.title}`,
    context: `A live conversation between Marcus (Delivery Principal) and Elena (Senior Technical Lead) discussing immediate sprint strategy and risk mitigation for ${currentTheme.title}.`,
    dialogue: [
      {
        speaker: "Marcus",
        text: `Elena, thanks for hopping on. I just came off a call with the client sponsor. They're pleased with our preliminary integration benchmarks, but they're anxious about the third-party security audit scheduled for next Friday.`,
      },
      {
        speaker: "Elena",
        text: `Good to know, Marcus. Our team completed the initial vulnerability scan yesterday. We remediated eight minor dependency issues, but there's one medium-severity TLS certificate renewal pending on the EU gateway.`,
      },
      {
        speaker: "Marcus",
        text: `How long will that TLS resolution take, and does it require maintenance downtime?`,
      },
      {
        speaker: "Elena",
        text: `DevOps can deploy the rotated certificate in zero downtime during our staging window tomorrow at 4:00 PM. Once that's verified, we'll package the audit attestation packet for the compliance officers by Wednesday noon.`,
      },
      {
        speaker: "Marcus",
        text: `Fantastic. Let's make sure the client lead receives that attestation packet 48 hours before the audit. I'll summarize these timelines in today's executive digest.`,
      },
    ],
    fullScriptText:
      "Marcus: Elena, thanks for hopping on. I just came off a call with the client sponsor. They're pleased with our preliminary integration benchmarks, but they're anxious about the third-party security audit scheduled for next Friday.\nElena: Good to know, Marcus. Our team completed the initial vulnerability scan yesterday. We remediated eight minor dependency issues, but there's one medium-severity TLS certificate renewal pending on the EU gateway.\nMarcus: How long will that TLS resolution take, and does it require maintenance downtime?\nElena: DevOps can deploy the rotated certificate in zero downtime during our staging window tomorrow at 4:00 PM. Once that's verified, we'll package the audit attestation packet for the compliance officers by Wednesday noon.\nMarcus: Fantastic. Let's make sure the client lead receives that attestation packet 48 hours before the audit. I'll summarize these timelines in today's executive digest.",
    questions: [
      {
        id: `${id}-list-q01`,
        prompt: "What is the primary upcoming event causing anxiety for the client sponsor?",
        options: [
          "The third-party security audit scheduled for next Friday.",
          "An immediate termination of the client services agreement.",
          "A budget reduction for the entire upcoming fiscal year.",
          "A complete system crash of the primary payment gateway.",
        ],
        correctAnswer: 0,
        explanation:
          "Marcus explicitly states: 'They're pleased with our preliminary integration benchmarks, but they're anxious about the third-party security audit scheduled for next Friday.'",
      },
      {
        id: `${id}-list-q02`,
        prompt: "What specific technical task is still pending on the EU gateway?",
        options: [
          "A medium-severity TLS certificate renewal.",
          "A complete rewrite of the database indexing engine.",
          "Migrating the entire frontend application to mobile devices.",
          "Purchasing new hardware servers for the client headquarters.",
        ],
        correctAnswer: 0,
        explanation:
          "Elena clarifies: 'We remediated eight minor dependency issues, but there's one medium-severity TLS certificate renewal pending on the EU gateway.'",
      },
      {
        id: `${id}-list-q03`,
        prompt: "When does Elena plan to deploy the rotated certificate, and under what conditions?",
        options: [
          "Tomorrow at 4:00 PM with zero downtime during the staging window.",
          "Next Friday with four hours of total system downtime.",
          "Immediately during the call with active users online.",
          "Next month after the third-party audit has concluded.",
        ],
        correctAnswer: 0,
        explanation:
          "Elena states: 'DevOps can deploy the rotated certificate in zero downtime during our staging window tomorrow at 4:00 PM.'",
      },
      {
        id: `${id}-list-q04`,
        prompt: "By what time will the audit attestation packet be prepared for the compliance officers?",
        options: ["Wednesday noon.", "Friday evening.", "Monday morning.", "Tomorrow at 4:00 PM."],
        correctAnswer: 0,
        explanation:
          "Elena confirms: 'we'll package the audit attestation packet for the compliance officers by Wednesday noon.'",
      },
    ],
  };

  // 6. SPOKEN COMMUNICATION SIMULATION (2 tasks)
  const speakingTasks = [
    {
      id: `${id}-spk-01`,
      type: "speaking",
      prompt: isFoundation
        ? "Introduce yourself professionally, summarizing your academic background, core technical capabilities, and how you approach collaborative problem-solving within a cross-functional team."
        : isIntermediate
        ? "Describe a situation where you had to adapt quickly to an unexpected technical obstacle or shifting project requirement. Explain your step-by-step approach and the resulting outcome."
        : "Articulate your leadership philosophy on fostering constructive dialogue, accountability, and psychological safety when resolving conflicts between multidisciplinary project stakeholders.",
      context: `Context: ${currentTheme.title}. Demonstrate professional speaking poise, structured flow, concise vocabulary, and clarity of thought.`,
      preparationSeconds: 30,
      recordingSeconds: 90,
      recommendedMinimumWords: 90,
      keyFocusAreas: [
        "Structured introduction or clear thesis",
        "Concrete example or methodology",
        "Professional vocabulary and cohesive transitions",
        "Concise conclusion summarizing value",
      ],
      modelTranscript:
        "Hello everyone, my name is Alex. Over the past three years, I have specialized in building robust, user-centric web applications and collaborating closely with cross-functional engineering teams. In my previous capstone initiative, when our payment integration faced sudden API deprecation, I initiated a root-cause breakdown, aligned team priorities, and refactored the payload handler ahead of schedule. My approach combines proactive communication, disciplined problem solving, and a constant drive to deliver dependable business outcomes.",
    },
    {
      id: `${id}-spk-02`,
      type: "speaking",
      prompt: isFoundation
        ? "Explain why clear, proactive communication is just as vital as technical coding proficiency for a modern corporate software professional."
        : isIntermediate
        ? "Discuss how modern automation and artificial intelligence tools are transforming workplace productivity, and how professionals should balance automation with critical human oversight."
        : "Present an executive-level justification for why sustainable engineering practices, data ethics, and user transparency should be prioritized over short-term release velocity.",
      context: `Corporate Perspective: ${currentTheme.desc}. Speak persuasively, highlighting business impact, personal reflection, and future-oriented thinking.`,
      preparationSeconds: 30,
      recordingSeconds: 90,
      recommendedMinimumWords: 90,
      keyFocusAreas: [
        "Clear thesis statement",
        "Two distinct supporting arguments",
        "Practical workplace illustration",
        "Strong forward-looking takeaway",
      ],
      modelTranscript:
        "While technical mastery creates the foundational building blocks of software, clear and empathetic communication ensures that what is built actually solves genuine customer needs. When requirements are communicated with precision, engineering teams eliminate costly rework, prevent misaligned stakeholder expectations, and establish deep organizational trust. In my experience, the strongest engineers are those who translate complex technical trade-offs into straightforward business impact, ensuring agility, high morale, and long-term delivery success.",
    },
  ];

  return {
    id,
    testNumber: num,
    title: `Mock Test ${num < 10 ? "0" + num : num}: ${currentTheme.title}`,
    difficulty,
    durationMinutes: 60,
    description: currentTheme.desc,
    sectionTimers: {
      grammar: 12,
      writing: 10,
      situational: 10,
      reading: 10,
      listening: 8,
      speaking: 10,
    },
    sections: {
      grammar: grammarQuestions,
      writing: writingTasks,
      situational: situationalScenarios,
      reading: readingData,
      listening: listeningData,
      speaking: speakingTasks,
    },
  };
}

// Generate all 15 mock tests
const allMockTests = [];
for (let i = 0; i < 15; i++) {
  const test = buildMockTest(i);
  allMockTests.push(test);
  const filePath = path.join(OUT_DIR, `${test.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(test, null, 2), "utf-8");
  console.log(`Generated ${test.id}.json (${test.difficulty} - ${test.title})`);
}

// Write the index.ts file for seamless type-safe importing across Next.js app
const indexTsContent = `import { MockTest } from "@/types/exam";

${allMockTests.map((t) => `import mock${t.testNumber < 10 ? "0" + t.testNumber : t.testNumber} from "./${t.id}.json";`).join("\n")}

export const ALL_MOCK_TESTS: MockTest[] = [
  ${allMockTests.map((t) => `mock${t.testNumber < 10 ? "0" + t.testNumber : t.testNumber} as unknown as MockTest,`).join("\n  ")}
];

export function getMockTestById(id: string): MockTest | undefined {
  return ALL_MOCK_TESTS.find((t) => t.id === id);
}

export function getMockTestByNumber(num: number): MockTest | undefined {
  return ALL_MOCK_TESTS.find((t) => t.testNumber === num);
}

export function getMockTestsByDifficulty(diff: "Foundation" | "Intermediate" | "Advanced"): MockTest[] {
  return ALL_MOCK_TESTS.filter((t) => t.difficulty === diff);
}
`;

fs.writeFileSync(path.join(OUT_DIR, "index.ts"), indexTsContent, "utf-8");
console.log("Generated data/mock-tests/index.ts with 15 complete mock tests!");
