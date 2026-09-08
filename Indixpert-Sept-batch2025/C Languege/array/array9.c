#include <stdio.h>
int main()
{
    int array2[5], array1[5], i;

    for (i = 0; i < 5; i++)
    {
        printf("Enter Your Number = ");
        scanf("%d", &array1[i]);
    }

    for (i = 0; i < 5; i++)
    {
        array2[i] = array1[i];
    }

    for (i = 0; i < 5; i++)
    {
        printf("%d\n", array2[i]);
    }
}