from collections import Counter
def solution(participant, completion):
    p_num = Counter(participant)
    c_num = Counter(completion)
    p_num.subtract(c_num)
    return list(p_num.elements())[0]