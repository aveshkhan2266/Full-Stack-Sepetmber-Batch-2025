#include <stdio.h>
int add(int, int);
int add(int a, int b)
{
    int c;
    c = a + b;

    return c;
}
void main()
{
    int x, y, z;

    x = 5;
    y = 8;

    z = add(x, y);
    printf("%d\n", z);
    z = add(4, 5);
    printf("%d", z);
    z = add(3, 2);
    printf("%d", z);
    z = add(9, 7);
    printf("%d", z);
}