#include<stdio.h>
int main()
{
    int i,array[10];

    for (i = 1; i <= 5; i++)
    {
        printf("Enter Number = ");
        scanf("%d",&array[i]);
    }

    for (i = 0; i <= 5; i++)
    {
        if(i % 2 == 0)
        {
            printf("Even Number %d\n",array[i]);
        }
        else
        {
            printf("Odd Number %d\n",array[i]);
        }
        

    }
}