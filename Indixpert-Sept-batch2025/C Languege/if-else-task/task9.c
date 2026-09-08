#include <stdio.h>
#include <conio.h>

int main()
{
    float purchase, discount, net_payment;

    printf("Enter purchase value: ");
    scanf("%f", &purchase);

    if(purchase >= 10000)
    {
        discount=purchase*20 / 100;
    }
    else
    {
        discount=purchase*10 / 100;
    }

    net_payment = purchase - discount;

    printf("\nPurchase Value = %.2f", purchase);
    printf("\nDiscount = %.2f", discount);
    printf("\nNet Payment = %.2f", net_payment);

    return 0;
}