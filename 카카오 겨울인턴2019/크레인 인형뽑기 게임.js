function solution(board, moves) {
    let answer = 0; // 카운트
    const BLANK = 0;
    let length = board[0].length
    let stack = []

    for (const move of moves) { // 1,5,3,5 ...
        for (let i = 0; i < length; i++) { // 위에서 부터 탐색
            if (board[i][move - 1] !== BLANK) { // 인형이 있다면
                let doll = board[i][move - 1]
                board[i][move - 1] = BLANK // 인형을 뽑았으니 빈칸으로
                if (stack && stack[stack.length - 1] === doll) {
                    stack.pop()
                    answer += 2
                } else { // 인형이 다르거나 비었을 때
                    stack.push(doll)
                }
                break; // 빠져나가기
            }
        }
    }
    return answer;
}