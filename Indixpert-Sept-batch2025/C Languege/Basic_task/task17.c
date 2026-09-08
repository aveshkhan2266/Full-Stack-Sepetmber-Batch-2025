#include<stdio.h>
#include<conio.h>
int main()
{
    int grosssalary,basic,hra,da;

    printf("enter a basic salary = ");
    scanf("%d",&basic);

    printf("enter a hra salary = ");
    scanf("%d",&hra);

    printf("enter a da salary = ");
    scanf("%d",&da);


    grosssalary=basic+hra+da;

    printf("\nHRA = %d", hra);
    printf("\nDA = %d", da);
    printf("\nGross Salary = %d", grosssalary);


    return 0;

}
