from django.contrib import admin
from .models import CoffeeInfo, BrandVideo, Jumbotron, About

@admin.register(CoffeeInfo)
class CoffeeInfoAdmin(admin.ModelAdmin):
    list_display = ('heading', 'subheading', 'img')

@admin.register(BrandVideo)
class BrandVideoAdmin(admin.ModelAdmin):
    list_display = ('heading', 'description', 'url')

@admin.register(Jumbotron)
class JumbotronAdmin(admin.ModelAdmin):
    list_display = ('heading', 'subheading')

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('description', 'lat', 'lng')
