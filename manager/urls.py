from rest_framework import routers
from .api import PlaceholderViewSet

router = routers.DefaultRouter()
router.register('api/placeholder', PlaceholderViewSet, 'placeholder')

urlpatterns = router.urls
