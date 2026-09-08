def register_student(listdata):
    studentdict={}
    studentdict["id"]=int(input("please enter your id: "))
    studentdict["name"]=input("please enter your name: ")
    studentdict["address"]=input("please enter your address: ")

    qualificationslist=[]

    morequalification="yes"

    while morequalification.lower()=="yes":
        qualification={}
        qualification["qualification_name"]=input("enter qualification: ")
        qualification["passing_year"]=input("enter qualification year: ")
        qualificationslist.append(qualification)
        morequalification=input("add more qualification (yes/no): ")

    studentdict["qualification"]=qualificationslist
    listdata.append(studentdict)
    print("student registered successfully")
    return listdata
from studentdata import listdata
def search_student():
    delete = int(input("Enter student id to search: "))
    for item in listdata:
        if item["id"] == delete:
            print("Student Found:")
            for key, value in item.items():
                print(f"{key} = {value}")
            return
    print("Student Not Found")
    from studentdata  import listdata
    
def delete_student():
    delete = int(input("Enter student id to delete: "))
    for item in listdata:
        if item["id"] == delete:
            listdata.remove(item)
            print("Student Deleted Successfully ")
            return
    print("Student Not Found ")
    def manage_student():

    while True:
        print("Student Menu ")
        print("1. Register Student")
        print("2. Search Student")
        print("3. Delete Student")
        print("4. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            registerstudent.register_student()       
        elif choice == "2":
            searchstudent.search_student()          
        elif choice == "3":
            deletestudent.delete_student()          
        elif choice == "4":
            print("Program Exit")
            break
        else:
            print("Invalid Choice")


    