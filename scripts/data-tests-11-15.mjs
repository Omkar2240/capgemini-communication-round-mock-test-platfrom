import { makeMCQ, makeSituational } from "./mcq-helper.mjs";

export function getTests11To15() {
  return [
    // ==========================================
    // MOCK TEST 11: Strategic Digital Transformation & Org Change
    // ==========================================
    {
      id: "mock-11",
      testNumber: 11,
      title: "Mock Test 11: Strategic Digital Transformation & Org Change",
      difficulty: "Advanced",
      durationMinutes: 60,
      description: "Enterprise operating model modernization, cultural change resistance, executive sponsorship alignment, and organizational agility transformation.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "Neither the transformation task force nor the regional managing directors _____ convinced of the aggressive timeline.",
            "were",
            ["was", "is", "has been"],
            1, // B
            "In 'neither... nor' constructions, the verb agrees with the closer plural subject ('regional managing directors' -> 'were').",
            { id: "mock-11-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "hard" }
          ),
          makeMCQ(
            "Prior to the global organizational restructuring, senior leadership _____ comprehensive cultural maturity assessments.",
            "had commissioned",
            ["has commissioned", "commissioning", "commissions"],
            2, // C
            "Past perfect ('had commissioned') is required for an action completed before the past milestone of global restructuring.",
            { id: "mock-11-gram-02", type: "grammar", topic: "Tenses", difficulty: "hard" }
          ),
          makeMCQ(
            "Fostering cross-departmental agility requires _____ profound paradigm shift across legacy management hierarchies.",
            "a",
            ["an", "the", "no article needed"],
            3, // D
            "'Profound' begins with a consonant sound (/p/), requiring indefinite article 'a'.",
            { id: "mock-11-gram-03", type: "grammar", topic: "Articles", difficulty: "hard" }
          ),
          makeMCQ(
            "The proposed enterprise operating model aligns seamlessly _____ our client's long-term environmental sustainability targets.",
            "with",
            ["to", "for", "against"],
            0, // A
            "The verb 'aligns' pairs standardly with the preposition 'with'.",
            { id: "mock-11-gram-04", type: "grammar", topic: "Prepositions", difficulty: "hard" }
          ),
          makeMCQ(
            "Were the executive board _____ to approve the digital transformation roadmap today, Phase 1 mobilization would commence in July.",
            "to decide",
            ["decides", "decided", "will decide"],
            1, // B
            "Formal inverted second conditional ('Were [subject] to [infinitive]') requires 'to decide'.",
            { id: "mock-11-gram-05", type: "grammar", topic: "Conditionals", difficulty: "hard" }
          ),
          makeMCQ(
            "The enterprise agility initiative succeeded, _____ widespread initial skepticism among regional branch directors.",
            "notwithstanding",
            ["because", "therefore", "since"],
            2, // C
            "Concessive preposition 'notwithstanding' (meaning despite) connects the success with the initial skepticism.",
            { id: "mock-11-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "hard" }
          ),
          makeMCQ(
            "Of the three transformation blueprints submitted by international consultancies, Capgemini's proposed roadmap was deemed _____ viable.",
            "most",
            ["more", "much", "very"],
            3, // D
            "Superlative 'most viable' is required when comparing among three or more submitted blueprints.",
            { id: "mock-11-gram-07", type: "grammar", topic: "Adjectives & Adverbs", difficulty: "hard" }
          ),
          makeMCQ(
            "Quarterly transformation progress metrics and cultural sentiment surveys _____ directly to the board of directors.",
            "are presented",
            ["is presented", "presenting", "presented"],
            0, // A
            "Passive voice present simple plural ('are presented') agrees with the plural compound subject 'metrics and surveys'.",
            { id: "mock-11-gram-08", type: "grammar", topic: "Voice & Modals", difficulty: "hard" }
          ),
          makeMCQ(
            "The Chief Transformation Officer, _____ visionary leadership modernized the enterprise legacy footprint, retired last spring.",
            "whose",
            ["who", "whom", "which"],
            1, // B
            "Possessive relative pronoun 'whose' attributes visionary leadership to the Chief Transformation Officer.",
            { id: "mock-11-gram-09", type: "grammar", topic: "Pronouns & Relative Clauses", difficulty: "hard" }
          ),
          makeMCQ(
            "To sustain competitive differentiation, the enterprise must _____ obsolete hierarchical silos in favor of cross-functional value streams.",
            "dismantle",
            ["dismantling", "dismantled", "dismantlement"],
            2, // C
            "Modal auxiliary 'must' takes the base verb 'dismantle' (meaning to deconstruct or take apart).",
            { id: "mock-11-gram-10", type: "grammar", topic: "Business Vocabulary", difficulty: "hard" }
          ),
        ],
        writing: [
          {
            id: "mock-11-wri-01",
            type: "writing",
            taskType: "email",
            prompt: "Write a high-stakes strategic briefing memo to the client Chief Executive Officer and Executive Committee addressing deep-seated cultural resistance from middle management during an enterprise agile transformation, proposing three structural change interventions.",
            context: "Middle managers fear loss of operational authority and resource control. Proposed interventions: leadership coaching on value-stream enablement, realignment of incentive compensation toward product outcomes, and establishing an internal Agile Community of Practice.",
            minWords: 90,
            maxWords: 160,
            recommendedMinutes: 10,
            scoringCriteria: ["Authoritative executive tone", "Nuanced diagnosis of organizational friction", "Actionable interventions", "Strategic leadership framing"],
            modelAnswer: "Dear Executive Committee Members,\n\nSubject: Overcoming Middle Management Friction in Enterprise Agile Transformation\n\nWhile our enterprise digital transformation has delivered promising early wins in software release cadence, our cultural sentiment audits reveal acute anxiety and passive resistance across mid-tier management. Managers predominantly perceive agile squads as a threat to their traditional organizational authority and resource governance.\n\nTo pivot middle management from skepticism into enthusiastic transformation champions, we recommend three decisive interventions:\n\n1. Executive Coaching & Role Reframing: Transition traditional managers into strategic Chapter Leads and Value Stream Enablers focused on talent development rather than command-and-control task allocation.\n2. Incentive Realignment: Restructure annual performance scorecards to reward cross-functional product velocity and team psychological safety rather than siloed headcount management.\n3. Enterprise Agile Guilds: Establish an open Community of Practice providing peer mentorship, transparent roadmaps, and continuous upskilling.\n\nI welcome the opportunity to discuss this leadership enablement framework during Thursday's executive session.\n\nSincerely,\nGlobal Head of Transformation Advisory",
          },
          {
            id: "mock-11-wri-02",
            type: "writing",
            taskType: "summary",
            prompt: "Summarize Kotter's 8-Step Change Model and explain why establishing a genuine sense of urgency is critical before initiating enterprise structural reorganizations.",
            context: "Focus on complacence vs urgency, guiding coalitions, strategic vision articulation, and embedding cultural change in corporate DNA.",
            minWords: 75,
            maxWords: 130,
            recommendedMinutes: 10,
            scoringCriteria: ["Accurate articulation of Kotter's change model", "Nuanced change management rationale", "Coherent structural synthesis", "High syntactic clarity"],
            modelAnswer: "John Kotter's 8-Step Change Model provides a sequential framework for navigating complex organizational transformations. Kotter emphasizes that transformations predominantly fail when leaders attempt structural re-engineering without first establishing a genuine sense of urgency. Without widespread urgency, entrenched complacency prevails, and employees view change as an ephemeral corporate fad. By objectively communicating market disruptions, emerging competitive threats, and the severe operational costs of organizational inertia, leadership disrupts organizational paralysis. This urgency creates fertile psychological ground to assemble a powerful guiding coalition, articulate a compelling strategic vision, empower broad-based employee action, celebrate incremental short-term wins, and ultimately anchor new collaborative operating behaviors deep within the corporate cultural DNA.",
          },
        ],
        situational: [
          makeSituational(
            "During a global transformation town hall, a veteran department head stands up and publicly denounces the new agile operating model, claiming it is an expensive consulting buzzword that destroys accountability.",
            "Remain poised, thank the department head for their candid feedback, validate that poorly executed transformations can indeed create confusion, and offer to walk through objective data from the successful pilot squad while inviting them to co-design the departmental transition framework.",
            [
              "Have corporate security escort the veteran department head out of the auditorium immediately.",
              "Agree with the department head completely and announce on the microphone that the transformation is canceled.",
              "Publicly mock the department head's age and claim that older managers cannot understand modern technology."
            ],
            3, // D
            "Gracefully validating genuine organizational anxieties while countering with objective pilot empirical data and co-design opportunities defuses public hostility and builds authentic alignment.",
            { id: "mock-11-sit-01" }
          ),
          makeSituational(
            "You observe that the client CEO has stopped attending weekly transformation steering sessions and is no longer referencing the initiative in company-wide communications, causing momentum to stall.",
            "Request a private executive briefing with the CEO, share telemetry showing that executive silence is causing middle managers to delay deliverables, and co-author a high-impact CEO video message reaffirming the strategic imperative.",
            [
              "Send an angry, passive-aggressive email to the CEO with copy to the entire board of directors.",
              "Abandon the transformation project immediately and tell your consulting squad to stop working.",
              "Spread rumors across the company that the CEO is about to be terminated by the board."
            ],
            0, // A
            "Re-engaging the executive sponsor privately with empirical behavioral data and providing turn-key communication collateral revitalizes vital top-down transformation momentum.",
            { id: "mock-11-sit-02" }
          ),
          makeSituational(
            "Two influential regional offices refuse to adopt the new standardized cloud ERP software, insisting that their local spreadsheets and legacy tools are legally required for their domestic operations.",
            "Collaborate with regional legal and compliance officers to review their actual domestic statutory mandates, distinguish genuine legal necessities from ingrained habits, and incorporate certified local compliance modules into the global platform.",
            [
              "Remotely delete their legacy spreadsheets overnight without warning to force compliance.",
              "Allow the two regional offices to permanently ignore all enterprise software systems forever.",
              "File a lawsuit against the regional office managers in international commercial court."
            ],
            1, // B
            "Rigorous compliance validation separates genuine regional regulatory requirements from change resistance, enabling tailored platform customization without fragmenting enterprise governance.",
            { id: "mock-11-sit-03" }
          ),
          makeSituational(
            "An enterprise transformation pilot squad experiences high team attrition and burnout because managers are enforcing new agile rituals while simultaneously demanding 100% of their legacy waterfall documentation.",
            "Meet with PMO leadership to formally sunset redundant waterfall documentation templates, establish a single operating rhythm, and protect the pilot squad's capacity so they can focus on high-value delivery.",
            [
              "Tell the engineers to work 80 hours a week and complete both sets of documentation without complaining.",
              "Instruct the pilot squad to stop writing any code and focus 100% of their time on filling out forms.",
              "Ignore the attrition figures because consultant turnover is an inevitable part of business."
            ],
            2, // C
            "Eliminating dual-operating system overhead and formally retiring obsolete legacy administrative burdens protects team health and enables true agile velocity.",
            { id: "mock-11-sit-04" }
          ),
          makeSituational(
            "A client transformation sponsor requests that you alter the employee cultural pulse survey results to hide negative feedback regarding managerial micro-management before the board presentation.",
            "Politely refuse to falsify data, explain that transparent survey findings are essential for designing targeted leadership coaching, and frame the negative feedback constructively as actionable high-leverage improvement opportunities for the board.",
            [
              "Falsify the survey charts immediately to show 100% employee happiness and satisfaction.",
              "Leaked the unredacted negative survey data to national newspapers to expose the sponsor.",
              "Delete all survey records from the server and claim that the survey was never conducted."
            ],
            3, // D
            "Upholding research integrity while constructively reframing critical employee sentiment as strategic leadership coaching opportunities protects consulting ethics and drives meaningful organizational change.",
            { id: "mock-11-sit-05" }
          ),
          makeSituational(
            "You notice that senior executives praise the transformation in public meetings, but privately direct their direct reports to prioritize legacy siloed metrics over cross-functional value streams.",
            "Facilitate an executive alignment workshop to redefine executive KPIs, linking annual bonuses directly to cross-functional end-to-end customer outcomes rather than legacy siloed departmental metrics.",
            [
              "Pretend not to notice the discrepancy and collect your consulting fees quietly.",
              "Confront the executives in the corporate cafeteria and accuse them of hypocrisy in front of their staff.",
              "Tell junior employees to disobey all executive instructions immediately."
            ],
            0, // A
            "Aligning executive incentive compensation and bonus structures with cross-functional outcomes systematically closes the gap between public rhetoric and private managerial directives.",
            { id: "mock-11-sit-06" }
          ),
        ],
        reading: {
          title: "The Architecture of Organizational Metamorphosis: Navigating the Human Dynamics of Digital Transformation",
          text: `In the contemporary corporate landscape, digital transformation has evolved from a discretionary technology modernization agenda into an existential organizational imperative. Yet, empirical research conducted across global management consultancies reveals a sobering reality: over seventy percent of large-scale digital transformations fail to achieve their stated strategic objectives. While post-mortems frequently cite technical debt, architecture mismatches, or vendor underperformance, the root cause is almost invariably sociocultural. Organizations attempt to superimpose modern digital technologies onto antiquated, industrial-era organizational hierarchies and command-and-control cultures.\n\nA successful digital transformation is fundamentally an operating model reinvention. Traditional enterprises are structured around functional silos—marketing, sales, engineering, risk, and operations—each defending insular fiefdoms, localized budgets, and proprietary metrics. In contrast, modern digital enterprises operate around cross-functional, customer-centric value streams. In a value-stream topology, persistent squads composed of product strategists, software engineers, UX designers, and data scientists collaborate autonomously to deliver continuous business outcomes. The organizational challenge lies not in drafting value stream topologies on slides, but in dismantling the deep psychological attachment to functional authority.\n\nHerein lies the primary bottleneck of organizational metamorphosis: the resistance of middle management. Senior executives initiate transformations with sweeping strategic visions, and frontline engineers often welcome modern tooling and agile empowerment. However, middle managers frequently experience acute status anxiety. In traditional hierarchies, a manager's prestige, compensation, and corporate influence are directly correlated with headcount and span of control. Cross-functional squads, decentralized decision-making, and automated governance threaten this paradigm, stripping managers of their historic gatekeeper function. Consequently, middle management often engages in passive institutional resistance—attending agile ceremonies while perpetuating legacy reporting mandates and vetoing autonomous squad initiatives.\n\nTo overcome this systemic inertia, transformation leaders must apply structured Change Management frameworks. John Kotter's seminal research demonstrates that without establishing a burning platform—a transparent, undeniable articulation of the existential business threats posed by market stagnation—organizations cannot shake free from complacency. Furthermore, structural realignment must precede behavioral expectations: performance appraisal mechanisms, executive bonus allocations, and career progression ladders must be re-engineered to reward collaboration, risk tolerance, and psychological safety. Technology provides the operational capability, but human alignment provides the enduring enterprise momentum.`,
          questions: [
            makeMCQ(
              "According to empirical research cited in the text, why do over 70% of large-scale digital transformations fail?",
              "Because organizations superimpose modern technologies onto antiquated, industrial-era hierarchies and siloed cultures.",
              [
                "Because modern cloud computing hardware is statistically prone to spontaneous combustion.",
                "Because international software engineers refuse to work more than twenty minutes per week.",
                "Because digital transformations are legally prohibited across all international commercial enterprises."
              ],
              1, // B
              "The passage explains: 'the root cause is almost invariably sociocultural. Organizations attempt to superimpose modern digital technologies onto antiquated, industrial-era organizational hierarchies and command-and-control cultures.'",
              { id: "mock-11-read-q01" }
            ),
            makeMCQ(
              "Why do middle managers frequently exhibit acute resistance to enterprise agile transformations?",
              "Because decentralized squad autonomy threatens their historic prestige, headcount control, and gatekeeper authority.",
              [
                "Because agile transformations require all middle managers to write low-level C++ code.",
                "Because modern software engineering causes widespread computer monitor eye strain.",
                "Because middle managers are universally prohibited from attending company social gatherings."
              ],
              2, // C
              "The text states: 'In traditional hierarchies, a manager's prestige, compensation, and corporate influence are directly correlated with headcount and span of control. Cross-functional squads... threaten this paradigm, stripping managers of their historic gatekeeper function.'",
              { id: "mock-11-read-q02" }
            ),
            makeMCQ(
              "In contrast to functional silos, how are modern digital enterprises structured?",
              "Around persistent, cross-functional value streams focused on continuous customer outcomes.",
              [
                "Around completely isolated geographic branch offices with zero network communication.",
                "Around annual paper-based filing cabinets managed exclusively by postal mail.",
                "Around temporary three-day contractor task forces that disband immediately."
              ],
              3, // D
              "The passage states: 'modern digital enterprises operate around cross-functional, customer-centric value streams. In a value-stream topology, persistent squads... collaborate autonomously to deliver continuous business outcomes.'",
              { id: "mock-11-read-q03" }
            ),
            makeMCQ(
              "What critical operational alignment must precede behavioral expectations according to the author?",
              "Performance appraisals, bonus allocations, and career ladders must be re-engineered to reward collaboration.",
              [
                "All company computer monitors must be upgraded to 8K resolution displays.",
                "Every employee must be forced to relocate their personal residence to corporate headquarters.",
                "All external vendors must be terminated within twenty-four hours without notice."
              ],
              0, // A
              "The final paragraph stresses: 'structural realignment must precede behavioral expectations: performance appraisal mechanisms, executive bonus allocations, and career progression ladders must be re-engineered to reward collaboration, risk tolerance, and psychological safety.'",
              { id: "mock-11-read-q04" }
            ),
          ],
        },
        listening: {
          title: "Audio Executive Briefing: Steering Committee Transformation Progress Review",
          audioTranscript: `Good afternoon, fellow steering committee members. Welcome to our Month-9 Digital Operating Model Transformation review. I am Claire Delacroix, Senior Vice President of Organizational Strategy.\n\nToday, I want to present both our hard empirical milestones and our cultural diagnostic indicators. Over the past three quarters, we have transitioned thirty-four product delivery squads across six international business units into persistent cross-functional value streams. Our core operational telemetry demonstrates undeniable delivery velocity acceleration: median code deployment frequency has surged by 310%, while change failure rates have dropped from 18% to 4.2%.\n\nHowever, our organizational health diagnostic—administered to over 4,200 employees last month—highlights critical cultural friction. While squad-level engineers report an eighty-two percent satisfaction rating with agile autonomy, sentiment among mid-level operational managers has plunged to thirty-four percent favorability. Qualitative interviews reveal that managers feel sidelined by decentralized decision frameworks, viewing product owners and agile coaches as usurping their operational governance.\n\nTo remediate this friction before our enterprise rollout in Q4, the transformation office is launching a comprehensive Management Enablement Track starting next Monday. First, we are introducing a six-week intensive 'Leadership in Complexity' executive coaching academy, specifically designed to re-skill managers into strategic capability leaders and career mentors. Second, the executive remuneration committee has ratified our proposal to tie 40% of managerial annual bonuses to squad empowerment, cross-silo collaboration, and team retention metrics.\n\nThese interventions will ensure our operational leaders become architects of change rather than casualties of modernization. I invite our Chief Human Resources Officer to offer supplementary remarks.`,
          durationSeconds: 150,
          questions: [
            makeMCQ(
              "By what percentage did code deployment frequency accelerate across the 34 transformed delivery squads?",
              "310%",
              ["45%", "120%", "500%"],
              2, // C
              "Claire Delacroix states: 'median code deployment frequency has surged by 310%, while change failure rates have dropped from 18% to 4.2%.'",
              { id: "mock-11-list-q01" }
            ),
            makeMCQ(
              "What favorability sentiment was recorded among mid-level operational managers in the employee survey?",
              "34% favorability",
              ["82% favorability", "12% favorability", "98% favorability"],
              3, // D
              "Claire notes: 'sentiment among mid-level operational managers has plunged to thirty-four percent favorability.'",
              { id: "mock-11-list-q02" }
            ),
            makeMCQ(
              "What percentage of managerial annual bonuses has the remuneration committee ratified to tie to squad empowerment and cross-silo metrics?",
              "40%",
              ["10%", "25%", "80%"],
              0, // A
              "The speaker confirms: 'the executive remuneration committee has ratified our proposal to tie 40% of managerial annual bonuses to squad empowerment, cross-silo collaboration, and team retention metrics.'",
              { id: "mock-11-list-q03" }
            ),
            makeMCQ(
              "What is the duration of the 'Leadership in Complexity' executive coaching academy launching next Monday?",
              "Six weeks",
              ["Two days", "Six months", "One year"],
              1, // B
              "Claire specifies: 'we are introducing a six-week intensive \"Leadership in Complexity\" executive coaching academy.'",
              { id: "mock-11-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-11-spk-01",
            type: "speaking",
            prompt: "Deliver an inspiring, visionary 90-second address to an all-hands corporate meeting of 500 employees who are anxious and exhausted from ongoing organizational restructuring.",
            context: "Acknowledge the fatigue of continuous change, articulate the compelling long-term strategic vision, validate their collective accomplishments, and inspire mutual trust.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Authentic empathy acknowledging change fatigue", "Celebrating concrete milestones achieved", "Articulating the strategic imperative of organizational agility", "Rallying collective purpose and mutual trust"],
            modelTranscript: "Colleagues, I want to begin today with absolute honesty: organizational transformation is demanding, and I recognize that navigating continuous change over the past several months has been mentally and physically exhausting. Each of you has balanced delivering daily business operations while fundamentally reimagining how we work, collaborate, and innovate. That fatigue is real, and your resilience deserves our profound gratitude. But look at what we have achieved together: we have slashed customer onboarding times, broken down decade-old departmental walls, and launched digital capabilities that our competitors are scrambling to replicate. We are not transforming for the sake of buzzwords; we are transforming so that our organization thrives in an unpredictable digital future, ensuring our jobs, our culture, and our customer impact remain strong for the next generation. As we enter this next phase, our commitment to you is stability, transparency, and relentless support. Thank you for your passion, your bravery, and your belief in what we are building together.",
          },
          {
            id: "mock-11-spk-02",
            type: "speaking",
            prompt: "Explain to a skeptical legacy department director why transitioning from project-based funding to persistent product value-stream funding delivers superior business outcomes and financial governance.",
            context: "Contrast the inefficiencies of temporary project funding (stop-and-start resource churn, handoff loss, estimation gaming) with persistent product funding (continuous delivery, deep domain knowledge, stable squads).",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Flaws of traditional project funding (stop-start churn, knowledge loss)", "Benefits of persistent product value-stream funding", "Preserving institutional knowledge & domain mastery", "Dynamic financial governance and responsive ROI"],
            modelTranscript: "In traditional project-based funding, we treat technology delivery like a construction contract: we assemble a temporary team, spend months debating speculative cost estimates, execute the project, and then disband the squad just as they achieve peak collaboration and domain expertise. When enhancements are needed a year later, we reassemble a new team that must spend months deciphering legacy code, creating massive overhead and knowledge loss. Transitioning to persistent product value-stream funding fundamentally fixes this inefficiency. Instead of funding transient projects, we fund stable, persistent squads dedicated to specific customer journeys. These squads build deep domain mastery, retain institutional architectural memory, and continuously deploy high-value features. Far from losing financial governance, executive leadership gains dynamic capital allocation: if market conditions shift, you can dial funding up or down across value streams quarterly based on proven business outcomes rather than speculative multi-year business cases.",
          },
        ],
      },
    },

    // ==========================================
    // MOCK TEST 12: Executive Board Briefing & Crisis Response
    // ==========================================
    {
      id: "mock-12",
      testNumber: 12,
      title: "Mock Test 12: Executive Board Briefing & Crisis Response",
      difficulty: "Advanced",
      durationMinutes: 60,
      description: "Crisis communications, fiduciary executive governance, regulatory disclosure protocols, and investor relations crisis management.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "Neither the Chief Information Security Officer nor the general counsel _____ willing to endorse the preliminary disclosure statement.",
            "was",
            ["were", "are", "have been"],
            1, // B
            "In 'neither... nor' constructions, the verb agrees with the closer singular subject ('general counsel' -> 'was').",
            { id: "mock-12-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "hard" }
          ),
          makeMCQ(
            "Before the emergency board convening commenced, the forensic cybersecurity investigators _____ the exfiltration vector.",
            "had identified",
            ["has identified", "identifying", "identifies"],
            2, // C
            "Past perfect ('had identified') indicates an action completed before the past start of the emergency board meeting.",
            { id: "mock-12-gram-02", type: "grammar", topic: "Tenses", difficulty: "hard" }
          ),
          makeMCQ(
            "The executive board demanded _____ exhaustive forensic accounting investigation into the reported discrepancy.",
            "an",
            ["a", "the", "no article needed"],
            3, // D
            "'Exhaustive' begins with a vowel sound (/ɪɡˈzɔːstɪv/), requiring indefinite article 'an'.",
            { id: "mock-12-gram-03", type: "grammar", topic: "Articles", difficulty: "hard" }
          ),
          makeMCQ(
            "The corporate crisis response protocol adheres strictly _____ statutory SEC disclosure timelines.",
            "to",
            ["with", "in", "by"],
            0, // A
            "The verb 'adheres' pairs with the preposition 'to'.",
            { id: "mock-12-gram-04", type: "grammar", topic: "Prepositions", difficulty: "hard" }
          ),
          makeMCQ(
            "Had external forensic auditors _____ the anomaly forty-eight hours earlier, the public regulatory disclosure would have been orderly.",
            "flagged",
            ["flag", "flagging", "has flagged"],
            1, // B
            "Inverted third conditional ('Had [subject] [past participle]') requires 'flagged'.",
            { id: "mock-12-gram-05", type: "grammar", topic: "Conditionals", difficulty: "hard" }
          ),
          makeMCQ(
            "The board voted to suspend dividend payments, _____ maintaining liquidity during the global supply chain crisis was paramount.",
            "inasmuch as",
            ["although", "despite", "whereas"],
            2, // C
            "Causal conjunction phrase 'inasmuch as' (meaning since or because) justifies the board's liquidity decision.",
            { id: "mock-12-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "hard" }
          ),
          makeMCQ(
            "Among all four legal remediation strategies submitted by external counsel, Option C presented the _____ legal exposure.",
            "least",
            ["less", "lesser", "little"],
            3, // D
            "Superlative form 'least' is required when evaluating among all four options.",
            { id: "mock-12-gram-07", type: "grammar", topic: "Adjectives & Adverbs", difficulty: "hard" }
          ),
          makeMCQ(
            "Comprehensive forensic dossiers and media response drafts _____ by the crisis committee by midnight.",
            "were finalized",
            ["was finalized", "finalizing", "finalized"],
            0, // A
            "Passive voice past simple plural ('were finalized') correctly matches plural subject 'dossiers and drafts'.",
            { id: "mock-12-gram-08", type: "grammar", topic: "Voice & Modals", difficulty: "hard" }
          ),
          makeMCQ(
            "The Audit Committee Chair, _____ rigorous questioning uncovered the off-balance-sheet liability, maintained uncompromising oversight.",
            "whose",
            ["who", "whom", "which"],
            1, // B
            "Possessive relative pronoun 'whose' describes the rigorous questioning belonging to the Audit Committee Chair.",
            { id: "mock-12-gram-09", type: "grammar", topic: "Pronouns & Relative Clauses", difficulty: "hard" }
          ),
          makeMCQ(
            "The corporate communications office sought to _____ public anxiety by issuing transparent, verified hourly incident bulletins.",
            "allay",
            ["allaying", "allayed", "allayment"],
            2, // C
            "Infinitive particle 'to' followed by base verb 'allay' (meaning to diminish or calm).",
            { id: "mock-12-gram-10", type: "grammar", topic: "Business Vocabulary", difficulty: "hard" }
          ),
        ],
        writing: [
          {
            id: "mock-12-wri-01",
            type: "writing",
            taskType: "email",
            prompt: "Write an urgent, highly confidential executive briefing memo to the Board of Directors regarding a confirmed cybersecurity intrusion into customer data archives, detailing immediate containment actions, legal disclosures, and strategic remediation.",
            context: "Intrusion detected at 02:00 UTC affecting 45,000 legacy records. Forensic containment complete. Zero active exfiltration ongoing. Mandatory 72-hour regulatory disclosure window active. Press release drafted.",
            minWords: 90,
            maxWords: 160,
            recommendedMinutes: 10,
            scoringCriteria: ["Rigorous executive gravitas", "Transparent, objective crisis quantification", "Clear regulatory compliance timeline", "Structured strategic remediation roadmap"],
            modelAnswer: "Confidential Memorandum to the Board of Directors\n\nSubject: Critical Incident Briefing: Containment and Disclosure Protocol for Data Incident\n\nMembers of the Board,\n\nAt 02:00 UTC this morning, our SecOps monitoring detected unauthorized credential usage accessing an isolated archive containing approximately 45,000 legacy customer records. We immediately initiated our Tier-1 Crisis Management Protocol.\n\nActions Taken:\n1. Operational Containment: Compromised service credentials were revoked within twelve minutes, and forensic network isolation was executed. Mandiant forensic leads confirm zero active persistence or active exfiltration.\n2. Regulatory Adherence: General Counsel has mobilized statutory notification workflows to satisfy GDPR and SEC 72-hour notification requirements.\n3. Governance & Comms: A holding press statement has been prepared. We are actively provisioning 24 months of complimentary credit monitoring for affected customers.\n\nAn emergency board executive session will convene at 18:00 UTC today to review the comprehensive forensic dossier and approve external disclosures.\n\nRespectfully submitted,\nChief Executive Officer & Chief Legal Officer",
          },
          {
            id: "mock-12-wri-02",
            type: "writing",
            taskType: "summary",
            prompt: "Summarize the fiduciary responsibilities of corporate directors during an enterprise crisis and explain why transparent, verified disclosure protects shareholder value better than minimization or delay.",
            context: "Focus on duty of care, duty of loyalty, regulatory penalties for delayed disclosure, brand equity erosion, and investor trust restoration.",
            minWords: 75,
            maxWords: 130,
            recommendedMinutes: 10,
            scoringCriteria: ["Deep legal-corporate governance understanding", "Concise synthesis of fiduciary duties", "Compelling argumentation for transparency", "Flawless formal prose"],
            modelAnswer: "Corporate directors bear strict fiduciary obligations—principally the Duty of Care and the Duty of Loyalty—requiring informed, diligent oversight, especially during enterprise crises. When organizations confront catastrophic disruptions, leadership is often tempted to minimize disclosures or delay notification hoping for internal resolution. However, modern corporate governance demonstrates that obfuscation inflicts catastrophic reputational and financial damage. Delayed disclosure invites punitive regulatory penalties, shareholder derivative lawsuits, and severe stock valuation collapse once concealed facts inevitably emerge. Conversely, proactive, verified transparency demonstrates operational control, restores investor confidence, and preserves institutional brand equity. By confronting crises forthrightly, boards fulfill their fiduciary mandates and protect sustainable long-term enterprise valuation.",
          },
        ],
        situational: [
          makeSituational(
            "An aggressive investigative reporter calls your personal mobile phone at 9:00 PM claiming they have leaked internal documents proving your client's core software platform has a massive security backdoor, demanding an immediate comment.",
            "Politely state that you cannot comment on unverified inquiries, refer the reporter to the official corporate media relations office, immediately notify your legal and communications leadership, and refrain from discussing any proprietary details.",
            [
              "Panic and confirm that the reporter's allegations are 100% true while begging them not to write the article.",
              "Threaten the reporter with physical violence and shout profanities into the telephone receiver.",
              "Answer all of the reporter's questions in detail and email them internal confidential architectural diagrams."
            ],
            3, // D
            "Strict adherence to corporate media referral protocols prevents unauthorized leaks while alerting legal and crisis communications leadership immediately.",
            { id: "mock-12-sit-01" }
          ),
          makeSituational(
            "During an emergency board meeting regarding a major compliance breach, a board member aggressively demands to know which specific software engineer wrote the flawed code line so they can be fired publicly.",
            "Intervene calmly and diplomatically, explain that individual code contributions undergo multi-stage peer reviews and automated testing pipelines, and refocus the board's attention on systemic governance and architectural safeguards.",
            [
              "Shout out the junior developer's home address and telephone number to the angry board member.",
              "Accuse the board member of being a tyrant and storm out of the boardroom slammering the door.",
              "Fabricate a story blaming an offshore employee who recently resigned to protect your onshore team."
            ],
            0, // A
            "Protecting individuals from scapegoating while diplomatically guiding executive attention to systemic verification pipelines upholds professional ethics and corporate governance.",
            { id: "mock-12-sit-02" }
          ),
          makeSituational(
            "You discover that a senior executive sold $500,000 worth of company stock two hours after being briefed in private on an unreleased critical cybersecurity vulnerability.",
            "Immediately report the transaction to your enterprise ethics hotline, Chief Compliance Officer, and General Counsel for urgent legal evaluation under federal insider trading regulations.",
            [
              "Blackmail the senior executive for half of their profits in exchange for keeping their secret.",
              "Log into your personal stock trading account and sell all of your own shares immediately.",
              "Ignore the transaction completely because executive personal finances are none of your business."
            ],
            1, // B
            "Reporting potential insider trading immediately through formal compliance and general counsel channels fulfills mandatory legal and ethical obligations.",
            { id: "mock-12-sit-03" }
          ),
          makeSituational(
            "The client CEO asks you to present an overly optimistic project health status report to the board of directors, intentionally concealing a $2 million financial deficit.",
            "Respectfully refuse to misrepresent project status, explain the severe fiduciary and legal consequences of presenting fraudulent figures to the board, and offer to assist the CEO in presenting an honest turnaround plan.",
            [
              "Agree to falsify the report, alter the financial spreadsheets, and present the fictional numbers with a smile.",
              "Secretly tape the conversation with the CEO and post the audio recording on public YouTube channels.",
              "Call the police and claim that the CEO attempted to physically rob you in the office."
            ],
            2, // C
            "Refusing to participate in fraudulent financial reporting while constructively assisting leadership in presenting a transparent remediation plan upholds professional integrity.",
            { id: "mock-12-sit-04" }
          ),
          makeSituational(
            "A sudden power outage and backup generator failure takes down the enterprise primary data center, and the automated disaster recovery failover to the secondary site fails to trigger.",
            "Mobilize the incident command team immediately, execute manual disaster recovery failover runbooks step-by-step, establish an hourly status bridge for executive leadership, and initiate root cause logging.",
            [
              "Abandon the data center entirely, turn off your mobile phone, and go home to watch television.",
              "Post on social media that the company is permanently ruined and that all user data is gone forever.",
              "Randomly pull out power cables from server racks to see if the machines restart on their own."
            ],
            3, // D
            "Disciplined execution of manual disaster recovery runbooks paired with reliable executive communications restores critical operations during catastrophic infrastructure failures.",
            { id: "mock-12-sit-05" }
          ),
          makeSituational(
            "During a live televised press conference following a corporate crisis, a spokesperson inadvertently states an unverified factual inaccuracy regarding customer compensation.",
            "Convene an immediate huddle with the communications lead and legal counsel as soon as the press conference concludes, draft a swift and transparent clarification release, and issue it to media outlets within the hour.",
            [
              "Pretend the spokesperson never said it and delete the video broadcast from the internet completely.",
              "Fire the spokesperson on the spot in front of the television cameras and insult them publicly.",
              "Double down on the inaccuracy by manufacturing forged corporate compensation vouchers."
            ],
            0, // A
            "Issuing a prompt, transparent factual clarification through formal media channels corrects the record rapidly before false claims compound legal liabilities.",
            { id: "mock-12-sit-06" }
          ),
        ],
        reading: {
          title: "Executive Fiduciary Governance and Crisis Leadership: Safeguarding Resilience in the C-Suite",
          text: `In contemporary corporate governance, the boardroom is no longer an ivory tower insulated from operational realities. Increasing geopolitical volatility, sophisticated state-sponsored cyber warfare, disruptive technological inflection points, and instant global social media scrutiny have converged to make corporate crises both more frequent and vastly more catastrophic. When an enterprise confronts a systemic crisis—whether a critical data breach, an environmental catastrophe, or an accounting fraud disclosure—the strategic response orchestrated by executive leadership and the Board of Directors determines whether the enterprise survives with brand integrity intact or faces terminal decline.\n\nAt the core of board governance during a crisis lie the foundational legal doctrines of fiduciary duty: the Duty of Care and the Duty of Loyalty. Under the Duty of Care, directors are legally bound to act on an informed basis, exercising the diligence, critical inquiry, and prudence that a reasonably competent person would employ under similar circumstances. In a modern crisis context, this precludes passive reliance on filtered executive summaries. Directors must demand direct access to frontline forensic specialists, external risk advisors, and unredacted telemetry. The Duty of Loyalty mandates that directors prioritize the long-term well-being of the corporation and its stakeholders above personal self-interest, executive friendships, or short-term share price preservation.\n\nA recurring operational failure in corporate crisis response is the phenomenon known as 'information suppression disease.' In hierarchical organizations, bad news travels at glacial speeds, as successive layers of management sanitize unfavorable metrics to avoid angering superiors. By the time a crisis breaches C-suite awareness, operational containment windows have often closed. High-performing boards combat this through institutionalized crisis governance. They establish standing Special Litigation and Risk Committees, mandate unmediated reporting pathways for Chief Compliance and Information Security Officers, and conduct bi-annual unscripted crisis simulation war games.\n\nFurthermore, modern crisis leadership demands a radical commitment to transparency. Decades of public relations scholarship confirm that attempts to minimize operational culpability, delay regulatory disclosures, or deflect blame onto rogue subordinates uniformly backfire. Public stakeholders and regulatory bodies reward organizations that exhibit prompt, empathetic, and verifiable accountability. By disclosing known facts with precision, delineating what remains unconfirmed, providing actionable support to affected parties, and outlining structural preventive remediations, executive leaders transform moments of acute institutional vulnerability into enduring testaments to corporate integrity.`,
          questions: [
            makeMCQ(
              "Under the legal Duty of Care, what are corporate directors required to do during an enterprise crisis?",
              "Act on an informed basis with diligence, critical inquiry, and direct access to forensic specialists.",
              [
                "Accept all verbal executive assertions without requesting supporting data or proof.",
                "Immediately liquidate all corporate assets and distribute cash to overseas bank accounts.",
                "Resign from the board of directors immediately to escape any legal responsibilities."
              ],
              1, // B
              "The passage explains: 'Under the Duty of Care, directors are legally bound to act on an informed basis, exercising the diligence, critical inquiry, and prudence that a reasonably competent person would employ... demand direct access to frontline forensic specialists.'",
              { id: "mock-12-read-q01" }
            ),
            makeMCQ(
              "What organizational dysfunction does the author describe as 'information suppression disease'?",
              "Successive management layers sanitizing and delaying unfavorable news to avoid angering superiors.",
              [
                "A biological medical virus that attacks computer hard drives in corporate headquarters.",
                "A mandatory government tax placed on unread electronic mail messages.",
                "The deliberate deletion of spam marketing messages from corporate email accounts."
              ],
              2, // C
              "The text highlights: 'the phenomenon known as \"information suppression disease.\" In hierarchical organizations, bad news travels at glacial speeds, as successive layers of management sanitize unfavorable metrics to avoid angering superiors.'",
              { id: "mock-12-read-q02" }
            ),
            makeMCQ(
              "How do high-performing corporate boards institutionalize proactive crisis governance?",
              "By establishing standing Risk Committees, unmediated reporting paths, and bi-annual unscripted war games.",
              [
                "By refusing to speak to corporate lawyers or auditors under any circumstances.",
                "By prohibiting the use of computers and smartphones across all executive offices.",
                "By meeting only once every five years to sign pre-printed financial statements."
              ],
              3, // D
              "The author notes: 'They establish standing Special Litigation and Risk Committees, mandate unmediated reporting pathways for Chief Compliance and Information Security Officers, and conduct bi-annual unscripted crisis simulation war games.'",
              { id: "mock-12-read-q03" }
            ),
            makeMCQ(
              "According to public relations scholarship cited in the text, how should executive leaders communicate during a crisis?",
              "By exhibiting prompt, empathetic, and verifiable accountability with precision and structural remediations.",
              [
                "By completely denying all facts and blaming low-level interns publicly.",
                "By holding secret closed-door meetings and refusing all regulatory disclosures.",
                "By issuing contradictory statements across different television news channels."
              ],
              0, // A
              "The final paragraph states: 'Public stakeholders and regulatory bodies reward organizations that exhibit prompt, empathetic, and verifiable accountability. By disclosing known facts with precision... executive leaders transform moments of acute vulnerability into enduring testaments to corporate integrity.'",
              { id: "mock-12-read-q04" }
            ),
          ],
        },
        listening: {
          title: "Audio Executive Session: Emergency Board Briefing on Cyber Breach Containment",
          audioTranscript: `Members of the Board, thank you for convening on exceptional notice. I am Jonathan Vance, Executive Chairman, and joining me is Dr. Elena Rostova, our Chief Information Security Officer, and Sarah Jenkins, General Counsel.\n\nAt 01:14 UTC this morning, our global threat monitoring center identified credential stuffing attacks targeting an unpatched API gateway in our legacy customer loyalty application. The attacker leveraged compromised administrator credentials to extract three database tables.\n\nDr. Rostova, please deliver our forensic status update.\n\nThank you, Mr. Chairman. At 01:28 UTC—precisely fourteen minutes post-detection—our security response squad severed network routing to the legacy cluster, isolating the infected subnet. Forensic analysis reveals that the compromised tables contained names, hashed passwords, and contact emails for approximately 52,000 European accounts. Crucially, credit card numbers, national identification tokens, and transactional histories were housed in our hardened AWS cluster and were completely uncompromised.\n\nSarah Jenkins, please summarize our legal and disclosure posture.\n\nThank you, Elena. Because European customer records are involved, the European Union General Data Protection Regulation mandates formal regulatory disclosure within seventy-two hours of confirmation. Our statutory clock expires at 01:14 UTC on Thursday. We have drafted our formal notification to the Data Protection Commissioner and prepared a transparent customer communication plan offering twelve months of complimentary identity monitoring. Our external crisis counsel, Gibson Dunn, has reviewed all disclosures.\n\nThank you, Sarah. Fellow directors, our immediate duty is total transparency and rigorous containment. I now open the floor for board questions.`,
          durationSeconds: 150,
          questions: [
            makeMCQ(
              "How many minutes elapsed between the initial detection and the total network isolation of the infected subnet?",
              "Precisely 14 minutes",
              ["Exactly 2 minutes", "Nearly 3 hours", "Over 24 hours"],
              2, // C
              "Dr. Rostova reports: 'At 01:28 UTC—precisely fourteen minutes post-detection—our security response squad severed network routing to the legacy cluster, isolating the infected subnet.'",
              { id: "mock-12-list-q01" }
            ),
            makeMCQ(
              "What sensitive data categories were confirmed to be completely uncompromised during the breach?",
              "Credit card numbers, national identification tokens, and transactional histories.",
              [
                "Customer names and email addresses only.",
                "The corporate executive payroll records.",
                "All server operating system source codes."
              ],
              3, // D
              "Dr. Rostova states: 'Crucially, credit card numbers, national identification tokens, and transactional histories were housed in our hardened AWS cluster and were completely uncompromised.'",
              { id: "mock-12-list-q02" }
            ),
            makeMCQ(
              "What is the statutory deadline for the GDPR regulatory disclosure cited by Sarah Jenkins?",
              "01:14 UTC on Thursday (within 72 hours)",
              ["By 5:00 PM today", "Within thirty calendar days", "Only after the annual shareholder meeting"],
              0, // A
              "Sarah Jenkins states: 'the European Union General Data Protection Regulation mandates formal regulatory disclosure within seventy-two hours of confirmation. Our statutory clock expires at 01:14 UTC on Thursday.'",
              { id: "mock-12-list-q03" }
            ),
            makeMCQ(
              "What customer compensation measure was prepared as part of the transparent communication plan?",
              "Twelve months of complimentary identity monitoring",
              [
                "A free $5 corporate gift card",
                "Full cash reimbursement for all historical purchases",
                "A handwritten letter from the company founder"
              ],
              1, // B
              "Sarah clarifies: 'prepared a transparent customer communication plan offering twelve months of complimentary identity monitoring.'",
              { id: "mock-12-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-12-spk-01",
            type: "speaking",
            prompt: "Deliver a calm, authoritative, and legally precise 90-second opening statement at a televised press conference regarding a major corporate data breach.",
            context: "Acknowledge the breach with genuine empathy, delineate what data was affected and what was protected, outline immediate remediation actions, and commit to transparent updates.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Executive poise and empathetic accountability", "Clear delineation of affected vs secured data", "Immediate concrete containment and remediation steps", "Commitment to ongoing stakeholder transparency"],
            modelTranscript: "Good morning. I am here today to deliver a direct, transparent update regarding a cybersecurity incident impacting our customer data archives. First and foremost, to our customers, partners, and shareholders: we deeply regret the concern and disruption this event causes, and we take complete institutional responsibility for safeguarding your data. At 01:14 UTC this morning, our security operations detected unauthorized access to an isolated database containing names, email addresses, and encrypted passwords for approximately 52,000 accounts. We severed network connections within fourteen minutes, fully containing the intrusion. Most importantly, our core financial clusters, payment credentials, and government identification numbers remain completely secure and uncompromised. We have notified national regulatory authorities, engaged premier independent forensic specialists, and are providing twelve months of comprehensive identity protection services to all impacted individuals at zero cost. We will publish hourly status bulletins on our dedicated security portal. Our dedication to your trust remains unconditional.",
          },
          {
            id: "mock-12-spk-02",
            type: "speaking",
            prompt: "Explain how an executive board maintains effective fiduciary oversight of emerging technological risks, such as generative AI and quantum encryption, without micromanaging technical engineering teams.",
            context: "Contrast strategic governance, risk tolerance boundaries, and independent auditing against low-level operational micromanagement.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Distinguishing strategic governance from operational micromanagement", "Establishing clear enterprise risk tolerance boundaries", "Leveraging independent third-party technical audits", "Continuous board education on exponential technologies"],
            modelTranscript: "An effective board of directors governs emerging technological frontiers by setting clear strategic boundaries and risk tolerances, rather than attempting to micromanage daily engineering choices. For exponential domains like generative AI and quantum encryption, directors do not need to audit algorithm lines or neural network weights. Instead, fiduciary oversight requires asking the right structural questions: Do we have an ethical AI framework governing algorithmic bias and customer privacy? What is our cryptographic migration roadmap before post-quantum decryption arrives? Boards enforce accountability by mandating independent third-party audits, establishing unmediated reporting channels for chief risk officers, and linking executive compensation to cybersecurity posture. Furthermore, forward-looking boards actively educate themselves by appointing technology advisory councils and conducting regular deep-dive briefings with external technical experts. This maintains uncompromising institutional vigilance while empowering engineering leadership to innovate rapidly.",
          },
        ],
      },
    },

    // ==========================================
    // MOCK TEST 13: Enterprise Data Governance, Compliance & Privacy
    // ==========================================
    {
      id: "mock-13",
      testNumber: 13,
      title: "Mock Test 13: Enterprise Data Governance, Compliance & Privacy",
      difficulty: "Advanced",
      durationMinutes: 60,
      description: "GDPR/CCPA compliance architectures, data mesh governance, regulatory audit defense, cross-border data residency, and enterprise data lineage.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "Neither the global data protection officer nor the enterprise compliance auditors _____ satisfied with the pseudonymization pipeline.",
            "were",
            ["was", "is", "has been"],
            1, // B
            "In 'neither... nor' constructions, the verb agrees with the closer plural subject ('compliance auditors' -> 'were').",
            { id: "mock-13-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "hard" }
          ),
          makeMCQ(
            "Before the statutory regulatory audit began, our data governance team _____ automated lineage maps for all PII data lakes.",
            "had finalized",
            ["has finalized", "finalizing", "finalizes"],
            2, // C
            "Past perfect ('had finalized') is required for an action completed before the past start of the regulatory audit.",
            { id: "mock-13-gram-02", type: "grammar", topic: "Tenses", difficulty: "hard" }
          ),
          makeMCQ(
            "Enforcing zero-trust access policies requires _____ unified enterprise identity catalog across multi-cloud regions.",
            "a",
            ["an", "the", "no article needed"],
            3, // D
            "'Unified' begins with a consonant semivowel sound (/j/), requiring the indefinite article 'a'.",
            { id: "mock-13-gram-03", type: "grammar", topic: "Articles", difficulty: "hard" }
          ),
          makeMCQ(
            "The updated data retention policy complies fully _____ the statutory requirements of the California Consumer Privacy Act.",
            "with",
            ["to", "for", "against"],
            0, // A
            "The verb 'complies' standardly pairs with the preposition 'with'.",
            { id: "mock-13-gram-04", type: "grammar", topic: "Prepositions", difficulty: "hard" }
          ),
          makeMCQ(
            "Should the European Court of Justice _____ cross-border data transfer safe harbors, we would immediately activate local sovereign hosting.",
            "invalidate",
            ["invalidates", "invalidated", "will invalidate"],
            1, // B
            "Formal inverted conditional ('Should [subject] [base verb]') requires the base form 'invalidate'.",
            { id: "mock-13-gram-05", type: "grammar", topic: "Conditionals", difficulty: "hard" }
          ),
          makeMCQ(
            "The data cataloging initiative was accelerated, _____ international regulatory authorities announced surprise statutory compliance audits.",
            "inasmuch as",
            ["although", "despite", "whereas"],
            2, // C
            "Causal conjunction 'inasmuch as' connects the acceleration of cataloging to the announcement of surprise audits.",
            { id: "mock-13-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "hard" }
          ),
          makeMCQ(
            "Of all the data tokenization frameworks benchmarked by our architecture council, VaultSecure demonstrated the _____ latency overhead.",
            "lowest",
            ["lower", "low", "more low"],
            3, // D
            "Superlative form 'lowest' is required when comparing among all benchmarked frameworks.",
            { id: "mock-13-gram-07", type: "grammar", topic: "Adjectives & Adverbs", difficulty: "hard" }
          ),
          makeMCQ(
            "Mandatory data Subject Access Requests (SAR) _____ by the automated privacy engine within thirty calendar days.",
            "are processed",
            ["is processed", "processing", "processed"],
            0, // A
            "Passive voice present simple plural ('are processed') matches the plural subject 'Requests'.",
            { id: "mock-13-gram-08", type: "grammar", topic: "Voice & Modals", difficulty: "hard" }
          ),
          makeMCQ(
            "The Lead Data Architect, _____ distributed data mesh strategy eliminated analytical query bottlenecks, presented at the global summit.",
            "whose",
            ["who", "whom", "which"],
            1, // B
            "Possessive relative pronoun 'whose' describes the distributed data mesh strategy belonging to the Lead Data Architect.",
            { id: "mock-13-gram-09", type: "grammar", topic: "Pronouns & Relative Clauses", difficulty: "hard" }
          ),
          makeMCQ(
            "To satisfy the statutory right to be forgotten, our engineering squad must _____ all customer records from active backup archives.",
            "purge",
            ["purging", "purged", "purgation"],
            2, // C
            "Modal auxiliary 'must' takes the base verb 'purge' (meaning to remove completely or delete permanently).",
            { id: "mock-13-gram-10", type: "grammar", topic: "Business Vocabulary", difficulty: "hard" }
          ),
        ],
        writing: [
          {
            id: "mock-13-wri-01",
            type: "writing",
            taskType: "email",
            prompt: "Write a formal regulatory compliance response email to the Data Protection Authority detailing your enterprise's adherence to GDPR Article 30 records of processing activities, outlining automated data lineage tooling, and confirming encryption standards.",
            context: "Regulatory audit reference: DPA-GDPR-2026-88. Data lineage tracked via automated metadata catalog. All customer PII encrypted at rest using AES-256 and in transit via TLS 1.3.",
            minWords: 90,
            maxWords: 160,
            recommendedMinutes: 10,
            scoringCriteria: ["Rigorous legal and regulatory compliance tone", "Specific article and standard citations", "Precise technical architecture explanation", "Professional audit cooperation commitment"],
            modelAnswer: "Dear Commissioners,\n\nRe: Formal Compliance Response – Audit Reference DPA-GDPR-2026-88\n\nI am writing on behalf of Enterprise Data Solutions to formally submit our compliance documentation in response to your Article 30 inquiry regarding records of processing activities.\n\nOur organization enforces a zero-trust enterprise data governance architecture. In accordance with statutory requirements, our automated data catalog continuously scans and records end-to-end data lineage across all analytical and transactional data pipelines. Every data ingestion, transformation, and storage event is indexed with cryptographic metadata provenance.\n\nFurthermore, all Personally Identifiable Information (PII) is encrypted at rest utilizing AES-256 GCM encryption with envelope key management, and strictly encrypted in transit using TLS 1.3 with enforced mutual authentication. Automated data retention policies execute cryptographic purging upon expiration of statutory retention windows.\n\nPlease find our audited Article 30 registry and SOC 2 Type II certificates attached. We remain entirely available for any technical depositions.\n\nSincerely,\nGlobal Data Protection Officer",
          },
          {
            id: "mock-13-wri-02",
            type: "writing",
            taskType: "summary",
            prompt: "Summarize the architectural principles of Data Mesh and explain how federated computational governance balances localized data product autonomy with centralized compliance standards.",
            context: "Focus on domain-driven ownership, data as a product, self-serve data infrastructure, and federated computational governance.",
            minWords: 75,
            maxWords: 130,
            recommendedMinutes: 10,
            scoringCriteria: ["Accurate data mesh conceptual understanding", "Clear architectural synthesis", "Nuanced governance trade-off explanation", "Polished technical prose"],
            modelAnswer: "Data Mesh is a decentralized socio-technical paradigm that addresses the scalability limitations of centralized monolithic data lakes. Rather than routing all data through an overburdened central engineering team, Data Mesh organizes analytical data around domain-driven decentralized squads who treat data as a first-class product. The critical mechanism maintaining enterprise coherence within this decentralized model is Federated Computational Governance. This principle establishes an enterprise-wide council of domain leads and compliance officers who define interoperability, security, and privacy standards globally. These standards are not enforced through bureaucratic manual approvals; rather, they are computationally embedded into an automated self-serve platform that automatically enforces tokenization, access policies, and audit logging across all localized data products.",
          },
        ],
        situational: [
          makeSituational(
            "A marketing data scientist creates an unauthorized copy of customer behavioral data containing plaintext email addresses on an unencrypted public cloud storage bucket to train a machine learning model.",
            "Isolate and delete the unencrypted cloud bucket immediately, initiate a forensic audit to verify whether any external unauthorized IP addresses accessed the data, notify the Data Protection Officer, and conduct mandatory privacy retraining with the data science team.",
            [
              "Ignore the bucket because training machine learning models is more important than data privacy laws.",
              "Publicly post the customer data on Twitter to demonstrate how useful the machine learning model is.",
              "Fire the entire marketing department immediately without investigating what happened."
            ],
            3, // D
            "Immediate bucket isolation, forensic verification, and formal DPO notification mitigate regulatory liability while reinforcing privacy engineering hygiene.",
            { id: "mock-13-sit-01" }
          ),
          makeSituational(
            "An enterprise customer submits a formal GDPR 'Right to be Forgotten' request demanding immediate erasure of all their records, but their transaction records must legally be retained for seven years under anti-money laundering tax laws.",
            "Consult legal counsel, inform the customer that their operational marketing and analytics data has been permanently purged, and explain that statutory tax laws require retaining financial transaction records securely in an encrypted, access-restricted regulatory archive.",
            [
              "Immediately delete all banking and tax records from the database, violating federal tax laws.",
              "Ignore the customer's GDPR request entirely and continue sending them promotional marketing emails.",
              "Send an angry letter to the customer accusing them of harassing your company with privacy requests."
            ],
            0, // A
            "Distinguishing GDPR erasure mandates from statutory financial record-retention requirements ensures dual compliance through selective purging and restricted regulatory archiving.",
            { id: "mock-13-sit-02" }
          ),
          makeSituational(
            "During a cross-border cloud architecture review, an engineering lead proposes routing all European customer telemetry data through a machine learning pipeline hosted in a non-compliant third country lacking an adequacy decision.",
            "Reject the architecture proposal, cite European Union cross-border data transfer statutory restrictions, and mandate that all telemetry processing and model inference remain within approved EU sovereign cloud regions.",
            [
              "Approve the transfer immediately because cloud compute is 10% cheaper in the non-compliant country.",
              "Tell the engineering lead to disguise the data transfer by renaming all database columns into French.",
              "Resign from your job and move to another country to avoid having to make architectural decisions."
            ],
            1, // B
            "Upholding cross-border data residency mandates protects the enterprise from severe regulatory sanctions under international privacy frameworks.",
            { id: "mock-13-sit-03" }
          ),
          makeSituational(
            "A software vendor partner requests access to production customer database snapshots to debug an elusive performance latency issue on your staging environment.",
            "Firmly refuse to provide production data snapshots, explain enterprise compliance and privacy covenants, and provide synthetic obfuscated test datasets that simulate latency without exposing real customer PII.",
            [
              "Zip the entire production database and email it to the vendor's personal Gmail account.",
              "Give the vendor root administrator access to the live production database with zero monitoring.",
              "Tell the vendor that debugging performance is impossible and cancel their contract on the spot."
            ],
            2, // C
            "Never exposing real production PII to external vendors and providing synthetic obfuscated data instead upholds security governance while unblocking technical diagnostics.",
            { id: "mock-13-sit-04" }
          ),
          makeSituational(
            "Your automated compliance audit scanner discovers that a legacy internal employee directory displays employee home addresses and personal telephone numbers without role-based access restrictions.",
            "Restrict access to the directory immediately to HR personnel, document the vulnerability as a high-severity compliance issue, deploy role-based access controls, and verify that no bulk scraping occurred.",
            [
              "Leave the directory open to all employees because everyone in the company should know where their colleagues live.",
              "Delete all employee employment contracts and terminate all human resources staff members.",
              "Sell the employee contact directory to third-party telemarketing firms for corporate profit."
            ],
            3, // D
            "Restricting internal PII access to authorized HR roles and verifying lack of exfiltration resolves privacy exposure and fulfills enterprise duty of care.",
            { id: "mock-13-sit-05" }
          ),
          makeSituational(
            "A client business unit head insists on purchasing an unapproved third-party SaaS survey tool that stores customer feedback on unvetted servers, bypassing enterprise security review.",
            "Intervene with the business unit head, explain the regulatory and security liabilities of unvetted SaaS tools, and work with procurement to fast-track security vetting or identify an approved enterprise-tier alternative.",
            [
              "Allow the business head to purchase the unapproved tool using their personal corporate credit card.",
              "Publicly accuse the business unit head of corporate espionage during an all-hands meeting.",
              "Shut down the entire corporate internet network to prevent anyone from using SaaS tools."
            ],
            0, // A
            "Guiding business leaders through proper third-party security vetting or providing approved alternatives prevents Shadow IT while fulfilling business objectives.",
            { id: "mock-13-sit-06" }
          ),
        ],
        reading: {
          title: "The Geopolitics of Data Sovereign Governance: Reconciling Privacy Directives with Global Cloud Architectures",
          text: `In the nascent decades of the internet, enterprise technology operated under the techno-optimist assumption of a borderless global digital commons. Data flowed unimpeded across transatlantic optical cables, and multi-tenant cloud architectures distributed storage blocks across worldwide data centers based purely on compute cost optimization and network latency. Today, this borderless paradigm has been comprehensively dismantled. In its place has emerged a complex, fractured geopolitical landscape defined by 'data sovereignty'—the legal doctrine that digital data is subject to the statutory laws, governance mandates, and national security directives of the geographical nation-state where it is collected or processed.\n\nThis regulatory revolution was inaugurated by the European Union's General Data Protection Regulation (GDPR) in 2018, which established rigorous individual privacy rights, mandated strict lawful bases for processing, and imposed Draconian financial penalties—up to four percent of global annual turnover or twenty million euros—for non-compliance. Crucially, Chapter V of the GDPR placed severe legal encumbrances on cross-border transfers of personal data to 'third countries' lacking an official adequacy decision from the European Commission. This legal barrier was reinforced by landmark European Court of Justice rulings—most notably Schrems II—which invalidated transatlantic privacy safe harbors on the grounds that foreign intelligence surveillance laws infringed upon European fundamental rights.\n\nFor multinational enterprises, data sovereignty creates profound architectural and operational challenges. A global corporation can no longer maintain a single centralized data warehouse in North America ingesting telemetry from European, Asian, and Latin American subsidiaries. Doing so introduces catastrophic regulatory liability. Consequently, leading enterprise consultancies advise clients to adopt a sovereign Data Mesh architecture. Under this model, data storage and analytical computation are localized within sovereign territorial boundaries. Instead of physically transferring raw Personally Identifiable Information (PII) across borders, enterprises employ federated learning and distributed query federation. Algorithms travel to the data, rather than data traveling to the algorithms.\n\nFurthermore, enterprise compliance requires the implementation of automated computational governance. Manual compliance spreadsheets and annual audits are hopelessly inadequate in environments where millions of microservices exchange billions of ephemeral API payloads daily. Organizations must deploy automated data lineage engines that continuously track the cryptographic provenance of every data asset, programmatically enforce pseudonymization and tokenization pipelines, and automate Subject Access Requests (SARs) and erasure workflows. By transforming privacy and sovereignty from a reactive legal burden into an automated architectural guardrail, modern enterprises maintain regulatory resilience across a fragmented digital world.`,
          questions: [
            makeMCQ(
              "What legal doctrine does the passage define as 'data sovereignty'?",
              "The principle that digital data is subject to the laws and governance mandates of the nation where it is collected or processed.",
              [
                "The idea that individual computer hackers hold absolute legal ownership over public internet infrastructure.",
                "The international treaty declaring that outer space satellites are exempt from copyright laws.",
                "The concept that all corporate financial profits must be converted into digital cryptocurrencies."
              ],
              1, // B
              "The text defines data sovereignty as: 'the legal doctrine that digital data is subject to the statutory laws, governance mandates, and national security directives of the geographical nation-state where it is collected or processed.'",
              { id: "mock-13-read-q01" }
            ),
            makeMCQ(
              "What maximum statutory financial penalty can be imposed for non-compliance under the EU GDPR?",
              "Up to 4% of global annual turnover or twenty million euros.",
              [
                "A flat fifty-dollar administrative court filing fee.",
                "Up to 90% of total company stock equity shares.",
                "Immediate imprisonment of all corporate shareholders."
              ],
              2, // C
              "The author explicitly notes: 'imposed Draconian financial penalties—up to four percent of global annual turnover or twenty million euros—for non-compliance.'",
              { id: "mock-13-read-q02" }
            ),
            makeMCQ(
              "How does a sovereign Data Mesh architecture solve cross-border data transfer restrictions?",
              "By localizing data storage and utilizing federated queries so algorithms travel to data rather than raw PII crossing borders.",
              [
                "By printing all customer database records onto physical paper and shipping them via cargo ships.",
                "By deleting all international business operations and firing all foreign employees.",
                "By ignoring international courts and hoping regulators never inspect cloud servers."
              ],
              3, // D
              "The passage explains: 'enterprises employ federated learning and distributed query federation. Algorithms travel to the data, rather than data traveling to the algorithms.'",
              { id: "mock-13-read-q03" }
            ),
            makeMCQ(
              "Why are manual compliance spreadsheets and annual audits deemed inadequate in modern enterprises?",
              "Because millions of microservices exchange billions of ephemeral API payloads daily, requiring automated computational governance.",
              [
                "Because spreadsheet software is legally prohibited across all European government offices.",
                "Because paper-based compliance auditors refuse to use computer monitors.",
                "Because all corporate compliance documents must be carved into physical stone tablets."
              ],
              0, // A
              "The final paragraph states: 'Manual compliance spreadsheets and annual audits are hopelessly inadequate in environments where millions of microservices exchange billions of ephemeral API payloads daily. Organizations must deploy automated data lineage engines.'",
              { id: "mock-13-read-q04" }
            ),
          ],
        },
        listening: {
          title: "Audio Executive Briefing: Global Data Protection Officer Steering Committee",
          audioTranscript: `Good morning, fellow steering committee leads. Welcome to our quarterly Enterprise Data Governance and Privacy Steering Council. I am Julian Mercer, Chief Data Governance Officer.\n\nToday, we must confront the implementation roadmap for our European Sovereign Data Zone ahead of the upcoming regulatory audit by the French CNIL authority in November.\n\nOver the past ninety days, our engineering squad has achieved significant architectural milestones. First, we have successfully migrated eighty-eight percent of all European customer transactional databases from our shared multi-tenant cluster into dedicated sovereign Frankfurt AWS availability zones. Parity synchronization checks confirm zero data corruption.\n\nHowever, our automated metadata scanner flagged a critical compliance gap last Thursday. It discovered that sixteen legacy marketing analytics pipelines are still transmitting unhashed European IP addresses and session tokens to our analytical data lake in Virginia. Under current European privacy jurisprudence, IP addresses constitute personal identifiable data, and transmitting them without explicit standard contractual clauses and end-to-end tokenization constitutes a direct regulatory infraction.\n\nTo remediate this vulnerability before our October audit freeze, I have authorized two emergency engineering directives. First, by this Friday at midnight, our platform team will deploy edge tokenization proxies across all European API gateways, replacing raw IP addresses with cryptographically salted ephemeral tokens before cross-region replication. Second, we will complete the remaining twelve percent of database migrations by October 15, ensuring 100% sovereign isolation.\n\nThese remediation actions will ensure our enterprise passes the CNIL inspection with zero material findings. Let us open the floor for technical questions.`,
          durationSeconds: 150,
          questions: [
            makeMCQ(
              "What percentage of European customer transactional databases had already been successfully migrated to Frankfurt?",
              "88%",
              ["25%", "50%", "100%"],
              2, // C
              "Julian Mercer states: 'First, we have successfully migrated eighty-eight percent of all European customer transactional databases from our shared multi-tenant cluster into dedicated sovereign Frankfurt AWS availability zones.'",
              { id: "mock-13-list-q01" }
            ),
            makeMCQ(
              "What critical compliance gap was detected by the automated metadata scanner?",
              "Sixteen legacy analytics pipelines were transmitting unhashed European IP addresses to Virginia.",
              [
                "The entire corporate intranet was hacked by overseas criminal syndicates.",
                "All customer credit card numbers were published on an open public website.",
                "All Frankfurt cloud servers had run out of physical hard drive storage space."
              ],
              3, // D
              "Julian notes: 'It discovered that sixteen legacy marketing analytics pipelines are still transmitting unhashed European IP addresses and session tokens to our analytical data lake in Virginia.'",
              { id: "mock-13-list-q02" }
            ),
            makeMCQ(
              "What technical solution will the platform team deploy by Friday midnight to remediate the cross-border IP transfer?",
              "Edge tokenization proxies that replace raw IPs with cryptographically salted ephemeral tokens.",
              [
                "Shutting down the entire European sales division permanently.",
                "Asking European customers to manually delete their own IP addresses.",
                "Transferring all database storage back to physical magnetic tape backups."
              ],
              0, // A
              "Julian specifies: 'our platform team will deploy edge tokenization proxies across all European API gateways, replacing raw IP addresses with cryptographically salted ephemeral tokens.'",
              { id: "mock-13-list-q03" }
            ),
            makeMCQ(
              "By what date will the remaining 12% of database migrations be finalized to ensure 100% sovereign isolation?",
              "October 15",
              ["By tomorrow morning", "December 31", "Next summer"],
              1, // B
              "The speaker confirms: 'Second, we will complete the remaining twelve percent of database migrations by October 15, ensuring 100% sovereign isolation.'",
              { id: "mock-13-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-13-spk-01",
            type: "speaking",
            prompt: "Explain to a client executive why adopting 'Privacy by Design' from the inception of software development is vastly more cost-effective than retrofitting compliance security after platform deployment.",
            context: "Contrast the minimal upfront cost of architecture threat modeling, schema tokenization, and automated access controls against the astronomical expense of emergency database refactoring, regulatory fines, and brand damage.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Principles of Privacy by Design", "Upfront threat modeling vs emergency retrofitting", "Comparing financial costs: proactive design vs regulatory fines & refactoring", "Client trust and competitive differentiation"],
            modelTranscript: "Incorporating Privacy by Design into software architecture from day one is not an administrative burden; it is one of the highest-leverage investments an enterprise can make. When engineering teams implement schema-level tokenization, automated access controls, and data minimization upfront during sprint planning, the cost is essentially zero—it is simply standard, disciplined software engineering. Conversely, attempting to retrofit privacy onto an existing production system is extraordinarily painful and expensive. It requires pausing product feature roadmaps, refactoring complex database schemas, retrofitting ephemeral encryption sidecars, and managing massive regression testing. Worse, if privacy vulnerabilities are discovered by regulatory authorities rather than internal tests, the company faces crippling fines of up to four percent of global turnover, mandatory public disclosures, and severe erosion of customer trust. Privacy by Design safeguards your balance sheet, your schedule, and your brand reputation.",
          },
          {
            id: "mock-13-spk-02",
            type: "speaking",
            prompt: "Describe how a global technology consultancy should guide an enterprise client who is caught between conflicting international data laws (e.g., US discovery subpoenas vs European GDPR data privacy restrictions).",
            context: "Scenario: A multinational corporation receives a US civil litigation discovery demand for employee communications that contain European PII protected under GDPR. Detail legal, technical, and governance mitigation steps.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Navigating international legal conflict of laws", "Technical data minimization and anonymization techniques", "Engaging specialized cross-border legal counsel", "Constructing a defensible, legally compliant disclosure protocol"],
            modelTranscript: "Navigating cross-border conflicts of law—such as a US judicial discovery order demanding documents protected under European GDPR directives—requires meticulous coordination between specialized legal counsel and enterprise data architects. Under European law, transferring unredacted employee communications to a foreign court without a valid transfer mechanism constitutes an illegal transfer carrying severe statutory penalties. To resolve this impasse, our consultancy implements a structured three-tier mitigation protocol. First, we engage joint legal counsel to petition the US court for a protective order acknowledging foreign statutory constraints. Second, our data engineering squad executes automated data minimization and cryptographic anonymization within European sovereign territory, stripping out all extraneous PII, sensitive employee metadata, and third-party references. Only the strictly relevant, redacted evidentiary dataset is packaged for legal production. Finally, we document this defensible process with full cryptographic audit lineage, demonstrating rigorous compliance with both judicial discovery and European privacy laws.",
          },
        ],
      },
    },

    // ==========================================
    // MOCK TEST 14: AI Adoption Ethics & Workforce Reskilling
    // ==========================================
    {
      id: "mock-14",
      testNumber: 14,
      title: "Mock Test 14: AI Adoption Ethics & Workforce Reskilling",
      difficulty: "Advanced",
      durationMinutes: 60,
      description: "Generative AI enterprise governance, algorithmic bias auditing, intellectual property protection, workforce reskilling, and responsible AI guardrails.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "Neither the algorithm development squad nor the AI ethics committee _____ willing to deploy the predictive model without bias testing.",
            "was",
            ["were", "are", "have been"],
            1, // B
            "In 'neither... nor' constructions, the verb agrees with the closer singular collective subject ('committee' -> 'was').",
            { id: "mock-14-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "hard" }
          ),
          makeMCQ(
            "Before the generative AI assistant was rolled out enterprise-wide, the risk management office _____ rigorous synthetic prompt injection tests.",
            "had executed",
            ["has executed", "executing", "executes"],
            2, // C
            "Past perfect ('had executed') is required for an action completed before the past milestone of enterprise-wide rollout.",
            { id: "mock-14-gram-02", type: "grammar", topic: "Tenses", difficulty: "hard" }
          ),
          makeMCQ(
            "Deploying foundation models responsibly requires _____ comprehensive audit of training data provenance.",
            "a",
            ["an", "the", "no article needed"],
            3, // D
            "'Comprehensive' begins with a consonant sound (/k/), requiring indefinite article 'a'.",
            { id: "mock-14-gram-03", type: "grammar", topic: "Articles", difficulty: "hard" }
          ),
          makeMCQ(
            "The corporate responsible AI policy adheres strictly _____ the ethical guidelines established by the European AI Act.",
            "to",
            ["with", "in", "by"],
            0, // A
            "The verb 'adheres' standardly pairs with the preposition 'to'.",
            { id: "mock-14-gram-04", type: "grammar", topic: "Prepositions", difficulty: "hard" }
          ),
          makeMCQ(
            "If the machine learning pipeline _____ statistically significant gender bias in credit scoring, automated deployment gates will halt the release.",
            "detects",
            ["detected", "will detect", "has detected"],
            1, // B
            "First conditional clause (If + present simple, will + verb) requires 'detects' for the singular subject 'pipeline'.",
            { id: "mock-14-gram-05", type: "grammar", topic: "Conditionals", difficulty: "hard" }
          ),
          makeMCQ(
            "The pilot deployment was suspended, _____ independent external auditors discovered data contamination in the training corpus.",
            "inasmuch as",
            ["although", "despite", "whereas"],
            2, // C
            "Causal conjunction 'inasmuch as' (meaning since or because) justifies the suspension of the deployment.",
            { id: "mock-14-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "hard" }
          ),
          makeMCQ(
            "Of all the retrieval-augmented generation frameworks evaluated, VectorShield exhibited the _____ hallucination rate.",
            "lowest",
            ["lower", "low", "more low"],
            3, // D
            "Superlative form 'lowest' is required when evaluating among all frameworks evaluated.",
            { id: "mock-14-gram-07", type: "grammar", topic: "Adjectives & Adverbs", difficulty: "hard" }
          ),
          makeMCQ(
            "Mandatory AI literacy and ethics certification modules _____ to all 12,000 corporate employees this quarter.",
            "are assigned",
            ["is assigned", "assigning", "assigned"],
            0, // A
            "Passive voice present simple plural ('are assigned') agrees with the plural subject 'modules'.",
            { id: "mock-14-gram-08", type: "grammar", topic: "Voice & Modals", difficulty: "hard" }
          ),
          makeMCQ(
            "The Chief AI Officer, _____ pioneering work in model explainability was recognized globally, will chair the symposium.",
            "whose",
            ["who", "whom", "which"],
            1, // B
            "Possessive relative pronoun 'whose' describes the pioneering work belonging to the Chief AI Officer.",
            { id: "mock-14-gram-09", type: "grammar", topic: "Pronouns & Relative Clauses", difficulty: "hard" }
          ),
          makeMCQ(
            "To safeguard intellectual property, our enterprise firewall must _____ unauthorized attempts to transmit proprietary code to public AI chatbots.",
            "intercept",
            ["intercepting", "intercepted", "interception"],
            2, // C
            "Modal auxiliary 'must' takes the base verb 'intercept' (meaning to block or prevent from reaching a destination).",
            { id: "mock-14-gram-10", type: "grammar", topic: "Business Vocabulary", difficulty: "hard" }
          ),
        ],
        writing: [
          {
            id: "mock-14-wri-01",
            type: "writing",
            taskType: "email",
            prompt: "Write an enterprise-wide executive guidance memo to all department leaders establishing clear guardrails for the use of Generative AI tools, addressing data privacy risks, intellectual property indemnity, and mandatory human-in-the-loop validation.",
            context: "Employees are using unsanctioned public AI tools. Guidance: zero client data in external public LLMs; use corporate enterprise-sanctioned LLM instance; all AI outputs must be validated by a human subject matter expert.",
            minWords: 90,
            maxWords: 160,
            recommendedMinutes: 10,
            scoringCriteria: ["Clear authoritative executive policy tone", "Explicit definition of forbidden vs sanctioned behaviors", "Concrete human-in-the-loop mandate", "Educational and empowering framing"],
            modelAnswer: "Executive Policy Directive: Enterprise Generative AI Adoption & Guardrails\n\nTo All Department Leaders,\n\nGenerative AI represents a transformative technological capability for our enterprise; however, realizing its potential requires uncompromising adherence to data security, customer trust, and ethical standards.\n\nEffective immediately, all teams must observe the following three mandatory guardrails:\n\n1. Zero Client Data on Public Tools: Transmitting client confidential data, customer PII, or proprietary source code into public, consumer-tier AI chatbots is strictly prohibited.\n2. Enterprise-Sanctioned Instances Only: All generative AI tasks must be routed exclusively through our internal, tenant-isolated AI portal, where zero data-retention and non-training covenants are legally enforced.\n3. Mandatory Human-in-the-Loop Validation: AI-generated artifacts—whether technical code, client deliverables, or analytical reports—must undergo rigorous review and verification by a qualified human practitioner prior to publication or client delivery.\n\nLet us innovate boldly while safeguarding our corporate integrity.\n\nSincerely,\nChief AI & Technology Officer",
          },
          {
            id: "mock-14-wri-02",
            type: "writing",
            taskType: "summary",
            prompt: "Summarize the ethical concerns surrounding algorithmic bias in machine learning and explain how organizations implement fairness metrics (such as demographic parity and equalized odds) to prevent discrimination in automated decision systems.",
            context: "Focus on biased historical training data, proxy discrimination variables, mathematical fairness metrics, and regular model auditing.",
            minWords: 75,
            maxWords: 130,
            recommendedMinutes: 10,
            scoringCriteria: ["Accurate articulation of algorithmic bias mechanics", "Precise mathematical/ethical fairness terminology", "Coherent structural analysis", "Flawless academic style"],
            modelAnswer: "Algorithmic bias occurs when machine learning models perpetuate or amplify systemic human prejudices embedded in historical training datasets. When historical data reflects societal inequalities—such as lending discrimination or biased recruitment patterns—models mistakenly encode these historical anomalies as predictive correlations. Even when protected attributes like gender or ethnicity are removed, models exploit proxy variables like postal codes or educational institutions to perpetuate disparate impact. To combat this, mature organizations integrate mathematical fairness constraints into their model development lifecycle. Frameworks utilize metrics such as Demographic Parity (ensuring equal selection rates across cohorts) and Equalized Odds (guaranteeing balanced false-positive and true-positive rates). By combining these mathematical guardrails with continuous bias auditing, organizations eliminate discrimination and establish trustworthy algorithmic governance.",
          },
        ],
        situational: [
          makeSituational(
            "You discover that a developer on your project has been copying proprietary client banking code into an open, public consumer AI chat tool to generate automated test cases.",
            "Instruct the developer to halt the practice immediately, notify your security and legal officers, assess whether sensitive cryptographic keys or client IP were exposed, and migrate the developer to the enterprise's private, isolated AI environment.",
            [
              "Praise the developer for their ingenuity and encourage the rest of the team to use public AI tools too.",
              "Report the developer to international intelligence agencies as an undercover corporate spy.",
              "Delete the developer's laptop hard drive remotely without investigating what code was copied."
            ],
            3, // D
            "Halting unauthorized public LLM usage, assessing exposure with security/legal leadership, and transitioning developers to secure enterprise AI instances protects client IP responsibly.",
            { id: "mock-14-sit-01" }
          ),
          makeSituational(
            "A prospective enterprise client insists on deploying an AI-powered resume screening tool that your data science team's audit proved has a 25% lower recommendation rate for female engineering candidates.",
            "Present the audit data transparently to the client executive, explain the severe legal, regulatory, and ethical liabilities under anti-discrimination employment laws, and refuse to deploy the model until the algorithmic bias is fully remediated.",
            [
              "Deploy the biased model immediately because the client is paying for it and the customer is always right.",
              "Falsify the audit charts to make it look like the model is completely unbiased.",
              "Tell the client that female engineers do not exist anyway, so the model must be correct."
            ],
            0, // A
            "Refusing to deploy biased screening algorithms and educating clients on legal and ethical liabilities upholds professional integrity and civil rights compliance.",
            { id: "mock-14-sit-02" }
          ),
          makeSituational(
            "Junior employees express deep anxiety that the introduction of generative coding assistants will render their jobs obsolete, leading to widespread demoralization and resistance.",
            "Organize an open town hall explaining that AI tools are designed to augment human developers by automating boilerplate syntax, launch an enterprise-sponsored reskilling academy, and highlight new high-value career pathways in prompt engineering and AI governance.",
            [
              "Confirm their worst fears and tell them that half the junior developers will be fired next month.",
              "Ban all computers and artificial intelligence tools from the company permanently.",
              "Ignore their anxiety and let employee turnover destroy the team's project delivery."
            ],
            1, // B
            "Transparent leadership, empathetic reframing of AI as augmentation, and concrete reskilling academies relieve workforce anxiety and foster proactive adoption.",
            { id: "mock-14-sit-03" }
          ),
          makeSituational(
            "An AI-generated executive briefing document contains a completely fabricated ('hallucinated') financial statistic that was almost published in a quarterly shareholder release.",
            "Halt publication of the release immediately, verify and replace the hallucinated statistic with audited financial records, and enforce a mandatory rule that every AI-generated claim must be cross-checked against source primary documents.",
            [
              "Publish the fake statistic anyway and hope that stock market investors never notice the error.",
              "Blame the computer software company publicly and file a multi-billion dollar lawsuit.",
              "Delete all financial records from the company accounting department to match the fake statistic."
            ],
            2, // C
            "Immediate factual correction and enforcing rigorous human-in-the-loop cross-referencing against primary financial records prevents hallucinated data from contaminating disclosures.",
            { id: "mock-14-sit-04" }
          ),
          makeSituational(
            "Your company's marketing team wants to use deepfake synthetic avatars of famous celebrities without their permission in an online video advertising campaign.",
            "Intervene immediately with marketing leadership and corporate legal counsel, halt the campaign, and explain that using unauthorized likenesses violates personality rights, copyright laws, and corporate ethical guidelines.",
            [
              "Encourage marketing to launch the campaign because celebrity deepfakes generate viral social media views.",
              "Ask marketing to make a deepfake video of your personal enemies to embarrass them online.",
              "Pretend you never saw the campaign and allow the legal disaster to unfold."
            ],
            3, // D
            "Halting unauthorized synthetic likeness campaigns protects the organization from catastrophic intellectual property lawsuits and severe brand reputational damage.",
            { id: "mock-14-sit-05" }
          ),
          makeSituational(
            "A client manager asks your team to scrape hundreds of copyrighted technical books from pirate websites to build a custom private language model for their internal documentation.",
            "Respectfully and firmly decline, explain that scraping copyrighted materials without licenses creates immense intellectual property infringement liabilities, and recommend licensed commercial training datasets or synthetic generation techniques.",
            [
              "Download the pirated books immediately using your personal home internet connection.",
              "Steal the physical books from the public library and scan them with office photocopiers.",
              "Agree to the client's request in exchange for a private cash payment."
            ],
            0, // A
            "Firmly declining unlawful data acquisition while offering compliant alternatives (licensed datasets or synthetic data) protects client and firm from copyright infringement liabilities.",
            { id: "mock-14-sit-06" }
          ),
        ],
        reading: {
          title: "The Ethics of Autonomous Intelligence: Algorithmic Accountability in the Age of Generative AI",
          text: `The rapid democratization of foundation models and Generative Artificial Intelligence (GenAI) has propelled society into an era of unprecedented computational capability. Tasks that once demanded weeks of human cognitive effort—writing complex software, synthesizing legal jurisprudence, diagnosing medical imagery, and crafting multimodal content—can now be executed in seconds. Yet, this explosion of generative power is accompanied by profound ethical, legal, and sociological quandaries. As enterprise institutions increasingly delegate operational decisions to stochastic deep learning systems, the imperatives of algorithmic accountability, fairness, and safety transition from abstract philosophical inquiries into urgent corporate governance priorities.\n\nAt the forefront of technical AI ethics is the persistent challenge of algorithmic bias and hallucination. Deep neural networks do not possess semantic understanding; they are statistical prediction engines trained on internet-scale corpora that inherently mirror human historical biases, stereotypes, and cultural inequities. When deployed in high-stakes domains—such as credit risk assessment, predictive policing, or automated recruitment—unconstrained models can perpetuate and amplify systemic discrimination under the deceptive veneer of mathematical objectivity. Furthermore, the autoregressive probabilistic nature of Large Language Models (LLMs) induces 'hallucinations'—the fluent, authoritative generation of completely fabricated facts, non-existent citations, and erroneous code snippets.\n\nTo govern these vulnerabilities, regulatory architectures worldwide are transitioning from voluntary ethical codes to enforceable statutory mandates. The European Union's Artificial Intelligence Act represents the global vanguard of this shift. Enacting a risk-based categorization, the AI Act strictly prohibits systems presenting unacceptable risks (such as social scoring and cognitive behavioral manipulation), while imposing rigorous compliance obligations on 'high-risk' AI systems. High-risk systems must demonstrate continuous risk management, verifiable training data quality, automated event logging, and guaranteed human-in-the-loop oversight throughout their lifecycle. Crucially, non-compliance attracts fines reaching up to seven percent of global annual turnover or thirty-five million euros.\n\nFor enterprise technology leaders, navigating this landscape necessitates establishing a holistic Responsible AI Framework. First, organizations must enforce algorithmic transparency and explainability, leveraging interpretability frameworks like SHAP and LIME to demystify black-box neural networks. Second, training and retrieval pipelines must incorporate rigorous data lineage tracking and toxic content filtering. Third, organizations must prioritize the human dimension through comprehensive workforce reskilling. Rather than displacing knowledge workers, responsible AI deployment augments human intellect, automating repetitive cognitive toil while elevating human practitioners into strategic orchestrators, ethical arbiters, and domain experts.`,
          questions: [
            makeMCQ(
              "What fundamental architectural characteristic of Large Language Models (LLMs) causes them to generate 'hallucinations'?",
              "Their autoregressive probabilistic nature where tokens are generated based on statistical predictions rather than semantic understanding.",
              [
                "Their deliberate programming by malicious software engineers to deceive end users.",
                "The physical overheating of graphics processing units in corporate data centers.",
                "A shortage of electrical power across international telecommunications grids."
              ],
              1, // B
              "The text explains: 'Furthermore, the autoregressive probabilistic nature of Large Language Models (LLMs) induces \"hallucinations\"—the fluent, authoritative generation of completely fabricated facts... without semantic understanding.'",
              { id: "mock-14-read-q01" }
            ),
            makeMCQ(
              "What maximum statutory penalty does the European Union AI Act impose for non-compliance with high-risk obligations?",
              "Up to 7% of global annual turnover or thirty-five million euros.",
              [
                "A formal written warning letter from the local municipal police.",
                "Up to fifty percent of all company hardware computers confiscated.",
                "A flat five-hundred-euro administrative fine."
              ],
              2, // C
              "The passage clearly states: 'Crucially, non-compliance attracts fines reaching up to seven percent of global annual turnover or thirty-five million euros.'",
              { id: "mock-14-read-q02" }
            ),
            makeMCQ(
              "What requirement does the EU AI Act mandate for all systems categorized as 'high-risk'?",
              "Continuous risk management, data quality verification, event logging, and guaranteed human-in-the-loop oversight.",
              [
                "Immediate public release of all proprietary company source code to the public internet.",
                "Mandatory shutdown of all computers every evening at 5:00 PM.",
                "Total prohibition of any software updates for ten consecutive calendar years."
              ],
              3, // D
              "The author notes: 'High-risk systems must demonstrate continuous risk management, verifiable training data quality, automated event logging, and guaranteed human-in-the-loop oversight.'",
              { id: "mock-14-read-q03" }
            ),
            makeMCQ(
              "How does responsible AI deployment approach the human workforce according to the text?",
              "By augmenting human intellect and elevating workers into strategic orchestrators and ethical arbiters through reskilling.",
              [
                "By firing all human employees within six months to replace them with autonomous bots.",
                "By forbidding human employees from learning how computer programming works.",
                "By reducing all employee wages by 80% to pay for cloud computing expenses."
              ],
              0, // A
              "The final sentence states: 'responsible AI deployment augments human intellect, automating repetitive cognitive toil while elevating human practitioners into strategic orchestrators, ethical arbiters, and domain experts.'",
              { id: "mock-14-read-q04" }
            ),
          ],
        },
        listening: {
          title: "Audio Executive Briefing: Corporate Responsible AI Steering Committee",
          audioTranscript: `Good morning, fellow committee members. Welcome to our quarterly Corporate Responsible AI Steering Review. I am Dr. Marcus Thorne, Chief AI Ethics Officer.\n\nToday, I want to brief the council on our operational progress regarding our Enterprise Foundation Model Governance framework.\n\nFirst, regarding internal adoption: over the past sixty days, our private tenant AI platform has onboarded 8,400 active corporate users across our engineering, marketing, and legal squads. By routing all queries through our isolated Azure OpenAI enclave, we have successfully prevented proprietary data leakage while achieving a 42% acceleration in routine software code scaffolding.\n\nHowever, our algorithmic bias task force uncovered a critical anomaly during pre-deployment testing of our Automated Customer Credit Scoring model. When evaluating synthetic applicant profiles with identical financial credentials, the model assigned an eighteen percent lower credit limit recommendation to zip codes associated with predominantly minority demographics. Root cause investigation confirmed that the model's training dataset ingested historical lending data from 2012 to 2018, inadvertently encoding legacy redlining practices through geographic proxy variables.\n\nIn accordance with our enterprise AI governance charter, I have placed an immediate deployment freeze on this credit model. We have initiated a thirty-day remediation sprint: first, we will apply adversarial debiasing algorithms to neutralize proxy variables, and second, we will retrain the model with equalized odds fairness constraints. The model will not be presented for production sign-off until demographic parity variance drops below two percent.\n\nThank you, and I invite questions from our risk and compliance partners.`,
          durationSeconds: 150,
          questions: [
            makeMCQ(
              "What percentage productivity acceleration was recorded in routine software scaffolding after deploying the private AI enclave?",
              "42% acceleration",
              ["10% acceleration", "85% acceleration", "200% acceleration"],
              2, // C
              "Dr. Marcus Thorne states: 'achieving a 42% acceleration in routine software code scaffolding.'",
              { id: "mock-14-list-q01" }
            ),
            makeMCQ(
              "What root cause was identified for the 18% credit limit disparity across minority zip codes?",
              "Training datasets ingested historical lending data encoding legacy redlining through geographic proxy variables.",
              [
                "A malicious cyber attack by foreign computer hackers targeting the bank.",
                "A physical power surge in the primary credit reporting data center.",
                "A coding mistake made by a summer intern in the front-end user interface."
              ],
              3, // D
              "Dr. Thorne explains: 'Root cause investigation confirmed that the model's training dataset ingested historical lending data from 2012 to 2018, inadvertently encoding legacy redlining practices through geographic proxy variables.'",
              { id: "mock-14-list-q02" }
            ),
            makeMCQ(
              "What demographic parity variance threshold must the model achieve before it can be presented for production sign-off?",
              "Variance must drop below 2%",
              ["Variance must drop below 15%", "Variance must be exactly 0%", "Variance below 25% is acceptable"],
              0, // A
              "Dr. Thorne explicitly states: 'The model will not be presented for production sign-off until demographic parity variance drops below two percent.'",
              { id: "mock-14-list-q03" }
            ),
            makeMCQ(
              "How many active corporate users were onboarded onto the private tenant AI platform over the past sixty days?",
              "8,400 active corporate users",
              ["500 users", "1,200 users", "50,000 users"],
              1, // B
              "The speaker confirms: 'our private tenant AI platform has onboarded 8,400 active corporate users across our engineering, marketing, and legal squads.'",
              { id: "mock-14-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-14-spk-01",
            type: "speaking",
            prompt: "Deliver a compelling 90-second address to an executive client steering committee explaining why implementing responsible AI guardrails accelerates commercial innovation rather than slowing it down.",
            context: "Debunk the myth that AI ethics is mere bureaucratic red tape; frame guardrails as seatbelts and brakes that enable high-speed, confident enterprise scaling without catastrophic regulatory or reputational crashes.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Debunking the 'ethics vs innovation' false dichotomy", "The automotive analogy: brakes and seatbelts enable high speed", "Mitigating existential regulatory and brand reputational risks", "Building enduring customer trust as a competitive moat"],
            modelTranscript: "In the technology industry, there is a pervasive misconception that ethical AI governance is a bureaucratic brake pedal that stifles competitive innovation. In reality, the exact opposite is true. Consider why a Formula One race car has world-class brakes: it is not so the driver moves slowly; it is so the driver can race at 200 miles per hour with the absolute confidence that they can navigate sharp turns without crashing. Responsible AI guardrails are the high-performance brakes of enterprise innovation. When an organization deploys foundation models without algorithmic bias auditing, toxic output filtering, and data privacy firewalls, they are driving blindfolded toward catastrophic regulatory penalties, multi-million dollar copyright lawsuits, and brand-destroying public scandals. By establishing rigorous data provenance, automated fairness checks, and human-in-the-loop validation upfront, our enterprise builds a resilient, trustworthy foundation. This allows your squads to deploy AI capabilities rapidly, capture market share with confidence, and establish customer trust as an unassailable competitive advantage.",
          },
          {
            id: "mock-14-spk-02",
            type: "speaking",
            prompt: "Describe how an organization should structure an enterprise-wide workforce reskilling program to prepare employees for collaboration with generative AI systems.",
            context: "Detail a comprehensive curriculum: basic AI literacy, prompt engineering, critical verification of hallucinations, ethical awareness, and role-specific workflows.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Tiered curriculum design (foundational to advanced)", "Practical prompt engineering & contextual grounding", "Critical thinking & hallucination verification protocols", "Fostering psychological safety and lifelong learning"],
            modelTranscript: "To build a truly AI-empowered enterprise, organizations must move beyond generic software demos and deploy a structured, multi-tier workforce reskilling academy. The curriculum should be structured across three progressive levels. Level One focuses on Foundational AI Literacy for all employees, demystifying how neural networks operate, explaining probabilistic token prediction, and establishing strict confidentiality hygiene. Level Two provides Role-Specific Application Mastery, teaching software engineers pair-programming with AI assistants, marketing teams retrieval-augmented synthesis, and legal analysts structured document review. Crucially, Level Three emphasizes Critical Verification and Cognitive Skepticism: training every employee never to accept AI outputs uncritically, teaching rigorous fact-checking protocols, and enforcing human-in-the-loop sign-off. By pairing this structured training with gamified hackathons and peer learning guilds, organizations cultivate a culture of psychological safety, turning workforce anxiety into widespread creative empowerment.",
          },
        ],
      },
    },

    // ==========================================
    // MOCK TEST 15: Global Multi-Region Operations & M&A Integration
    // ==========================================
    {
      id: "mock-15",
      testNumber: 15,
      title: "Mock Test 15: Global Multi-Region Operations & M&A Integration",
      difficulty: "Advanced",
      durationMinutes: 60,
      description: "Post-merger systems integration, global operational harmonization, multi-currency ERP consolidation, and enterprise cultural synthesis.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "Neither the acquired firm's engineering directors nor the integration program manager _____ satisfied with the migration timetable.",
            "was",
            ["were", "are", "have been"],
            1, // B
            "In 'neither... nor' constructions, the verb agrees with the closer singular subject ('program manager' -> 'was').",
            { id: "mock-15-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "hard" }
          ),
          makeMCQ(
            "Before the global financial closing of the merger, our enterprise architecture squad _____ both corporate IT catalogs.",
            "had harmonized",
            ["has harmonized", "harmonizing", "harmonizes"],
            2, // C
            "Past perfect ('had harmonized') expresses an action completed prior to the past milestone of the merger financial closing.",
            { id: "mock-15-gram-02", type: "grammar", topic: "Tenses", difficulty: "hard" }
          ),
          makeMCQ(
            "Consolidating global ERP systems requires _____ unified chart of accounts across all twenty-four international subsidiaries.",
            "a",
            ["an", "the", "no article needed"],
            3, // D
            "'Unified' begins with a consonant semivowel sound (/j/), requiring the indefinite article 'a'.",
            { id: "mock-15-gram-03", type: "grammar", topic: "Articles", difficulty: "hard" }
          ),
          makeMCQ(
            "The merged enterprise operating model conforms strictly _____ antitrust regulatory covenants ratified by the trade commission.",
            "to",
            ["with", "in", "by"],
            0, // A
            "The verb 'conforms' standardly pairs with the preposition 'to'.",
            { id: "mock-15-gram-04", type: "grammar", topic: "Prepositions", difficulty: "hard" }
          ),
          makeMCQ(
            "Were the integration steering committee _____ the cutover by one sprint, downstream supply chain disruptions would be avoided.",
            "to defer",
            ["defers", "deferred", "will defer"],
            1, // B
            "Formal inverted second conditional ('Were [subject] to [infinitive]') requires 'to defer'.",
            { id: "mock-15-gram-05", type: "grammar", topic: "Conditionals", difficulty: "hard" }
          ),
          makeMCQ(
            "The cross-border platform consolidation was completed ahead of schedule, _____ complex legacy database schema mismatches.",
            "notwithstanding",
            ["because", "therefore", "since"],
            2, // C
            "Concessive preposition 'notwithstanding' (meaning despite) connects the early completion with the complex schema mismatches.",
            { id: "mock-15-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "hard" }
          ),
          makeMCQ(
            "Among all four international systems integration blueprints reviewed, the hybrid federated approach proved to be _____ resilient.",
            "most",
            ["more", "much", "very"],
            3, // D
            "Superlative form 'most resilient' is required when comparing among all four blueprints.",
            { id: "mock-15-gram-07", type: "grammar", topic: "Adjectives & Adverbs", difficulty: "hard" }
          ),
          makeMCQ(
            "Consolidated multi-currency balance sheets and tax filings _____ directly to international regulatory authorities quarterly.",
            "are submitted",
            ["is submitted", "submitting", "submitted"],
            0, // A
            "Passive voice present simple plural ('are submitted') matches the plural compound subject 'balance sheets and tax filings'.",
            { id: "mock-15-gram-08", type: "grammar", topic: "Voice & Modals", difficulty: "hard" }
          ),
          makeMCQ(
            "The Chief Integration Officer, _____ diplomatic acumen united two previously rival corporate cultures, was celebrated at the gala.",
            "whose",
            ["who", "whom", "which"],
            1, // B
            "Possessive relative pronoun 'whose' describes the diplomatic acumen belonging to the Chief Integration Officer.",
            { id: "mock-15-gram-09", type: "grammar", topic: "Pronouns & Relative Clauses", difficulty: "hard" }
          ),
          makeMCQ(
            "To capture planned merger synergies, the enterprise must _____ redundant software licensing and consolidate data center footprints.",
            "rationalize",
            ["rationalizing", "rationalized", "rationalization"],
            2, // C
            "Modal auxiliary 'must' takes the base verb 'rationalize' (meaning to reorganize or eliminate unnecessary duplication).",
            { id: "mock-15-gram-10", type: "grammar", topic: "Business Vocabulary", difficulty: "hard" }
          ),
        ],
        writing: [
          {
            id: "mock-15-wri-01",
            type: "writing",
            taskType: "email",
            prompt: "Write a high-stakes integration status email to the joint M&A Steering Committee representing both the acquiring and acquired corporate entities, summarizing the Day-100 IT Harmonization progress, addressing ERP consolidation milestones, and recommending a risk mitigation strategy for payroll data migration.",
            context: "Day-100 milestone achieved. Identity and email systems 100% unified. Global ERP consolidation 70% complete. Payroll migration carries high risk of tax calculation variance across European entities. Recommendation: 30-day dual-run payroll cycle.",
            minWords: 90,
            maxWords: 160,
            recommendedMinutes: 10,
            scoringCriteria: ["Diplomatic, unifying executive tone", "Concrete progress metrics against Day-100 milestones", "Proactive risk identification with payroll", "Actionable, prudent mitigation recommendation"],
            modelAnswer: "Joint M&A Steering Committee,\n\nSubject: Day-100 IT Harmonization Progress & Payroll Migration Governance\n\nI am pleased to report that as of our Day-100 integration milestone, our unified technology squads have completed 100% of identity directory federation, unified email domain migration, and corporate network interconnectivity across all twenty-four international offices.\n\nOur Global ERP Consolidation stands at 70% completion, with general ledger and procurement modules operating seamlessly on our shared platform. However, our technical risk audit flags significant operational vulnerability in migrating European subsidiary payroll engines due to intricate localized statutory tax rules.\n\nTo safeguard against employee payroll disruptions and tax compliance penalties, we strongly recommend executing a 30-day dual-run parallel cycle for the upcoming month-end payroll. Operating both the legacy and target payroll pipelines concurrently will validate exact financial parity before permanently decommissioning legacy infrastructure.\n\nWe look forward to presenting detailed ledger reconciliations at Thursday's executive session.\n\nWarm regards,\nLead M&A Systems Integration Partner",
          },
          {
            id: "mock-15-wri-02",
            type: "writing",
            taskType: "summary",
            prompt: "Summarize the primary drivers of IT synergy failure in post-merger integration and explain why cultural integration and talent retention are as crucial as technical systems consolidation.",
            context: "Focus on technical debt discovery, conflicting architectural paradigms, cultural alienation, key engineer attrition, and delayed synergy realization.",
            minWords: 75,
            maxWords: 130,
            recommendedMinutes: 10,
            scoringCriteria: ["Rigorous strategic M&A terminology", "Balanced technical and human factor analysis", "Logical structure and coherence", "Flawless executive English style"],
            modelAnswer: "Mergers and acquisitions frequently fail to realize projected IT synergies due to a toxic confluence of technical and cultural impediments. On the technical front, acquiring enterprises frequently discover severe unrecorded technical debt, conflicting architectural paradigms, and incompatible data schemas within the acquired firm, triggering massive cost overruns. However, empirical studies reveal that human and cultural friction is even more lethal to synergy capture. When acquiring leadership imposes rigid architectural standards through top-down mandates, acquired engineers experience profound cultural alienation and loss of autonomy. This triggers the attrition of vital key talent—the very architects who possess irreplaceable institutional knowledge regarding core systems. Without these key practitioners, technical integration grinds to an agonizing halt, permanently obliterating anticipated shareholder synergies.",
          },
        ],
        situational: [
          makeSituational(
            "Following an enterprise acquisition, the engineering team of the acquired company threatens to resign en masse because your company's PMO is forcing them to abandon their agile workflows and adopt rigid waterfall reporting templates.",
            "Intervene with PMO leadership immediately, halt the forced imposition of bureaucratic waterfall templates, preserve the acquired team's agile autonomy, and co-design a lightweight integration reporting bridge that satisfies executive governance without suffocating engineering culture.",
            [
              "Accept all of their resignations immediately and hire cheap inexperienced replacements off the street.",
              "Threaten the acquired engineers with legal lawsuits for daring to complain about company policies.",
              "Tell the acquired engineers that they must submit to corporate authority without asking questions."
            ],
            3, // D
            "Protecting acquired engineering autonomy, halting alienating bureaucracy, and co-designing lightweight governance bridges prevents catastrophic talent attrition during M&A integrations.",
            { id: "mock-15-sit-01" }
          ),
          makeSituational(
            "During post-merger database consolidation, your data engineers discover that the acquired company has been storing 200,000 legacy customer records in plaintext without password hashing or encryption.",
            "Quarantine the plaintext database immediately, restrict network access, notify the joint Chief Information Security Officer, execute immediate cryptographic hashing and AES-256 encryption, and initiate a forensic audit to verify whether the data was previously compromised.",
            [
              "Leave the plaintext records as they are because retrofitting encryption will take two weeks of engineering effort.",
              "Upload the unencrypted database to a public file-sharing website so everyone can see the acquired company's mistake.",
              "Immediately fire all developers who ever worked at the acquired company without an investigation."
            ],
            0, // A
            "Immediate quarantine, cryptographic remediation, and forensic audit of legacy unencrypted records mitigates catastrophic compliance and cybersecurity exposure in acquired entities.",
            { id: "mock-15-sit-02" }
          ),
          makeSituational(
            "Two executive vice presidents from the merging firms argue fiercely over whose legacy cloud ERP software should become the enterprise standard, bringing integration decisions to a complete standstill.",
            "Establish an objective, third-party architectural evaluation framework comparing both ERP platforms across total cost of ownership, scalability, regulatory compliance, and migration complexity, and present the quantitative findings to the joint CEO committee.",
            [
              "Tell the two VPs to settle their argument with a physical boxing match in the corporate cafeteria.",
              "Flip a coin in secret and pick an ERP system without telling anyone why.",
              "Deploy both ERP systems permanently across the company, doubling corporate licensing and operating costs forever."
            ],
            1, // B
            "Depersonalizing executive technology disputes through objective third-party architectural criteria and quantitative total cost of ownership (TCO) frameworks breaks political standstills.",
            { id: "mock-15-sit-03" }
          ),
          makeSituational(
            "A manager at the acquired company is actively advising their direct reports to hide custom internal software tools from your integration audit so they won't be replaced by enterprise systems.",
            "Meet privately with the manager, understand their fears regarding tool retirement, explain that audits identify capabilities to preserve and scale rather than destroy, and involve them directly in the application rationalization task force.",
            [
              "Have corporate security escort the manager out of the building and fire them immediately without speaking to them.",
              "Ignore the secret tools and let the company operate with unmonitored shadow IT indefinitely.",
              "Publicly humiliate the manager during the global town hall meeting."
            ],
            2, // C
            "Addressing underlying fears of obsolescence and co-opting skeptical leaders into the application rationalization task force dismantles shadow IT resistance constructively.",
            { id: "mock-15-sit-04" }
          ),
          makeSituational(
            "Your integration squad is scheduled to execute a massive ERP database cutover on a major religious holiday celebrated by 80% of the acquired firm's overseas engineering workforce.",
            "Reschedule the cutover window immediately, consult international regional leadership to align on a mutually respectful date, and establish a diverse global scheduling calendar to respect cultural observances.",
            [
              "Force the overseas engineers to work on their sacred holiday and threaten to fire anyone who attends religious services.",
              "Cancel the merger entirely and blame the overseas engineers for having holidays.",
              "Execute the cutover with zero engineers present and hope that the computer scripts run themselves."
            ],
            3, // D
            "Demonstrating cultural respect by rescheduling cutover windows around regional holidays builds vital trust and preserves team goodwill in global operations.",
            { id: "mock-15-sit-05" }
          ),
          makeSituational(
            "Following an international acquisition, you notice that team members from the European division rarely speak during global cross-functional calls dominated by aggressive North American speakers.",
            "Implement inclusive meeting facilitation protocols, such as structured round-robin input, asynchronous shared collaboration docs, and dedicated breakout retrospectives, ensuring all regional perspectives are heard.",
            [
              "Assume that European team members have nothing interesting to say and stop inviting them to meetings.",
              "Shout at the North American speakers and ban them from speaking in English.",
              "Cancel all global meetings permanently and communicate solely through automated robot voice messages."
            ],
            0, // A
            "Instituting structured round-robin facilitation and asynchronous collaboration channels bridges cultural communication styles and ensures equitable global participation.",
            { id: "mock-15-sit-06" }
          ),
        ],
        reading: {
          title: "The Mechanics of Post-Merger Enterprise Harmonization: Capturing IT Synergies while Preserving Talent",
          text: `In corporate finance and corporate development, Mergers and Acquisitions (M&A) are heralded as the ultimate engine of inorganic enterprise growth. Billions of dollars are deployed to acquire complementary market share, proprietary intellectual property, and international distribution channels. In virtually every major acquisition thesis presented to boardrooms and institutional investors, 'IT and Operational Synergies' represent a cornerstone rationale. Synergies are projected through consolidating redundant software licensing, retiring duplicative cloud data centers, harmonizing enterprise resource planning (ERP) platforms, and streamlining cross-functional engineering organizations.\n\nYet, empirical data reveals that over sixty-five percent of M&A integrations fail to achieve their projected IT synergy targets within the committed investment timeframe. The root causes of synergy destruction span technical, governance, and sociological domains. At the technical layer, pre-acquisition technical due diligence is almost universally truncated. In the rush to consummate deals, acquiring executives inspect high-level software catalogs and balance sheets but fail to conduct deep architectural code reviews. Post-closing, engineering teams uncover catastrophic technical debt, undocumented spaghetti integrations, unpatched security vulnerabilities, and brittle database dependencies that require millions of dollars in unexpected capital remediation before consolidation can even commence.\n\nAt the governance layer, post-merger integration offices frequently fall victim to the 'Big Bang Fallacy.' In an aggressive effort to demonstrate immediate synergy capture, leadership attempts to force rapid, simultaneous consolidation of core transactional systems—such as ERP, CRM, and payroll—across international subsidiaries. This abrupt cutover inevitably triggers severe operational disruptions: miscalculated customer billing, halted supply chain manufacturing, and regulatory reporting breaches. Mature integration leaders instead adopt a phased, iterative 'harmonization bridge.' They prioritize rapid directory and identity federation on Day 1, operate core platforms in parallel dual-run configurations, and execute database migrations incrementally by business domain.\n\nUltimately, however, the most profound determinant of M&A success is human and cultural synthesis. When an enterprise is acquired, employees experience profound existential vulnerability. If the acquiring firm imposes its corporate culture through authoritarian top-down fiat—disparaging the acquired firm's established methodologies, dismantling their autonomous tooling, and sidelining their technical leadership—the acquired organization's premier engineering talent will swiftly exit for competitor firms. In modern digital enterprises, where intellectual capital resides in the minds of engineers rather than physical machinery, the loss of key personnel destroys the foundational value of the acquisition. True integration success requires empathetic cultural partnership, bidirectional knowledge exchange, and deliberate talent retention governance.`,
          questions: [
            makeMCQ(
              "Why is pre-acquisition technical due diligence almost universally truncated according to the text?",
              "Because in the rush to close deals, executives inspect high-level catalogs but omit deep architectural code reviews.",
              [
                "Because software engineering code reviews are legally banned under international commercial law.",
                "Because computer software never contains bugs or technical debt prior to acquisitions.",
                "Because corporate lawyers are physically incapable of reading software architecture slides."
              ],
              1, // B
              "The passage states: 'pre-acquisition technical due diligence is almost universally truncated. In the rush to consummate deals, acquiring executives inspect high-level software catalogs and balance sheets but fail to conduct deep architectural code reviews.'",
              { id: "mock-15-read-q01" }
            ),
            makeMCQ(
              "What operational flaw does the author describe as the 'Big Bang Fallacy' in post-merger governance?",
              "Attempting rapid, simultaneous consolidation of core transactional systems across all international subsidiaries.",
              [
                "The scientific theory that the universe was created billions of years ago by an explosion.",
                "Purchasing thousands of firework rockets to celebrate the signing of the acquisition contract.",
                "Refusing to spend any corporate money on computer hardware or cloud hosting."
              ],
              2, // C
              "The text explains: 'post-merger integration offices frequently fall victim to the \"Big Bang Fallacy.\" In an aggressive effort to demonstrate immediate synergy capture, leadership attempts to force rapid, simultaneous consolidation of core transactional systems... across international subsidiaries.'",
              { id: "mock-15-read-q02" }
            ),
            makeMCQ(
              "According to the text, what occurs when an acquiring firm imposes its culture through authoritarian top-down fiat?",
              "The acquired organization's premier engineering talent exits swiftly for competitor firms, destroying acquisition value.",
              [
                "The company's stock price immediately doubles on all international stock exchanges.",
                "All software code automatically rewrites itself into modern programming languages.",
                "Government regulatory agencies grant the company lifetime immunity from all taxes."
              ],
              3, // D
              "The author notes: 'the acquired organization's premier engineering talent will swiftly exit for competitor firms... the loss of key personnel destroys the foundational value of the acquisition.'",
              { id: "mock-15-read-q03" }
            ),
            makeMCQ(
              "What phased approach do mature M&A integration leaders adopt instead of abrupt cutovers?",
              "A phased harmonization bridge prioritizing identity federation, parallel dual-run configurations, and domain-by-domain migrations.",
              [
                "Deleting all acquired computer databases immediately on Day 1 without backups.",
                "Permanently halting all corporate operations and firing all employees worldwide.",
                "Ignoring the acquired company completely and never integrating any computer systems."
              ],
              0, // A
              "The third paragraph states: 'Mature integration leaders instead adopt a phased, iterative \"harmonization bridge.\" They prioritize rapid directory and identity federation on Day 1, operate core platforms in parallel dual-run configurations, and execute database migrations incrementally by business domain.'",
              { id: "mock-15-read-q04" }
            ),
          ],
        },
        listening: {
          title: "Audio Executive Session: Joint M&A Integration Steering Committee",
          audioTranscript: `Good morning, fellow members of the Joint M&A Systems Integration Steering Committee. I am Arthur Wellesley, Global Integration Program Director, representing our combined enterprise leadership.\n\nToday marks Day-120 of our landmark merger between Omnicom Global and Apex Systems. Our objective today is to review our technical harmonization scorecard and approve the cutover schedule for our European logistics ERP consolidation.\n\nFirst, reviewing our foundational milestones: our identity federation squads have completed unified single-sign-on provisioning across all 38,000 global employee accounts, operating on our consolidated Okta and Azure Active Directory tenant. Furthermore, our cross-enterprise cloud interconnect has achieved 99.99% network uptime between our primary Virginia data center and Apex's European cloud hub in Amsterdam.\n\nHowever, our financial integration audit indicates that our multi-currency general ledger reconciliation is operating at an unacceptable 3.8% parity error rate. The variance is driven by conflicting depreciation algorithms between Omnicom's SAP S/4HANA engine and Apex's legacy Oracle NetSuite instance.\n\nIn consultation with our Chief Financial Officer and external auditors from KPMG, we are instituting a 45-day parallel dual-run operational window beginning October 1. During this window, both ERP platforms will process daily transactional batches simultaneously, and automated reconciliation scripts will flag algorithmic variances daily. We will not decommission the legacy Oracle NetSuite instance until variance rates remain below 0.01% across three consecutive month-end closes.\n\nThis disciplined, risk-mitigated approach guarantees zero financial reporting disruptions. I now invite our European Regional Managing Director to share operational remarks.`,
          durationSeconds: 150,
          questions: [
            makeMCQ(
              "How many global employee accounts were successfully unified onto the consolidated single-sign-on tenant?",
              "38,000 global employee accounts",
              ["1,500 accounts", "10,000 accounts", "250,000 accounts"],
              2, // C
              "Arthur Wellesley states: 'our identity federation squads have completed unified single-sign-on provisioning across all 38,000 global employee accounts.'",
              { id: "mock-15-list-q01" }
            ),
            makeMCQ(
              "What technical factor caused the 3.8% parity error rate in multi-currency general ledger reconciliations?",
              "Conflicting depreciation algorithms between Omnicom's SAP S/4HANA engine and Apex's Oracle NetSuite instance.",
              [
                "A physical fire that destroyed the primary bank headquarters in London.",
                "An intentional computer virus uploaded by a disgruntled former executive.",
                "A sudden bankruptcy liquidation filed by the international cloud hosting provider."
              ],
              3, // D
              "Arthur explains: 'The variance is driven by conflicting depreciation algorithms between Omnicom's SAP S/4HANA engine and Apex's legacy Oracle NetSuite instance.'",
              { id: "mock-15-list-q02" }
            ),
            makeMCQ(
              "What variance threshold must multi-currency reconciliations achieve before the legacy Oracle instance can be decommissioned?",
              "Variance rates must remain below 0.01% across three consecutive month-end closes.",
              [
                "Variance rates below 10% are acceptable immediately.",
                "Variance must be exactly 5% on the first day.",
                "Zero reconciliations are required under international accounting laws."
              ],
              0, // A
              "The speaker clearly states: 'We will not decommission the legacy Oracle NetSuite instance until variance rates remain below 0.01% across three consecutive month-end closes.'",
              { id: "mock-15-list-q03" }
            ),
            makeMCQ(
              "What is the duration of the parallel dual-run operational window beginning October 1?",
              "45 days",
              ["Two hours", "One week", "Six months"],
              1, // B
              "Arthur states: 'we are instituting a 45-day parallel dual-run operational window beginning October 1.'",
              { id: "mock-15-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-15-spk-01",
            type: "speaking",
            prompt: "Deliver an inspiring, culturally unifying 90-second address to a joint company-wide town hall meeting welcoming employees of a newly acquired global competitor into the merged organization.",
            context: "Acknowledge the former rivalry with humor and respect, celebrate their unique technological achievements, guarantee cultural partnership rather than assimilation, and paint an inspiring shared vision.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Warm, inclusive and empathetic tone", "Respecting the former competitor's legacy and achievements", "Promising mutual partnership rather than forced assimilation", "Inspiring shared mission and joint industry leadership"],
            modelTranscript: "Colleagues and new teammates, welcome! For the past five years, we have been fierce competitors in the marketplace. Every time we pitched against your team, we knew we had to bring our absolute best work because your engineering excellence, product speed, and customer loyalty pushed us to our limits. Today, that rivalry transforms into the most powerful partnership in our industry. I want to say this clearly and unequivocally: this merger is not about assimilation; it is about combining the best of both our cultures to create an unprecedented global leader. We did not bring our companies together to erase what made your organization exceptional. We did it because your talent, your architecture, and your vision are world-class. In the weeks ahead, you will not see top-down mandates; you will see collaborative co-design, mutual respect, and genuine investment in your careers. Together, we possess the scale, the technology, and the brilliance to solve the hardest challenges in the digital enterprise. Welcome to our shared journey.",
          },
          {
            id: "mock-15-spk-02",
            type: "speaking",
            prompt: "Explain how an enterprise architecture team should approach Application Portfolio Rationalization following a multi-billion dollar corporate acquisition.",
            context: "Explain the 'TIME' framework (Tolerate, Invest, Migrate, Eliminate) and how it balances technical debt elimination with operational continuity and customer retention.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["The 'TIME' categorization framework (Tolerate, Invest, Migrate, Eliminate)", "Evaluating applications across business value and technical health", "Managing technical debt while protecting operational continuity", "Collaborative stakeholder consensus and phased roadmaps"],
            modelTranscript: "Following a major corporate acquisition, an enterprise inevitably inherits a bloated, overlapping software application portfolio that drains operating capital and fragments data. To rationalize this estate methodically, mature enterprise architects deploy the industry-standard TIME framework, categorizing applications into four strategic quadrants based on business value and technical health. First, 'Invest': high-value, modern applications that will scale as the unified enterprise standard. Second, 'Tolerate': legacy systems that deliver essential business value with acceptable technical stability; we maintain these temporarily without major capital investment. Third, 'Migrate': high-value systems burdened by severe technical debt or security vulnerabilities; we extract their core functionality and replatform them onto modern cloud substrates. Finally, 'Eliminate': redundant, low-value applications that are systematically decommissioned to eliminate licensing fees and security attack surfaces. By applying this objective, data-driven categorization collaboratively with business owners, we capture millions in operational synergies while safeguarding business continuity.",
          },
        ],
      },
    },
  ];
}

