from django.contrib import admin
from django.urls import path
from .import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index,name='index'),
    path('category/',views.category,name='category'),
    path('about/',views.about,name='about'),
    path('cart/',views.cart,name='cart'),
    path('order/',views.order,name='order'),
    path('bangles/',views.bangles,name='bangles'),
    path('earings/',views.earings,name='earings'),
    path('chains/',views.chains,name='chains'),
    path('rings/',views.rings,name='rings'),
    path('bracelets/',views.bracelets,name='bracelets'),
    path('cart/confirm/',views.confirmation,name='confirm'),

    path('cart/confirm/email/',views.email,name='confirmation_email'),




]