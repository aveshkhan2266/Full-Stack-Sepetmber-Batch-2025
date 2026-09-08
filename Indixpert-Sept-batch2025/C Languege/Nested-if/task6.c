#include<stdio.h>
#include<conio.h>
int main()
{
    char character;

    printf("Enter alphabet = ");
    scanf("%c",&character);

    if(character >= 'a' && character <= 'z')
        printf("lowercase alphabet");
    else
    {
        printf("uppercase aplphabet");
    }
        


}