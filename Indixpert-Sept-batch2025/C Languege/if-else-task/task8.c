#include<stdio.h>
#include<conio.h>
int main()
{
    int kilometer,R;

    printf("enter a kilometer = ");
    scanf("%d",&kilometer);

    if(kilometer > 300)
    {
        R=kilometer*25;
            printf("your total amount = %d",R);

    }
    else
        {
            R=kilometer*22;
                printf("your total amount = %d",R);
        }
}