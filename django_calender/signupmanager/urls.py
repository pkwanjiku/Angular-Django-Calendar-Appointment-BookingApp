from django.urls import include, path
from rest_framework import routers
from . import views

app_name = 'signupmanager'

urlpatterns = [
    path('', views.index)
]
