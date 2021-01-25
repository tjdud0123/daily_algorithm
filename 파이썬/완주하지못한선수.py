def solution(participant, completion):
    NOT_COMPLE = 1
    table = {}
    for p in participant:
        table[p] = table.get(p, 0) + 1
    for c in completion:
        table[c] -= 1
    return [k for k, v in table.items() if v == NOT_COMPLE][0]