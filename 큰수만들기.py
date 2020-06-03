from collections import deque


def solution(number, k):
    del_num, stack, number = 0, [], deque(number)

    while number and del_num < k:
        while stack and stack[-1] < number[0]:
            stack.pop()
            del_num += 1
            if del_num == k:
                break
        stack.append(number.popleft())

    stack = stack[:-k] if del_num != k else stack + list(number)

    return ''.join(stack)
