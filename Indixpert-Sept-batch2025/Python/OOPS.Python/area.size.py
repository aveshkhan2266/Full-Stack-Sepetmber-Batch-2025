from abc import ABC, abstractmethod

class Shape(ABC):

    @abstractmethod
    def area(self):
        pass

class circle(Shape):
    def __init__(self, r):
        self.r = r 

    def area(self):
        print("Circle Area =", 3.14 * self.r * self.r )

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        print("Square Area =", self.side * self.side)

c = circle(7)
c.area()

s = Square(5)
s.area()