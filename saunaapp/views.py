from django.shortcuts import render
from saunaapp.scripts.read_temp import getTemperature


# Create your views here.

def show_temp(request):
    temp = getTemperature()


    return render(request, 'main.html', {'temp': temp})
