#include<stdio.h>
int vowel(char[]);
int main()
{
    char data[20];

    printf("Enter Your string = ");
    gets(data);

    int x = vowel(data);

    printf("%d",x);

    return 0;
}
int vowel(char str[])
{
    int count = 0;

    for (int i = 0; str[i] != '\0'; i++)
    {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
        {
            count++;
        }
    }

    return count;
    
}
