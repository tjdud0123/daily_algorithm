import math


def solution(n):
    num_three = ""
    if n < 3:
        return n
    while n // 3 >= 1:
        n, remain = divmod(n, 3)
        num_three = str(remain) + num_three
        if n < 3:
            num_three = str(n) + num_three

    reversed_str = str(int(num_three[::-1]))
    answer = 0

    for i, num in enumerate(reversed_str[::-1]):
        answer += int(num) * int(math.pow(3, i))

    return answer
