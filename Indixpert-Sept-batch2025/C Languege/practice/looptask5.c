#include<stdio.h>
#include<conio.h>
int main()
{
    int i = 1;

    while (i <= 1000)
    {
        if(i % 3 == 0 || i % 11 == 0)
            printf("%d\n",i);
            i++;
    }
    
}