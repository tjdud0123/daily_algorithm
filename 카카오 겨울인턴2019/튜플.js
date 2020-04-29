function solution(s) {
    let patt1 = /\d+/g; // 모든 숫자 찾기
    let result = s.match(patt1); //[ '2', '2', '1', '2', '1', '3', '2', '1', '3', '4' ]
    let answer = []
    let count = {}; // { '1': 3, '2': 4, '3': 2, '4': 1 }
    result.forEach(val => count[val] = (count[val] || 0) + 1);

    for (const num in count) {
        let cnt = count[num] // value 값; 갯수
        let length = Object.keys(count).length
        answer[length - cnt] = Number(num)
        // [ <1 empty item>, 2, <1 empty item>, 1 ] 빈 공간 에러 안남
    }
    return answer
}