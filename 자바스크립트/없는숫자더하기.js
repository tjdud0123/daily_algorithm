function solution(numbers) {
    const [START_NUM, END_NUM] = [0, 9]
    const totalCnt = END_NUM - START_NUM + 1
    const sum = (START_NUM + END_NUM) * totalCnt / 2

    return sum - numbers.reduce((acc, cur) => acc + cur, 0);
}
