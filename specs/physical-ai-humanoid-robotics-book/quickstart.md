# Quickstart — Local Development

These steps assume Windows PowerShell (default) and a developer machine with Node and Python installed.

## Frontend (Docusaurus)

1. Install Node dependencies

```powershell
cd frontend
npm install
```

2. Run dev server

```powershell
npm run start
```

The site will be available at `http://localhost:3000`.

## Backend (FastAPI)

1. Create a Python virtual environment and install requirements

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

2. Run the API locally

```powershell
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API will be available at `http://localhost:8000`.

## Ingest content into Qdrant (local dev)

```powershell
cd backend
python scripts/ingest_content.py --source ../frontend/docs --qdrant-url <URL> --api-key <KEY>
```

## Notes
- Export required env vars: `OPENAI_API_KEY`, `QDRANT_URL`, `QDRANT_API_KEY`, `NEON_DATABASE_URL`, `BETTER_AUTH_SECRET`.
- For Windows PowerShell, use `setx` or `.env` tooling to persist env vars during development.
