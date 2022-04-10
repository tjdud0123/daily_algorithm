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

function solution2(number, k) {
    var answer = '';
    let stack = [];
    for (const num of number) {
        if (stack.length === 0) {
            stack.push(num)
            continue
        }
        while (stack.length !== 0 && stack[stack.length-1] < num && k > 0) {
            stack.pop()
            k--
        }
        stack.push(num)
    }
    return k === 0 ? stack.join('') : stack.slice(0, -k).join('');
}