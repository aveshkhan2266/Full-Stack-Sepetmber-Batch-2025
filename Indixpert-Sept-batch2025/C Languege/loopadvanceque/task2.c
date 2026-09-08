#include <stdio.h>
#include <conio.h>
int main()
{
    int num, r, a = 0;

    printf("Enter three digit number=");
    scanf("%d", &num);

    while (num != 0)
    {
        r = num % 10; // reminder(ek ek number le rahai hai)
        printf("reminder = %d\n", r);
        a = a * 10 + r; // reverser number bana raha hai
        printf("reverser = %d\n", a);
        num = num / 10; // number break kar raha hai
        printf("number = %d\n", num);
    }

    printf("reverser number=%d",a);
}
#include <stdio.h>
#include <conio.h>
int main()
{
    int num, r, a = 0;

    printf("Enter three digit number=");
    scanf("%d", &num);

    while (num != 0)
    {
        r = num % 10; // reminder(ek ek number le rahai hai)
        printf("reminder = %d\n", r);
        a = a * 10 + r; // reverser number bana raha hai
        printf("reverser = %d\n", a);
        num = num / 10; // number break kar raha hai
        printf("number = %d\n", num);
    }

    printf("reverser number=%d",a);
}