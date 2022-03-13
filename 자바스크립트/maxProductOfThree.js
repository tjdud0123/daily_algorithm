function solution(A) {
    A.sort((a, b) => a - b);
    const N = A.length
    const cand1 = A[0] * A[1] * A[N-1];
    const cand2 = A[N-3] * A[N-2] * A[N-1];
    return Math.max(cand1, cand2);
}