#include<stdio.h>
int mylen(char[]);
int main()
{
    char string[50];

    int len;

    printf("Enter string = ");
    gets(string);

    len = mylen(string);

    printf("lenth = %d", len);

    return 0;
}
int mylen(char string[])
{
    int i;

    for(i = 0; string[i] != '\0'; i++);

    return i;

}