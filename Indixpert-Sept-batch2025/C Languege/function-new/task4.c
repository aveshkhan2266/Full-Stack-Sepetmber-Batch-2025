#include<stdio.h>
void add(int a, int b);
void add(int a, int b)
{
    int c;

    c = a + b;

    printf("%d",c);
}
int main()
{
    add(6,6);
}
