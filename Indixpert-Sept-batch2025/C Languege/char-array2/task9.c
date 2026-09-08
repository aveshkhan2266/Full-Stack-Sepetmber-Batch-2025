#include<stdio.h>
int main()
{
    char array[20];
    int i,j,k;

    printf("Enter String = ");
    gets(array);

    for (i = 0; array[i] != '\0'; i++)
    {
        for (j = i + 1; array[j] != '\0'; j++)
        {
            if (array[i] == array[j])
            {   
                for (k = j; array[k] != '\0'; k++)
                {
                    array[k] = array[k+1];
                }
                j--;
            }
            
        }
        
    }
    printf("Remove Duplicates = %s",array);
}
