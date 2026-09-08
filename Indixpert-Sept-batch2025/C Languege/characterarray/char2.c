#include <stdio.h>
int main()
{
    char data[20];
    int i, count = 0;

    printf("Enter Your Array = ");
    gets(data);

    for (i = 0; data[i] != '\0'; i++)
    {
        if (data[i] == ' ')
        {
            count++;
        }
    }
    printf("%d", count);
}
