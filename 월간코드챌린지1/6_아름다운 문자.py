def get_max(string):
    left, right = 0, len(string) - 1
    if left == right:
        return 0

    if string[left] == string[right]:
        return max(get_max(string[left+1:]), get_max(string[:right]))
    else:
        return right - left


def solution(s):
    answer = 0
    if len(set(s)) == 1:
        return answer
    N = len(s)

    for start in range(N):
        for end in range(start, N):
            answer += get_max((s[start:end+1]))
    return answer
