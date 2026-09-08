#include <stdio.h>

int main()
{
    int i, n;

    printf("Enter number of elements = ");
    scanf("%d", &n);

    int data[n];

    for(i = 0; i < n; i++)
    {
        printf("Enter Number = ");
        scanf("%d", &data[i]);
    }

    int length = sizeof(data) / sizeof(data[0]);

    printf("Length of array = %d", length);

    return 0;
}