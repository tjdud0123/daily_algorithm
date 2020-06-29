from fractions import gcd

# def gcd(a, b): # 속도 조금더 빠름
#     return a if b == 0 else gcd(b, a % b)


def solution(arr):
    # arr.sort()
    while len(arr) > 1:
        n, m = arr.pop(), arr.pop()
        arr.append(n*m // gcd(n, m))
    return arr.pop()
