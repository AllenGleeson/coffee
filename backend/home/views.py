from django.http import JsonResponse
from .models import About, CoffeeInfo, Jumbotron, BrandVideo

def index(request):
    """ A view to return JSON data """
    
    # Query data from your models
    jumbotrondata = Jumbotron.objects.first()  # Assuming you want the first Jumbotron entry
    aboutdata = About.objects.first()  # Assuming you want the first About entry
    coffeeinfodata = CoffeeInfo.objects.all()  # Get all CoffeeInfo entries
    brandvideodata = BrandVideo.objects.first()  # Assuming you want the first BrandVideo entry
    
    # Create a dictionary to hold the data
    data = {
        'jumbotron': {
            'heading': jumbotrondata.heading if jumbotrondata else None,
            'subheading': jumbotrondata.subheading if jumbotrondata else None
        },
        'about': {
            'description': aboutdata.description if aboutdata else None,
            'lat': aboutdata.lat if aboutdata else None,
            'lng': aboutdata.lng if aboutdata else None
        },
        'coffeeinfo': [
            {
                'heading': item.heading if item else None,
                'subheading': item.subheading if item else None,
                'img': item.img if item else None
            }
            for item in coffeeinfodata
        ],
        'brandvideo': {
            'heading': brandvideodata.heading if brandvideodata else None,
            'description': brandvideodata.description if brandvideodata else None,
            'url': brandvideodata.url if brandvideodata else None
        }
    }

    return JsonResponse(data)
