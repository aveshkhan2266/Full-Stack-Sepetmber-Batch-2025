list=[]
for i in range(0,2):
    a = int(input("Enter Roll Number = "))
    b = str(input("Enter Name = "))
    c = input("Enter Class = ")
    d = str(input("Enter Section = "))
    student = (a,b,c,d)
    list.append(student)
t=tuple(list)    

print(t)