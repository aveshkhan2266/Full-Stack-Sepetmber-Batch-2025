#include<stdio.h>
int main()
{
    int i,data[5],sum=0;

    for (i = 0; i < 5; i++)
    {
        printf("Enter Your Number = ");
        scanf("%d",&data[i]);
    }
    
    for (i = 0; i < 5; i++)
    {
        if (data[i] % 2 == 0)
        {
            sum = sum+data[i];
        }
        
    }
    
    printf("%d",sum);
    
}
