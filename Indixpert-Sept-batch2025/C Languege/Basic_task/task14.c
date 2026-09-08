#include<stdio.h>
#include<stdio.h>
int main()
{
    int a,principal,rate,time;

    printf("enter a principal:");
    scanf("%d",&principal);

    printf("enter a rate:");
    scanf("%d",&rate);

    printf("enter a time:");
    scanf("%d",&time);

    a=principal*rate*time/100;

    printf("%d",a);
}