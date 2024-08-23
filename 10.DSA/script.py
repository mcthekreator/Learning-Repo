# def sequence_generator(n):

#     sequence_List = []

#     while n != 1:
#         sequence_List.append(n)
#         if n % 2 == 0:
#             n = n // 2
#         else:
#             n = 3 * n + 1

#     sequence_List.append(1)
#     print(" ".join(map(str, sequence_List)))

# sequence_generator(3)


def secondLargest_and_secondSmallest(a):
    a.sort()

    second_smallest = a[1]
    second_largest = a[-2]
    return [second_largest, second_smallest]


a = [1, 2, 3, 4, 5, 7, 8]
print(secondLargest_and_secondSmallest(a))
