from django.db import models


class UserInfo(models.Model):
    name = models.CharField(max_length=32)
    password = models.CharField(max_length=64)
    age = models.IntegerField()


class Department(models.Model):
    title = models.CharField(max_length=16,default='zhuyiming')
    date = models.IntegerField(null=True, blank=True)



Department.objects.create(title="xiaosbu")