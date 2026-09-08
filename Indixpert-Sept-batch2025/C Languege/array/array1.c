#include <stdio.h>
int main()
{
    int i, data[5] = {23, 45, 78, 90, 50}, a = 5;

    /*     for (i = 0; i < 5; i++)
        {
            printf("%d : Enter number = ", i);
            scanf("%d", &data[i]);
        } */

    for (i = 0; i < 5; i++)
    {

        printf("%d : %d\n", data[i], i);
    }
}