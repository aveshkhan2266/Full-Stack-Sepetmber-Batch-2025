#include<stdio.h>
#include<conio.h>
int main()
{
    int a,base,height;

    printf("Enter a value of base:");
    scanf("%d",&base);

    printf("Enter a value of height:");
    scanf("%d",&height);

    a=base*height/2;

    printf("%d",a);

    return 0;
}