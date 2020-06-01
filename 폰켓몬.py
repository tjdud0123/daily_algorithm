def solution(nums):
    types, max_num = len(set(nums)), len(nums)//2
    return types if max_num >= types else max_num
