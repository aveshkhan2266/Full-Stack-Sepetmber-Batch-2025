#include<stdio.h>
#include<conio.h>
int main()
{
    int a,b,c;

    printf("Enter your number");
    scanf("%d",&a);

    printf("Enter your number");
    scanf("%d",&b);

    printf("Enter your number");
    scanf("%d",&c);

    if(a >= b)
    {
        printf("a is greter than");

        if(b >= c)

            printf("b is greter than");

        else    
            printf("c is greater than");        
    }
}