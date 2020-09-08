def solution(weight):
    weight.sort()  # 작은 추 순서대로 정렬
    # nxt에 측정 범위 내에 있지 않는 제일 작은 값을 담아 둠 초기값:1
    nxt = 1
    for w in weight:
        # 그 다음 추가 nxt값 보다 크면 측정 불가능, 리턴
        if w > nxt:
            break
        nxt += w
    return nxt
