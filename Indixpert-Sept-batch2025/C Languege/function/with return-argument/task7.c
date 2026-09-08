#include <stdio.h>
int palindrom(char[]);
int main()
{
    char string[50];
    int result;

    printf("Enter String = ");
    gets(string);

    result = palindrom(string);

    if (result == 1)
        printf("Palindrom String");
    else
        printf("Not Palindrom String");

    return 0;
}
int palindrom(char string[])
{
    int j, i, count = 1, palindrom;

    for (i = 0; string[i] != '\0'; i++)
        ;

    j = i - 1;

    for (i = 0; i < j; i++, j--)
    {
        if (string[i] != string[j])
        {
            count = 0;
            break;
        }
    }
    return count;
}