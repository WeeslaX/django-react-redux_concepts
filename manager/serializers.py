from rest_framework import serializers
from manager.models import Placeholder


class PlaceholderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Placeholder
        fields = '__all__'
