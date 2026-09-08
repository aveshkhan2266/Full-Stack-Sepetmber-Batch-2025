#include <stdio.h>
int main()
{
    int i, data[5], num, ind=-1, sum = 0;

    for (i = 0; i < 5; i++)
    {
        printf("Enter Your Number = ");
        scanf("%d", &data[i]);
    }

    printf("Search a number");
    scanf("%d", &num);

    for (i = 0; i < 5; i++)
    {
        if (num == data[i])
        {
            ind = i;
            break;
        }
        
    }


    if(ind==-1){
        printf("Given number not found");
    }
    else{
        printf("%d", ind);
    }

}