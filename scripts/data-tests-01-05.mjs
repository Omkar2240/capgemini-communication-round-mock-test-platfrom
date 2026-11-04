import { makeMCQ, makeSituational } from "./mcq-helper.mjs";

export function getTests01To05() {
  return [
    // ==========================================
    // MOCK TEST 01: Client Onboarding & Kickoff
    // ==========================================
    {
      id: "mock-01",
      testNumber: 1,
      title: "Mock Test 01: Client Onboarding & Project Kickoff",
      difficulty: "Foundation",
      durationMinutes: 60,
      description: "Foundational business English, team orientation, kickoff correspondence, and initial project coordination.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "Neither of the two new account managers _____ arrived for the client orientation session.",
            "has",
            ["have", "are", "were"],
            1, // B
            "'Neither' takes a singular verb ('has') when referring to each individual unit separately in formal English.",
            { id: "mock-01-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "easy" }
          ),
          makeMCQ(
            "The engineering team _____ the initial demo environment before the client joined the conference call.",
            "had already provisioned",
            ["already provisioned", "has already provisioned", "was already provisioning"],
            2, // C
            "Past perfect ('had already provisioned') is required for an event completed before another past reference event ('joined').",
            { id: "mock-01-gram-02", type: "grammar", topic: "Tenses", difficulty: "easy" }
          ),
          makeMCQ(
            "Our team delivered _____ customized onboarding dashboard for the new corporate partner.",
            "a",
            ["an", "the", "no article needed"],
            3, // D
            "The word 'customized' begins with a consonant sound (/k/), requiring the indefinite article 'a'.",
            { id: "mock-01-gram-03", type: "grammar", topic: "Articles", difficulty: "easy" }
          ),
          makeMCQ(
            "All new implementation workflows must comply _____ our client's internal data protection policies.",
            "with",
            ["to", "for", "against"],
            0, // A
            "The verb 'comply' is conventionally paired with the preposition 'with'.",
            { id: "mock-01-gram-04", type: "grammar", topic: "Prepositions", difficulty: "easy" }
          ),
          makeMCQ(
            "The orientation materials were divided equally between Sarah and _____.",
            "me",
            ["I", "myself", "mine"],
            1, // B
            "'Between' is a preposition, so pronouns following it must be in the objective case ('me').",
            { id: "mock-01-gram-05", type: "grammar", topic: "Pronouns", difficulty: "easy" }
          ),
          makeMCQ(
            "The kickoff meeting concluded ahead of schedule, _____ the team agreed to review the project charter immediately.",
            "so",
            ["although", "whereas", "unless"],
            2, // C
            "'So' indicates a logical consequence or cause-and-effect relationship.",
            { id: "mock-01-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "easy" }
          ),
          makeMCQ(
            "Select the sentence written in correct passive voice: 'The project director approved the implementation charter.'",
            "The implementation charter was approved by the project director.",
            [
              "The implementation charter has approved by the project director.",
              "The implementation charter is being approved by the project director.",
              "The project director was approved the implementation charter.",
            ],
            3, // D
            "In simple past passive voice, the object becomes the subject followed by 'was/were' + past participle.",
            { id: "mock-01-gram-07", type: "grammar", topic: "Active and Passive Voice", difficulty: "easy" }
          ),
          makeMCQ(
            "Change to indirect speech: The client said, 'We will confirm the kickoff date tomorrow.'",
            "The client said that they would confirm the kickoff date the following day.",
            [
              "The client said that they will confirm the kickoff date tomorrow.",
              "The client told that we would confirm the kickoff date tomorrow.",
              "The client says that they will confirm the kickoff date the following day.",
            ],
            0, // A
            "In reported speech, 'will' shifts to 'would', pronouns adjust to third person ('they'), and 'tomorrow' shifts to 'the following day'.",
            { id: "mock-01-gram-08", type: "grammar", topic: "Direct and Indirect Speech", difficulty: "easy" }
          ),
          makeMCQ(
            "Identify the grammatically correct sentence:",
            "The onboarding checklist requires that each employee verify their corporate login credentials.",
            [
              "The onboarding checklist requires that each employees verifies their corporate login credentials.",
              "The onboarding checklist require that each employee verifies their corporate login credentials.",
              "The onboarding checklist requires each employee to be verifying their corporate login credentials.",
            ],
            1, // B
            "The sentence correctly pairs the singular subject 'checklist' with 'requires' and uses proper subjunctive verb structure.",
            { id: "mock-01-gram-09", type: "grammar", topic: "Sentence Correction", difficulty: "easy" }
          ),
          makeMCQ(
            "Choose the word closest in meaning to 'EXPEDITE' as used in: 'We requested urgent vendor support to expedite the access provisioning.'",
            "accelerate or hasten",
            ["delay or postpone", "cancel or withdraw", "observe and record"],
            2, // C
            "'Expedite' means to speed up the progress or execution of a task.",
            { id: "mock-01-gram-10", type: "grammar", topic: "Vocabulary in Context", difficulty: "easy" }
          ),
        ],
        writing: [
          {
            id: "mock-01-wri-01",
            type: "writing",
            prompt: "Draft a formal email welcoming a new enterprise client and scheduling the official project kickoff call for next Tuesday.",
            scenario: "You have just been assigned as the client relationship manager. The contract is signed, and you need to introduce yourself, outline the kickoff agenda, and propose a calendar invitation.",
            expectedFormat: "professional_email",
            recommendedWordCount: { min: 100, max: 150 },
            evaluationCriteria: ["Professional greeting & warm welcome", "Clear meeting agenda topics", "Proposed timeline & next steps", "Courteous corporate sign-off"],
            modelResponse: "Dear Mr. Davis,\n\nWelcome to our technology consulting family! It is a distinct privilege to partner with Global Retail Solutions on your supply chain transformation initiative.\n\nI am writing to schedule our formal project kickoff meeting for next Tuesday, November 12th, at 10:00 AM EST via Microsoft Teams. During this 45-minute session, we will introduce our core implementation team, review key project milestones, and establish our weekly governance cadence.\n\nPlease let me know if this time aligns with your schedule, or if you prefer an alternative window. Attached is the preliminary kickoff agenda for your review.\n\nWarm regards,\nJordan Lee\nClient Delivery Manager",
            keyPoints: ["welcome message", "proposed date and time", "kickoff agenda items", "polite request for confirmation"],
          },
          {
            id: "mock-01-wri-02",
            type: "writing",
            prompt: "Draft an internal orientation memo to the incoming project team members summarizing account background and team communication norms.",
            scenario: "You need to align 5 cross-functional team members (analysts, QA, developers) on communication channels, daily standup timing, and timesheet logging guidelines.",
            expectedFormat: "formal_memo",
            recommendedWordCount: { min: 110, max: 160 },
            evaluationCriteria: ["Standard corporate memo formatting", "Clear operational expectations", "Contact points for questions", "Professional tone"],
            modelResponse: "MEMORANDUM\n\nTO: Phoenix Onboarding Delivery Team\nFROM: Project Management Office\nDATE: November 4, 2026\nSUBJECT: Account Orientation & Operating Guidelines\n\nWelcome to the Phoenix Account. As we commence kickoff preparations, please note the following operational guidelines:\n\n1. Daily Standups: Daily syncs will take place Monday through Friday at 9:30 AM EST on the Project Phoenix Slack huddle.\n2. Primary Channels: All client-related documentation must reside in the shared SharePoint repository under confidential permissions.\n3. Timesheet Compliance: Please submit billable weekly timesheets every Friday by 4:00 PM EST.\n\nIf you encounter any tooling or credential access blockers, please reach out to our team lead immediately.\n\nThank you for your dedication to delivery excellence.",
            keyPoints: ["daily sync timing", "documentation repository", "timesheet submission deadline", "support escalation contact"],
          },
        ],
        situational: [
          makeSituational(
            "The client lead arrives at the kickoff meeting 15 minutes late due to an urgent internal escalation and appears visibly stressed.",
            "You need to adjust the meeting agenda gracefully without running over the allotted 45-minute window or making the client feel rushed.",
            "Acknowledge their busy schedule with empathy, quickly adjust the agenda to focus strictly on essential decision points, and offer to share informational slides asynchronously.",
            [
              "Politely scold the client for being late and insist on covering every single slide even if the meeting runs 30 minutes over.",
              "Cancel the meeting immediately and tell the client to reschedule when they have more time.",
              "Rush through all 30 slides at double speed without allowing any client questions or discussion.",
            ],
            3, // D
            "Demonstrating empathy, agile prioritization, and respecting executive time constraints preserves rapport while achieving core alignment.",
            "Write a 1-sentence opening remark welcoming the client into the room with professional empathy.",
            "chat",
            "Welcome, Ms. Vance; we completely understand urgent priorities arise, so we have streamlined today's agenda to focus directly on key milestones and decisions."
          ),
          makeSituational(
            "During the kickoff call, the client asks about a reporting feature that is not in the signed scope of work for Phase 1.",
            "You want to maintain a positive commercial relationship without accepting scope creep that jeopardizes the delivery timeline.",
            "Validate the strategic importance of the feature, explain the current Phase 1 scope boundary, and propose capturing it as a high-priority enhancement for Phase 2 assessment.",
            [
              "Immediately promise the client that your team will build it in Phase 1 for free to make a good impression.",
              "Bluntly state that they failed to read the contract terms and that you cannot help them.",
              "Avoid answering the question and change the topic to the weather.",
            ],
            0, // A
            "Consultative account management balances client enthusiasm with contractual discipline through transparent scope control.",
            "Draft a 2-sentence follow-up email confirming how the feature request will be handled.",
            "email",
            "Thank you for highlighting the automated analytics feature during today's call. Our team will prepare a formal scope impact assessment for Phase 2 inclusion and share it alongside next week's status report."
          ),
          makeSituational(
            "A junior team member accidentally shares an internal draft document with cost margin estimates on the shared client screen.",
            "You need to handle the slip-up smoothly during the live call without drawing undue attention, then address it with the team afterward.",
            "Calmly switch the presentation window back to the client slide deck without reacting dramatically, conclude the call professionally, and conduct a blameless security coaching session afterward.",
            [
              "Yell at the junior employee on the live call so the client knows it was not your personal fault.",
              "Panic, apologize profusely for 10 minutes, and ask the client to promise they did not read the numbers.",
              "Immediately disconnect the internet cable to terminate the video call abruptly.",
            ],
            1, // B
            "Composure during inadvertent disclosures prevents magnifying the error, while post-meeting blameless coaching ensures procedural remediation.",
            "Write a private 2-sentence Slack message to support your junior colleague after the call.",
            "chat",
            "Great job presenting the functional flows today, David. Let's do a quick 5-minute debrief this afternoon to review screen-sharing privacy best practices."
          ),
          makeSituational(
            "The client point of contact does not respond to two consecutive emails requesting required API sandbox access credentials.",
            "Project kickoff activities are scheduled to begin in three business days, and the team cannot start without sandbox access.",
            "Send a courteous follow-up email clearly stating the dependency and milestone impact, and offer a quick 5-minute phone alignment with their technical administrator.",
            [
              "Escalate immediately to the client's Chief Technology Officer with an aggressive demand for accountability.",
              "Halt all work and send no further reminders until the client eventually remembers to reply.",
              "Attempt to guess the sandbox passwords or bypass security protocols to proceed without them.",
            ],
            2, // C
            "Diplomatic persistence highlighting milestone dependencies provides stakeholders with clarity without appearing accusatory.",
            "Write a courteous 2-sentence email follow-up regarding the access credentials.",
            "email",
            "Hi David, to ensure our engineers can begin sandbox validation on schedule next Monday, could you kindly confirm credential access today? If preferred, we would be delighted to hop on a 5-minute call with your security admin."
          ),
          makeSituational(
            "Two senior stakeholders on the client team give mutually conflicting requirements regarding user role permissions during the kickoff session.",
            "You need to align on a single requirements baseline without embarrassing either stakeholder in the meeting.",
            "Document both perspectives neutrally in the meeting minutes, outline the architectural trade-offs of each approach, and facilitate a dedicated 20-minute alignment session to reach consensus.",
            [
              "Take the side of the more vocal stakeholder and ignore the other stakeholder's input completely.",
              "Tell both stakeholders that they need to stop arguing and figure out their own internal company problems.",
              "Build both contradictory permission models into the code secretly and let the system crash in production.",
            ],
            3, // D
            "Neutral documentation of trade-offs and structured facilitation empowers client stakeholders to make informed consensus decisions.",
            "Write a 1-sentence summary note for the meeting minutes regarding the permissions discussion.",
            "chat",
            "Permission Architecture Note: Both role-based and attribute-based workflows were captured; our team will distribute an impact matrix for final stakeholder sign-off by Thursday."
          ),
          makeSituational(
            "The client expresses deep apprehension about the proposed project go-live date, citing bad experiences with past consulting vendors.",
            "You need to build confidence in your team's capability and process without making unrealistic delivery promises.",
            "Acknowledge their past frustrations empathetically, walk through your team's proactive milestone tracking and automated quality checkpoints, and commit to transparent weekly risk registers.",
            [
              "Guarantee with 100% certainty that your team never makes mistakes and that projects always finish weeks early.",
              "Dismiss their concerns as irrelevant and tell them that your company is much better than their previous vendors.",
              "Agree that software projects always fail and advise them to lower their expectations.",
            ],
            0, // A
            "Empathetic listening backed by concrete governance frameworks and transparent reporting transforms stakeholder skepticism into trust.",
            "Write a 2-sentence reassurance email to the client sponsor.",
            "email",
            "We understand how critical schedule predictability is for your organization, and we take that responsibility seriously. Our governance framework incorporates bi-weekly milestone checkpoints and an open risk register so you always have full visibility into delivery health."
          ),
        ],
        reading: {
          id: "mock-01-read",
          type: "reading",
          passageTitle: "The Anatomy of High-Trust Corporate Kickoffs",
          passageTopic: "Client Services & Engagement",
          wordCount: 360,
          passageContent: `In enterprise software delivery, the initial kickoff phase establishes the psychological and communicative foundation for the entire engagement. While commercial contracts delineate financial scope, service level agreements, and intellectual property terms, they cannot substitute for interpersonal alignment. Industry research demonstrates that over sixty percent of mid-flight consulting disputes stem not from computational deficiencies, but from unexamined divergence in expectations established during the first two weeks of project commencement.\n\nA common organizational vulnerability during kickoff is the 'assumptive delivery trap'—the tendency of technical leads to assume that standard industry terminology carries identical operational meaning for the client organization. For instance, a vendor might define 'staging deployment' as code ready for internal automated testing, whereas a client sponsor may anticipate that a staging deployment represents a user-ready product available for executive demonstration. When such discrepancies remain unaddressed, early status reports generate confusion rather than confidence.\n\nTo inoculate engagements against early friction, mature consultative organizations implement transparent governance rituals from day one. These include establishing joint decision logs, publishing bi-directional communication protocols, and defining unambiguous exit criteria for each project phase. Rather than treating the kickoff as a ceremonial presentation, high-performing teams treat it as an intensive operational dialogue designed to illuminate hidden dependencies, align communication cadences, and foster mutual accountability.`,
          questions: [
            makeMCQ(
              "According to the passage, what accounts for over sixty percent of mid-flight consulting disputes?",
              "Unexamined divergence in expectations established during the initial two weeks.",
              [
                "Computational defects and severe hardware processing constraints.",
                "Disagreements over intellectual property and copyright ownership terms.",
                "Inadequate financial investment from corporate venture sponsors.",
              ],
              1, // B
              "Paragraph 1 explicitly notes that disputes stem from 'unexamined divergence in expectations established during the first two weeks of project commencement.'",
              { id: "mock-01-read-q01", questionType: "factual" }
            ),
            makeMCQ(
              "What is the primary danger associated with the 'assumptive delivery trap' described in paragraph 2?",
              "Assuming that common industry terminology carries identical operational meaning for both parties.",
              [
                "Failing to purchase sufficient commercial software licenses.",
                "Requiring too many automated unit tests during regression cycles.",
                "Relying entirely on remote video calls instead of face-to-face meetings.",
              ],
              2, // C
              "Paragraph 2 describes this trap as the tendency to assume that standard terminology carries identical operational meaning across both organizations.",
              { id: "mock-01-read-q02", questionType: "factual" }
            ),
            makeMCQ(
              "What can be inferred from the author's characterization of mature consultative governance rituals?",
              "Operational transparency and shared decision logs establish mutual accountability and mitigate misunderstandings.",
              [
                "Client kickoff meetings should be abolished in favor of email memos.",
                "Technical teams should never explain technical jargon to client sponsors.",
                "Legal contracts are entirely useless in corporate software engagements.",
              ],
              3, // D
              "Paragraph 3 concludes that structured transparent rituals illuminate hidden dependencies and foster mutual accountability.",
              { id: "mock-01-read-q03", questionType: "inference" }
            ),
            makeMCQ(
              "As used in paragraph 3, what does the word 'INOCULATE' most closely mean in this business context?",
              "Protect or safeguard against future vulnerabilities",
              ["Completely eliminate financial expenses", "Deliberately delay project milestones", "Formally terminate commercial negotiations"],
              0, // A
              "In this figurative context, to 'inoculate against friction' means to protect or safeguard the project from potential misunderstandings.",
              { id: "mock-01-read-q04", questionType: "vocabulary" }
            ),
          ],
        },
        listening: {
          id: "mock-01-list",
          type: "listening",
          title: "Kickoff Call Alignment: Retail Solutions Engagement",
          context: "Marcus (Delivery Lead) and Rachel (Client Relationship Partner) conduct a pre-kickoff sync to finalize expectations before meeting the corporate sponsor.",
          dialogue: [
            { speaker: "Marcus", text: "Rachel, thanks for meeting. I just reviewed the retail client's initial architecture document. Their core database team works on Pacific Standard Time, so we need to adjust our daily standup." },
            { speaker: "Rachel", text: "Good catch, Marcus. Let's schedule the daily sync for 11:30 AM EST, which gives their California engineers a reasonable start to their morning." },
            { speaker: "Marcus", text: "Agreed. Also, their VP requested that we demonstrate the preliminary data pipeline prototype by the third week of the sprint." },
            { speaker: "Rachel", text: "That is feasible, provided their network security team grants our VPN certificates by this Friday at 5:00 PM. Let's make sure that milestone dependency is clearly highlighted in tomorrow's kickoff deck." },
            { speaker: "Marcus", text: "I'll update slide four right now to reflect the Friday VPN milestone and our adjusted 11:30 AM sync." },
          ],
          fullScriptText: "Marcus: Rachel, thanks for meeting. I just reviewed the retail client's initial architecture document. Their core database team works on Pacific Standard Time, so we need to adjust our daily standup.\nRachel: Good catch, Marcus. Let's schedule the daily sync for 11:30 AM EST, which gives their California engineers a reasonable start to their morning.\nMarcus: Agreed. Also, their VP requested that we demonstrate the preliminary data pipeline prototype by the third week of the sprint.\nRachel: That is feasible, provided their network security team grants our VPN certificates by this Friday at 5:00 PM. Let's make sure that milestone dependency is clearly highlighted in tomorrow's kickoff deck.\nMarcus: I'll update slide four right now to reflect the Friday VPN milestone and our adjusted 11:30 AM sync.",
          questions: [
            makeMCQ(
              "What time did Marcus and Rachel agree upon for the daily standup meeting?",
              "11:30 AM EST",
              ["9:00 AM EST", "2:00 PM EST", "4:30 PM PST"],
              2, // C
              "Rachel explicitly recommends: 'Let's schedule the daily sync for 11:30 AM EST, which gives their California engineers a reasonable start.'",
              { id: "mock-01-list-q01" }
            ),
            makeMCQ(
              "What critical dependency must be met before the team can demonstrate the prototype by week three?",
              "The client's network security team must grant VPN certificates by Friday at 5:00 PM.",
              [
                "The client must double their upfront consulting deposit.",
                "All engineers must complete mandatory in-person training.",
                "The primary database must be migrated to an on-premise mainframe.",
              ],
              3, // D
              "Rachel notes: 'That is feasible, provided their network security team grants our VPN certificates by this Friday at 5:00 PM.'",
              { id: "mock-01-list-q02" }
            ),
            makeMCQ(
              "Why did the team need to adjust their daily standup time in the first place?",
              "The client's core database engineers operate across Pacific Standard Time.",
              [
                "The consulting team wanted to avoid morning traffic.",
                "The client VP refuses to attend meetings before 3:00 PM.",
                "The video conferencing software was under scheduled server maintenance.",
              ],
              0, // A
              "Marcus points out: 'Their core database team works on Pacific Standard Time, so we need to adjust our daily standup.'",
              { id: "mock-01-list-q03" }
            ),
            makeMCQ(
              "Which specific slide in the kickoff presentation deck did Marcus agree to update immediately?",
              "Slide four",
              ["Slide one", "Slide ten", "The closing appendix slide"],
              1, // B
              "Marcus confirms: 'I'll update slide four right now to reflect the Friday VPN milestone.'",
              { id: "mock-01-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-01-spk-01",
            type: "speaking",
            prompt: "Introduce yourself professionally, summarizing your academic and technical background, and explain how you ensure clear communication when joining a new project team.",
            context: "First impressions on a new consulting engagement. Demonstrate poise, structured flow, concise self-articulation, and practical teamwork principles.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Clear professional introduction", "Key technical and problem-solving skills", "Proactive communication philosophy", "Strong forward-looking closing"],
            modelTranscript: "Hello everyone, my name is Alex Chen. Over the past three years, I have specialized in full-stack web engineering, building responsive cloud applications and collaborating closely in agile sprints. When joining a new team, I believe proactive communication is just as vital as code quality. I prioritize understanding shared requirements, actively clarifying dependencies during daily standups, and documenting architectural decisions transparently. I look forward to contributing my technical skills and collaborative energy to our shared project milestones.",
          },
          {
            id: "mock-01-spk-02",
            type: "speaking",
            prompt: "Describe an experience where you had to adapt quickly to an unexpected project change or technical blocker. What steps did you take, and what was the outcome?",
            context: "Problem-solving adaptability. Use the STAR methodology (Situation, Task, Action, Result) to convey resilience and structured thinking.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Context and challenge (Situation/Task)", "Specific step-by-step methodology (Action)", "Measurable outcome and lesson (Result)", "Reflective business maturity"],
            modelTranscript: "In my final-year software capstone, our team faced a critical obstacle when an external authentication API we relied upon was deprecated two weeks before client deployment. As the technical lead, I quickly convened an emergency 20-minute triage session to assess our remaining sprint hours. Rather than panicking, I broke the challenge into micro-tasks: I researched an open-source OAuth2 alternative, delegated schema updates to our backend team, and took charge of testing the token workflow myself. Through structured collaboration and daily status updates, we successfully integrated the new protocol 48 hours ahead of our final presentation, earning top marks from our corporate mentors.",
          },
        ],
      },
    },

    // ==========================================
    // MOCK TEST 02: Cross-Functional Team Collab
    // ==========================================
    {
      id: "mock-02",
      testNumber: 2,
      title: "Mock Test 02: Cross-Functional Team Collaboration",
      difficulty: "Foundation",
      durationMinutes: 60,
      description: "Internal sprint communication, task handoffs between QA and developers, and clarifying work requirements.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "Every developer and quality analyst on the squad _____ responsible for updating their Jira ticket statuses daily.",
            "is",
            ["are", "were", "have been"],
            1, // B
            "Subjects preceded by 'every' are grammatically singular and require singular verbs ('is').",
            { id: "mock-02-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "easy" }
          ),
          makeMCQ(
            "The frontend engineer realized that the API endpoint _____ modified during the previous weekend deployment.",
            "had been",
            ["has been", "is being", "will be"],
            2, // C
            "Past perfect passive ('had been modified') expresses an action completed prior to the past moment of realization ('realized').",
            { id: "mock-02-gram-02", type: "grammar", topic: "Tenses", difficulty: "easy" }
          ),
          makeMCQ(
            "The team authoring the documentation established _____ uniform standard for API error codes across all microservices.",
            "a",
            ["an", "the", "no article needed"],
            3, // D
            "'Uniform' begins with a consonant 'y' sound (/ˈjuːnɪfɔːm/), hence taking the article 'a'.",
            { id: "mock-02-gram-03", type: "grammar", topic: "Articles", difficulty: "easy" }
          ),
          makeMCQ(
            "The scrum master insisted _____ conducting a short root-cause retrospective before starting the next sprint.",
            "on",
            ["for", "to", "with"],
            0, // A
            "'Insist' takes the preposition 'on' (or 'upon') when introducing a gerund phrase ('insisted on conducting').",
            { id: "mock-02-gram-04", type: "grammar", topic: "Prepositions", difficulty: "easy" }
          ),
          makeMCQ(
            "Neither the lead designer nor the backend developers consider _____ ready for the final code freeze.",
            "themselves",
            ["himself", "herself", "itself"],
            1, // B
            "When the plural subject ('developers') is closer to the verb, the reflexive pronoun must be plural ('themselves').",
            { id: "mock-02-gram-05", type: "grammar", topic: "Pronouns", difficulty: "easy" }
          ),
          makeMCQ(
            "The code passed all static linting checks, _____ integration tests revealed unexpected memory leaks.",
            "yet",
            ["because", "therefore", "unless"],
            2, // C
            "'Yet' acts as an adversative conjunction highlighting the contrast between clean linting and memory leaks.",
            { id: "mock-02-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "easy" }
          ),
          makeMCQ(
            "Convert to passive voice: 'The QA automation engineer executed twenty test suites before noon.'",
            "Twenty test suites were executed by the QA automation engineer before noon.",
            [
              "Twenty test suites have been executed by the QA automation engineer before noon.",
              "Twenty test suites are executed before noon by the QA automation engineer.",
              "The QA automation engineer was executed by twenty test suites before noon.",
            ],
            3, // D
            "Past simple passive replaces the active object with 'were executed' + agent phrase.",
            { id: "mock-02-gram-07", type: "grammar", topic: "Active and Passive Voice", difficulty: "easy" }
          ),
          makeMCQ(
            "Change to indirect speech: The technical lead said, 'Please review the pull request before merging.'",
            "The technical lead requested that we review the pull request before merging.",
            [
              "The technical lead said that please review the pull request before merging.",
              "The technical lead told to us that we should be reviewing the pull request before merging.",
              "The technical lead asked that we will review the pull request before merging.",
            ],
            0, // A
            "Polite imperative requests shift cleanly to 'requested that we review' in indirect reported speech.",
            { id: "mock-02-gram-08", type: "grammar", topic: "Direct and Indirect Speech", difficulty: "easy" }
          ),
          makeMCQ(
            "Identify the sentence that maintains parallel grammatical structure:",
            "Effective developers focus on writing clean code, reviewing peer pull requests, and automating regression tests.",
            [
              "Effective developers focus on writing clean code, peer pull request review, and to automate regression tests.",
              "Effective developers focus on to write clean code, reviewing peer pull requests, and automation of tests.",
              "Effective developers focus on writing clean code, peer pull requests, and test automation.",
            ],
            1, // B
            "Parallelism requires that all coordinated items share identical gerund forms ('writing', 'reviewing', 'automating').",
            { id: "mock-02-gram-09", type: "grammar", topic: "Sentence Correction", difficulty: "easy" }
          ),
          makeMCQ(
            "Choose the word closest in meaning to 'CONCUR' as used in: 'The lead architect concurred with the proposed schema redesign.'",
            "agreed",
            ["disagreed", "hesitated", "interfered"],
            2, // C
            "'Concur' means to agree or share the same opinion on a matter.",
            { id: "mock-02-gram-10", type: "grammar", topic: "Vocabulary in Context", difficulty: "easy" }
          ),
        ],
        writing: [
          {
            id: "mock-02-wri-01",
            type: "writing",
            prompt: "Draft an email to your QA counterpart requesting clarification on three bug tickets flagged during yesterday's staging deployment.",
            scenario: "The tickets lack reproducible steps and screen captures. You need more context to diagnose whether the defects stem from the backend service or browser caching.",
            expectedFormat: "professional_email",
            recommendedWordCount: { min: 100, max: 150 },
            evaluationCriteria: ["Collaborative, non-blaming tone", "Specific ticket identifiers mentioned", "Actionable request for logs/steps", "Professional signoff"],
            modelResponse: "Hi Priya,\n\nI hope your morning is going well. Thank you for your thorough testing during yesterday's staging deployment.\n\nI am currently investigating bug tickets BUG-401, BUG-404, and BUG-409 regarding the checkout validation latency. To help our backend team reproduce the exact conditions, could you kindly share the browser console logs and specific payload data used during your test run?\n\nThis will help us confirm whether the issue stems from an uncached API response or the payload handler. Let me know if you would like to hop on a quick 5-minute screen share to review the behavior together.\n\nBest regards,\nMarcus Thorne\nFull Stack Developer",
            keyPoints: ["mention ticket numbers", "polite request for reproduction logs", "offer for brief sync", "courteous tone"],
          },
          {
            id: "mock-02-wri-02",
            type: "writing",
            prompt: "Draft a sprint handoff update for your team summarizing completed frontend deliverables and outstanding backend dependencies for Sprint 14.",
            scenario: "You are completing your sprint tasks and need to document what has been merged to staging and what remains blocked on API endpoints.",
            expectedFormat: "project_update",
            recommendedWordCount: { min: 110, max: 160 },
            evaluationCriteria: ["Clear bulleted status breakdown", "Identification of blockers", "Next sprint priorities", "Executive readability"],
            modelResponse: "Sprint 14 Handoff Summary\n\nTeam,\n\nHere is our end-of-sprint handoff status for the customer profile feature stream:\n\n1. Completed & Merged to Staging:\n- Responsive Profile UI and password reset forms (PR #142, PR #145)\n- Form validation error tooltips with 100% unit test coverage\n\n2. Current Dependencies & Blockers:\n- Avatar Upload: Blocked pending AWS S3 presigned URL endpoint from the backend team (Ticket API-882)\n- Notification Toggles: Ready for end-to-end integration once staging authentication stabilizes\n\n3. Next Steps:\nWe will demo the merged profile screens during tomorrow's sprint review at 3:00 PM.\n\nThank you for a productive sprint!\n\nBest regards,\nEngineering Squad A",
            keyPoints: ["completed deliverables", "blocked tickets and reasons", "demonstration timing", "clear bulleted sections"],
          },
        ],
        situational: [
          makeSituational(
            "A QA engineer rejects your pull request 10 minutes before the sprint code freeze, citing an edge-case visual alignment bug on tablet screens.",
            "You need to decide how to respond so the sprint deployment is not delayed unnecessarily while ensuring quality standards are upheld.",
            "Review the bug report collaboratively with the QA engineer, determine whether the visual glitch impairs user functionality, and agree to either merge with a hotfix ticket or push a 15-minute CSS patch together.",
            [
              "Override the QA rejection forcefully using admin privileges and insult the QA engineer on public Slack.",
              "Ignore the comment completely and log off for the weekend.",
              "Complain to the Director of Engineering that QA is actively sabotaging your career.",
            ],
            3, // D
            "Collaborative triage of severity trade-offs ensures release velocity without compromising engineering team solidarity.",
            "Write a polite Slack reply to the QA engineer on the pull request thread.",
            "chat",
            "Thanks for catching the tablet layout discrepancy, Priya; let's take 5 minutes to verify if we can push a quick flexbox patch before the 4 PM freeze."
          ),
          makeSituational(
            "During the daily standup, a senior colleague continuously interrupts a quieter junior developer who is trying to explain their sprint progress.",
            "You want to ensure an inclusive, psychologically safe team environment without creating unnecessary interpersonal hostility.",
            "Intervene gently during the call by saying: 'Thanks David, but let's make sure Maya finishes explaining her update so we have the full context on the auth module.'",
            [
              "Shout at the senior developer to shut up and leave the call immediately.",
              "Say nothing during the call, but send an anonymous complaint to Human Resources afterward.",
              "Interrupt both of them and take over the meeting yourself.",
            ],
            0, // A
            "Gentle, respectful facilitation models psychological safety and ensures every team member's operational voice is valued.",
            "Write a private 1-sentence Slack note thanking Maya for her clear update.",
            "chat",
            "Great update on the auth module today, Maya; your explanation of the token lifecycle really clarified our next integration steps."
          ),
          makeSituational(
            "The backend team releases an unannounced breaking change to the database schema that breaks your frontend staging build.",
            "You need the issue resolved rapidly without triggering a blame game between squads.",
            "Post a clear, data-driven update in the shared engineering Slack channel highlighting the specific failing payload and asking the backend squad to coordinate a rollback or patch.",
            [
              "Post angry memes in the company-wide general channel accusing the backend team of incompetence.",
              "Silently delete the frontend code and pretend you never wrote it.",
              "Directly modify the backend database schema yourself in production without notifying anyone.",
            ],
            1, // B
            "Objective, blameless communication supported by telemetry and reproduction steps accelerates technical resolution.",
            "Write a concise 2-sentence Slack message to the backend team detailing the issue.",
            "chat",
            "Hi backend team, our staging UI builds are failing on user payload verification following commit #b84f; could we align on the updated schema fields so we can adjust our interfaces?"
          ),
          makeSituational(
            "A developer on your squad repeatedly forgets to update their ticket status on the Kanban board, creating confusion about sprint progress.",
            "You need ticket visibility for daily stakeholder reporting without micromanaging your teammate.",
            "Approach the teammate during a 1-on-1 coffee break, explain how outdated board statuses create reporting bottlenecks for leadership, and offer to set up an automated reminder bot together.",
            [
              "Publicly call them lazy and unorganized during the executive steering review.",
              "Stop speaking to the teammate completely.",
              "Secretly log into their Jira account and move their tickets around every night.",
            ],
            2, // C
            "Constructive private dialogue combined with automated process scaffolding addresses behavioral friction without defensiveness.",
            "Write a polite private message suggesting a quick sync on board management.",
            "chat",
            "Hey Sam, could we grab 5 minutes today to sync on board automation? Having our tickets up to date really helps keep leadership off our backs during sprint reviews."
          ),
          makeSituational(
            "The product manager asks you to bypass code review to deploy a feature directly to production to meet a marketing campaign deadline.",
            "You want to support business goals, but bypassing reviews introduces severe security and stability risks.",
            "Politely explain the technical risks of skipping peer review (defect rate, security vulnerabilities), and offer an expedited 30-minute peer review with a designated senior engineer as a balanced compromise.",
            [
              "Bypass all reviews immediately without testing anything because the business is always right.",
              "Refuse rudely and send an email CCing the entire executive committee claiming the product manager is unethical.",
              "Pretend to deploy the feature, but actually do nothing and lie about it on the demo.",
            ],
            3, // D
            "Constructive compromise upholding fundamental quality boundaries while providing accelerated delivery pathways demonstrates senior consulting maturity.",
            "Write a diplomatic 2-sentence email to the Product Manager proposing the expedited review.",
            "email",
            "We understand how vital the marketing launch deadline is for the company. To prevent critical production defects while meeting your timeline, our lead engineer has agreed to perform an expedited 30-minute review right now so we can deploy safely by 2:00 PM."
          ),
          makeSituational(
            "In a sprint retrospective, two team members begin arguing aggressively about whose fault it was that the regression suite failed.",
            "As the session facilitator, you must de-escalate the tension and redirect the conversation toward constructive process improvements.",
            "Pause the discussion calmly, remind everyone that retrospectives are strictly blameless learning forums, and refocus the inquiry onto systemic safeguards: 'What automated guardrail could prevent this defect regardless of who wrote the code?'",
            [
              "Encourage them to fight it out physically so the stronger developer wins the argument.",
              "End the meeting abruptly and never schedule another retrospective.",
              "Pick one developer to blame publicly and demand that they write a letter of apology.",
            ],
            0, // A
            "Blameless problem-solving shifts team dynamics from accusatory finger-pointing to systemic architectural resilience.",
            "Write a 1-sentence de-escalation statement to restore psychological safety.",
            "chat",
            "Let's step back from individual actions and examine our process: what automated pipeline check can we introduce so our team catches this issue before code review?"
          ),
        ],
        reading: {
          id: "mock-02-read",
          type: "reading",
          passageTitle: "Asynchronous Coordination in Agile Engineering Ecosystems",
          passageTopic: "Agile Engineering & DevOps",
          wordCount: 375,
          passageContent: `As software organizations transition from co-located office floors to geographically distributed engineering clusters, the operational mechanics of agile collaboration have undergone fundamental transformation. Traditional agile frameworks, conceived in an era of physical co-presence, relied heavily upon high-bandwidth synchronous interactions—such as the fifteen-minute daily standup, physical sticky-note Kanban boards, and spontaneous desk-side pair programming. However, when development teams span eight or more time zones, rigid synchronization often transforms into a logistical impediment rather than an accelerator.\n\nEmpirical organizational studies indicate that requiring distributed engineers to attend early morning or late-night synchronous ceremonies introduces circadian fatigue and fragments concentrated problem-solving intervals. When an engineer's day is punctured by recurrent synchronous check-ins, the duration of uninterrupted deep work decreases precipitously. Consequently, advanced technology organizations are pioneering 'asynchronous-first' agile paradigms. In these environments, the traditional verbal standup is superseded by structured text updates broadcast via team communication platforms, while architectural debates are conducted through asynchronous RFC (Request for Comments) documents with defined review windows.\n\nNevertheless, asynchronous collaboration is not an abdication of coordination; rather, it demands elevated communicative precision. In a synchronous conversation, vocal inflection and immediate visual feedback allow participants to clarify ambiguous statements instantaneously. In contrast, an asynchronous technical proposal must be meticulously contextualized, articulating assumptions, edge cases, and anticipated trade-offs with explicit clarity. Organizations that master asynchronous articulation cultivate superior organizational documentation, eliminate geographical hiring constraints, and grant their engineering workforce the autonomy necessary for sustained deep technical execution.`,
          questions: [
            makeMCQ(
              "According to paragraph 1, what did traditional agile frameworks rely upon heavily?",
              "High-bandwidth synchronous interactions like physical standups and spontaneous desk-side pairing.",
              [
                "Strict algorithmic artificial intelligence automation engines.",
                "Entirely asynchronous RFC documentation repositories across continents.",
                "Outsourcing all software quality testing to offshore third-party contractors.",
              ],
              1, // B
              "Paragraph 1 notes that traditional frameworks 'relied heavily upon high-bandwidth synchronous interactions—such as the fifteen-minute daily standup... and spontaneous desk-side pair programming.'",
              { id: "mock-02-read-q01", questionType: "factual" }
            ),
            makeMCQ(
              "What is a primary drawback of recurrent synchronous ceremonies for distributed engineers, according to paragraph 2?",
              "Circadian fatigue and the fragmentation of uninterrupted deep work intervals.",
              [
                "An immediate decrease in employee compensation packages.",
                "A complete failure of automated unit testing frameworks.",
                "Severe network bandwidth consumption across local routers.",
              ],
              2, // C
              "Paragraph 2 states that recurrent check-ins introduce 'circadian fatigue and fragments concentrated problem-solving intervals.'",
              { id: "mock-02-read-q02", questionType: "factual" }
            ),
            makeMCQ(
              "What does the author argue is required for asynchronous collaboration to succeed?",
              "Elevated communicative precision and meticulous contextualization of technical proposals.",
              [
                "A complete elimination of all code reviews and documentation.",
                "Requiring all engineers to move to the same time zone within six months.",
                "Replacing all written documentation with audio voice notes.",
              ],
              3, // D
              "Paragraph 3 explicitly emphasizes that asynchronous collaboration 'demands elevated communicative precision... articulating assumptions, edge cases, and anticipated trade-offs with explicit clarity.'",
              { id: "mock-02-read-q03", questionType: "inference" }
            ),
            makeMCQ(
              "As used in paragraph 2, what does the word 'SUPERSEDED' most closely mean?",
              "Replaced or supplanted by something newer or more effective",
              ["Postponed indefinitely", "Examined under a microscope", "Violently rejected"],
              0, // A
              "'Superseded' means replaced or set aside in favor of a superior alternative.",
              { id: "mock-02-read-q04", questionType: "vocabulary" }
            ),
          ],
        },
        listening: {
          id: "mock-02-list",
          type: "listening",
          title: "Sprint Standup: API Integration Checkpoint",
          context: "Liam (Scrum Master), Maya (Frontend Lead), and Carlos (Backend Architect) synchronize sprint velocity and unblock pull request reviews.",
          dialogue: [
            { speaker: "Liam", text: "Good morning team. We have four days left in Sprint 14. Maya, how are things looking on the responsive checkout redesign?" },
            { speaker: "Maya", text: "Frontend components are ninety percent complete, Liam. However, we are blocked on the Stripe payment webhook integration because the staging API returns a 403 Forbidden error." },
            { speaker: "Carlos", text: "I can speak to that, Maya. We rotated the staging API authentication secrets yesterday evening to comply with the new security audit. I updated the environment variables in the wiki this morning." },
            { speaker: "Maya", text: "Thanks Carlos, that explains it! Once I pull those updated secrets into our Docker container, our automated integration tests should run green." },
            { speaker: "Liam", text: "Excellent. Carlos, could you also review Maya's pull request on the user profile layout by 2:00 PM today so QA can begin validation?" },
            { speaker: "Carlos", text: "Absolutely, Liam. I'll review it right after this standup." },
          ],
          fullScriptText: "Liam: Good morning team. We have four days left in Sprint 14. Maya, how are things looking on the responsive checkout redesign?\nMaya: Frontend components are ninety percent complete, Liam. However, we are blocked on the Stripe payment webhook integration because the staging API returns a 403 Forbidden error.\nCarlos: I can speak to that, Maya. We rotated the staging API authentication secrets yesterday evening to comply with the new security audit. I updated the environment variables in the wiki this morning.\nMaya: Thanks Carlos, that explains it! Once I pull those updated secrets into our Docker container, our automated integration tests should run green.\nLiam: Excellent. Carlos, could you also review Maya's pull request on the user profile layout by 2:00 PM today so QA can begin validation?\nCarlos: Absolutely, Liam. I'll review it right after this standup.",
          questions: [
            makeMCQ(
              "Why did the staging API return a 403 Forbidden error for the frontend team?",
              "The backend team rotated the authentication secrets to comply with a security audit.",
              [
                "The Stripe service experienced a worldwide server outage.",
                "The frontend code had syntax errors in the CSS styling.",
                "The staging database was permanently deleted by an intern.",
              ],
              2, // C
              "Carlos explains: 'We rotated the staging API authentication secrets yesterday evening to comply with the new security audit.'",
              { id: "mock-02-list-q01" }
            ),
            makeMCQ(
              "By what time did Liam request Carlos to review Maya's pull request on user profiles?",
              "By 2:00 PM today",
              ["By 9:00 AM tomorrow", "By next Monday morning", "By midnight tonight"],
              3, // D
              "Liam requests: 'Carlos, could you also review Maya's pull request on the user profile layout by 2:00 PM today?'",
              { id: "mock-02-list-q02" }
            ),
            makeMCQ(
              "How many days remain in Sprint 14 at the time of this standup meeting?",
              "Four days",
              ["Two days", "Seven days", "Ten days"],
              0, // A
              "Liam opens the meeting stating: 'We have four days left in Sprint 14.'",
              { id: "mock-02-list-q03" }
            ),
            makeMCQ(
              "Where did Carlos publish the updated environment variables for the team?",
              "In the team wiki",
              ["On an unencrypted email chain", "In a private direct message to Liam", "On a physical office whiteboard"],
              1, // B
              "Carlos confirms: 'I updated the environment variables in the wiki this morning.'",
              { id: "mock-02-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-02-spk-01",
            type: "speaking",
            prompt: "Explain how you handle constructive feedback or criticism when a senior engineer requests significant revisions on your code during peer review.",
            context: "Emotional intelligence and growth mindset during technical code reviews. Demonstrate professionalism, receptivity, and objective analysis.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Emotional maturity and professional detachment", "Appreciation for feedback and learning", "Collaborative clarification of architectural rationale", "Commitment to team code quality"],
            modelTranscript: "Receiving constructive critique during code reviews is one of the most effective catalysts for professional growth. When a senior peer requests significant architectural refactoring, I separate my personal ego from the code itself. My first step is to thoroughly examine their comments to understand the underlying principles—whether regarding performance, scalability, or maintainability. If the reasoning is immediately clear, I implement the suggested improvements promptly. If I require deeper context, I schedule a brief 10-minute sync to discuss the architectural trade-offs collaboratively. Ultimately, peer review is a team safeguard, and I view rigorous feedback as an invaluable mentorship opportunity.",
          },
          {
            id: "mock-02-spk-02",
            type: "speaking",
            prompt: "Discuss the importance of empathy and active listening when collaborating with non-technical stakeholders (such as marketing, sales, or finance leaders).",
            context: "Cross-functional bridge building. Articulate how engineers translate technical trade-offs into business value.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Value of empathetic listening", "Translating technical jargon into business terms", "Building cross-departmental trust", "Concrete workplace example"],
            modelTranscript: "In modern technology enterprises, engineering excellence is meaningless if it fails to solve core commercial objectives. When interacting with non-technical leaders in marketing or finance, active listening is essential. Non-technical stakeholders often express valid business urgency in terms of customer retention or revenue, while engineers perceive the problem through latency and infrastructure constraints. By practicing empathetic listening, I avoid technical jargon and translate trade-offs into plain business impacts—such as risk reduction, cost efficiency, or user experience. When cross-functional partners feel genuinely heard and understood, mutual trust flourishes, ensuring projects launch smoothly and deliver enduring value.",
          },
        ],
      },
    },

    // ==========================================
    // MOCK TEST 03: Customer Escalation & Delivery
    // ==========================================
    {
      id: "mock-03",
      testNumber: 3,
      title: "Mock Test 03: Customer Escalation & Service Delivery",
      difficulty: "Foundation",
      durationMinutes: 60,
      description: "Diplomatic response to service hiccups, empathetic client messaging, and professional SLA updates.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "Neither the customer service supervisor nor the regional account managers _____ notified about the unplanned outage.",
            "were",
            ["was", "is", "has been"],
            1, // B
            "When subjects are joined by 'neither... nor', the verb agrees with the subject closer to it ('managers' is plural -> 'were').",
            { id: "mock-03-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "easy" }
          ),
          makeMCQ(
            "By the time the enterprise client submitted their formal ticket, the incident response team _____ the root cause.",
            "had already identified",
            ["already identified", "has already identified", "was already identifying"],
            2, // C
            "Past perfect ('had already identified') is used for an action completed before another past event ('submitted').",
            { id: "mock-03-gram-02", type: "grammar", topic: "Tenses", difficulty: "easy" }
          ),
          makeMCQ(
            "The client submitted _____ urgent escalation request following the database latency spike.",
            "an",
            ["a", "the", "no article needed"],
            3, // D
            "'Urgent' begins with a vowel sound (/ˈɜː.dʒənt/), requiring the indefinite article 'an'.",
            { id: "mock-03-gram-03", type: "grammar", topic: "Articles", difficulty: "easy" }
          ),
          makeMCQ(
            "The service level agreement guarantees that all critical tickets will be responded _____ within thirty minutes.",
            "to",
            ["at", "with", "for"],
            0, // A
            "The passive phrase 'responded to' correctly retains its preposition.",
            { id: "mock-03-gram-04", type: "grammar", topic: "Prepositions", difficulty: "easy" }
          ),
          makeMCQ(
            "The client requested that the incident post-mortem be delivered directly to their executive team and _____.",
            "us",
            ["we", "ourself", "ours"],
            1, // B
            "The preposition 'to' requires objective case pronouns ('to their executive team and us').",
            { id: "mock-03-gram-05", type: "grammar", topic: "Pronouns", difficulty: "easy" }
          ),
          makeMCQ(
            "The service was fully restored within forty minutes, _____ our engineering team will continue monitoring traffic through midnight.",
            "yet",
            ["because", "unless", "since"],
            2, // C
            "'Yet' introduces a contrastive clause emphasizing ongoing vigilance despite restoration.",
            { id: "mock-03-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "easy" }
          ),
          makeMCQ(
            "Convert to passive voice: 'The site reliability engineer restored the primary gateway at 03:15 UTC.'",
            "The primary gateway was restored by the site reliability engineer at 03:15 UTC.",
            [
              "The primary gateway has been restored by the engineer at 03:15 UTC.",
              "The primary gateway is restored at 03:15 UTC by the site reliability engineer.",
              "At 03:15 UTC, the site reliability engineer has restored the primary gateway.",
            ],
            3, // D
            "Simple past passive: subject + 'was restored' + agent + time prepositional phrase.",
            { id: "mock-03-gram-07", type: "grammar", topic: "Active and Passive Voice", difficulty: "easy" }
          ),
          makeMCQ(
            "Change to indirect speech: The account director said, 'We deeply regret the disruption caused to your checkout services.'",
            "The account director expressed deep regret for the disruption caused to their checkout services.",
            [
              "The account director said that we deeply regret the disruption caused to your checkout services.",
              "The account director says that they regretted the disruption caused to your checkout services.",
              "The account director told that they are regretting the disruption caused to checkout services.",
            ],
            0, // A
            "Formal indirect speech transforms apologies into professional reporting verbs ('expressed deep regret for...').",
            { id: "mock-03-gram-08", type: "grammar", topic: "Direct and Indirect Speech", difficulty: "easy" }
          ),
          makeMCQ(
            "Select the grammatically correct sentence:",
            "Neither the customer portal nor the mobile applications were impacted by the database failover.",
            [
              "Neither the customer portal nor the mobile applications was impacted by the database failover.",
              "Neither the customer portal or the mobile applications were impacted by the database failover.",
              "Neither the customer portal nor the mobile applications has been impacted by the database failover.",
            ],
            1, // B
            "'Neither... nor' correctly links the subjects, and the verb agrees with the plural subject closer to it ('were impacted').",
            { id: "mock-03-gram-09", type: "grammar", topic: "Sentence Correction", difficulty: "easy" }
          ),
          makeMCQ(
            "Choose the word closest in meaning to 'MITIGATE' as used in: 'We deployed a temporary cache bypass to mitigate customer checkout delays.'",
            "alleviate or reduce",
            ["worsen or amplify", "ignore or disregard", "investigate thoroughly"],
            2, // C
            "'Mitigate' means to make something less severe, harmful, or painful.",
            { id: "mock-03-gram-10", type: "grammar", topic: "Vocabulary in Context", difficulty: "easy" }
          ),
        ],
        writing: [
          {
            id: "mock-03-wri-01",
            type: "writing",
            prompt: "Write a diplomatic email to an enterprise client apologizing for a 25-minute checkout service interruption and explaining the immediate remedial actions taken.",
            scenario: "An unexpected database replica desynchronization caused checkout latency during peak business hours. The service is now stable, and you must communicate transparently.",
            expectedFormat: "professional_email",
            recommendedWordCount: { min: 110, max: 160 },
            evaluationCriteria: ["Empathetic, accountable opening", "Clear factual explanation without technical evasion", "Remedial safeguards implemented", "Commitment to a full post-mortem"],
            modelResponse: "Dear Mr. Sterling,\n\nI am writing to formally address the checkout service interruption experienced by your customers today between 14:10 and 14:35 EST. We sincerely apologize for the disruption this caused to your peak trading operations.\n\nOur site reliability engineering team identified the root cause as an intermittent replica desynchronization in our primary database cluster. Within twenty-five minutes, traffic was rerouted to our high-availability failover cluster, fully restoring transaction processing speeds to normal baselines.\n\nTo prevent recurrence, we have adjusted automated health-check thresholds and provisioned additional memory buffers. Our team is finalizing a comprehensive Root Cause Analysis (RCA) report, which I will deliver to your executive team by tomorrow at 10:00 AM EST.\n\nWe deeply value our partnership and remain committed to your platform's reliability.\n\nSincerely,\nElena Rostova\nHead of Client Operations",
            keyPoints: ["sincere apology", "duration and root cause", "mitigation and restoration", "promise of formal RCA by tomorrow"],
          },
          {
            id: "mock-03-wri-02",
            type: "writing",
            prompt: "Draft an internal incident advisory memo to the customer support team summarizing customer-facing messaging guidelines following today's service restoration.",
            scenario: "Support agents need uniform, professional talking points to handle incoming customer inquiries regarding the outage.",
            expectedFormat: "formal_memo",
            recommendedWordCount: { min: 100, max: 150 },
            evaluationCriteria: ["Structured internal memo formatting", "Clear customer-facing talking points", "Guidance on handling refund inquiries", "Support escalation paths"],
            modelResponse: "MEMORANDUM\n\nTO: Tier 1 & Tier 2 Customer Support Teams\nFROM: Incident Communications Lead\nDATE: November 4, 2026\nSUBJECT: Customer Messaging Guidelines - Checkout Disruption Resolution\n\nFollowing the full restoration of checkout processing at 14:35 EST, please adhere to these communication guidelines when responding to customer tickets:\n\n1. Current Status: Confirm that all checkout and payment processing services are fully operational and monitored.\n2. Incomplete Orders: Advise customers that unconfirmed transactions were automatically voided and no duplicate charges will post to their accounts.\n3. Escalations: Direct enterprise tier inquiries demanding written SLAs to the Account Management queue under tag #IncidentNov4.\n\nThank you for providing calm, empathetic support to our users.\n\nBest regards,\nOperations Desk",
            keyPoints: ["confirmation of full restoration", "guidelines on unconfirmed orders", "escalation tag for SLA inquiries", "empathetic tone"],
          },
        ],
        situational: [
          makeSituational(
            "An enterprise customer calls in furious because their shopping cart was temporarily offline during a flash sale, demanding immediate financial compensation.",
            "You need to de-escalate the client's frustration empathetically while adhering to company commercial compensation policies.",
            "Listen attentively without interrupting, validate their commercial frustration with genuine empathy, confirm that services are restored, and explain that you will initiate a formal SLA credit review with their account director.",
            [
              "Interrupt them and tell them that computer servers fail all the time and they should get over it.",
              "Promise a $50,000 cash refund immediately on the phone without consulting your management.",
              "Hang up the phone immediately and block their number.",
            ],
            3, // D
            "Active listening combined with empathetic de-escalation and following formal commercial procedures preserves client trust.",
            "Write a 1-sentence de-escalation response on the phone.",
            "chat",
            "I completely understand how critical this flash sale is for your revenue, and I apologize for the disruption; our service is fully restored, and I am personally escalating this to our account director to review SLA credit options."
          ),
          makeSituational(
            "A client demands to speak directly to the Chief Executive Officer over a minor two-minute login latency glitch.",
            "You want to respect the client while appropriately triaging executive escalations.",
            "Acknowledge the client's priority with seriousness, explain that your senior operations director is actively managing their account, and offer an immediate briefing with the director within thirty minutes.",
            [
              "Tell the client that they are being ridiculous and that the CEO does not care about them.",
              "Give the client the CEO's personal home phone number.",
              "Pretend to be the CEO yourself on the call.",
            ],
            0, // A
            "Offering a high-level operational leader provides executive validation while protecting organizational governance hierarchy.",
            "Write a polite email reply offering the senior operations briefing.",
            "email",
            "We treat your account with the utmost importance. Our Senior Director of Operations, Marcus Vance, is reviewing the latency telemetry right now and would welcome the opportunity to connect with you directly on a 15-minute briefing at 3:00 PM."
          ),
          makeSituational(
            "Your technical team discovers that an incident was caused by a configuration mistake made by your own team, but the client does not yet know.",
            "You must decide how to frame the root cause analysis report.",
            "Maintain complete corporate honesty: disclose the configuration error transparently in the post-mortem, outline the preventive safeguards implemented, and take full accountability.",
            [
              "Blame a fictitious foreign cyberattack to avoid looking bad.",
              "Blame the client's own internal developers so the client pays extra fees.",
              "Refuse to release any post-mortem report and ignore all client inquiries.",
            ],
            1, // B
            "Transparent accountability builds long-term integrity and enterprise credibility, whereas deceit inevitably destroys client trust.",
            "Write a 1-sentence statement for the post-mortem acknowledging the internal configuration slip.",
            "chat",
            "Root Cause Summary: The latency was traced to an internal configuration mismatch during cache rebalancing; automated configuration linting has been deployed to prevent recurrence."
          ),
          makeSituational(
            "A client asks you for an estimated resolution time during an ongoing high-severity outage, but the engineers do not yet know how long it will take.",
            "You want to provide comforting communication without giving an inaccurate deadline that causes greater frustration if missed.",
            "Be transparent about current diagnostic progress, explain that the team is actively validating two specific hypotheses, and commit to providing a fresh status update within twenty minutes regardless of outcome.",
            [
              "Promise that the system will be fixed in five minutes just to get them off the phone.",
              "Tell them that you have no idea and that they should stop asking questions.",
              "Turn off the incident bridge and go to lunch.",
            ],
            2, // C
            "Committing to regular communication intervals rather than guessing speculative resolution times maintains stakeholder trust under crisis.",
            "Write a 2-sentence status update message to the client bridge.",
            "chat",
            "Our diagnostic team has isolated the latency to two replica nodes and is actively testing failover routing. We cannot provide a precise recovery estimate yet, but our next status update will be delivered in 20 minutes at 15:45 UTC."
          ),
          makeSituational(
            "After an incident is resolved, a client stakeholder sends an insulting personal email attacking your support team's competence.",
            "You must protect your team's dignity while maintaining strict corporate diplomacy in your written response.",
            "Respond calmly and professionally, focusing entirely on objective incident resolution, systemic preventive measures, and offering a formal executive debrief, without validating or mirroring the personal insults.",
            [
              "Reply with personal insults attacking the client's personal character.",
              "Forward the email to the client's mother.",
              "Send an internal blast encouraging everyone in your company to boycott the client.",
            ],
            3, // D
            "Unflinching professionalism in the face of hostile rhetoric preserves corporate reputation and de-escalates emotional friction.",
            "Write a 2-sentence diplomatic email response acknowledging the frustration while steering to facts.",
            "email",
            "We understand how stressful today's platform downtime was for your organization, and we deeply regret the impact. Our leadership has finalized our technical prevention roadmap and would welcome the opportunity to review it during your quarterly governance session next week."
          ),
          makeSituational(
            "An executive sponsor requests that you prioritize their personal pet feature ahead of critical system stability patches that prevent future outages.",
            "You need to balance relationship management with technical fiduciary duty to system uptime.",
            "Present a transparent risk assessment comparing the immediate security vulnerability with the feature timeline, and propose scheduling the stability patch in tonight's maintenance window followed immediately by the feature work.",
            [
              "Agree to skip all security patches and let the system crash again next week.",
              "Tell the executive that they are technically illiterate.",
              "Secretly install the security patch without telling anyone and lie about what was deployed.",
            ],
            0, // A
            "Risk-based trade-off presentation demonstrates strategic consulting discipline and helps leaders make responsible governance decisions.",
            "Write a brief email note summarizing the deployment sequence proposal.",
            "email",
            "To safeguard customer transaction integrity following today's incident, we recommend applying the critical cluster patch during tonight's 2 AM maintenance window. This ensures a stable foundation for deploying your reporting dashboard updates immediately on Thursday."
          ),
        ],
        reading: {
          id: "mock-03-read",
          type: "reading",
          passageTitle: "The Psychology of Enterprise Incident Communication",
          passageTopic: "Crisis Management & Service Delivery",
          wordCount: 380,
          passageContent: `In the modern digital economy, enterprise software availability is not merely an operational metric; it is an emotional covenant between vendor and consumer. When mission-critical cloud platforms experience unplanned downtime, customer anxiety escalates non-linearly with every minute of silence. Empirical research in customer psychology reveals that client dissatisfaction during outages is driven significantly more by informational ambiguity than by the actual physical duration of the technical disruption.\n\nWhen systems fail, an organization's instinct is frequently defensive—engineering leaders often hesitate to publish external incident advisories until the underlying root cause has been comprehensively diagnosed and verified. However, this diagnostic silence generates a vacuum that customers inevitably populate with worst-case conjectures, including fears of catastrophic data corruption or hostile cybersecurity breaches. Transparent organizations invert this paradigm: they recognize that during an active incident, predictable cadence of communication is far more vital than immediate technical precision.\n\nEffective incident communications adhere to three structural imperatives: acknowledgement, operational transparency, and cadence discipline. Rapid acknowledgement validates the client's lived operational frustration, signaling immediate organizational mobilization. Transparency provides factual updates on what components are impaired and what isolation steps are underway, deliberately avoiding evasive corporate platitudes. Most critically, cadence discipline requires publishing updates at predictable intervals—such as every twenty minutes—even if the only update is that diagnostic testing remains ongoing. By sustaining an unbroken rhythm of communication, enterprises maintain stakeholder trust even while navigating acute technical duress.`,
          questions: [
            makeMCQ(
              "According to paragraph 1, what drives customer dissatisfaction during service disruptions more than the disruption's physical duration?",
              "Informational ambiguity and silence from the service provider.",
              [
                "The financial cost of premium support tiers.",
                "The specific brand of computer servers used by the vendor.",
                "The geographical location of the vendor's headquarters.",
              ],
              1, // B
              "Paragraph 1 notes: 'client dissatisfaction during outages is driven significantly more by informational ambiguity than by the actual physical duration of the technical disruption.'",
              { id: "mock-03-read-q01", questionType: "factual" }
            ),
            makeMCQ(
              "What undesirable outcome happens when engineering leaders remain silent during an outage, according to paragraph 2?",
              "Customers populate the silence with worst-case conjectures like data loss or cyber breaches.",
              [
                "The database automatically heals itself without human intervention.",
                "Competitor companies purchase the vendor's corporate assets.",
                "Cloud server hosting expenses double every fifteen minutes.",
              ],
              2, // C
              "Paragraph 2 states that diagnostic silence creates a vacuum that 'customers inevitably populate with worst-case conjectures, including fears of catastrophic data corruption or hostile cybersecurity breaches.'",
              { id: "mock-03-read-q02", questionType: "factual" }
            ),
            makeMCQ(
              "What does the principle of 'cadence discipline' require an organization to do during an active incident?",
              "Publish updates at predictable, promised intervals even if diagnostics are still underway.",
              [
                "Send promotional marketing discounts to all affected customers.",
                "Wait until the entire problem is permanently resolved before speaking.",
                "Force technical engineers to answer customer support phone calls.",
              ],
              3, // D
              "Paragraph 3 defines cadence discipline as 'publishing updates at predictable intervals—such as every twenty minutes—even if the only update is that diagnostic testing remains ongoing.'",
              { id: "mock-03-read-q03", questionType: "inference" }
            ),
            makeMCQ(
              "As used in paragraph 1, what does the term 'COVENANT' most closely denote?",
              "A solemn, binding commitment or promise",
              ["A temporary financial contract", "A minor software update", "A random coincidence"],
              0, // A
              "'Covenant' denotes a formal, deeply binding pledge or solemn relationship between parties.",
              { id: "mock-03-read-q04", questionType: "vocabulary" }
            ),
          ],
        },
        listening: {
          id: "mock-03-list",
          type: "listening",
          title: "Incident Post-Mortem: Payment Gateway Latency",
          context: "Samantha (Director of Reliability) and Julian (Lead Site Reliability Engineer) review the timeline and corrective actions of today's payment gateway latency.",
          dialogue: [
            { speaker: "Samantha", text: "Julian, let's walk through the chronology for today's incident report. What was the exact timestamp of the initial latency alert?" },
            { speaker: "Julian", text: "The automated Prometheus alert fired at 14:02 UTC when transaction response times exceeded two thousand milliseconds on the EU payment gateway." },
            { speaker: "Samantha", text: "And what was the duration before the on-call engineer initiated traffic diversion to our secondary cluster?" },
            { speaker: "Julian", text: "Traffic rerouting began at 14:14 UTC and completed fully at 14:26 UTC, bringing error rates back down to zero point zero one percent." },
            { speaker: "Samantha", text: "That represents a twenty-four minute total mitigation window. What is the permanent corrective action to prevent memory leakage on the primary cluster?" },
            { speaker: "Julian", text: "We are deploying a connection-pooling patch tonight at 23:00 UTC and increasing container memory limits by fifty percent." },
            { speaker: "Samantha", text: "Excellent. Please document those metrics in the client RCA deck before our 4:00 PM stakeholder review." },
          ],
          fullScriptText: "Samantha: Julian, let's walk through the chronology for today's incident report. What was the exact timestamp of the initial latency alert?\nJulian: The automated Prometheus alert fired at 14:02 UTC when transaction response times exceeded two thousand milliseconds on the EU payment gateway.\nSamantha: And what was the duration before the on-call engineer initiated traffic diversion to our secondary cluster?\nJulian: Traffic rerouting began at 14:14 UTC and completed fully at 14:26 UTC, bringing error rates back down to zero point zero one percent.\nSamantha: That represents a twenty-four minute total mitigation window. What is the permanent corrective action to prevent memory leakage on the primary cluster?\nJulian: We are deploying a connection-pooling patch tonight at 23:00 UTC and increasing container memory limits by fifty percent.\nSamantha: Excellent. Please document those metrics in the client RCA deck before our 4:00 PM stakeholder review.",
          questions: [
            makeMCQ(
              "At what exact timestamp did the initial automated latency alert trigger?",
              "14:02 UTC",
              ["14:14 UTC", "14:26 UTC", "23:00 UTC"],
              2, // C
              "Julian confirms: 'The automated Prometheus alert fired at 14:02 UTC when transaction response times exceeded two thousand milliseconds.'",
              { id: "mock-03-list-q01" }
            ),
            makeMCQ(
              "What permanent corrective action is scheduled for deployment tonight at 23:00 UTC?",
              "Deploying a connection-pooling patch and increasing container memory limits by fifty percent.",
              [
                "Shutting down the EU payment gateway permanently.",
                "Purchasing new hardware servers from an external vendor.",
                "Migrating all database transactions to manual paper receipts.",
              ],
              3, // D
              "Julian explains: 'We are deploying a connection-pooling patch tonight at 23:00 UTC and increasing container memory limits by fifty percent.'",
              { id: "mock-03-list-q02" }
            ),
            makeMCQ(
              "What was the total elapsed duration of the service mitigation window according to Samantha?",
              "Twenty-four minutes",
              ["Ten minutes", "Forty-five minutes", "Two hours"],
              0, // A
              "Samantha observes: 'That represents a twenty-four minute total mitigation window.'",
              { id: "mock-03-list-q03" }
            ),
            makeMCQ(
              "By what time must Julian document the incident metrics in the client RCA deck?",
              "Before the 4:00 PM stakeholder review",
              ["By tomorrow morning at 9:00 AM", "Before midnight tonight", "By Friday noon"],
              1, // B
              "Samantha instructs: 'Please document those metrics in the client RCA deck before our 4:00 PM stakeholder review.'",
              { id: "mock-03-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-03-spk-01",
            type: "speaking",
            prompt: "Explain how you maintain composure, clarity, and accountability when communicating with an angry or distressed customer.",
            context: "Customer diplomacy under pressure. Describe your interpersonal techniques, active listening approach, and emotional resilience.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Emotional detachment and composure", "Empathetic active listening", "Focusing on solutions over excuses", "Rebuilding stakeholder trust"],
            modelTranscript: "Navigating high-stakes customer distress requires high emotional intelligence and disciplined composure. When a customer is upset, my initial priority is to listen actively without defensive interruption. I validate their frustration with genuine empathy, acknowledging the business impact their team experienced. Once the client feels heard, I transition the dialogue toward actionable solutions—explaining transparently what steps are currently underway and establishing concrete follow-up milestones. By maintaining a calm, reassuring tone and taking personal accountability for the resolution journey, I de-escalate tension and transform acute crisis into long-term partnership trust.",
          },
          {
            id: "mock-03-spk-02",
            type: "speaking",
            prompt: "Describe the importance of transparent post-incident blameless post-mortems in building a resilient engineering and customer culture.",
            context: "Organizational learning culture. Contrast blameless root-cause analysis with punitive fault-finding.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Blameless philosophy vs punitive culture", "Systemic safeguards and automated guardrails", "Client transparency as a differentiator", "Psychological safety for engineers"],
            modelTranscript: "In high-performing software organizations, incidents are viewed not as personal failures, but as invaluable learning opportunities. A blameless post-mortem culture recognizes that human error is inevitable, but catastrophic impact is caused by inadequate systemic safeguards. When teams investigate outages without fear of punishment, engineers share critical details openly, uncovering root causes that punitive cultures conceal. When this blameless transparency is extended to clients through detailed Root Cause Analysis reports, it demonstrates profound operational maturity, proving to customers that their vendor continually evolves to prevent future vulnerabilities.",
          },
        ],
      },
    },

    // ==========================================
    // MOCK TEST 04: Sprint Retrospective & QA
    // ==========================================
    {
      id: "mock-04",
      testNumber: 4,
      title: "Mock Test 04: Sprint Retrospective & Process Refinement",
      difficulty: "Foundation",
      durationMinutes: 60,
      description: "Constructive feedback phrasing, active listening during standups, and structured post-sprint documentation.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "The series of automated regression tests _____ completed in under six minutes on our new build server.",
            "was",
            ["were", "are", "have been"],
            1, // B
            "The subject is 'series' (singular count noun), which takes a singular verb ('was').",
            { id: "mock-04-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "easy" }
          ),
          makeMCQ(
            "If the team _____ the automated linters earlier, we would have caught the syntax warnings prior to review.",
            "had integrated",
            ["integrated", "has integrated", "would integrate"],
            2, // C
            "Third conditional conditional clause takes the past perfect ('had integrated') to express past counterfactuals.",
            { id: "mock-04-gram-02", type: "grammar", topic: "Tenses", difficulty: "easy" }
          ),
          makeMCQ(
            "The scrum master scheduled _____ retrospective session to review sprint velocity bottlenecks.",
            "a",
            ["an", "the", "no article needed"],
            3, // D
            "'Retrospective' begins with a consonant 'r' sound, requiring the article 'a'.",
            { id: "mock-04-gram-03", type: "grammar", topic: "Articles", difficulty: "easy" }
          ),
          makeMCQ(
            "The developers agreed _____ the proposed code review checklist during the sprint retro.",
            "to",
            ["with", "on", "for"],
            0, // A
            "'Agreed to' is used when consenting to an action or adopting a proposal ('agreed to the checklist').",
            { id: "mock-04-gram-04", type: "grammar", topic: "Prepositions", difficulty: "easy" }
          ),
          makeMCQ(
            "The team nominated David and _____ to present the sprint retrospective summary to leadership.",
            "her",
            ["she", "herself", "they"],
            1, // B
            "The verb 'nominated' takes direct objects in the objective case ('David and her').",
            { id: "mock-04-gram-05", type: "grammar", topic: "Pronouns", difficulty: "easy" }
          ),
          makeMCQ(
            "Our velocity increased by fifteen percent, _____ our defect leakage rate dropped significantly.",
            "and",
            ["but", "although", "unless"],
            2, // C
            "'And' joins two complementary positive outcomes from the sprint.",
            { id: "mock-04-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "easy" }
          ),
          makeMCQ(
            "Identify the sentence written in correct passive voice: 'The scrum team completed all planned user stories.'",
            "All planned user stories were completed by the scrum team.",
            [
              "All planned user stories have been completed by the scrum team.",
              "All planned user stories is completed by the scrum team.",
              "The scrum team was completed by all planned user stories.",
            ],
            3, // D
            "Past simple passive: 'All planned user stories were completed by the scrum team.'",
            { id: "mock-04-gram-07", type: "grammar", topic: "Active and Passive Voice", difficulty: "easy" }
          ),
          makeMCQ(
            "Change to indirect speech: The QA lead said, 'We found three minor edge-case defects yesterday.'",
            "The QA lead said that they had found three minor edge-case defects the previous day.",
            [
              "The QA lead said that we found three minor edge-case defects yesterday.",
              "The QA lead says that they found three minor edge-case defects yesterday.",
              "The QA lead told that they have found three minor edge-case defects the previous day.",
            ],
            0, // A
            "In reported speech, past simple ('found') shifts to past perfect ('had found'), and 'yesterday' shifts to 'the previous day'.",
            { id: "mock-04-gram-08", type: "grammar", topic: "Direct and Indirect Speech", difficulty: "easy" }
          ),
          makeMCQ(
            "Select the sentence that maintains impeccable parallel grammatical structure:",
            "During the retrospective, the squad discussed improving documentation, refining user stories, and reducing technical debt.",
            [
              "During the retrospective, the squad discussed to improve documentation, refining user stories, and technical debt reduction.",
              "During the retrospective, the squad discussed improving documentation, user stories refinement, and to reduce technical debt.",
              "During the retrospective, the squad discussed that documentation be improved, refining user stories, and technical debt.",
            ],
            1, // B
            "All three elements in the coordinated series use the parallel gerund form ('improving', 'refining', 'reducing').",
            { id: "mock-04-gram-09", type: "grammar", topic: "Sentence Correction", difficulty: "easy" }
          ),
          makeMCQ(
            "Choose the word closest in meaning to 'PRUDENT' as used in: 'It is prudent to schedule a buffer day before enterprise release cutover.'",
            "wise and judicious",
            ["reckless and hasty", "unnecessary and trivial", "accidental"],
            2, // C
            "'Prudent' means acting with or showing care, foresight, and sound judgment.",
            { id: "mock-04-gram-10", type: "grammar", topic: "Vocabulary in Context", difficulty: "easy" }
          ),
        ],
        writing: [
          {
            id: "mock-04-wri-01",
            type: "writing",
            prompt: "Draft a formal email to your Engineering Manager summarizing the key action items and process improvements agreed upon during Sprint 12 retrospective.",
            scenario: "Your team identified that unclear user story acceptance criteria led to sprint carryover. You are documenting the agreed improvements for management visibility.",
            expectedFormat: "professional_email",
            recommendedWordCount: { min: 110, max: 160 },
            evaluationCriteria: ["Professional opening context", "Bulleted retrospective action items", "Ownership and accountability assigned", "Polite closing"],
            modelResponse: "Dear Mr. Gallagher,\n\nI am writing to share the key takeaways and actionable process improvements from our Sprint 12 retrospective held this morning.\n\nFollowing a healthy, blameless team discussion regarding sprint carryover, our squad agreed to implement three core improvements effective immediately:\n\n1. Definition of Ready (DoR): Product owners will ensure all user stories include concrete Given-When-Then acceptance criteria prior to sprint backlog grooming.\n2. Story Point Sizing: Any story estimated above eight story points will be mandatorily decomposed into smaller micro-deliverables.\n3. Daily Blocker Triaging: The scrum master will track dependencies exceeding 24 hours directly on our shared Slack channel.\n\nWe anticipate these adjustments will enhance sprint predictability and reduce mid-sprint scope churn. Please let me know if you would like to discuss these items during our weekly 1-on-1.\n\nBest regards,\nClara Hughes\nAgile Lead",
            keyPoints: ["context of retrospective", "three concrete action items", "expected business impact", "courteous closing"],
          },
          {
            id: "mock-04-wri-02",
            type: "writing",
            prompt: "Draft an internal team memorandum establishing a new 'Definition of Ready' checklist for all upcoming Jira sprint user stories.",
            scenario: "To prevent developers from picking up vague tickets, the team agreed to formalize the criteria required before a story can be pulled into an active sprint.",
            expectedFormat: "formal_memo",
            recommendedWordCount: { min: 100, max: 150 },
            evaluationCriteria: ["Standard corporate memorandum header", "Clear checklist requirements", "Effective start date", "Team enablement note"],
            modelResponse: "MEMORANDUM\n\nTO: Product & Engineering Teams\nFROM: Agile Excellence Committee\nDATE: November 4, 2026\nSUBJECT: New 'Definition of Ready' (DoR) Standards for Sprint Planning\n\nEffective next Monday, November 10th, all user stories targeted for sprint commitment must satisfy our updated Definition of Ready:\n\n- Business Value: Clear 'As a user, I want... So that...' narrative.\n- Acceptance Criteria: Minimum of two explicit testable scenarios.\n- Technical Dependencies: API schemas and design assets attached.\n- Sizing: Story points assigned through team consensus.\n\nTickets lacking these requirements will remain in the backlog for refinement. A 20-minute Q&A walkthrough will occur this Thursday at 11:00 AM.\n\nThank you for championing quality from day one.",
            keyPoints: ["effective start date", "four specific criteria", "handling of incomplete tickets", "enablement session timing"],
          },
        ],
        situational: [
          makeSituational(
            "In the retrospective, a senior engineer dismisses retrospectives as 'a useless waste of coding time' in front of junior team members.",
            "You need to defend the retrospective's value and maintain team psychological safety without publicly humiliating the senior engineer.",
            "Acknowledge their desire to maximize coding productivity, highlight concrete process wins from previous retrospectives, and invite them to help streamline the agenda to make it more action-oriented.",
            [
              "Tell the senior engineer that they are toxic and demand their immediate termination.",
              "Agree with the senior engineer and cancel all future retrospectives for the whole department.",
              "Ignore the comment completely and let cynicism take over the team culture.",
            ],
            3, // D
            "Reframing skepticism into constructive process ownership protects team culture while honoring productivity concerns.",
            "Write a calm 1-sentence response addressing the concern in the meeting.",
            "chat",
            "I completely respect protecting our coding focus; let's ensure today's agenda stays tightly focused on concrete roadblocks so our time directly translates to smoother future sprints."
          ),
          makeSituational(
            "A team member points out a major recurring defect in code written by the lead architect, but is nervous about speaking up.",
            "As the facilitator, you want to ensure the technical truth is examined while preserving mutual respect.",
            "Create a welcoming bridge: 'Thank you for highlighting this pattern, Jordan. Let's examine the architectural context together blamelessly—what tooling safeguard can we build to support our architects here?'",
            [
              "Interrupt the team member and tell them it is disrespectful to criticize an architect.",
              "Force the architect to apologize publicly for writing bad code.",
              "Quickly change the subject to avoid any awkwardness.",
            ],
            0, // A
            "Blameless facilitation depersonalizes code critique and empowers team members to speak truth to architecture safely.",
            "Write a 1-sentence note supporting open technical inquiry.",
            "chat",
            "Thank you for bringing that data point forward, Jordan; examining recurring patterns objectively is exactly how we harden our codebase as a squad."
          ),
          makeSituational(
            "The team identifies six major improvements during the retrospective, but there is only capacity to implement one or two during the next sprint.",
            "You need to prevent the team from overcommitting and failing to deliver on their retrospective action items.",
            "Facilitate a dot-voting prioritization exercise to select the top two highest-impact action items, assign explicit owners, and archive the remainder in the backlog for future sprints.",
            [
              "Force the team to work 20 hours of unpaid overtime to implement all six improvements immediately.",
              "Abandon all six items because the team cannot do everything.",
              "Pick your personal favorite improvement and tell the team their votes do not matter.",
            ],
            1, // B
            "Disciplined prioritization of retrospective actions guarantees steady, measurable incremental improvement without team burnout.",
            "Write a 1-sentence Slack update announcing the prioritized retrospective action items.",
            "chat",
            "Sprint Retro Update: Our squad has voted to focus on automated PR linting (Sam) and Definition of Ready checklists (Maya) for Sprint 13."
          ),
          makeSituational(
            "A stakeholder outside your squad accuses your team of delivering poor quality code during the last release.",
            "You need to respond with facts and professional restraint rather than defensive hostility.",
            "Acknowledge the stakeholder's frustration with empathy, share the factual test metrics and bug burn-down telemetry, and outline the specific regression test guardrails being added in the current sprint.",
            [
              "Send an angry reply accusing the stakeholder of being incompetent.",
              "Hide all test reports and deny that any bugs ever existed.",
              "Promise that your team will never write another bug for the rest of eternity.",
            ],
            2, // C
            "Data-driven transparency backed by proactive quality enhancements disarms hostility and restores stakeholder trust.",
            "Write a diplomatic 2-sentence response email to the stakeholder.",
            "email",
            "We understand how critical release stability is for your business operations. Our squad has reviewed the defect telemetry from last week's release and has implemented automated regression suites to guarantee these validation errors are caught prior to staging."
          ),
          makeSituational(
            "Two developers disagree strongly on whether to adopt Tabs vs Spaces in the codebase, stalling the retrospective for fifteen minutes.",
            "You need to end trivial bikeshedding so the meeting can address critical delivery bottlenecks.",
            "Intervene decisively: 'We have spent sufficient time on formatting preferences; let's adopt the automated Prettier community default configuration, commit it to the repository, and move to our deployment blockers.'",
            [
              "Let them debate for three hours until one of them cries.",
              "Cancel the project because formatting is impossible to agree on.",
              "Flip a coin and ban whoever loses from speaking for a week.",
            ],
            3, // D
            "Adopting automated industry standards terminates bikeshedding and refocuses high-value engineering attention on business logic.",
            "Write a 1-sentence closing decision on the formatting debate.",
            "chat",
            "Decision: We will adopt standard Prettier formatting across the repository with pre-commit hooks, freeing our team to focus on core business logic."
          ),
          makeSituational(
            "A junior QA engineer expresses that they feel developer peers ignore bug tickets until the very last day of the sprint.",
            "You want to address this operational bottleneck and foster cross-functional respect.",
            "Validate their concern openly, guide the team to adopt a 'WIP (Work In Progress) limit' on development tickets, and establish an agreement that bug fixes take priority over starting new feature tickets.",
            [
              "Tell the QA engineer that developers are more important and should not be disturbed.",
              "Instruct the QA engineer to stop filing bugs so everyone is happy.",
              "Tell the developers that they are all in trouble and cancel their bonuses.",
            ],
            0, // A
            "Establishing work-in-progress limits and prioritizing defect remediation balances velocity with quality across functional roles.",
            "Write a supportive 1-sentence message in the retrospective action log.",
            "chat",
            "Action Item: Effective Sprint 13, our team will enforce a WIP limit of 2 in-progress tickets per developer, ensuring open QA defect tickets receive immediate attention."
          ),
        ],
        reading: {
          id: "mock-04-read",
          type: "reading",
          passageTitle: "The Continuous Feedback Loop: Evolution of Retrospectives",
          passageTopic: "Process Engineering & Continuous Improvement",
          wordCount: 370,
          passageContent: `In the philosophy of agile software engineering, the retrospective represents the foundational feedback mechanism that differentiates evolutionary engineering cultures from stagnant industrial hierarchies. Derived from the principle of empirical process control, retrospectives provide distributed teams with a dedicated, sacred interval to inspect their collective operational reality and adapt their workflows. Without deliberate retrospective cycles, organizations fall prey to systemic entropy—repeating identical process errors sprint after sprint while wondering why release velocity deteriorates.\n\nHowever, the efficacy of a retrospective is contingent upon two non-negotiable psychological prerequisites: psychological safety and actionable agency. In an environment dominated by fear, retribution, or managerial surveillance, retrospectives degenerate into performative rituals where participants voice trivial observations while concealing consequential architectural dysfunctions. Conversely, when leadership upholds the fundamental attribution axiom—the assumption that every team member executed the best possible decision given the knowledge, tools, and constraints available at the time—candor flourishes, allowing root causes to surface without defensive posturing.\n\nFurthermore, psychological safety alone is insufficient without actionable agency. A team that repeatedly diagnoses bottlenecks but possesses no organizational authority to modify its tooling, pipeline scripts, or scheduling constraints rapidly experiences learned helplessness. When retrospective action items vanish into administrative voids, team cynicism metastasizes. High-performing engineering organizations address this by treating retrospective action items with identical architectural rigor as customer user stories: assigning explicit owners, incorporating them into sprint backlog commitments, and evaluating their efficacy during subsequent review cycles.`,
          questions: [
            makeMCQ(
              "According to paragraph 1, what operational risk threatens organizations that neglect retrospective cycles?",
              "Systemic entropy, leading to repeated process errors and deteriorating release velocity.",
              [
                "Immediate bankruptcy from cloud server overspending.",
                "Loss of intellectual property rights to competitor firms.",
                "A complete shutdown of the global internet infrastructure.",
              ],
              1, // B
              "Paragraph 1 warns: 'Without deliberate retrospective cycles, organizations fall prey to systemic entropy—repeating identical process errors sprint after sprint while wondering why release velocity deteriorates.'",
              { id: "mock-04-read-q01", questionType: "factual" }
            ),
            makeMCQ(
              "What does the fundamental attribution axiom assume about team members in a retrospective?",
              "Every team member made the best decision possible given the knowledge and constraints available.",
              [
                "Developers are inherently lazier than quality assurance analysts.",
                "Senior architects never make mistakes in software design.",
                "Management is always to blame for every missed deadline.",
              ],
              2, // C
              "Paragraph 2 describes this axiom as 'the assumption that every team member executed the best possible decision given the knowledge, tools, and constraints available at the time.'",
              { id: "mock-04-read-q02", questionType: "factual" }
            ),
            makeMCQ(
              "What happens when teams diagnose bottlenecks but lack the agency to implement changes, according to paragraph 3?",
              "Learned helplessness develops and team cynicism metastasizes.",
              [
                "The team immediately writes better unit tests.",
                "Productivity doubles due to increased corporate discipline.",
                "All software defects disappear within forty-eight hours.",
              ],
              3, // D
              "Paragraph 3 notes: 'A team that repeatedly diagnoses bottlenecks but possesses no organizational authority... rapidly experiences learned helplessness. When retrospective action items vanish... cynicism metastasizes.'",
              { id: "mock-04-read-q03", questionType: "inference" }
            ),
            makeMCQ(
              "As used in paragraph 1, what does the term 'ENTROPY' most closely describe?",
              "A gradual decline into disorder, chaos, or degradation",
              ["A rapid acceleration of profit margins", "A formal celebration of victory", "A computer database error code"],
              0, // A
              "'Entropy' in organizational context denotes the natural tendency of a system to degenerate into disorder and inefficiency without active maintenance.",
              { id: "mock-04-read-q04", questionType: "vocabulary" }
            ),
          ],
        },
        listening: {
          id: "mock-04-list",
          type: "listening",
          title: "Sprint 12 Retrospective Action Planning",
          context: "Dave (Agile Coach), Maya (QA Lead), and Leo (Frontend Developer) finalize their team commitments following the Sprint 12 retro.",
          dialogue: [
            { speaker: "Dave", text: "Team, we have ten minutes remaining in our retrospective. We had twenty cards on our board today, but we agreed to focus strictly on our top two process blockers." },
            { speaker: "Maya", text: "Right, Dave. My vote is squarely on automating our end-to-end Cypress regression tests. Running them manually took twelve hours this sprint." },
            { speaker: "Leo", text: "I agree with Maya. If the frontend squad writes automated Cypress specs for the checkout and profile flows, QA can run them on every pull request in ten minutes." },
            { speaker: "Dave", text: "That is a huge win. Leo, will you own creating the Cypress setup PR by this Thursday?" },
            { speaker: "Leo", text: "Yes, I'll carve out four hours on Wednesday to establish the base configuration and share a demo with Maya." },
            { speaker: "Maya", text: "Perfect. Our second action item was clarifying acceptance criteria. I'll attend Wednesday's backlog grooming to assist with Given-When-Then criteria." },
            { speaker: "Dave", text: "Fantastic teamwork. I will document both commitments in our confluence retro log right now." },
          ],
          fullScriptText: "Dave: Team, we have ten minutes remaining in our retrospective. We had twenty cards on our board today, but we agreed to focus strictly on our top two process blockers.\nMaya: Right, Dave. My vote is squarely on automating our end-to-end Cypress regression tests. Running them manually took twelve hours this sprint.\nLeo: I agree with Maya. If the frontend squad writes automated Cypress specs for the checkout and profile flows, QA can run them on every pull request in ten minutes.\nDave: That is a huge win. Leo, will you own creating the Cypress setup PR by this Thursday?\nLeo: Yes, I'll carve out four hours on Wednesday to establish the base configuration and share a demo with Maya.\nMaya: Perfect. Our second action item was clarifying acceptance criteria. I'll attend Wednesday's backlog grooming to assist with Given-When-Then criteria.\nDave: Fantastic teamwork. I will document both commitments in our confluence retro log right now.",
          questions: [
            makeMCQ(
              "How much time did manual regression testing take for QA during Sprint 12?",
              "Twelve hours",
              ["Two hours", "Twenty-four hours", "Six days"],
              2, // C
              "Maya points out: 'Running them manually took twelve hours this sprint.'",
              { id: "mock-04-list-q01" }
            ),
            makeMCQ(
              "When does Leo commit to having the Cypress setup pull request ready for review?",
              "By this Thursday",
              ["By next month", "By midnight tonight", "By Friday at 5:00 PM"],
              3, // D
              "Dave asks: 'Leo, will you own creating the Cypress setup PR by this Thursday?' and Leo agrees.",
              { id: "mock-04-list-q02" }
            ),
            makeMCQ(
              "What is the second prioritized action item agreed upon by the squad?",
              "Clarifying acceptance criteria using Given-When-Then format during backlog grooming.",
              [
                "Canceling all daily standups for the rest of the quarter.",
                "Purchasing expensive new computer hardware for developers.",
                "Replacing all written unit tests with manual user surveys.",
              ],
              0, // A
              "Maya states: 'Our second action item was clarifying acceptance criteria. I'll attend Wednesday's backlog grooming to assist with Given-When-Then criteria.'",
              { id: "mock-04-list-q03" }
            ),
            makeMCQ(
              "How many total cards were initially submitted on the retrospective board before prioritization?",
              "Twenty cards",
              ["Five cards", "Fifty cards", "Two cards"],
              1, // B
              "Dave opens noting: 'We had twenty cards on our board today, but we agreed to focus strictly on our top two process blockers.'",
              { id: "mock-04-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-04-spk-01",
            type: "speaking",
            prompt: "Explain why focusing on continuous small incremental improvements is more effective for an engineering team than attempting massive overnight process overhauls.",
            context: "Agile mindset and continuous improvement. Reflect on incremental velocity, team morale, and sustainable engineering change.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Concept of Kaizen (continuous incremental gains)", "Risk of massive disruptive overhauls", "Team momentum and habit formation", "Real-world engineering application"],
            modelTranscript: "In software engineering, continuous small improvements—often referred to as Kaizen—yield far more durable organizational success than massive overnight transformations. When leadership attempts radical overhauls, it introduces profound cognitive fatigue, disrupts daily delivery momentum, and frequently triggers intense employee resistance. Conversely, committing to small, incremental refinements—such as automating one tedious test suite or clarifying acceptance criteria on tickets—creates manageable, low-risk progress that teams can easily absorb. Over multiple sprints, these compounding micro-improvements dramatically elevate code quality, boost team morale, and establish a resilient culture of continuous excellence.",
          },
          {
            id: "mock-04-spk-02",
            type: "speaking",
            prompt: "Describe how you contribute to building psychological safety within a multidisciplinary project team where individuals possess varying levels of experience.",
            context: "Inclusive leadership and emotional intelligence. Discuss how to empower junior colleagues and encourage transparent problem-sharing.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Definition of psychological safety", "Encouraging junior colleagues to speak up", "Modeling vulnerability and acknowledging mistakes", "Cultivating blameless curiosity"],
            modelTranscript: "Psychological safety is the bedrock of high-performing engineering teams; without it, individuals conceal critical mistakes until they erupt into production crises. To cultivate this safety, I lead by example through intellectual humility. I openly acknowledge my own technical uncertainties and admit mistakes when they happen, proving to junior peers that fallibility is natural. During sprint ceremonies, I actively invite quieter colleagues into the discussion, validating their insights and thanking them for challenging established assumptions. When bugs arise, I steer the conversation toward systemic guardrails rather than personal fault. By treating every team member with respect and curiosity, we create an environment where innovation thrives.",
          },
        ],
      },
    },

    // ==========================================
    // MOCK TEST 05: Workplace Policy & Remote Ops
    // ==========================================
    {
      id: "mock-05",
      testNumber: 5,
      title: "Mock Test 05: Workplace Policy & Remote Operations",
      difficulty: "Foundation",
      durationMinutes: 60,
      description: "Hybrid work norms, asynchronous etiquette, data security hygiene, and clear workplace inquiries.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "The corporate information security policy _____ all employees to utilize multi-factor authentication on remote workstations.",
            "requires",
            ["require", "are requiring", "have required"],
            1, // B
            "The singular subject 'policy' requires the third-person singular present verb 'requires'.",
            { id: "mock-05-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "easy" }
          ),
          makeMCQ(
            "By the end of the current fiscal quarter, our infrastructure team _____ all legacy VPN gateways to the new zero-trust architecture.",
            "will have migrated",
            ["migrated", "is migrating", "would migrate"],
            2, // C
            "Future perfect ('will have migrated') expresses an action that will be completed by a future milestone ('By the end of...').",
            { id: "mock-05-gram-02", type: "grammar", topic: "Tenses", difficulty: "easy" }
          ),
          makeMCQ(
            "Every remote employee received _____ encrypted laptop configured with enterprise endpoint protection.",
            "an",
            ["a", "the", "no article needed"],
            3, // D
            "'Encrypted' begins with a vowel sound (/ɪnˈkrɪp.tɪd/), requiring the indefinite article 'an'.",
            { id: "mock-05-gram-03", type: "grammar", topic: "Articles", difficulty: "easy" }
          ),
          makeMCQ(
            "Employees are strictly prohibited _____ storing unencrypted client credentials on local machine drives.",
            "from",
            ["to", "with", "against"],
            0, // A
            "'Prohibited' conventionally takes the preposition 'from' followed by a gerund ('prohibited from storing').",
            { id: "mock-05-gram-04", type: "grammar", topic: "Prepositions", difficulty: "easy" }
          ),
          makeMCQ(
            "Please direct any workplace ergonomic equipment inquiries to Sarah or _____ before Friday afternoon.",
            "me",
            ["I", "myself", "mine"],
            1, // B
            "The preposition 'to' governs objects in the objective case ('to Sarah or me').",
            { id: "mock-05-gram-05", type: "grammar", topic: "Pronouns", difficulty: "easy" }
          ),
          makeMCQ(
            "Remote work offers substantial scheduling flexibility, _____ it requires rigorous individual time management and communication discipline.",
            "yet",
            ["because", "so", "unless"],
            2, // C
            "'Yet' acts as an adversative conjunction highlighting the trade-off between flexibility and discipline.",
            { id: "mock-05-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "easy" }
          ),
          makeMCQ(
            "Identify the correct passive voice sentence: 'The IT compliance department audited all remote access logs.'",
            "All remote access logs were audited by the IT compliance department.",
            [
              "All remote access logs have been audited by the IT compliance department.",
              "All remote access logs was audited by the IT compliance department.",
              "The IT compliance department was audited by all remote access logs.",
            ],
            3, // D
            "Past simple passive: 'All remote access logs were audited by the IT compliance department.'",
            { id: "mock-05-gram-07", type: "grammar", topic: "Active and Passive Voice", difficulty: "easy" }
          ),
          makeMCQ(
            "Change to indirect speech: The IT administrator said, 'Never share your hardware security tokens with anyone.'",
            "The IT administrator instructed employees never to share their hardware security tokens with anyone.",
            [
              "The IT administrator said that never share your hardware security tokens with anyone.",
              "The IT administrator told that employees will never share hardware security tokens.",
              "The IT administrator advised that you cannot share your hardware security tokens.",
            ],
            0, // A
            "Imperative prohibitions shift cleanly to infinitive reporting verbs ('instructed employees never to share...').",
            { id: "mock-05-gram-08", type: "grammar", topic: "Direct and Indirect Speech", difficulty: "easy" }
          ),
          makeMCQ(
            "Select the grammatically correct sentence:",
            "Neither the regional directors nor the human resources lead was aware of the remote stipend policy change.",
            [
              "Neither the regional directors nor the human resources lead were aware of the remote stipend policy change.",
              "Neither the regional directors or the human resources lead was aware of the remote stipend policy change.",
              "Neither the regional directors nor the human resources lead have been aware of the remote stipend policy change.",
            ],
            1, // B
            "When subjects are connected by 'neither... nor', the verb agrees with the singular subject closer to it ('lead' -> 'was').",
            { id: "mock-05-gram-09", type: "grammar", topic: "Sentence Correction", difficulty: "easy" }
          ),
          makeMCQ(
            "Choose the word closest in meaning to 'STRINGENT' as used in: 'The financial client enforces stringent data retention requirements.'",
            "strict and rigorous",
            ["flexible and relaxed", "temporary and informal", "optional"],
            2, // C
            "'Stringent' denotes strict, precise, and rigorously enforced standards or regulations.",
            { id: "mock-05-gram-10", type: "grammar", topic: "Vocabulary in Context", difficulty: "easy" }
          ),
        ],
        writing: [
          {
            id: "mock-05-wri-01",
            type: "writing",
            prompt: "Draft a formal email to your People Operations (HR) business partner requesting permission to work remotely from another state for three weeks due to family commitments.",
            scenario: "You are a full-time employee seeking temporary remote approval. You need to outline your work schedule, confirm that client deliverables will not be impacted, and verify data security compliance.",
            expectedFormat: "professional_email",
            recommendedWordCount: { min: 110, max: 160 },
            evaluationCriteria: ["Professional corporate salutation and tone", "Clear travel dates and reason", "Commitment to uninterrupted delivery and client hours", "Information security and network assurance"],
            modelResponse: "Dear Ms. Jenkins,\n\nI hope your week is going well. I am writing to formally request approval for a temporary three-week remote work arrangement from Austin, Texas, between December 1st and December 19th, due to personal family commitments.\n\nDuring this interval, I will maintain my standard working hours (9:00 AM – 6:00 PM EST) and remain fully accessible via Slack and Microsoft Teams. I have reviewed our upcoming sprint deliverables with my engineering lead, and all milestones remain on track with zero impact on our client commitments.\n\nFurthermore, I will connect strictly through our encrypted corporate VPN and adhere to all corporate data security protocols from a private, secure home workspace. Please let me know if you require any additional documentation to process this request.\n\nThank you for your consideration and support.\n\nWarm regards,\nDaniel Evans\nSoftware Engineer",
            keyPoints: ["specific dates and location", "uninterrupted core hours", "client delivery assurance", "security and VPN compliance"],
          },
          {
            id: "mock-05-wri-02",
            type: "writing",
            prompt: "Draft an internal corporate policy memo announcing the rollout of mandatory annual cybersecurity awareness training for all hybrid and remote staff.",
            scenario: "All employees must complete a 45-minute interactive security module by the end of the month to maintain client compliance attestations.",
            expectedFormat: "formal_memo",
            recommendedWordCount: { min: 100, max: 150 },
            evaluationCriteria: ["Standard memorandum format", "Clear completion deadline", "Business and client compliance rationale", "Support and portal login instructions"],
            modelResponse: "MEMORANDUM\n\nTO: All Global & Remote Personnel\nFROM: Chief Information Security Office\nDATE: November 4, 2026\nSUBJECT: Mandatory Annual Cybersecurity Training - 2026 Completion Deadline\n\nTo uphold our international ISO 27001 compliance standards and protect client data integrity, all full-time and contract employees must complete the 2026 Cybersecurity Training module.\n\n1. Deadline: Friday, November 28th, at 5:00 PM EST.\n2. Duration: Approximately 45 minutes, self-paced.\n3. Access Portal: Navigate to our internal learning portal at learn.commprep.internal under 'Mandatory Compliance'.\n\nCompletion is tracked automatically. Employees failing to complete the module by the deadline will experience temporary revocation of external VPN access.\n\nThank you for safeguarding our enterprise and client data.",
            keyPoints: ["completion deadline", "duration and self-paced nature", "access link/instructions", "compliance consequence"],
          },
        ],
        situational: [
          makeSituational(
            "You notice that a colleague is working from a public coffee shop with a laptop screen clearly visible to patrons while reviewing confidential client financial statements.",
            "You want to protect corporate data privacy without alienating your teammate.",
            "Send them a private, friendly message pointing out the privacy risk: 'Hey Alex, just a heads-up that public coffee shops pose visual snooping risks; please consider attaching a privacy screen filter or reviewing client financials from a private space.'",
            [
              "Take a photo of them and post it on public LinkedIn to shame them.",
              "Ignore it completely because cybersecurity is only IT's problem.",
              "Walk up to their laptop and pour coffee on the keyboard to stop the leak.",
            ],
            3, // D
            "Friendly, private intervention protects client data confidentiality while preserving supportive peer relationships.",
            "Write a private 1-sentence Slack message to your colleague.",
            "chat",
            "Hey Alex, just a quick reminder that client financial sheets require privacy filters in public spaces to stay compliant with our security policy."
          ),
          makeSituational(
            "Your home internet connection fails completely during an active enterprise client presentation where you are the primary speaker.",
            "You need to recover rapidly without leaving the client waiting in confusion.",
            "Immediately enable your mobile cellular hotspot to reconnect to the meeting audio, send a quick text to your co-presenter to advance the slide deck, and continue your presentation calmly.",
            [
              "Give up and go to sleep for the rest of the day.",
              "Send an angry email to your internet service provider blaming them for destroying your career.",
              "Pretend you were kidnapped by hackers.",
            ],
            0, // A
            "Quick contingency mobilization (cellular hotspot + co-presenter backup) demonstrates professional poise and resilience under pressure.",
            "Write a quick text to your co-presenter requesting backup.",
            "chat",
            "Priya, my home fiber just dropped; I'm dialing in via mobile hotspot right now, please take over slide 5 while I reconnect."
          ),
          makeSituational(
            "A teammate regularly messages you on Slack at 11:30 PM with urgent-sounding requests for non-critical routine tasks.",
            "You want to establish healthy work-life boundaries without appearing uncooperative.",
            "Maintain healthy boundaries by setting Slack notifications to 'Do Not Disturb' during off-hours, and respond during morning business hours: 'Hi Jordan, reviewing this now—for future reference, I am offline after 6 PM, but will gladly tackle urgent morning priorities.'",
            [
              "Wake up at 2:00 AM and do the work while crying in frustration.",
              "Send a furious message at midnight insulting their work habits.",
              "Block your teammate permanently on all company channels.",
            ],
            1, // B
            "Clear, consistent communication of operational boundaries preserves well-being while modeling mature professional etiquette.",
            "Write a polite morning response to an off-hours message.",
            "chat",
            "Good morning Jordan, reviewing this ticket now; I keep notifications silenced after 6 PM, but I will make this my first priority today."
          ),
          makeSituational(
            "An employee receives a suspicious email from someone claiming to be the CEO asking for urgent wire transfers of client gift cards.",
            "You must handle this phishing simulation or actual threat in accordance with corporate security hygiene.",
            "Do not click any links or reply; immediately report the email using the corporate 'Report Phishing' tool and notify the security operations center.",
            [
              "Immediately purchase $5,000 in gift cards with your own credit card and email the codes.",
              "Reply to the scammer asking if they want to be friends.",
              "Forward the email to all employees in the company asking what to do.",
            ],
            2, // C
            "Immediate reporting of phishing threats to the security operations center protects the entire enterprise attack surface.",
            "Write a 1-sentence alert message to your team lead.",
            "chat",
            "Heads-up team: I just received a CEO impersonation phishing email regarding gift cards and have reported it directly to our InfoSec queue."
          ),
          makeSituational(
            "A remote colleague appears noticeably disengaged, missing standups, and missing deadlines over two consecutive weeks.",
            "You want to check in on their well-being while supporting team delivery accountability.",
            "Reach out in a private, compassionate 1-on-1 message: 'Hey Chris, I noticed you have seemed under pressure lately; I wanted to check in and see how you are doing, and if there is anything I can do to help with sprint tasks.'",
            [
              "Publicly mock them in the team channel for being unproductive.",
              "Immediately file a disciplinary complaint with Human Resources without speaking to them.",
              "Ignore them and do all their work yourself silently.",
            ],
            3, // D
            "Empathetic, private peer inquiry identifies personal or technical blockers early and builds deep team trust.",
            "Write a supportive 1-sentence check-in message to your colleague.",
            "chat",
            "Hey Chris, just wanted to check in and see how you are doing this week—let me know if I can help unblock any of your sprint tickets today."
          ),
          makeSituational(
            "Your company introduces a new camera-on policy for all internal meetings, but a junior colleague expresses extreme anxiety about turning their camera on due to personal living conditions.",
            "As a team lead, you want to uphold company expectations while providing supportive, inclusive accommodation.",
            "Listen with empathy, explain that professional virtual backgrounds or avatar mode are acceptable options, and reassure them that their comfort and contribution matter most.",
            [
              "Tell the colleague that they must turn their camera on or be terminated immediately.",
              "Force them to turn their camera on and show their entire room to the team.",
              "Tell the colleague to stop working at the company if they have anxiety.",
            ],
            0, // A
            "Compassionate accommodation combined with practical technical solutions (virtual backgrounds) balances policy with inclusion.",
            "Write a 2-sentence supportive private note to your colleague.",
            "chat",
            "We want everyone to feel comfortable participating; please feel free to use our standardized corporate blurred or virtual background anytime, or leave camera off when you need to focus on audio."
          ),
        ],
        reading: {
          id: "mock-05-read",
          type: "reading",
          passageTitle: "The Borderless Enterprise: Information Security in Hybrid Operations",
          passageTopic: "Information Security & Hybrid Work",
          wordCount: 385,
          passageContent: `The accelerated dissolution of the traditional corporate perimeter has permanently redefined the discipline of enterprise cybersecurity. For decades, organizations operated under an architectural paradigm analogous to a medieval castle: internal networks were deemed inherently trustworthy, while external traffic was subjected to rigorous inspection at the gateway firewall. However, the dispersion of the global knowledge workforce across decentralized home networks, cellular hotspots, and co-working spaces has rendered the castle-and-moat security model obsolete.\n\nIn its place, modern enterprises are standardizing upon Zero Trust Architecture (ZTA). Governed by the maxim 'never trust, always verify,' Zero Trust mandates that every access request—regardless of whether it originates from a senior executive's home workstation or an internal server rack—must be authenticated, authorized, and continuously encrypted before access is granted. This architectural transition shifts security enforcement from static network boundaries to identity and endpoint telemetry. Under Zero Trust, contextual variables such as device encryption health, geographic anomaly detection, and biometric multi-factor authentication become the primary arbiters of data access.\n\nNevertheless, cybersecurity resilience cannot be achieved solely through computational firewalls and cryptographic protocols. Sociotechnical research demonstrates that human behavior remains the primary attack vector exploited by adversarial actors. Sophisticated spear-phishing campaigns, credential stuffing attacks, and social engineering ploys target human cognitive heuristics rather than software vulnerabilities. Consequently, forward-looking enterprises cultivate 'security culture' as an active operational discipline. Rather than imposing draconian, friction-heavy restrictions that incentivize employees to circumvent safeguards, resilient organizations design intuitive security tools, conduct blameless phishing simulations, and empower staff to view themselves as active defenders of enterprise and client data integrity.`,
          questions: [
            makeMCQ(
              "According to paragraph 1, what made the traditional 'castle-and-moat' cybersecurity model obsolete?",
              "The dispersion of the knowledge workforce across decentralized remote networks and home environments.",
              [
                "The complete replacement of all human software engineers by robotic automation.",
                "The invention of the mouse and graphical user interfaces.",
                "A dramatic decrease in the price of corporate laptop computers.",
              ],
              1, // B
              "Paragraph 1 notes that workforce dispersion across decentralized networks 'has rendered the castle-and-moat security model obsolete.'",
              { id: "mock-05-read-q01", questionType: "factual" }
            ),
            makeMCQ(
              "What is the foundational guiding maxim of Zero Trust Architecture according to paragraph 2?",
              "'Never trust, always verify.'",
              ["'Trust everyone inside the building unconditionally.'", "'Security is purely an administrative burden.'", "'Passwords should never be changed.'"],
              2, // C
              "Paragraph 2 states: 'Governed by the maxim 'never trust, always verify,' Zero Trust mandates that every access request... must be authenticated.'",
              { id: "mock-05-read-q02", questionType: "factual" }
            ),
            makeMCQ(
              "What does sociotechnical research reveal about adversarial cyber attack vectors in paragraph 3?",
              "Human behavioral heuristics remain the primary target exploited by phishing and social engineering.",
              [
                "Adversaries only attack physical electrical wires in corporate data centers.",
                "Software algorithms can never be breached by malicious actors.",
                "Zero Trust completely eliminates the need for human security training.",
              ],
              3, // D
              "Paragraph 3 emphasizes that 'human behavior remains the primary attack vector... sophisticated spear-phishing campaigns... target human cognitive heuristics rather than software vulnerabilities.'",
              { id: "mock-05-read-q03", questionType: "inference" }
            ),
            makeMCQ(
              "As used in paragraph 2, what does the term 'ARBITER' most closely mean?",
              "An authoritative deciding factor or judge",
              ["A temporary hardware cable", "A minor cosmetic bug", "An optional computer accessory"],
              0, // A
              "'Arbiter' denotes an entity, factor, or judge with the ultimate power to decide or determine an outcome.",
              { id: "mock-05-read-q04", questionType: "vocabulary" }
            ),
          ],
        },
        listening: {
          id: "mock-05-list",
          type: "listening",
          title: "Hybrid Work Security Briefing",
          context: "Karen (Chief Information Security Officer) and Tyler (DevOps Infrastructure Engineer) discuss employee compliance with remote zero-trust guidelines.",
          dialogue: [
            { speaker: "Karen", text: "Tyler, how is our migration to the new zero-trust identity provider progressing across our remote engineering hubs?" },
            { speaker: "Tyler", text: "We have successfully enrolled eighty-eight percent of our remote employees, Karen. The remaining twelve percent are scheduled for migration by this Thursday." },
            { speaker: "Karen", text: "What seems to be the primary friction point for that remaining twelve percent?" },
            { speaker: "Tyler", text: "Most of them needed hardware security keys shipped to their home residences for physical multi-factor authentication. Operations shipped the final batch of thirty FIDO2 tokens yesterday." },
            { speaker: "Karen", text: "Good. Please ensure that our help desk provides a dedicated thirty-minute onboarding slot for each recipient so access disruptions are minimized." },
            { speaker: "Tyler", text: "Will do, Karen. I've already briefed the support team to prioritize those setup tickets." },
          ],
          fullScriptText: "Karen: Tyler, how is our migration to the new zero-trust identity provider progressing across our remote engineering hubs?\nTyler: We have successfully enrolled eighty-eight percent of our remote employees, Karen. The remaining twelve percent are scheduled for migration by this Thursday.\nKaren: What seems to be the primary friction point for that remaining twelve percent?\nTyler: Most of them needed hardware security keys shipped to their home residences for physical multi-factor authentication. Operations shipped the final batch of thirty FIDO2 tokens yesterday.\nKaren: Good. Please ensure that our help desk provides a dedicated thirty-minute onboarding slot for each recipient so access disruptions are minimized.\nTyler: Will do, Karen. I've already briefed the support team to prioritize those setup tickets.",
          questions: [
            makeMCQ(
              "What percentage of remote employees have already been enrolled in the zero-trust identity provider?",
              "Eighty-eight percent",
              ["Fifty percent", "Twelve percent", "One hundred percent"],
              2, // C
              "Tyler confirms: 'We have successfully enrolled eighty-eight percent of our remote employees, Karen.'",
              { id: "mock-05-list-q01" }
            ),
            makeMCQ(
              "How many physical FIDO2 hardware security tokens did Operations ship in the final batch yesterday?",
              "Thirty tokens",
              ["Ten tokens", "One hundred tokens", "Fifty tokens"],
              3, // D
              "Tyler states: 'Operations shipped the final batch of thirty FIDO2 tokens yesterday.'",
              { id: "mock-05-list-q02" }
            ),
            makeMCQ(
              "By what day does Tyler expect the remaining twelve percent of employees to complete migration?",
              "By this Thursday",
              ["By next month", "By Friday midnight", "By next year"],
              0, // A
              "Tyler explains: 'The remaining twelve percent are scheduled for migration by this Thursday.'",
              { id: "mock-05-list-q03" }
            ),
            makeMCQ(
              "What duration did Karen specify for the dedicated help desk onboarding support slots?",
              "Thirty minutes",
              ["Five minutes", "Two hours", "All day"],
              1, // B
              "Karen directs: 'Please ensure that our help desk provides a dedicated thirty-minute onboarding slot for each recipient.'",
              { id: "mock-05-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-05-spk-01",
            type: "speaking",
            prompt: "Explain how you structure your daily routine to maintain high productivity, mental focus, and professional boundaries while working in a remote or hybrid environment.",
            context: "Self-discipline, asynchronous etiquette, and professional routine in remote work environments.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Daily morning preparation routine", "Structuring deep focus blocks vs communication intervals", "Clear end-of-day boundary rituals", "Proactive asynchronous updates to teammates"],
            modelTranscript: "Working remotely requires deliberate self-discipline and structural boundary management. I begin each morning with a focused routine that simulates a traditional commute, stepping into a designated workspace free from domestic distractions. I structure my workday into ninety-minute deep work intervals dedicated to technical problem-solving, interspersed with focused blocks for reviewing pull requests and responding to Slack messages. To maintain team alignment, I broadcast concise asynchronous updates at the beginning and end of each day. When the workday concludes, I formally power down my workstation and step away, ensuring sustainable focus, high productivity, and long-term mental well-being.",
          },
          {
            id: "mock-05-spk-02",
            type: "speaking",
            prompt: "Discuss why information security and data confidentiality hygiene are the personal responsibility of every corporate employee, not just the IT security department.",
            context: "Security consciousness as an organizational culture. Explain human threat vectors, social engineering, and client trust.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Security as an all-hands discipline", "Vulnerability of human cognitive heuristics (phishing)", "Protecting client trust and company reputation", "Personal security hygiene practices"],
            modelTranscript: "In today's interconnected digital landscape, an enterprise's cybersecurity posture is only as resilient as its least vigilant employee. While IT departments configure sophisticated firewalls and endpoint detection, adversarial hackers predominantly exploit human habits through spear-phishing, credential theft, and social engineering. A single careless click on an unverified link or pasting sensitive client tokens into unauthorized tools can breach an entire network. Therefore, security hygiene is a foundational professional duty. By rigorously verifying sender identities, using password managers, and promptly reporting suspicious communications, every professional acts as a vital frontline guardian of organizational and client trust.",
          },
        ],
      },
    },
  ];
}

