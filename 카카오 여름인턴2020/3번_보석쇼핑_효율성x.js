function solution(gems) {
    const gemTypeNum = [...new Set(gems)].length
    const gemsNum = gems.length
    let gemMap = {
        [gems[0]]: 1
    };
    let left = 0,
        right = 0
    let cand = []

    while (left < gemsNum && right < gemsNum) {
        if (Object.keys(gemMap).length < gemTypeNum) {
            right++;
            if (right === gemsNum) break;
            gemMap[gems[right]] = (gemMap[gems[right]] || 0) + 1
        } else {
            cand.push([left + 1, right + 1])
            gemMap[gems[left]]--;
            if (gemMap[gems[left]] === 0) delete gemMap[gems[left]]
            left++;
        }
    }
    cand.sort((a, b) => {
        return a[1] - a[0] === b[1] - b[0] ? a[0] - b[0] : (a[1] - a[0]) - (b[1] - b[0])
    })
    return cand[0]
}