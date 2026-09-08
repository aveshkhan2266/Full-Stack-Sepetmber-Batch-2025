#include<stdio.h>
void area();
int main()
{
    area();
}
void area()
{
    float r,circle;

    printf("Enter Radius = ");
    scanf("%f",&r);

    circle = 3.14 * r * r;

    printf("Area of circle = %.2f",circle);
}