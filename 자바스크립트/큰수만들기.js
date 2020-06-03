function solution(number, k) {
    let Nums = [...number]
    let delNum = 0;
    let stack = [];
    while (Nums.length > 0 && delNum < k) {
        while (stack.length > 0 && stack[stack.length - 1] < Nums[0]) {
            stack.pop()
            delNum++
            if (delNum === k) return stack.concat(Nums).join('')
        }
        stack.push(Nums.shift())
    }

    return stack.slice(0, stack.length - k).join('')
}