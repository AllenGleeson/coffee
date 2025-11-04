from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from . import views
from . import static_views

urlpatterns = [
    # Admin removed - using static data files instead
    # path('admin/', admin.site.urls),
    path('api/', include('home.urls')),
    path('api/menu/', include('menu.urls')),
    path('', views.index, name='index'),
    path('menu/', views.index),
    path('contact/', views.index),
]

# Serve static files in development with CORS headers
# In DEBUG mode, serve static files with CORS enabled
# For production, use: python manage.py collectstatic
if settings.DEBUG:
    # Serve static files with CORS headers
    urlpatterns += [
        re_path(r'^static/(?P<path>.*)$', static_views.serve_static_with_cors),
    ]
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)