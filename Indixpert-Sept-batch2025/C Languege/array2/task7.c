#include<stdio.h>
int main()
{
    int array1[5],array2[5],i;

    for (i = 0; i < 5; i++)
    {
        printf("Enter Number = ");
        scanf("%d",&array1[i]);
    }
    for (i = 0; i < 5; i++)
    {
        array2[i] = array1[i]; 
    }
    
    printf("copied array\n");

    for (i = 0; i < 5; i++)
    {
        printf("%d",array2[i]);
    }
    
}