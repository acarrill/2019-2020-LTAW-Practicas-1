# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-05-21 16:05
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mi_tienda', '0005_auto_20190521_1510'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='album',
            name='path',
        ),
    ]
