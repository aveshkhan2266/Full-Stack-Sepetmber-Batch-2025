#include<stdio.h>
#include<conio.h>
int main()
{
    int i = 0,n1 = 0,n2 = 1,n3;

    while (i <= 10)
    {
        printf("%d\n",n1);

        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        i++;
    }
    
}