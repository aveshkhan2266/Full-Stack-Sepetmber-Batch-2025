// #include <stdio.h>
// int main()
// {
//     char data[10] ;
//     int i, j;

//     printf("Enter Your Array = ");
//     gets(data);

//     for (i = 0; data[i] != '\0'; i++);

//     for (j=i; j >= 0; j--)
//     {
//         printf("%c", data[j]);
//     }
// }

#include<stdio.h>
int main()
{
    char data[10];
    int i,j;

    printf("Enter Your Array = ");
    gets(data);

    for (i = 0; data[i] != '\0'; i++)

    for (j = i; j >= 0; i--)
    {
        printf("%c",data[j]);
    }
    
}