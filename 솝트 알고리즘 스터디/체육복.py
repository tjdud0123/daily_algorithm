def solution(n, lost, reserve):

    lost, reserve = set(lost) - set(reserve), set(reserve) - set(lost)
    
    for student in sorted(reserve):
        left, right = student-1, student+1
        if left in lost:
            lost.remove(left)
        elif right in lost:
            lost.remove(right)
            
    return n - len(lost)