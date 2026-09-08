#include<stdio.h>
int add();

int add()
{
    int z, a = 5, b = 6;
    z = a + b;
    return z;
}

int main()
{
    int result;
    result = add();
    printf("%d",result);
}