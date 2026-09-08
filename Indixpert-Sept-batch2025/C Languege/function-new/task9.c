#include<stdio.h>
#include<conio.h>

void evenOdd(int array[], int size);

void main()
{
    int array[20];
    int size,i;

    printf("Enter array size = ");
    scanf("%d",&size);

    printf("enter %d number:\n",size);

    for (i = 0; i < size; i++)
    {
        scanf("%d",&array[i]);
    }

    evenOdd(array,size);

    getch;    
}
void evenOdd(int array[],int size)
{
    int i;
    int even = 0;
    int odd = 0;

    for (i = 0; i < size; i++)
    {
        if(array[i] % 2 == 0)
        {
            even++;
        }
        else
        {
            odd++;
        }
    }
    printf("total even number = %d\n",even);
    printf("total odd number = %d",odd);
    
}