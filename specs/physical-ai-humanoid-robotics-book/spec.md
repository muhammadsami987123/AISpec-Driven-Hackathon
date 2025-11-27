# /sp.specify - Physical AI & Humanoid Robotics Book Project

## Project Overview
Create a comprehensive, interactive book on "Physical AI & Humanoid Robotics" using Docusaurus, deploy to GitHub Pages, integrate a RAG chatbot, implement user authentication with personalization, and support Urdu translation.

---

## Core Deliverables (Base: 100 Points)

### 1. AI/Spec-Driven Book Creation with Docusaurus
**Objective:** Generate a professional, well-structured book using Claude Code and Spec-Kit Plus

**Book Structure:**
- **Title:** Physical AI & Humanoid Robotics: Bridging Digital Intelligence and Physical Reality
- **Chapters:** (Based on course modules)
  - Chapter 1: Introduction to Physical AI
  - Chapter 2: The Robotic Nervous System (ROS 2)
  - Chapter 3: The Digital Twin (Gazebo & Unity)
  - Chapter 4: The AI-Robot Brain (NVIDIA Isaac)
  - Chapter 5: Vision-Language-Action (VLA)
  - Chapter 6: Hardware Architecture & Lab Setup
  - Chapter 7: Capstone Project Implementation
  - Chapter 8: Cloud-Native Lab Infrastructure

**Content Requirements:**
- Each chapter derived from the course document provided
- Include learning outcomes, practical examples, and code snippets
- Technical depth suitable for students with AI/robotics background
- Visual diagrams for system architecture (SVG/PlantUML format)
- Structured with front matter, sidebars, and search functionality

**Docusaurus Configuration:**
- Use Docusaurus v3.x
- Deploy to GitHub Pages via GitHub Actions
- Implement dark/light theme toggle
- Configure search via Algolia or local search
- Setup versioning for future editions

**GitHub Setup:**
- Repository: `physical-ai-humanoid-robotics-book`
- Branch: `main` (production), `develop` (staging)
- GitHub Actions: Auto-deploy on push to main
- GitHub Pages: Enable Pages from GitHub Actions

---

### 2. Integrated RAG Chatbot Development
**Objective:** Embed a smart chatbot that answers questions about book content

**Technology Stack:**
- **Backend:** FastAPI (Python)
- **Vector DB:** Qdrant Cloud Free Tier
- **SQL DB:** Neon Serverless Postgres
- **LLM Integration:** OpenAI API (gpt-4 via Agents/ChatKit SDKs)
- **Frontend:** React component embedded in Docusaurus
- **Hosting:** Vercel (FastAPI) or Railway

**Chatbot Features:**
- Answer questions based on book content
- Answer questions based on user-selected text passages
- Maintain conversation context across multiple questions
- Provide source citations (link to chapter/section)
- Display confidence scores for responses
- Fallback to "I don't know" for out-of-scope questions
- Track user queries for analytics

**RAG Pipeline:**
1. Ingest all book chapters into Qdrant
2. Chunk content into 500-token segments with metadata (chapter, section, URL)
3. Generate embeddings via OpenAI `text-embedding-3-small`
4. Store embeddings + metadata in Qdrant
5. Store conversation history in Neon Postgres
6. Query similarity search → pass context to LLM → generate response

**API Endpoints (FastAPI):**
```
POST /api/chat - Submit query + conversation history
GET /api/health - Health check
POST /api/ingest - Trigger re-indexing of book content
GET /api/sources - Retrieve cited sources
```

**Frontend Integration:**
- Floating chatbot widget (bottom-right corner)
- Full-page modal chat view
- Text selection hook: Highlight text → "Ask AI about this"
- Chat history panel (persisted in browser storage or DB)
- Typing indicators and loading states

---

