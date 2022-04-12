from bisect import bisect_right

# [100 100 50 40 40 20 10], [5 25 50 120] => [6, 4, 2, 1]
def climbingLeaderboard(ranked, player):
    ans, cur_score = [], 0
    rank_table = getRankTable(ranked)
    sorted_score = ranked[::-1]
    for score in player:
        cur_score += score
        rank_idx = bisect_right(sorted_score, score)
        ans.append(rank_table[rank_idx] + 1)
    return ans

# [5, 4, 3, 3, 2, 1, 1, 0]
def getRankTable(ranked = []):
    ranking = []
    cur_ranking, cur_rank_score = 1, ranked[0]
    for rank in ranked:
        if cur_rank_score != rank:
            cur_ranking += 1
            cur_rank_score = rank
        ranking.append(cur_ranking)
    return ranking[::-1] + [0]