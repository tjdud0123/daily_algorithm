/** 비트연산 */

function solution(n, arr1, arr2) {
    let answer = [];
    for (let i = 0; i < n; i += 1) {
        const result = arr1[i] | arr2[i]; // 합집합
        const bit = result.toString(2); // 이진수 문자열로 변환
        const blankString = ' '.repeat(n - bit.length); // 부족한 만큼 빈 문자열을 채운다
        const bitString = bit.replace(/1/gi, '#').replace(/0/gi, ' '); // 1을 #으로 0을 공백으로 바꾼다
        answer.push(blankString + bitString); // 빈 문자열과 비트 문자열을 합친다.
    }

    return answer; // 반환
}
