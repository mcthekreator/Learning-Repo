def sequence_generator(n):
    sequence_List = []
    while n != 1:
        sequence_List.append(n)
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
    sequence_List.append(1)
    print(" ".join(map(str, sequence_List)))


sequence_generator(3)


def secondLargest_and_secondSmallest(a):
    a.sort()
    second_smallest = a[1]
    second_largest = a[-2]
    return [second_largest, second_smallest]


a = [1, 2, 3, 4, 5, 7, 8]
print(secondLargest_and_secondSmallest(a))


def split_by_null(arr):
    result = []
    current_subarray = []
    for item in arr:
        if item is None:
            if current_subarray:
                result.append(current_subarray)
                current_subarray = []
        else:
            current_subarray.append(item)

    if current_subarray:
        result.append(current_subarray)

    return result


input_array = [1, 2, 4, None, 3, 4, None, 5]
output = split_by_null(input_array)
print(output)


def simulate_algorithm(n):
    sequence = []
    while n != 1:
        sequence.append(n)
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
    sequence.append(1)
    print(" ".join(map(str, sequence)))


n = int(input().strip())
simulate_algorithm(n)
