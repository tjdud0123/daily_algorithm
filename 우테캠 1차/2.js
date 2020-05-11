// 애너그램
function solution(arr) {
    let sorted = arr.map(num => num.toString().split('').sort().join(''));
    let set = new Set(sorted)
    return [...set].length
}