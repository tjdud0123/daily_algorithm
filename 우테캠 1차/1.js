// 반복 숫자 합치기 
function solution(arr) {
    let answer = 0;
    let sequence = [...arr]
    while (!sequence.length == 1 && sequence[0] === 1) {
        let top = -1;
        let next = [];
        let cnt = 0;
        for (let num of sequence) {
            if (top === -1) {
                top = num;
                cnt++
            } else {
                if (top === name) cnt++;
                else {
                    next.push(cnt)
                    cnt = 1;
                    top = num;
                }
            }
        }
        next.push(cnt);
        answer++;
        sequence = [...next];
    }
    return answer
}