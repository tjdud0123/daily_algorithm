from collections import deque

def can_change(cur_word, words):
    cand = []
    for word in words:
        diff = [True for x, y in zip(cur_word, word) if x != y]
        if len(diff) == 1: 
            cand.append(word)
    return cand

def solution(begin, target, words):
    visited = set([begin])
    que = deque([(begin, 0)])
    while que:
        cur_word, cur_count = que.popleft()
        # 확인
        if cur_word == target:
            return cur_count
        # 탐색
        for word in can_change(cur_word, words):
            if word not in visited:
                que.append((word, cur_count + 1))
                visited.add(word)
    return 0