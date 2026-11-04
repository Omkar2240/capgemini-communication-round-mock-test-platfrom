# Build CommPrep AI — Capgemini Communication Assessment Simulator

Act as a senior full-stack frontend engineer, product designer, UI/UX architect, and assessment-platform developer.

Your task is to design and build a complete, production-quality frontend application called **CommPrep AI**.

The application is a personal practice platform designed to help students prepare for Capgemini-style English and Communication Assessments.

The objective is to simulate a realistic corporate communication examination environment, allowing students to practise 15 complete mock tests covering grammar, business writing, situational awareness, reading comprehension, listening comprehension, and spoken communication.

This is an independent educational practice simulator. Do not claim affiliation with Capgemini or reproduce proprietary examination questions.

---

# 1. PRODUCT OBJECTIVE

Build a realistic examination preparation platform with:

- 15 complete mock assessments.
- Six communication assessment sections.
- Realistic examination interface.
- Countdown timers and section-wise timing.
- Multiple-choice questions.
- Professional email and memo writing tasks.
- Workplace situational response tasks.
- Reading comprehension passages.
- Listening comprehension audio exercises.
- Spoken communication recording tasks.
- Performance analytics.
- Detailed feedback after every assessment.
- AI-generated question content, prepared and bundled locally.
- Predefined evaluation rubrics for frontend-only scoring.

The application must work without requiring a backend, database, or API credentials.

Do not create a simple landing page or static UI prototype. Implement working interactions and a complete mock examination workflow.

# 2. TECHNOLOGY STACK

Use the following stack:

- Next.js with App Router.
- React.
- TypeScript.
- Tailwind CSS.
- shadcn/ui.
- Lucide React icons.
- Zustand for global examination state.
- Recharts for analytics.
- localStorage or IndexedDB for persistent progress.
- Browser MediaRecorder API for microphone recording.
- Browser SpeechSynthesis API for listening exercises.

Use reusable components and clean architecture.

Avoid unnecessary dependencies.

# 3. DESIGN SYSTEM AND VISUAL DIRECTION

Design a professional, modern, corporate examination interface.

Visual inspiration:
- Enterprise assessment platforms.
- Professional online examination systems.
- Modern SaaS dashboards.
- Minimal academic testing interfaces.

Design characteristics:

- Clean white and light-gray backgrounds.
- Navy blue and professional blue as primary colors.
- Subtle borders.
- Minimal shadows.
- Rounded cards.
- Clear typography.
- Strong visual hierarchy.
- Consistent spacing.
- Accessible contrast.
- Responsive layouts.

Suggested colors:

Primary: #2457D6
Dark Navy: #14264B
Background: #F5F7FB
Card Background: #FFFFFF
Primary Text: #172033
Secondary Text: #718096
Success: #16845B
Warning: #D18A25
Danger: #DC4545

Use Manrope for headings and DM Sans for body text.

Avoid:
- Excessive gradients.
- Overly colorful dashboards.
- Unnecessary animations.
- Glassmorphism everywhere.
- Decorative illustrations that distract from the exam.
- Oversized dashboard cards.
- Generic AI-generated landing page aesthetics.

The examination interface must prioritize readability, speed, and usability.

# 4. APPLICATION ROUTES

Implement these routes:

/                       Dashboard
/mock-tests             All mock tests
/exam/[testId]          Examination interface
/results/[attemptId]    Assessment results
/analytics              Performance analytics
/settings               Practice preferences

Use proper navigation and consistent application layout.

# 5. DASHBOARD

Create a professional dashboard.

Include:

A. Welcome section
- Welcome message.
- Brief description of the platform.
- Start preparation CTA.
- Quick access to mock tests.

B. Performance statistics
- Total mock tests attempted.
- Completed mock tests.
- Average score.
- Best score.
- Total practice time.
- Current practice streak.

C. Skill performance
Display scores for:

- Grammar.
- Business writing.
- Situational awareness.
- Reading comprehension.
- Listening comprehension.
- Spoken communication.

Use charts and progress bars.

D. Recommended next test
Recommend the next unattempted mock test or a test targeting weak skills.

E. Recent activity
Display:
- Test name.
- Completion date.
- Overall score.
- Performance status.
- View results action.

All dashboard data must be derived from actual saved attempts, not hardcoded demonstration values.

# 6. MOCK TEST LIBRARY

Create exactly 15 complete mock tests.

Divide them into three difficulty levels.

Foundation:
- Mock Test 01
- Mock Test 02
- Mock Test 03
- Mock Test 04
- Mock Test 05

Intermediate:
- Mock Test 06
- Mock Test 07
- Mock Test 08
- Mock Test 09
- Mock Test 10

Advanced:
- Mock Test 11
- Mock Test 12
- Mock Test 13
- Mock Test 14
- Mock Test 15

