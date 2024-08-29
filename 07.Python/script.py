# # variables
# # declaring variables
# miles = 10
# # declareing mulitple variables
# a, b, c = 0, 1, 3
# print(a, b, c)
# miles = "Derrick"
# miles.replace("Richard", "Derrick")
# print(miles)

# if miles == "Derrick":
#     print("The variable miles is now Derrick")
# else:
#     print("The variable miles is now")


# # def long_lop(a=33, b=33):
# #     if b > a:
# #         print("b is greater than a")
# #     elif a == b:
# #         print("a and b are equal")

# student_count = 100
# rating = 4.99
# is_published = False
# course_name = """ Mulitple Lines """
# print(type(course_name))

# # Dynamic Typing
# age: int = 30
# age = "Python"
# print(age)

# # Mutable and immutables
# x = 1
# print(id(x))
# x = x + 1
# print(id(x))

# x = [1, 2, 3,]
# print(id(x))

# x.append(4)
# print(id(x))

# Strings
# print("Enter first name")
# first_name = input()
# print("Enter second name")
# second_name = input()
# print("Your name is " + first_name + " " + second_name)
# print(len(first_name) + len(second_name))
# course = "Python Programming"
# print (len(course))
# print (course[0])
# print (course[-2])
# print (course[0:3])

# Escape Sequence
# message = "python \" Programming"
# print(message)
# message = "python \n Programming"
# print(message)
# message = """python
# Programming
# Tutorials
# """
# print(message)

# Formatting strings

# name = "John"
# first = "Richard"
# last = "McAdams"
# full = f"{first} {last}"
# full = f"{len(first)} {2 + 2}"
# print (full)

#  string methods
# import math
# course = "Python protgramming"
# print(course.upper())
# print(course.lower())
# print(course.title())
# print(course.strip())
# print(course.rstrip())  # removes white pace on right
# print(course.lstrip())  # remove white space on left
# print(course.find("pro"))  # find index of pro
# print(course.replace("P", "_"))
# print("Programming " in course)
# print("Programming " not in course)


# # Numbers
# x = 10 + 3
# x = 10 - 3
# x = 10 * 3
# x = 10 / 3
# x = 10 // 3
# x = 10 % 3
# x = 10 ** 3

# x = x + 1
# x += 1  # Agumentmented assignment operator
# print(x)

# # Number Methods
# PI = -3.14
# print(round(PI))
# print(abs(PI))
# print(math.floor(PI))

# # Type Conversion

# x = input("x: ")
# Y = x + 1
# print(int(x))
# print(float(x))
# print(bool(x))


# Conditional statments
# temprature = 15
# if temprature > 30:
#     print(" Its warn")
#     print(" Drintk water")
# elif temprature < 30:
#     print("Its cold")
# print("Done")

# # Ternary Operator

# message = "is warn" if temprature < 30 else "is code"
# print(message)


# # Logical Operators

# high_income: bool = False
# good_credit = True
# students = False

# if (high_income or good_credit) and not students:
#     print("Eligible")
# else:
#     print("Not eligible")


# meaning = 42
# print(' ')


# # Addition of two numebers


# num1 = int(input("Enter first number: "))
# num2 = int(input("Enter second number: "))
# sum_of_numbers = num1 + num2
# print(f"{num1} + {num2} = {sum_of_numbers}")


# Area of a triangle
# base = float(input("Enter base value: "))
# hieght = float(input("Enter hieght value: "))
# area = 1/2 * base * hieght
# print(f"The area of triangle value of : {base} and {hieght} is \n {area} ")

# Swap two variables
# user1_number = 10
# user2_number = 20
# placeholder = user1_number
# user1_number = user2_number
# user2_number = placeholder
# print(f"{user1_number} {user2_number}")

