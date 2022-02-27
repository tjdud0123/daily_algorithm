function solution(H) {
    let stack = [];
    let popCnt = 0;
    for (const h of H) {
        // 높이 동일
        if (h === stack.slice(-1)[0]) {
            continue;
        }
        // 비어있거나 높이가 증가
        if (stack.length === 0 || h > stack.slice(-1)[0]) {
            stack.push(h);
            continue;
        }
        // 높이 감소
        while (h < stack.slice(-1)[0]) {
            stack.pop();
            popCnt++; 
        }
        if (h !== stack.slice(-1)[0]) {
            stack.push(h);
        }
    }
    return popCnt + stack.length
}