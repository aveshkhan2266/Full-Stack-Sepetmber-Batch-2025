#include <stdio.h>
int main()
{
    int i, num, sum = 0, data[5], sume = 0;

    for (i = 0; i < 5; i++)
    {
        printf("Enter Your Number = ");
        scanf("%d", &data[i]);
    }

    for (i = 0; i < 5; i++)
    {
        if (data[i] % 2 == 0)
        {
            sum = sum + data[i];
        }
        else
        {
            sume = sume + data[i];
        }
    }
    printf("Even number sum = %d", sum);
    printf("odd number sum = %d", sume);
}