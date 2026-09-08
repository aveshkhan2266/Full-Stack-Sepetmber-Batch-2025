#include<stdio.h>
#include<conio.h>
int main()
{
    int i = 1;

    while (i <= 100)
    {
        if(i % 5 == 0 && i % 7 == 0)
            printf("%d\n",i);
            i++;
    }
    
}