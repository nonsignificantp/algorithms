def msort(array):
    """
    Merge sort algorithm similar to the one in 'Introduction to Algorithms' by
    Cormen but with a more pythonic twist.

    Arguments
    ---------
        array: An unsorted list of n elements where n != 0.

    Return
    ------
        A incrementally sorted list.

    """
    return divide(array)


def divide(array):
    """
    Recursive spliting function, takes list and divides it in half.
    """

    elements = len(array)

    if elements == 1:
        return array

    lim = elements // 2
    return conquer(divide(array[0:lim]), divide(array=[lim:]))


def conquer(left, right):
    """
    Takes two lists and combines it into one sorted list by comparing the heads
    of each list and appending the smallest head into a new list.
    """

    array = []

    while left and right:
        if left[0] <= right[0]:
            array.append(left.pop(0))
        else:
            array.append(right.pop(0))

    return array + left + right
