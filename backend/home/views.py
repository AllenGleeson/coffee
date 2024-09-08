from django.http import JsonResponse
from django.conf import settings
from .models import Jumbotron, About, CoffeeInfo, CoffeeInfoNode, BrandVideo
import base64

def encode_base64(data: str) -> str:
    """Encode data as base64."""
    return base64.b64encode(data.encode()).decode()

def index(request):
    """ A view to return JSON data """

    # Query data from your models
    jumbotrondata = Jumbotron.objects.first()
    aboutdata = About.objects.first()
    coffeeinfodata = CoffeeInfo.objects.first()
    coffeeinfonodedata = CoffeeInfoNode.objects.all()
    brandvideodata = BrandVideo.objects.first()

    # Encode API keys
    google_api_key_encoded = encode_base64(settings.GOOGLE_MAPS_API_KEY)
    instagram_api_key_encoded = encode_base64(settings.INSTAGRAM_API_KEY)
    
    # Create a dictionary to hold the data
    data = {
        'jumbotron': {
            'heading': jumbotrondata.heading if jumbotrondata else None,
            'subheading': jumbotrondata.subheading if jumbotrondata else None
        },
        'about': {
            'description': aboutdata.description if aboutdata else None,
            'address': aboutdata.address if aboutdata else None,
            'phone': aboutdata.phone if aboutdata else None,
            'email': aboutdata.email if aboutdata else None,
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
        },
        'google_maps_api_key': google_api_key_encoded,
        'instagram_api_key': instagram_api_key_encoded,
    }

    return JsonResponse(data)