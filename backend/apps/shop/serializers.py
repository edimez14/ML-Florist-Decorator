from rest_framework import serializers
from .models import *


class DecorationTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DecorationType
        fields = "__all__"


class ComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Component
        fields = "__all__"


class ProductComponentSerializer(serializers.ModelSerializer):
    component = ComponentSerializer()

    class Meta:
        model = ProductComponent
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    components = ProductComponentSerializer(
        many=True, source='productcomponent_set', read_only=True)
    decoration_type = DecorationTypeSerializer(read_only=True)

    class Meta:
        model = Product
        fields = "__all__"


class CatalogSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)

    class Meta:
        model = Catalog
        fields = '__all__'
