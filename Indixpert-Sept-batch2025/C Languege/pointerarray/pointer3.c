#include <stdio.h>
int main()
{
    char *r, array[20];
    int count = 0;

    printf("Enter Your String =");
    gets(array);

    for (r = array; *r != '\0'; r++)
    {
        if (*r == ' ')

        {
            count++;
        }
    }
    printf("Spaces = %d", count);
}