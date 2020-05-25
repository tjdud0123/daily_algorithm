def isBeautiful(year):
    LENGTH = len(str(year))
    year_set = list(set(str(year)))
    return LENGTH == len(year_set)


def solution(p):
    next_year = p + 1
    while not isBeautiful(next_year):
        next_year += 1
    return next_year
