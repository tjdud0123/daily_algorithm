function solution(d, budget) {
    d.sort((a, b) => b - a) // descendig sort
    let cnt = 0;
    while (budget >= d[d.length - 1]) {
        budget -= d.pop()
        cnt++
    }
    return cnt;
}