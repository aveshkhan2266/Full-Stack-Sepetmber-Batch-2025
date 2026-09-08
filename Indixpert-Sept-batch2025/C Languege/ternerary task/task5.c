#include<stdio.h>
#include<conio.h>
int main()
{
    int number;
    
    printf("Enter a number = ");
    scanf("%d",&number);

    ((number % 2)==0) ? puts("even number") : puts("odd number");

}