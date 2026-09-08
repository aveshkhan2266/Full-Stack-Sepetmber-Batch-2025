list=[]
num=int(input("Enter your number ="))
for i in range(num):
    n=int(input("Enter Element ="))
    list.append(n)

even_total=0
odd_total=0

for i in list:
    if i % 2 == 0:
        even_total = even_total+i
    elif i % 2 != 0:
        odd_total =odd_total+i

print("sum of Even number =",even_total)
print("sum of odd number =",odd_total)