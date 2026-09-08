import filehandling

def view_student():
    data = filehandling.read_file()

    if not data:
        print("No Students Found")
        return
    
    print("\n All Student List")
    for item in data:
        print(f"\nID : {item['id']}")
        print(f"\nName : {item['name']}")
        print(f"\nAddress : {item['address']}")
        print(f"\nQualification : {item['qualification']}")