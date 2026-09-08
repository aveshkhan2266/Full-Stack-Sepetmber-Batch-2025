#include<stdio.h>
struct student
{
    char name[20];
    int rollno,id;
};
int main()
{
    struct student obj[10];
    int i;
    for(i = 0; i < 10; i++)
    {
        printf("Enter Your Name=");
        gets(obj[i].name);
        printf("Enter Your Id=");
        scanf("%d",&obj[i].id);
        printf("Enter Your Roll no=");
        scanf("%d",&obj[i].rollno);
        getchar();
    }
      for (i = 0; i < 10; i++)
    {
        printf("%s\n", obj[i].name);
        printf("%d\n", obj[i].id);
        printf("%d\n", obj[i].rollno);
    } 
}