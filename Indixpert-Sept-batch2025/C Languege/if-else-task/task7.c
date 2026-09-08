#include<stdio.h>
#include<conio.h>
int main()
{
    int sl,by;

    printf("enter a profit");
    scanf("%d",&sl);

    printf("enter a loss");
    scanf("%d",&by);

    if(sl > by)
        printf("your profit");
    else
        printf("your loss");
}