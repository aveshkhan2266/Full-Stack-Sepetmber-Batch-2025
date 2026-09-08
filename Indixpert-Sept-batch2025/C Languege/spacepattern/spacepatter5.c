#include <stdio.h>
int main()
{
    int r, c, s;

    for (r = 5; r >= 1; r--)
    {
        for (s = 5; s >= r; s--               ssssssss)
        {
            printf(" ");
        }
        for (c = r; c >= 1; c--)
        {
            printf("%d", c);
        }

        printf("\n");
    }
}