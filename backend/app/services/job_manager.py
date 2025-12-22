
import uuid
import threading
import logging
from typing import Dict, Any, List, Optional
from datetime import datetime
from app.core.agents_legacy import run_research

logger = logging.getLogger(__name__)

class JobManager:
    _jobs: Dict[str, Dict[str, Any]] = {}
    _lock = threading.Lock()

    @staticmethod
    def create_job(query: str, depth: str = "standard") -> str:
        # 1. Prompt Injection Guardrail (Synchronous)
        forbidden_phrases = ["ignore previous instructions", "system prompt", "print your instructions"]
        if any(phrase in query.lower() for phrase in forbidden_phrases):
             # This will bubble up as a 500 or 400 depending on exception handler.
             # We should probably raise HTTPException but we are in a service layer.
             # Letting it bubble as ValueError is fine, Routes usually handle it or return 500.
             # Ideally we want 400.
             raise ValueError("Query contains forbidden content (Prompt Injection Detected).")

        job_id = str(uuid.uuid4())
        
        with JobManager._lock:
            JobManager._jobs[job_id] = {
                "id": job_id,
                "query": query,
                "depth": depth,
                "status": "pending",
                "result": None,
                "created_at": datetime.now().isoformat(),
                "logs": []  # Future: Capture logs
            }
        
        # Start in background thread
        threading.Thread(target=JobManager._run_job, args=(job_id, query), daemon=True).start()
        
        return job_id

    @staticmethod
    def _run_job(job_id: str, query: str):
        logger.info(f"Starting job {job_id} with query: {query}")
        
        with JobManager._lock:
            JobManager._jobs[job_id]["status"] = "processing"
            
        try:
            # Execute the synchronous agent logic
            result = run_research(query)
            
            with JobManager._lock:
                JobManager._jobs[job_id]["status"] = "completed"
                JobManager._jobs[job_id]["result"] = result
                
        except Exception as e:
            logger.error(f"Job {job_id} failed: {e}")
            with JobManager._lock:
                JobManager._jobs[job_id]["status"] = "failed"
                JobManager._jobs[job_id]["error"] = str(e)

    @staticmethod
    def get_job(job_id: str) -> Optional[Dict[str, Any]]:
        return JobManager._jobs.get(job_id)

    @staticmethod
    def list_jobs() -> List[Dict[str, Any]]:
        return list(JobManager._jobs.values())
