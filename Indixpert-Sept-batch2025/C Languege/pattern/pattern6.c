// #include<stdio.h>
// int main()
// {
//     int r,c;

//     for (r = 1; r <= 5; r++)
//     {
//         for (c = 1; c <= 3; c++)
//         {
//             if(r==1 || r==3)
//                 {
//                     printf(" # @");

//                     printf(" ");
//                 }
               
//             if (r==2 || r==4)
//             {
//                 printf(" @ #");

//                 printf(" ");
//             }
                
//         }
        
//         printf("\n");
//     }
    
// }

#include<stdio.h>
int main()
{
    int r,c;

    for (r = 1; r < 5; r++)
    {
        for (c = 1; c < 5; c++)
        {
            if (c == 1 || c == 3 || c == 5)
            {
                printf("#");
                
                printf(" ");
            }
            if (r==1 || r==3 || r==5)
            {
                printf("@");

                printf(" ");
            }
            
            
        }        

        printf("\n");
    }
    
}