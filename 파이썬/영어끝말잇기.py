def solution(n, words):
    spoken = set([words[0]])
    prev = words[0]
    for i, word in enumerate(words[1:], 1):
        if prev[-1] == word[0] and word not in spoken:
            prev = word
            spoken.add(word)
        else:
            return [i % n+1, i//n+1]
    return [0, 0]
