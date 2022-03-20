function solution(A) {
    let leftCnts = {}, rightCnts = {};
    let leftLen = 0, rightLen = A.length;
    let leftMost = A[0];
    let equiCnt = 0;
    // init
    for (const num of A) {
        rightCnts[num] = (rightCnts[num] || 0) + 1;
    }
    // compute
    for (const num of A) {
        // 하나씩 이동
        rightCnts[num] -= 1;
        rightLen -= 1;
        leftCnts[num] = (leftCnts[num] || 0) + 1;
        leftLen += 1;
        // check
        if (leftCnts[num] > leftCnts[leftMost]) {
            leftMost = num;
        }
        const isLeftLeader = leftCnts[leftMost] > (leftLen / 2);
        const isSameLeader = rightCnts[leftMost] > (rightLen / 2);
        if (isLeftLeader && isSameLeader) {
            equiCnt++;
        }
    } 
    return equiCnt;
}