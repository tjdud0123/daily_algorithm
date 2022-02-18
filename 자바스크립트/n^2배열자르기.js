function solution(n, left, right) {
    let answer = [];
    for (let i = left; i <= right; i++) {
        const [col, row] = [Math.floor(i/n), i % n]
        answer.push(Math.max(col, row) + 1)
    }
    return answer
}

/* 시간초과, 메모리 오버 케이스 -> 2차배열 생성 */

function solution2(n, left, right) {
    const matrix = Array.from(Array(n), () => Array(n).fill(null))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = Math.max(i, j) + 1
        }
    }
    
    let spreadArr = []
    for (const rows of matrix) { // 하나로 펼치기
        spreadArr = [...spreadArr, ...rows]
    }
    return spreadArr.slice(left, right+1);
}
