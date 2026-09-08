#include<stdio.h>
int main()
{
    int array[6],i,del,pos = -1,a;
   
    for(i=0;i<=5;i++)
    {
        printf("Enter Number");
        scanf("%d",&array[i]);
    }
    
    printf("Enter delete number = ");
    scanf("%d",&del);

    for(i=0;i<=5;i++)
    {
        if(array[i] == del)
        {
            for(a = i; a < 5; a++)
            {
                array[a] = array[a+1];
            }
        }
    }
for (i = 0; i < 5; i++)
{
    printf("%d\n",array[i]); 
}


} 