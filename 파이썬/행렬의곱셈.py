def solution(arr1, arr2):
    answer = [[0] * len(arr2[0]) for _ in range(len(arr1))]

    for i, r in enumerate(arr1):
        for j, c in enumerate(zip(*arr2)):
            answer[i][j] = sum([x*y for x, y in zip(r, c)])
    return answer
