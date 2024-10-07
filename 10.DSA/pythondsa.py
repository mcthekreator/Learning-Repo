def linear_search(list, target):
    """
    Returns the index potiiton of the target if found, else returns None
    """
    for i in range (0, len(list)):
        if list[i] == target:
            return i
    return None    



def verify (index):
    if index is not None:
        print(f"The target was found at index {index}")
    else:
        print("The target was not found in the list")
        
numbers = [1,2,3,4,5,6,7,8,9,10]        
        