def gcd(a, b):
    return a if b == 0 else gcd(b, a % b)


def solution(n, m):
    a = max(n, m)
    b = min(n, m)
    return [gcd(a, b), n*m // gcd(a, b)]
