#include<stdio.h>
#include<conio.h>
int main()
{
    int a,b;

    printf("Enter your number = ");
    scanf("%d",&a);

    printf("Enter your number = ");
    scanf("%d",&b);

    a > b ? puts("a is greater than") : puts("b is greater than");
}