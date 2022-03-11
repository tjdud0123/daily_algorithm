// 약수 개수 구하기
function solution(N) {
    let factorCnt = 0;
    const sqrtN = Math.sqrt(N);
    for (let i = 1; i < sqrtN; i++) {
        if (N % i === 0) {
            factorCnt += 2;
        }
    }
    return N % sqrtN === 0 ? factorCnt+1 : factorCnt;
}