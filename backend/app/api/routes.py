from fastapi import APIRouter, HTTPException
from app.api.models import ResearchRequest, ResearchResponse, JobStatusResponse
from app.services.job_manager import JobManager

router = APIRouter()

@router.post("/research", response_model=ResearchResponse)
async def start_research(request: ResearchRequest):
    """Start a new research task"""
    job_id = JobManager.create_job(request.query, request.depth)
    return ResearchResponse(task_id=job_id, status="pending")

@router.get("/research/{task_id}", response_model=JobStatusResponse)
async def get_research_status(task_id: str):
    """Get the status of a specific research task"""
    job = JobManager.get_job(task_id)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    return job

@router.get("/research/{task_id}/result")
async def get_research_result(task_id: str):
    """Get just the result string (markdown)"""
    job = JobManager.get_job(task_id)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    
    if job["status"] != "completed":
        raise HTTPException(status_code=400, detail="Job not completed yet")
        
    return {"result": job["result"]}
