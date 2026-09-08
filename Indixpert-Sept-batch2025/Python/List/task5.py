list = []

num = int(input("Enter number of elements = "))

for i in range(num):
    n = int(input("Enter element ="))
    list.append(n)

search = int(input("Enter search number ="))

for i in range(num):
    if list[i] == search:
        print("Element found at index =",i)
        break
    else:
        print("Element not found")