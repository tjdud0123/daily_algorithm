from collections import defaultdict


def solution(n, results):
    chart = [[0] * n for _ in range(n)]  # 승패표
    WIN, LOSE = 1, -1
    for i, j in results:  # 내입장 wind = 상대방 lose
        chart[i-1][j-1], chart[j-1][i-1] = WIN, LOSE

    for me in range(n):
        wins = [opp for opp, rst in enumerate(chart[me]) if rst == WIN]
        while wins:
            loser = wins.pop()
            for opp, rst in enumerate(chart[loser]):
                if rst == WIN and chart[me][opp] == 0:
                    chart[me][opp], chart[opp][me] = WIN, LOSE
                    wins.append(opp)

    return len(['know' for x in chart if x.count(0) == 1])


def solution(n, results):
    answer = 0
    wins = defaultdict(set)
    loses = defaultdict(set)

    for a, b in results:
        wins[a].add(b)
        loses[b].add(a)

    for i in range(1, n+1):
        for loser in wins[i]:
            loses[loser] |= loses[i]
        for winner in loses[i]:
            wins[winner] |= wins[i]

    for i in range(1, n+1):
        if len(wins[i]) + len(loses[i]) == n - 1:
            answer += 1

    return answer
