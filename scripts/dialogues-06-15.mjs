export const DIALOGUES_06_TO_15 = {
  "mock-06": {
    context: "Cloud FinOps Steering Committee discussing Q3 compute savings, cross-region egress cost spikes, and remediation guardrails.",
    dialogue: [
      { speaker: "Priya", text: "Good morning David. Thanks for joining our monthly Cloud FinOps review. I want to highlight that our non-production compute spend dropped by 22% over the last sixty days, thanks to automated cluster shutdowns and 3-year Savings Plans." },
      { speaker: "David", text: "That is great news, Priya. However, our monitoring flagged a 35% cost spike in multi-region data egress. What is driving that increase?" },
      { speaker: "Priya", text: "Our database team discovered that cross-region analytical replication between Virginia and Frankfurt was streaming raw, uncompressed snapshots every fifteen minutes, alongside unaggregated debug log transfers." },
      { speaker: "David", text: "Understood. How will we bring those egress costs back within our board-approved budget ceiling of 1.4 million dollars?" },
      { speaker: "Priya", text: "Starting Friday, we are deploying gzip compression gateways which will slash bandwidth by approximately 65%, and local vector collectors to filter logs before transit." },
      { speaker: "David", text: "Excellent plan. That will stabilize our quarterly spend comfortably within target." }
    ]
  },
  "mock-07": {
    context: "Program portfolio financial reconciliation review addressing budget variance and corrective resource allocation.",
    dialogue: [
      { speaker: "Marcus", text: "Good afternoon Sarah. Let us review our midterm financial metrics for the Retail Omnichannel program as of Sprint 14." },
      { speaker: "Sarah", text: "Certainly Marcus. Our Planned Value was 2.8 million dollars, Earned Value stands at 2.65 million dollars, and Actual Cost has reached 3.1 million dollars. That gives us an SPI of 0.95 and a CPI of 0.85." },
      { speaker: "Marcus", text: "Our cost efficiency is flashing amber. What is the root cause of this 450,000-dollar budget overrun?" },
      { speaker: "Sarah", text: "The primary driver was retaining specialized senior external cloud architects six weeks longer than budgeted to resolve legacy ERP data schema mismatches." },
      { speaker: "Marcus", text: "To recover our margins, we are transitioning oversight to internal global delivery center leads, reducing our monthly blended rate by 28%." },
      { speaker: "Sarah", text: "Additionally, the client steering committee approved a 150,000-dollar formal budget adjustment under Change Request 12 to fund the additional ERP transformation." }
    ]
  },
  "mock-08": {
    context: "Blameless post-mortem debriefing following a Sev-1 authentication outage and reviewing corrective actions.",
    dialogue: [
      { speaker: "Danielle", text: "Good morning Alex. Let us review the timeline of yesterday's Sev-1 authentication incident. Monitoring flagged elevated errors at 08:12 UTC, and we isolated the root cause by 08:40 UTC." },
      { speaker: "Alex", text: "That is correct Danielle. The OAuth token signing key cache had expired without successfully rotating, which triggered a cascading thread deadlock in our Redis cluster." },
      { speaker: "Danielle", text: "Total service disruption lasted precisely 62 minutes before our engineers manually injected the updated signing keys and executed a rolling pod restart." },
      { speaker: "Alex", text: "To prevent recurrence, platform engineering is deploying automated key renewal alerts that fire thirty days, seven days, and 48 hours prior to expiration." },
      { speaker: "Danielle", text: "And we will validate the resilience of this fix with an automated chaos engineering simulation on staging next Tuesday." },
      { speaker: "Alex", text: "Agreed. All action items are documented in Jira and assigned for completion before the next release." }
    ]
  },
  "mock-09": {
    context: "Master Services Agreement contract negotiation between procurement leadership and software vendor executives.",
    dialogue: [
      { speaker: "Rachel", text: "Good morning Patrick. We need to finalize the unresolved risk clauses in our enterprise identity integration contract before execution." },
      { speaker: "Patrick", text: "Welcome Rachel. Our draft proposed capping aggregate liability at twelve months of recurring software fees, which is approximately 480,000 dollars." },
      { speaker: "Rachel", text: "Given that this platform authenticates over 50,000 corporate employees, that cap is insufficient. We counter-propose a super-cap of 5 million dollars specifically for data breach indemnification and gross negligence." },
      { speaker: "Patrick", text: "What about the service credit schedule under Schedule C?" },
      { speaker: "Rachel", text: "We require a 25% invoice credit if availability plunges below 99.0% in any calendar month, with contractual termination rights if breaches occur across three consecutive months." },
      { speaker: "Patrick", text: "Those terms are acceptable given the mission-critical scale of the deployment. We will update the contract draft accordingly." }
    ]
  },
  "mock-10": {
    context: "Go-to-market operational readiness review confirming sales enablement, customer support, and infrastructure metrics for product launch.",
    dialogue: [
      { speaker: "Nathan", text: "Welcome team. Our global launch of the Analytics 4.0 Platform is scheduled for Tuesday, November 18. Chloe, how is sales certification progressing?" },
      { speaker: "Chloe", text: "As of yesterday evening Nathan, 91% of our global enterprise sales representatives have completed the mandatory certification assessment, exceeding our 85% goal." },
      { speaker: "Nathan", text: "Excellent. How did customer support perform in their scenario-based simulation drills?" },
      { speaker: "Chloe", text: "Our tier-one and tier-two support squads achieved an average resolution time of six minutes and forty seconds during simulated triage, well within our ten-minute SLA." },
      { speaker: "Nathan", text: "On the infrastructure side, load tests across four AWS regions verified sub-100-millisecond response latency under three times the forecasted peak user load." },
      { speaker: "Chloe", text: "Fantastic. Our final pre-launch go/no-go checkpoint is set for Monday at 14:00 UTC." }
    ]
  },
  "mock-11": {
    context: "Executive steering committee reviewing Month-9 digital transformation velocity, middle management sentiment, and enablement initiatives.",
    dialogue: [
      { speaker: "Claire", text: "Good afternoon Robert. In our Month-9 transformation review, code deployment frequency has accelerated by 310% across thirty-four delivery squads, while failure rates dropped to 4.2%." },
      { speaker: "Robert", text: "Those delivery metrics are impressive Claire, but our cultural pulse survey of 4,200 employees revealed that sentiment among mid-level operational managers has plunged to 34% favorability." },
      { speaker: "Claire", text: "Yes, managers feel sidelined by decentralized decision-making. To remediate this, we are launching an intensive six-week 'Leadership in Complexity' executive coaching academy next Monday." },
      { speaker: "Robert", text: "How is the executive remuneration committee supporting this behavioral transition?" },
      { speaker: "Claire", text: "The committee ratified tying 40% of managerial annual bonuses to squad empowerment, cross-silo collaboration, and team retention metrics." },
      { speaker: "Robert", text: "That alignment of incentives will turn skeptical managers into enthusiastic transformation champions." }
    ]
  },
  "mock-12": {
    context: "Emergency board of directors briefing on cybersecurity breach containment, forensic timeline, and regulatory compliance.",
    dialogue: [
      { speaker: "Jonathan", text: "Members of the Board, thank you for convening. Dr. Elena, please deliver the forensic status update on this morning's security incident." },
      { speaker: "Elena", text: "Thank you Mr. Chairman. At 01:28 UTC—precisely 14 minutes post-detection—our security response squad severed network routing to the legacy cluster, isolating the infected subnet." },
      { speaker: "Jonathan", text: "What customer data was compromised, and what was secured?" },
      { speaker: "Elena", text: "Names, hashed passwords, and emails for 52,000 accounts were exposed. Crucially, credit card numbers, national identification tokens, and transactional histories were housed in our hardened AWS cluster and were completely uncompromised." },
      { speaker: "Sarah", text: "From a regulatory perspective, our GDPR statutory clock requires notification by 01:14 UTC on Thursday (within 72 hours). Our plan also provides affected customers twelve months of complimentary identity monitoring." },
      { speaker: "Jonathan", text: "Our commitment to total transparency and prompt customer support remains absolute." }
    ]
  },
  "mock-13": {
    context: "Data Governance and Privacy Steering Council reviewing European sovereign cloud migration and regulatory audit preparedness.",
    dialogue: [
      { speaker: "Julian", text: "Good morning Sophie. Let us review our European Sovereign Data Zone roadmap ahead of the French CNIL regulatory audit in November." },
      { speaker: "Sophie", text: "We have made significant progress Julian. Eighty-eight percent of European customer transactional databases are now migrated into dedicated sovereign Frankfurt availability zones with zero data corruption." },
      { speaker: "Julian", text: "However, our automated metadata scanner flagged that sixteen legacy analytics pipelines were transmitting unhashed European IP addresses to Virginia." },
      { speaker: "Sophie", text: "Under EU law, raw IP addresses constitute personal identifiable data. What is our technical remediation?" },
      { speaker: "Julian", text: "Our platform team will deploy edge tokenization proxies by this Friday midnight, replacing raw IPs with cryptographically salted ephemeral tokens before cross-region replication." },
      { speaker: "Sophie", text: "And we will complete the remaining twelve percent of database migrations by October 15 to achieve 100% sovereign isolation." }
    ]
  },
  "mock-14": {
    context: "Responsible AI Steering Committee reviewing private AI enclave adoption, algorithmic bias audit findings, and remediation controls.",
    dialogue: [
      { speaker: "Marcus", text: "Good morning Tara. Over the past sixty days, our private tenant AI platform onboarded 8,400 active corporate users, achieving a 42% acceleration in routine software code scaffolding without data leakage." },
      { speaker: "Tara", text: "That is substantial progress Dr. Marcus. However, our algorithmic bias audit on the Automated Customer Credit Scoring model revealed an 18% lower credit limit recommendation for minority zip codes." },
      { speaker: "Marcus", text: "What was the root cause of that disparity?" },
      { speaker: "Tara", text: "The training dataset ingested historical lending data from 2012 to 2018, inadvertently encoding legacy redlining through geographic proxy variables." },
      { speaker: "Marcus", text: "I have placed an immediate deployment freeze on that model. We are running a thirty-day remediation sprint with adversarial debiasing and equalized odds fairness constraints." },
      { speaker: "Tara", text: "Understood. The model will not be submitted for production sign-off until demographic parity variance drops below 2%." }
    ]
  },
  "mock-15": {
    context: "Joint M&A Systems Integration Steering Committee reviewing technical harmonization milestones and ERP cutover risk mitigation.",
    dialogue: [
      { speaker: "Arthur", text: "Welcome committee members. On Day-120 of our landmark merger, our identity federation squads have unified single-sign-on provisioning across all 38,000 global employee accounts on Okta and Azure AD." },
      { speaker: "Beatrice", text: "That is a major milestone Arthur. However, what is the status of our multi-currency general ledger reconciliation?" },
      { speaker: "Arthur", text: "Our financial integration audit detected an unacceptable 3.8% parity error rate, caused by conflicting depreciation algorithms between Omnicom's SAP S/4HANA engine and Apex's legacy Oracle NetSuite instance." },
      { speaker: "Beatrice", text: "How do we safeguard our financial close without delaying the business?" },
      { speaker: "Arthur", text: "In consultation with KPMG, we are instituting a 45-day parallel dual-run window starting October 1, processing transactional batches simultaneously on both systems." },
      { speaker: "Beatrice", text: "And we will not decommission the legacy Oracle NetSuite instance until variance rates remain below 0.01% across three consecutive month-end closes." }
    ]
  }
};

