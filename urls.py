"""
URL configuration for secretary project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# secretary/urls.py
from django.contrib import admin
from django.urls import path
from post import views

urlpatterns = [
    path('student_dashboard/cognitive_psychology_student/', views.cognitive_psychology_student, name='student_dashboard_cognitive_psychology_student'),
    path('', views.index, name='home'),
    path('admin/', admin.site.urls),
    path('post_list/', views.post_list, name='post_list'),
    path('student_dashboard/', views.student_dashboard, name='student_dashboard'),
    path('cognitive_psychology/', views.cognitive_psychology, name='cognitive_psychology'),
    path('forgot_password/', views.forgot_password, name='forgot_password'),
    path('art_history/', views.art_history, name='art_history'),
    path('psychology/', views.psychology, name='psychology'),
    path('instructor/', views.instructor, name='instructor'),
    path('index/', views.index, name='index'),
    path('faculty_secretary/', views.faculty_secretary, name='faculty_secretary'),
    path('final_exam/', views.final_exam, name='final_exam'),
    path('profile/', views.profile, name='profile'),
    path('exams_grades/', views.exams_grades, name='exams_grades'),
    #path('instructor/exams_grades',views.exams_grades, name='instructor_exams_grades'),
    path('final_exam_dz/', views.final_exam_dz, name='final_exam_dz'),
    path('help/', views.help, name='help'),
    path('loginindex/', views.loginindex, name='loginindex'),
    path('logout/', views.logout_, name='logout_'),
    path('microeconomics/', views.microeconomics, name='microeconomics'),
    path('profile_ınstructor/', views.profile_ınstructor, name='profile_ınstructor'),
    path('profile_secretary/', views.profile_secretary, name='profile_secretary'), 
    path('student_dashboard/art_history/', views.art_history, name='student_dashboard_art_history'),
    path('student_dashboard/exams_grades/', views.exams_grades, name='student_dashboard_exams_grades'),
    path('student_dashboard/azerbaijani_politics/', views.azerbaijani_politics, name='student_dashboard_azerbaijani_politics'),
    path('student_dashboard/microeconomics/', views.microeconomics, name='student_dashboard_microeconomics'),
    path('student_dashboard/cognitive_psychology/', views.cognitive_psychology, name='student_dashboard_cognitive_psychology'),
    path('instructor/psychology/', views.psychology, name='instructor_psychology'),
    path('instructor/cognitive_psychology/', views.cognitive_psychology, name='instructor_cognitive_psychology'),
    path('instructor/profile_ınstructor/',views.profile_ınstructor,name='instructor_profile_ınstructor'),
    path('faculty_secretary/profile_secretary/', views.faculty_secretary,name='faculty_secretary_profile_secretary'),
    path('faculty_secretary/psychology/', views.faculty_secretary, name='faculty_secretary_psychology'),
    path('faculty_secretary/cognitive_psychology/', views.faculty_secretary, name='faculty_secretary_cognitive_psychology'),
   # path('faculty_secretary/courses/', views.faculty_secretary_courses, name='faculty_secretary_courses'),
    path('faculty_secretary_courses/',views.faculty_secretary_courses,name='faculty_secretary_courses'),
    path('faculty_secretary_exams/', views.faculty_secretary_exams, name='faculty_secretary_exams'),
    path('instructor_exams/',views.instructor_exams,name='instructor_exams')

    
]
