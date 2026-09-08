#include<stdio.h>
#include<conio.h>
int main()
{
    int number;

    printf("enter a number = ");
    scanf("%d",&number);

    if((number % 2)==0)
        printf("even number");
    else
        printf("odd number");    
}