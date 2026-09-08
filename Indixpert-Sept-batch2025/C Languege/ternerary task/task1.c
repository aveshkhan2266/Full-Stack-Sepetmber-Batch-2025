#include<stdio.h>
int main()
{
    int x,y;

    printf("Enter your number");
    scanf("%d",&x);

    printf("Enter your number");
    scanf("%d",&y);

    x > y ? puts("x is greater than") : puts("y is greter than");
}