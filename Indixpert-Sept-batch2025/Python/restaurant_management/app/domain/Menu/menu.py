def menu():
    while True:
        print("""
=========== RAJASTHANI MENU ===========
1. Breakfast
2. Lunch
3. Dinner
4. Exit
""")

        choice = input("Choose option: ")

        if choice == "1":
            breakfast()
        elif choice == "2":
            lunch()
        elif choice == "3":
            dinner()
        elif choice == "4":
            print("Thank you Visit Again!")
            break
        else:
            print("Invalid choice")


def breakfast():
    print("""
--------- BREAKFAST MENU ---------
1. Pyaz Kachori
2. Mirchi Vada
3. Ghewar
4. Mawa Kachori
""")


def lunch():
    print("""
------- LUNCH MENU --------
1. Dal Baati Churma
2. Gatte Ki Sabzi
3. Keri Sangri
4. Bajra Roti
""")


def dinner():
    print("""
-------- DINNER MENU --------
1. Mutton Sabzi
2. Tawa Chicken
3. Dal Sabzi
4. Nan Roti
""")
