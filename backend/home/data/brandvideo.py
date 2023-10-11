from django.db import models

class BrandVideo(models.Model):
    heading = models.CharField(max_length=255)
    description = models.TextField()
    url = models.CharField(max_length=255)

    def __str__(self):
        return self.heading