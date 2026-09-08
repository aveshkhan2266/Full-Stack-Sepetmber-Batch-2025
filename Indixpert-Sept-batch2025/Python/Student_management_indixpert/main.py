import registerstudent
import searchstudent
import deletestudent
import updatestudent
import viewstudent

while True:
        print(" Student Menu ")
        print("1. Register Student")
        print("2. Search Student")
        print("3. Delete Student")
        print("4. Update Student")
        print("5. View All Students")
        print("6. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            registerstudent.register_student()       
        elif choice == "2":
            searchstudent.search_student()          
        elif choice == "3":
            deletestudent.delete_student()          
        elif choice == "4":   
            updatestudent.update_student()
        elif choice == "5":
            viewstudent.view_student()
        elif choice == "6":
            break
        else:
            print("Invalid Choice")
