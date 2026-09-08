#include<stdio.h>
#include<conio.h>
int main()
{
    int number;

    printf("Enter a number");
    scanf("%d",&number);

    if((number % 5)==0)
        {
            printf("divisible by 5");
        }
    else if((number % 11)==0)
        {
            printf("divisible by 11");
        }    
    else
        printf("not divisible by 5 and 11 ");    
}