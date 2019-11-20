from django.db import models
from datetime import datetime
from django.contrib.postgres.fields import JSONField


# Create your models here.
class InputData(models.Model):
    createdAt = models.DateTimeField(auto_now_add=True, blank=True)
    data = JSONField(default=dict)
