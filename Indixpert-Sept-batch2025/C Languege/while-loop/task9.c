#include<stdio.h>
#include<conio.h>
int main()
{
    int i = 1,power,result=1,num;

    printf("Enter number");
    scanf("%d",&num);

    printf("Enter power");
    scanf("%d",&power);

    while (i <= power)
    {
        result=result*num;
        // 5 = 1*5
        // 25=5*5
        // 125=25*5
        i++;
    }   
    printf("%d",result);

}