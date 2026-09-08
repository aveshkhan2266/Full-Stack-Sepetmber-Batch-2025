#include<stdio.h>
int main()
{
    int r,c,sp;

    for(r = 5; r >= 1; r--)
    {
        for (sp = 5; sp > r; sp--)
        {
            printf("-");
        }

        for (c = 1; c <= r; c++)
        {
            printf("%d",c);
        }
        printf("\n");
    }
}