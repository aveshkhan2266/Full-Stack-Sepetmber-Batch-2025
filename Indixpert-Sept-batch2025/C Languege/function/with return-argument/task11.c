#include<stdio.h>
void main()
{
    char arr[10];
    printf("enter your arrya");
    gets(arr);

    char *p;
   
    for(p=arr;*p!='\0';p++)
    {
        printf("%p",*p);

    }
}