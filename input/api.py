from rest_framework import viewsets, permissions
from input.models import InputData
from input.serializers import InputDataSerializer


class InputDataViewSet(viewsets.ModelViewSet):
    queryset = InputData.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InputDataSerializer
