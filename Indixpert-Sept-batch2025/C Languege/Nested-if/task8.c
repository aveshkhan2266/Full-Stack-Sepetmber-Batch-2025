#include<stdio.h>
#include<conio.h>
int main()
{
    int a,b,c,d;


    printf("Enter side 1 = ");
    scanf("%d",&a);

    printf("Enter side 2 = ");
    scanf("%d",&b);

    printf("Enter side 3 = ");
    scanf("%d",&c);
 
    d=a+b+c;

    if(d==180)
        {
            printf("triangle is valid");
        }
    else
        {
            printf("triangle is not valid");
        }
        
    

}