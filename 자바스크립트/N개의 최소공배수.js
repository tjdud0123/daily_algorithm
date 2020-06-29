function solution(arr) {
    // 최대공약수 구하기
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    // reduce 사용 2 => 6 => 24 => 168
    return arr.reduce((sNum, lNum) => sNum * lNum / gcd(lNum, sNum))
}