#include<stdio.h>
int main()
{
    char data[20];
    int i,j,count=1;

    printf("Enter Your Name = ");
    gets(data);

    for (i = 0; data[i] != '\0'; i++);

    j = i - 1;

    for (i = 0; i < j; i++, j--)
    {
        if (data[i] != data[j])
        {
            count = 0;
            break;
        }
    }

    if (count == 1)
    {
        printf("Palindrome String");
    }
    else
    {
        printf("Not Palindrome String");
    }
}