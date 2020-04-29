function solution(stones, k) {
    let left = 1 // Math.min(...stones)
    let right = 200000000 // Math.max(...stones)
    while (left < right) {
        let middle = parseInt((left + right + 1) / 2) // 나눗셈
        if (is_poss(middle, stones, k)) {
            left = middle
        } else right = middle - 1
    }
    return right
}

function is_poss(middle, stones, k) {
    let empty = 0
    for (const stone of stones) {
        if (stone - middle < 0) {
            empty += 1
            if (empty === k) return false
        } else empty = 0
    }
    return true
}