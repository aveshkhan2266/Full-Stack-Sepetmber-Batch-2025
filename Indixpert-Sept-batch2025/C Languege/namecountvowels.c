#include<stdio.h>
#include<string.h>
int main()
{
    char name[20];
    int a=0;
   
    printf("Enter your name: ");
    scanf("%c",&name);
    
    for (int i=0 ; i<=strlen(name[20]); i++)
    {
        /* code */
        if ((name[i]=='a') || (name[i]== 'e') || (name[i]== 'i') || (name[i]== 'o') || (name[i]== 'u'))
        {
            printf("%c",name[i]);
            a++;
        }
        printf("%d",a);
    }
    }
    

    
  