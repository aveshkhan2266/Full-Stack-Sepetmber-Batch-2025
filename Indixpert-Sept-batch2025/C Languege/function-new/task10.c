#include <stdio.h>
#include <conio.h>

int spaceCount(char array[]);

void main()
{
    char array[50];
    int count;

    printf("Enter String = ");
    gets(array);

    count = spaceCount(array);

    printf("Total spaces = %d",count);

    getch();
}

int spaceCount(char array[])
{
    int i, count=0;

    for (i = 0; array[i] != '\0'; i++)
    {
        if(array[i] == ' ')
        {
            count++;
        }
    }
    return count;
}