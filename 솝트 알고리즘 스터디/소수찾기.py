def solution(n):
    primes = [False, False] + [True] * (n-1)
    count = 0
    for i in range(2, n+1):
        if primes[i]:
            count += 1
            primes[i*2::i] = [False] * len(primes[i*2::i])
    return count
