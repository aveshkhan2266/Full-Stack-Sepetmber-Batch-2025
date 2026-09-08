unit = int(input("Enter Your Value ="))

if (unit >= 50):
    res=unit*0.50
   
elif (unit >= 100):
    res=unit*0.75
   
elif (unit >= 200):
    res=unit*1.20
   
else:   
    res=unit*1.50
sc=res*0.2

print(sc+res)

