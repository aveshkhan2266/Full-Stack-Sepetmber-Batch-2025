#include<stdio.h>

void prime(int);
void main()
{
    prime(2);
}

void prime(int num)
{
    if(num % 2 == 0)
        printf("Even Number");
    else
        printf("Odd Number");
}
