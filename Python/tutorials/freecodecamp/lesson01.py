# naming variables
greeting = "helo world"
first_name = "dave"
user1 = "first user"
myName = "<NAME>"
print(myName)

# operators
print(2+2)
print (4-2)
print (6*2)
print(24 / 5)
print(24//5)
print(round(24/5))
print(2 ** 3)



#combing assignment and arithmetic operator
meaning = 42
meaning += 1
print(meaning)
meaning -= 2
print(meaning)
meaning *= 2
print(meaning)
meaning /= 2
print(meaning)
meaning = round(meaning)
print(meaning)

# comparison operators
print(43 == 43)
print(43 == 42)
print(43 != 43)
print(43 > 42)
print(43 < 43)
print(43 >= 42)
print(43 <= 43)

# string datatype

#literial assignment
first = "Dave"
last = "Smith"
print(type(first))
print(type(last) == str)
print(isinstance(first, str))

# constructor function
pizza = str("pepperoni")
print(type(pizza))
print(type(pizza) == str)
print(isinstance(pizza, str))


# String Method
print(first)
print(first.lower())
print(first.upper())
print(first)

print(first.title())
print(first.capitalize())
print(first.replace("Dave", "Smith"))

print(len(first))
first += "                                 "
first = "                    " + first
print(len(first))
