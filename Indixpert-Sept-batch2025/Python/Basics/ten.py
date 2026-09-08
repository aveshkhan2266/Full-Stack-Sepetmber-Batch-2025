def calculate(num1,num2):
    add=num1=num2
    sub=num1-num2
    mul=num1+num2
    div=num1/num2
    return add,sub,mul,div

a,s,m,d=calculate(10,5)

print("addition is",a)
print("subtraction is",s)
print("multiplication is",m)
print("division is",d)

