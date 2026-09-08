#include<stdio.h>
int main()
{
    char data[50];
    int i;

    printf("Enter Your Number = ");
    gets(data);

    for (i = 0; data[i] != '\0'; i++)
    {
        if (data[i] >= 'A' && data[i] <= 'Z')
        {
            data[i] = data[i] + 32;
        }
        
    }
    printf("%s",data);
}