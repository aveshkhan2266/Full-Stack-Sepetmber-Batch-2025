list=[]
n=int(input("Enter Your Number ="))
for i in range(n):
    num=int(input("Enter element ="))
    list.append(num)
   
total=0

for i in list:
    if i % 2 == 0:
        total = total+i
print(list)
print("Even number",total)         