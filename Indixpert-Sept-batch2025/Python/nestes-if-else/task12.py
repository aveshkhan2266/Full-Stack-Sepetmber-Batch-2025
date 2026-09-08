a = int(input("Enter First Side = "))
b = int(input("Enter First Second = "))
c = int(input("Enter First Third = "))

if a == b and b == c:
    print("Equilateral Triangle")
elif a == b or b == c or c == a:
    print("Isosceles Triangle")
else:
    print("Scalene triangle")     
