from django.http import JsonResponse
from django.views.decorators.clickjacking import xframe_options_exempt
from .data.static_data import MENU_DATA

@xframe_options_exempt
def index(request):
    """ A view to return JSON data from static files """
    
    menu_data = MENU_DATA.copy()
    
    # Convert relative path to absolute URL
    if menu_data.get('pdfviewer', {}).get('pdf_url'):
        pdf_url = menu_data['pdfviewer']['pdf_url']
        if not pdf_url.startswith('http'):
            menu_data['pdfviewer']['pdf_url'] = request.build_absolute_uri(pdf_url)
    
    return JsonResponse(menu_data, safe=False)