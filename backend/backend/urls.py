from django.contrib import admin
from django.urls import path, include
from django.conf import settings  # Add this import

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('menu/', include('menu.urls')),
]

# Serve media files during development
if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)