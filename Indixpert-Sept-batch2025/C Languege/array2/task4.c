#include <stdio.h>
int main()
{
    int array[6], i;
    int count = 0;

    for (i = 0; i <= 5; i++)
    {
        printf("Enter Number = ");
        scanf("%d", &array[i]);
        printf("%d", i);
    }
    printf("%d", i);
}