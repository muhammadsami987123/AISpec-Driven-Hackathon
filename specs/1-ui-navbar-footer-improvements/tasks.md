---
title: Implementation Tasks: UI Navbar & Footer Improvements
feature: 1-ui-navbar-footer-improvements
---

# Implementation Tasks: UI Navbar & Footer Improvements

## Phase 1: Setup

- [ ] T001 Update site title in `ai-native-bot/docusaurus.config.ts` — set `title` to "The AI-Native Guide to Physical AI & Humanoid Robotics" and verify site metadata.
- [ ] T002 Update navbar labels in `ai-native-bot/docusaurus.config.ts` — replace the `label` value `Tutorial` with `Book` for the primary nav item. Ensure the `Blog` link remains unchanged.
- [ ] T003 [P] Verify local dev environment and create theme override folder if missing: ensure `ai-native-bot/src/theme/` exists (create it if absent).

## Phase 2: Foundational

- [ ] T004 [P] Create Navbar & Footer skeleton files: add `ai-native-bot/src/theme/Navbar.tsx` and `ai-native-bot/src/theme/Footer.tsx` with minimal React components (export defaults) so Docusaurus will use them as theme overrides.
- [ ] T005 [P] Add styling placeholders: update `ai-native-bot/src/css/custom.css` (or create it) with `.site-footer` and `.site-navbar` blocks for further styling.

## Phase 3: User Story 1 — Navbar updates (US1)

Goal: Update the navbar text and link labels while preserving existing functionality.

- [ ] T006 [US1] Modify `ai-native-bot/src/theme/Navbar.tsx` to display site title "The AI-Native Guide to Physical AI & Humanoid Robotics" and change the `Tutorial` nav label to `Book`.
- [ ] T007 [US1] Ensure `Blog` nav item remains present and unchanged in `ai-native-bot/src/theme/Navbar.tsx` (no removal or label change).
- [ ] T008 [US1] Add accessibility attributes (ARIA labels, keyboard focus states) to elements in `ai-native-bot/src/theme/Navbar.tsx`.
- [ ] T009 [US1] Verify responsiveness: test nav behavior on mobile/tablet sizes and adjust `ai-native-bot/src/css/custom.css` as needed.

## Phase 4: User Story 2 — Footer redesign (US2)

Goal: Create a modern, responsive footer with social links and credit line.

- [ ] T010 [US2] Implement `ai-native-bot/src/theme/Footer.tsx` to include: a modern layout, placeholders for Twitter/LinkedIn/GitHub, and the credit line "Built by Muhammad Sameen using AI Native.".
- [ ] T011 [US2] Add responsive footer styles to `ai-native-bot/src/css/custom.css` (mobile-first, then breakpoints for tablet/desktop).
- [ ] T012 [US2] Add accessibility attributes (ARIA roles/labels) to `ai-native-bot/src/theme/Footer.tsx` components.
- [ ] T013 [US2] (Optional) Wire static social links into `ai-native-bot/docusaurus.config.ts` footer links area if preferred for global configuration.

## Phase 5: Polish & Validation

- [ ] T014 Run site build and smoke tests: `pnpm build` from `ai-native-bot/` to validate no MDX/YAML/sidebar errors.
- [ ] T015 Create a short visual QA checklist file at `specs/1-ui-navbar-footer-improvements/checklists/visual-qa.md` documenting manual checks (title, Book label, Blog, footer credit, social placeholders, responsiveness).
- [ ] T016 [P] Code review and accessibility review: ensure the changes meet NFR2 (responsiveness) and NFR3 (accessibility).

---

## Dependencies & Notes

- Setup tasks (Phase 1) must complete before overriding theme files (Phase 2).
- Navbar and Footer implementation tasks (US1 / US2) can mostly be developed in parallel, but CSS adjustments may overlap and should be coordinated.
- Recommended MVP: complete US1 (navbar text + Book label) first, then US2 (footer redesign).

## Summary

- Total tasks: 16
- User stories: 2 (US1: Navbar, US2: Footer)
- Parallelizable tasks: T003, T004, T005, T016
