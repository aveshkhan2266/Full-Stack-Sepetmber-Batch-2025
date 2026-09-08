#include<stdio.h>
int add(int a, int b);

int add(int a, int b)
{
    int c;

    c = a + b;

    return c;
}
int main()
{
    int result;

    result = add(11,6);
    printf("%d",result);
}