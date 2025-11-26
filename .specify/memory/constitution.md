# AI-Native Book Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### [PRINCIPLE_1_NAME]
<!-- Example: I. Library-First -->
[PRINCIPLE_1_DESCRIPTION]
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### [PRINCIPLE_2_NAME]
<!-- Example: II. CLI Interface -->
[PRINCIPLE_2_DESCRIPTION]
<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### [PRINCIPLE_3_NAME]
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
[PRINCIPLE_3_DESCRIPTION]
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### [PRINCIPLE_4_NAME]
<!-- Example: IV. Integration Testing -->
[PRINCIPLE_4_DESCRIPTION]
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

### V. Project Initialization & Structure
Every new project or feature should start with a clear folder structure. For documentation sites, Docusaurus is the preferred tool. Project setup involves:
1. Creating a dedicated feature folder (e.g., `specs/<feature-name>`).
2. Initializing the Docusaurus project within this structure.
3. Connecting the project to a GitHub repository for version control and collaboration.
4. Committing the initial Docusaurus project to GitHub, ensuring all generated files are tracked.

### VI. Observability, VII. Versioning & Breaking Changes, VIII. Simplicity
Text I/O ensures debuggability; Structured logging required; MAJOR.MINOR.BUILD format; Start simple, YAGNI principles


## Development Workflow
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

### SpecKit Plus Integration
All development tasks, specifications, plans, and prompt history records (PHRs) are managed through SpecKit Plus. This ensures a structured and traceable development process.

### GitHub Integration
Projects are hosted on GitHub. All code changes must be committed and pushed to the designated repository (e.g., `https://github.com/muhammadsami987123/AISpec-Driven-Hackathon`). A clear `git add`, `git commit`, and `git push` workflow is followed for all changes.

### Docusaurus Project Integration
New documentation projects utilize Docusaurus. The setup process involves initializing the Docusaurus project with pnpm, configuring it for TypeScript, and integrating it within the main repository structure.

## Code Standards & Review
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

All code must undergo a thorough review process. Automated tests and quality gates are enforced to maintain high code quality. Deployment requires approval after successful testing and review.

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

Constitution supersedes all other practices; Amendments require documentation, approval, migration plan; All PRs/reviews must verify compliance; Complexity must be justified.

**Version**: 1.0.0 | **Ratified**: 2025-11-26 | **Last Amended**: 2025-11-26
