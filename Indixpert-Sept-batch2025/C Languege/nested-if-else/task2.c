#include<stdio.h>
#include<conio.h>
int main()
{
    int character;

    printf("Enter your character");
    scanf("%d",&character);

    if(character >= 'a' && character <= 'z')
    {
        if(character >= '1' && character <= '9')
            printf("character is alphabet");

        else
            printf("character is number");
    }
}