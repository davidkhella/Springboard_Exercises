# def add(a,b):
#     """tests
#     >>>sum(5,5)
#     10
    
#     """
    
#     return a + b

# from turtle import *
# color('red', 'yellow')
# begin_fill()
# while True:
#     forward(200)
#     left(170)
#     if abs(pos()) < 1:
#         break
# end_fill()
# done()

# import turtle
# colors = ['red','purple','blue', 'green','orange','yellow']
# t = turtle.Pen()
# turtle.bgcolor('black')
# for x in range(360):
#     t.pencolor(colors[x % 6])
#     t.width(x/100 + 1)
#     t.forward(x)
#     t.left(59)


from math import sqrt

class Triangle:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    @classmethod
    def random(cls):
        return cls(234,54)

    def get_hypotenuse(self):
        return sqrt(self.a ** 2 + self.b ** 2)
