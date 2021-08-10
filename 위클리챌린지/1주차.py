def solution(price, money, count):
    total_expense = sum([price*i for i in range(1, count+1)])
    result = total_expense - money
    return result if result > 0 else 0