#include<stdio.h>
#include<conio.h>
int main()
{
    char character;

    printf("Enter a variable = ");
    scanf("%c",&character);

    if(character >= 'a' && character <= 'z')
    {
        printf("character is alphabet");
    }    
    else if (character >= '0' && character <= '9')
    {
        printf("character is digit");
    }
    else
    {
        printf("character is special character");
    }    
}