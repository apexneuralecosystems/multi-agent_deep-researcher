# 🔍 Agentic Deep Researcher

An enterprise-grade, multi-agent deep research platform. It leverages **CrewAI** for agent orchestration, **LinkUp** for deep web search, and a modern **Next.js** frontend for a seamless user experience.

![System Architecture](backend/system%20architecture.png)

## 🚀 Overview

This system autonomously performs deep research on any topic:
1.  **Web Searcher Agent**: Scours the web using LinkUp API.
2.  **Research Analyst Agent**: Reads, verifies, and synthesizes facts.
3.  **Technical Writer Agent**: Compiles a professional markdown report with citations.

The result is a comprehensive research report generated in minutes.

## 🛠️ Tech Stack

*   **Frontend**: [Next.js 15](https://nextjs.org/) (React, Tailwind CSS, Lucide Icons)
*   **Backend**: [FastAPI](https://fastapi.tiangolo.com/) (Python, Uvicorn)
*   **Agents**: [CrewAI](https://www.crewai.com/)
*   **Search**: [LinkUp API](https://linkup.so/)
*   **LLM**: [OpenRouter](https://openrouter.ai/) (GPT-4o, DeepSeek, etc.)

## 📦 Project Structure

```bash
agentic-deep-researcher/
├── frontend/         # Next.js Web Application
│   ├── app/          # App Router & Pages
│   └── .env.local    # Frontend Config (API URL)
├── backend/          # FastAPI Server
│   ├── app/          # API Routes & Agent Logic
│   ├── requirements.in  # Dependency Definition
│   ├── requirements.txt # Locked Production Dependencies
│   └── .env          # Secrets (API Keys)
└── README.md         # Documentation
```

## 🏁 Quick Start

### 1. Prerequisites
*   Python 3.10+
*   Node.js 18+
*   `uv` (fast Python package manager) **OR** `pip`

### 2. Backend Setup (FastAPI)

You can run the backend using either `uv` (recommended) or standard `pip`.

#### Option A: Using `uv` (Fastest)
```bash
cd backend

# 1. Create .env file
cp .env.example .env
# -> Edit .env with your LINKUP_API_KEY and OPENROUTER_API_KEY

# 2. Run the Server
uv run uvicorn app.main:app --reload
```

#### Option B: Using standard `pip`
```bash
cd backend

# 1. Create .env file
cp .env.example .env
# -> Edit .env with your LINKUP_API_KEY and OPENROUTER_API_KEY

# 2. Install Dependencies
pip install -r requirements.txt

# 3. Run the Server
python -m uvicorn app.main:app --reload
```
*Backend runs at `http://localhost:8000`*

### 3. Frontend Setup (Next.js)

```bash
cd frontend

# 1. Install Dependencies
npm install

# 2. Configure Environment
# Ensure .env.local exists with: NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1

# 3. Run the Web App
npm run dev
```
*App runs at `http://localhost:3000`*

## ⚙️ Configuration Reference

Use `.env` files to configure the application. Copy `.env.example` files to create your configuration.

### Backend (`backend/.env`)

| Variable | Description | Required | Example |
| :--- | :--- | :--- | :--- |
| `LINKUP_API_KEY` | API key for LinkUp search. | Yes | `lk_...` |
| `OPENROUTER_API_KEY` | API key for OpenRouter LLMs. | Yes | `sk-or-...` |
| `ALLOWED_ORIGINS` | Comma-separated CORS origins (frontend URLs). | Yes | `http://localhost:3000,https://researcherai.apexneural.cloud` |
| `ALLOWED_HOSTS` | Comma-separated trusted hostnames (backend domain). | No | `localhost,127.0.0.1,researcherai-api.apexneural.cloud` |

**Important CORS Notes:**
- Origins must include the exact frontend URL (protocol, domain, port)
- No trailing slashes in origins
- Wildcard `*` is not allowed for security
- For production, include both development and production frontend URLs

### Frontend (`frontend/.env.local`)

| Variable | Description | Required | Example |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_API_URL` | Full URL to the backend API (must match backend's allowed origins). | Yes | `http://localhost:8000/api/v1` (dev) or `https://researcherai-api.apexneural.cloud/api/v1` (prod) |

## 🛡️ Dependency Management

We use a modern `requirements.in` workflow to keep dependencies clean.

*   **`backend/requirements.in`**: Human-readable list of top-level libraries (edit this to add packages).
*   **`backend/requirements.txt`**: Machine-generated lock file with strict versions and hashes.

To update dependencies (requires `uv`):
```bash
cd backend
uv pip compile requirements.in --universal -o requirements.txt
```

## 🚀 Production Deployment

Deploy the frontend and backend as separate services.

### Backend (VPS / CloudPanel)
1.  **Install**: `pip install -r requirements.txt`
2.  **Configure**: Create `.env` file with production values:
    ```bash
    ALLOWED_ORIGINS=https://researcherai.apexneural.cloud
    ALLOWED_HOSTS=researcherai-api.apexneural.cloud
    LINKUP_API_KEY=your_production_key
    OPENROUTER_API_KEY=your_production_key
    ```
3.  **Run**: Use Gunicorn with Uvicorn workers for production performance.
    ```bash
    gunicorn -w 4 -k uvicorn.workers.UvicornWorker app.main:app --bind 0.0.0.0:8000
    ```
4.  **Verify CORS**: Test the CORS endpoint: `https://your-backend-url/api/v1/cors-test`

### Frontend (Vercel / Netlify / VPS)
1.  **Configure Environment Variables** in your deployment platform:
    ```bash
    NEXT_PUBLIC_API_URL=https://researcherai-api.apexneural.cloud/api/v1
    ```
2.  **Build**: `npm run build`
3.  **Start**: `npm start` (or let platform handle it)
4.  **Verify**: Test from production frontend - check browser console for CORS errors

### Production CORS Checklist
- ✅ Backend `ALLOWED_ORIGINS` includes exact production frontend URL
- ✅ Backend `ALLOWED_HOSTS` includes backend domain
- ✅ Frontend `NEXT_PUBLIC_API_URL` points to production backend
- ✅ Both frontend and backend use HTTPS in production
- ✅ No trailing slashes in URLs
- ✅ Test CORS from production frontend (not just localhost)

## 🔌 API Overview

Full OpenAPI documentation is available at `/docs` when the server is running.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/research` | triggers a new research job. |
| `GET` | `/health` | Health check probe. |

## 🔒 Security Notes

*   **Sanitization**: All markdown output is sanitized on the frontend (using `rehype-sanitize`) to prevent XSS.
*   **Headers**: The backend enforces strict security headers (`X-Frame-Options`, `HSTS`, etc.).
*   **CORS**: Configurable via `ALLOWED_ORIGINS` to prevent unauthorized cross-origin requests.
*   **Rate Limiting**: API endpoints are rate-limited to prevent abuse.

## ⚠️ Known Limitations

*   **No Authentication**: The system currently does not have user accounts.
*   **Volatile Storage**: Research jobs are held in memory; restarting the server clears history.
*   **Prompt Injection**: While guardrails exist, LLMs can still be tricked. Use with caution in public-facing deployments.

## ✨ Features

*   **Real-time Progress**: Watch agents as they think and browse.
*   **Deep Research**: Multi-step reasoning and fact verification.
*   **Citations**: Every claim is backed by a source URL.
*   **Export Ready**: Print or Copy reports directly.
*   **Polished UI**: Enterprise-class design with "Glassmorphism" aesthetics.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a Pull Request.

## 📄 License

MIT License.
