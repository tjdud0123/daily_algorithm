import itertools
from collections import defaultdict


def solution(total_sp, skills):
    max_node = max(itertools.chain(*skills))
    node = {}
    sp = defaultdict(int)

    for p_skill, c_skill in skills:
        node[p_skill] = node.get(p_skill, []) + [c_skill]

    for i in range(1, max_node+1):
        if i not in node:
            sp[i] = 1

    while node:
        for key, value in node.items():
            sum_point = 0
            for child in value:
                if sp[child]:
                    sum_point += sp[child]
                else:
                    break
            else:
                sp[key] = sum_point
                node[key] = []
        node = {key: value for key, value in node.items() if value}

    init_point = total_sp // sum(sp.values())
    return [init_point*point for skill, point in sorted(sp.items(), key=lambda x:x[0])]
