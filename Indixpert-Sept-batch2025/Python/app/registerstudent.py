import filehandling

def register_student():
    data = filehandling.read_file()
    studentdict={}
    studentdict["id"]=int(input("Please Enter Your Id : "))
    studentdict["name"]=input("Please Enter Your Name: ")
    studentdict["address"]=input("Please Enter Your Address: ")

    qualifications=[]

    morequalification="yes"

    while morequalification.lower()=="yes":
        qualification={}
        qualification["qualification_name"]=input("Enter Qualification: ")
        qualification["passing_year"]=input("Enter Qualification Year: ")
        qualifications.append(qualification)

        morequalification=input("add more qualification (yes/no): ")

    studentdict["qualification"]=qualifications

    data.append(studentdict)
    filehandling.write_file(data)
    
    print("student registered successfully")

    