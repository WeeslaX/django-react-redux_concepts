from rest_framework import routers
from .api import InputDataViewSet

router = routers.DefaultRouter()
router.register('api/input-data', InputDataViewSet, 'inputData')

urlpatterns = router.urls
