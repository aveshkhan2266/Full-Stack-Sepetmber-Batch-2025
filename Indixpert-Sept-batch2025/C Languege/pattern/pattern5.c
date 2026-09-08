#include<stdio.h>
int main()
{
    int r,c;

    for (r = 1; r <= 5; r++)
    {
        for (c = 1; c <= 5; c++)
        {
            
            if (r == 1 || r == 5 || r == 5)
            {
                printf(" *");
            }
            
            if (r == 2 || r == 4)
            {
                printf(" @");
            }
            
        }
        
        
        printf("\n");
    }
    
}