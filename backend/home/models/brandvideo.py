from django.db import models

class BrandVideo(models.Model):
    heading = models.CharField(max_length=255)
    text = models.TextField()
    url = models.URLField()

    def __str__(self):
        return self.heading
