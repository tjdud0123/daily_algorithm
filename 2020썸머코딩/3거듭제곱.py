from itertools import combinations


def solution(n):
    lst = [3**i for i in range(n)]
    lst_set = set(lst)
    for i in range(2, n):
        for a in list(combinations(lst, i)):
            lst_set.add(sum(a))
    return sorted(list(lst_set))[n-1]
