#include <stdio.h>
struct student
{
    int roll_no, mark;
    char name[20];
};
int main()
{
    int i;
    struct student ob;
    ob.roll_no = 45;
    ob.mark = 2;
    printf("enter name=");
    gets(ob.name);
    printf("%d", ob.roll_no);
    printf("%s", ob.name);
    printf("%d", ob.mark);
}