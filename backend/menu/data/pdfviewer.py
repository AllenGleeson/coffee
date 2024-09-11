from django.db import models

class PDFViewer(models.Model):
    pdf = models.FileField(upload_to='cafe/pdfs/')  # PDFs will only be stored in this folder in S3

    def __str__(self):
        return str(self.pdf)