// 모빌
// weightsLst global 변수로 바꾸기 전 종료해버림
function solution(weights) {
    let weightsLst = weights.map(num => [num, 1]);

    while (true) {
        weightsLst.sort((a, b) => a[0] - b[0])
        let stack = [weightsLst.shift()]
        let top = stack[0]
        let idx = -1
        let newItem = []

        for (let i in weightsLst) {
            let num = weightsLst[i]
            if (num[0] !== top[0]) top = num;
            else {
                idx = w;
                newItem = [num[0] * 2, top[1] + num[1]]
                break;
            }
        }
        if (idx === -1) break;
        weightsLst.splice(idx, 2, newItem)
    }
    return [...weightsLst.sort((a, b) => b[1] - a[1])][0][1]
}