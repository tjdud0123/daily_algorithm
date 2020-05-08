
def impossible(result):
    for x, y, a in result:
        if a == 0: # 기둥일 때
            if y != 0 and (x, y-1, 0) not in result and \
        (x-1, y, 1) not in result and (x, y, 1) not in result:
                return True
        else: # 보일 때
            if (x, y-1, 0) not in result and (x+1, y-1, 0) not in result and \
        not ((x-1, y, 1) in result and (x+1, y, 1) in result):
                return True
    return False

def solution(n, build_frame):
    result = set()
    
    for x, y, a, build in build_frame:
        item = (x, y, a)
        if build: # 추가일 때
            result.add(item)
            if impossible(result):
                result.remove(item)
        elif item in result: # 삭제할 때
            result.remove(item)
            if impossible(result):
                result.add(item)
    answer = map(list, result)
    
    return sorted(answer, key = lambda x : (x[0], x[1], x[2]))
