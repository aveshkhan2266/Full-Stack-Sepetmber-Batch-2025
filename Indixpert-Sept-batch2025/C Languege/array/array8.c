#include <stdio.h>
int main()
{
    int i, data[5], sum, flag = 0, j;

    for (i = 0; i < 5; i++)
    {
        printf("Enter Your Number = ");
        scanf("%d", &data[i]);
    }

    printf("Enter delete Number = ");
    scanf("%d", &sum);

    for (i = 0; i < 5; i++)
    {
        if (sum == data[i])
        {
            for (j = i; j < 4; j++)
            {
                data[j] = data[j + 1];
            }
            flag = 1;
            break;
        }
    }
    if (flag == 1)
    {
        for (i = 0; i < 4; i++)
        {
            printf("%d\n", data[i]);
        }
    }
    else
    {
        printf("not found");
    }
}