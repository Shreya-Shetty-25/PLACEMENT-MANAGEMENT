# Generated by Django 5.1 on 2024-09-14 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('studentId', models.AutoField(primary_key=True, serialize=False)),
                ('enrollment', models.BigIntegerField()),
                ('FirstName', models.CharField(max_length=100)),
                ('LastName', models.CharField(max_length=100)),
                ('Email', models.CharField(max_length=100)),
                ('branch', models.CharField(max_length=100)),
                ('avg_spi', models.FloatField()),
            ],
        ),
    ]
