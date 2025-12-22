# 🔍 Agentic Deep Researcher

An MCP-powered multi-agent deep researcher that performs comprehensive web searches using LinkUp and orchestrates intelligent agents using CrewAI.

## System Architecture

![System Architecture](system%20architecture.png)

The system consists of:
- **User Interface** - Streamlit-based interactive web app
- **CrewAI Multi-Agent Framework** - Orchestrates three specialized agents:
  - **Web Searcher** - Finds relevant information using LinkUp search API
  - **Research Analyst** - Analyzes and synthesizes raw information
  - **Technical Writer** - Creates well-structured, comprehensive reports
- **Deep Search API (LinkUp)** - Provides powerful web search capabilities
- **Local LLM Stack** - Uses OpenRouter with Deepseek/GPT models
- **MCP Server** - Enables tool extensibility for other applications

## Tech Stack

- **[LinkUp](https://linkup.so/)** - Deep web search API
- **[CrewAI](https://www.crewai.com/)** - Multi-agent orchestration framework
- **[OpenRouter](https://openrouter.ai/)** - LLM API gateway (supporting GPT-4o-mini, Deepseek models, and more)
- **[Streamlit](https://streamlit.io/)** - Interactive web UI
- **[MCP (Model Context Protocol)](https://modelcontextprotocol.io/)** - Tool extensibility

## Setup

### 1. Install Dependencies

This project uses [uv](https://docs.astral.sh/uv/) for dependency management:

```bash
uv sync
```

### 2. Configure API Keys

Copy the example environment file and add your API keys:

```bash
cp .env.example .env
```

Then edit `.env` with your actual API keys:

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
LINKUP_API_KEY=your_linkup_api_key_here
OPENROUTER_MODEL=openai/gpt-4o-mini
```

**Get Your API Keys:**
- OpenRouter: https://openrouter.ai/keys
- LinkUp: https://app.linkup.so/sign-up

**Available Models:**
- `openai/gpt-4o-mini` (default - fast and cost-effective)
- `deepseek/deepseek-chat` (general purpose)
- `deepseek/deepseek-coder` (coding focused)
- See [OpenRouter Models](https://openrouter.ai/models) for more options

## Usage

### Run the Streamlit App

```bash
uv run streamlit run app.py
```

Or use the PowerShell script:

```powershell
.\run_app.ps1
```

The app will be available at `http://localhost:8501`

### Use as MCP Server

To use the researcher as an MCP tool in Cursor or other MCP-compatible applications, add this configuration to your `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "crew_research": {
      "command": "uv",
      "args": [
        "--directory",
        "path/to/multiagent_deep_researcher",
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

Replace `path/to/multiagent_deep_researcher` with the actual path to this directory.

## Project Structure

```
multiagent_deep_researcher/
├── app.py                    # Streamlit web interface
├── agents.py                 # CrewAI agent definitions and logic
├── server.py                 # MCP server implementation
├── pyproject.toml            # Project dependencies
├── .env.example              # Environment variables template
├── system architecture.png   # System architecture diagram
└── README.md                 # This file
```

## Features

- ✅ **Multi-Agent Research** - Coordinated web searching, analysis, and writing
- ✅ **Deep Web Search** - Powered by LinkUp's comprehensive search API
- ✅ **Interactive UI** - User-friendly Streamlit interface
- ✅ **MCP Integration** - Use as a tool in Cursor and other MCP clients
- ✅ **Flexible LLM Support** - Works with multiple models via OpenRouter
- ✅ **Source Citations** - All responses include source links

## How It Works

1. **User Query** - Submit a research question through the Streamlit UI
2. **Web Searcher Agent** - Formulates optimal search queries and retrieves relevant information using LinkUp
3. **Research Analyst Agent** - Analyzes raw search results, identifies patterns, and extracts key insights
4. **Technical Writer Agent** - Creates a well-structured, comprehensive report with citations
5. **Final Report** - Displayed in the UI with source links and formatted content

## License

This project is open source and available under the MIT License.

