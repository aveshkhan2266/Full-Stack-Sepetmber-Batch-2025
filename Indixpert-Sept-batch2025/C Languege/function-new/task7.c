#include<stdio.h>
void even(int);
void even(int n)
{
    if(n % 2 == 0)
    {
        printf("even number",n);
    }
    else
    {
        printf("odd number",n);
    }
}
int main()
{
    int n;

    printf("Enter number = ");
    scanf("%d", &n);

    even(n);

    return 0;
}