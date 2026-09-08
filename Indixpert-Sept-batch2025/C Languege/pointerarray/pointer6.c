#include<stdio.h>
int main()
{
    char data[50],array[20],*p,*r;
    int count=0;

    printf("Enter String = ");
    gets(data);

    printf("Enter Word = ");
    gets(array);

   for (p = data; *p != '\0'; p++)
    {
        r = array;
        char *temp = p;

        while (*temp == *r && *r != '\0')
        {
            temp++;
            r++;
        }

        if (*r == '\0' && (*temp == ' ' || *temp == '\0'))
        {
            if (p == data || *(p-1) == ' ')
            {
                count++;
            }
        }
    }

    printf("Word Count = %d", count);

    return 0;

    
}