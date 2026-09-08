import json
import os

users=[]

if os.path.exists("users.join"):
    with open("user.join","r")as file:
        users=json.load(file)

while True:
    print("---------------Avesh File Handling System--------------------")
    print("1. Add User")
    print("2. Show User")
    print("3. Exit")
    print("----------------------------------------------------------------")

    choice = int(input("Enter Your Choice = "))

    if(choice==1):
        myuser={}
        myuser["username"]=input("Enter Your Username = ")
        myuser["password"]=input("Enter Your Password = ")

        users.append(myuser)

        with open("user.join","w")as file:
            json.dump(users,file,indent=4)

    elif(choice == 2):
        for user in users:
            print("**************************************")
            for key,value in user.items():
                print(key,":",value)

    elif(choice==3):
        print("------------------------Thank Your For Visiting----------------------------")
        exit()

    else:
        print("Enter Valid Choice!")
