#include<stdio.h>
#include<conio.h>
int main()
{
    int number;

    printf("enter a number = ");
    scanf("%d",&number);

    if((number % 5)==0)
        printf("5 is divisible");
    else
        printf("5 is not divisible by 5");    
}