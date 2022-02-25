// 최소공배수, 최대공약수
function gcdlcm(a, b) { 
    let gcd = 1 //lcm = 1;
    for (let i = 1; i <= Math.min(a,b); i++) {
        if ((a%i == 0) && (b%i == 0)) { gcd = i } 
    } 
    //lcm = a*b/gcd 
    return gcd
}

// 유클리드 호제법
function getGcd(a, b) {
    if (a % b == 0) {
        return b;
    } else {
        return getGcd(b, a % b);
    }
}

function solution(w, h) {
    const COMMON = gcdlcm(w, h);
    const W = parseInt(w / COMMON), H = parseInt(h / COMMON);
    const CUT = (W + H - 1) * COMMON;
    return w*h - CUT
}