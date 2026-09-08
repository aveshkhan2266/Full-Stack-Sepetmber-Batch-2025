#include <stdio.h>
struct student
{
    char name[20];
    int rollno;
};
struct student *get(struct student ob[])
{
    int i;
    for (i = 0; i < 2; i++)
    {
        printf("Enter Your Name=");
        gets(ob[i].name);

        printf("Enter Your Roll Number=");
        scanf("%d", &ob[i].rollno);

        getchar();
    }
    return ob;
}
void show(struct student obj[])
{
    for (int i = 0; i < 2; i++)
    {
        printf("%s\n", obj[i].name);
        printf("%d\n", obj[i].rollno);
    }
}
void main()
{
    struct student obb[10];
    struct student *p;

    p = get(obb);
    show(p);
}
