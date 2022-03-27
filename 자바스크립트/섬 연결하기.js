/** 최소 신장트리 기본문제 */
function solution(n, costs) {
    let costTable = {};
    for (const [start, end, cost] of costs) {
        costTable[start] = (costTable[start] || []).concat([[end, cost]]);
        costTable[end] = (costTable[end] || []).concat([[start, cost]]);
    }

    let answer = 0;
    const START = 0;
    let cand = [...costTable[START]];
    let visited = new Set([START]);

    while (visited.size < n) {
        cand.sort(([, a], [, b]) => b - a);
        const [curNode, cost] = cand.pop();
        if (!visited.has(curNode)) {
            answer += cost;
            visited.add(curNode);
            for (const [nxtNode, cost] of costTable[curNode]) {
                cand.push([nxtNode, cost]);
            }
        }
    }

    return answer;
}

/** union find 사용 */
function find(parent, x) {
    if (parent[x] === x) {
        return x;
    }

    return (parent[x] = find(parent, parent[x]));
}

function union(parent, a, b) {
    a = find(parent, a);
    b = find(parent, b);
    if (a < b) {
        parent[b] = a;
    } else {
        parent[a] = b;
    }
}

function compare(parent, a, b) {
    a = find(parent, a);
    b = find(parent, b);
    return a === b;
}

function solution2(n, costs) {
    let answer = 0;
    const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
    const parent = Array.from({ length: n }, (_, i) => i);

    for (const [a, b, cost] of sortedCosts) {
        if (!compare(parent, a, b)) {
            answer += cost;
            union(parent, a, b);
        }
    }

    return answer;
}
