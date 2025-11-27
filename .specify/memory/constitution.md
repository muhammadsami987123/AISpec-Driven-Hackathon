<!--
Sync Impact Report:
Version change: 1.0.0 → 1.1.0
Modified principles:
  - PRINCIPLE_1_NAME → I. AI/Spec-Driven Book Creation
  - PRINCIPLE_2_NAME → II. Integrated RAG Chatbot Development
  - PRINCIPLE_3_NAME → III. Reusable Intelligence (Subagents & Skills)
  - PRINCIPLE_4_NAME → IV. User Authentication & Personalization
Added sections:
  - V. Multi-language Support
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md ⚠ pending
  - .specify/templates/spec-template.md ⚠ pending
  - .specify/templates/tasks-template.md ⚠ pending
  - .specify/templates/commands/sp.constitution.md ⚠ pending
  - README.md ⚠ pending
Follow-up TODOs:
  - TODO(RATIFICATION_DATE): Original ratification date unknown.
-->
# AI-Native Book Constitution

## Core Principles

### I. AI/Spec-Driven Book Creation
The project MUST be developed using Claude Code and Spec-Kit Plus, creating a Docusaurus-based book deployed to GitHub Pages. This principle ensures the use of specified tools and deployment target for the book.

### II. Integrated RAG Chatbot Development
The book MUST embed a Retrieval-Augmented Generation (RAG) chatbot using OpenAI Agents/ChatKit SDKs, FastAPI, Neon Serverless Postgres, and Qdrant Cloud Free Tier. It MUST answer user questions about the book content, including selected text.

### III. Reusable Intelligence (Subagents & Skills)
The project SHOULD leverage reusable intelligence through Claude Code Subagents and Agent Skills to enhance functionality. This encourages modular and efficient AI integration and contributes to bonus points.

### IV. User Authentication & Personalization
User authentication and personalization features SHOULD be implemented using Better Auth. Signup MUST include questions about user background (software, hardware) to personalize content. Logged-in users SHOULD be able to personalize chapter content.

### V. Multi-language Support
The system SHOULD allow logged-in users to translate chapter content into Urdu. This promotes accessibility and expands the book's reach.

### VI. Project Initialization & Structure
Every new project or feature should start with a clear folder structure. For documentation sites, Docusaurus is the preferred tool. Project setup involves:
1. Creating a dedicated feature folder (e.g., `specs/<feature-name>`).
2. Initializing the Docusaurus project within this structure.
3. Connecting the project to a GitHub repository for version control and collaboration.
4. Committing the initial Docusaurus project to GitHub, ensuring all generated files are tracked.

### VII. Observability, VIII. Versioning & Breaking Changes, IX. Simplicity
Text I/O ensures debuggability; Structured logging required; MAJOR.MINOR.BUILD format; Start simple, YAGNI principles


## Development Workflow

### SpecKit Plus Integration
All development tasks, specifications, plans, and prompt history records (PHRs) are managed through SpecKit Plus. This ensures a structured and traceable development process.

### GitHub Integration
Projects are hosted on GitHub. All code changes must be committed and pushed to the designated repository (e.g., `https://github.com/muhammadsami987123/AISpec-Driven-Hackathon`). A clear `git add`, `git commit`, and `git push` workflow is followed for all changes.

### Docusaurus Project Integration
New documentation projects utilize Docusaurus. The setup process involves initializing the Docusaurus project with pnpm, configuring it for TypeScript, and integrating it within the main repository structure.

## Code Standards & Review

All code must undergo a thorough review process. Automated tests and quality gates are enforced to maintain high code quality. Deployment requires approval after successful testing and review.

## Governance

Constitution supersedes all other practices; Amendments require documentation, approval, migration plan; All PRs/reviews must verify compliance; Complexity must be justified.

**Version**: 1.1.0 | **Ratified**: TODO(RATIFICATION_DATE): Original ratification date unknown. | **Last Amended**: 2025-11-27
