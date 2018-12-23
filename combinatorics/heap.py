def heap_backwards(array):
    """
    Original heap algorithm adapted to python, similar to the one seen in:
    Permutations by interchanges. B. R. Heap, The Computer Journal, 6(3) (1963).

    Arguments
    ---------
        Array: list of elements, numbers, letters or both.
    Returns
    -------
        A list of list containing n! permutations of the original list.

    """
    n = len(array)
    output = []

    def _swap(i1, i2):
        array[i1], array[i2] = array[i2], array[i1]

    def _generate(n):
        if n == 1: output.append(array.copy())
        else:
            for i in range(n):
                _generate(n-1)
                _swap(i if n%2 else 0, n-1)

    _generate(n)
    return output

def heap_forwards(array):
    """
    Same algorithm that the previous one, but with tail recursion.
    """
    n = len(array)
    outcomes = []

    def _generate(array, acc):
        if len(array) == 1:
            outcomes.append(acc + array)
        for i in range(len(array)):
            array[0], array[i] = array[i], array[0]
            _perm(array[1:] , acc + array[0:1])

    _generate(array, [])
    return outcomes
