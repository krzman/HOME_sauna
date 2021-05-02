from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, redirect
from django.views import View
from saunaapp.models import *

# Create your views here.

class Main(View):
    def get(self, request):
        return render(request, 'main.html')

    def post(self, request):
        temp = request.POST['param-temp']
        # DO NASTĘPNEJ WERSJI
        # timeSauna = request.POST['param-t-sauna']
        # timeShower = request.POST['param-t-shower']
        # sesion = request.POST['param-ses']
        ctx = {
            'temp': temp,
            # 'timeSauna': timeSauna,
            # 'timeShower': timeShower,
            # 'sesion': sesion
        }
        return redirect('program', **ctx)


class GetTemp(View):
    def get(self, request):
        temp = Temp.objects.last().temp
        return JsonResponse(temp, safe=False)


class Program(View):
    def get(self, request, temp):
        ctx = {
            'temp': temp,
        }
        return render(request, 'app.html', ctx)


# from gpiozero import LED
#
# led1 = LED(27)
#
# def rasp(request):
#     led1.on()
#     return HttpResponse('')