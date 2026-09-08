#include<stdio.h>
int main()
{
    int data[5],i,sum;

    for(i = 0; i < 5; i++)
    {
        printf("Enter Your Number = ");
        scanf("%d",&data[i]);
    }

    
    
    for (i = 4; i >= 0; i--)
    {
        printf("%d",data[i]);
    }
}