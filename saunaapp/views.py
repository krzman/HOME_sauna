from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
from saunaapp.models import *


# Create your views here.

class Main(View):
    def get(self, request):
        temp = 'Czekam na odczyt'
        return render(request, 'main.html', {'temp': temp})

class GetTemp(View):
    def get(self,request):
        temp = Temp.objects.last().temp
        return JsonResponse(temp, safe=False)