from django.db import models

class PDFViewer(models.Model):
    pdf = models.FileField(upload_to='pdfs/')  # You need to specify the upload location

    def __str__(self):
        return str(self.pdf)