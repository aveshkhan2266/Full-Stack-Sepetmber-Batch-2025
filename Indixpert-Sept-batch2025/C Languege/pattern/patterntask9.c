#include<stdio.h>
int main()
{
    int r,c;

    for(r = 1; r <= 5; r ++)
    {
        for (c = 1; c <= 5; c++)
        {
            if (r == 3 || c == 3)
            {
                printf(" *");
            }
            else
            {
                printf("  ");
            }            
        }
        
        printf("\n");
    }
    
}