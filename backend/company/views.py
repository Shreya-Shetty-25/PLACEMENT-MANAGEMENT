from django.shortcuts import render
from .serializers import CompanySerializer
from django.http.response import JsonResponse
from .models import Company
from django.http.response import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

def home(request):
    pass
class CompanyView(APIView):

    def get_company(self, pk):
        try:
            company = Company.objects.get(companyId=pk)
            return company
        except:
            return JsonResponse("Company Does Not Exist", safe=False)

    def get(self, request, pk=None):
        if pk:
            data = self.get_company(pk)
            serializer = CompanySerializer(data)
        else:
            data = Company.objects.all()
            serializer = CompanySerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = CompanySerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Company Created Successfully", safe=False)
        return JsonResponse("Failed to Add Company", safe=False)

    def put(self, request, pk=None):
        company_to_update = Company.objects.get(companyId=pk)
        serializer = CompanySerializer(instance=company_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Company Updated Successfully", safe=False)
        return JsonResponse("Failed to Update Company")

    def delete(self, request, pk=None):
        company_to_delete = Company.objects.get(companyId=pk)
        company_to_delete.delete()
        return JsonResponse("Company Deleted Successfully", safe=False)





