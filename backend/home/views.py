from django.http import JsonResponse

def index(request):
    """ A view to return JSON data """
    jumbotrondata = {
        'heading': 'Welcome To Hot Drinks',
        'subheading': 'Swing by sometime to have a delicious brew.'
    }
    aboutdata = {
        'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
        'lat': 53.628166,
        'lng': -6.261559
    }
    data = {
        'jumbotron': jumbotrondata,
        'about': aboutdata,
    }
    return JsonResponse(data)
