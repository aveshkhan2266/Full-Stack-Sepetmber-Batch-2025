#include <stdio.h>
int main()
{
    int array[5], i;
    int count = 0;

    for (i = 0; i < 5; i++)
    {
        printf("Enter Number = ");
        scanf("%d", &array[i]);
        count++;
        printf("%d", count);
    }
    printf("Total Element %d", count);
}