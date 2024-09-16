from django.db import models

# Create your models here.


class Company(models.Model):
    companyId = models.AutoField(primary_key=True)
    
    companyName = models.CharField(max_length=100)
    decription = models.TextField()
    salary=models.BigIntegerField()
    jobrole = models.CharField(max_length=250)
    location=models.CharField(max_length=250)
    criteria = models.CharField(max_length=250)
    lastdate=models.DateField()

    def __str__(self):
        return self.companyName