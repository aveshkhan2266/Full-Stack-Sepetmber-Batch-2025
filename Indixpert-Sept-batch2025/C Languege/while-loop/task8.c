#include<stdio.h>
#include<conio.h>
int main()
{
    int i = 1,num,result;

    printf("Enter a factorial number");
    scanf("%d",&num);

    while (i <= 5)
    {
        result=num*i;
        
        printf("%d",result);
    }
    
}