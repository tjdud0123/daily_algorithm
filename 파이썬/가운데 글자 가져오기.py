def solution(s):
    d, m = divmod(len(s), 2)
    return s[d] if m == 1 else s[d-1:d+1]
