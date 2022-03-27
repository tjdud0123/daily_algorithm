function dfs(n, y, col, diag1, diag2, solution) {
    if (n === y) {
        solution.answer++;
        return 1;
    }

    for (let x = 0; x < n; x++) {
        if (col.has(x) || diag1.has(x + y) || diag2.has(x - y)) {
            continue;
        }
        col.add(x);
        diag1.add(x + y);
        diag2.add(x - y);
        dfs(n, y + 1, col, diag1, diag2, solution);
        col.delete(x);
        diag1.delete(x + y);
        diag2.delete(x - y);
    }
}

function solution(n) {
    this.answer = 0;
    let [col, diag1, diag2] = [new Set(), new Set(), new Set()];
    dfs(n, 0, col, diag1, diag2, this);
    return this.answer;
}
