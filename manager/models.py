from django.db import models

# Create your models here.


class Placeholder(models.Model):
    name = models.CharField(max_length=100)
    createdAt = models.DateTimeField(auto_now_add=True)
