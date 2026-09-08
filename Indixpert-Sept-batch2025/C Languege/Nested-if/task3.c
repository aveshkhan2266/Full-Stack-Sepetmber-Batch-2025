#include<stdio.h>
#include<conio.h>
int main()
{
    char alphabet;

    printf("Enter a character = ");
    scanf("%c",&alphabet);

    if(alphabet >= 'a' && alphabet <='z')
        printf("Character is alphabet");
    else    
        printf("Character is not alphabet");    

}