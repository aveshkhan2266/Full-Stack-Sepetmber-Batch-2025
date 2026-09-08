#include<stdio.h>
int main()
{
    char array[50];
    int i,words=0;

    printf("Enter String = ");
    gets(array);

    if (array != '\0')
    {
        words = 1;

        for (i = 0; array[i] != '\0'; i++)
        {
            if (array[i] == ' ' && array[i+1] != ' ' && array[i+1] != '\0')
            {
                words++;
            }
            
        }
        
    }
    printf("Number of words = %d",words);
}