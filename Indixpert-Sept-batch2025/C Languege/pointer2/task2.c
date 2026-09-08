#include<stdio.h>
int main()
{
    char array[40],*p;
    int count=0;

    printf("Enter String = ");
    gets(array);

    for (p = array; *p != '\0'; p++)
    {
        if (*p == ' ')
        {
            count++;
        }
        
    }
    printf("%d",count);
}