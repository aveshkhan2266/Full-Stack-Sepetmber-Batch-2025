#include<stdio.h>
int main()
{
    char array[100];
    int i, vowels = 0, constant = 0;

    printf("Enter string = ");
    gets(array);

    for (i = 0; array[i] != '\0'; i++)
    {
        if ((array[i] >= 'A' && array[i] <= 'Z') || (array[i] >= 'a' && array[i] <= 'z')) 
        {
            if (array[i] == 'A' || array[i] == 'E' || array[i] == 'I' || array[i] == 'O' || array[i] == 'U' || 
            array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u')
            {
                vowels++;
            }
            else
            {
                constant++;
            }
            
        }
       
    }
    printf("Vowels = %d\n",vowels);
    printf("constant = %d\n",constant);
    
}