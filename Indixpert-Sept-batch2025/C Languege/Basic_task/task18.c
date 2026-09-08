#include<stdio.h>
#include<conio.h>
int main()
{
    int a,x,y,z;

    printf("enter value x = ");
    scanf("%d",&x);

    printf("enter value y = ");
    scanf("%d",&y);
    
    printf("enter value z = ");
    scanf("%d",&z);

    a=(x+y+z)/(x-y-z);

    printf("%d",a);

    a=(x+y+z) / 3;

    printf("%d",a);

    a=(x+y)*(x-y)*(y-z);

    printf("%d",a);


}