def solution(clothes):

    clothes_num = {}
    for name, typ in clothes:
        clothes_num[typ] = clothes_num.get(typ, 0) + 1

    answer = 1
    for number in clothes_num.values():
        answer *= number+1

    return answer - 1
