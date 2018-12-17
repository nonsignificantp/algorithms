def sqrRoot(num, x=1):
    x = (x + num/x) / 2
    if x == result:
        return result
    return sqrRoot(num, x)


def sqrRoot_min(num, x=1):
    result = (x + num/x) / 2
    return result if result == x else sqrRoot(num, result)
