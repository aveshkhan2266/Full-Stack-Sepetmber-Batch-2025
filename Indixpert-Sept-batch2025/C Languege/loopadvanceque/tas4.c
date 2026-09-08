#include<stdio.h>
int main()
{
    int num,r,sum=0,product=1;

    printf("Enter number = ");
    scanf("%d",&num);

    while (num!=0)
    {
        r=num%10;
        printf("reminder %d\n",r);

        sum=sum+r;
        printf("sum %d\n",sum);

        product=product*r;
        printf("product %d\n",product);

        num=num/10;
        printf("number %d\n",num);
    }

    if(sum==product)
        printf("spy number");
    else
        printf("Not spy number");    
    
}