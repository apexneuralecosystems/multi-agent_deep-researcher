from pydantic import BaseModel, Field
from typing import Optional, List, Any, Literal

class ResearchRequest(BaseModel):
    query: str = Field(..., description="The research topic or question", min_length=5, max_length=500)
    depth: Literal["standard", "deep"] = Field("standard", description="standard or deep")

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
