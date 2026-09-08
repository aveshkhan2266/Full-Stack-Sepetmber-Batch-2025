#include<stdio.h>
#include<conio.h>
int main()
{
    int sl,by;

    printf("Enter a profit = ");
    scanf("%d",&sl);

    printf("Enter a loss = ");
    scanf("%d",&by);

    sl > by ? puts("your profit") : puts("your loss");
}