Each mock test must include all six assessment sections.

Each test must contain unique questions and scenarios. Do not simply shuffle or repeat the same questions across different tests.

Each mock card should display:
- Test number.
- Test title.
- Difficulty.
- Estimated duration.
- Number of questions/tasks.
- Completion status.
- Previous score if attempted.
- Start or retake button.

Support:
- Start test.
- Retake test.
- Review previous attempt.
- Resume an interrupted test where appropriate.

# 7. EXAMINATION STRUCTURE

Use this practice blueprint for every mock test.

Total: 28 numbered assessment items.

SECTION 1: GRAMMAR AND SENTENCE CORRECTION

10 questions.

Topics:
- Subject-verb agreement.
- Tenses.
- Articles.
- Prepositions.
- Pronouns.
- Conjunctions.
- Active and passive voice.
- Direct and indirect speech.
- Sentence correction.
- Error identification.
- Fill in the blanks.
- Vocabulary in context.

Question format:
- Multiple-choice questions.
- Four answer options.
- One correct answer.
- Explanation for every question.

Difficulty should increase across the 15 mock tests.

SECTION 2: BUSINESS COMMUNICATION WRITING

2 writing tasks.

Generate realistic workplace situations.

Examples:
- Request an extension from a manager.
- Inform a client about a project delay.
- Announce new code review guidelines.
- Request clarification about an assignment.
- Write a professional meeting follow-up.
- Draft a memo announcing a policy change.
- Communicate a technical issue.
- Apologize for missing a deadline.

Provide:
- Scenario description.
- Writing instructions.
- Expected communication format.
- Word count guidance.
- Rich textarea or lightweight text editor.
- Live word counter.

Evaluation criteria:
- Grammar.
- Vocabulary.
- Clarity.
- Professional tone.
- Relevance.
- Completeness.
- Structure.

SECTION 3: SITUATIONAL AWARENESS

6 workplace scenarios.

Create realistic corporate situations involving:

- Team conflicts.
- Missed deadlines.
- Client communication.
- Unclear requirements.
- Technical issues.
- Workplace ethics.
- Prioritization.
- Collaboration.
- Accountability.
- Problem-solving.

Provide two activities per scenario:

1. Choose the most appropriate response from four options.
2. Write a short response in a suitable communication style.

Some scenarios should require a short professional chat response, while others should require an email-style response.

Evaluate the selected answer and the written response separately.

SECTION 4: READING COMPREHENSION

4 questions.

Each mock test should contain one or more passages.

Passage topics:
- Technology.
- Artificial intelligence.
- Workplace collaboration.
- Business operations.
- Cybersecurity.
- Environmental sustainability.
- Project management.
- Digital transformation.
- Professional development.

Requirements:
- Different passage lengths.
- Easy, medium and difficult vocabulary.
- Inference-based questions.
- Main-idea questions.
- Contextual vocabulary questions.
- Factual questions.

Do not make the correct answer obvious through wording.

SECTION 5: LISTENING COMPREHENSION

4 questions.

Create workplace conversation scripts.

Examples:
- Manager and employee discussions.
- Client meetings.
- Project updates.
- Scheduling conversations.
- Team coordination.
- Customer support calls.

Requirements:
- Each test has a unique audio script.
- Provide four comprehension questions.
- Use browser SpeechSynthesis to play the scripts.
- Include play and replay controls.
- Display audio playback status.
- Allow the user to answer after listening.
- Avoid showing the transcript during exam mode.
- Provide the transcript and explanations during review mode.

Do not depend on external audio URLs.

SECTION 6: SPOKEN COMMUNICATION SIMULATION

2 speaking tasks.

Example topics:
- Introduce yourself.
- Describe your final-year project.
- Explain the importance of teamwork.
- Describe a challenging experience.
- Discuss the influence of AI.
- Talk about a technology you admire.
- Explain how you handle deadlines.
- Describe your career goals.

For each task:

1. Display the speaking topic.
2. Provide 30 seconds of preparation time.
3. Start a 90-second recording window.
4. Record microphone input using MediaRecorder.
5. Display a recording indicator.
6. Display a countdown.
7. Allow recording playback.
8. Allow the user to enter an optional transcript for feedback.

Speaking evaluation criteria:
- Fluency.
- Grammar.
- Vocabulary.
- Coherence.
- Relevance.
- Pronunciation self-review.

IMPORTANT:
Do not claim that microphone recordings are automatically evaluated for pronunciation when only a text transcript is available.

For this frontend-only version, use predefined rubrics and optional transcript-based feedback.

# 8. EXAM ENGINE

This is the most important part of the application.

Build a reusable examination engine.

Requirements:

A. Section-wise timing

Implement independent countdown timers for all six sections.

