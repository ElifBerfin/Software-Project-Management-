from django.shortcuts import render


def instructor_exams(request):
    return render(request,'post/instructor_exams.html')

def cognitive_psychology_student(request):
    return render(request,'post/cognitive_psychology_student.html')

def faculty_secretary_exams(request):
    return render(request, 'post/faculty_secretary_exams.html')

def faculty_secretary_courses(request):
    return render(request, 'post/faculty_secretary_courses.html')

def student_dashboard(request):
    return render(request, 'post/student_dashboard.html')

def cognitive_psychology(request):
    return render(request, 'post/cognitive_psychology.html')

def art_history(request):
    return render(request,'post/art_history.html')

def azerbaijani_politics(request):
    return render(request,'post/azerbaijani_politics.html')

def faculty_secretary(request):
    return render(request,'post/faculty_secretary.html')

def profile_secretary(request):
    return render(request,'post/profile_secretary.html')

def instructor_dashboard(request):
    return render(request,'post/profile_ınstructor.html')

def instructor(request):   #onceki adı instructor
    return render(request,'post/instructor.html')

def exams_grades(request):
    return render(request,'post/exams_grades.html')

def final_exam(request):
    return render(request, 'post/final_exam.html')

def final_exam_dz(request):
    return render(request, 'post/final_exam_dz.html')

def forgot_password(request):
    return render(request, 'post/forgot_password.html')

def help(request):
    return render(request,'post/help.html')

def index(request):
    return render(request, 'post/index.html')

def loginindex(request):
    return render(request, 'post/loginindex.html')

def logout_(request):
    return render(request, 'post/logout_.html')

def microeconomics(request):
    return render(request, 'post/microeconomics.html')

def post_list(request):
    return render(request,'post/post_list.html')

def profile_ınstructor(request):
    return render(request,'post/profile_ınstructor.html')

def profile(request):
    return render(request,'post/profile.html')

def psychology(request):
    return render(request,'post/psychology.html')

def profile_secretary(request):
    return render(request,'post/profile_secretary.html')

def instructor_profile_ınstructor(request):
    return render(request, 'post/profile_ınstructor.html')  # Instructor profili sayfası

def faculty_secretary_profile_secretary(request):
    return render(request, 'post/profile_secretary.html')  # Sekreter profili sayfası


