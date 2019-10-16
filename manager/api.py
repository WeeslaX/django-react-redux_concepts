from manager.models import Placeholder
from rest_framework import viewsets, permissions
from manager.serializers import PlaceholderSerializer


class PlaceholderViewSet(viewsets.ModelViewSet):
    queryset = Placeholder.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PlaceholderSerializer
