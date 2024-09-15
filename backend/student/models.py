from django.db import models

# Create your models here.


class Student(models.Model):
    studentId = models.AutoField(primary_key=True)
    enrollment=models.BigIntegerField()
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    # RegistrationNo = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    branch = models.CharField(max_length=100)
    avg_spi=models.FloatField()

    def __str__(self):
        return self.FirstName +' '+self.LastName