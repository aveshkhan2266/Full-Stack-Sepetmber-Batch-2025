#include <stdio.h>
int main()
{
    char *r, array[20], *p;

    printf("Enter Your Name = ");
    gets(array);

    for (r = array; *r != '\0'; r++);
    
    for (p = r ; p >= array; p--)
    {
        printf("%c", *p);
    }
}