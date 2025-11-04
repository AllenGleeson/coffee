from django.http import JsonResponse
from django.conf import settings
from .data.static_data import STATIC_DATA
import base64
from django.views.decorators.clickjacking import xframe_options_exempt

def encode_base64(data: str) -> str:
    """Encode data as base64."""
    return base64.b64encode(data.encode()).decode()

@xframe_options_exempt
def index(request):
    """ A view to return JSON data from static files """
    
    # Get API keys (with fallback if not set)
    try:
        google_api_key = getattr(settings, 'GOOGLE_MAPS_API_KEY', '')
        google_api_key_encoded = encode_base64(google_api_key) if google_api_key else ''
    except Exception:
        google_api_key_encoded = ''
    
    try:
        instagram_api_key = getattr(settings, 'INSTAGRAM_API_KEY', '')
        instagram_api_key_encoded = encode_base64(instagram_api_key) if instagram_api_key else ''
    except Exception:
        instagram_api_key_encoded = ''
    
    # Get static data
    static_data = STATIC_DATA.copy()
    
    # Build absolute URLs for images if needed
    if static_data.get('coffeeinfonode'):
        for node in static_data['coffeeinfonode']:
            if node.get('img') and not node['img'].startswith('http'):
                # Convert relative paths to absolute URLs
                node['img'] = request.build_absolute_uri(node['img'])
    
    # Create response data
    data = {
        'jumbotron': static_data.get('jumbotron', {}),
        'about': static_data.get('about', {}),
        'coffeeinfo': static_data.get('coffeeinfo', {}),
        'coffeeinfonode': static_data.get('coffeeinfonode', []),
        'brandvideo': static_data.get('brandvideo', {}),
        'google_maps_api_key': google_api_key_encoded,
        'instagram_api_key': instagram_api_key_encoded,
    }

    return JsonResponse(data)