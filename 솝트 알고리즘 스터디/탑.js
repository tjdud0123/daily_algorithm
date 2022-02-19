function solution(heights) {
    let answer = []
    while (heights.length > 0) {
        let height = heights.pop()
        for (let i = heights.length - 1; i >= 0; i--) {
            if (height < heights[i]) {
                answer.push(i + 1)
                break;
            }
            if (i == 0) answer.push(0)
        }
    }
    answer.push(0)
    return answer.reverse()
}