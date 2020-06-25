def solution(s):
    cand = []
    N = len(s)

    for start in range(N):
        for end in range(start+1, N+1):
            cand_string = s[start:end]
            if cand_string == cand_string[::-1]:
                cand.append(len(cand_string))

    return max(cand)
