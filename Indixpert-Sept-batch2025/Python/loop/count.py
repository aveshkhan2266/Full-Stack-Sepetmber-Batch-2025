num = int(input("Enter a Value ="))

count = 0

if num == 0:
    count = 1

if num < 0:
    num = -num

while num > 0:
    count += 1
    num = num // 10

print("Number Of digits =",count)           