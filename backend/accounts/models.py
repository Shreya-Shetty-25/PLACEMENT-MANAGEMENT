from django.db import models
from django.core.exceptions import ValidationError
# Create your models here.

def validate_file_extension(value):
    valid_extensions = ['.pdf', '.docx']
    ext = value.name.split('.')[-1].lower()
    if ext not in valid_extensions:
        raise ValidationError(f'Unsupported file extension: {ext}. Allowed extensions are {valid_extensions}.')
def validate_file_size(file):
    max_size_kb = 1024*1024  
    if file.size > max_size_kb:
        raise ValidationError(f'File too large. Size should not exceed {max_size_kb} KB.')

class Student_Details(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    enroll = models.BigIntegerField()
    ssc_score = models.FloatField()
    hsc_score = models.FloatField()
    average_spi = models.FloatField()
    resume = models.FileField(upload_to='resumes/', validators=[validate_file_extension, validate_file_size])

    def str(self):
        return f'{self.first_name} {self.last_name} - {self.enroll}'