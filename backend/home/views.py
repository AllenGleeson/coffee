from django.http import JsonResponse

def index(request):
    """ A view to return JSON data """
    data = {
        'key1': 'value1',
        'key2': 'value2',
    }
    return JsonResponse(data)