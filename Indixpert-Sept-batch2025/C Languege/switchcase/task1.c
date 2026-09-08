#include<stdio.h>
int main()
{
    int n;

    printf("Enter Your Weak");
    scanf("%d",&n);

    switch (n)
    {
    case 1:
        printf("Monday");
        break;
    case 2:
        printf("Tuesday");    
        break;
    case 3:
        printf("Wednesday");
        break;
    case 5:
        printf("Thursday");
        break; 
    case 6:
        printf("Friday");
        break;
    case 7:
        printf("Saturday");
        break;
    case 8:
        printf("Sunday");
        break;                  
    default:
        printf("Enter a correct week number");
        break;
    }
}