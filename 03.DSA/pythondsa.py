# Linear Search

# def Linear_search (list, target):
#     for i in range(len(list)):
#         if list[i] == target:
#             return i
#     return None

# def Verify(index):
#     if index is not None:
#         print(f"Element found at index: {index}")
#     else:
#         print("Element not found in the list.")
            
        
# numbers = [1, 5, 8, 10, 12, 15, 18, 20, 25]
# results = Linear_search(numbers,40)
# Verify(results)


# Binary_search
# def binary_sarch(list, target):
#     first = 0
#     last =  len(list) - 1
    
#     while first <= last:
#         midpoint = (first + last) //2
#         if list[midpoint] == target:
#             return midpoint
#         elif list[midpoint] < target:
#             first = midpoint + 1
#         else:
#             last = midpoint - 1
            

# def try_loop(list):
#     first = 0
#     last = len(list) - 1
#     while first <= last:
#         print("2") 


# numbers = [1, 2, 3, 4, 5]

# try_loop(numbers)                    



# Linear Search