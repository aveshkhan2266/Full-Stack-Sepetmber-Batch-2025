#include <stdio.h>
int main()
{
    char array[40], *p, *j;

    printf("Enter String = ");
    gets(array);

    for (p = array, j = array; *j != '\0'; j++)
        ;

    j--;
    for (; p < j; p++, j--)
    {
        if (*p != *j)
        {
            break;
        }
    }

    if (p >= j)

        printf("Palindrome");

    else

        printf("Not Palindrome");
}