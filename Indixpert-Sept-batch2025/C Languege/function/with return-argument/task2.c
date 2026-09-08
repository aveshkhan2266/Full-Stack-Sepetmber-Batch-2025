#include<stdio.h>
void factorial();
void main()
{
    factorial();
}
void factorial()
{
     int num, i, fact = 1;

    printf("Enter a Number = ");
    scanf("%d", &num);

    for(i = 1; i <= num; i++)
    {
        fact = fact * i;
    }

    printf("Factorial = %d", fact);
}