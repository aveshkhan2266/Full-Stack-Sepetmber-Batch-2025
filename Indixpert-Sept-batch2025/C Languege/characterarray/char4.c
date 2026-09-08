#include<stdio.h>
int main()
{
    char data[20];
    int i,vowels=0,constant=0;

    printf("Enter Your String = ");
    gets(data);

    for (i = 0; data[i] != '\0'; i++)
    {
        if (data[i] == 'a' || data[i] == 'e' || data[i] == 'i' || data[i] == 'o' || data[i] == 'u')
        {
            vowels++;
        }
        else
        {
            constant++;
        }
        
    }
    printf("%d vowels\n",vowels);
    printf("%d constant\n",constant);


}