#include <stdio.h>
#include <conio.h>

int vowel (char array[]);
void main()
{
    char array[20];
    int count;

    printf("Enter String = ");
    gets(array);

    count = vowel(array);

    printf("%d",count);

    getch();
}
int vowel(char array[])
{
    int i, count = 0;

    for (i = 0; array[i] != '\0'; i++)
    {
        if (array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u')
        {
            count++;
        }       
    }
    return count;
}