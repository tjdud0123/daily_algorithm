# 서영
def solution(answers, dic={1: 0, 2: 0, 3: 0}):
    num1 = [1, 2, 3, 4, 5]
    num2 = [2, 1, 2, 3, 2, 4, 2, 5]
    num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    for i, answer in enumerate(answers):
        if answer == num1[i % 5]:
            dic[1] += 1
        if answer == num2[i % 8]:
            dic[2] += 1
        if answer == num3[i % 10]:
            dic[3] += 1

    answer = sorted(dic.items(), key=lambda x: -x[1])
    max_num = answer[0][1]
    result = [k for k, v in dic.items() if v == max_num]

    return sorted(result)
