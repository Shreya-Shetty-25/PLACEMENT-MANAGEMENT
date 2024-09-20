from django.shortcuts import render
from django.http import HttpResponse
from .models import Application
from company.models import Company
from student.models import Student
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ApplicationSerializer
from rest_framework.views import APIView
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.http import FileResponse
from django.views.decorators.http import require_http_methods

class ApplicationList(APIView):

    def get(self, request):
        applications = Application.objects.all()
        serializer = ApplicationSerializer(applications, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@csrf_exempt
def apply_company(request, student_id, company_id):
    if request.method == 'POST':
        try:
            # Fetch the student and company objects using URL parameters
            print(student_id)
            print(company_id)
            student = Student.objects.get(studentId=student_id)
            company = Company.objects.get(companyId=company_id)
            print("hello")
            print(request.FILES.values)
            if 'cv' in request.FILES:
                cv_file = request.FILES['cv']
            print(cv_file)
            # Create a new application
            application = Application(student=student, company=company,cv=cv_file)
            application.save()

            return JsonResponse({'message': 'Application successful!'}, status=200)

        except Student.DoesNotExist:
            return JsonResponse({'error': 'Student does not exist.'}, status=404)

        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company does not exist.'}, status=404)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    # Return an error if the request method is not POST
    return JsonResponse({'error': 'Invalid request method. POST required.'}, status=400)
@api_view(['POST'])
def get_student_id_by_email(request):
    email = request.data.get('email')
    print(email)
    student=None
    try:
        s=Student.objects.all()
        for i in s:
            print(email,i.Email)
            if i.Email==email:
                student=i
        # student = Student.objects.get(Email=email)
        
        return Response({'studentId': student.studentId})
    except Student.DoesNotExist:
        return Response({'error': 'Student not found'}, status=404)
    
def download_cv(request, application_id):
    application = get_object_or_404(Application, id=application_id)
    file_path = application.cv.path  # Adjust according to your model   
    print(file_path)
    response = FileResponse(open(file_path, 'rb'), content_type='application/pdf')  # Change content type if needed
    response['Content-Disposition'] = f'attachment; filename="{application.cv.name}"'
    return response

@api_view(['PATCH'])
def update_application_status(request, application_id):
    try:
        application = Application.objects.get(pk=application_id)
        print(application)
    except Application.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    new_status = request.data.get('status', None)
    if new_status:
        application.status = new_status
        application.save()
        return Response({"message": "Application status updated successfully"}, status=status.HTTP_200_OK)
    return Response({"error": "Invalid status"}, status=status.HTTP_400_BAD_REQUEST)