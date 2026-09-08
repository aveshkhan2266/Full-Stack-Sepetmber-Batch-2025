#include<stdio.h>
int main()
{
    int num1,num2; 
    char c;

    printf("Enter Your number = ");
    scanf("%d",&num1);

    printf("Enter Your number = ");
    scanf("%d",&num2);

    printf("Enter Your oprater (*,+,-,/) ");
    scanf("%d",&c);

    switch (c)
    {
    case '*':
        printf("result = %d",num1 * num2);
        break;
       
    case '+':
        printf("result = %d",num1 + num2);
        break;
        
    case '-':
        printf("result = %d",num1 - num2);
        break;

    case '/':
        printf("result = %d",num1 / num2);
        break;    

    
    default:
        printf("invalid opretaor");
        break;
    }
}