#include <stdio.h>
#include <conio.h>
int main()
{
    int physics, chemistry, biology, mathematic, compter;
    int percentage, total;

    printf("Enter Physics Number = ");
    scanf("%d", &physics);

    printf("Enter Chemistry Number = ");
    scanf("%d", &chemistry);

    printf("Enter Biology Number = ");
    scanf("%d", &biology);

    printf("Enter Mathematics Number = ");
    scanf("%d", &mathematic);

    printf("Enter Computer Number = ");
    scanf("%d", &compter);

    total = physics + chemistry + biology + mathematic + compter;

    percentage = total / 5; 

    if (percentage >= 90)
        printf("Grade A");

    else if (percentage >= 80)
    {
        printf("Grade B");
    }

    else if (percentage >= 70)
    {
        printf("Grade C");
    }

    else if (percentage >= 60)
    {
        printf("Grade D");
    }

    else if (percentage >= 40)
    {
        printf("Grade E");
    }
    else
    {
        printf("grade F");
    }
 
}