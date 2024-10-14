from django.db import models

class DecorationType(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='decoration/')
    order = models.PositiveIntegerField(default=0)  

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['order']


class Component(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    order = models.PositiveIntegerField(default=0)  

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['order']


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    components = models.ManyToManyField(Component, through='ProductComponent')
    decoration_type = models.ForeignKey(DecorationType, on_delete=models.SET_NULL, null=True, blank=True)
    order = models.PositiveIntegerField(default=0)  

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['order']


class ProductComponent(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    component = models.ForeignKey(Component, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return f'{self.quantity}x {self.component.name} in {self.product.name}'


class Catalog(models.Model):
    name = models.CharField(max_length=100)
    products = models.ManyToManyField(Product)
    order = models.PositiveIntegerField(default=0)  

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['order']
