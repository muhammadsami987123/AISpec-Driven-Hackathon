---
ID: 001
TITLE: Physical AI & Humanoid Robotics Book Project Specification
STAGE: spec
DATE_ISO: 2025-11-27
SURFACE: agent
MODEL: claude-sonnet-4-5-20250929
FEATURE: physical-ai-humanoid-robotics-book
BRANCH: master
COMMAND: /sp.specify
LABELS: ["specification", "docusaurus", "rag-chatbot", "authentication", "personalization", "translation", "subagents", "agent-skills"]
LINKS:
  SPEC: null
  TICKET: null
  ADR: null
  PR: null
FILES_YAML:
  - specs/physical-ai-humanoid-robotics-book/spec.md
TESTS_YAML:
  - null
---

## Prompt Text

```text
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
```
## Response Text
The detailed specification for the "Physical AI & Humanoid Robotics Book Project" has been successfully created and stored in `specs/physical-ai-humanoid-robotics-book/spec.md`. This specification outlines the core deliverables, bonus features, technical architecture, deployment pipeline, content specifications, and evaluation criteria for the project.
