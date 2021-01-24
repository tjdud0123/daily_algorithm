function solution(a, b) {
    return a.reduce((acc, cur, idx) => acc+(cur*b[idx]),0)
 }