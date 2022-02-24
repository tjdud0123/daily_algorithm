function solution(A) {
    const [TRIANGLE, NOT_TRIANGE] = [1, 0];
    A.sort((a, b) => a - b);
    for (let i=0; i<=A.length-3; i++) {
        if (A[i] + A[i+1] > A[i+2]) {
            return TRIANGLE;
        }
    }
    return NOT_TRIANGE;
}