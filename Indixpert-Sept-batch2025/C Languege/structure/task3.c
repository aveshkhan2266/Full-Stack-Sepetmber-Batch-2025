#include <stdio.h>
struct salesman
{
    char name[20];
    int mobilenumber, purchasing;
};
int main()
{
    struct salesman obj[3];
    int i;
    for (i = 0; i < 3; i++)
    {
        printf("enter your name=");
        gets(obj[i].name);
        printf("enter your mobilenumber=");
        scanf("%d", &obj[i].mobilenumber);
        printf("enter your purchasing value=");
        scanf("%d", &obj[i].purchasing);
        getchar();
    }
    for (i = 0; i < 3; i++)
    {
        printf("%s\n", obj[i].name);
        printf("%d\n", obj[i].mobilenumber);
        printf("%d\n", obj[i].purchasing);
    }
}