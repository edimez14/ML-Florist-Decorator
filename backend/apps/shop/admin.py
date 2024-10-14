from django.contrib import admin
from .models import *


class DecorationTypeAdmin(admin.ModelAdmin):
    list_display = ("id", "name",)
    list_display_links = ("name",)
    list_per_page = 25


admin.site.register(DecorationType, DecorationTypeAdmin)


class ComponentAdmin(admin.ModelAdmin):
    list_display = ("id", "name",)
    list_display_links = ("name",)
    list_per_page = 25


admin.site.register(Component, ComponentAdmin)


class ProductAdmin(admin.ModelAdmin):
    list_display = ("id", "name",)
    list_display_links = ("name",)
    list_per_page = 25


admin.site.register(Product, ProductAdmin)


class ProductComponentAdmin(admin.ModelAdmin):
    list_display = ("id", "product",)
    list_display_links = ("product",)
    list_per_page = 25


admin.site.register(ProductComponent, ProductComponentAdmin)


class CatalogAdmin(admin.ModelAdmin):
    list_display = ("id", "name",)
    list_display_links = ("name",)
    list_per_page = 25


admin.site.register(Catalog, CatalogAdmin)