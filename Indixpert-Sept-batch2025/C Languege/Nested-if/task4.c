#include<stdio.h>
#include<conio.h>
int main()
{
    int a,b,c;

    printf("Enter a number = ");
    scanf("%d",&a);

    printf("Enter a number = ");
    scanf("%d",&b);

    printf("Enter a number = ");
    scanf("%d",&c);

    if(a >= b && a >= c)
    {
        printf("a greater than");
    }    
    else if (c <= b )
    {
        printf("b greater than");
    }
    else
    {
        printf("c greater than");
    }    

}