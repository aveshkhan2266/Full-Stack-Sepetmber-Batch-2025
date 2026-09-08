listdata=[]

data1={}
data1["id"]=int(input("enter id: "))
name1=input("enter name: ")
email1=input("enter email: ")


data2={}
data2["id"]=int(input("enter id: "))
name2=input("enter name: ")
email2=input("enter email: ")


data1["name"]=name2
data1["email"]=email2
data2["name"]=name1
data2["email"]=email1

listdata.append(data1)
listdata.append(data2)
print(listdata)

