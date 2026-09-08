#include<stdio.h>
int lenth(char []);
int main()
{
    char string[50];
    int result;

    printf("Enter string =");
    gets(string);


    result = lenth(string);

    printf("%d",result);

    return 0;

}
int lenth(char string[])
{
    int count=0,i;

    for (i = 0; string[i] != '\0'; i++)
    {
        count++;    
    }
    
    return count;
}