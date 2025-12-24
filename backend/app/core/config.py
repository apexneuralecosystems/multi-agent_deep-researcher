from pydantic_settings import BaseSettings
from typing import List, Union
import logging
import re

logger = logging.getLogger(__name__)

class Settings(BaseSettings):
    LINKUP_API_KEY: str
    OPENROUTER_API_KEY: str
    ALLOWED_ORIGINS: Union[str, List[str]] = "http://localhost:3000"
    ALLOWED_HOSTS: Union[str, List[str]] = "localhost,127.0.0.1"

    @property
    def cors_origins(self) -> List[str]:
        """Parse and validate CORS origins with security checks."""
        if isinstance(self.ALLOWED_ORIGINS, str):
            origins = [origin.strip() for origin in self.ALLOWED_ORIGINS.split(",")]
        else:
            origins = self.ALLOWED_ORIGINS
        
        validated_origins = []
        for origin in origins:
            origin = origin.strip()
            if not origin:
                continue
                
            # Security: Reject wildcard origins
            if origin == "*":
                logger.error("Wildcard origin '*' is not allowed for security reasons")
                raise ValueError("Wildcard origin '*' is not allowed. Please specify exact origins.")
            
            # Validate origin format (must start with http:// or https://)
            if not (origin.startswith("http://") or origin.startswith("https://")):
                logger.error(f"Invalid origin format: {origin}. Must start with http:// or https://")
                raise ValueError(f"Invalid origin format: {origin}. Must start with http:// or https://")
            
            # Remove trailing slashes
            origin = origin.rstrip("/")
            
            # Basic URL validation
            url_pattern = re.compile(
                r'^https?://'  # http:// or https://
                r'(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,6}\.?|'  # domain...
                r'localhost|'  # localhost
                r'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})'  # ...or ip
                r'(?::\d+)?'  # optional port
                r'(?:/?|[/?]\S+)$', re.IGNORECASE)
            
            if not url_pattern.match(origin):
                logger.warning(f"Origin '{origin}' may have invalid format, but allowing it")
            
            validated_origins.append(origin)
        
        if not validated_origins:
            logger.warning("No valid CORS origins configured. Using default localhost:3000")
            return ["http://localhost:3000"]
        
        # Remove duplicates while preserving order
        seen = set()
        unique_origins = []
        for origin in validated_origins:
            if origin not in seen:
                seen.add(origin)
                unique_origins.append(origin)
        
        logger.info(f"CORS origins configured: {unique_origins}")
        return unique_origins

    @property
    def trusted_hosts(self) -> List[str]:
        """Parse and validate trusted hosts."""
        if isinstance(self.ALLOWED_HOSTS, str):
            hosts = [host.strip() for host in self.ALLOWED_HOSTS.split(",")]
        else:
            hosts = self.ALLOWED_HOSTS
        
        validated_hosts = []
        for host in hosts:
            host = host.strip()
            if host:
                validated_hosts.append(host)
        
        # Always include localhost for development
        if "localhost" not in validated_hosts:
            validated_hosts.append("localhost")
        if "127.0.0.1" not in validated_hosts:
            validated_hosts.append("127.0.0.1")
        
        logger.info(f"Trusted hosts configured: {validated_hosts}")
        return validated_hosts

    API_V1_STR: str = "/api/v1"

    class Config:
        env_file = ".env"
        extra = "ignore"

# Validate settings on import
try:
    settings = Settings()
    # Trigger validation by accessing properties
    _ = settings.cors_origins
    _ = settings.trusted_hosts
except Exception as e:
    logger.error(f"Failed to initialize settings: {e}")
    raise
