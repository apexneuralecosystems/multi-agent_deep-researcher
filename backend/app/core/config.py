from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    LINKUP_API_KEY: str
    OPENROUTER_API_KEY: str
    ALLOWED_ORIGINS: List[str] = ["http://localhost:3000"]
    API_V1_STR: str = "/api/v1"
    
    class Config:
        env_file = ".env"
        extra = "ignore"

settings = Settings()
