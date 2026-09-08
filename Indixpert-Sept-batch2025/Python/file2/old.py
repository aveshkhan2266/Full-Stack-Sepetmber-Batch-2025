import json 

users=[]
# --------------------------------------------
# data read from file 
with open("users.json","r")as file:
    users=json.load(file)
# --------------------------------------------

myuser={}

username=input("Enter your username : ")
password=input("Enter your password : ")

myuser={"username":username,"password":password}

users.append(myuser)

# --------------------------------------------
with open("users.json","w")as file:
    json.dump(users,file,indent=4)
# --------------------------------------------

