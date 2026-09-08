#include <stdio.h>
int main()
{
    int data[6], temp, i, j;

    for (i = 0; i < 6; i++)
    {
        printf("Enter Your Number = ");
        scanf("%d", &data[i]);
    }

    for (i = 0; i < 6 - 1; i++)
    {
        for (j = 0; j < 6 - 1 - i; j++)
        {
            if (data[j] > data[j + 1])
            {
                temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }

    for (j = 0; j < 6; j++)
    {
        printf("%d\n", data[j]);
    }
    printf("2 smallest = %d\n", data[1]);
    printf("2 largest = %d\n", data[4]);
}