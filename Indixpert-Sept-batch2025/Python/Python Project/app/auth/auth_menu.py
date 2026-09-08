from app.auth.signup import User_signup
from app.auth.login import User_login

class auth_menu:

    @staticmethod
    def auth_menu():
        print("\n==============================")
        print("   WELCOME TO RESTAURANT  ")
        print("==============================")

        while True:
            print("\n1. Signup")
            print("2. Login")
            print("3. Exit")

            choice = input("Enter choice: ")

            if choice == "1":
                User_signup.signup()

            elif choice == "2":
                User_login.login()
            
            elif choice == "3":
                print("Thank you")
                break

            else:
                print("Invalid choice")
                


