def factorial():
    x = int(input("Enter Number = "))
    fact = 1
    for i in range(1, x + 1):
        fact = fact * i
    print("Factorial  =",fact)
factorial()