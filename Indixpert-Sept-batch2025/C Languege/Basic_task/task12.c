#include<stdio.h>
#include<conio.h>

int main()
{
    int a,width,length;

    printf("Enter a value of width:");
    scanf("%d",&width);

    printf("Enter a value of height:");
    scanf("%d",&length);

    a=width*length;

    printf("%d",a);
}