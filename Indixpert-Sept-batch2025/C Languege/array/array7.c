#include<stdio.h>
int main()
{
    int i,data[5],sum,flag=0;

    for(i = 0; i < 5; i++)
    {
        printf("Enter Your Number = ");
        scanf("%d",&data[i]);
    }

    printf("Enter search number = ");
    scanf("%d",&sum);

    for (i = 0; i < 5; i++)
    {
        if (data[i] == sum)
        {
            printf("%d,%d",sum,i);
            flag=1;
            break;
        }
    }
    if(flag==0)
        printf("not found");
        
    

}