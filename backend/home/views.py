from django.http import JsonResponse

def index(request):
    """ A view to return JSON data """
    jumbotrondata = {
        'heading': 'Welcome To Hot Drinks',
        'subheading': 'Swing by sometime to have a delicious brew.'
    }
    coffeeinfodata = {
        'heading': 'The best coffee shop',
        'subheading1': 'Best beans 1',
        'img1': 'https://image.ibb.co/n5gUtm/icon_1.png',
        'subheading2': 'Best beans 2',
        'img2': 'https://image.ibb.co/dwEXDm/icon_2.png',
        'subheading3': 'Best beans 3',
        'img3': 'https://image.ibb.co/j5Og66/icon_3.png',
        'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, omnis iste natus error sit voluptatem accusantium doloremque, totam rem aperiam, voluptatem accusantium doloremque.'
    }
    # brandvideodata = {
    #     'heading': 'The best Specialty Coffee',
    #     'description': 'Swing by sometime to have a delicious brew.',
    #     'video': '563161697'
    # }
    aboutdata = {
        'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
        'lat': 53.628166,
        'lng': -6.261559
    }
    data = {
        'jumbotron': jumbotrondata,
        'coffeeinfo': coffeeinfodata,
        # 'brandvideo': brandvideodata,
        'about': aboutdata
    }

    return JsonResponse(data)