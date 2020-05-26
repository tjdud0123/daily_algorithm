function solution(land) {
    let dp = [...land]
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            dp[i][j] += Math.max(...dp[i - 1].slice(0, j), ...dp[i - 1].slice(j + 1))
        }
    }
    return Math.max(...dp[land.length - 1]);
}