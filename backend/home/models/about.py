from django.db import models

class About(models.Model):
    text = models.TextField()

    def __str__(self):
        return "About Page"
