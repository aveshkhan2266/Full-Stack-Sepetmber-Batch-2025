// #include <stdio.h>
// int main()
// {
//     int data[7], i, num,j;
//     for (i = 0; i <= 7; i++)
//     {
//         printf("Enter Your Number = ");
//         scanf("%d", &data[i]);
//     }

    
//         printf("Enter Delete Number = ");
//         scanf("%d", &num);
    
//     for (i = 0; i < 7; i++)
//     {
//         if (data[i] == num)
//         {
//             for (j = i; j < 7; j++)
//             {
//              data[j]=data[j+1] ;
//             }
            
//         }
         
//     }
//     for(i=0;i<6;i++)
//     {
//         printf("%d ",data[i]);
//     }


    
// }

#include<stdio.h>
int main()
{
    int data[7],i,num,j;

    for (i = 0; i <= 7; i++)
    {
        printf("Enter Your Number = ");
        scanf("%d",&data[i]);
    }
    
    printf("Enter Your delete Number = ");
    scanf("%d",&num);

    for (i = 0; i < 7; i++)
    {
        if (data[i] == num)
        {
            for (j = i; j < 7; j++)
            {
                data[j] = data[j+1];
            }
            
        }
        
    }

    for (i = 0; i < 6; i++)
    {
        printf("%d",data[i]);
    }
    
    
}