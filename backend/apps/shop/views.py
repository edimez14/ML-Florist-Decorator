from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import *
from .serializers import *


class DecorationTypeList(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = DecorationType.objects.all()
    serializer_class = DecorationTypeSerializer


class ComponentList(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = Component.objects.all()
    serializer_class = ComponentSerializer


class ProductList(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CatalogList(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = Catalog.objects.all()
    serializer_class = CatalogSerializer
