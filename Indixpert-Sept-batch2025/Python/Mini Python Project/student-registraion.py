import json
import os
path = r"D:\python\python project\dataregister.json"
def file():
    if os.path.exists(path):
        with open(path,'r') as r:
            data=r.read()
        data=json.loads(data)
        return data
    else:
        data=[]
        with open(path, 'w') as file:   
            file.write(json.dumps(data, indent=4))
        return data
    
data=file()

def register():
    user = {}
    user["id"] = int(input("Enter ID: "))
    user["name"] = input("Enter Name: ")
    user["address"] = input("Enter Your Address: ")
    user["contact"] = int(input("Enter Contact Number: "))

    data.append(user)

    print("\nRegistration Succeccful ")

    with open(path,'w') as file:
        file.write(json.dumps(data,indent=4))
     


def menu():
    while True:
        print("\n Menu ")
        print("1. Register")
        print("2. Exit ")

        option = input("Choose option (1/2): ")

        if option == "1":
            register()
        elif option == "2":
            print("Program End. ")
            break
        else:
            print("Invalid Option. ") 

menu()               
