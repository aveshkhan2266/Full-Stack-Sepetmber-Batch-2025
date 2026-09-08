from ..domain.handling import Handelfile
from ..model.path import Pathmodel
from ..validation.validation_control import validation_check

class User_signup:
    def signup():
        users = Handelfile.load_json(Pathmodel.USERS_FILE, [])

        print("---- SIGN UP ----")

        while True:
            name = input("Name: ")
            if validation_check.validate_name(name):
                break
            print("Invalid Name")

        while True:
            email = input("Email: ")
            if validation_check.validate_email(email):
                break
            print("Invalid Email")

        while True:
            password = validation_check.input_password("Password: ")
            if validation_check.validate_password(password):
                break
            print("Password min 4 characters")

        while True:
            company = input("Previous Company Name: ")
            if validation_check.validate_company(company):
                break
            print("Company name cannot be empty")

        while True:
            exp = input("Experience (years): ")
            if validation_check.validate_experience_years(exp):
                break
            print("Experience must be a valid number")

        users.append({
            "name": name,
            "email": email,
            "password": password,
            "company": company,
            "experience_years": int(exp),
            "role": "staff"
        })

        Handelfile.save_json(Pathmodel.USERS_FILE, users)
