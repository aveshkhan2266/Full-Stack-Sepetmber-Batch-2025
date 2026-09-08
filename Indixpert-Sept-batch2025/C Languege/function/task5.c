#include<stdio.h>
int even(int n);
int main()
{
    int num , result;

    printf("Enter a Number = ");
    scanf("%d",&num);

    result = even(num);

    if (result == 1)
        printf("Even number");
    else
        printf("Odd number");
        
        return 0;
}
int even(int n)
{
    if (n % 2 == 0)
        return 1;
    else
        return 0;    
    
}
