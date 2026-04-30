from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, benchmarks, comparison, scores, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(benchmarks.router, prefix="/benchmarks", tags=["benchmarks"])
api_router.include_router(comparison.router, prefix="/comparison", tags=["comparison"])
api_router.include_router(scores.router, prefix="/scores", tags=["scores"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
