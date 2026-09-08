#include<stdio.h>
int main()
{
    char array[20],i;

    printf("Enter Strig = ");
    gets(array);

    for (i = 0; array[i] != '\0'; i++)
    {
        if (array[i] >= 'a' && array[i] <= 'z')
        {
            array[i] = array[i] - 32;
        }
    }
    printf("Capital String = %s", array);
}