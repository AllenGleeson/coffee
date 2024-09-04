from django.contrib import admin
from .models import Jumbotron, About, CoffeeInfo, CoffeeInfoNode, BrandVideo

@admin.register(Jumbotron)
class JumbotronAdmin(admin.ModelAdmin):
    list_display = ('heading', 'subheading')

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('description', 'address', 'phone', 'email', 'lat', 'lng')

@admin.register(CoffeeInfo)
class CoffeeInfoAdmin(admin.ModelAdmin):
    list_display = ('heading', 'description')

@admin.register(CoffeeInfoNode)
class CoffeeInfoNodeAdmin(admin.ModelAdmin):
    list_display = ('subheading', 'img')

@admin.register(BrandVideo)
class BrandVideoAdmin(admin.ModelAdmin):
    list_display = ('heading', 'description', 'url')