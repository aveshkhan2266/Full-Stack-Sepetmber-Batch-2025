ID=int(input("Enter ID: "))
NAME=input("Enter Name: ")
EMAIL=input("Enter Email: ")
QUALIFICATION1=input("Enter Qulification: ")
QUALIFICATION2=input("Enter Qulification: ")
ADDRESS=input("Enter Address: ")
AGE=int(input("Enter age "))                       
GENDER=input("Enter Gender (Male/Female) ")

data = {
    "ID" : ID,
    "NAME" : NAME,
    "EMAIL" : EMAIL,
    # "QUALIFICATION first" : QUALIFICATION1,
    # "QUALIFICATION second" : QUALIFICATION2,
    "QUALIFICATION":{
        "QUALIFICATION first":QUALIFICATION1,
        "QUALIFICATION second":QUALIFICATION2
    },
    "ADDRESS" : ADDRESS,
    "AGE" : AGE,
    "GENDER" : GENDER,
}

print("Student data ")

print(data)
