#include <stdio.h>
int main()
{
    int i, array[5], sum = 0;

    for (i = 0; i <= 5; i++)
    {
        printf("Enter Number = ");
        scanf("%d", &array[i]);
    }

    for (i = 0; i <= 5; i++)
    {
        if (array[i] % 2 == 0)
        {
            printf("%d\n",array[i]);
        }
    }
}