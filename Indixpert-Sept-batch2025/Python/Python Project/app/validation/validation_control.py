import re
import msvcrt
class validation_check:
    def validate_name(name):
        return bool(re.fullmatch(r"[A-Za-z ]+", name))

    def validate_email(email):
        return bool(re.fullmatch(r"[^@]+@[^@]+\.[^@]+", email))

    def validate_password(password):
        return len(password) >= 4

    def validate_company(company):
        return bool(company.strip())

    def validate_experience_years(years):
        return years.isdigit()
    
    def input_password(prompt="Password: "):
        print(prompt, end="", flush=True)
        password = ""
        while True:
            ch = msvcrt.getch()
            if ch == b"\r":
                print()
                break
            elif ch == b"\x08":
                if password:
                    password = password[:-1]
                    print("\b \b", end="", flush=True)
            else:
                password += ch.decode("utf-8")
                print("*", end="", flush=True)
        return password
