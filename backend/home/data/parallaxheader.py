from django.db import models

class ParallaxHeader(models.Model):
    heading = models.CharField(max_length=255)
    subheading = models.CharField(max_length=255)

    def __str__(self):
        return self.heading