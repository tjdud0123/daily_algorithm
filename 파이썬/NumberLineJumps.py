def kangaroo(x1, v1, x2, v2):
    is_1_fast = v1 > v2
    while (is_1_fast and x1 < x2) or (not is_1_fast and x1 > x2):
        x1 += v1
        x2 += v2
        if x1 == x2:
            return 'YES'
    return 'NO'