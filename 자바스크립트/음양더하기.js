/* ------------- sol1 for (enumerate) 사용 -------------- */

function solution1(absolutes, signs) {
    let answer = 0;
    
    for (const [idx, val] of absolutes.entries()) {
        curNum = signs[idx] ? val : -val
        answer += curNum
    }

    return answer;
}
/* -------------  sol2 reduce 사용 -------------- */

function solution2(absolutes, signs) {
    
    const accFunc = (acc, val, idx) => acc + (signs[idx] ? val : -val)
    absolutes.reduce(accFunc,  0)

    return absolutes.reduce(accFunc,  0);
}
