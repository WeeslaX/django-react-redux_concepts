from django.db import models
from datetime import datetime
from django.contrib.postgres.fields import JSONField


# Create your models here.
class InputData(models.Model):
    createdAt = models.DateTimeField(default=datetime.now, blank=True)
    data = JSONField(default=dict)
