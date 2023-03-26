from django.shortcuts import render, HttpResponse ,redirect
import requests

API_KEY = "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"
PROMPT1 = " "
PROMPT2 = " "
PROMPT3 = " "
PROMPT1 = " "


# Create your views here.

def index(request):
    return HttpResponse('huanying')


def user_list(request):
    name = "zhuyim"
    role = ['a','b','c']

    return render(request,'user_list.html',{"n1":name,"n2":role})


def add(request):
    return HttpResponse('adddd')


def news(request):
    r = requests.get()
    res = requests.get("http://www.chinaunicom.com/img/weixinerweim.jpg")
    print(res)
    return render(request,'news.html')


from app01.models import Department


def orm(request):

    Department.objects.create(title='xiao')
    Department.objects.create(title='IT')
    Department.objects.create(title='yunying')
    Department.objects.all().delete()

    return HttpResponse('ok')


def gpt(request):
    import os
    import openai

    openai.api_key = os.getenv(API_KEY)

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt="Correct this to standard English:\n\nShe no went to the market.",
        temperature=0,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )