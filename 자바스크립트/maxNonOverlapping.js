// Greedy) 전형적인 탐욕법 문제 - 끝을 기준으로 정렬되어야 한다는 점

function solution(A = [], B = []) {
    let segCnt = 0, curEndPos = -1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > curEndPos) {
            segCnt++;
            curEndPos = B[i];
        }
    } 
    return segCnt;
}

