import json
import os

FILE_NAME = "student.json"


class StudentModel:
    def __init__(self, name="", address=""):
        self.name = name
        self.address = address


class Student:

    def registration(self):
        name = input("Enter your name: ").strip()
        address = input("Enter your address: ").strip()

        if name == "":
            print("Name cannot be empty")
            return

        if address == "":
            print("Address cannot be empty")
            return

        stud = StudentModel(name, address)

        with open(FILE_NAME, "w") as f:
            json.dump(stud.__dict__, f, indent=4)

        print("Registration successful")

    def view_student_data(self, data):
        print("\nStudent Data:")
        print("Name    :", data.name)
        print("Address :", data.address)

    def update(self, data):
        print("\nCurrent Data:")
        self.view_student_data(data)

        choice = input("\nDo you want to update this data? (yes/no): ").strip().lower()

        if choice != "yes":
            print("Update cancelled")
            return

        name = input("Enter new name: ").strip()
        address = input("Enter new address: ").strip()

        if name == "":
            print("Name cannot be empty")
            return

        if address == "":
            print("Address cannot be empty")
            return

        data.name = name
        data.address = address

        with open(FILE_NAME, "w") as f:
            json.dump(data.__dict__, f, indent=4)

        print("Data updated successfully")

    def delete(self):
        if not os.path.exists(FILE_NAME):
            print("No data found")
            return

        data = self.load_data()
        if not data:
            print("No data found")
            return

        print("\nCurrent Data:")
        self.view_student_data(data)

        choice = input("\nAre you sure you want to delete this data? (yes/no): ").strip().lower()

        if choice != "yes":
            print("Delete cancelled")
            return

        with open(FILE_NAME, "w") as f:
            json.dump({}, f)

        print("Data deleted successfully")

    def load_data(self):
        if not os.path.exists(FILE_NAME):
            return None

        try:
            with open(FILE_NAME, "r") as f:
                data = json.load(f)
        except json.JSONDecodeError:
            return None

        if not data:
            return None

        return StudentModel(data.get("name", ""), data.get("address", ""))


ob = Student()

while True:
    print("\n1. Register")
    print("2. View")
    print("3. Update")
    print("4. Delete")
    print("5. Exit")

    choice = input("Enter your choice: ").strip()

    if choice == "1":
        ob.registration()

    elif choice == "2":
        data = ob.load_data()
        if data:
            ob.view_student_data(data)
        else:
            print("No data found")

    elif choice == "3":
        data = ob.load_data()
        if data:
            ob.update(data)
        else:
            print("No data found")

    elif choice == "4":
        ob.delete()

    elif choice == "5":
        print("Program exited")
        break

    else:
        print("Invalid choice")