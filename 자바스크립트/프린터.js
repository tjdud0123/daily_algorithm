function solution(priorities, location) {
    const PRIOR = 0,
        INDEX = 1;
    const len = priorities.length;
    let maxNum = Math.max(...priorities)
    let que = priorities.map((prior, index) => [prior, index])

    while (que.length !== 0) {
        const item = que.shift()
        if (item[PRIOR] === maxNum) {
            if (item[INDEX] === location) return len - que.length;
            maxNum = Math.max(...(que.map((x) => x[0])))
        } else que.push(item);
    }

    return que;
}

function solution2(priorities, location) {
    let cnt = 0;
    let que = priorities.map((prior, index) => [index, prior])
    let priorNum = priorities.sort((a, b) => a - b)
    
    while (que.length > 0) {
        const [curLocation, curPrior] = que.shift();
        
        if (curPrior !== priorNum[priorNum.length-1]) {
            que.push([curLocation, curPrior])
            continue
        }
        
        if (curPrior === priorNum[priorNum.length-1]) {
            priorNum.pop()
            cnt++
        }
        
        if (curLocation === location) {
            return cnt
        }
    }

}