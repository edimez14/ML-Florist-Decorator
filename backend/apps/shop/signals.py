from django.db.models.signals import post_delete
from django.dispatch import receiver
from .models import Product  # Importa el modelo relevante

@receiver(post_delete, sender=Product)
def reorder_products_after_deletion(sender, instance, **kwargs):
    """
    Esta función reajusta el campo de orden para los productos después de que uno sea eliminado.
    """
    products = Product.objects.all().order_by('order')  # Obtener todos los productos ordenados por el campo 'order'
    for i, product in enumerate(products, start=1):
        product.order = i  # Asigna un nuevo valor de orden secuencial
        product.save()
