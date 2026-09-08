#include <stdio.h>
int main()
{
    int array[5], i, x;
    int found=0;

    for (i = 0; i <= 4; i++)
    {
        printf("Enter Number = ");
        scanf("%d", &array[i]);
    }

    printf("Enter Search Number = ");
    scanf("%d", &x);
    for (i = 0; i <= 4; i++)
    {
        // printf("%d : %d  \n", array[i], i);
        if (x == array[i])
        {
            printf("%d", i);
            found = 1;
            break;
        }        
    }
    if (found == 0)
    {
        printf("Enter Correct Number");
    }
}

