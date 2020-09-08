import heapq
from collections import deque


def solution(jobs):
    N, REQUEST = len(jobs), 0
    jobs = deque(sorted(jobs))
    jobs_done, curr_time, waits, cand = 0, 0, 0, []
    # 일을 다 마칠 때 까지
    while jobs_done < N:
        # 요청이 들어온 것이 없을 때
        if not cand:
            request, time = jobs.popleft()
            curr_time = request + time
            waits += time
        # 요청이 들어온 것이 있을 때
        else:
            time, request = heapq.heappop(cand)
            curr_time += time
            waits += curr_time - request

        jobs_done += 1

        while jobs and jobs[0][REQUEST] <= curr_time:
            heapq.heappush(cand, jobs.popleft()[::-1])

    return waits // N
