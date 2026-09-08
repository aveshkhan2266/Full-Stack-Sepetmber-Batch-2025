import filehandling

def delete_student():
    data = filehandling.read_file()
    delete = int(input("Enter student id to delete : "))

    for item in data:
        if item["id"] == delete:
            data.remove(item)
            filehandling.write_file(data)
            print("Student Deleted Successfully ")
            return
        
    print("Student Not Found ")