#include <stdio.h>
// return data type function_name (argument)
int add(); // prototype

int add() // defination
{
    int c, a = 5, b = 6;
    c = a + b;
   // printf("%d", c);
    return c; // returning statment
}

int main()
{
    int x = 4, y = 6, result;
    result=add(); // calling
    printf("%d", result);
}