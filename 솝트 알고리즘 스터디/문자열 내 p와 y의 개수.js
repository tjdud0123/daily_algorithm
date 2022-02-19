function solution(s) {
    let pNum = [...s].filter(char => char === 'p' || char === 'P').length
    let yNum = [...s].filter(char => char === 'y' || char === 'Y').length
    return pNum === yNum
}