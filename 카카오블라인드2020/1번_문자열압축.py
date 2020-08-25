# 풀이 1- count 전역으로 해서 사용
def solution(s):
    LENGTH = len(s)
    cand = [LENGTH]  # 1~len까지 압축했을때 길이 값

    for size in range(1, LENGTH):
        compressed = ""
        # string 갯수 단위로 쪼개기 *
        splited = [s[i:i+size] for i in range(0, LENGTH, size)]
        count = 1

        for j in range(1, len(splited)):
            prev, cur = splited[j-1], splited[j]
            if prev == cur:  # 이전 문자와 동일하다면
                count += 1
            else:  # 이전 문자와 다르다면
                compressed += (str(count) + prev) if count > 1 else prev
                count = 1  # 초기화

        compressed += (str(count) + splited[-1]) if count > 1 else splited[-1]
        cand.append(len(compressed))

    return min(cand)  # 최솟값 리턴

# 풀이 2 - stack 사용


def solution(s):
    LENGTH = len(s)
    STR, COUNT = 0, 1
    cand = [LENGTH]  # 1~len까지 압축했을때 길이 값

    for size in range(1, LENGTH):
        compressed = ""
        # string 갯수 단위로 쪼개기 *
        splited = [s[i:i+size] for i in range(0, LENGTH, size)]
        stack = [[splited[0], 1]]

        for unit in splited[1:]:
            if stack[-1][STR] != unit:  # 이전 문자와 다르다면
                stack.append([unit, 1])
            else:  # 이전 문자와 다르다면
                stack[-1][COUNT] += 1

        compressed += ('').join([str(cnt) + w if cnt >
                                 1 else w for w, cnt in stack])
        cand.append(len(compressed))

    return min(cand)  # 최솟값 리턴


''' 
*splited
    ['a', 'a', 'b', 'b', 'a', 'c', 'c', 'c'] 
    ['aa', 'bb', 'ac', 'cc']
    ['aab', 'bac', 'cc']
    ['aabb', 'accc']
    ['aabba', 'ccc']
    ['aabbac', 'cc']
    ['aabbacc', 'c']
'''
