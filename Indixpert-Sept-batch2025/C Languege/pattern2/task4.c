#include<stdio.h>
int main()
{
    int r,c;

    for(r = 0; r <= 5; r++)
    {
        for(c = r; c >= 1; c--)
        {
            printf("%d", c);
        }
        printf("\n");
    }
}