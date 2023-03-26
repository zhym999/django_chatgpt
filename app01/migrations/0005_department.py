# Generated by Django 4.1.7 on 2023-03-20 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app01', '0004_delete_department'),
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='zhuyiming', max_length=16)),
                ('date', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
