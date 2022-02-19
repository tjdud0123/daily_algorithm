function solution(n, lost, reserve) {
    let losts = new Set(lost.filter(l => !reserve.includes(l)));
    let reserves = reserve.filter(r => !lost.includes(r));

    reserves.sort((a, b) => a - b);
    for (let person of reserves) {
        let left = person - 1;
        let right = person + 1;

        if (losts.has(left)) {
            losts.delete(left)
        } else if (losts.has(right)) {
            losts.delete(right)
        }
    }
    return n - [...losts].length;
}