def isort(original_array):
    """
    An reproduction of the insertion sort algorithm as shown in
    'Introduction to Algorithms' by Cormen. Calculated runing
    time is O(n**2).

    Arguments
    ---------
    original_array: A list to be sorted

    Returns
    -------
    List: Same list but sorted.

    """
    array = original_array.copy() # Copy so that the original doesn't change

    for i, key in enumerate(array[1:]):

        while i >= 0 and array[i] > key:
            array[i+1] = array[i]
            i -= 1
        array[i+1] = key

    return array

def verify_sorted(array):
    """
    A fuction that verifies if a given list is sorted.

    Arguments
    ---------
    array: A list of n elements.

    Returns
    -------
    Boolean: True if the list is sorted from smallest to biggest, else False.

    """
    return all([prev < cur for prev, cur in zip(array, array[1:])])
