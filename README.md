# 🔍 Agentic Deep Researcher

An MCP-powered multi-agent deep researcher that performs comprehensive web searches using LinkUp and orchestrates intelligent agents using CrewAI.

![System Architecture](multiagent_deep_researcher/system%20architecture.png)

## Overview

This project implements a sophisticated multi-agent research system that:
- Performs deep web searches using the LinkUp API
- Orchestrates specialized AI agents with CrewAI
- Provides an interactive Streamlit web interface
- Can be used as an MCP (Model Context Protocol) server for tool extensibility

## Tech Stack

- **[LinkUp](https://linkup.so/)** - Deep web search API
- **[CrewAI](https://www.crewai.com/)** - Multi-agent orchestration framework
- **[OpenRouter](https://openrouter.ai/)** - LLM API gateway (GPT-4o-mini, Deepseek, and more)
- **[Streamlit](https://streamlit.io/)** - Interactive web UI
- **[MCP (Model Context Protocol)](https://modelcontextprotocol.io/)** - Tool extensibility

## Quick Start

### Prerequisites

- Python 3.11 or higher
- [uv](https://docs.astral.sh/uv/) package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/apexneural-hansika/multi-agent_deep-researcher.git
cd multi-agent_deep-researcher
```

2. Install dependencies:

```bash
cd backend
uv sync
```

3. Configure API keys:

```bash
cp .env.example .env
```

Edit `.env` and add your API keys:
- Get OpenRouter API key: https://openrouter.ai/keys
- Get LinkUp API key: https://app.linkup.so/sign-up

4. Run the application:

```bash
uv run streamlit run app.py
```

The app will be available at `http://localhost:8501`

## Frontend Setup

To run the Next.js frontend:

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

## Features

- ✅ **Multi-Agent Research** - Three specialized agents working together:
  - **Web Searcher** - Finds relevant information using LinkUp
  - **Research Analyst** - Analyzes and synthesizes findings
  - **Technical Writer** - Creates comprehensive reports
- ✅ **Deep Web Search** - Powered by LinkUp's comprehensive search API
- ✅ **Interactive UI** - User-friendly Streamlit interface
- ✅ **MCP Integration** - Use as a tool in Cursor and other MCP clients
- ✅ **Flexible LLM Support** - Works with multiple models via OpenRouter
- ✅ **Source Citations** - All responses include source links

## How It Works

1. **User Query** - Submit a research question through the Streamlit UI
2. **Web Searcher Agent** - Formulates optimal search queries and retrieves relevant information
3. **Research Analyst Agent** - Analyzes raw search results and extracts key insights
4. **Technical Writer Agent** - Creates a well-structured report with citations
5. **Final Report** - Displayed with source links and formatted content

## Use as MCP Server

To use this as an MCP tool in Cursor or other MCP-compatible applications, add this configuration to your `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "crew_research": {
      "command": "uv",
      "args": [
        "--directory",
        "path/to/backend",
        "run",
        "server.py"
      ],
      "env": {
        "OPENROUTER_API_KEY": "your_openrouter_api_key_here",
        "LINKUP_API_KEY": "your_linkup_api_key_here"
      }
    }
  }
}
```

## Documentation

For detailed documentation, see the [backend README](backend/README.md).

## Project Structure

```
multi-agent_deep-researcher/
├── backend/
│   ├── app.py                    # Streamlit web interface
│   ├── agents.py                 # CrewAI agent definitions and logic
│   ├── server.py                 # MCP server implementation
│   ├── pyproject.toml            # Project dependencies
│   ├── .env.example              # Environment variables template
│   ├── system architecture.png   # System architecture diagram
│   └── README.md                 # Detailed documentation
├── frontend/
│   ├── app/                      # Next.js app router
│   ├── components/               # UI components
│   ├── public/                   # Static assets
│   └── package.json              # Frontend dependencies
```

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

