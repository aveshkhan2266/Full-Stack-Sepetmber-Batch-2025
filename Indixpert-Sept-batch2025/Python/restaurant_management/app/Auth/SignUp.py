import json

filename = r"D:\Python\restaurant_management\app\Database\users.json"

def signup():
    username = input("Enter username: ")
    password = input("Enter password: ")

    try:
        with open(filename, "r") as f:
            users = json.load(f)
    except:
        users = []  

    users.append({
        "username": username,
        "password": password
    })

    with open(filename, "w") as f:
        json.dump(users, f, indent=4)

    print("Signup successful!")
