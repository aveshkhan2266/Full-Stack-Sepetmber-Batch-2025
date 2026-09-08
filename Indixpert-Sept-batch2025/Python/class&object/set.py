def add(num1 , num2):
    z=num1+num2
    return z
def get(avesh,rfik):
    avesh=int(input("Enter Your Number = "))
    rfik=int(input("Enter Your Number = "))
    return avesh,rfik
def show(sum):
    print("your sum is = ",sum)
n1=0
n2=0
n1,n2=get(n1,n2)
print(n1,n2)
total=add(n1,n2)
show(total)
# class add:
#     def get(self):
#         self.x=int(input("enter a number  = "))
#         self.y=int(input("enter a number - "))
#     def addition(self):
#         z=self.x+self.y
#         return z 
#     def show(self,z):
#         print("your result is ",z)
# ob=add()

# ob.get()
# print(ob.x)
# print(ob.y)
# ob.show(ob.addition())
