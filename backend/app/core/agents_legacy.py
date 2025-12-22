import os
from typing import Type
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from linkup import LinkupClient
from crewai import Agent, Task, Crew, Process, LLM
from crewai.tools import BaseTool

# Load environment variables
load_dotenv()

def get_llm_client():
    """Initialize and return the LLM client using OpenRouter"""
    openrouter_api_key = os.getenv("OPENROUTER_API_KEY")
    if not openrouter_api_key:
        raise ValueError("OPENROUTER_API_KEY environment variable is required.")
        
    os.environ["OPENAI_API_KEY"] = openrouter_api_key
    os.environ["OPENAI_API_BASE"] = "https://openrouter.ai/api/v1"
    
    model_name = os.getenv("OPENROUTER_MODEL", "openai/gpt-4o-mini")
    
    return LLM(
        model=model_name,
        base_url="https://openrouter.ai/api/v1",
        api_key=openrouter_api_key,
        temperature=0.7
    )

class LinkUpSearchInput(BaseModel):
    """Input schema for LinkUp Search Tool."""
    query: str = Field(description="The search query to perform")
    depth: str = Field(default="standard", description="Depth of search: 'standard' or 'deep'")
    output_type: str = Field(default="searchResults", description="Output type: 'searchResults', 'sourcedAnswer', or 'structured'")

class LinkUpSearchTool(BaseTool):
    name: str = "LinkUp Search"
    description: str = "Search the web for information using LinkUp and return comprehensive results"
    args_schema: Type[BaseModel] = LinkUpSearchInput

    def _run(self, query: str, depth: str = "standard", output_type: str = "searchResults") -> str:
        try:
            linkup_client = LinkupClient(api_key=os.getenv("LINKUP_API_KEY"))
            search_response = linkup_client.search(
                query=query,
                depth=depth,
                output_type=output_type
            )
            return str(search_response)
        except Exception as e:
            return f"Error occurred while searching: {str(e)}"

def create_research_crew(query: str):
    """Create and configure the research crew with all agents and tasks"""
    
    linkup_search_tool = LinkUpSearchTool()
    client = get_llm_client()

    web_searcher = Agent(
        role="Web Searcher",
        goal="Find the most relevant information on the web, along with source links (urls).",
        backstory="An expert at formulating search queries and retrieving relevant information. Passes the results to the 'Research Analyst'.",
        verbose=False,  # Disabled to prevent logging crashes
        allow_delegation=False,  # Disabled to prevent recursion loops
        tools=[linkup_search_tool],
        llm=client,
    )

    research_analyst = Agent(
        role="Research Analyst",
        goal="Analyze and synthesize raw information into structured insights, along with source links (urls) as citations.",
        backstory="An expert at analyzing information, identifying patterns, and extracting key insights.",
        verbose=False,
        allow_delegation=False,
        llm=client,
    )

    technical_writer = Agent(
        role="Technical Writer",
        goal="Create well-structured, clear, and comprehensive responses in markdown format, with citations/source links (urls).",
        backstory="An expert at communicating complex information in an accessible way.",
        verbose=False,
        allow_delegation=False,
        llm=client,
    )

    # Define tasks
    search_task = Task(
        description=f"Search for comprehensive information about: {query}.",
        agent=web_searcher,
        expected_output="Detailed raw search results including sources (urls).",
    )

    analysis_task = Task(
        description="Analyze the raw search results, identify key information, verify facts and prepare a structured analysis.",
        agent=research_analyst,
        expected_output="A structured analysis of the information with verified facts and key insights, along with source links",
        context=[search_task]
    )

    writing_task = Task(
        description="Create a comprehensive, well-organized response based on the research analysis.",
        agent=technical_writer,
        expected_output="A clear, comprehensive response that directly answers the query with proper citations/source links (urls).",
        context=[analysis_task]
    )

    crew = Crew(
        agents=[web_searcher, research_analyst, technical_writer],
        tasks=[search_task, analysis_task, writing_task],
        verbose=False,
        process=Process.sequential
    )

    return crew

def run_research(query: str):
    """Run the research process and return results"""
    try:
        crew = create_research_crew(query)
        result = crew.kickoff()
        return result.raw
    except Exception as e:
        return f"Error: {str(e)}"
