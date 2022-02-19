def solution(heights):
    answer = []
    while heights:
        height = heights.pop()
        for idx in range(len(heights), 0, -1):
            if heights[idx-1] > height:
                answer.append(idx)
                break;
        else:
            answer.append(0)
    return answer[::-1]