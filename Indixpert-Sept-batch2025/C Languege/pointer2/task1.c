#include<stdio.h>
int main()
{
    char array[20], *p, j;

    printf("Enter String = ");
    gets(array);

    for (p = array; *p != '\0'; p++);
    for (p = p - 1; p >= array; p--)
    {
        printf("%c",*p);
    }
    
}