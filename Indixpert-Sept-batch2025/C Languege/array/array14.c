#include <stdio.h>
int main()
{
    int data[10], i;

    for (i = 0; i < 10; i++)
    {
        printf("Enter Your Number = ");
        scanf("%d", &data[i]);
    }

    for (i = 0; i < 10; i++)
    {

        if (data[i] % 2 != 0)
        {
            // printf("%d even number", data[i]);
            printf("%d odd number = ",data[i]);
        }
    
    }
}