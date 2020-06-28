function solution(n, m) {
    const a = n > m ? n : m;
    const b = n > m ? m : n;

    const gcd = (a, b) => b ? gcd(b, a % b) : a;

    return [gcd(n, m), n * m / gcd(n, m)];
}