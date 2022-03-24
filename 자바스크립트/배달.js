function solution(N, road, K) {
    let [costTable, distTable] = [{}, {}];
    for (let i = 1; i <= N; i++) {
        costTable[i] = [];
        distTable[i] = i > 1 ? Infinity : 0;
    }

    for (const [start, end, dist] of road) {
        costTable[start].push([end, dist]);
        costTable[end].push([start, dist]);
    }

    const START = 1;
    let que = [START];
    while (que.length > 0) {
        const curNode = que.shift();
        for (const [nxtNode, dist] of costTable[curNode]) {
            const newDist = distTable[curNode] + dist;
            if (newDist < distTable[nxtNode]) {
                distTable[nxtNode] = newDist;
                que.push(nxtNode);
            }
        }
    }

    return Object.values(distTable).filter(x => x <= K).length;
}
