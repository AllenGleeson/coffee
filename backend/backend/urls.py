from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('home.urls')),
    path('api/menu/', include('menu.urls')),
    path('', views.index, name='index'),
    path('menu/', views.index),
    path('contact/', views.index),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)