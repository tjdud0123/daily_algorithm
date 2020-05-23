function solution(progresses, speeds) {
    let days = progresses.map((done, i) => Math.ceil((100 - done) / speeds[i]));
    let curFunc = days.shift();
    let count = 1;
    let answer = [];
    while (days.length > 0) {
        if (curFunc >= days[0]) {
            count++;
            days.shift();
        } else {
            answer.push(count)
            curFunc = days.shift()
            count = 1
        }
    }
    answer.push(count)
    return answer;
}