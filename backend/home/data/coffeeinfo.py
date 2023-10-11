from django.db import models

class CoffeeInfo(models.Model):
    heading = models.CharField(max_length=255)
    description = models.TextField(default='Default Description')  # Provide a default value

    def __str__(self):
        return "CoffeeInfo"