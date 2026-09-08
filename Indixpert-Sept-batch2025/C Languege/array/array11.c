#include<stdio.h>
int main()
{
    int i,data[10],max;

    for(i = 0; i < 10; i++)
    {
        printf("Enter Your Number = ");
        scanf("%d",&data[i]);
    }

    max = data[0];

    for (i = 0; i < 10; i++)
    {
        if (data[i]>max)
        {
            max = data[i];
        }
        
        
    }
    printf("%d",max);
    
}