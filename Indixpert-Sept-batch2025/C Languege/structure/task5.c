#include <stdio.h>
struct student
{
    char name[20];
    int rollno, hindi, english, math, scince, computer;
};
int main()
{
    struct student ob[10];
    int i, sum = 0, percentage;
    for (i = 0; i < 2; i++)
    {
        printf("Enter Your Name=");
        gets(ob[i].name);
        printf("Enter Your Roll-no=");
        scanf("%d", &ob[i].rollno);
        printf("Enter Your Hindi Marks=");
        scanf("%d", &ob[i].hindi);
        printf("Enter Your English Marks=");
        scanf("%d", &ob[i].english);
        printf("Enter Your Math Marks=");
        scanf("%d", &ob[i].math);
        printf("Enter Your Scince Marks=");
        scanf("%d", &ob[i].scince);
        printf("Enter Your Computer Marks=");
        scanf("%d", &ob[i].computer);

        getchar();
    }
    for (i = 0; i < 2; i++)
    {
        sum = ob[i].hindi + ob[i].english + ob[i].math + ob[i].scince + ob[i].computer;

        printf("%d\n", sum);

        percentage = sum / 5;

        printf("%d\n", percentage);
    }
}