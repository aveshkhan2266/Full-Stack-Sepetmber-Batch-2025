#include<stdio.h>
int multiply(int a, int b);

int multiply(int a, int b)
{
    int c;

    c = a * b;

    return c;
}
int main()
{
    int result;

    result = multiply(5,7);

    printf("%d",result);
}