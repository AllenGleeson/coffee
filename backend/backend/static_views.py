"""
Custom static file serving with CORS headers
"""
from django.contrib.staticfiles.views import serve as staticfiles_serve
from django.http import HttpResponse, Http404
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.http import require_http_methods
from django.conf import settings
import os

@xframe_options_exempt
def serve_static_with_cors(request, path):
    """
    Serve static files with CORS headers enabled
    """
    # Handle OPTIONS preflight request
    if request.method == 'OPTIONS':
        response = HttpResponse()
        response['Access-Control-Allow-Origin'] = '*'
        response['Access-Control-Allow-Methods'] = 'GET, OPTIONS'
        response['Access-Control-Allow-Headers'] = '*'
        response['Access-Control-Max-Age'] = '86400'
        return response
    
    try:
        response = staticfiles_serve(request, path)
        
        # Add CORS headers
        response['Access-Control-Allow-Origin'] = '*'
        response['Access-Control-Allow-Methods'] = 'GET, OPTIONS'
        response['Access-Control-Allow-Headers'] = '*'
        
        return response
    except Http404:
        # If file not found, return 404 with CORS headers
        response = HttpResponse('File not found', status=404)
        response['Access-Control-Allow-Origin'] = '*'
        response['Access-Control-Allow-Methods'] = 'GET, OPTIONS'
        response['Access-Control-Allow-Headers'] = '*'
        return response

