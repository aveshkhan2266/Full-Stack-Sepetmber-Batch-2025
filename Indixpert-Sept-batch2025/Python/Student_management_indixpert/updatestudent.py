import filehandling

def update_student():
    data = filehandling.read_file()
    choice_id = int(input("Enter ID to Update: "))

    for item in data:
        if item["id"] == choice_id:
            print("\nRecord Found")
            print(f"ID : {item['id']}")
            print(f"Name : {item['name']}")
            print(f"Address : {item['address']}")
            print(f"Qualification : {item['qualification']}")

            print("\nWhich field do you want to edit?")
            print("1. ID")
            print("2. Name")
            print("3. Address")
            print("4. Qualification")
            print("5. Update All")

            choice = int(input("Enter your choice: "))

            if choice == 1:
                item["id"] = int(input("Enter New ID: "))

            elif choice == 2:
                item["name"] = input("Enter New Name: ")

            elif choice == 3:
                item["address"] = input("Enter New Address: ")

            elif choice == 4:
                item["qualification"] = input("Enter New Qualification: ")

            elif choice == 5:
                item["id"] = int(input("Enter New ID: "))
                item["name"] = input("Enter New Name: ")
                item["address"] = input("Enter New Address: ")
                item["qualification"] = input("Enter New Qualification: ")

            else:
                print("Invalid Choice")
                return

            filehandling.write_file(data)
            print("\nStudent Updated Successfully")
            return

    
