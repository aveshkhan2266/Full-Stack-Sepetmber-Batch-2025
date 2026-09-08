#include <stdio.h>
int main()
{
    int data1[5], i;

    for (i = 0; i < 5; i++)
    {
        printf("Enter your number = ");
        scanf("%d", &data1[i]);
    }

    for (i = 4; i >= 0; i--)
    {
        printf("%d\n", data1[i]);
    }
}