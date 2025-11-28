---
id: {{ID}}
title: "{{TITLE}}"
stage: "{{STAGE}}"
date: {{DATE_ISO}}
surface: "agent"
model: "{{MODEL}}"
feature: "{{FEATURE}}"
branch: "{{BRANCH}}"
user: "{{USER}}"
command: "{{COMMAND}}"
labels: [{{LABELS}}]
links:
  spec: {{SPEC_LINK}}
  ticket: {{TICKET_LINK}}
  adr: {{ADR_LINK}}
  pr: {{PR_LINK}}
files:
{{FILES_YAML}}
tests:
{{TESTS_YAML}}
---

## Prompt

```text
{{PROMPT_TEXT}}
```

## Response

```text
{{RESPONSE_TEXT}}
```

## Outcome
- **Evaluation**: [Brief evaluation of the outcome, e.g., "Feature specification drafted and clarified."]
- **Next Steps**: [Outline immediate next steps, e.g., "Proceed to planning phase."]
