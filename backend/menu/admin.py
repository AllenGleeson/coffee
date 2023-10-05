from django.contrib import admin
from .models import MenuTable

@admin.register(MenuTable)
class MenutableAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')