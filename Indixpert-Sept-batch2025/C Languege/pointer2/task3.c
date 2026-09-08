#include<stdio.h>
int main()
{
    char array[50],*p,ch;
    int count=0;

    printf("Enter String = ");
    gets(array);

    printf("Enter Chrachter = ");
    scanf("%d",& ch);

    for (p = array; *p != '\0'; p++)
    {
        if (*p == ch)
        {
            count++;
        }
    }
    printf("Character '%c' found %d times",ch,count);
}