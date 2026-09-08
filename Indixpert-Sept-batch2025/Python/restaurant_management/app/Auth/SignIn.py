import json

filename=rf"D:\Python\restaurant_management\app\Database\users.json"


def signin():
    username = input("Enter username: ")
    password = input("Enter password: ")

    with open(filename, "r") as f:
        users = json.load(f)

    for user in users:
        if user["username"] == username and user["password"] == password:
            print("Login successful!")
            return True

    print("Wrong username or password")
    return False


