#include<stdio.h>
int main()
{
    int number;

    printf("Enter your number = ");
    scanf("%d",&number);

    number > 0 ? puts("positive number") : puts("negative number");
}
