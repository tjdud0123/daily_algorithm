function solution(n, rest = 1) {
    for (let i = 2; i < n ;i++) {
        if(n % i === rest) {
            return i
        }
    }
}
