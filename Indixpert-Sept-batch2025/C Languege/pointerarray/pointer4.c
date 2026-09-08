#include<stdio.h>
int main()
{
    char array[50],ch,*p;
    int count=0;

    printf("Enter Your String = ");
    gets(array);

    printf("Enter Your char = ");
    scanf("%c",&ch);

    for (p = array; *p != '\0'; p++)
    {
        if (*p == ch)
        {
            count++;
        }
        
    }
    printf("count = %d", count);
}