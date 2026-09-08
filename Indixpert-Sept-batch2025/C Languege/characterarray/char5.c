#include<stdio.h>
int main()
{
    char data[50];
    int i,count=1;

    printf("Enter Your Word = ");
    gets(data);

    for (i = 0; data[i] != '\0'; i++)
    {
        if (data[i] == ' ')
        {
            count++;
        }
        
    }
    printf("%d",count);
}