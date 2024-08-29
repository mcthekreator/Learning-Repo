# name = 'Bob'
# age = 20

# print (name , " \n" ,age)

# Data types
from datetime import datetime
from typing import Final
number: int = 10
decimal: float = 2.5
text: str = "Hello World"
active: bool = False

names: list = ['Bob', 'Anna', 'Luigi']
coordinates: tuple = (1.2, 3.5)
unique: set = {1, 4, 2, 9}
data: dict = {'name': 'Bob', 'age': 20}


# Type Annotation
name: str = "bob"
age: int = "10"
print(age)

# constants
VERSION: Final[str] = "1.0.4.5"

# reusable code


def show_date():
    print("This is the ciurrent date and time:")
    print(datetime.now())


show_date()
show_date()
show_date()
show_date()


def greet(name):
    print(f"Hello, {name}!")


greet("John")
greet("Michael")


def add(num1, num2):
    return num1 + num2


print(add(4, 4))

# Classes


class Car:
    def __init__(self, brand, horsepower):
        self.brand = brand
        self.horsepower = horsepower
    def drive(self):
        print(f'{self.brand} is driving')
    
    def get_info(self):
        print(f'{self.brand} with {self.horsepower} horsepower')    

volvo: Car = Car('Vaolvo', 200)
print(volvo.colours)
print(volvo.horsepower)



