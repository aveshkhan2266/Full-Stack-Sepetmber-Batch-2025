from app.domain.handling import Handelfile
from app.model.path import Pathmodel
from app.validation.validation_control import validation_check
from app.domain.admin_menu import Admin
from app.domain.staff_menu import Staff



class User_login:
    def login():
        users = Handelfile.load_json(Pathmodel.USERS_FILE, [])

        print("\n---- LOGIN ----")

        email = input("Email: ")
        password = validation_check.input_password("Password: ")

        for u in users:
            if u["email"] == email and u["password"] == password:
                print("Login Successful")

                if u["role"]=="admin":
                    Admin.admin_menu()
                else:
                    Staff.staff_menu()
              
                    

                
    
        print("Invalid Login")
    
