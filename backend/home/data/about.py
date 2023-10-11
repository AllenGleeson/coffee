from django.db import models

class About(models.Model):
    description = models.TextField()
    lat = models.FloatField()
    lng = models.FloatField()
    
    def __str__(self):
        return "About Page"