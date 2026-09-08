// #include <stdio.h>
// int main()
// {
    //     int a, *r, *c;
    //     a = 5;
    //     r = &a;
    //     c = &r;
    //     printf("%d\n", *r);
    //     printf("%d\n", r);
    //     printf("%d\n", a);
    //     printf("%d\n", c);
    //     printf("%d\n", *c);
    //     printf("%d\n", **c);
//     char arr[] = {"helloeeee"}, *p;
//     int count = 0;
//     for (p = arr; *p != '\0'; p++)
//     {
//         if (*p == 'e')
//         {
//             count++;
//         }
//         printf("%c", *p);
//         printf("%d\n", p);
//     }
//     printf("%d", count);
// }

// #include<stdio.h>
// int main()
// {
//     int x,*r;

//     *r = &x;

//     printf("%p",*r);


//     return 0;
// }

#include<stdio.h>
int main()
{
    char array[50],ch,*p;
    int count = 0;

    printf("Enter Your String");
    gets(array);

    printf("Enter Your Word");
    scanf("%c",&ch);

    for(p = array; *p != '\0'; p++)
    {
        if (*p == ch)
        {
            count ++;
        }
        
    }
    printf("count = %d",count);
}
