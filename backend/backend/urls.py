from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import RedirectView
from django.conf.urls.static import static

from django.conf import settings

urlpatterns = [
    path('api/shop/', include('apps.shop.urls')),
    path('admin/', admin.site.urls),
    path('', RedirectView.as_view(url='http://localhost:5173', permanent=False)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
