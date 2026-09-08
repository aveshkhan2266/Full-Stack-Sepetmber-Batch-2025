#include<stdio.h>
int main()
{
    int r,c;

    for (r = 1; r <= 5; r++)
    {
        for (c = 1; c <= 6; c++)
        {
            if (r==3 || c==3 || r==c || c==6-r)
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