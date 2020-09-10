from itertools import product


def solution(a):
    result = 0
    ROW, COL = len(a), len(a[0])
    col_nums = list(map(sum, zip(*a)))  # [2, 4, 2]
    cands = list(product(*[(1, 0) for _ in range(ROW)]))
    col_cands = [[] for _ in col_nums]
    for i, total in enumerate(col_nums):
        for cand in cands:
            if total == sum(cand):
                col_cands[i].append(cand)
    temp_cands = list(product(*[cand for cand in col_cands]))
    array_cands = list(map(lambda x: list(zip(*x)), temp_cands))
    for array in array_cands:
        for row in array:
            if row.count(1) % 2 != 0:
                break
        else:
            result = (result+1) % (pow(10, 7) + 19)

    return result
