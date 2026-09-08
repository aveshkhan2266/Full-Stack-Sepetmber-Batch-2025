from .add import addition
from .subtract import subtraction_function

def managecalculation():
    print("1. for addition")
    print("2. for subtraction")
    print("3. for multiplication")
    print("4. for division")

    option=int(input("Please select any number: "))
    if option==1:
        addition()
    elif option==2:
        subtraction_function()    
    
