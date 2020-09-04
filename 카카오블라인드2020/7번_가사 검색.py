from collections import defaultdict
from bisect import bisect_left, bisect_right


def count_by_lange(lst, start, end):
    return bisect_right(lst, end) - bisect_left(lst, start)


def solution(words, queries):
    answer = []
    cands = defaultdict(list)
    reverse_cands = defaultdict(list)
    # 길이별 저장
    for word in words:
        cands[len(word)].append(word)
        reverse_cands[len(word)].append(word[::-1])
    # 정렬 O(NlogN)
    for cand in cands.values():
        cand.sort()
    for cand in reverse_cands.values():
        cand.sort()
    # 탐색 O(N * logM)
    for query in queries:
        if query[0] == '?':  # 와일드카드 접두사 일 때
            lst = reverse_cands[len(query)]
            start, end = query[::-1].replace('?',
                                             'a'), query[::-1].replace('?', 'z')
        else:  # 와일드카드 접미사 일 때
            lst = cands[len(query)]
            start, end = query.replace('?', 'a'), query.replace('?', 'z')
        answer.append(count_by_lange(lst, start, end))

    return answer


''' 효율성 실패
import re
def solution(words, queries):
    answer = []
    for query in queries:
        query = query.replace('?', '.')
        count = 0
        for word in words:
            if re.findall(query, word) and len(query) == len(word):
                count += 1
        answer.append(count)
    return answer
'''
