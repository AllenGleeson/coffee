from django.contrib import admin
from .models import MenuTable, PDFViewer

@admin.register(MenuTable)
class MenutableAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')

@admin.register(PDFViewer)
class PDFViewer(admin.ModelAdmin):
    list_display = ('pdf',)