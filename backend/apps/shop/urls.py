from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DecorationTypeList, ComponentList, ProductList, CatalogList

router = DefaultRouter()
router.register(r'decoration_types', DecorationTypeList)
router.register(r'components', ComponentList)
router.register(r'products', ProductList)
router.register(r'catalogs', CatalogList)

urlpatterns = [
    path('api/shop/', include(router.urls)),
]