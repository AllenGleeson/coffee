from django.contrib import admin
from .models import PDFViewer

@admin.register(PDFViewer)
class PDFViewer(admin.ModelAdmin):
    list_display = ('pdf',)