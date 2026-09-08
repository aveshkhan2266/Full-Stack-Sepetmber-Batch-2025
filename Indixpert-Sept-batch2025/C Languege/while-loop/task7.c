#include<stdio.h>
#include<conio.h>
int main()
{
    int i = 1 , num,result;

    printf("Enter Number of Table = ");
    scanf("%d",&num);

    while (i <= 10)
    {
        result=num*i;
        printf("%d\n",result);
        i++;
    }
    
}