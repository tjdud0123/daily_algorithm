/* 카디안 알고리즘 - https://www.youtube.com/watch?v=86CQq3pKSUw */
function solution(A = []) {
    let curMax = A[0], maxSum = A[0];
    for (const num of A.slice(1)) {
        curMax = Math.max(curMax+num, num);
        maxSum = Math.max(curMax, maxSum);
    }
    return maxSum;
}