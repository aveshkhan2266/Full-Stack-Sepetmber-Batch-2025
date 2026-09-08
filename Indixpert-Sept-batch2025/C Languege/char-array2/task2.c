#include<stdio.h>
int main()
{
    char array [30];
    int i,count = 0;

    printf("Enter string = ");
    gets(array);

    for (i = 0; array[i] != '\0'; i++)
    {
        if (array[i] == ' ')
        {
            count++;
        }
        
    }
    printf("Nmber of space = %d",count); 

}