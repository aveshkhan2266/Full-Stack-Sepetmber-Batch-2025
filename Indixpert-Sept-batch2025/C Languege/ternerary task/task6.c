#include<stdio.h>
#include<conio.h>
int main()
{
    int number;

    printf("Enter a number = ");
    scanf("%d",&number);

    ((number % 4)==0) ? puts("leap year") : puts("not leap year");
}