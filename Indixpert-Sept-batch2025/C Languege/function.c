#include<stdio.h>
int add (int a,int b)
{
    int sum=0;
    sum=a+b;
    printf("\nSUM: %d",sum);
}
int multiply (int a,int b)
{
    int multiply=0;
    multiply=a*b;
    printf("\nMULTIPLY: %d",multiply);
}
int divided (int a,int b)
{
    int divided=0;
    divided=a/b;
    printf("\nDIVIDED: %d",divided);
}
int main()
{
    int first,second;
    int c;
    printf("\nEnter your first number: ");
    scanf("%d",&first);

    printf("\nEnter your second number: ");
    scanf("%d",&second);
    printf("\nEnter the Choice 1 to 3: ");
    scanf("%d",&c);
    switch (c)
    {
    case 1:
    /* code */
        add(first,second);
        break;
    case 2:
        multiply(first,second);
        break;
    case 3:
        divided(first,second);
        break;
    default:
        break;
    }


    return 0;
}