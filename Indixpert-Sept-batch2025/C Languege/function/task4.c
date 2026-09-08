#include<stdio.h>
int add(int,int);
void main()
{
    int a , b , c;

    printf("Enter Your a Number = ");
    scanf("%d",&a);

    printf("Enter Your b Number = ");
    scanf("%d",&b);

    c = add(a,b);

    printf("%d",c);

}
int add(int a, int b)
{
    int c ;
    c = a + b;

    return c;

}

