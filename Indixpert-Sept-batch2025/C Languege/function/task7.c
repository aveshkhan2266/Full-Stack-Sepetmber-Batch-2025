#include<stdio.h>
int add();
void main()
{
    int x=add();
    printf("%d",x);
}
int add()
{
   int x = 8 , y = 4;

    return x+y;
}