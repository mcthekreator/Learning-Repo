from django.urls import path
from. import views

# URLConf
urlpatterns = [
    path('/admin', views.say_Hello)
]