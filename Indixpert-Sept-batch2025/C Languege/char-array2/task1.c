#include <stdio.h>
int main()
{
    char array[10], i;

    printf("Enter String = ");
    gets(array);

    for (i = 0; array[i] != '\0'; i++);

    for (--i; i >= 0; i--)
    {
        printf("%c", array[i]);
    }
}