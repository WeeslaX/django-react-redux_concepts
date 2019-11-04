from django.db import models
from datetime import datetime
from django.contrib.postgres.fields import JSONField

# Create your models here.


class Placeholder(models.Model):
    name = models.CharField(max_length=100)
    createdAt = models.DateTimeField(default=datetime.now, blank=True)
    data = JSONField()
