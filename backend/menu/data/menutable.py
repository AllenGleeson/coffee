from django.db import models

class MenuTable(models.Model):
    name = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)  # max_digits and decimal_places depend on your requirements

    def __str__(self):
        return self.name  # You can return a meaningful representation of the object
