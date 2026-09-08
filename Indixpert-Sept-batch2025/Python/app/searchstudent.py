import filehandling

def search_student():
    data = filehandling.read_file()
    delete = int(input("Enter student id to search : "))

    for item in data:
        if item["id"] == delete:
            print("Student Found:")
            for key, value in item.items():
                print(f"{key} = {value}")
            return item
        
    print("Student Not Found")