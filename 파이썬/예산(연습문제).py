# 이분탐색
def solution(budgets, M):
    left, right = 1, max(budgets)
    while left < right:
        middle = (left + right + 1) // 2
        if sum(min(middle, budget) for budget in budgets) <= M:
            left = middle
        else:
            right = middle - 1
    return left


# 정렬
'''
def solution(budgets, M):
    max_require = max(budgets) 
    budgets.sort(reverse=True)
    
    while budgets:
        if budgets[-1] * len(budgets) < M:
            M -= budgets.pop()
        else:
            return M // len(budgets)
    return max_require
'''
