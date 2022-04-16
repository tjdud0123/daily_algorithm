def encryption(s):
    L = len(s)
    COL_NUM = math.ceil(L**0.5)
    splited = [s[i:i+COL_NUM] for i in range(0, L, COL_NUM)]
    splited = [x + ' ' *(COL_NUM - len(x)) for x in splited]
    # splited = map(lambda x:x + ' ' *(COL_NUM - len(x)), splited)
    arranged = [''.join(x).strip() for x in map(list, zip(*splited))]

    return ' '.join(arranged)