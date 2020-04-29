from collections import defaultdict
import itertools

def solution(user_id, banned_id):
    cand = defaultdict(set) # {'fr*d*': {'frodo', 'fradi'}, 'abc1**': {'abc123'}}
    count = 0
    
    for bid in banned_id:
        for uid in user_id:
            if len(uid) != len(bid): # 길이가 다르면 스킵
                continue
            for u, b in zip(uid, bid): # zip으로 비교
                if u != b and b != '*':
                    break;
            else: # 다 만족했을 때
                cand[bid].add(uid)

    temp = [] # [{'frodo', 'fradi'}, {'abc123'}]
    for bid in banned_id: 
        if cand[bid]: # 해당 아이디가 있다면
            temp.append(cand[bid])
            
    temp2 = itertools.product(*temp) # [('fradi', 'abc123'), ('frodo', 'abc123')]
    result = []
    for x in map(set, list(temp2)): # 중복제거
        if len(x) == len(temp) and set(x) not in result: # 중복된게 없고 result에 없으면
            result.append(set(x))
            count += 1

    return count
