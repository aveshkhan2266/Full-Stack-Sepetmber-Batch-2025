#include<stdio.h>
#include<conio.h>
int main()
{
    int number;

    printf("enter your number = ");
    scanf("%d",&number);

    if(number > 0)
    {
        printf("number is positive \n");
        if (number % 2==0)
        {
            printf("even number");
        }
        else
            printf("odd number");
        
    }
    else
        printf("number is negative");
    
        
}