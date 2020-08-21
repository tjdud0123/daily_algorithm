function solution(gems) {
    const gemTypeNum = new Set(gems).size
    const gemsNum = gems.length
    let gemMap = new Map();
    gemMap.set(gems[0], 1)
    let left = 0,
        right = 0
    let cand = []

    while (left < gemsNum && right < gemsNum) {
        if (gemMap.size < gemTypeNum) {
            right++;
            gemMap.set(gems[right], (gemMap.get(gems[right]) || 0) + 1)
        } else {
            cand.push([left + 1, right + 1])
            gemMap.set(gems[left], gemMap.get(gems[left]) - 1)
            if (gemMap.get(gems[left]) === 0) gemMap.delete(gems[left])
            left++;
        }
    }
    cand.sort((a, b) => {
        return a[1] - a[0] === b[1] - b[0] ? a[0] - b[0] : (a[1] - a[0]) - (b[1] - b[0])
    })
    return cand[0]
}