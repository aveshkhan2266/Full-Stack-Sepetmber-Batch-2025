print("=================== 5 STUDENT MARKSHEET ==================")


Student1={
    "id": int(input("Enter Your Id: ")),
    "Name": input("Enter Your Name: "),
    "English": int(input("Enter Your English Marks: ")),
    "Hindi": int(input("Enter Your Hindi Marks: ")),
    "Math": int(input("Enter Your Math Marks: ")),
    "Science": int(input("Enter Your Science Marks: "))
}
Student1["Total"] = Student1["English"] + Student1["Hindi"] + Student1["Math"] + Student1["Science"]
Student1["Percentage"] = Student1["Total"] /4

Student2={
    "id": int(input("Enter Your Id: ")),
    "Name": input("Enter Your Name: "),
    "English": int(input("Enter Your English Marks: ")),
    "Hindi": int(input("Enter Your Hindi Marks: ")),
    "Math": int(input("Enter Your Math Marks: ")),
    "Science": int(input("Enter Your Science Marks: "))
}
Student2["Total"] = Student2["English"] + Student2["Hindi"] + Student2["Math"] + Student2["Science"]
Student2["Percentage"] = Student2["Total"] /4

Student3={
    "id": int(input("Enter Your Id: ")),
    "Name": input("Enter Your Name: "),
    "English": int(input("Enter Your English Marks: ")),
    "Hindi": int(input("Enter Your Hindi Marks: ")),
    "Math": int(input("Enter Your Math Marks: ")),
    "Science": int(input("Enter Your Science Marks: "))
}
Student3["Total"] = Student3["English"] + Student3["Hindi"] + Student3["Math"] + Student3["Science"]
Student3["Percentage"] = Student3["Total"] /4

Student4={
    "id": int(input("Enter Your Id: ")),
    "Name": input("Enter Your Name: "),
    "English": int(input("Enter Your English Marks: ")),
    "Hindi": int(input("Enter Your Hindi Marks: ")),
    "Math": int(input("Enter Your Math Marks: ")),
    "Science": int(input("Enter Your Science Marks: "))
}
Student4["Total"] = Student4["English"] + Student4["Hindi"] + Student4["Math"] + Student4["Science"]
Student4["Percentage"] = Student4["Total"] /4

Student5={
    "id": int(input("Enter Your Id: ")),
    "Name": input("Enter Your Name: "),
    "English": int(input("Enter Your English Marks: ")),
    "Hindi": int(input("Enter Your Hindi Marks: ")),
    "Math": int(input("Enter Your Math Marks: ")),
    "Science": int(input("Enter Your Science Marks: "))
}
Student5["Total"] = Student5["English"] + Student5["Hindi"] + Student5["Math"] + Student5["Science"]
Student5["Percentage"] = Student5["Total"] /4


topper = Student1
if Student2["Total"] > topper["Total"]:
    topper = Student2
if Student3["Total"] > topper["Total"]:
    topper = Student3
if Student4["Total"] > topper["Total"]:
    topper = Student4
if Student5["Total"] > topper["Total"]:
    topper = Student5

print("\nTopper Of Class Student:")
print("Name: ", topper["Name"])
print("Total Marks: ", topper["Total"])
print("Percentage: ", topper["Percentage"])

print("\n5 STUDENT PERCENTAGE")
print(Student1["Name"], ":",Student1["Percentage"])
print(Student2["Name"], ":",Student2["Percentage"])
print(Student3["Name"], ":",Student3["Percentage"])
print(Student4["Name"], ":",Student4["Percentage"])
print(Student5["Name"], ":",Student5["Percentage"])

        
