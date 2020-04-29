def solution(board, moves):
    BLANK, answer = 0, 0
    stack = []
    new_board = [list(line[::-1]) for line in zip(*board)] # 행-열 바꾸기
    for i, line in enumerate(new_board): # 0 제거
        new_board[i] = [doll for doll in line if doll != BLANK]
    
    for move in moves:
        if new_board[move-1]: # 인형이 있으면
            doll = new_board[move-1].pop() # 꺼내기
            if stack and stack[-1] == doll: # 인형이 같을 떄
                answer += 2
                stack.pop()
            else: # 다를때
                stack.append(doll)
            
    return answer
