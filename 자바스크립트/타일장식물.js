function solution(N) {
    let fibo1 = 0,
        fibo2 = 1
    for (let i = 0; i < N; i++) {
        let temp = fibo2
        fibo2 = fibo2 + fibo1
        fibo1 = temp
    }
    return (fibo1 + fibo2) * 2;
}