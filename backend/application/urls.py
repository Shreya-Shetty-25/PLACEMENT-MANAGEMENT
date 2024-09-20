from django.contrib import admin
from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static
from .views import ApplicationList
urlpatterns = [
    path('apply_company/<int:student_id>/<int:company_id>/',views.apply_company,name='apply_company'),
    path('getStudentIdByEmail/',views.get_student_id_by_email,name='get_student_id_by_email'),
    path('applied/', ApplicationList.as_view(), name="application-list"),
    path('download_cv/<int:application_id>/', views.download_cv, name="download"),
    path('update_status/<int:application_id>/', views.update_application_status, name='update_status'),
    
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)