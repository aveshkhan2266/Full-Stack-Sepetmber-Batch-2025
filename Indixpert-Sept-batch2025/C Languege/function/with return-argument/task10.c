#include<stdio.h>
int charcount(char,char[]);
int main()
{
    char data[50],ch;
    int result;

    printf("Enter Your String = ");
    gets(data);

    printf("Enter Character = ");
    scanf("%c",&ch);

    result = charcount(ch,data);

    printf("%c = %d",ch ,result);

    return 0;
}
int charcount (char ch, char data[])
{
    int i,count=0;

    for (i = 0; data[i] != '\0'; i++)
    {
        if (data[i] == ch)
        {
            count++;
        }
            
    }

    return count;
}