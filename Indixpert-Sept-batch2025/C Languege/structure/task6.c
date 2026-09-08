#include <stdio.h>
struct student
{
    char name[20];
    int rollno;
};
struct student getdata(struct student);   // int getdata(int);
struct student getdata(struct student ob) // int getdata(int num);
{
    printf("enter name=");
    gets(ob.name);
    printf("enter roll number=");
    scanf("%d", &ob.rollno);
    getchar();
    return ob;
}
void show(struct student obj)
{
    printf("%s\n", obj.name);
    printf("%d\n", obj.rollno);
}

void main()
{
    struct student obb;
    obb = getdata(obb);
    show(obb);
}
