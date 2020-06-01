function solution(nums) {
    const types = [...new Set(nums)].length;
    const maxNum = parseInt(nums.length / 2);
    return maxNum <= types ? maxNum : types;
}