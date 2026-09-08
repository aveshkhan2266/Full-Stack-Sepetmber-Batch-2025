dict = {}

dict["name"] = input("Enter Name = ")
dict["RollNumber"] = int(input("Enter Roll-No = "))
dict["English"] = int(input("Enter English Marks = "))
dict["Hindi"] = int(input("Enter Hindi Marks = "))
dict["Math"] = int(input("Enter Math Marks = "))

average = (dict["English"] + dict["Hindi"] + dict["Math"]) / 3
print (dict)
print("average =", average)

