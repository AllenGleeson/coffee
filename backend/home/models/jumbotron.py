from django.db import models

class Jumbotron(models.Model):
    website_name = models.CharField(max_length=255)
    heading = models.CharField(max_length=255)

    def __str__(self):
        return self.website_name
