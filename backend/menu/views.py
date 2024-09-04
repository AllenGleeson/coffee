from django.http import JsonResponse
from .models import PDFViewer

def index(request):
    """ A view to return JSON data """
    pdfviewerdata = PDFViewer.objects.first()  # Assuming you want the first PDFViewer entry
    
    # Serialize menu items into a list of dictionaries
    data = {
        'pdfviewer': {
            'pdf_url': request.build_absolute_uri(pdfviewerdata.pdf.url) if pdfviewerdata and pdfviewerdata.pdf else None,
        }
    }
    
    return JsonResponse(data, safe=False)  # Set safe=False to allow serializing lists