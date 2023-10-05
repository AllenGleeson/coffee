from django.http import JsonResponse
from django.urls import reverse
from django.contrib.sites.shortcuts import get_current_site
from .models import MenuTable, PDFViewer

def index(request):
    """ A view to return JSON data """
    
    # Query all menu items from your models
    menuitemsdata = MenuTable.objects.all()
    pdfviewerdata = PDFViewer.objects.first()  # Assuming you want the first PDFViewer entry
    
    current_site = get_current_site(request)
    
    # Serialize menu items into a list of dictionaries
    data = {
        'menuitems': [
            {
                'name': item.name if item else None,
                'price': item.price if item else None
            }
            for item in menuitemsdata
        ],
        'pdfviewer': {
            'pdf_url': request.build_absolute_uri(pdfviewerdata.pdf.url) if pdfviewerdata and pdfviewerdata.pdf else None,
        }
    }
    
    return JsonResponse(data, safe=False)  # Set safe=False to allow serializing lists