#include<stdio.h>
int main()
{
    int i,data[10],min;

    for (i = 0; i < 10; i++)
    {
        printf("Enter Your Number = ");
        scanf("%d",&data[i]);
    }

    min = data[0];

    for(i = 0; i < 10; i++)
    {
        if (data[i] < min)
        {
            min = data[i];
        }
        
    }
    printf("%d",min);

}