Use configurable practice timings.

Suggested practice configuration:
- Grammar: 12 minutes.
- Business writing: 10 minutes.
- Situational awareness: 10 minutes.
- Reading comprehension: 10 minutes.
- Listening comprehension: 8 minutes.
- Spoken communication: 10 minutes.

Total: 60 minutes.

These are simulator settings, not verified official Capgemini timings.

B. Timer behavior

- Timer starts when the assessment begins.
- Display remaining time clearly.
- Use a warning color when less than one minute remains.
- Automatically submit or lock the current section when its timer expires.
- Move to the next section automatically.
- Prevent navigation back to a completed section in strict exam mode.
- Pause the timer when the browser tab is hidden only if the selected practice mode explicitly allows it. Default to continuing the timer.

C. Question navigation

- Display current question number.
- Display answered/unanswered status.
- Display section progress.
- Allow question navigation within the active section.
- Clearly distinguish answered and unanswered questions.

D. Answer persistence

- Automatically save answers.
- Preserve progress during accidental refreshes.
- Restore interrupted attempts.
- Clear temporary state after final submission.

E. Submission

- Display a confirmation dialog.
- Show unanswered question count.
- Prevent accidental duplicate submission.
- Save final results locally.

F. Two modes

Exam mode:
- Timers enabled.
- No immediate explanations.
- Strict section navigation.
- Results shown after submission.

Practice mode:
- Timers disabled.
- Explanations available.
- Flexible navigation.
- Immediate feedback where appropriate.

# 9. AI-GENERATED CONTENT AND QUESTION BANK

The project must be frontend-only at runtime.

Use an AI coding assistant during development to generate and validate the question bank.

Store the generated question bank locally in structured JSON or TypeScript files.

Suggested structure:

/data/mock-tests/mock-01.json
/data/mock-tests/mock-02.json
...
/data/mock-tests/mock-15.json

Every question must have a stable ID.

Example grammar question:

{
  "id": "grammar-001",
  "type": "multiple_choice",
  "prompt": "Neither of the employees _____ available.",
  "options": [
    "are",
    "is",
    "were",
    "have"
  ],
  "correctAnswer": 1,
  "explanation": "Neither takes a singular verb in this construction.",
  "difficulty": "easy"
}

Example writing question:

{
  "id": "writing-001",
  "type": "email",
  "prompt": "Write an email requesting a project deadline extension.",
  "scenario": "An unexpected API issue has delayed integration testing.",
  "expectedFormat": "professional_email",
  "recommendedWordCount": {
    "min": 100,
    "max": 150
  },
  "evaluationCriteria": [
    "clarity",
    "grammar",
    "professional_tone",
    "completeness"
  ]
}

Example speaking question:

{
  "id": "speaking-001",
  "type": "speaking",
  "prompt": "Describe a technology that has influenced your learning.",
  "preparationSeconds": 30,
  "recordingSeconds": 90,
  "recommendedMinimumWords": 100
}

Content quality requirements:

- Avoid repeated questions.
- Avoid ambiguous answer choices.
- Ensure answer keys are correct.
- Provide meaningful explanations.
- Maintain realistic corporate scenarios.
- Increase difficulty progressively.
- Validate all 15 tests before using them.

Generate a sufficiently diverse question bank for all 15 tests, not just a few templates with shuffled answer choices.

# 10. SCORING AND FEEDBACK ENGINE

Implement deterministic scoring locally.

Suggested section weighting:

- Grammar: 20%.
- Business writing: 20%.
- Situational awareness: 15%.
- Reading comprehension: 15%.
- Listening comprehension: 15%.
- Spoken communication: 15%.

Grammar:
Score correct answers automatically.

Reading:
Score correct answers automatically.

Listening:
Score correct answers automatically.

Situational awareness:
Evaluate the selected response using the predefined answer key.
Evaluate written responses using a transparent rubric.

Business writing:
Evaluate using:
- Grammar: 20 points.
- Clarity: 20 points.
- Professional tone: 20 points.
- Relevance: 20 points.
- Completeness: 20 points.

Speaking:
Evaluate optional transcripts using:
- Fluency indicators: 20 points.
- Grammar: 20 points.
- Vocabulary: 15 points.
- Coherence: 20 points.
- Relevance: 15 points.
- Structure: 10 points.

Be transparent that deterministic heuristic scores are practice estimates, not scientifically validated language proficiency scores.

# 11. RESULT SCREEN

After completing a mock test, display a comprehensive report.

Include:

- Overall score out of 100.
- Section-wise performance.
- Correct and incorrect answers.
- Time taken.
- Writing feedback.
- Situational response feedback.
- Speaking self-review.
- Strongest skill.
- Weakest skill.
- Recommended improvement areas.

