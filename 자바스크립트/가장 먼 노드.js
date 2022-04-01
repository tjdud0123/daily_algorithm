function solution(n, edge) {
    let visited = new Set([1])
    let nodeTable = {};
    let dists = []
    let que = [[1, 1]]
    
    for (const [a, b] of edge) {
        nodeTable[a] = (nodeTable[a] || []).concat([b])
        nodeTable[b] = (nodeTable[b] || []).concat([a])
    }

    while (que.length > 0) {
        const [node, dist] = que.shift();
        const nexts = nodeTable[node]
        dists.push(dist)

        for (const nxtNode of nexts) {
            if (!visited.has(nxtNode)) {
                visited.add(nxtNode)
                que.push([nxtNode, dist+1])
            }
        }
    }
    
    let max = Math.max(...dists)
    
    return dists.filter(x => x === max).length
}