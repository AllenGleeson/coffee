from django.http import JsonResponse
from .models import Jumbotron, About, CoffeeInfo, CoffeeInfoNode, BrandVideo

def index(request):
    """ A view to return JSON data """
    
    # Query data from your models
    jumbotrondata = Jumbotron.objects.first()  # Assuming you want the first Jumbotron entry
    aboutdata = About.objects.first()  # Assuming you want the first About entry
    coffeeinfodata = CoffeeInfo.objects.first()  # Assuming you want the first CoffeeInfo entry
    coffeeinfonodedata = CoffeeInfoNode.objects.all()  # Assuming you want all CoffeeInfoNode entry
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
        'coffeeinfo': {
            'heading': coffeeinfodata.heading if coffeeinfodata else None,
            'description': coffeeinfodata.description if coffeeinfodata else None,
        },
        'coffeeinfonode': [
            {
                'subheading': item.subheading if item else None,
                'img': item.img if item else None
            }
            for item in coffeeinfonodedata
        ],
        'brandvideo': {
            'heading': brandvideodata.heading if brandvideodata else None,
            'description': brandvideodata.description if brandvideodata else None,
            'url': brandvideodata.url if brandvideodata else None
        }
    }

    return JsonResponse(data)