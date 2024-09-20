from django.db import models
from company.models import Company  # Import Company model from the company app
from student.models import Student  # Import Student model from the student app

class Application(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='application')
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='application')
    applied_date = models.DateTimeField(auto_now_add=True)
    cv = models.FileField(upload_to='cvs/')  # Directory to store CVs
    status=models.CharField(default="Pending",max_length=50)

    def __str__(self):
        return f"{self.student.FirstName} applied to {self.company.companyName} on {self.applied_date}"
