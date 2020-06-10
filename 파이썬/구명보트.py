def solution(people, limit):
    N = len(people)
    together, right = 0, N - 1
    people.sort()  # 정렬
    for left in range(N):
        while left < right:
            if people[left] + people[right] <= limit:
                together += 1
                right -= 1
                break
            right -= 1
    return N - together
