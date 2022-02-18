/* 효율성 실패 */

function solution(n, m, x, y, queries) {
    const [X, Y] = [0, 1]
    let answer = 0;
    // 방향 저장
    let dirArr  = []
    for (const [a, b] of queries) {
        const isColMov = a < 2
        const isDec = a % 2 === 0
        const dx = isColMov ? 0 : (isDec ? -b : b)
        const dy = isColMov ? (isDec ? -b : b) : 0
        dirArr.push([dx, dy])
    }
    // 탐색
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            let [curX, curY] = [i, j]
            for (const [dx, dy] of dirArr) {
                const nxtPos = getNext(curX, curY, dx, dy, n, m)
                curX = nxtPos[X]
                curY = nxtPos[Y]
            }
            if (curX === x && curY === y) {
                answer += 1
            }
        }
    }
    return answer;
}

function getNext(curX, curY, dx, dy, n, m) {
    // 다음 X 값
    let nxtX = curX + dx
    nxtX = (nxtX < 0) ? 0 : nxtX
    nxtX = (nxtX >= n) ? n : nxtX
    // 다음 Y 값
    let nxtY = curY + dy
    nxtY = (nxtY < 0) ? 0 : nxtY 
    nxtY = (nxtY >= m) ? m : nxtY
    return [nxtX, nxtY]
}