For MCQs, show:
- User's answer.
- Correct answer.
- Explanation.

For writing, show:
- Submitted response.
- Word count.
- Rubric breakdown.
- Suggested improvements.
- Example of a stronger response.

For speaking, show:
- Recorded audio playback if available.
- Optional transcript.
- Feedback.
- Suggested improvements.

Provide:
- Retake button.
- Return to dashboard.
- Next mock test.
- Review incorrect answers.

# 12. PERFORMANCE ANALYTICS

Create a separate analytics page.

Track:

- Total attempts.
- Average score.
- Highest score.
- Score improvement over time.
- Section-wise accuracy.
- Grammar topic weaknesses.
- Writing rubric performance.
- Speaking transcript feedback trends.
- Time spent per section.

Use Recharts for:
- Score progression line chart.
- Skill distribution bar chart.
- Section performance chart.

Provide recommendations based on actual attempt data.

Example:
"Your reading comprehension accuracy is strong, but your writing scores are lower. Practise professional email structure and sentence clarity."

# 13. LOCAL DATA PERSISTENCE

Use localStorage or IndexedDB.

Persist:

- Completed mock tests.
- Previous attempts.
- Scores.
- Answers.
- Writing responses.
- Optional speaking transcripts.
- User settings.
- Practice mode preferences.

Create reusable storage utilities.

Handle malformed or missing stored data safely.

Avoid accessing browser storage during server-side rendering.

# 14. COMPONENT ARCHITECTURE

Create reusable components:

Layout:
- AppSidebar.
- TopNavigation.
- PageHeader.

Dashboard:
- WelcomeBanner.
- StatCard.
- SkillPerformance.
- RecentAttempts.
- RecommendedTest.

Mock tests:
- MockTestCard.
- DifficultyBadge.
- TestProgress.

Examination:
- ExamHeader.
- CountdownTimer.
- SectionNavigation.
- QuestionNavigator.
- MCQQuestion.
- WritingEditor.
- SituationalQuestion.
- ReadingPassage.
- ListeningPlayer.
- SpeakingRecorder.
- SubmissionDialog.

Results:
- OverallScore.
- SectionScoreCard.
- AnswerReview.
- WritingFeedback.
- SpeakingFeedback.
- ImprovementRecommendations.

Analytics:
- ScoreTrendChart.
- SkillBreakdown.
- PerformanceHistory.

Keep components small, reusable and properly typed.

# 15. ACCESSIBILITY AND RESPONSIVENESS

The application must work on:

- Desktop.
- Laptop.
- Tablet.
- Mobile.

Prioritize desktop for the examination experience.

Implement:
- Keyboard-friendly navigation.
- Visible focus states.
- Accessible form labels.
- Sufficient color contrast.
- Responsive layouts.
- Proper loading and error states.

# 16. DEVELOPMENT AND VALIDATION

Follow this implementation order:

Phase 1:
- Project setup.
- Design system.
- Main application layout.
- Dashboard.
- Mock test library.

Phase 2:
- Question bank.
- Exam state management.
- Timer engine.
- Question navigation.
- Answer persistence.

Phase 3:
- All six assessment sections.
- Writing editor.
- Listening playback.
- Speaking recorder.

Phase 4:
- Scoring engine.
- Results page.
- Review functionality.
- Analytics.

Phase 5:
- Populate and validate all 15 mock tests.
- Responsive improvements.
- Accessibility.
- Bug fixing.

Do not stop after generating the dashboard.

Do not leave placeholder buttons or nonfunctional interactions.

Do not hardcode dashboard statistics.

Do not duplicate questions to artificially reach 15 tests.

Do not introduce a backend, database, authentication system or paid API dependency.

After implementation:
- Run TypeScript checks.
- Run the production build.
- Fix all compilation errors.
- Test all six sections.
- Test section timeout behavior.
- Test page refresh and answer persistence.
- Test final submission and result calculation.
- Test all 15 mock test routes.

# 17. FINAL ACCEPTANCE CRITERIA

The project is considered complete only when:

1. All 15 mock tests are accessible.
2. Every test contains six working sections.
3. The assessment engine supports timed and untimed modes.
4. All MCQ questions can be answered and reviewed.
5. Writing responses are saved and evaluated.
6. Listening scripts can be played.
7. Speaking recordings can be created and played back.
8. Results are calculated and saved.
9. Dashboard statistics reflect real attempts.
10. Analytics display actual saved performance.
11. The application works without external AI API keys.
12. The interface is professional, responsive and consistent.
13. No critical console or build errors remain.

Build the complete application now.

Before finishing, provide:
- A summary of implemented functionality.
- The project directory structure.
- Installation and execution instructions.
- Any limitations that remain.

Prioritize a fully functional examination simulator over decorative UI elements.