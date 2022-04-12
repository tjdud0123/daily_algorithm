/** DP - 복습필요 */
function solution(strs, t) {
    // 편의를 위해 t의 길이 + 1만큼 배열을 만든다.
    const dp = Array.from({ length: t.length + 1 }, () => 0);
    // 문자열 검사를 빠르게 하기 위해서 문자열 리스트를 set으로 만든다.
    const strsSet = new Set(strs);

    // 1부터 문자열 길이 + 1까지 루프를 돈다.
    for (let i = 1; i < t.length + 1; i += 1) {
        // 일단 해당 문자열의 최솟값은 무한으로 설정한다.
        dp[i] = Infinity;
        // 문자열을 자르면서 단어 조각을 찾기 위해 루프를 돈다.
        // 단어 조각은 5 이하기 때문에 마지막까지 자를 필요는 없다.
        for (let j = 1; j < Math.min(i + 1, 6); j += 1) {
            const start = i - j;
            const end = i;
            // 단어 조각이 있다면
            if (strsSet.has(t.slice(start, end))) {
                // 이전 조합과 더해서 최솟값인지 체크 후 대입한다.
                dp[i] = Math.min(dp[i], dp[i - j] + 1);
            }
        }
    }

    // 결과적으로 단어의 최솟값을 구할 수 있다. 만약 무한이라면 불가능한 조합이기 때문에 -1을 리턴한다.
    return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}
