#include<stdio.h>
#include<conio.h>
int main()
{
    int english,hindi,math,science,bio;
    int total,percentage;

    printf("enter english marks");
    scanf("%d",&english);

    printf("enter hindi marks");
    scanf("%d",&hindi);

    printf("enter math marks");
    scanf("%d",&math);

    printf("enter science marks");
    scanf("%d",&science);

    printf("enter bio marks");
    scanf("%d",&bio);

    total = english + hindi + math + science + bio;
    
    printf("total = %d", total);

    percentage=total/5;

    printf("percentage = %d", percentage);

    return 0;
}