# Implementation Plan: {{FEATURE_NAME}}

## 1. Technical Context & Overview
Describe the technical scope, proposed architecture, and key technologies.

### Current Architecture & Relevant Components
- Briefly describe existing parts of the codebase relevant to this feature.
- Highlight any areas that will be impacted or need modification.

### Proposed Solution Overview
- High-level architectural approach for the feature.
- Justify technology choices (if any are new) or adherence to existing stack.

### Unknowns & Clarifications
- List any technical unknowns or areas requiring further research before implementation.
- [NEEDS CLARIFICATION: Question about technical detail]

## 2. Constitution Check
Verify adherence to project principles outlined in `.specify/memory/constitution.md`.

### Principles Adhered To
- [ ] Principle 1 (from constitution): [Brief explanation of how plan adheres]
- [ ] Principle 2 (from constitution): [Brief explanation of how plan adheres]

### Potential Violations / Trade-offs
- [ ] Principle X (from constitution): [Explanation of why deviation is necessary or how it's mitigated]

## 3. Gates
Evaluation points where the plan must meet criteria before proceeding.

### Gate 1: Research Complete
- [ ] All "Unknowns & Clarifications" in Section 1 resolved in `research.md`.

### Gate 2: Design Artifacts Generated
- [ ] `data-model.md` (if applicable) created.
- [ ] `contracts/` directory (if applicable) with API specifications created.
- [ ] `quickstart.md` (if applicable) created.

## 4. Phase 0: Research & Exploration
This phase focuses on resolving technical unknowns and gathering necessary information.

### Research Tasks
- [ ] Task: Research [unknown 1 from section 1]
- [ ] Task: Explore best practices for [technology/pattern]

### Outcome
- `research.md` updated with findings, decisions, and rationale.

## 5. Phase 1: Design & Contracts
This phase involves detailed design of data structures and API contracts.

### Data Modeling
- Define entities, attributes, and relationships (output to `data-model.md`).

### API/Interface Design
- Specify external and internal API endpoints, request/response structures, and error handling (output to `contracts/` directory).

### Quickstart Guide
- Outline steps for integrating/using the new feature (output to `quickstart.md`).

## 6. Phase 2: Implementation Planning (Tasks)
This phase is handled by the `/sp.tasks` command. This section will eventually contain a high-level overview of the implementation tasks.

## 7. Operational Readiness
How the feature will be monitored, deployed, and maintained.

### Observability
- Logging strategy, metrics to collect, tracing approach.

### Deployment & Rollback
- Deployment strategy, feature flag usage, rollback plan.

### Alerting & Runbooks
- Key alerts and corresponding runbook procedures.

## 8. Risk Analysis
Identify potential risks and mitigation strategies.

### Top Risks
- Risk 1: [Description] - Mitigation: [Strategy]
- Risk 2: [Description] - Mitigation: [Strategy]

## 9. Evaluation & Validation
How the implementation will be tested and validated against requirements.

### Definition of Done
- Unit, integration, end-to-end tests passing.
- Code review complete.
- Security scan complete.

## 10. Architectural Decision Records (ADR)
- [ADR Suggestion: If applicable, will be suggested here by the agent.]
