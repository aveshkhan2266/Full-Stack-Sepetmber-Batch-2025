#include<stdio.h>
#include<conio.h>
int main()
{
    int number;

    printf("enter a number = ");
    scanf("%d",&number);

    if(number > 0)
        printf("positive number");
    else
        printf("negative number");    
}