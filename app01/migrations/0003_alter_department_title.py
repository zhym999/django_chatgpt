# Generated by Django 4.1.7 on 2023-03-20 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app01', '0002_department'),
    ]

    operations = [
        migrations.AlterField(
            model_name='department',
            name='title',
            field=models.CharField(default='zhuyiming', max_length=16),
        ),
    ]
