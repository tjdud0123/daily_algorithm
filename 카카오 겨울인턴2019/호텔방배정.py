def solution(k, room_number):
    room_dic = {}
    result = []
    for req in room_number: # 요청
        visit = [req] # 예약 되었는지 확인 리스트
        while req in room_dic: # 노드가 있으면 (방문을 했었다면)
            req = room_dic[req]
            visit.append(req) # 예약돼서 스킵한 방
        result.append(req) # 빈방이면
        for j in visit: # 확인했던 방들 다 다음 방으로
            room_dic[j] = req+1
    return result
