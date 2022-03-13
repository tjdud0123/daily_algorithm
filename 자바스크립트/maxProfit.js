function solution(A = []) {
    let bought = A[0], sold = 0;
    let maxProfit = 0;
    for (let day = 1; day < A.length; day++) {
        const money = A[day];
        if (bought > money) {
            bought = money;
            sold = 0;
            continue;
        }
        if (sold < money) {
            sold = money;
            maxProfit = Math.max(sold-bought, maxProfit);
        }
    }
    return maxProfit
}