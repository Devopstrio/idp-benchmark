from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_comparison():
    return {'status': 'ok'}
