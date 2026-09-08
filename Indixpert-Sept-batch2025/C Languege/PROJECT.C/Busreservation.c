#include <stdio.h>
#include <string.h>

int main()
{
    char user[20], pass[20];
    int seats[10] = {0};
    int choice, seat, route;
    int price = 0, total = 0;

    printf("==== BUS RESERVATION ====\n");

    printf("\n--- LOGIN ---\n");
    printf("Enter username: ");
    scanf("%s", user);
    printf("Enter password: ");
    scanf("%s", pass);

    if (strcmp(user, "avesh") != 0 || strcmp(pass, "1234") != 0)
    {
        printf("\nWrong username or password!\n");
        return 0;
    }

    printf("\nLogin successful!\n");

    printf("\n--- BUS ROUTES ---\n");
    printf("1. Jodhpur to Jaipur (300)\n");
    printf("2. Jaipur to Delhi (500)\n");
    printf("3. Delhi to Ahmedabad (700)\n");
    printf("Choose route (1-3): ");
    scanf("%d", &route);

    if (route == 1)
    {
        printf("\nYou selected: Jodhpur to Jaipur\n");
        price = 300;
    }
    else if (route == 2)
    {
        printf("\nYou selected: Jaipur to Delhi\n");
        price = 500;
    }
    else if (route == 3)
    {
        printf("\nYou selected: Delhi to Ahmedabad\n");
        price = 700;
    }
    else
    {
        printf("\nInvalid route!\n");
        return 0;
    }

    while (1)
    {
        printf("\n1. Book Ticket\n");
        printf("2. Cancel Ticket\n");
        printf("3. Show Seats\n");
        printf("4. Exit\n");
        printf("------------------\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        if (choice == 1)
        {
            printf("\nEnter seat number (1-10): ");
            scanf("%d", &seat);

            if (seat < 1 || seat > 10)
                printf("Invalid seat number!\n");
            else if (seats[seat - 1] == 1)
                printf("Seat already booked!\n");
            else
            {
                seats[seat - 1] = 1;
                total += price;
                printf("Seat booked successfully! Ticket price = %d\n", price);
            }
        }
        else if (choice == 2)
        {
            printf("\nEnter seat number (1-10) to cancel: ");
            scanf("%d", &seat);

            if (seat < 1 || seat > 10)
                printf("Invalid seat number!\n");
            else if (seats[seat - 1] == 0)
                printf("Seat not booked!\n");
            else
            {
                seats[seat - 1] = 0;
                total -= price;
                printf("Ticket cancelled successfully! %d refunded.\n", price);
            }
        }
        else if (choice == 3)
        {
            printf("\n--- SEAT STATUS ---\n");
            for (int i = 0; i < 10; i++)
            {
                if (seats[i] == 0)
                    printf("Seat %d: Available\n", i + 1);
                else
                    printf("Seat %d: Booked\n", i + 1);
            }
            printf("\nTotal Amount Collected: %d\n", total);
        }
        else if (choice == 4)
        {
            printf("\nThank you for using Bus Reservation!\n");
            printf("Total collected amount: %d\n", total);
            break;
        }
        else
            printf("Invalid choice!\n");
    }

    return 0;
}