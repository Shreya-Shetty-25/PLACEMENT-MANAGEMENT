from django.urls import path
from .views import CompanyView

urlpatterns = [
    path("companies/", CompanyView.as_view()),
    path("companies/<int:pk>/",CompanyView.as_view())
]