### 3. Authentication & User Profile System
**Technology:** Better-Auth (https://www.better-auth.com/)

**Signup Workflow:**
- Email/password authentication
- Onboarding questionnaire at signup:
  - Software background: (Beginner/Intermediate/Advanced)
  - AI experience: (None/Some/Extensive)
  - Robotics experience: (None/Some/Extensive)
  - Hardware access: (No access/Limited/Full lab access)
  - Primary use case: (Academic/Hobby/Professional)
  - Preferred learning pace: (Fast/Moderate/Thorough)
  - Prior experience with ROS: (Yes/No)
  - Preferred deployment environment: (Local/Cloud/Both)

**User Profile Storage:**
- Store responses in Neon Postgres (user_profiles table)
- Link profile to book personalization engine
- Privacy: GDPR-compliant data handling

**Authentication Features:**
- Social login (GitHub, Google)
- Email verification
- Session management
- Logout functionality
- Optional: 2FA support

---

## Bonus Features (Up to 50 Points Each)

### 4. Claude Code Subagents & Agent Skills (Bonus: 50 Points)
**Objective:** Build reusable intelligence components for content generation and chatbot enhancement

**Subagents to Create:**
1. **Content Validator Agent**
   - Validates chapter technical accuracy
   - Checks for consistency across chapters
   - Suggests improvements for clarity
   - Agent Skill: `validate_chapter(chapter_id, content_text)`

2. **Code Example Generator Agent**
   - Generates executable Python/ROS code snippets
   - Tests snippets for syntax correctness
   - Creates hands-on exercises
   - Agent Skill: `generate_code_example(concept, difficulty_level)`

3. **Visual Diagram Agent**
   - Generates PlantUML/Mermaid diagrams for system architecture
   - Creates flowcharts for robotics workflows
   - Agent Skill: `create_diagram(topic, diagram_type)`

4. **FAQ Generator Agent**
   - Analyzes chapters and generates FAQs
   - Identifies commonly misunderstood concepts
   - Agent Skill: `generate_faq(chapter_id)`

5. **Content Personalizer Agent**
   - Tailors explanations based on user background
   - Suggests alternative learning paths
   - Recommends prerequisite chapters
   - Agent Skill: `personalize_content(user_profile, chapter_id, content)`

**Implementation:**
- Deploy agents as Claude Code processes
- Expose as API endpoints callable from Docusaurus
- Cache results for performance
- Use for content generation pipeline

---

### 5. Better-Auth Signup with Personalization (Bonus: 50 Points)
**Objective:** Full authentication + questionnaire-driven content adaptation

**Features (in addition to Auth system above):**
- Store user software/hardware background in profile
- Use profile data to customize chapter content:
  - Adjust code complexity (Beginner/Intermediate/Advanced)
  - Include/exclude advanced topics
  - Recommend hardware tier appropriate to user
  - Suggest relevant modules based on background
- Display personalization status on book
- Allow users to update profile anytime

**Database Schema:**
```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  software_background TEXT,
  ai_experience TEXT,
  robotics_experience TEXT,
  hardware_access TEXT,
  use_case TEXT,
  learning_pace TEXT,
  ros_experience BOOLEAN,
  deployment_env TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

---

### 6. Chapter-Level Content Personalization Button (Bonus: 50 Points)
**Objective:** Users can adapt chapter content dynamically at read-time

**Implementation:**
- Add "Personalize this chapter" button at chapter start
- Modal shows user profile + personalization options:
  - Adjust difficulty level
  - Toggle advanced topics on/off
  - Show/hide code examples
  - Show/hide mathematical derivations
  - Highlight prerequisites
- Button text changes based on current personalization state
- Content updates in-page without page reload
- Save preference per chapter
- Visual indicator showing active personalization

**UI/UX:**
- Button location: Top-right of chapter content
- Icon: Sliders/Settings icon
- Keyboard shortcut: `Cmd+P` (or Ctrl+P on Windows)
- Remember user's last preferences

---

### 7. Urdu Translation Feature (Bonus: 50 Points)
**Objective:** Enable chapter content translation to Urdu on-demand

**Implementation:**
- Add "Translate to Urdu" button alongside personalization button
- Use OpenAI API (gpt-4) for high-quality translation
- Cache translations in Neon Postgres (translations table)
- Toggle between English ↔ Urdu via button
- Preserve formatting (code blocks, links, images)
- Translate UI elements too (sidebar, buttons)

**Technical Details:**
```sql
CREATE TABLE translations (
  id UUID PRIMARY KEY,
  chapter_id TEXT,
  section_id TEXT,
  source_lang VARCHAR(10),
  target_lang VARCHAR(10),
  source_text TEXT,
  translated_text TEXT,
  created_at TIMESTAMP
);
```

**Translation Strategy:**
- Translate on first request (cache result)
- Batch-translate all chapters on backend if needed
- Use prompt engineering for domain-specific accuracy
- Technical terms: maintain English for ROS, NVIDIA Isaac, etc.
- Quality: Human review recommended for production

**UI/UX:**
- Language toggle: Button near top-right ("EN | اردو")
- Smooth page transition when switching languages
- Remember language preference per session
- RTL (Right-to-Left) support for Urdu display

---

## Technical Architecture

### Frontend Stack
- **Framework:** React 18+
- **Static Site Generator:** Docusaurus 3.x
- **Styling:** Tailwind CSS (built into Docusaurus theme)
- **State Management:** React Context / Redux
- **HTTP Client:** axios / fetch
- **Chatbot Component:** Custom React component
- **Deployment:** GitHub Pages

### Backend Stack
- **Framework:** FastAPI (Python 3.11+)
- **Async Tasks:** Celery (for content ingestion)
- **Vector Search:** Qdrant Python SDK
- **Database:** Neon Postgres (via psycopg2)
- **LLM:** OpenAI API (gpt-4, embeddings)
- **Authentication:** Better-Auth
- **Deployment:** Vercel / Railway / AWS Lambda

### Database Schema
```sql
-- Users (managed by Better-Auth)
-- user_profiles (personalization data)
-- translations (cached translations)
-- chat_conversations (chatbot history)
-- chat_messages (individual messages)
-- book_content (indexed chapters/sections)
-- vector_embeddings (stored in Qdrant)
```

---

## Deployment Pipeline

### GitHub Actions Workflow
1. **On Push to Main:**
   - Lint/test Docusaurus build
   - Generate book HTML
   - Deploy to GitHub Pages
   - Trigger backend re-indexing (POST /api/ingest)

2. **On PR:**
   - Preview deployment to Vercel
   - Run content validation agent
   - Check for broken links

### Environment Variables
- `OPENAI_API_KEY` - OpenAI API
- `QDRANT_URL` - Qdrant Cloud URL
- `QDRANT_API_KEY` - Qdrant API key
- `NEON_DATABASE_URL` - Postgres connection
- `BETTER_AUTH_SECRET` - Auth secret
- `GITHUB_TOKEN` - GitHub Actions

---

## Content Specifications

### Chapter Format
Each chapter must include:
- **Learning Objectives** (3-5 bullet points)
- **Introduction** (1-2 paragraphs)
- **Main Content** (sections with headings)
- **Code Examples** (executable Python/ROS snippets)
- **Diagrams** (system architecture, workflows)
- **Hands-On Exercise** (practical task)
- **Key Takeaways** (3-5 points)
- **Further Reading** (links to resources)
- **Difficulty Badge** (Beginner/Intermediate/Advanced)

### Code Examples Format
```python
# Language: Python / ROS 2 / Bash
# Difficulty: Beginner/Intermediate/Advanced
# Prerequisite: [chapter references]
# Time: 5-15 minutes

[Executable code with comments]
```

### Diagram Format
- PlantUML for flowcharts/architecture
- Mermaid for system diagrams
- SVG for custom graphics
- High-resolution (2x pixel density)

---

## Evaluation Criteria

### Base Functionality (100 Points)
- ✅ Docusaurus book deployed to GitHub Pages (30 pts)
- ✅ All 8 chapters complete with content (30 pts)
- ✅ RAG chatbot integrated and functional (40 pts)

### Bonus Points (Up to 200 Extra)
- ✅ Claude Code Subagents + Agent Skills (50 pts)
- ✅ Better-Auth signup + background questionnaire (50 pts)
- ✅ Chapter-level personalization button (50 pts)
- ✅ Urdu translation feature (50 pts)

### Quality Metrics
- Code quality: Clean, documented, tested
- Content quality: Accurate, well-structured, practical
- UX/Design: Intuitive, accessible (WCAG 2.1 AA)
- Performance: Fast load times, smooth interactions
- Reliability: Error handling, edge cases

---

## Timeline & Milestones

- **Week 1:** Docusaurus setup, GitHub repo, CI/CD pipeline
- **Week 2-3:** Write 8 chapters with code examples
- **Week 4:** FastAPI backend + Qdrant setup
- **Week 5:** RAG pipeline + chatbot frontend
- **Week 6:** Better-Auth integration + user profiles
- **Week 7:** Personalization engine + subagents
- **Week 8:** Urdu translation feature
- **Week 9:** Testing, refinement, deployment
- **Week 10:** Final review and bonus point implementation

---

## Resources & References

- Docusaurus Docs: https://docusaurus.io/
- Spec-Kit Plus: https://github.com/panaversity/spec-kit-plus/
- Claude Code: https://www.claude.com/product/claude-code
- FastAPI: https://fastapi.tiangolo.com/
- Qdrant: https://qdrant.tech/
- Neon: https://neon.tech/
- Better-Auth: https://www.better-auth.com/
- OpenAI API: https://platform.openai.com/docs/
- ROS 2 Documentation: https://docs.ros.org/

---

## Success Definition

✅ A production-ready, AI-powered interactive textbook on Physical AI & Humanoid Robotics that:
- Provides comprehensive, structured learning material
- Answers user questions intelligently via RAG chatbot
- Personalizes content based on user background and preferences
- Supports Urdu language for accessibility
- Demonstrates advanced Claude Code capabilities via subagents
- Is deployed and accessible to the world via GitHub Pages
- Earns maximum points across base and bonus categories

## Clarifications

### Session 2025-11-27
- Q: Should the book include hands-on lab exercises that require actual hardware? → A: No. The book is designed for **simulation-first learning**. All exercises use Gazebo/Isaac Sim in the cloud or locally. Hardware recommendations are informational only. Exercises must be completable without purchasing equipment.
- Q: How detailed should hardware discussion be? → A: Include 3 levels:
    - **Level 1 (Beginner profile):** High-level overview of why hardware matters
    - **Level 2 (Intermediate):** Specific components and trade-offs
    - **Level 3 (Advanced):** Detailed specs, benchmarking, optimization
    - Use personalization flags to show/hide these sections
- Q: Should the book cover cloud deployment (AWS RoboMaker, etc.)? → A: Yes. Chapter 8 should dedicate 40% to cloud-native labs (Option 2 from course document). Include:
    - Cost analysis (OpEx vs CapEx comparison)
    - AWS EC2 instance setup for Isaac Sim
    - Latency considerations for real-time control
    - When to use cloud vs local workstations
- Q: What if there are conflicts between the course document and technical best practices? → A: Prioritize **pedagogical clarity** over strict adherence. Document deviations as notes. Example: "The course recommends RTX 4070 Ti, but for learning purposes, RTX 4060 is acceptable with reduced performance."
- Q: Should each chapter have a capstone project? → A: Yes, mini-capstones at chapter end:
    - Ch 1: Understand Physical AI principles (essay/quiz)
    - Ch 2: Build a simple ROS 2 node (code)
    - Ch 3: Simulate a robot in Gazebo (simulation)
    - Ch 4: Deploy Isaac ROS (deployment)
    - Ch 5: Integrate voice command (integration)
    - Ch 6: Design lab architecture (design doc)
    - Ch 7: Full capstone (complete project)
    - Ch 8: Deploy to cloud (deployment)
- Q: Should code examples be copy-pasteable? → A: Yes. Every code example must be:
    - Syntactically correct
    - Runnable (not pseudocode)
    - Include setup instructions
    - Have error handling
    - Include comments explaining each major block
- Q: How many code examples per chapter? → A: 3-5 per chapter, ranging from 10-50 lines each. Include:
    - 1 basic example (Beginner-friendly)
    - 1 intermediate example (with edge cases)
    - 1 advanced example (optimization/best practices)
    - 1 common mistakes example (antipattern)
- Q: What happens if a user asks about content outside the book? → A: Return this response:
    ```
    "I'm specifically trained to answer questions about this Physical AI & Humanoid Robotics book.
    Your question about [topic] seems outside the scope of the course content.

    Would you like to:
    1. Rephrase your question related to the book?
    2. Ask about a different topic from the chapters?
    3. See an FAQ?"
    ```
- Q: How should the chatbot handle "ask about selected text" feature? → A: Implementation:
    1. User highlights text on page
    2. Context menu appears: "Ask AI about this"
    3. Selected text is pre-loaded in chat input
    4. Chat sends: `{ query: user_question, context: selected_text, chapter_id: X }`
    5. Backend weights the selected text heavily in RAG retrieval
    6. Response includes: citation, confidence score, link to full section
- Q: What's the retrieval strategy for code examples? → A: Special handling:
    - Index code examples separately with metadata: `{ type: "code", language: "python", difficulty: "intermediate", chapter: 2 }`
    - When user asks "show me a ROS example," prioritize code chunks
    - Return code snippet + surrounding explanation
    - Include "Run this example" button linking to GitHub repo with setup instructions
- Q: Should the chatbot remember conversation history? → A: Yes, with caveats:
    - Store in Neon Postgres (linked to authenticated users)
    - Unauthenticated users: session-only (browser storage, cleared on tab close)
    - Authenticated users: persistent history (queryable, downloadable)
    - Include "Clear conversation" button
    - Privacy: Never include conversations in analytics without consent
- Q: How many context chunks should the LLM see? → A: 3-5 relevant chunks from Qdrant:
    - Top 3 highest-similarity chunks
    - Context window: 2,000 tokens max
    - If insufficient context confidence < 0.7, return "I don't have enough context to answer this"
    - Allow user to request "longer answer" to increase context window
- Q: Should the chatbot answer follow-up questions about previous responses? → A: Yes. Maintain conversation context:
    - Pass full conversation history to LLM (last 10 messages)
    - Support pronouns: "Can you explain that more?" refers to previous answer
    - Show breadcrumb: "← Back to previous answer"
- Q: Can users export chatbot conversations? → A: Yes. For authenticated users:
    - Export as Markdown, PDF, or JSON
    - Include: timestamps, citations, chapter references
    - Exclude: other users' data, internal metadata
- Q: What if the chatbot gives an incorrect answer? → A: Implement feedback loop:
    - "Feedback" button below each response (👍 👎)
    - Collect: rating, correction suggestion, user email (optional)
    - Log to separate table for model improvement
    - Show: "Thanks! This helps improve the book."
- Q: Can users browse the book without signing up? → A: Yes. Signup is optional:
    - **Without signup:** View all chapters, use chatbot (without history), no personalization
    - **With signup:** Persistent chatbot history, personalized content, translation memory
    - Show gentle prompt after 3 chatbot interactions: "Sign up to save your conversations"
- Q: What if a user's profile conflicts with chapter prerequisites? → A: Example: User selects "Beginner" but clicks on "Chapter 4: NVIDIA Isaac" which requires ROS 2 knowledge.
    - Show warning: "⚠️ This chapter assumes you've completed Chapter 2. Want to go back?"
    - Add smart navigation: "Recommended path: Ch 1 → Ch 2 → Ch 4"
    - Allow override: "I know what I'm doing, show me everything"
- Q: Should the onboarding questionnaire be required or optional? → A: Optional but encouraged:
    - Prompt at signup: "Help us personalize your learning (2 min)"
    - Show progress bar (6 of 8 questions)
    - Allow "Skip" button
    - Offer "Update profile anytime" in settings
- Q: What if users change their profile mid-learning? → A: Allow anytime in settings:
    - Show: "You previously selected 'Beginner,' now you're 'Intermediate'"
    - Ask: "Should we update chapter difficulty?"
    - Option to revert changes or apply globally to all chapters
- Q: Should we collect performance data (reading time, quiz scores)? → A: Yes, but with privacy controls:
    - Tracked: Page time, completed exercises, quiz scores
    - Not tracked: Mouse movements, scroll patterns
    - User consent: "Help improve the book with anonymous analytics?" (default: off)
    - Users can export their own data anytime
    - Retention: 90 days max (GDPR compliance)
- Q: How should we handle session timeouts? → A:
    - Session timeout: 30 days (for "Remember me")
    - Idle timeout: 24 hours (for security)
    - Warning: "You'll be logged out in 5 minutes due to inactivity"
    - Option to extend session
- Q: Can users have multiple profiles (e.g., student vs instructor)? → A: Out of scope for MVP. Plan for future: Role-based access (student, instructor, admin).
- Q: What exactly happens when user clicks "Personalize this chapter"? → A: Step-by-step:
    1. Modal opens showing current user profile
    2. Options:
       - Difficulty level slider: [Beginner ← → Advanced]
       - Toggle: "Include advanced topics" (on/off)
       - Toggle: "Show code examples" (on/off)
       - Toggle: "Show mathematical derivations" (on/off)
       - Checkbox: "Show prerequisites"
    3. User clicks "Apply personalization"
    4. Page re-renders with:
       - Section visibility toggle (hide/show sections)
       - Text replacements (beginner-friendly explanations)
       - Code example filtering (show only relevant difficulty)
    5. Button state changes: "Personalize this chapter" → "✓ Personalized for you"
    6. Save preference to DB + browser cache
- Q: How do we handle personalization for code examples? → A:
    - Tag all code with: `{ difficulty: "beginner|intermediate|advanced" }`
    - Beginner: Show setup + basic usage only
    - Intermediate: Add error handling + edge cases
    - Advanced: Show optimization + alternative approaches
    - User sees: all 3 versions with tabs: "Basic | Intermediate | Advanced"
- Q: What's the performance impact of personalization? → A: Minimize via:
    - Pre-compute personalized versions (3 versions per section) at build time
    - Store as static HTML variants
    - Client-side rendering: Load appropriate variant based on user profile
    - Cache in browser for 7 days
    - No real-time server requests during reading
- Q: Should personalization apply across all chapters or per-chapter? → A: Per-chapter (with persistent user preference):
    - Each chapter has independent "Personalize" button
    - Default: Apply last user's chosen difficulty to new chapters
    - Allow override: "My difficulty changes per chapter"
- Q: Can personalization affect the chatbot responses? → A: Yes:
    - Pass user profile to chatbot context: `{ difficulty: "beginner", ai_experience: "none" }`
    - Chatbot adjusts response complexity
    - Example beginner vs advanced answer:
      - **Beginner:** "ROS 2 is middleware that lets different robot parts talk to each other."
      - **Advanced:** "ROS 2 uses DDS middleware with a pub/sub architecture for inter-process communication."
- Q: Should the entire book be translated to Urdu at launch? → A: No. MVP approach:
    - **Phase 1:** On-demand translation (user clicks button)
    - **Phase 2:** Pre-translate top 5 chapters during off-hours
    - **Phase 3:** Full book translation (async job)
    - Show translation status: "⏳ Translation in progress..." or "✓ Available in Urdu"
- Q: How do we handle code and technical terms in Urdu? → A: Rules:
    - Code stays in English: `for i in range(10):`
    - English technical terms stay in English but phonetically explained in Urdu
    - Example: "ROS (Robotic Operating System) - روبوٹ آپریٹنگ سسٹم"
    - File paths, URLs, commands: unchanged
    - Comments in code: can be translated if marked `# اردو میں` (in Urdu)
- Q: Should Urdu translation include RTL (right-to-left) layout? → A: Yes:
    - Entire page layout flips when Urdu is enabled
    - Sidebar: right side instead of left
    - Code blocks: still LTR (with visual indicator)
    - Table of contents, navigation: RTL
    - Buttons, icons: position adjusted
    - Use CSS: `direction: rtl;` for Urdu mode
- Q: How do we maintain consistency in technical terminology across translations? → A: Create a glossary:
    - Build glossary table: `{ english_term, urdu_term, context, translator_notes }`
    - Examples: ROS → ROS (unchanged), Node → نوڈ, Topic → ٹاپک
    - Translation consistency check: Flag deviations from glossary
    - Version control glossary in Git
- Q: Should chapter headings and metadata be translated? → A: Yes:
    - Chapter titles: Translate
    - Section headings: Translate
    - Metadata (difficulty, time): Translate UI labels only
    - Sidebar labels: Translate
    - Footer: Translate
    - Buttons: Translate ("Next Chapter" → "اگلا باب")
- Q: How long should translation take for a full chapter? → A: Estimate:
    - Automatic translation via OpenAI: 2-5 minutes per chapter
    - Human review (recommended for production): 30-60 minutes per chapter
    - Cache result: Future requests instant
- Q: Can users contribute translations or corrections? → A: Out of scope for MVP but plan for future:
    - Community translation feature via Crowdin or similar
    - Contributor credits
    - Version control for community translations
- Q: What if OpenAI API fails during translation? → A: Graceful degradation:
    - Show: "Translation temporarily unavailable. Try again later."
    - Provide fallback: Link to Urdu language resources
    - Log error for debugging
    - Fallback option: Auto-translate via browser (lower quality but available)
- Q: What's the difference between a Subagent and an Agent Skill? → A:
    - **Agent Skill:** Reusable function/capability (e.g., `generate_code_example()`)
    - **Subagent:** Independent Claude process orchestrating multiple skills
    - Skill is the building block; Subagent is the orchestrator
- Q: How should Subagents be triggered? → A: Two modes:
    1. **Build-time:** Triggered during Docusaurus build
       - Validate chapters, generate FAQs, create diagrams
       - Results cached, committed to Git
       - Runs on GitHub Actions (on push to `develop`)
    2. **Runtime:** Triggered during user interaction
       - Personalization, on-demand translation, chatbot enhancement
       - Results cached in Neon or Qdrant
       - Called via FastAPI endpoints
- Q: How do we prevent infinite loops or runaway costs with Subagents? → A: Safety guardrails:
    - Max iterations per agent: 5
    - Max API calls per run: 50
    - Max tokens per generation: 4,000
    - Timeout: 5 minutes per agent
    - Cost monitoring: Alert if exceeds $5/day
    - Manual approval for build-time agents on first run
- Q: Can Subagents call other Subagents? → A: Yes, with restrictions:
    - Max nesting depth: 2 levels
    - Prohibited patterns: Circular dependencies
    - Document call graph in README
    - Example: `FAQ Agent` → calls `Content Validator` to check accuracy
- Q: How should Subagent results be versioned? → A: In Git:
    - Store generated content in `/generated/` directory
    - Commit with message: `[bot] Chapter 2 FAQs updated by FAQ-Agent`
    - Tag version: `generated-v1.2.0`
    - Allow rollback: `git revert [commit]`
- Q: What if a Subagent produces low-quality output? → A: Feedback loop:
    - Human review step (required for build-time agents)
    - Flag in CI: "⚠️ Low quality score (0.65/1.0). Needs review."
    - Store rating, feedback in agent performance DB
    - Fine-tune agent prompt based on feedback
- Q: Should Subagents be exposed to users? → A: No in MVP. Hide internal:
    - Users see results (better FAQs, personalized content) but not agent runs
    - Future: Transparency page showing "This content generated by AI agents"
- Q: How do we handle Subagent latency? → A: For runtime agents:
    - Set timeout: 10 seconds (or fail gracefully)
    - Show loading spinner: "Personalizing content..."
    - Cache aggressively: Reuse previous results if available
    - Async processing: Long-running tasks happen in background
- Q: Should the FastAPI backend be monolithic or microservices? → A: MVP: Monolithic FastAPI app:
    - Single `/api` service with multiple endpoint groups
    - Modular code structure (separate files for chat, personalization, translation)
    - Future: Decompose into microservices if needed
- Q: How should the book and backend communicate? → A: Architecture:
    - Frontend (Docusaurus on GitHub Pages) makes HTTP requests to backend
    - Backend hosted on Vercel, Railway, or AWS Lambda
    - CORS enabled for GitHub Pages domain
    - API versioning: `/api/v1/chat`, `/api/v2/chat` (for future compatibility)
- Q: Should the backend have a database of all book content? → A: Yes and no:
    - Docusaurus generates static HTML (source of truth)
    - Backend copies book content to Neon + Qdrant on deployment
    - Trigger: GitHub Action runs `/api/ingest` after successful Docusaurus build
    - Keeps backend and frontend in sync
- Q: How do we handle file uploads (for user-generated content)? → A: Out of scope for MVP. Plan for future (notes, annotations, etc.).
- Q: What's the backup and disaster recovery strategy? → A:
    - GitHub repo: Version control (primary backup)
    - Neon Postgres: Automated backups (daily), retention 7 days
    - Qdrant: Snapshots (weekly), retention 4 weeks
    - Docusaurus site: Rebuild from GitHub on demand
    - Test restore: Monthly disaster recovery drill
- Q: How should we handle database migrations? → A:
    - Alembic for schema version control
    - CI/CD: Auto-run migrations before deployment
    - Rollback: Keep previous schema version for 1 release
    - Document: Migration guide in README
- Q: What's the rate limiting strategy for API endpoints? → A:
    - Anonymous users: 10 requests/minute
    - Authenticated users: 100 requests/minute
    - Chatbot endpoints: 20 requests/minute (to avoid abuse)
    - Return: HTTP 429 with `Retry-After` header
- Q: How should logging and monitoring work? → A:
    - Logs: Send to CloudWatch (AWS) or similar
    - Monitoring: Sentry for error tracking
    - Metrics: Prometheus (request count, latency, errors)
    - Alerts: Slack notification if error rate > 5%
- Q: Should there be a staging environment? → A: Yes:
    - **Staging:** `staging.yourdomain.com` (deploys from `develop` branch)
    - **Production:** `yourdomain.com` (deploys from `main` branch)
    - Staging: Auto-deploy on PR merge to `develop`
    - Production: Manual approval before deploy from `main`
- Q: How often should we rebuild and redeploy the book? → A:
    - Docusaurus: Rebuild on every commit to `main` (via GitHub Actions)
    - Deploy to GitHub Pages: Automatic after successful build (~2 minutes)
    - Backend: Deploy on push to main (via Vercel/Railway webhooks)
    - Qdrant re-indexing: After Docusaurus build completes (trigger `/api/ingest`)
- Q: Should there be a rollback strategy? → A: Yes:
    - GitHub Pages: Rollback via previous commit
    - Neon/Qdrant: Restore from snapshots
    - Vercel/Railway: One-click rollback to previous deployment
    - Test rollback weekly
- Q: How do we communicate outages to users? → A:
    - Status page: Use StatusPage.io or GitHub Issues
    - Downtime notice: Display banner on site
    - Email subscribers: If available
    - Twitter/social: Post updates
    - Max downtime goal: 4 hours (SLA: 99.9% uptime)
- Q: What testing should be automated? → A:
    - **Unit tests:** FastAPI endpoints (80% coverage target)
    - **Integration tests:** Qdrant + Neon queries
    - **Content tests:** Spell check, link validation, code syntax
    - **E2E tests:** Docusaurus build, chatbot flow, auth flow
    - **Performance tests:** Build time < 5 minutes, API latency < 500ms
    - **Accessibility tests:** WCAG 2.1 AA compliance
- Q: How should we test the RAG chatbot? → A:
    - Unit tests: Retrieval accuracy, ranking
    - Integration tests: Full chat flow with mocked LLM
    - Benchmark: Answer 50 known questions, compare to ground truth
    - Human review: QA team verifies 10% of responses
    - Feedback loop: Use user ratings to flag low-confidence answers
- Q: Should there be content review process? → A: Yes:
    - Technical review: Subject matter expert reviews each chapter
    - Copy editing: Grammar, clarity, style
    - Code review: All code examples tested
    - Accessibility review: Images have alt text, videos have captions
    - Timeline: Review before publishing to main
- Q: How do we handle translation quality assurance? → A:
    - Automated: Spell check, formatting validation
    - Manual: Native Urdu speaker reviews 100% of translations
    - Beta testing: Release to 5% of users, collect feedback
    - Iterate: Fix issues, release to full audience
- Q: What if the Qdrant index becomes corrupted? → A: Recovery steps:
    1. Detect: Monitoring alerts on indexing errors
    2. Notify: Alert engineering team
    3. Rebuild: Delete index, trigger `/api/ingest` to rebuild from source
    4. Validate: Run sanity checks (query for known answers)
    5. Failover: Serve cached responses while rebuilding
- Q: What if a user's profile data gets deleted? → A: Fallback behavior:
    - Revert to default profile (Beginner, no preferences)
    - Show: "Your preferences couldn't load. Using defaults. [Restore]"
    - Recovery: If available in backup, offer to restore
    - Prevention: Store profile in multiple places (Neon + browser cache)
- Q: What if OpenAI API quota is exceeded? → A: Graceful degradation:
    - Chatbot: "Service temporarily overloaded. Try again in a few minutes."
    - Translation: Disable temporarily, show "Translation unavailable today"
    - Personalization: Use cached version or defaults
    - Alert: Notify admin to increase quota
- Q: What if GitHub Pages deployment fails? → A:
    - Alert: CI/CD pipeline notifies team
    - Rollback: Automatically deploy previous working version
    - Manual: Keep backup domain (Netlify) as secondary host
    - SLA: Restore service within 30 minutes
- Q: What if a user submits offensive content (feedback, comments)? → A: Content moderation:
    - Collect feedback in moderation queue
    - Review before publishing/using
    - Filter: Block profanity, spam, hate speech
    - Action: Delete violating content, warn user (if applicable)
    - Appeals: Support team reviews appeals
- Q: What if there's a conflict between personalization and translation? → A: Interaction rules:
    - Order of application: Translate first, then personalize
    - Example: User selects "Urdu + Beginner"
      - Step 1: Translate to Urdu
      - Step 2: Filter content for Beginner level
      - Result: Beginner-friendly Urdu content
    - Cache: Store translated + personalized version together
- Q: Do I need to implement all bonus features to pass? → A: No. Base functionality (100 pts) is sufficient. Bonus features are optional for extra credit.
- Q: Can I use third-party libraries not mentioned in `/sp.specify`? → A: Yes, if justified. Open issue: "Considering [library] for [use case]. Rationale: [reason]."
- Q: What if I find a better approach than specified here? → A: Go ahead! Document your decision in README with rationale. Bonus: Creative solutions may earn extra points.
- Q: Who do I contact for clarifications during development? → A: Document unknowns as GitHub Issues and tag team. Reference this `/sp.clarify` doc when possible.
- Q: Can I modify the book content beyond what's in the course document? → A: Yes, supplement with additional resources, examples, tutorials. Keep core content from course intact.
- Q: What's the priority if there's a conflict: functionality vs polish? → A: Functionality first. A working MVP beats a polished incomplete project.

---

## Revision History
- **v1.0** (Nov 27, 2025): Initial clarification document based on `/sp.specify`

---

## How to Use This Document
1. **Before starting:** Read all sections for context
2. **During development:** Reference specific sections when facing decisions
3. **During code review:** Use success metrics to validate implementation
4. **After launch:** Document your own clarifications and update this file