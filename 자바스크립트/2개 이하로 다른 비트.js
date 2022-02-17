function solution(numbers) {
    let answer = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            answer.push(num+1)
        } else {
            // 뒷부분 1의 개수
            const lastOnesCnt = getLastOnes(num.toString(2))
            // 둥비수열의 합 1 + 2 + 4 + ...
            const delta = Math.pow(2, lastOnesCnt-1) - 1
            answer.push(num + delta + 1)
        }
    }
    return answer;
}

function getLastOnes(s) {
    let cnt = 0;
    let idx = s.length - 1
    while (idx >= 0) {
        if (s[idx] === '0') {
            break;
        }
        cnt++
        idx--
    }
    return cnt
}
