num = int(input("Enter Your Number ="))

sq = num*num

sum = 0 

while(sq > 0):

    r = sq % 10

    sum = sum + r

    sq = sq // 10
if sum == num:
        print("neon number ",num)
else:
      print("Not neon number =",num)
