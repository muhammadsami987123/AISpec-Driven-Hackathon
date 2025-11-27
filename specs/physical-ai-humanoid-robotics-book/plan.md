```markdown
# Implementation Plan: Physical AI & Humanoid Robotics Book

**Branch**: `master` | **Date**: 2025-11-27 | **Spec**: `spec.md`
**Input**: Feature specification from `/specs/physical-ai-humanoid-robotics-book/spec.md`

## Summary

Create a production-ready Docusaurus-based interactive book titled "Physical AI & Humanoid Robotics". Deliverables include 8 chapters, 40+ runnable code examples, embedded RAG chatbot (FastAPI + Qdrant + OpenAI), GitHub Actions-based CI/CD deploying to GitHub Pages, and optional bonus features (Better-Auth, personalization, Urdu translation, Claude subagents).

## Technical Context

**Language/Version**: Node 20+ (Docusaurus), React 18+, Python 3.11 for backend, shell scripts (PowerShell / Bash)
**Primary Dependencies**: Docusaurus v3, Tailwind CSS, FastAPI, uvicorn, qdrant-client, psycopg[binary] or asyncpg, OpenAI SDK, Better-Auth (self-hosted or managed), Celery (optional)
**Storage**: Neon Postgres (user profiles, translations, chat metadata), Qdrant (vector index for RAG), GitHub (content), local file storage for static assets
**Testing**: Jest for frontend, Playwright for E2E, pytest for backend; content validation scripts (python) for link checks and code snippet linting
**Target Platform**: Linux CI runners (GitHub Actions); Vercel or Railway for FastAPI deployments; GitHub Pages for frontend hosting
**Project Type**: Web documentation + serverless backend (frontend static site + API microservice)
**Performance Goals**: RAG query end-to-end < 3s median for simple queries; build time < 15 minutes; chatbot response p95 < 5s under nominal load
**Constraints**: Keep vector chunk size ~500 tokens; respect OpenAI rate limits and cost; use free tiers where feasible (Qdrant Cloud free tier, Neon free tier)
**Scale/Scope**: Audience 1k-10k monthly readers; initial vector index size ~150-300 MB

## Constitution Check

GATE: The plan must obey the project constitution (AI/Spec-Driven Book Creation, RAG Chatbot, Subagents optional, Authentication & Personalization, Multi-language support). Any deviation must be documented in Complexity Tracking.

## Project Structure

```text
specs/physical-ai-humanoid-robotics-book/
├── spec.md              # Feature spec (source of truth)
├── plan.md              # This file (phase 1 output)
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output (to create)
├── quickstart.md        # Phase 1 output (to create)
├── contracts/           # Phase 1 output (OpenAPI + optional GraphQL)
└── tasks.md             # Phase 2 output

frontend/                # Docusaurus site
├── docusaurus.config.ts
├── package.json
└── src/

backend/                 # FastAPI + ingestion + RAG
├── app/
├── requirements.txt
└── Dockerfile

infra/
├── github-actions/
└── terraform/ (optional)
```

**Structure Decision**: Use separate `frontend/` (Docusaurus) and `backend/` (FastAPI) folders to keep builds and deploys independent. Store content in `docs/` under Docusaurus source and keep ingestion scripts under `backend/scripts/ingest`.

## Complexity Tracking

No constitution violations detected at this stage. If implementing Isaac Sim local examples, note platform/GPU requirements and justify in Complexity table.

---

Fill remaining sections (detailed milestones, explicit tasks) via `/sp.plan` Phase 1 automation.

```
