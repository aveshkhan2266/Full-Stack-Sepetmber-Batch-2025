#include <stdio.h>
#include <conio.h>
int main()
{
    int r, c, s;

    for (r = 1; r <= 5; r++)
    {
        for (s = r; s >= 1; s--)
        {
            printf(" ");
        }
        for (c = 1; c <= r; c++)
        {
            printf("%d", c);
        }

        printf("\n");
    }
}