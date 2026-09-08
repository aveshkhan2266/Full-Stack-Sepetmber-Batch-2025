#include<stdio.h>
#include<conio.h>
int main()
{
    int number;

    printf("Enter your number = ");
    scanf("%d",&number);

    ((number % 5)==0) ? puts ("5 is divisible") : puts("5 is not divisible by 5"); 

}