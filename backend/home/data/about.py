from django.db import models

class About(models.Model):
    description = models.TextField()
    address = models.CharField(max_length=255, null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    lat = models.FloatField()
    lng = models.FloatField()

    def __str__(self):
        return "About Page"