function solution(price, money, count) {
    const totalExpense = price*count*(count+1)/2
    const result = totalExpense - money
    return result > 0 ? result : 0;
}