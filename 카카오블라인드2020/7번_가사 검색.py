import re


def solution(words, queries):
    answer = []
    for query in queries:
        query = query.replace('?', '.')
        count = 0
        for word in words:
            if re.findall(query, word) and len(query) == len(word):
                count += 1
        answer.append(count)
    return answer
