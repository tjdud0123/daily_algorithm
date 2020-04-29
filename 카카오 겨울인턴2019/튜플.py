# 하나씩 확인
def solution(s):
    confirm, answer = set(), []
    lst = [list(map(int, x.split(","))) for x in s[2:-2].split("},{")]
    lst.sort(key = lambda x: len(x)) # 갯수 작은것부터 나열

    for x in lst:
        for num in x:
            if num not in confirm:
                confirm.add(num)
                answer.append(num)
    return answer


# 정규 표현식과 카운터 사용
import re
from collections import Counter

def solution2(s):
    answer = []
    lst = re.findall('\d+',s) # ['2', '2', '1', '2', '1', '3', '2', '1', '3', '4']
    for num, _ in Counter(lst).most_common(): 
        # [('2', 4), ('1', 3), ('3', 2), ('4', 1)]
        answer.append(int(num))
    return answer

