students=[]

id1=int(input("Enter Your id: "))
name1=input("Enter Your name: ")
qualification1=input("Enter Your qualification: ")
passing1=input("Enter Your passing: ")

student1={
    "id":id1,
    "name":name1,
    "qualification":qualification1,
    "passing":passing1
}

students.append(student1)


id2=int(input("Enter Your id: "))
name2=input("Enter Your name: ")
qualification2=input("Enter Your qualification: ")
passing2=input("Enter Your passing: ")

student2={
    "id":id2,
    "name":name2,
    "qualification":qualification2,
    "passing":passing2
}

students.append(student2)

print("students list (studednts):")
print(students)
