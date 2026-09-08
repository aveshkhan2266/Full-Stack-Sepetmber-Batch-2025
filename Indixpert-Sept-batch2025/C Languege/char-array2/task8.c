#include<stdio.h>
int main()
{
    char array[20],i;

    printf("Enter String = ");
    gets(array);

    for (i = 0; array[i] != '\0'; i++)
    {
        if (array[i] >= 'A' && array[i] <= 'Z')
        {
            array[i] = array[i] +32;
        }
    }
    printf("Small Letter = %s",array);
}