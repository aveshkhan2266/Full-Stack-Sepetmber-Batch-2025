#include<stdio.h>
#include<conio.h>
int main()
{

    int number;

    printf("Enter a number");
    scanf("%d",&number);

    if(number < 100)
        printf("less than");

    else
        printf("greater than");


}