#include<stdio.h>
#include<conio.h>
int main()
{
    int number;

    printf("enter a year = ");
    scanf("%d",&number);

    if((number % 4)==0)
        printf("leap year");
    else
        printf("not leap year");    
}