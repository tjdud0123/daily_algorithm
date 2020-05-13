function solution(n, computers) {
    let visited = Array.from(new Array(n), () => false) // like [false] * n
    let bfsNode = []
    let cnt = 0;

    for (let i = 0; i < n; i++) { //bfs
        if (visited[i]) continue;
        cnt++
        bfsNode.push(i)

        while (bfsNode.length > 0) {
            const index = bfsNode.pop()
            visited[index] = true
            for (let j in computers[index]) {
                if (computers[index][j] === 1 && !visited[j])
                    bfsNode.push(j)
            }
        }
    }

    return cnt
}