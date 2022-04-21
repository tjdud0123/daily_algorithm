def gradingStudents(grades):
    grades_table = [(grade - (grade % 5) + 5, grade) for grade in grades]
    ans = []
    for multiple, grade in grades_table:
        diff = multiple - grade
        if grade < 38 or diff >= 3:
            ans.append(grade)
        else:
            ans.append(multiple)
    return ans