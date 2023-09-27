from django.db import models

class CoffeeInfoManager(models.Manager):
    def create_coffee_info(self, heading, subheading, img):
        # Check if there are already three instances
        if self.count() >= 3:
            # Delete the oldest instance to make room for the new one
            oldest_instance = self.earliest('id')
            oldest_instance.delete()

        # Create and return a new instance
        coffee_info = self.create(heading=heading, subheading1=subheading, img=img)
        return coffee_info

class CoffeeInfo(models.Model):
    heading = models.CharField(max_length=255)
    subheading = models.CharField(max_length=255)
    img = models.URLField()

    objects = CoffeeInfoManager()

    def __str__(self):
        return self.heading
