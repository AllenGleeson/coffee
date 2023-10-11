from django.db import models

class CoffeeInfoManager(models.Manager):
    def create_coffee_info(self, subheading, img):
        # Check if there are already three instances
        if self.count() >= 3:
            # Delete the oldest instance to make room for the new one
            oldest_instance = self.earliest('id')
            oldest_instance.delete()

        # Create and return a new instance
        coffee_info = self.create(subheading=subheading, img=img)
        return coffee_info
    
class CoffeeInfoNode(models.Model):
    subheading = models.CharField(default='subheading', max_length=255)
    img = models.URLField(default='https://image.ibb.co/n5gUtm/icon_1.png')

    objects = CoffeeInfoManager()

    def __str__(self):
        return "CoffeeInfoNode"