from collections import deque


def solution(n):
    # 뚜개의 큐생성 ; 연속된 수 넣고 빼고 반복
    left_que, right_que = deque([1]), deque(range(2, n+1))
    sum_que, cnt = 1, 0

    while right_que or left_que:
        if sum_que < n:  # 합이 n보다 작으면 추가
            new = right_que.popleft()
            left_que.append(new)
            sum_que += new
        else:
            # 합이 n보다 크거나 같으면 제거
            sum_que -= left_que.popleft()
        if sum_que == n:  # 합이 n과 같으면 경우의수 +1
            cnt += 1

    return cnt
