#include<stdio.h>
int main()
{
    char data[100],ch;
    int i,count=0;

    printf("Enter Your String = ");
    gets(data);

    printf("Enter Your Character = ");
    scanf("%c",&ch);
    
    for (i = 0; data[i] != '\0'; i++)
    {
        if (data[i] == ch)
        {
            count++;
        }

    }
    printf("%c = %d",ch,count);
}