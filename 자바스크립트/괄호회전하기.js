function solution(s) {
    let answer = 0;
    const doubleStr = s.repeat(2) // 회전한 경우 이어붙이면 편함

    for (let idx in s) {
        const startIdx = Number(idx) // string을 for in 하면 idx 타입은 str
        const rotated = doubleStr.slice(startIdx, startIdx + s.length)
        if (checkCorrect(rotated)) {
            answer += 1
        }
    }

    return answer;
}

function checkCorrect(s) {
    const brMap = { '[': ']', '{': '}', '(': ')' }
    let stack = []
    for (let char of s) {

        const isLeftBr = brMap.hasOwnProperty(char)
        if (stack.length === 0 || isLeftBr) {
            stack.push(char)
            continue
        }

        const stackTop = stack.slice(-1)
        if (brMap[stackTop] === char) {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
}
