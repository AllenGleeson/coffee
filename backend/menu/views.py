from django.http import JsonResponse
from .models import MenuTable

def index(request):
    """ A view to return JSON data """
    
    # Query all menu items from your models
    menu_items = MenuTable.objects.all()
    
    # Serialize menu items into a list of dictionaries
    data = [
        {
            'name': item.name,
            'price': item.price
        }
        for item in menu_items
    ]
    
    return JsonResponse(data, safe=False)  # Set safe=False to allow serializing lists
