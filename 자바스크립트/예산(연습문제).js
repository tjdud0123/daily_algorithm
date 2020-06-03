function solution(budgets, M) {
    let left = 1;
    let right = Math.max(...budgets);
    while (left < right) {
        const middle = parseInt((left + right + 1) / 2)
        const required = budgets.map(budget => Math.min(middle, budget))
        const sum = required.reduce((total, num) => total + num, 0);
        sum <= M ? left = middle : right = middle - 1
    }
    return left;
}