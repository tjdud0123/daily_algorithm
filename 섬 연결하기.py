import heapq # 최소값 반복 추출, 삽입
from collections import defaultdict # 딕셔너리형태 그래프 정보 저장

def solution(n, costs):

    dists = defaultdict(list)
    for s, e, c in costs :
        dists[s].append((c, e))
        dists[e].append((c, s))

    ''' print(dists)
    {0: [(1, 1), (2, 2)], 
     1: [(1, 0), (5, 2), (1, 3)], 
     2: [(2, 0), (5, 1), (8, 3)], 
     3: [(1, 1), (8, 2)]}
    '''
    
    visited, answer = set([0]), 0 # 방문된 노드, 건설비용
    cand = dists[0] # 연결 가능한 노드 후보
    heapq.heapify(cand)

    
    while len(visited) < n: # 모든 간선 방문할 때 까지
        cost, end = heapq.heappop(cand) # 현재 연결된 노드들에서 가장 비용이 적은 다리
        if end not in visited: # 새 연결 노드가 연결되지 않은 노드라면
            answer += cost
            visited.add(end)
            # 후보에 새로 연결 가능한 노드 추가
            for c,e in dists[end]:
                heapq.heappush(cand, (c, e))
            
    return answer
