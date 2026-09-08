dict = {
    "Orange":50,
    "Mango":40,
    "Apple":55,
    "Banana":20,
    "Lichi":45
}

for name in dict:
    name = input("Enter Fruit name = ")

    if name == "Orange":
        print("Orange Price = 50")
    elif name == "Mango":
        print("Mango Price = 40")
    elif name == "Apple":
        print("Apple Price = 55")
    elif name == "Banana":
        print("Banana Price = 20")
    elif name == "Lichi":
        print("Lichi Price = 45")
    else:
        print("This Fruit Not Avilable")