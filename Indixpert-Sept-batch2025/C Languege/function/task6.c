// no return and yes argumnet

#include <stdio.h>

void add(int, int);

int main()
{
    int x=90,y=90;
    
    add(x, y);
    
    return 0;


}

void add(int x, int y)
{
    printf("%d", x + y);
}