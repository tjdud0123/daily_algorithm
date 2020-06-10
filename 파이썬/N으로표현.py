def solution(N, number):
    s = [set() for x in range(8)]
    for i, v in enumerate(s, 1):
        v.add(int(str(N)*i))
    for i in range(8):
        for j in range(i):
            for op1 in s[j]:
                for op2 in s[i-j-1]:
                    s[i].add(op1 * op2)
                    s[i].add(op1 - op2)
                    s[i].add(op1 + op2)
                    if op2 != 0:
                        s[i].add(op1 // op2)
        if number in s[i]:
            return i+1
    return -1
