function solution(N, M) {
    return parseInt(N / getGcd(N, M))
}

function getGcd(a, b) {
    if (a % b == 0) {
        return b;
    } else {
        return getGcd(b, a % b);
    }
}