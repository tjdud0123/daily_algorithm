function solution(numbers) {
    let stNumber = numbers.map(x => x.toString());
    stNumber.sort((a,b) => b.repeat(4).slice(0,4) - a.repeat(4).slice(0,4))
    return stNumber[0] == '0' ? '0' : stNumber.join('');
}