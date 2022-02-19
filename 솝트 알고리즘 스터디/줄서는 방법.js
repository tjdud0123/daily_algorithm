function getFactorial(num) { // 팩토리얼 구하기
    let fact = 1;
    for (let i = 2; i <= num; i++) fact *= i;
    return fact;
}

function solution(n, k) {
    let div;
    let mod = k;
    let answer = [];
    let cand = [...Array(n).keys()].map(x => x + 1) // range()
    for (let i = n - 1; i > 0; i--) {
        div = parseInt(mod / getFactorial(i)) // 몫 구할 때
        mod = mod % getFactorial(i)
        if (mod === 0) { // 나머지 0일 때
            return answer.concat(cand.splice(div - 1, 1), cand.reverse())
        } // splice는 원래배열 변경, 배열 아닌 요소도 이어붙이고 싶을 때 concat
        answer.push(parseInt(cand.splice(div, 1)))
    }
    return [1]
}