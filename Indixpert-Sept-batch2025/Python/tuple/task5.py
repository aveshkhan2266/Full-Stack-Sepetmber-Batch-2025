list = []
n = int(input("Enter element = "))
for i in range(0,n):
    num = int(input("Enter number = ")) 
    list.append(num)
t=tuple(list)

x = int(input("Enter Search Number = "))
print(t)
print(t.count(x))