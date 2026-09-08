import json 
import os

users=[]
# --------------------------------------------
# data read from file 
if os.path.exists("users.json"):
    with open("users.json","r")as file:
        users=json.load(file)
# --------------------------------------------

while True:

    print("------- Aavesh file handling system -------")
    print("1. Add user")
    print("2. Show users")
    print("3. exit")
    print("--------------------------------------------")

    choice=int(input("Enter your choice : "))

    if(choice==1):  
        myuser={}

        myuser["username"]=input("Enter your username : ")
        myuser["password"]=input("Enter your password : ")

        users.append(myuser)

        # --------------------------------------------
        with open("users.json","w")as file:
            json.dump(users,file,indent=4)
        # --------------------------------------------
    elif(choice==2):
        for user in users:
            print("**********************")
            for key,value in user.items():
                print(key,":",value)

    elif(choice==3):
        print("---- Thank you for visiting ----")
        exit()
    else:
        print("Enter valid choice!")
    
