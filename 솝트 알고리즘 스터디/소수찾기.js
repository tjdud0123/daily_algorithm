function solution(n) {
    let count = 0
    let primes = [false, false]
    for (let i = 2; i <= n; i++) {
        primes.push(true)
    }
    for (let j = 2; j <= n; j++) {
        if (primes[j]) {
            count += 1
            for (let k = 2 * j; k <= n + 1; k += j) {
                primes[k] = false
            }
        }
    }
    return count;
}