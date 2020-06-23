function solution(numbers) {
    const L = numbers.length;
    const MAX = 10 ** L - 1
    let primeSet = new Set()
    let cand = new Set()

    // 소수 체크
    let primes = [false, false]
    for (let i = 2; i <= MAX; i++) {
        primes.push(true)
    }
    for (let j = 2; j <= MAX; j++) {
        if (primes[j]) {
            primeSet.add(j)
            for (let k = 2 * j; k <= MAX; k += j) {
                primes[k] = false
            }
        }
    }

    // 순열 - python (itertools.permutations)
    function permutations(array, r) {
        var n = array.length;
        if (r === undefined) {
            r = n;
        }
        if (r > n) {
            return;
        }
        var indices = [];
        for (var i = 0; i < n; i++) {
            indices.push(i);
        }
        var cycles = [];
        for (var i = n; i > n - r; i--) {
            cycles.push(i);
        }
        var results = [];
        var res = [];
        for (var k = 0; k < r; k++) {
            res.push(array[indices[k]]);
        }
        results.push(res);

        var broken = false;
        while (n > 0) {
            for (var i = r - 1; i >= 0; i--) {
                cycles[i]--;
                if (cycles[i] === 0) {
                    indices = indices.slice(0, i).concat(
                        indices.slice(i + 1).concat(
                            indices.slice(i, i + 1)));
                    cycles[i] = n - i;
                    broken = false;
                } else {
                    var j = cycles[i];
                    var x = indices[i];
                    indices[i] = indices[n - j];
                    indices[n - j] = x;
                    var res = [];
                    for (var k = 0; k < r; k++) {
                        res.push(array[indices[k]]);
                    }
                    results.push(res);
                    broken = true;
                    break;
                }
            }
            if (broken === false) {
                break;
            }
        }
        return results;
    }

    // 가능한 경우 찾기
    for (let k = 1; k <= numbers.length; k++) {
        for (let permu of permutations(numbers.split(''), k)) {
            const item = Number(permu.join(''))
            if (primeSet.has(item)) {
                cand.add(item)
            }
        }
    }
    return [...cand].length
}