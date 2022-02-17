function solution(left, right) {
    let answer = 0;
    for (let num = left; num <= right; num++) {
        // 약수개수가 홀수 -> 어떤 수의 제곱수
        const isCntOdd = Number.isInteger(Math.sqrt(num))
        answer += isCntOdd ? -num : num
    }
    return answer;
}
