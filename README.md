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
│   └── components/   # UI Components
├── backend/          # FastAPI Server
│   ├── app/          # API Routes & Agent Logic
│   └── agents.py     # Agent Definitions
└── README.md         # Documentation
```

## 🏁 Quick Start

### 1. Prerequisites
*   Python 3.10+
*   Node.js 18+
*   `uv` (Python package manager)

### 2. Backend Setup
```bash
cd backend
uv sync
cp .env.example .env
# Edit .env with your LINKUP_API_KEY and OPENROUTER_API_KEY

# Run the API Server
uv run uvicorn app.main:app --port 8501 --reload
```
*Backend runs at `http://localhost:8501`*

### 3. Frontend Setup
```bash
cd frontend
npm install

# Run the Web App
npm run dev
```
*App runs at `http://localhost:3000`*

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
