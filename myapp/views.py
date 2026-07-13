from django.core.mail import send_mail
from django.http import HttpResponse
from django.shortcuts import render
from .forms import ShoppingForm
from django.shortcuts import redirect
from django.contrib import messages
from django.core.mail import send_mail




def index(request):
    return render(request,'index.html')

def category(request):
    return render(request,'category.html')

def cart(request):
    return render(request,'cart.html')

def order(request):
    return render(request, 'order.html')

def about(request):
    return render(request,'about.html')

def earings(request):
    return render(request,'earings.html')

def bangles(request):
    return render(request,'bangles.html')

def chains(request):
    return render(request,'chains.html')

def rings(request):
    return render(request,'rings.html')

def bracelets(request):
    return render(request,'bracelets.html')

def confirmation(request):
    form = ShoppingForm()

    if request.method == "POST":
        form = ShoppingForm(request.POST)

        if form.is_valid():
            form.save()

            email = form.cleaned_data['email']

            send_mail(
                "Trendy Golds Jewellery",
                "Thank you for purchasing!",
                "nikildanniki@gmail.com",
                [email],
                fail_silently=False,
            )

            return render(request, "success.html")

    return render(request, "forms.html", {"form": form})

def email(request):
    subject="Shopping Form"
    msg="thank you for purchasing"
    sender="nikildanniki@gmail.com"
    receiver=[""]
    send_mail(subject,msg,sender,receiver)
    return HttpResponse("email sent successfully")



