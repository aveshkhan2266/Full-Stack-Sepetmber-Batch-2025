list = []

while(True):
    print("1. Add Item")
    print("2. Data Show")
    print("3. Delete item")
    print("4. Exit")
    print("--------------------------------------")

    ch = int(input("Enter Your Choice = "))

    if(ch == 1):
        temp = []

        item = input("Enter Your Item Name : ")
        qun = int(input("Enter Your Quantity : "))
        price = int(input("Enter Your Price : "))

        temp = [item, qun, price]
        list.append(temp)

    elif(ch == 2):
        total_sum = 0

        print("Name\t\tQuantity\t\tPrice")  

        for i in list:
            print(i[0], "\t\t", i[1], "\t\t", i[2])

            total = i[1] * i[2]
            total_sum = total_sum + total

        gst = total_sum * 18 / 100
        final = total_sum + gst

        print("--------------------------------------")
        print("Total Price =", total_sum)
        print("GST (18%) =", gst)
        print("Final Total =", final)

    elif(ch == 3):
        x=input("Enter Your Delete Item = ")

        for i in list:
            if(i[0]==x):
                list.remove(i)
        print(list)        
    # else:
    #     print("Invalid Choice")