#include <stdio.h>

void prime(int);

void main()
{
    prime(3);
}

void prime(int num)
{
    int c = 0;

    for (int i = 1; i <= num; i++)
    {

        if (num % i == 0)
        {
            c++;
        }
    }
    if (c == 2)
    {
        printf("this is prime number ");
    }
    else
    {
        printf("Not prime number ");
    }
}
