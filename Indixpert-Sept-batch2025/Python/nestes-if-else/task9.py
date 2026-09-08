a = int(input("Enter Physics Marks ="))
b = int(input("Enter Chemistry Marks ="))
c = int(input("Enter Biology Marks ="))
d = int(input("Enter Mathematics Marks ="))
e = int(input("Enter Computer Marks ="))

sum = a+b+c+d+e

percentage = (sum / 500) * 100

if (percentage >= 90):
    print("Grade A",90)
elif (percentage >= 80):
    print("Grade B",80)
elif (percentage >= 70):
    print("Grade C",70) 
elif (percentage >= 60):
    print("Grade D",60)
elif (percentage >= 40):
    print("Grade E",40)           
else:
    print("Fail")

