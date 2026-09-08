#include<stdio.h>
int main()
{
    int num,r,sum=0,square;

    printf("Enter number = ");
    scanf("%d",&num);
    square=num*num;
    while (square!=0)
    {
        r=square%10;
        printf("reminder = %d\n",r);

        sum=sum+r;
        printf("sum = %d\n",sum);

        square=square/10;
        printf("square = %d\n",square);
    }

    if (sum==num)
        printf("Neon number");
    else
        printf("Not neon number");
    
    
}