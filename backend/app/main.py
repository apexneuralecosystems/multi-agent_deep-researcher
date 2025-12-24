from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from app.api.routes import router as api_router
from app.core.config import settings
from app.core.limiter import limiter
import os
import logging
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded

# Configure structured logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler("app.log"),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

# Disable CrewAI telemetry
os.environ["CREWAI_TELEMETRY_OPT_OUT"] = "true"

app = FastAPI(
    title="Agentic Deep Researcher API",
    description="Backend API for Multi-Agent Deep Researcher",
    version="1.0.0"
)

# Log CORS configuration on startup
logger.info("=" * 60)
logger.info("CORS Configuration:")
logger.info(f"  Allowed Origins: {settings.cors_origins}")
logger.info(f"  Trusted Hosts: {settings.trusted_hosts}")
logger.info("=" * 60)

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Security Headers Middleware
@app.middleware("http")
async def add_security_headers(request: Request, call_next):
    response = await call_next(request)
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    return response

app.add_middleware(
    TrustedHostMiddleware, allowed_hosts=settings.trusted_hosts
)

# CORS Configuration - Production Ready
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Restrict to only needed methods
    allow_headers=["Content-Type", "Authorization", "Accept"],  # Restrict to only needed headers
    expose_headers=["X-Request-ID"],  # Expose custom headers if needed
    max_age=3600,  # Cache preflight requests for 1 hour
)

# Include Routes
app.include_router(api_router, prefix="/api/v1")

@app.get("/health")
async def health_check():
    return {"status": "ok", "service": "agentic-deep-researcher-backend"}

@app.get("/api/v1/cors-test")
async def cors_test(request: Request):
    """Test endpoint to verify CORS configuration is working correctly."""
    origin = request.headers.get("Origin", "No Origin header")
    is_allowed = origin in settings.cors_origins if origin != "No Origin header" else None
    
    return {
        "status": "ok",
        "message": "CORS test endpoint - check response headers for CORS configuration",
        "request_origin": origin,
        "allowed_origins": settings.cors_origins,
        "origin_allowed": is_allowed,
        "cors_configured": True,
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8501, reload=True)
