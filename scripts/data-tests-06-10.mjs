import { makeMCQ, makeSituational } from "./mcq-helper.mjs";

export function getTests06To10() {
  return [
    // ==========================================
    // MOCK TEST 06: Enterprise Cloud Migration & Architecture
    // ==========================================
    {
      id: "mock-06",
      testNumber: 6,
      title: "Mock Test 06: Enterprise Cloud Migration & Architecture",
      difficulty: "Intermediate",
      durationMinutes: 60,
      description: "Cloud modernization terminology, architectural decision frameworks, cross-functional risk communication, and technical client briefings.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "Neither the cloud architects nor the database administrator _____ in favor of a lift-and-shift approach.",
            "was",
            ["were", "are", "have been"],
            1, // B
            "In 'neither... nor' constructions, the verb agrees in number with the closer subject ('database administrator', singular -> 'was').",
            { id: "mock-06-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "medium" }
          ),
          makeMCQ(
            "By the time the enterprise cutover window began, the DevOps leads _____ three dry runs in staging.",
            "had already executed",
            ["already executed", "have already executed", "will have already executed"],
            2, // C
            "Past perfect ('had already executed') is required for an action completed prior to another past event ('cutover window began').",
            { id: "mock-06-gram-02", type: "grammar", topic: "Tenses", difficulty: "medium" }
          ),
          makeMCQ(
            "Migrating legacy workloads to Kubernetes requires _____ comprehensive audit of containerized dependencies.",
            "a",
            ["an", "the", "no article needed"],
            3, // D
            "'Comprehensive' starts with a consonant sound (/k/), requiring indefinite article 'a'.",
            { id: "mock-06-gram-03", type: "grammar", topic: "Articles", difficulty: "medium" }
          ),
          makeMCQ(
            "The infrastructure lead insisted _____ conducting canary deployments before opening ingress traffic to end users.",
            "on",
            ["in", "to", "at"],
            0, // A
            "The standard prepositional collocation with 'insisted' in this context is 'on' (or 'upon').",
            { id: "mock-06-gram-04", type: "grammar", topic: "Prepositions", difficulty: "medium" }
          ),
          makeMCQ(
            "Had the client _____ us earlier regarding their strict EU data residency requirements, we would have provisioned Frankfurt clusters.",
            "notified",
            ["notify", "notifying", "has notified"],
            1, // B
            "Inverted third conditional ('Had [subject] [past participle]') requires 'notified' to express hypothetical past condition.",
            { id: "mock-06-gram-05", type: "grammar", topic: "Conditionals", difficulty: "medium" }
          ),
          makeMCQ(
            "The microservice architecture was chosen _____ it provides independent scalability and fault isolation across domains.",
            "because",
            ["although", "despite", "unless"],
            2, // C
            "'Because' establishes the logical causal rationale for selecting microservices.",
            { id: "mock-06-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "medium" }
          ),
          makeMCQ(
            "After re-evaluating our compute options, the serverless paradigm proved to be _____ cost-effective than continuous virtual instances.",
            "more",
            ["most", "as", "much"],
            3, // D
            "Comparative adjective 'more cost-effective' is required when contrasting two options accompanied by 'than'.",
            { id: "mock-06-gram-07", type: "grammar", topic: "Adjectives & Adverbs", difficulty: "medium" }
          ),
          makeMCQ(
            "All infrastructure changes _____ through automated terraform validation pipelines before merging into main.",
            "must be routed",
            ["must routed", "is routed", "routing"],
            0, // A
            "Passive modal construction 'must be routed' correctly reflects mandatory policy applied to plural 'changes'.",
            { id: "mock-06-gram-08", type: "grammar", topic: "Voice & Modals", difficulty: "medium" }
          ),
          makeMCQ(
            "The legacy mainframe, _____ processing capacity was capped at 10,000 TPS, could not handle peak holiday transaction spikes.",
            "whose",
            ["which", "who", "whom"],
            1, // B
            "Possessive relative pronoun 'whose' is correctly used to describe the processing capacity belonging to the legacy mainframe.",
            { id: "mock-06-gram-09", type: "grammar", topic: "Pronouns & Relative Clauses", difficulty: "medium" }
          ),
          makeMCQ(
            "Our primary objective during Phase 2 is to _____ data synchronization lag between the on-premise oracle cluster and cloud storage.",
            "mitigate",
            ["mitigating", "mitigation", "mitigated"],
            2, // C
            "Infinitive particle 'to' followed by base verb form 'mitigate'.",
            { id: "mock-06-gram-10", type: "grammar", topic: "Business Vocabulary", difficulty: "medium" }
          ),
        ],
        writing: [
          {
            id: "mock-06-wri-01",
            type: "writing",
            taskType: "email",
            prompt: "Write an email to the client VP of Engineering summarizing the outcomes of the Stage 2 Cloud Migration pilot, outlining two resolved latency challenges, and requesting sign-off for Phase 3 enterprise cutover.",
            context: "Your team completed the cloud migration pilot with 99.98% uptime. Latency spikes in the payment gateway were eliminated using redis caching. Phase 3 cutover is scheduled for next Saturday.",
            minWords: 90,
            maxWords: 160,
            recommendedMinutes: 10,
            scoringCriteria: ["Professional executive tone", "Clear explanation of latency resolution", "Specific mention of metrics & validation", "Decisive call to action for Phase 3 sign-off"],
            modelAnswer: "Dear Ms. Sterling,\n\nI am pleased to report that our engineering squad has successfully concluded the Stage 2 Cloud Migration pilot with 99.98% platform availability across peak business hours.\n\nDuring initial stress tests, our observability tooling detected transient latency spikes in the legacy relational database and payment microservice. We addressed this by deploying a distributed Redis caching layer and fine-tuning connection pooling thresholds, bringing median response times down from 420ms to 48ms.\n\nWith data integrity checks showing zero parity discrepancies, we are on track for the Phase 3 enterprise cutover scheduled for Saturday, November 14, at 01:00 UTC. Could you please review the attached verification audit and provide your formal sign-off by Thursday close of business?\n\nSincerely,\nLead Cloud Architect",
          },
          {
            id: "mock-06-wri-02",
            type: "writing",
            taskType: "summary",
            prompt: "Summarize the architectural advantages of adopting an event-driven serverless design over a monolithic container deployment in high-volume enterprise environments.",
            context: "Focus on operational cost elasticity, decoupled failure domains, horizontal scalability, and engineering delivery velocity.",
            minWords: 75,
            maxWords: 130,
            recommendedMinutes: 10,
            scoringCriteria: ["Concise conceptual clarity", "Accurate technical trade-off articulation", "Structured professional prose", "No grammatical or mechanical errors"],
            modelAnswer: "Adopting an event-driven serverless architecture offers distinct operational and economic advantages over monolithic container deployments in high-throughput environments. First, serverless models enable granular elasticity, auto-scaling compute resources dynamically in response to incoming message volume while reducing idle operational expenditures to zero. Second, asynchronous event streaming completely decouples system domains; a degradation in one downstream consumer does not cascade across upstream ingestion points. Finally, modular event schemas allow cross-functional squads to develop, test, and deploy microservices independently, accelerating overall feature delivery velocity while maintaining system-wide fault tolerance.",
          },
        ],
        situational: [
          makeSituational(
            "During a cloud migration progress meeting, the client's Security Director raises an unexpected objection about token encryption standards, threatening to halt the deployment scheduled for tomorrow.",
            "Listen attentively to the Director's specific encryption requirements, validate that our KMS architecture supports AES-256 and envelope encryption, and offer a same-day joint security audit with the cloud SecOps lead to resolve all compliance concerns before cutover.",
            [
              "Ignore the objection because the client project manager already signed off on the technical specifications last month.",
              "Immediately postpone the entire cloud migration by six weeks without analyzing whether our current deployment already meets their criteria.",
              "Argue openly during the call that security reviews should have been completed weeks ago and that the director is creating unnecessary bureaucracy."
            ],
            3, // D
            "Addressing security objections collaboratively with technical validation and a same-day joint audit preserves schedule integrity while rigorously satisfying compliance.",
            { id: "mock-06-sit-01" }
          ),
          makeSituational(
            "Your database engineer informs you at 4:00 PM that the staging database schema migration took 35% longer than planned, which could breach the production maintenance window if not optimized.",
            "Convene an immediate technical review with the database lead to identify query bottlenecks, index creation order, or batching strategies, and establish a clear go/no-go checkpoint with the client prior to commencing production cutover.",
            [
              "Proceed with the production migration as scheduled and hope that production storage speeds will make up the 35% delay.",
              "Cancel the client's maintenance window unilaterally via a short text message without providing technical diagnostic details.",
              "Disable database transaction logging and backup verification during cutover to artificially accelerate the process."
            ],
            0, // A
            "Evaluating optimization strategies collaboratively and setting definitive go/no-go gates ensures operational reliability without taking unwarranted production risks.",
            { id: "mock-06-sit-02" }
          ),
          makeSituational(
            "A mid-level engineer on your migration squad confesses that they mistakenly deleted a non-critical staging bucket containing synthetic testing data.",
            "Acknowledge the engineer's honesty, confirm that no production or client PII was impacted, leverage Terraform scripts to automatically reprovision the bucket, and conduct a blame-free post-mortem to tighten IAM delete permissions.",
            [
              "Publicly reprimand the engineer on the team Slack channel to set an example regarding operational discipline.",
              "Conceal the mistake from the staging team and advise the engineer to blame a cloud provider network glitch.",
              "Remove the engineer from the project immediately and request human resources disciplinary proceedings."
            ],
            1, // B
            "Psychological safety and automated infrastructure-as-code allow teams to recover rapidly and systematically address root causes through improved IAM policies.",
            { id: "mock-06-sit-03" }
          ),
          makeSituational(
            "The client product owner repeatedly asks the engineering team to add new microservice endpoints that were not included in the signed Statement of Work.",
            "Politely inform the product owner that the requested endpoints represent scope expansion, document their business value, and present a formal Change Request detailing schedule and budget implications for their approval.",
            [
              "Silently incorporate the new endpoints by making the engineering squad work double shifts over the weekend without compensation.",
              "Refuse outright with a blunt email stating that our team strictly does not entertain new client suggestions.",
              "Implement half of the endpoints informally without updating documentation, architectural diagrams, or testing suites."
            ],
            2, // C
            "Formal change control manages scope creep transparently while honoring the client's evolving requirements with clear resource and timeline visibility.",
            { id: "mock-06-sit-04" }
          ),
          makeSituational(
            "During load testing, your monitoring dashboard reports a 2% packet loss between on-premise VPN gateways and the cloud VPC, causing occasional API timeouts.",
            "Gather telemetry logs, notify the client networking team with traceroute diagnostics, and evaluate whether provisioning a dedicated Direct Connect or ExpressRoute circuit is warranted for guaranteed SLA throughput.",
            [
              "Dismiss the 2% packet loss as normal background internet noise and proceed to sign off on production readiness.",
              "Blame the cloud provider on social media and advise the client to switch providers immediately.",
              "Alter the load testing thresholds so that 5% packet loss is considered acceptable in the executive summary."
            ],
            3, // D
            "Data-driven network diagnosis paired with strategic infrastructure recommendations protects production SLAs from avoidable network degradation.",
            { id: "mock-06-sit-05" }
          ),
          makeSituational(
            "You notice that two junior developers on the cloud team are hesitant to speak up during architecture review calls because senior consultants dominate the conversation.",
            "Actively facilitate the architecture sessions by specifically inviting input from junior members on assigned modules, creating dedicated breakout reviews, and mentoring them privately to build their technical confidence.",
            [
              "Assume that junior engineers have nothing valuable to contribute to architectural discussions and maintain status quo.",
              "Publicly scold the senior consultants during client meetings for talking too much.",
              "Instruct the junior developers to submit their thoughts only in private emails to you rather than speaking in meetings."
            ],
            0, // A
            "Inclusive facilitation empowers newer team members, enriches technical discussions, and fosters psychological safety within engineering squads.",
            { id: "mock-06-sit-06" }
          ),
        ],
        reading: {
          title: "Architecture Strategy: Zero-Trust Security in Modern Cloud Ecosystems",
          text: `In traditional enterprise networking, security architectures operated on a perimeter-centric model, commonly termed the 'castle-and-moat' paradigm. Organizations established formidable external firewalls, intrusion detection appliances, and VPN concentrators to repel external threats. However, once a user or service successfully authenticated past this boundary, the internal corporate network was treated with implicit, ubiquitous trust. Packets flowed freely across VLANs, and credentials frequently possessed unrestricted lateral reach.\n\nThe widespread migration of enterprise workloads to public multi-cloud environments—accelerated by hybrid workforces and distributed SaaS platforms—has rendered perimeter-based security fundamentally obsolete. In response, modern engineering organizations are aggressively transitioning to a Zero-Trust Architecture (ZTA). Founded on the foundational maxim 'never trust, always verify,' Zero Trust mandates that every single access request, whether originating from outside the organization or from an internal cluster node, must be explicitly authenticated, authorized according to the principle of least privilege, and continuously encrypted in transit.\n\nAt the technical layer, implementing Zero Trust within cloud-native environments requires three core capabilities. First, enterprise identity and access management (IAM) must transition from static passwords to context-aware, risk-based multifactor authentication. Telemetry including device health status, IP geographical anomalies, and user behavioral heuristics is evaluated in real time prior to granting microservice access. Second, organizations must replace open network topologies with software-defined microsegmentation. By deploying service meshes such as Istio or Linkerd, teams enforce mutual Transport Layer Security (mTLS) with cryptographic identity tokens issued by ephemeral certificate authorities, ensuring that inter-service communication cannot be intercepted or spoofed even if an adjacent pod is compromised. Third, continuous automated telemetry and behavioral anomaly detection must ingest telemetry logs into centralized security information and event management (SIEM) systems.\n\nWhile the security benefits of Zero Trust are incontrovertible, enterprise adoption introduces non-trivial organizational and operational hurdles. Chief among these is the friction introduced to developer experience and legacy application compatibility. Monolithic legacy systems built a decade ago often rely on hardcoded credentials and open database connections; retrofitting these systems with ephemeral mTLS sidecars frequently causes latency penalties and intermittent connectivity faults. Consequently, leading consultancy practices advise a phased migration: cataloging critical data assets, establishing strict identity boundaries around high-value microservices, and gradually decommissioning perimeter-only assumptions over iterative delivery cycles.`,
          questions: [
            makeMCQ(
              "What fundamental architectural assumption characterized the traditional 'castle-and-moat' security model?",
              "Internal network traffic and authenticated users within the perimeter were granted implicit trust.",
              [
                "All internal data packets were required to be encrypted with ephemeral mTLS sidecars.",
                "Zero authentication was permitted without third-party external hardware security modules.",
                "Perimeter firewalls were deemed unnecessary due to strict device health telemetries."
              ],
              1, // B
              "The text states: 'once a user or service successfully authenticated past this boundary, the internal corporate network was treated with implicit, ubiquitous trust.'",
              { id: "mock-06-read-q01" }
            ),
            makeMCQ(
              "How does a cloud-native service mesh enforce secure inter-service communication under Zero Trust?",
              "By utilizing mutual TLS (mTLS) with cryptographic identity tokens issued by ephemeral certificate authorities.",
              [
                "By opening unrestricted VLAN routing across all containerized workloads.",
                "By relying solely on static hardcoded passwords stored in source code repositories.",
                "By disabling real-time continuous behavioral telemetry across internal pod nodes."
              ],
              2, // C
              "The passage highlights: 'By deploying service meshes... teams enforce mutual Transport Layer Security (mTLS) with cryptographic identity tokens issued by ephemeral certificate authorities.'",
              { id: "mock-06-read-q02" }
            ),
            makeMCQ(
              "According to the text, what is a primary operational hurdle when retrofitting legacy applications for Zero Trust?",
              "Monolithic legacy systems may suffer latency penalties and connectivity faults when wrapped with ephemeral mTLS sidecars.",
              [
                "Modern cloud providers refuse to host legacy software that lacks serverless integration.",
                "Developers refuse to use multifactor authentication due to hardware incompatibilities.",
                "Intrusion detection appliances cannot operate on public multi-cloud cloud infrastructures."
              ],
              3, // D
              "The text explains that legacy systems built decades ago rely on open connections, so 'retrofitting these systems with ephemeral mTLS sidecars frequently causes latency penalties and intermittent connectivity faults.'",
              { id: "mock-06-read-q03" }
            ),
            makeMCQ(
              "What phased approach do leading consultancy practices recommend for organizations adopting Zero Trust?",
              "Catalog critical data assets, establish strict identity boundaries around high-value microservices, and decommission perimeter assumptions iteratively.",
              [
                "Instantly shut down all legacy applications until modern microservices are fully rewritten.",
                "Eliminate all centralized SIEM telemetry pipelines to reduce developer operational friction.",
                "Revert to on-premise physical data centers to preserve perimeter hardware appliances."
              ],
              0, // A
              "The final paragraph states consultants recommend: 'cataloging critical data assets, establishing strict identity boundaries around high-value microservices, and gradually decommissioning perimeter-only assumptions over iterative delivery cycles.'",
              { id: "mock-06-read-q04" }
            ),
          ],
        },
        listening: {
          title: "Audio Briefing: Cloud Financial Operations (FinOps) Steering Committee",
          audioTranscript: `Good morning everyone. Thank you for joining our monthly Cloud FinOps review for the Core Banking Modernization initiative. I am Priya Vance, Principal Cloud Economist, and today I want to walk you through our third-quarter cloud expenditure metrics.\n\nFirst, the positive news: our overall compute spend across the development and staging environments dropped by 22% over the last sixty days. This reduction is directly attributable to the automated shutdown policies our DevOps squad instituted for idle non-production clusters, along with our strategic shift from on-demand compute instances to 3-year Savings Plans.\n\nHowever, we have observed an unanticipated 35% cost spike in our multi-region data egress line item. Upon deep-dive investigation with our database engineering leads, we discovered that cross-region analytical replication between our primary Virginia region and our secondary Frankfurt failover site was executing raw, uncompressed snapshot streaming every fifteen minutes. In addition, telemetry log pipelines were shipping verbose debug logs to external analytics buckets across regional boundaries without localized aggregation.\n\nTo remediate this variance before our fourth-quarter executive budget review, we are implementing two mandatory guardrails starting this Friday. First, all cross-region database replication streams must pass through gzip compression gateways, which our simulations indicate will slash data egress bandwidth by approximately 65%. Second, we are deploying local vector collectors in each cloud region to summarize and filter telemetry data prior to any cross-region transit. These remediations will stabilize our quarterly cloud spend comfortably within our board-approved budget ceiling of 1.4 million dollars.\n\nPlease review the attached dashboard link and submit any architecture exception requests by Wednesday at noon. Let us open the floor for questions.`,
          durationSeconds: 150,
          questions: [
            makeMCQ(
              "What primary action contributed to the 22% cost reduction in development and staging compute spend?",
              "Automating shutdown policies for idle non-production clusters and procuring 3-year Savings Plans.",
              [
                "Terminating all staging environments and moving testing workloads to local developer laptops.",
                "Switching from serverless microservices back to physical bare-metal on-premise servers.",
                "Doubling the compute memory allocation across all staging Kubernetes worker nodes."
              ],
              2, // C
              "Priya Vance states the 22% drop was due to 'automated shutdown policies our DevOps squad instituted for idle non-production clusters, along with our strategic shift from on-demand compute instances to 3-year Savings Plans.'",
              { id: "mock-06-list-q01" }
            ),
            makeMCQ(
              "What root cause was identified for the unexpected 35% surge in cloud data egress costs?",
              "Uncompressed snapshot replication and raw debug log streaming across regional cloud boundaries.",
              [
                "A major distributed denial of service attack that overwhelmed the public payment gateway.",
                "Excessive licensing fees paid to third-party commercial database software vendors.",
                "Developers accidentally leaving high-performance GPU instances running over the weekend."
              ],
              3, // D
              "Priya notes that 'cross-region analytical replication... was executing raw, uncompressed snapshot streaming every fifteen minutes' along with verbose unaggregated debug log transfers.",
              { id: "mock-06-list-q02" }
            ),
            makeMCQ(
              "By what percentage is cross-region bandwidth projected to decrease after implementing gzip compression gateways?",
              "Approximately 65%",
              ["Exactly 15%", "Around 22%", "Nearly 90%"],
              0, // A
              "The speaker clearly mentions: 'which our simulations indicate will slash data egress bandwidth by approximately 65%.'",
              { id: "mock-06-list-q03" }
            ),
            makeMCQ(
              "What is the total board-approved quarterly cloud budget ceiling cited by Priya Vance?",
              "$1.4 million",
              ["$750,000", "$3.5 million", "$5.2 million"],
              1, // B
              "Priya states the remediations will stabilize quarterly spend 'comfortably within our board-approved budget ceiling of 1.4 million dollars.'",
              { id: "mock-06-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-06-spk-01",
            type: "speaking",
            prompt: "Explain the business and operational advantages of cloud modernization to a non-technical client executive who is reluctant to decommission their legacy on-premise servers.",
            context: "Address concerns about upfront migration costs, emphasize operational resilience, scalability during seasonal peaks, and continuous security compliance.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Empathizing with executive capital expenditure concerns", "Operational resilience & automated disaster recovery", "Elastic scaling for peak business cycles", "Modern security governance & continuous patching"],
            modelTranscript: "I completely understand your hesitation regarding upfront migration investments, especially when your existing on-premise infrastructure has served your enterprise reliably for years. However, maintaining aging hardware introduces compounding operational risks, from supply chain delays for spare parts to escalating physical data center maintenance costs. Cloud modernization transforms these fixed capital liabilities into flexible, operational investments. During high-demand seasonal peaks, your digital services can scale dynamically to support surging customer transactions without costly over-provisioning, and scale back down instantly when traffic normalizes. Furthermore, cloud platforms provide automated disaster recovery and continuous security compliance updates that protect your corporate reputation far more robustly than isolated legacy data centers.",
          },
          {
            id: "mock-06-spk-02",
            type: "speaking",
            prompt: "Describe an incident where a technical deployment encountered an unexpected roadblock, and detail the structured steps you would take to diagnose the problem and align stakeholders.",
            context: "Scenario: A deployment causes latency degradation. Walk through triage, root cause analysis, mitigation, and transparent stakeholder communication.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Immediate triage & rollback/mitigation protocol", "Telemetry data collection & root cause identification", "Transparent stakeholder status cadence", "Post-incident review and preventive hardening"],
            modelTranscript: "When a technical deployment hits an unexpected obstacle, a disciplined, transparent approach is critical. My immediate priority is operational containment: if production latency breaches our defined service level threshold, I initiate an immediate rollback to the previous stable release artifact to restore normal user experience without delay. Simultaneously, I establish an active war room, bringing together lead engineers to inspect observability dashboards, APM traces, and database connection pools to isolate the exact bottleneck. Throughout this process, I maintain an hourly status briefing for client stakeholders, communicating the immediate mitigation, root cause findings, and preventive measures. Finally, we conduct a blameless post-mortem to incorporate automated regression tests into our CI/CD pipeline, ensuring the issue cannot recur in future releases.",
          },
        ],
      },
    },

    // ==========================================
    // MOCK TEST 07: Stakeholder Alignment & Budget Variance
    // ==========================================
    {
      id: "mock-07",
      testNumber: 7,
      title: "Mock Test 07: Stakeholder Alignment & Budget Variance",
      difficulty: "Intermediate",
      durationMinutes: 60,
      description: "Financial variance reporting, executive stakeholder negotiation, scope adjustment trade-offs, and professional governance dialogue.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "The program steering committee _____ unanimous in approving the proposed cost-containment measures.",
            "was",
            ["were", "have been", "are"],
            1, // B
            "Collective noun 'committee' acting as a unified entity takes a singular verb ('was').",
            { id: "mock-07-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "medium" }
          ),
          makeMCQ(
            "Before the quarterly steering review, the financial controller _____ the revised vendor burn rates.",
            "had audited",
            ["has audited", "auditing", "audits"],
            2, // C
            "Past perfect ('had audited') expresses an audit completed before the past event of the quarterly steering review.",
            { id: "mock-07-gram-02", type: "grammar", topic: "Tenses", difficulty: "medium" }
          ),
          makeMCQ(
            "Implementing this automated invoicing workflow will eliminate _____ substantial amount of administrative overhead.",
            "a",
            ["an", "the", "no article needed"],
            3, // D
            "'Substantial' begins with a consonant sound (/s/), requiring the indefinite article 'a'.",
            { id: "mock-07-gram-03", type: "grammar", topic: "Articles", difficulty: "medium" }
          ),
          makeMCQ(
            "The engagement manager accounted _____ the 14% budget variance by pointing to unplanned security compliance mandates.",
            "for",
            ["to", "with", "at"],
            0, // A
            "The phrasal verb 'accounted for' means provided an explanation or justification for something.",
            { id: "mock-07-gram-04", type: "grammar", topic: "Prepositions", difficulty: "medium" }
          ),
          makeMCQ(
            "If the procurement office _____ the licensing contract by Friday, our rollout timeline will remain intact.",
            "finalizes",
            ["finalized", "will finalize", "has finalized"],
            1, // B
            "First conditional clause (If + present simple, will + verb) requires 'finalizes' for the third-person singular subject.",
            { id: "mock-07-gram-05", type: "grammar", topic: "Conditionals", difficulty: "medium" }
          ),
          makeMCQ(
            "The project was completed within budget, _____ several critical integration features had to be deferred to Phase 2.",
            "although",
            ["because", "therefore", "since"],
            2, // C
            "Concessive conjunction 'although' correctly links the budget success with the compromise of deferring features.",
            { id: "mock-07-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "medium" }
          ),
          makeMCQ(
            "Among all four vendor proposals evaluated, TechCorp offered the _____ comprehensive service level agreement.",
            "most",
            ["more", "much", "very"],
            3, // D
            "Superlative form 'the most comprehensive' is required when comparing more than two options (all four proposals).",
            { id: "mock-07-gram-07", type: "grammar", topic: "Adjectives & Adverbs", difficulty: "medium" }
          ),
          makeMCQ(
            "Quarterly variance reports _____ directly to the Chief Financial Officer every third Monday.",
            "are submitted",
            ["is submitted", "submitting", "submitted"],
            0, // A
            "Passive voice present simple ('are submitted') correctly aligns with the plural subject 'variance reports'.",
            { id: "mock-07-gram-08", type: "grammar", topic: "Voice & Modals", difficulty: "medium" }
          ),
          makeMCQ(
            "The Senior Delivery Director, _____ strategic foresight prevented severe cost overruns, received executive commendation.",
            "whose",
            ["which", "whom", "who"],
            1, // B
            "Possessive relative pronoun 'whose' attributes the strategic foresight to the Senior Delivery Director.",
            { id: "mock-07-gram-09", type: "grammar", topic: "Pronouns & Relative Clauses", difficulty: "medium" }
          ),
          makeMCQ(
            "To prevent capital leakage, the PMO will _____ all discretionary travel and entertainment expenditures for the remainder of Q3.",
            "curtail",
            ["curtailing", "curtailed", "curtailment"],
            2, // C
            "Modal auxiliary 'will' takes the base infinitive verb form 'curtail' (meaning to reduce or restrict).",
            { id: "mock-07-gram-10", type: "grammar", topic: "Business Vocabulary", difficulty: "medium" }
          ),
        ],
        writing: [
          {
            id: "mock-07-wri-01",
            type: "writing",
            taskType: "email",
            prompt: "Write an email to an executive project sponsor explaining an 8% budget variance resulting from mid-sprint compliance changes, outlining two mitigation options, and asking for their decision on the preferred path.",
            context: "New regional data privacy regulations mandated additional encryption and security audits. Mitigation Option A reallocates unspent contractor hours; Option B descopes non-critical analytics dashboards.",
            minWords: 90,
            maxWords: 160,
            recommendedMinutes: 10,
            scoringCriteria: ["Diplomatic executive tone", "Clear explanation of variance causes", "Structured presentation of mitigation options", "Action-oriented decision request"],
            modelAnswer: "Dear Mr. Davenport,\n\nI am writing to provide complete visibility regarding an 8% financial variance projected for our Q3 digital platform initiative. This adjustment stems from newly enacted regional data privacy directives, which mandated unanticipated encryption protocols and third-party penetration testing.\n\nTo absorb this variance without expanding our total capital allocation, we have formulated two viable mitigation strategies:\n\nOption A: Reallocate unspent contractor contingency funds from our Q4 infrastructure pool, preserving 100% of the originally committed product roadmap.\n\nOption B: Descope two secondary analytics dashboards and defer them to next fiscal year, remaining strictly within the original Q3 financial envelope.\n\nOur delivery squad strongly endorses Option A as it safeguards end-user delivery commitments. Could you please let us know your preferred direction during tomorrow's executive briefing?\n\nWarm regards,\nLead Engagement Manager",
          },
          {
            id: "mock-07-wri-02",
            type: "writing",
            taskType: "summary",
            prompt: "Summarize the principles of Earned Value Management (EVM) and explain how tracking Cost Performance Index (CPI) and Schedule Performance Index (SPI) helps leaders preempt project failure.",
            context: "Explain planned value, earned value, actual cost, and how CPI/SPI ratios provide objective trend analysis beyond raw budget burn.",
            minWords: 75,
            maxWords: 130,
            recommendedMinutes: 10,
            scoringCriteria: ["Objective technical exposition", "Accurate definition of EVM metrics", "Coherent cause-and-effect flow", "Professional syntactic polish"],
            modelAnswer: "Earned Value Management (EVM) is a rigorous project governance methodology that integrates scope, schedule, and cost metrics into an objective performance baseline. Rather than simply comparing actual expenditures against planned budgets, EVM evaluates Earned Value—the budgeted cost of work actually performed. Key performance indicators include the Cost Performance Index (CPI) and Schedule Performance Index (SPI). A CPI below 1.0 indicates cost overruns relative to output, while an SPI below 1.0 flags delivery schedule slippage. By continuously monitoring these complementary indices, program leaders obtain early mathematical warnings of project distress, enabling proactive resource reallocation and scope realignment before financial deficits become irrecoverable.",
          },
        ],
        situational: [
          makeSituational(
            "During a tense steering committee meeting, the client VP accuses your team of mismanaging contractor hours and causing a $45,000 budget overrun.",
            "Remain composed, acknowledge the VP's concern, present the audited timesheet records showing that the additional hours were spent on client-approved security changes, and offer to walk through a detailed line-item reconciliation after the meeting.",
            [
              "Interrupt the VP defensively and claim that the client's internal managers are entirely to blame for being incompetent.",
              "Accept all blame immediately and promise to refund $45,000 from your company's own pocket without consulting leadership.",
              "Pack up your laptop and walk out of the steering committee meeting to demonstrate professional offense."
            ],
            3, // D
            "Maintaining professional composure, validating financial records objectively, and offering transparent reconciliation de-escalates conflict while upholding team credibility.",
            { id: "mock-07-sit-01" }
          ),
          makeSituational(
            "Your project controller informs you that due to favorable foreign exchange rates and automated testing efficiencies, the project has an unexpected $60,000 budget surplus.",
            "Schedule a transparent review with the client sponsor and internal leadership, present options such as accelerating backlog features, bolstering test coverage, or returning the surplus to the client's budget reserve.",
            [
              "Conceal the surplus in an unmonitored contingency slush fund to spend on team parties and lavish dinners.",
              "Immediately bill extra fictional contractor hours to consume the entire $60,000 surplus before the fiscal quarter ends.",
              "Ignore the financial report completely since surpluses do not require executive management attention."
            ],
            0, // A
            "Transparent governance and collaborative allocation of budget surpluses reinforces client trust and maximizes project ROI.",
            { id: "mock-07-sit-02" }
          ),
          makeSituational(
            "A key client stakeholder demands that an expensive new reporting portal be built within the current sprint, but refuses to provide extra budget or extend deadlines.",
            "Explain the concept of the project management triangle, explain that adding the portal requires either descoping another feature of equal effort or securing additional funding, and invite them to prioritize the sprint backlog collaboratively.",
            [
              "Promise the client that the team will deliver everything, and secretly force developers to work all night throughout the sprint.",
              "Tell the stakeholder rudely that their demand is ridiculous and refuse to speak to them for the rest of the project.",
              "Drop core platform security testing quietly to make room for the client's new reporting portal."
            ],
            1, // B
            "Grounding scope negotiations in the project iron triangle helps stakeholders make conscious, trade-off decisions without jeopardizing quality or team health.",
            { id: "mock-07-sit-03" }
          ),
          makeSituational(
            "You discover that one of your subcontractor partner firms has been logging billing hours for an engineer who transitioned off the project three weeks ago.",
            "Halt approval of the subcontractor invoice immediately, alert your procurement and legal representatives, and request a corrected billing ledger with full credit for the erroneously billed hours.",
            [
              "Approve the invoice anyway because questioning a subcontractor might damage interpersonal relationships.",
              "Threaten the subcontractor's CEO with public slander on social media platforms without checking the billing facts.",
              "Deduct the disputed amount secretly from a different, unrelated vendor's invoice."
            ],
            2, // C
            "Prudent financial governance requires freezing disputed invoices and engaging legal and procurement channels to secure accurate financial reconciliations.",
            { id: "mock-07-sit-04" }
          ),
          makeSituational(
            "The client's finance director requests a 15% across-the-board rate cut on all Capgemini consultant billable hours due to company-wide enterprise cost reductions.",
            "Acknowledge the client's commercial pressures, engage your account executive and commercial director, and propose alternative value models such as blended onshore/offshore ratios or fixed-price milestone delivery rather than arbitrary rate reductions.",
            [
              "Agree on the spot without consulting your account leadership, slashing team salaries immediately.",
              "Refuse to discuss commercial terms and threaten to pull all consultants off the project by tomorrow morning.",
              "Accept the rate cut but instruct consultants to work 15% fewer hours while logging full-time attendance."
            ],
            3, // D
            "Involving commercial leadership to restructure delivery models (e.g. offshore blending) accommodates client cost constraints without degrading partnership viability or profitability.",
            { id: "mock-07-sit-05" }
          ),
          makeSituational(
            "Two departments within the client organization have conflicting requirements for an enterprise dashboard, and their disagreements are stalling milestone sign-off.",
            "Organize a joint alignment workshop with design prototypes, map both departments' operational KPIs, and create a unified role-based dashboard view that serves both user personas.",
            [
              "Pick the department whose manager has the higher executive title and completely ignore the other department.",
              "Halt all development indefinitely until the two client departments resolve their personal arguments.",
              "Build two completely separate, redundant enterprise platforms, doubling client maintenance costs without telling them."
            ],
            0, // A
            "Facilitating collaborative design workshops with role-based features synthesizes conflicting requirements into a cohesive enterprise solution.",
            { id: "mock-07-sit-06" }
          ),
        ],
        reading: {
          title: "Strategic Financial Management: Navigating Enterprise Cost Variance and Portfolio Health",
          text: `In large-scale technology consulting engagements, financial governance is intrinsically tied to project success. While technical excellence determines the quality of deliverables, rigorous fiscal discipline dictates whether an engagement creates sustainable enterprise value or deteriorates into acrimonious dispute. Enterprise programs frequently encounter budget variance—defined as the mathematical divergence between planned expenditures (the cost baseline) and actual capital burned over a specific reporting horizon.\n\nBudget variances are rarely the result of a single catastrophic failure; rather, they accumulate through subtle, compounding operational dynamics. The most prevalent driver is unmanaged scope creep—the gradual addition of technical requirements, user stories, and architectural enhancements without corresponding contractual amendments or funding allocations. A second major contributor is estimation optimism bias, wherein early-stage planning fails to account for technical debt, integration complexity, and regulatory friction. Finally, external market factors, such as currency fluctuations in offshore delivery hubs and sudden vendor price increases, can skew forecasted burn rates.\n\nTo manage variances effectively, mature organizations deploy Earned Value Management (EVM) frameworks. EVM introduces three foundational data points: Planned Value (PV), which represents the authorized budget assigned to scheduled work; Earned Value (EV), quantifying the budget associated with work actually completed; and Actual Cost (AC), capturing the realized expenditures incurred. By contrasting these variables, financial controllers derive two critical diagnostic ratios: the Cost Performance Index (CPI = EV / AC) and the Schedule Performance Index (SPI = EV / PV).\n\nA CPI value lower than 1.0 indicates that the program is spending more money than budgeted for the volume of work delivered, signaling immediate cost inefficiency. Conversely, an SPI below 1.0 indicates delivery schedule slippage. Research in portfolio management demonstrates that when a project's cumulative CPI falls below 0.85 after the 20% completion milestone, it almost never recovers to its original budget baseline without decisive executive intervention. Remediation strategies must focus on root causes: renegotiating contractual scope, optimizing onshore-offshore staffing ratios, replacing bespoke components with commercial off-the-shelf modules, and instituting strict weekly variance thresholds to prevent minor discrepancies from metastasizing into programmatic crises.`,
          questions: [
            makeMCQ(
              "What is defined as the most prevalent driver of project budget variance in enterprise consulting engagements?",
              "Unmanaged scope creep where features are added without formal contractual funding amendments.",
              [
                "Sudden worldwide shortages of cloud server hardware components.",
                "Mandatory annual salary increases mandated by international trade unions.",
                "Complete failure of automated software testing pipelines across all delivery squads."
              ],
              1, // B
              "The passage explicitly states: 'The most prevalent driver is unmanaged scope creep—the gradual addition of technical requirements, user stories, and architectural enhancements without corresponding contractual amendments.'",
              { id: "mock-07-read-q01" }
            ),
            makeMCQ(
              "How does Earned Value Management (EVM) calculate the Cost Performance Index (CPI)?",
              "By dividing the Earned Value (EV) by the Actual Cost (AC).",
              [
                "By multiplying Planned Value (PV) by the total number of offshore engineers.",
                "By subtracting actual expenses from the original unapproved marketing budget.",
                "By dividing total billable hours by the number of completed customer interviews."
              ],
              2, // C
              "The text gives the exact formula: 'Cost Performance Index (CPI = EV / AC)'.",
              { id: "mock-07-read-q02" }
            ),
            makeMCQ(
              "What does portfolio management research indicate when a project's cumulative CPI drops below 0.85 after 20% completion?",
              "The project almost never recovers to its original budget baseline without decisive executive intervention.",
              [
                "The project is guaranteed to complete two months ahead of schedule with zero quality defects.",
                "The project will immediately receive an automated government grant to cover all remaining expenses.",
                "The project team should immediately double the number of onshore project directors."
              ],
              3, // D
              "The passage highlights: 'when a project's cumulative CPI falls below 0.85 after the 20% completion milestone, it almost never recovers to its original budget baseline without decisive executive intervention.'",
              { id: "mock-07-read-q03" }
            ),
            makeMCQ(
              "What remediation strategy does the author suggest to prevent minor variances from becoming programmatic crises?",
              "Instituting strict weekly variance thresholds, optimizing staffing ratios, and renegotiating contractual scope.",
              [
                "Ignoring financial spreadsheets and focusing solely on developer subjective morale.",
                "Terminating all quality assurance engineers to reduce immediate labor overhead.",
                "Converting all project contracts to open-ended time-and-materials agreements unconditionally."
              ],
              0, // A
              "The author recommends: 'renegotiating contractual scope, optimizing onshore-offshore staffing ratios... and instituting strict weekly variance thresholds to prevent minor discrepancies from metastasizing into programmatic crises.'",
              { id: "mock-07-read-q04" }
            ),
          ],
        },
        listening: {
          title: "Executive Audio Briefing: Program Portfolio Financial Reconciliation",
          audioTranscript: `Good afternoon, colleagues. Thank you for assembling for our quarterly portfolio reconciliation briefing. I am Marcus Vance, Portfolio Delivery Executive. Today, we must address the midterm financial status of the Retail Omnichannel Transformation program.\n\nAs of the close of Sprint 14, our planned value was pegged at 2.8 million dollars, while our earned value stands at 2.65 million dollars. Crucially, our actual expenditure to date has reached 3.1 million dollars. Translating these figures into our primary EVM metrics yields a Schedule Performance Index of 0.95 and a Cost Performance Index of 0.85.\n\nWhile our delivery cadence remains reasonably close to target, our cost efficiency is flashing amber. The primary driver of this 450,000-dollar cost overrun is our reliance on specialized senior external cloud architects who were retained six weeks longer than budgeted to resolve legacy ERP data schema mismatches.\n\nTo steer the program back toward our financial targets before the Q4 board audit, we have agreed on three corrective actions with the client steering committee. First, we will transition architectural oversight from external consultants to our certified internal global delivery center leads, reducing our monthly blended rate by 28%. Second, we will freeze non-essential feature development for the loyalty points engine, redirecting that capacity toward finalizing the checkout integration. Third, the client has approved a 150,000-dollar formal budget adjustment under Change Request 12 to fund the additional ERP data transformation.\n\nWith these measures in place, our revised forecast projects an end-of-year CPI recovery to 0.94, preserving overall project operating margin. I welcome any questions regarding our revised burn-down charts.`,
          durationSeconds: 150,
          questions: [
            makeMCQ(
              "What were the calculated SPI and CPI metrics reported by Marcus Vance for Sprint 14?",
              "SPI of 0.95 and CPI of 0.85",
              ["SPI of 1.20 and CPI of 1.15", "SPI of 0.70 and CPI of 0.60", "SPI of 1.00 and CPI of 1.00"],
              2, // C
              "Marcus Vance states: 'Translating these figures into our primary EVM metrics yields a Schedule Performance Index of 0.95 and a Cost Performance Index of 0.85.'",
              { id: "mock-07-list-q01" }
            ),
            makeMCQ(
              "What was identified as the primary driver behind the $450,000 budget overrun?",
              "Retaining specialized senior external cloud architects six weeks longer than planned for legacy ERP issues.",
              [
                "Purchasing expensive enterprise hardware servers that were never deployed in production.",
                "Paying excessive legal settlement penalties due to customer intellectual property disputes.",
                "Providing all program team members with unauthorized luxury corporate travel accommodations."
              ],
              3, // D
              "Marcus states: 'The primary driver of this 450,000-dollar cost overrun is our reliance on specialized senior external cloud architects who were retained six weeks longer than budgeted to resolve legacy ERP data schema mismatches.'",
              { id: "mock-07-list-q02" }
            ),
            makeMCQ(
              "By what percentage will the monthly blended rate decrease after transitioning to internal global delivery center leads?",
              "28%",
              ["10%", "45%", "65%"],
              0, // A
              "The speaker confirms: 'reducing our monthly blended rate by 28%.'",
              { id: "mock-07-list-q03" }
            ),
            makeMCQ(
              "What amount was approved by the client under Change Request 12 to cover ERP data transformation?",
              "$150,000",
              ["$50,000", "$300,000", "$450,000"],
              1, // B
              "Marcus clarifies: 'the client has approved a 150,000-dollar formal budget adjustment under Change Request 12 to fund the additional ERP data transformation.'",
              { id: "mock-07-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-07-spk-01",
            type: "speaking",
            prompt: "Explain to a client executive why unexpected regulatory changes necessitate a formal Change Request and budget realignment, rather than being absorbed into current sprint capacity.",
            context: "Maintain a respectful, collaborative tone while clearly defining contractual boundaries, delivery quality risks, and long-term project viability.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Validating the importance of regulatory compliance", "Explaining capacity constraints and iron triangle trade-offs", "Preserving quality and avoiding engineer burnout", "Framing Change Requests as collaborative risk management"],
            modelTranscript: "We fully recognize that adhering to these newly introduced data privacy regulations is absolutely mission-critical for your organization's legal standing and customer trust. Because these mandates were introduced after our initial project baseline was finalized, accommodating them requires substantial cryptographic engineering, architectural re-validation, and dedicated compliance auditing. If we attempted to absorb these complex tasks into our current sprint capacity without adjusting scope or resources, we would inevitably compromise code quality, induce severe team burnout, and jeopardize our scheduled delivery dates. A formal Change Request is not a roadblock; rather, it is a transparent governance tool that ensures these essential regulatory features are properly resourced, thoroughly tested, and delivered without sacrificing the integrity of your core platform.",
          },
          {
            id: "mock-07-spk-02",
            type: "speaking",
            prompt: "Describe how you would handle a scenario where two senior executives have completely conflicting visions for a digital product's upcoming roadmap.",
            context: "Scenario: The Chief Marketing Officer wants rapid customer-facing UI features; the Chief Information Security Officer demands complete backend architectural hardening.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Objective stakeholder facilitation", "Aligning on shared business objectives & risk tolerance", "Data-driven prioritization framework (WSJF / MoSCoW)", "Synthesizing a balanced, phased roadmap"],
            modelTranscript: "When senior executives hold conflicting priorities, the role of a consultant is to facilitate objective alignment rather than taking sides. In this scenario, both the CMO's desire for revenue-generating customer features and the CISO's mandate for enterprise security hardening represent valid, critical business imperatives. I would convene a structured workshop using an objective prioritization framework, such as Weighted Shortest Job First. By evaluating each feature against business value, time criticality, and risk reduction, we can quantify trade-offs transparently. I would propose a phased hybrid roadmap where foundational security enhancements are paired with high-impact, visible user interface improvements in parallel tracks. This balanced approach protects enterprise compliance while continuing to demonstrate demonstrable commercial progress to the market.",
          },
        ],
      },
    },

    // ==========================================
    // MOCK TEST 08: Major Incident Management & RCA
    // ==========================================
    {
      id: "mock-08",
      testNumber: 8,
      title: "Mock Test 08: Major Incident Management & RCA",
      difficulty: "Intermediate",
      durationMinutes: 60,
      description: "Crisis communications, Sev-1 triage protocols, blameless post-mortem methodology, and executive incident post-mortems.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "Neither the primary DNS cluster nor the secondary failover endpoints _____ responding during the Sev-1 outage.",
            "were",
            ["was", "is", "has been"],
            1, // B
            "In 'neither... nor' constructions, the verb agrees with the closer subject ('failover endpoints', plural -> 'were').",
            { id: "mock-08-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "medium" }
          ),
          makeMCQ(
            "Before the incident bridge was convened, the site reliability squad _____ the corrupted redis cache.",
            "had already purged",
            ["has already purged", "already purges", "was already purging"],
            2, // C
            "Past perfect ('had already purged') denotes an action completed prior to the past event of convening the incident bridge.",
            { id: "mock-08-gram-02", type: "grammar", topic: "Tenses", difficulty: "medium" }
          ),
          makeMCQ(
            "The incident commander declared _____ Sev-1 operational emergency within eight minutes of telemetry alerting.",
            "a",
            ["an", "the", "no article needed"],
            3, // D
            "'Sev-1' (/sɛv wʌn/) begins with a consonant sound, requiring indefinite article 'a'.",
            { id: "mock-08-gram-03", type: "grammar", topic: "Articles", difficulty: "medium" }
          ),
          makeMCQ(
            "The engineering post-mortem adhered strictly _____ the blameless review guidelines established by enterprise SRE.",
            "to",
            ["with", "in", "by"],
            0, // A
            "The verb 'adhere' is conventionally paired with the preposition 'to'.",
            { id: "mock-08-gram-04", type: "grammar", topic: "Prepositions", difficulty: "medium" }
          ),
          makeMCQ(
            "If the network operations center _____ traffic to the disaster recovery site immediately, customer downtime would have been halved.",
            "had rerouted",
            ["rerouted", "has rerouted", "would reroute"],
            1, // B
            "Third conditional (past unreal condition: 'had rerouted' ... 'would have been halved') requires past perfect in the if-clause.",
            { id: "mock-08-gram-05", type: "grammar", topic: "Conditionals", difficulty: "medium" }
          ),
          makeMCQ(
            "The automated canary deployment was rolled back _____ error rates exceeded the 0.5% critical threshold.",
            "because",
            ["although", "despite", "whereas"],
            2, // C
            "Causal conjunction 'because' connects the rollback action to the threshold breach trigger.",
            { id: "mock-08-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "medium" }
          ),
          makeMCQ(
            "Of all the incident containment strategies reviewed, isolating the microservice container proved to be _____ effective.",
            "most",
            ["more", "much", "as"],
            3, // D
            "Superlative form 'most effective' is required when evaluating among all strategies reviewed.",
            { id: "mock-08-gram-07", type: "grammar", topic: "Adjectives & Adverbs", difficulty: "medium" }
          ),
          makeMCQ(
            "Detailed timeline incident logs _____ by the designated scribe throughout the duration of the outage.",
            "were compiled",
            ["was compiled", "compiling", "compiled"],
            0, // A
            "Passive voice past simple plural ('were compiled') agrees with the plural subject 'logs'.",
            { id: "mock-08-gram-08", type: "grammar", topic: "Voice & Modals", difficulty: "medium" }
          ),
          makeMCQ(
            "The Site Reliability Engineer, _____ quick thinking prevented data corruption in the database shard, was recognized by executive leadership.",
            "whose",
            ["who", "whom", "which"],
            1, // B
            "Possessive relative pronoun 'whose' attributes the quick thinking to the Site Reliability Engineer.",
            { id: "mock-08-gram-09", type: "grammar", topic: "Pronouns & Relative Clauses", difficulty: "medium" }
          ),
          makeMCQ(
            "Following the service restoration, our infrastructure team will _____ the underlying race condition in the messaging queue.",
            "rectify",
            ["rectifying", "rectified", "rectification"],
            2, // C
            "Modal auxiliary 'will' takes the base verb 'rectify' (meaning to correct or remedy).",
            { id: "mock-08-gram-10", type: "grammar", topic: "Business Vocabulary", difficulty: "medium" }
          ),
        ],
        writing: [
          {
            id: "mock-08-wri-01",
            type: "writing",
            taskType: "email",
            prompt: "Write an urgent executive incident notification email to client stakeholders regarding a Sev-1 payment service outage, providing initial root cause findings, current mitigation status, and the estimated time to full recovery (ETR).",
            context: "Payment gateway experienced connection pool exhaustion at 14:15 UTC. Traffic has been diverted to backup payment processors. Current payment processing success rate is 94%. Full restoration expected by 16:30 UTC.",
            minWords: 90,
            maxWords: 160,
            recommendedMinutes: 10,
            scoringCriteria: ["Clear crisis communication tone", "Specific timeline and impact metrics", "Actionable mitigation explanation", "Clear next communication checkpoint"],
            modelAnswer: "Executive Stakeholders,\n\nIncident Update: Sev-1 Payment Gateway Degradation\nStatus: Mitigated / Monitoring\n\nAt 14:15 UTC, automated alerts detected connection pool exhaustion within our primary payment orchestration microservice, resulting in transient transaction failures for approximately 18% of checkout requests.\n\nImmediate Remediation Actions:\n1. At 14:32 UTC, our Incident Response Team rerouted inbound transaction volume to our secondary payment processor gateway.\n2. We expanded database connection pool thresholds across all active Kubernetes ingress nodes.\n\nCurrent Status:\nPayment transaction success rates have rebounded to 94.2%. Core checkout workflows are operating normally. Our engineering squad is actively clearing queued asynchronous reconciliation events.\n\nEstimated Time to Full Recovery (ETR): 16:30 UTC.\n\nA dedicated incident bridge remains active, and our next executive status briefing will be published at 15:30 UTC or immediately upon any material change.\n\nSincerely,\nIncident Commander",
          },
          {
            id: "mock-08-wri-02",
            type: "writing",
            taskType: "summary",
            prompt: "Summarize the core principles of a Blameless Post-Mortem culture and explain why punishing human error increases systemic operational risk in complex software systems.",
            context: "Focus on psychological safety, root-cause depth (the 5 Whys), systemic safeguards, and knowledge sharing.",
            minWords: 75,
            maxWords: 130,
            recommendedMinutes: 10,
            scoringCriteria: ["Analytical rigor", "Clear organizational psychology rationale", "Professional structure", "Concise synthesis"],
            modelAnswer: "A blameless post-mortem culture operates on the foundational assumption that engineers act in good faith with the information available to them. When failures occur, blaming human error is counterproductive because it treats the symptom rather than systemic vulnerabilities. Punitive responses foster organizational fear, encouraging engineers to conceal mistakes, suppress near-misses, and withhold operational telemetry. Conversely, a blameless culture fosters psychological safety, allowing teams to conduct honest, in-depth root cause investigations using techniques like the '5 Whys.' By examining architectural gaps, flawed automated testing, ambiguous documentation, and inadequate observability, organizations implement durable structural safeguards—such as automated canary guardrails and circuit breakers—that make complex software systems fundamentally resilient against inevitable human slips.",
          },
        ],
        situational: [
          makeSituational(
            "During an active Sev-1 production outage, an anxious client executive joins the technical war room and begins asking constant questions, distracting the lead engineers diagnosing the server logs.",
            "Politely invite the executive into a dedicated stakeholder communication channel, introduce a designated liaison who provides updates every fifteen minutes, and protect the lead engineers so they can focus on technical triage.",
            [
              "Shout at the executive to shut up and kick them off the bridge call without any explanation.",
              "Stop all troubleshooting efforts and spend thirty minutes answering the executive's speculative questions.",
              "Mute your microphone, pretend the audio is broken, and let the executive continue derailing the technical team."
            ],
            3, // D
            "Establishing a designated stakeholder liaison with a regular briefing cadence protects technical triage focus while keeping leadership informed.",
            { id: "mock-08-sit-01" }
          ),
          makeSituational(
            "You are conducting a post-mortem review after a major database outage, and a senior manager repeatedly attempts to pin all blame on a junior developer who ran an unoptimized script.",
            "Intervene firmly, reiterate that the post-mortem is strictly blameless, redirect the discussion to why the production database allowed direct unindexed execution without guardrails, and focus on automated prevention.",
            [
              "Agree with the senior manager publicly to avoid personal conflict and recommend firing the junior developer.",
              "Cancel the post-mortem meeting entirely and refuse to publish an incident report.",
              "Privately mock the junior developer after the meeting to appease the senior manager."
            ],
            0, // A
            "Upholding blameless post-mortem standards redirects focus from human scapegoating to systemic architectural safeguards and automated prevention.",
            { id: "mock-08-sit-02" }
          ),
          makeSituational(
            "A critical bug in your team's code caused a brief four-minute outage on the client's public website, but the client has not noticed or raised any ticket yet.",
            "Document the incident transparently, notify the client operations lead with an explanation of the root cause and immediate patch applied, and present the timeline proactively during the next standup.",
            [
              "Keep completely silent about the bug and hope that the client never inspects their historical web logs.",
              "Delete the server logs for that four-minute window to eliminate any evidence of downtime.",
              "Blame the four minutes of downtime on a fictitious national telecommunications provider outage."
            ],
            1, // B
            "Proactive transparency regarding minor incidents reinforces client trust and demonstrates professional integrity and rigorous operational oversight.",
            { id: "mock-08-sit-03" }
          ),
          makeSituational(
            "During a midnight production cutover, your automated regression suite fails three non-critical smoke tests, while core checkout workflows pass with 100% accuracy.",
            "Convene an immediate fifteen-minute go/no-go assessment with the engineering lead and client product owner, assess the business impact of the failed secondary tests, and make an informed collective decision whether to proceed or abort.",
            [
              "Override the test suite silently, mark all failed tests as passed in Jira, and log off to go to sleep.",
              "Immediately abort the entire cutover and roll back all changes without analyzing what the three failures actually were.",
              "Delete the three failed tests permanently from the codebase so they never fail in future builds."
            ],
            2, // C
            "Disciplined go/no-go governance involves evaluating risk context collaboratively with stakeholders rather than taking unilateral shortcuts or premature rollbacks.",
            { id: "mock-08-sit-04" }
          ),
          makeSituational(
            "A client stakeholder demands that your team deploy a hotfix directly into production without running it through the staging environment or automated CI/CD pipeline.",
            "Respectfully refuse to bypass production gates, explain that unvalidated changes risk causing a catastrophic secondary outage, and offer to expedite testing through the automated pipeline under emergency protocols.",
            [
              "Comply with the client's request immediately and push the untested code directly to master branch.",
              "Hang up on the stakeholder and report them to the local police department for pressuring you.",
              "Pretend to deploy the hotfix directly, but actually deploy it to a staging sandbox and lie to the client."
            ],
            3, // D
            "Adhering to emergency deployment guardrails prevents untested changes from causing catastrophic secondary failures while fulfilling urgency responsibly.",
            { id: "mock-08-sit-05" }
          ),
          makeSituational(
            "After resolving an incident, the client insists that you sign a document claiming that the software platform will guaranteed never experience any downtime in the future.",
            "Politely explain that in complex distributed cloud systems, 100% zero downtime cannot be mathematically or operationally guaranteed, and guide them toward industry-standard Service Level Agreements (SLAs) such as 99.95% availability with high-availability redundancy.",
            [
              "Sign the guarantee immediately without reading it to make the client feel happy.",
              "Laugh out loud in the client's face and tell them they know nothing about computers.",
              "Agree verbally to 100% uptime but refuse to put anything in writing."
            ],
            0, // A
            "Educating stakeholders on realistic high-availability cloud SLAs (e.g. 99.95%) aligns contractual expectations with distributed systems realities.",
            { id: "mock-08-sit-06" }
          ),
        ],
        reading: {
          title: "Site Reliability Engineering: The Mechanics of Resilient Incident Management and Post-Mortems",
          text: `In modern digital enterprises operating at scale, software system failures are not anomalies; they are statistical inevitabilities. Distributed microservice architectures, asynchronous event queues, and multi-tenant cloud substrates interact in non-deterministic ways that defeat exhaustive pre-production testing. Recognizing this reality, high-performing engineering organizations shift their paradigm from attempting to prevent all possible failures to building resilient systems capable of rapid detection, graceful containment, and systematic organizational learning.\n\nThe frontline mechanism of operational resilience is Major Incident Management (MIM). When an alert triggers a Sev-1 categorization—typically defined as a critical disruption impacting customer-facing revenue workflows or data integrity—a formal Incident Command System (ICS) is activated. The ICS designates clear, non-overlapping roles. The Incident Commander (IC) holds sole authority over triage strategy, operational tempo, and deployment approvals, purposefully detached from diagnosing code lines. Assisting the IC are technical leads focused strictly on hypothesis generation and execution, an Incident Scribe documenting timeline events and state changes, and a dedicated Communications Lead managing stakeholder briefings.\n\nOnce customer-facing service is restored—whether through automated rollback, traffic rerouting, or capacity shedding—the most critical phase begins: the Blameless Post-Mortem. The blameless philosophy, pioneered in high-hazard disciplines like avionics and healthcare and popularized in technology by Google SRE, posits that human error is the starting point of an investigation, not the conclusion. When an engineer executes a flawed command or overlooks a configuration drift, punishing that individual creates perverse incentives: operational opacity, delayed escalation, and fear.\n\nInstead, effective post-mortems analyze the systemic conditions that permitted the error to impact production. Investigations employ the '5 Whys' framework to traverse outward from the proximal cause (e.g., 'a database thread pool was exhausted') to foundational vulnerabilities (e.g., 'unbounded queue sizes, absence of circuit breakers, and insufficient load test automation'). The output of this process is not an assignment of culpability, but an actionable, tracked set of remediation items. By mandating that 50% of an SRE team's engineering capacity be reserved for proactive reliability engineering and automated error budget management, enterprises transform operational crises into permanent structural resilience.`,
          questions: [
            makeMCQ(
              "In a formal Incident Command System (ICS), what is the primary operational role of the Incident Commander (IC)?",
              "Holding sole authority over triage strategy, operational tempo, and approvals while remaining detached from diagnosing code.",
              [
                "Writing low-level kernel code patches directly in the production environment.",
                "Conducting sales pitches to prospective new clients while the outage is ongoing.",
                "Answering customer support telephone hotlines personally throughout the crisis."
              ],
              1, // B
              "The passage explains: 'The Incident Commander (IC) holds sole authority over triage strategy, operational tempo, and deployment approvals, purposefully detached from diagnosing code lines.'",
              { id: "mock-08-read-q01" }
            ),
            makeMCQ(
              "Why does the blameless post-mortem philosophy consider punishing human error counterproductive?",
              "Punishing individuals fosters organizational fear, delayed escalation, and operational opacity.",
              [
                "Software engineers are legally immune from contractual employment responsibilities.",
                "Cloud service providers automatically pay financial compensation for all human mistakes.",
                "Computers are entirely capable of self-healing without human engineering intervention."
              ],
              2, // C
              "The text states: 'punishing that individual creates perverse incentives: operational opacity, delayed escalation, and fear.'",
              { id: "mock-08-read-q02" }
            ),
            makeMCQ(
              "What technique do post-mortem investigations use to move from proximal causes to foundational systemic vulnerabilities?",
              "The '5 Whys' root-cause traversal framework.",
              [
                "Randomized coin tosses during executive steering meetings.",
                "Annual customer satisfaction survey questionnaires.",
                "Single-pass syntax linting over archived legacy codebases."
              ],
              3, // D
              "The author notes: 'Investigations employ the \"5 Whys\" framework to traverse outward from the proximal cause... to foundational vulnerabilities.'",
              { id: "mock-08-read-q03" }
            ),
            makeMCQ(
              "What percentage of an SRE team's engineering capacity does the text state should be reserved for proactive reliability engineering?",
              "50%",
              ["5%", "20%", "95%"],
              0, // A
              "The final sentence specifies: 'mandating that 50% of an SRE team's engineering capacity be reserved for proactive reliability engineering and automated error budget management.'",
              { id: "mock-08-read-q04" }
            ),
          ],
        },
        listening: {
          title: "Audio Debrief: Sev-1 Incident Post-Mortem & Remediation Action Plan",
          audioTranscript: `Good morning, team. Thank you for assembling for our blameless post-mortem review regarding yesterday's Sev-1 authentication outage. I am Danielle Evans, Principal Site Reliability Engineer and Lead Incident Commander.\n\nLet us begin by reviewing the concrete timeline. At 08:12 UTC yesterday morning, our automated synthetic login monitoring detected error rates surging to 42% across our North American identity cluster. By 08:20 UTC, the incident bridge was convened, and twenty minutes later, at 08:40 UTC, the team identified that our OAuth token signing key cache had expired without successfully rotating.\n\nThis key rotation failure triggered a cascading deadlock in our Redis cluster, locking all worker threads attempting to validate customer sessions. Full service was successfully restored at 09:14 UTC after our engineers manually injected the updated cryptographic signing keys and executed a rolling restart of the identity pods. Total service disruption lasted precisely 62 minutes.\n\nAs we emphasize in all SRE debriefs, our purpose today is not to cast blame, but to systematically eliminate single points of failure. We have identified three mandatory corrective actions. First, our cloud platform team will implement automated key renewal alerts that fire thirty days, seven days, and 48 hours prior to cryptographic expiration. Second, we are deploying an asynchronous cache fallback mechanism so that in-flight authentication requests degrade gracefully rather than deadlocking the thread pool. Third, we will conduct an automated chaos engineering simulation on our staging environment next Tuesday to validate key expiration resilience.\n\nThese three Jira action items will be owned by our Platform Engineering squad and tracked to completion before our next release cycle. Let us now open the floor for technical questions.`,
          durationSeconds: 150,
          questions: [
            makeMCQ(
              "What specific technical malfunction caused the cascading deadlock in the Redis cluster?",
              "The OAuth token signing key cache had expired without successfully rotating.",
              [
                "A physical fiber optic cable was severed by an earthquake in California.",
                "A junior developer accidentally deleted all user login credentials from the database.",
                "The public internet domain name registration expired due to non-payment of invoices."
              ],
              2, // C
              "Danielle Evans notes: 'at 08:40 UTC, the team identified that our OAuth token signing key cache had expired without successfully rotating. This key rotation failure triggered a cascading deadlock in our Redis cluster.'",
              { id: "mock-08-list-q01" }
            ),
            makeMCQ(
              "What was the total duration of the customer-facing service disruption?",
              "Precisely 62 minutes",
              ["Exactly 8 minutes", "Nearly 4 hours", "Over 24 hours"],
              3, // D
              "Danielle clearly states: 'Total service disruption lasted precisely 62 minutes.'",
              { id: "mock-08-list-q02" }
            ),
            makeMCQ(
              "What notification cadence will the platform team implement for automated cryptographic key renewal alerts?",
              "Thirty days, seven days, and 48 hours prior to expiration",
              [
                "Five minutes before expiration only",
                "Once every six months via postal mail",
                "Only after the keys have completely expired in production"
              ],
              0, // A
              "The transcript explicitly states: 'automated key renewal alerts that fire thirty days, seven days, and 48 hours prior to cryptographic expiration.'",
              { id: "mock-08-list-q03" }
            ),
            makeMCQ(
              "What testing methodology will be conducted next Tuesday on staging to validate key expiration resilience?",
              "An automated chaos engineering simulation",
              [
                "Manual telephone testing by customer service representatives",
                "An open-book multiple choice questionnaire for developers",
                "A complete shutdown of all company email systems"
              ],
              1, // B
              "Danielle specifies: 'we will conduct an automated chaos engineering simulation on our staging environment next Tuesday to validate key expiration resilience.'",
              { id: "mock-08-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-08-spk-01",
            type: "speaking",
            prompt: "Deliver a calm, reassuring, and technically authoritative live audio update to client leadership during an ongoing critical server disruption.",
            context: "Acknowledge the severity of the outage, communicate current mitigation actions underway, provide a clear timeline for the next briefing, and avoid speculative blame.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Calm, authoritative crisis demeanor", "Acknowledging business impact without panic", "Concise summary of containment steps underway", "Clear checkpoint commitment for the next update"],
            modelTranscript: "Good afternoon, leadership team. I am speaking directly from our active incident command bridge to provide an authoritative update on our core platform service disruption. We fully recognize the critical operational impact this issue has on your customer transactions, and resolving it is our highest organizational priority. At 14:10 UTC, our monitoring flagged elevated latency across our checkout API gateway. In response, our site reliability squad isolated the degraded database replica and is currently rerouting traffic to our warm standby cluster. While diagnostic telemetry is actively streaming, our primary focus remains rapid service restoration. We anticipate completing the failover within the next twenty minutes. I have assigned a dedicated incident scribe to log every step, and I will personally deliver our next status briefing at 14:45 UTC, or immediately upon service recovery.",
          },
          {
            id: "mock-08-spk-02",
            type: "speaking",
            prompt: "Explain how implementing automated CI/CD guardrails and canary deployments prevents high-impact production outages compared to traditional big-bang software releases.",
            context: "Contrast risky monolithic releases with progressive rollout strategies, automated metric analysis, and instant automated rollbacks.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Risks of monolithic 'big-bang' deployments", "Mechanics of canary releases (percentage routing)", "Automated observability & error threshold rollbacks", "Reducing blast radius and safeguarding user experience"],
            modelTranscript: "Traditional big-bang deployments carry immense systemic risk because hundreds of unvalidated changes are pushed simultaneously to an entire user base; when an unexpected defect emerges, identifying the root cause is chaotic and rolling back disrupts the entire enterprise. Modern CI/CD guardrails mitigate this through progressive canary deployments. Instead of exposing all traffic immediately, a new release artifact is routed to a tiny cohort—typically two to five percent of live traffic. During this canary window, automated observability pipelines continuously evaluate performance metrics, error rates, and CPU utilization against the baseline. If error thresholds breach predefined tolerances, automated circuit breakers immediately roll back the canary deployment without human delay. This drastically limits the blast radius to a fraction of users, safeguarding customer experience and ensuring production stability.",
          },
        ],
      },
    },

    // ==========================================
    // MOCK TEST 09: Third-Party Vendor & Partner Negotiation
    // ==========================================
    {
      id: "mock-09",
      testNumber: 9,
      title: "Mock Test 09: Third-Party Vendor & Partner Negotiation",
      difficulty: "Intermediate",
      durationMinutes: 60,
      description: "Service Level Agreement (SLA) governance, procurement dispute mediation, vendor compliance audits, and strategic partnership alignment.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "Neither the primary SaaS vendor nor their cloud hosting partners _____ willing to assume liability for the data outage.",
            "were",
            ["was", "is", "has been"],
            1, // B
            "In 'neither... nor' constructions, the verb agrees with the closer plural subject ('partners' -> 'were').",
            { id: "mock-09-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "medium" }
          ),
          makeMCQ(
            "Prior to entering contractual negotiations, our strategic sourcing team _____ benchmark rate cards from three competitors.",
            "had compiled",
            ["has compiled", "compiling", "compiles"],
            2, // C
            "Past perfect ('had compiled') denotes compilation completed before the past negotiation phase.",
            { id: "mock-09-gram-02", type: "grammar", topic: "Tenses", difficulty: "medium" }
          ),
          makeMCQ(
            "The vendor provided _____ comprehensive breakdown of their offshore labor rates and enterprise licensing tiers.",
            "a",
            ["an", "the", "no article needed"],
            3, // D
            "'Comprehensive' begins with a consonant sound (/k/), requiring indefinite article 'a'.",
            { id: "mock-09-gram-03", type: "grammar", topic: "Articles", difficulty: "medium" }
          ),
          makeMCQ(
            "The software licensing agreement conforms strictly _____ the intellectual property standards established by corporate legal.",
            "to",
            ["with", "in", "for"],
            0, // A
            "The verb 'conform' standardly pairs with the preposition 'to' (or occasionally 'with').",
            { id: "mock-09-gram-04", type: "grammar", topic: "Prepositions", difficulty: "medium" }
          ),
          makeMCQ(
            "If the software vendor _____ to remediate the critical vulnerability within ten business days, the contract will be terminated.",
            "fails",
            ["failed", "will fail", "has failed"],
            1, // B
            "First conditional clause (If + present simple, will + verb) requires 'fails' for the singular subject 'vendor'.",
            { id: "mock-09-gram-05", type: "grammar", topic: "Conditionals", difficulty: "medium" }
          ),
          makeMCQ(
            "The vendor met all core deliverables on schedule, _____ their technical documentation required extensive revisions.",
            "although",
            ["because", "therefore", "since"],
            2, // C
            "Concessive conjunction 'although' introduces the contrast between on-time delivery and flawed documentation.",
            { id: "mock-09-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "medium" }
          ),
          makeMCQ(
            "Among all four software integration partners reviewed, CloudWave offered the _____ favorable indemnification terms.",
            "most",
            ["more", "much", "as"],
            3, // D
            "Superlative form 'most favorable' is required when comparing more than two vendor partners.",
            { id: "mock-09-gram-07", type: "grammar", topic: "Adjectives & Adverbs", difficulty: "medium" }
          ),
          makeMCQ(
            "Detailed monthly SLA performance credits _____ automatically against subsequent subscription invoices.",
            "are applied",
            ["is applied", "applying", "applied"],
            0, // A
            "Passive voice present simple plural ('are applied') correctly matches the plural subject 'performance credits'.",
            { id: "mock-09-gram-08", type: "grammar", topic: "Voice & Modals", difficulty: "medium" }
          ),
          makeMCQ(
            "The procurement director, _____ astute negotiation saved the enterprise $200,000, was praised by the executive committee.",
            "whose",
            ["who", "whom", "which"],
            1, // B
            "Possessive relative pronoun 'whose' attributes the astute negotiation to the procurement director.",
            { id: "mock-09-gram-09", type: "grammar", topic: "Pronouns & Relative Clauses", difficulty: "medium" }
          ),
          makeMCQ(
            "Our legal counsel advises us to _____ the liability limitation clause before finalizing the master services agreement.",
            "amend",
            ["amending", "amendment", "amended"],
            2, // C
            "Infinitive particle 'to' followed by base verb 'amend' (meaning to modify or alter).",
            { id: "mock-09-gram-10", type: "grammar", topic: "Business Vocabulary", difficulty: "medium" }
          ),
        ],
        writing: [
          {
            id: "mock-09-wri-01",
            type: "writing",
            taskType: "email",
            prompt: "Write a formal contractual notice email to a third-party software vendor addressing repeated Service Level Agreement (SLA) breaches, requesting an operational remediation plan, and reserving the client's right to claim financial SLA penalty credits.",
            context: "Vendor's API uptime dropped to 97.4% against a contracted 99.9% monthly SLA. Two major business interruptions occurred during month-end financial processing. Formal remediation plan due within 5 business days.",
            minWords: 90,
            maxWords: 160,
            recommendedMinutes: 10,
            scoringCriteria: ["Formal, legally assertive tone", "Specific citation of contractual breaches", "Clear deadline for corrective remediation", "Explicit reservation of contractual rights"],
            modelAnswer: "Dear Mr. Gallagher,\n\nRe: Formal Notice of Service Level Agreement (SLA) Non-Compliance\n\nI am writing to formally notify SaaS Corp of a material breach of our Master Services Agreement regarding platform availability for the month of October. Under Section 4.2 of Schedule B, your organization is contractually committed to maintaining a monthly API availability threshold of 99.9%.\n\nDuring October, our automated monitoring recorded actual uptime of only 97.4%, attributable to two severe outages during our peak month-end financial reconciliation window on October 28 and 29. These disruptions severely impacted our corporate reporting workflows.\n\nPursuant to our agreement, we request a formal Corrective Action Plan detailing root causes and engineering remediations within five business days (by Friday, November 12). Furthermore, please be advised that we formally reserve all contractual rights to apply corresponding SLA penalty service credits against our upcoming Q4 invoice.\n\nSincerely,\nDirector of Strategic Procurement",
          },
          {
            id: "mock-09-wri-02",
            type: "writing",
            taskType: "summary",
            prompt: "Summarize the critical components of a balanced Master Services Agreement (MSA) and explain how clear liability caps and intellectual property clauses protect both enterprise clients and technology vendors.",
            context: "Focus on scope definitions, intellectual property ownership, limitation of liability, indemnification, and dispute resolution mechanisms.",
            minWords: 75,
            maxWords: 130,
            recommendedMinutes: 10,
            scoringCriteria: ["Rigorous legal/commercial terminology", "Objective balance of vendor vs client interests", "Clear synthesis", "Grammatical precision"],
            modelAnswer: "A well-structured Master Services Agreement (MSA) establishes the governing legal framework for commercial technology partnerships, balancing risk distribution between client and vendor. Central to this balance are Intellectual Property (IP) covenants, which demarcate pre-existing background IP while unambiguously vesting ownership of custom deliverables with the client. Equally pivotal are Limitation of Liability clauses, which typically cap aggregate financial damages at a multiple of fees paid over a twelve-month period, thereby protecting vendors from disproportionate catastrophic financial ruin while ensuring clients have meaningful financial recourse for gross negligence. By complementing these clauses with robust indemnification protections and structured escalation procedures for dispute resolution, an MSA creates commercial predictability and operational alignment.",
          },
        ],
        situational: [
          makeSituational(
            "During a contract negotiation call, a software vendor salesperson attempts to rush your procurement team into signing a three-year contract by claiming the 30% discount expires at 5:00 PM today.",
            "Remain completely unpressured, explain that enterprise contract execution requires thorough legal and security review, and state that if the discount cannot be honored through standard governance, we will evaluate other market options.",
            [
              "Panic and sign the three-year contract immediately on your personal credit card to secure the discount.",
              "Insult the salesperson using unprofessional profanity and report their company to the federal trade commission.",
              "Sign the contract secretly without letting your enterprise legal team review the terms."
            ],
            3, // D
            "Professional procurement discipline resists artificial artificial vendor sales pressure, insisting on diligent legal and security review before contractual execution.",
            { id: "mock-09-sit-01" }
          ),
          makeSituational(
            "A third-party software vendor informs you that due to unexpected inflation and cloud infrastructure costs, they are raising their API subscription fees by 40% starting next month.",
            "Review the existing contract to verify whether unilateral price increases are permitted, engage the vendor's commercial director to dispute the hike, and initiate market benchmarking to evaluate alternative providers if negotiations stall.",
            [
              "Accept the 40% price increase immediately without checking the contract terms or consulting client leadership.",
              "Threaten to physically boycott the vendor's corporate headquarters with a protest banner.",
              "Stop paying all vendor invoices entirely and instruct developers to pirate the software illegally."
            ],
            0, // A
            "Verifying contractual price adjustment protections and exploring competitive alternatives provides leverage to resist unjustified vendor fee hikes.",
            { id: "mock-09-sit-02" }
          ),
          makeSituational(
            "During an audit of vendor access credentials, your security team discovers that five former vendor contractors who left the project two months ago still possess active production database credentials.",
            "Revoke the former contractors' access tokens immediately, initiate an urgent forensic audit to verify whether any data was accessed, and enforce strict automated offboarding protocols with the vendor's account lead.",
            [
              "Leave the credentials active because removing them might inconvenience the vendor if they ever return.",
              "Cover up the finding to avoid embarrassing the vendor account manager during the next quarterly review.",
              "Email the former contractors politely asking them to voluntarily delete their own database passwords."
            ],
            1, // B
            "Immediate access revocation combined with forensic audit and vendor accountability mitigates enterprise insider threat and maintains strict compliance.",
            { id: "mock-09-sit-03" }
          ),
          makeSituational(
            "A strategic vendor partner delivers a critical software component two weeks late, causing your team to miss a major milestone for your client.",
            "Hold a formal vendor review meeting, document the exact milestone delay and financial impact, enforce contractual delay penalties if applicable, and establish daily progress checkpoints for remaining deliverables.",
            [
              "Forgive the vendor completely and falsely tell the client that your own Capgemini engineering team was responsible for the delay.",
              "Terminate the vendor contract instantly without having a backup solution, bringing the entire project to a permanent halt.",
              "Refuse to speak to the vendor ever again and abandon the integration codebase entirely."
            ],
            2, // C
            "Documenting delay impacts, enforcing contractual remedy provisions, and increasing delivery checkpoint cadence maintains vendor accountability without abandoning project goals.",
            { id: "mock-09-sit-04" }
          ),
          makeSituational(
            "A vendor account executive offers you personal gift cards and expensive conference tickets during an ongoing competitive tender evaluation.",
            "Politely and firmly decline the gifts, explain that company ethics and anti-bribery policies strictly prohibit accepting personal benefits during active procurement tenders, and notify your compliance officer.",
            [
              "Accept the gifts quietly and award the contract to that vendor regardless of their technical scores.",
              "Ask the vendor if they can double the value of the gift cards before you agree to sign.",
              "Take the gift cards but give them away to your family members so nobody at work finds out."
            ],
            3, // D
            "Strict adherence to anti-bribery and corporate ethics policies preserves procurement integrity and protects against severe legal and reputational liabilities.",
            { id: "mock-09-sit-05" }
          ),
          makeSituational(
            "Your integration engineers report that a third-party vendor's software documentation is completely outdated, containing broken code examples and inaccurate API endpoints.",
            "Organize a joint working session with the vendor's developer relations and product engineering teams, share an audited list of documentation errors, and establish a dedicated shared Slack/Teams channel for real-time technical clarification.",
            [
              "Tell your integration engineers to guess how the API works through trial and error over several months.",
              "Publicly ridicule the vendor's developers on social media to shame them into writing better documentation.",
              "Rewrite the entire third-party commercial platform from scratch internally without budget approval."
            ],
            0, // A
            "Collaborative technical working sessions and audited feedback channels accelerate API integration while prompting the vendor to update documentation.",
            { id: "mock-09-sit-06" }
          ),
        ],
        reading: {
          title: "Strategic Vendor Management: Mitigating Third-Party Risk in the Enterprise Digital Supply Chain",
          text: `In the contemporary enterprise technology landscape, no corporation builds its digital infrastructure in isolation. Modern applications rely on an intricate ecosystem of third-party software vendors, SaaS platforms, cloud infrastructure providers, and specialized systems integrators. While this digital supply chain accelerates time-to-market and provides access to world-class technical capabilities, it simultaneously introduces profound third-party risk. A failure, breach, or contractual delinquency originating in an external vendor can paralyze an enterprise's operations and inflict severe reputational damage.\n\nTo govern these complex external dependencies, enterprise procurement and technology leadership must implement a structured Vendor Relationship Management (VRM) framework across three lifecycle stages: selection, contracting, and ongoing performance monitoring. During the selection phase, due diligence must extend far beyond feature checklists and commercial pricing. Organizations must rigorously evaluate a prospective vendor's financial stability, SOC 2 Type II compliance, data encryption standards, disaster recovery recovery time objectives (RTO), and operational business continuity plans.\n\nThe contracting phase represents the primary legal and operational safeguard. A robust Master Services Agreement (MSA) accompanied by a granular Service Level Agreement (SLA) establishes enforceable expectations. Effective SLAs move beyond simplistic annual uptime guarantees—such as 99%—which could permit over three days of continuous downtime within a single year without breaching terms. Instead, best practices require monthly availability metrics (e.g., 99.95%), stringent latency thresholds measured at the 99th percentile, and defined recovery windows for varying severity classifications. Crucially, contracts must incorporate 'remedy with teeth': progressive financial service credits automatically deducted from subsequent invoices upon SLA breaches, along with termination for cause clauses if degradation persists.\n\nFinally, ongoing governance mandates continuous risk monitoring rather than passive annual reviews. Enterprise vendor management offices deploy automated security scorecards to monitor vendor digital attack surfaces, track real-time API uptime telemetry, and enforce annual third-party penetration audits. By viewing vendor relationships not as static transactional purchases but as dynamic strategic partnerships governed by measurable performance indicators, organizations harness external innovation while safeguarding enterprise resilience.`,
          questions: [
            makeMCQ(
              "Why is an annual uptime metric of 99% considered insufficient in enterprise technology SLAs?",
              "Because an annual metric could permit more than three consecutive days of downtime without breaching contract terms.",
              [
                "Because 99% uptime is illegal under international European Union data directives.",
                "Because cloud service providers are incapable of calculating annual availability averages.",
                "Because annual metrics require daily manual paperwork submissions by project managers."
              ],
              1, // B
              "The text explains that annual metrics are flawed because an annual uptime guarantee 'could permit over three days of continuous downtime within a single year without breaching terms.'",
              { id: "mock-09-read-q01" }
            ),
            makeMCQ(
              "What contractual mechanism does the author describe as providing 'remedy with teeth' for SLA breaches?",
              "Progressive financial service credits automatically deducted from subsequent invoices.",
              [
                "Sending polite handwritten thank-you letters to vendor account representatives.",
                "Allowing the vendor to increase their subscription fees by 10% each quarter.",
                "Requiring the vendor's chief executive to post a public apology video on social media."
              ],
              2, // C
              "The passage explicitly highlights: 'Crucially, contracts must incorporate \"remedy with teeth\": progressive financial service credits automatically deducted from subsequent invoices upon SLA breaches.'",
              { id: "mock-09-read-q02" }
            ),
            makeMCQ(
              "What should due diligence evaluate during vendor selection beyond features and commercial pricing?",
              "Financial stability, SOC 2 compliance, encryption standards, and disaster recovery RTOs.",
              [
                "The brand of coffee machines utilized in the vendor's headquarters cafeteria.",
                "The personal political affiliations of the vendor's junior marketing interns.",
                "The total square footage of the vendor's corporate executive gymnasium."
              ],
              3, // D
              "The author specifies that organizations must evaluate 'financial stability, SOC 2 Type II compliance, data encryption standards, disaster recovery recovery time objectives (RTO), and operational business continuity plans.'",
              { id: "mock-09-read-q03" }
            ),
            makeMCQ(
              "How do modern enterprise vendor management offices conduct ongoing risk governance?",
              "By deploying automated security scorecards, tracking real-time API telemetry, and enforcing annual penetration audits.",
              [
                "By assuming that all vendors remain completely secure without any ongoing monitoring.",
                "By terminating all third-party software contracts every six months to change vendors.",
                "By replacing all automated software testing with manual annual phone calls."
              ],
              0, // A
              "The text states that mature offices 'deploy automated security scorecards to monitor vendor digital attack surfaces, track real-time API uptime telemetry, and enforce annual third-party penetration audits.'",
              { id: "mock-09-read-q04" }
            ),
          ],
        },
        listening: {
          title: "Audio Negotiation: Vendor Master Services Agreement Steering Session",
          audioTranscript: `Good morning, everyone. Welcome to our formal contract reconciliation session between Global Enterprise Solutions and CloudSecure Software. I am Rachel Chen, Head of Strategic Procurement. Today, our goal is to align on the outstanding commercial and risk terms for our enterprise identity integration.\n\nOver the past two weeks, our legal teams have made commendable progress, closing eight out of ten open clauses. However, two pivotal points remain unresolved before we can execute the Master Services Agreement.\n\nThe first unresolved item is the Limitation of Liability cap under Section 12. CloudSecure has proposed capping aggregate liability at twelve months of recurring software fees, which equates to approximately 480,000 dollars. Given that this identity platform will authenticate over 50,000 corporate employees and handle sensitive internal tokens, our risk committee cannot accept a sub-half-million dollar cap for data protection and security indemnities. We counter-propose a super-cap of 5 million dollars specifically for data breach indemnification and gross negligence, while accepting the standard 12-month fee cap for general operational breaches.\n\nThe second item is the SLA financial service credit structure under Schedule C. CloudSecure's draft offers a 5% credit for availability dropping below 99.9%. Given the mission-critical nature of employee single-sign-on, we require a tiered credit model: a 10% credit for uptime between 99.5% and 99.0%, and a 25% invoice credit if availability plunges below 99.0% in any calendar month, with termination rights if breaches occur across three consecutive months.\n\nWe believe these terms reflect standard enterprise risk-sharing. I would like to hand the floor to CloudSecure's commercial director, Mr. Patrick Torres, to share their perspective.`,
          durationSeconds: 150,
          questions: [
            makeMCQ(
              "What super-cap does Rachel Chen counter-propose specifically for data breach indemnification and gross negligence?",
              "A super-cap of $5 million",
              ["A cap of $100,000", "A super-cap of $500,000", "An unlimited cap of $50 million"],
              2, // C
              "Rachel Chen explicitly counter-proposes: 'a super-cap of 5 million dollars specifically for data breach indemnification and gross negligence.'",
              { id: "mock-09-list-q01" }
            ),
            makeMCQ(
              "What SLA financial service credit does Rachel propose if availability plunges below 99.0% in any calendar month?",
              "A 25% invoice credit",
              ["A 5% invoice credit", "A 10% invoice credit", "A 100% full refund"],
              3, // D
              "Rachel states: 'and a 25% invoice credit if availability plunges below 99.0% in any calendar month.'",
              { id: "mock-09-list-q02" }
            ),
            makeMCQ(
              "How many corporate employees will rely on the identity integration platform according to the briefing?",
              "Over 50,000 corporate employees",
              ["Around 500 employees", "Approximately 5,000 employees", "Nearly 500,000 employees"],
              0, // A
              "The speaker clearly states: 'Given that this identity platform will authenticate over 50,000 corporate employees and handle sensitive internal tokens.'",
              { id: "mock-09-list-q03" }
            ),
            makeMCQ(
              "Under what consecutive breach condition does Rachel specify the client must retain contractual termination rights?",
              "If breaches occur across three consecutive months",
              [
                "If a single breach lasts longer than five minutes",
                "Only if the vendor goes into bankruptcy liquidation",
                "If breaches occur across ten consecutive years"
              ],
              1, // B
              "Rachel specifies: 'with termination rights if breaches occur across three consecutive months.'",
              { id: "mock-09-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-09-spk-01",
            type: "speaking",
            prompt: "Roleplay a negotiation with a software vendor account representative who is refusing to offer SLA service credits for a severe weekend platform outage.",
            context: "Firmly assert contractual commitments, explain the tangible business disruption experienced by your organization, and negotiate a professional commercial resolution.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Professional, assertive negotiation tone", "Citing contractual SLA clauses and commitments", "Articulating tangible business disruption", "Seeking win-win commercial resolution"],
            modelTranscript: "I understand your perspective that the outage occurred over the weekend, but from an operational and contractual standpoint, our agreement does not differentiate between business hours and weekend maintenance windows for platform availability. Section 5 of our Service Level Agreement explicitly guarantees 99.9% continuous monthly uptime across all seven days of the week. This weekend disruption halted our end-of-month batch data processing, requiring fifteen of our senior engineers to work overtime to manually reconcile customer records. Claiming that weekend downtime is exempt from standard service credits contradicts our signed agreement and undermines the trust we have built. We value our ongoing partnership with your firm, but we must adhere to our governance framework. We expect the standard fifteen percent SLA credit applied to our upcoming invoice, alongside a documented engineering remediation plan by Friday.",
          },
          {
            id: "mock-09-spk-02",
            type: "speaking",
            prompt: "Explain how organizations balance the benefits of multi-vendor best-of-breed software architectures against the increased complexity of managing multiple third-party integration points.",
            context: "Contrast best-of-breed flexibility and innovation against vendor lock-in, integration overhead, support finger-pointing, and governance overhead.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Benefits of best-of-breed specialized tooling", "Risks of monolithic single-vendor lock-in", "Challenges of integration overhead & multi-vendor finger-pointing", "Unified governance frameworks and API standardization"],
            modelTranscript: "Adopting a best-of-breed software strategy allows an enterprise to select the absolute highest-performing solution for each specific capability—such as choosing a specialized search engine, a dedicated CRM, and a premier data warehouse. This prevents vendor lock-in, spurs rapid innovation, and ensures squads have access to top-tier capabilities. However, this diversity introduces substantial operational complexity: engineering teams must build and maintain brittle integration pipelines, manage disparate security frameworks, and handle multi-vendor contract lifecycles. Furthermore, when an outage occurs, vendors frequently engage in finger-pointing, blaming each other's APIs for latency bottlenecks. To balance these trade-offs, mature enterprises establish standardized API gateway contracts, enforce unified observability tooling across all vendors, and implement strict joint operating agreements that clearly define support escalation paths across the entire partner ecosystem.",
          },
        ],
      },
    },

    // ==========================================
    // MOCK TEST 10: Product Release & Go-To-Market Enablement
    // ==========================================
    {
      id: "mock-10",
      testNumber: 10,
      title: "Mock Test 10: Product Release & Go-To-Market Enablement",
      difficulty: "Intermediate",
      durationMinutes: 60,
      description: "Feature launch coordination, sales enablement, release readiness checklists, customer success handoffs, and product communication.",
      sectionTimers: { grammar: 12, writing: 10, situational: 10, reading: 10, listening: 8, speaking: 10 },
      sections: {
        grammar: [
          makeMCQ(
            "Neither the product marketing manager nor the sales enablement specialists _____ completed the onboarding collateral.",
            "have",
            ["has", "is", "was"],
            1, // B
            "In 'neither... nor' constructions, the verb agrees in number with the closer plural subject ('sales enablement specialists' -> 'have').",
            { id: "mock-10-gram-01", type: "grammar", topic: "Subject-Verb Agreement", difficulty: "medium" }
          ),
          makeMCQ(
            "By the time the global press release went live, our customer support leads _____ three training workshops.",
            "had already conducted",
            ["already conducted", "have already conducted", "are already conducting"],
            2, // C
            "Past perfect ('had already conducted') is required for an action completed prior to the past event of going live.",
            { id: "mock-10-gram-02", type: "grammar", topic: "Tenses", difficulty: "medium" }
          ),
          makeMCQ(
            "The launch squad delivered _____ user-friendly walkthrough video for all inbound enterprise trial accounts.",
            "a",
            ["an", "the", "no article needed"],
            3, // D
            "'User-friendly' begins with a consonant semivowel sound (/j/), requiring the indefinite article 'a'.",
            { id: "mock-10-gram-03", type: "grammar", topic: "Articles", difficulty: "medium" }
          ),
          makeMCQ(
            "The product enablement curriculum adheres _____ the pedagogical standards approved by the academy director.",
            "to",
            ["with", "in", "for"],
            0, // A
            "The verb 'adheres' standardly pairs with the preposition 'to'.",
            { id: "mock-10-gram-04", type: "grammar", topic: "Prepositions", difficulty: "medium" }
          ),
          makeMCQ(
            "If the customer advisory council _____ the beta build next week, we will proceed to general commercial availability.",
            "endorses",
            ["endorsed", "will endorse", "has endorsed"],
            1, // B
            "First conditional clause (If + present simple, will + verb) requires 'endorses' for the singular collective subject.",
            { id: "mock-10-gram-05", type: "grammar", topic: "Conditionals", difficulty: "medium" }
          ),
          makeMCQ(
            "The initial feature release was celebrated across social channels, _____ several enterprise users flagged missing CSV export tools.",
            "although",
            ["because", "therefore", "since"],
            2, // C
            "Concessive conjunction 'although' introduces the contrast between public celebrations and missing feature complaints.",
            { id: "mock-10-gram-06", type: "grammar", topic: "Conjunctions", difficulty: "medium" }
          ),
          makeMCQ(
            "Among all the market expansion strategies evaluated, the self-service freemium model achieved the _____ customer acquisition rate.",
            "highest",
            ["higher", "high", "more high"],
            3, // D
            "Superlative form 'highest' is required when comparing more than two strategies.",
            { id: "mock-10-gram-07", type: "grammar", topic: "Adjectives & Adverbs", difficulty: "medium" }
          ),
          makeMCQ(
            "Comprehensive release notes and API migration guides _____ to all enterprise customers forty-eight hours prior to launch.",
            "are dispatched",
            ["is dispatched", "dispatching", "dispatched"],
            0, // A
            "Passive voice present simple plural ('are dispatched') matches the plural compound subject 'notes and guides'.",
            { id: "mock-10-gram-08", type: "grammar", topic: "Voice & Modals", difficulty: "medium" }
          ),
          makeMCQ(
            "The VP of Product, _____ keynote presentation unveiled the new generative AI assistant, received widespread industry praise.",
            "whose",
            ["who", "whom", "which"],
            1, // B
            "Possessive relative pronoun 'whose' describes the keynote presentation belonging to the VP of Product.",
            { id: "mock-10-gram-09", type: "grammar", topic: "Pronouns & Relative Clauses", difficulty: "medium" }
          ),
          makeMCQ(
            "To maximize market penetration, the commercial team will _____ targeted incentive programs for early enterprise adopters.",
            "roll out",
            ["rolling out", "rolled out", "rollout"],
            2, // C
            "Modal auxiliary 'will' takes the base verb phrase 'roll out' (meaning to launch or introduce).",
            { id: "mock-10-gram-10", type: "grammar", topic: "Business Vocabulary", difficulty: "medium" }
          ),
        ],
        writing: [
          {
            id: "mock-10-wri-01",
            type: "writing",
            taskType: "email",
            prompt: "Write a product launch announcement email to internal client-facing teams (Sales, Customer Success, and Support) introducing the new Enterprise Reporting Suite, highlighting three key customer benefits, and detailing the enablement schedule.",
            context: "Launch date: November 20. Key benefits: real-time dashboard analytics, automated scheduled PDF exports, and role-based permissions. Enablement webinars: Tuesday and Thursday at 10:00 AM EST.",
            minWords: 90,
            maxWords: 160,
            recommendedMinutes: 10,
            scoringCriteria: ["Energizing professional tone", "Clear value proposition breakdown", "Actionable enablement webinar schedule", "Clear call to action for sales readiness"],
            modelAnswer: "Team,\n\nWe are thrilled to announce the official commercial launch of our Enterprise Reporting Suite, scheduled for general availability on Tuesday, November 20!\n\nThis release equips our corporate clients with powerful data capabilities engineered to drive operational intelligence:\n\n1. Real-Time Telemetry Dashboards: Live operational metrics updating with sub-second latency.\n2. Automated Scheduled Exports: Seamless distribution of customized executive PDF and CSV summaries directly to client leadership inboxes.\n3. Granular Role-Based Access Controls: Enterprise-grade permission controls ensuring rigorous data governance across multi-tier teams.\n\nTo ensure our client-facing teams are fully prepared to drive adoption and answer customer queries, we are hosting two mandatory Go-to-Market Enablement Webinars:\n• Session 1: Tuesday, November 16, at 10:00 AM EST\n• Session 2: Thursday, November 18, at 10:00 AM EST\n\nPlease register via the link below and review the attached customer battle cards.\n\nBest regards,\nProduct Marketing Director",
          },
          {
            id: "mock-10-wri-02",
            type: "writing",
            taskType: "summary",
            prompt: "Summarize the Product-Led Growth (PLG) methodology and explain how frictionless self-service onboarding accelerates enterprise expansion compared to traditional top-down sales cycles.",
            context: "Focus on user-centric product value realization, viral bottom-up adoption, lowering customer acquisition cost (CAC), and data-driven upsell triggers.",
            minWords: 75,
            maxWords: 130,
            recommendedMinutes: 10,
            scoringCriteria: ["Crisp commercial analysis", "Accurate PLG concept definitions", "Logical organizational structure", "Concise academic prose"],
            modelAnswer: "Product-Led Growth (PLG) is a go-to-market strategy that positions the software product itself as the primary vehicle for customer acquisition, retention, and expansion. Unlike traditional top-down sales models—which rely heavily on cold outreach, lengthy procurement negotiations, and executive presentations—PLG prioritizes frictionless self-service onboarding. End users immediately experience core product value through freemium or trial tiers without upfront sales gatekeeping. As adoption spreads organically within teams through bottom-up advocacy and collaborative features, usage data generates actionable expansion signals. Enterprise sales teams can then engage account leaders with verified utilization metrics and proven organizational ROI, substantially compressing sales cycles and driving down Customer Acquisition Costs (CAC).",
          },
        ],
        situational: [
          makeSituational(
            "Two days before a major commercial product launch, your quality assurance lead discovers a minor cosmetic alignment bug on mobile Safari screens that does not impact transactional functionality.",
            "Evaluate the bug's severity with the product manager, determine that core transactional workflows are fully operational, document the issue as a known cosmetic defect for an expedited post-launch patch, and proceed with the launch.",
            [
              "Cancel the entire worldwide commercial launch and fire the front-end developer immediately.",
              "Pretend the bug does not exist and delete all automated mobile testing scripts from the repository.",
              "Announce on social media that the software is broken and instruct customers not to buy it."
            ],
            3, // D
            "Pragmatic release management balances minor non-blocking cosmetic defects against commercial launch commitments while planning fast post-launch patches.",
            { id: "mock-10-sit-01" }
          ),
          makeSituational(
            "Your sales team begins promising enterprise clients a major custom feature that has not been designed, approved, or scheduled on your engineering roadmap.",
            "Convene an immediate alignment meeting between product management and sales leadership, clarify the official product roadmap commitments, and establish clear boundaries to prevent sales reps from promising uncommitted features.",
            [
              "Force your engineering squad to cancel all vacations and work 100-hour weeks to build the unapproved feature.",
              "Secretly publish a fake press release claiming the feature is already completed and available.",
              "Ignore the sales promises and let the client sue your company for breach of contract later."
            ],
            0, // A
            "Product governance requires direct cross-functional alignment between sales and product leadership to establish firm roadmap boundaries and prevent overpromising.",
            { id: "mock-10-sit-02" }
          ),
          makeSituational(
            "During a live product launch webinar attended by 300 prospective clients, the demo environment crashes unexpectedly with a 500 internal server error.",
            "Remain completely calm, explain with a smile that the staging server experienced a transient restart, seamlessly transition to backup presentation slides or video recordings, and demonstrate the product workflows smoothly.",
            [
              "Burst into tears, blame your DevOps colleagues by name, and terminate the webinar abruptly.",
              "Pretend that the error 500 screen is a high-tech new security feature that users should admire.",
              "Sit in complete silence for thirty minutes while refreshing the crashed browser window over and over."
            ],
            1, // B
            "Composure and prepared redundancy (backup slide decks or pre-recorded walkthroughs) enable presenters to navigate live technical glitches gracefully and professionally.",
            { id: "mock-10-sit-03" }
          ),
          makeSituational(
            "Customer Support representatives report that incoming tickets have doubled following yesterday's release because users cannot find the new navigation menu.",
            "Work with the UX design lead to deploy an immediate in-app tooltip walkthrough guiding users to the new menu, publish a quick 60-second video guide, and update the help center knowledge base.",
            [
              "Instruct the customer support team to delete all incoming tickets and ignore complaining users.",
              "Revert the entire software platform back to its five-year-old legacy user interface permanently.",
              "Blame the end users publicly on your corporate blog for not knowing how to read menus."
            ],
            2, // C
            "Deploying lightweight in-app guidance tooltips and video guides resolves user friction rapidly without requiring full architectural rollbacks.",
            { id: "mock-10-sit-04" }
          ),
          makeSituational(
            "A prominent enterprise client threatens to cancel their subscription because a deprecated feature they relied upon was retired in the latest software update.",
            "Acknowledge the client's frustration, explain the security or architectural rationale behind the deprecation, provide temporary legacy API access if feasible, and personally assist them with migrating to the modern alternative.",
            [
              "Tell the client that their business does not matter and invite them to cancel their contract immediately.",
              "Hack the production database to force the deprecated insecure code back into production for that single client.",
              "Refuse to answer the client's calls and instruct your account team to block their email address."
            ],
            3, // D
            "Empathetic customer success management combines temporary transitional support with dedicated migration assistance to protect client retention.",
            { id: "mock-10-sit-05" }
          ),
          makeSituational(
            "Your product marketing team produces launch collateral that exaggerates the capabilities of your AI features, claiming the system possesses 'flawless human-level intelligence.'",
            "Intervene with marketing and legal leadership, present an objective technical assessment of the AI model's true capabilities and limitations, and adjust the copy to reflect accurate, defensible, and compliant claims.",
            [
              "Approve the exaggerated copy because exaggerated claims will help sales hit their quarterly revenue targets.",
              "Post anonymous complaints online accusing your marketing team of corporate fraud.",
              "Resign from your job immediately without explaining your concerns to anyone in leadership."
            ],
            0, // A
            "Upholding technical accuracy and regulatory truth-in-advertising protects the enterprise from severe legal, regulatory, and brand reputational liabilities.",
            { id: "mock-10-sit-06" }
          ),
        ],
        reading: {
          title: "Product-Led Growth & Modern Go-To-Market Enablement: The Convergence of Product, Sales, and Success",
          text: `The paradigm of enterprise software go-to-market (GTM) strategy has undergone a seismic transformation over the past decade. In the legacy enterprise model, software distribution was dominated by top-down, sales-led motions. Enterprise buyers—predominantly Chief Information Officers and procurement committees—were courted through extensive golf outings, multi-month Request for Proposal (RFP) marathons, and scripted product demos. Software was purchased on multi-year commitments before end users ever touched a keyboard. Deployment cycles often spanned quarters or years, and software utilization frequently languished, leading to high shelfware rates and customer churn.\n\nIn contemporary technology markets, this hierarchy has been upended by the emergence of Product-Led Growth (PLG). In a PLG organization, the product itself serves as the primary conduit for customer acquisition, user onboarding, retention, and viral expansion. Pioneered by companies like Slack, Zoom, and Atlassian, PLG leverages self-service freemium or trial architectures that allow individual practitioners to test, adopt, and integrate software within minutes. Value realization—often termed the 'Time to Value' (TTV)—is compressed from months to moments. As practitioners experience tangible productivity gains, organic peer recommendations drive bottom-up adoption across team departments.\n\nHowever, a common misconception is that Product-Led Growth renders enterprise sales obsolete. In reality, mature technology organizations operate a sophisticated hybrid model known as 'Product-Led Sales' (PLS). PLS does not replace human sales professionals; rather, it supercharges them with high-intent product usage telemetry. Rather than pursuing cold outreach, sales representatives monitor Product Qualified Leads (PQLs)—accounts whose active usage patterns (such as exceeding collaborative seat limits, executing high-volume API requests, or attempting to configure SSO) signal readiness for enterprise-tier governance, security, and volume licensing.\n\nTo execute this hybrid motion successfully, organizations must align their Go-to-Market enablement infrastructure across three interconnected pillars. First, Product Marketing must craft precise value messaging and modular battle cards that equip client-facing teams to articulate technical differentiators against competitors. Second, Customer Success must shift from reactive ticket resolution to proactive customer lifecycle orchestration, analyzing cohort health scores to preempt churn before renewals approach. Finally, Engineering and Product teams must build observability and in-app onboarding tools directly into the application canvas, ensuring that every release is accompanied by frictionless discovery and measurable user delight.`,
          questions: [
            makeMCQ(
              "What critical operational flaw characterized the traditional legacy top-down enterprise software sales model?",
              "Software was purchased on multi-year contracts before end users tried it, leading to high shelfware rates and churn.",
              [
                "Software was distributed completely free of charge to all corporate users without revenue models.",
                "Enterprise software was legally forbidden from using computer networks or relational databases.",
                "Procurement committees were replaced entirely by automated artificial intelligence algorithms."
              ],
              1, // B
              "The passage states: 'Software was purchased on multi-year commitments before end users ever touched a keyboard... leading to high shelfware rates and customer churn.'",
              { id: "mock-10-read-q01" }
            ),
            makeMCQ(
              "In Product-Led Sales (PLS), how do sales representatives identify high-intent enterprise opportunities?",
              "By monitoring Product Qualified Leads (PQLs) whose active telemetry signals readiness for enterprise-tier features.",
              [
                "By sending unsolicited cold marketing faxes to random residential phone numbers.",
                "By requiring all engineers to knock on doors in physical office parks.",
                "By purchasing unverified email address lists from third-party advertising brokers."
              ],
              2, // C
              "The text explains: 'sales representatives monitor Product Qualified Leads (PQLs)—accounts whose active usage patterns... signal readiness for enterprise-tier governance, security, and volume licensing.'",
              { id: "mock-10-read-q02" }
            ),
            makeMCQ(
              "What concept does the text define as 'Time to Value' (TTV)?",
              "The rapid timeframe within which a new end user realizes tangible product value from software.",
              [
                "The total number of years required for an enterprise to pay off its bank loan liabilities.",
                "The duration of an executive lunch meeting between sales reps and procurement officers.",
                "The time required for an offshore engineering team to compile a legacy COBOL program."
              ],
              3, // D
              "The passage mentions: 'Value realization—often termed the \"Time to Value\" (TTV)—is compressed from months to moments.'",
              { id: "mock-10-read-q03" }
            ),
            makeMCQ(
              "According to the text, what proactive transition must Customer Success teams make in modern enablement?",
              "Transitioning from reactive ticket resolution to proactive lifecycle orchestration using cohort health scores.",
              [
                "Terminating all telephone customer support channels to eliminate operating expenses.",
                "Focusing exclusively on filing patent applications for software algorithms.",
                "Transferring all customer relationship management duties to junior marketing interns."
              ],
              0, // A
              "The final paragraph states: 'Customer Success must shift from reactive ticket resolution to proactive customer lifecycle orchestration, analyzing cohort health scores to preempt churn.'",
              { id: "mock-10-read-q04" }
            ),
          ],
        },
        listening: {
          title: "Audio Briefing: Global Product Launch Go-to-Market Readiness Review",
          audioTranscript: `Good morning, regional sales directors, customer success leads, and technical product managers. Welcome to our Go-to-Market Operational Readiness Review for the Global Launch of our Analytics 4.0 Platform. I am Nathan Brooks, Vice President of Product Commercialization.\n\nWith our general availability date officially set for Tuesday, November 18, our purpose today is to confirm launch operational readiness across all client-facing squads.\n\nFirst, our marketing team has completed the distribution of our digital enablement toolkit. Over the past week, we uploaded twenty-four interactive product battle cards, ten recorded customer walkthroughs, and our updated enterprise pricing matrix to our internal sales portal. As of yesterday evening, 91% of our global enterprise sales representatives have completed the mandatory certification assessment, surpassing our launch threshold of 85%.\n\nSecond, regarding customer success and technical support readiness: our tier-one and tier-two support squads have concluded four scenario-based simulation drills. These drills focused on user provisioning, role-based access migration, and troubleshooting API webhook integrations. Average resolution time during simulations clocked in at six minutes and forty seconds, well within our SLA ceiling of ten minutes.\n\nThird, on the engineering side, our cloud infrastructure team has completed load testing across four global AWS regions, validating that our telemetry ingestion pipelines easily maintain sub-100-millisecond response latencies under three times our forecasted peak user load.\n\nOur final pre-launch checkpoint is scheduled for Monday at 14:00 UTC, where regional directors will deliver their final go/no-go confirmations. Thank you for your relentless dedication, and let us open the floor for regional questions.`,
          durationSeconds: 150,
          questions: [
            makeMCQ(
              "What percentage of enterprise sales representatives have completed the mandatory certification assessment?",
              "91%",
              ["45%", "65%", "100%"],
              2, // C
              "Nathan Brooks states: 'As of yesterday evening, 91% of our global enterprise sales representatives have completed the mandatory certification assessment, surpassing our launch threshold of 85%.'",
              { id: "mock-10-list-q01" }
            ),
            makeMCQ(
              "What average resolution time did support squads achieve during scenario-based simulation drills?",
              "Six minutes and forty seconds",
              ["Thirty seconds", "Twelve minutes", "Forty-five minutes"],
              3, // D
              "Nathan reports: 'Average resolution time during simulations clocked in at six minutes and forty seconds, well within our SLA ceiling of ten minutes.'",
              { id: "mock-10-list-q02" }
            ),
            makeMCQ(
              "Under what load condition was sub-100ms response latency validated across global cloud regions?",
              "Under three times the forecasted peak user load",
              [
                "Under zero simulated user traffic conditions",
                "Only during overnight maintenance hours",
                "Under ten percent of standard weekday traffic"
              ],
              0, // A
              "Nathan explicitly notes: 'validating that our telemetry ingestion pipelines easily maintain sub-100-millisecond response latencies under three times our forecasted peak user load.'",
              { id: "mock-10-list-q03" }
            ),
            makeMCQ(
              "When is the final pre-launch go/no-go confirmation checkpoint scheduled to take place?",
              "Monday at 14:00 UTC",
              ["Friday at midnight", "Tuesday morning at 08:00 UTC", "Wednesday afternoon"],
              1, // B
              "The speaker confirms: 'Our final pre-launch checkpoint is scheduled for Monday at 14:00 UTC, where regional directors will deliver their final go/no-go confirmations.'",
              { id: "mock-10-list-q04" }
            ),
          ],
        },
        speaking: [
          {
            id: "mock-10-spk-01",
            type: "speaking",
            prompt: "Deliver a compelling 90-second product elevator pitch to a prospective enterprise Chief Technology Officer, explaining why they should upgrade from legacy batch analytics to your real-time streaming analytics platform.",
            context: "Address latency challenges in legacy reporting, emphasize real-time decision intelligence, data governance compliance, and tangible ROI.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Executive value proposition hook", "Contrasting legacy batch latency vs real-time streaming intelligence", "Enterprise governance and security compliance", "Measurable business impact and call to action"],
            modelTranscript: "In today's hyper-competitive digital economy, making strategic decisions based on twenty-four-hour-old batch reporting is like navigating high-speed traffic by looking exclusively in your rearview mirror. When your engineering and business teams wait for overnight batch jobs to complete, critical customer friction points, payment gateway degradations, and inventory anomalies remain undetected until the damage is already done. Our next-generation Streaming Analytics platform transforms operational data into actionable, sub-second decision intelligence. Built on distributed cloud architecture with native Kafka and Redis streaming, it ingests millions of events per second with sub-hundred-millisecond latency. More importantly, it integrates enterprise-grade role-based access control and automated compliance auditing out of the box. By migrating from batch processing to real-time telemetry, our enterprise partners reduce operational incident containment times by seventy percent and unlock immediate revenue optimizations. I would welcome the opportunity to show you a fifteen-minute tailored demo of our platform running on your sample data.",
          },
          {
            id: "mock-10-spk-02",
            type: "speaking",
            prompt: "Describe how a cross-functional team should manage customer feedback when early adopters report significant friction with a newly released user interface overhaul.",
            context: "Detail how product, UX design, engineering, and customer support collaborate to triage feedback, prioritize refinements, and communicate transparently.",
            preparationSeconds: 30,
            recordingSeconds: 90,
            recommendedMinimumWords: 90,
            keyFocusAreas: ["Synthesizing multi-channel customer feedback", "Differentiating temporary change aversion from genuine usability flaws", "Rapid cross-functional triage and sprint prioritization", "Transparent customer communication and closing the feedback loop"],
            modelTranscript: "When launching a major UI overhaul, user friction is natural, but cross-functional teams must distinguish between temporary change resistance and genuine usability defects. The first step is consolidating feedback from customer support tickets, in-app heatmaps, and advisory council surveys into a centralized triage dashboard. Product managers, UX designers, and engineering leads must review these signals daily to identify severe UX bottlenecks—such as buried navigation menus or multi-step checkout friction. Once high-friction areas are identified, the engineering squad should deploy quick tactical improvements, such as guided in-app tooltips or shortcut keys, in rapid weekly patch cycles. Simultaneously, the product marketing team must communicate transparently with users through release changelogs and video walkthroughs, acknowledging their feedback and demonstrating that their input directly shapes product refinements. Closing this feedback loop turns initial user frustration into long-term brand advocacy.",
          },
        ],
      },
    },
  ];
}

