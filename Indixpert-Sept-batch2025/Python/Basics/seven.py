listdata=[]

numberofstudent=int(input("Please enter of student register: "))

for student in range (numberofstudent):
    studentdict={}
    studentdict["id"]=int(input("please enter your id: "))
    studentdict["name"]=input("please enter your name: ")
    studentdict["address"]=input("please enter your address: ")

    qualifications=[]
    morequalification = "yes"

    while morequalification.lower() == "yes":
        qualification=input("enter qualification: ")
        qualifications.append(qualification)

        morequalification=input("add more qualification (yes/no): ")

        studentdict["qualification"]=qualifications

        listdata.append(studentdict)

for item in listdata:
    print("student detail: ")
    for key,value in item.items():
        print(f"{key}={value}")
        

