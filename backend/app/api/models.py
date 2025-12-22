from pydantic import BaseModel, Field
from typing import Optional, List, Any

class ResearchRequest(BaseModel):
    query: str = Field(..., description="The research topic or question")
    depth: str = Field("standard", description="standard or deep")

class ResearchResponse(BaseModel):
    task_id: str
    status: str

class JobStatusResponse(BaseModel):
    id: str
    query: str
    status: str
    result: Optional[str] = None
    created_at: str
    error: Optional[str] = None
