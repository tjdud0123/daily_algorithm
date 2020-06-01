from collections import deque


def solution(cacheSize, cities):
    cache = deque([])
    answer = 0

    if cacheSize == 0:  # 캐시가 없을 때
        return len(cities) * 5

    for city in cities:
        city = city.lower()  # 대소문자 구분없음
        # 캐시위에 있을 때 (hit)
        if city in cache:
            cache.remove(city)
            cache.append(city)
            answer += 1
            continue
        # (miss)
        if len(cache) == cacheSize:  # 자리가 없다면
            cache.popleft()
        cache.append(city)
        answer += 5
    return answer


'''
import heapq
def solution(cacheSize, cities): # 11, 15, 18, 19 실패
    TIME, CITY = 0, 1
    cache = []  # 시간과 함께 저장
    cur_cache = set()  # 캐시위에 올라와있는 도시
    answer = 0

    if cacheSize == 0:  # 캐시가 없을 때
        return len(cities) * 5

    for time, city in enumerate(cities, 1):
        city = city.lower()

        # 캐시위에 있을 때 (hit)
        if city in cur_cache:
            for i, c in enumerate(cache):
                if c[CITY] == city:
                    cache[i] = (time, city)
                    break
            answer += 1
            continue

        # (miss)
        if len(cache) == cacheSize:  # 자리가 없다면
            cur_cache.remove(heapq.heappop(cache)[CITY])
        heapq.heappush(cache, (time, city))
        cur_cache.add(city)
        answer += 5

    return answer
'''
