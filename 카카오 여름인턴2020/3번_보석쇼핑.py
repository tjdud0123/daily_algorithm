def solution(gems):

    TYPE_NUM = len(set(gems))
    GEM_NUM = len(gems)
    cur_shop = {gems[0]: 1}
    cand = []
    l_idx, r_idx = 0, 0
    DIST, RESULT = 0, 1

    while l_idx < GEM_NUM and r_idx < GEM_NUM:
        if len(cur_shop) < TYPE_NUM:
            r_idx += 1
            if r_idx == GEM_NUM:
                break
            cur_shop[gems[r_idx]] = cur_shop.get(gems[r_idx], 0) + 1
        else:
            cand.append((r_idx-l_idx, [l_idx+1, r_idx+1]))
            cur_shop[gems[l_idx]] -= 1
            if cur_shop[gems[l_idx]] == 0:
                del cur_shop[gems[l_idx]]
            l_idx += 1

    cand = sorted(cand, key=lambda x: (x[DIST], x[RESULT]))

    return cand[0][RESULT]
