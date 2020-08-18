# 어피치 쇼핑습관 - 정확성 100 효율성 10/15

from collections import deque, defaultdict


def solution(gems):

    gem_set = set(gems)
    LEN = len(gem_set)
    get_set = set()
    get_dict = defaultdict(int)
    sidx, eidx = 1, 0
    que = deque(gems)
    get_que = deque([])
    cand = []
    min_len = 999999
    flag = False

    while que:
        item = que.popleft()
        get_que.append(item)
        get_set.add(item)
        get_dict[item] += 1
        eidx += 1
        while get_que and get_dict[get_que[0]] > 1:
            get_dict[get_que.popleft()] -= 1
            sidx += 1

        if flag or gem_set & get_set == gem_set:
            if min_len > eidx - sidx:
                cand = [sidx, eidx]
                min_len = eidx - sidx
                if min_len == LEN-1:
                    return cand
                if not flag:
                    flag = True
    return cand

# solution(["A", "B", "A", "A", "B","B", "A", "A", "B","A", "A", "B","B","C","D","E","B","A","A","B","A", "A", "B","B","C", ]	)
# [14, 18]


def solution(gems):
    UNIQUE_GEM = set(gems)
    TYPE_NUM = len(UNIQUE_GEM)
    GEM_NUM = len(gems)
    cur_shop = { gem : 0 for gem in UNIQUE_GEM }
    cand = []
    l_idx, r_idx = 0, 0
    
    cur_shop[gems[0]] += 1 
    while l_idx < GEM_NUM and r_idx < GEM_NUM:
        if 0 in cur_shop.values():
            r_idx += 1
            if r_idx == GEM_NUM:
                break;
            cur_shop[gems[r_idx]] += 1
        else:
            cand.append((r_idx-l_idx, [l_idx+1, r_idx+1]))
            cur_shop[gems[l_idx]] -= 1
            l_idx += 1

    cand = sorted(cand, key = lambda x: (x[0], x[1]))

    return cand[0][1]
            
