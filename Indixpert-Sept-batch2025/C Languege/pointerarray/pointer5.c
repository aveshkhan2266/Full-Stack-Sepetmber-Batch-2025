#include<stdio.h>
int main()
{
    char array[50],*p,*r;
    int count=1;

    printf("Enter Your String = ");
    gets(array);

    for (r = array; *r != '\0'; r++);
    for (p = array; p < r; p++,r--)
    {
        if (*p != *r)
        {
            count = 0;
            break;
        }
        
    }
    if (count == 1)
        printf("Palindrome String");
    
    else
        printf("Not Palindrome String");
    
    

}