// 넓이가 주어졌을 때 둘레의 최솟값

function solution1(N) {
    let minHalfPeri = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= Math.sqrt(N); i++) {
        if (N % 1 === 0) {
            const halfPeri = i + parseInt(N / i);
            minHalfPeri = Math.min(halfPeri, minHalfPeri)
        }
    }
    return minHalfPeri * 2
}

function solution2(N) {
    let maxFactor = parseInt(Math.sqrt(N));
    for (let i = maxFactor; i >= 1; i--) {
        if (N % i === 0) {
            return (i+parseInt(N / i)) * 2;
        }
    }
}