#include<stdio.h>
int main()
{
    char array[40],ch;
    int i,count=0;

    printf("Enter string = ");
    gets(array);

    printf("Enter character = ");
    scanf("%c",&ch);

    for (i = 0; array[i] != '\0'; i++)
    {
        if (array[i] == ch)
        {
            count++;
        }
         
    }
    printf("frequency of '%c' = %d",ch,count);
}