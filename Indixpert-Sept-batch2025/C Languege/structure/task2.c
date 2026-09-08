#include<stdio.h>
struct salesman
{
    char name[20];
    int mobilenumber,purchasing;
};
int main()
{
    int i;
    struct salesman ob;
    printf("Enter Name = ");
    gets(ob.name);
    printf("Enter Mobile Number = ");
    scanf("%d",&ob.mobilenumber);
    printf("Enter Purchasing = ");
    scanf("%d",&ob.purchasing);
}