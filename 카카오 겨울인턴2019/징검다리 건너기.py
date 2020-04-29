def is_poss(middle, stones, k):
    empty = 0
    for stone in stones:
        if stone - middle < 0:
            empty += 1
            if empty == k:
                return False
        else:
            empty = 0
    return True

def solution(stones, k):
    left, right = min(stones), max(stones)
    
    while left < right: # 최댓값 탐색
        middle = (left + right + 1) // 2 # 주의, 최솟값 탐색과 비교
        if is_poss(middle, stones, k):
            left = middle
        else:
            right = right - 1
            
    return right

