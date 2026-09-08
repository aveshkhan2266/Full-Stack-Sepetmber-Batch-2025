n = int(input("Enter number of element = "))
list=[]

for i in range(0,n):
    num = input("Enter Fruit name = ")
    list.append(num)
t=tuple(list)
print(t)