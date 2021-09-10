from collections import defaultdict

def solution(table, languages, preference):
    MAX_SCORE = 5
    user_score = defaultdict(int)
    user_lang = { lang: pre for lang, pre in zip(languages, preference) }
    # {'PYTHON': 7, 'C++': 5, 'SQL': 5}
                 
    for job_info in table:
        arr = job_info.split(' ')
        job_name, score_arr = arr[0], arr[1:]
        for idx, lang in enumerate(score_arr):
            job_score = MAX_SCORE-idx
            prefer_score = user_lang.get(lang, 0)
            user_score[job_name] += (job_score * prefer_score)
        # 정렬 (동일점수시 - 사전순반영)
        JOB_NAME, TOTAL_SCORE = 0, 1
        sorted_dict = sorted(user_score.items())
        max_score = max(sorted_dict, key=lambda x: x[TOTAL_SCORE])
    return max_score[JOB_NAME]
