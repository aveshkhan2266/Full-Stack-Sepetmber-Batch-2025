from app.Auth.Manage import show_menu
from app.Auth.SignUp import signup
from app.Auth.SignIn import signin
from app.domain.Menu.menu import menu

while True:
    show_menu()
    choice = input("Choose: ")

    if choice == "1":
        signup()
    elif choice == "2":
        if signin():
            menu()
    elif choice == "3":
        print("Bye")
        break
    else:
        print("Invalid choice")
