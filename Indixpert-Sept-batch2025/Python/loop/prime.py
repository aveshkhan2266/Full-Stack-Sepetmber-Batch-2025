num = int(input("Enter a Number ="))
c = 0

for i in range (1 ,num + 1):
    if(num % i == 0):
        c = c+1
if(c == 2):
    print("Yes Prime No")
else:
    print("Not Prime No")            