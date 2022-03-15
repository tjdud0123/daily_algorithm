// Caterpillar method - 애벌레 권법(?) front 와 rear를 둠
function solution(M, A = []) {
    let sliceCnt = 0, rear = 0;
    let appearIdx = {};
    for (let front = 0; front<A.length; front++) {
        const num = A[front];
        if (appearIdx.hasOwnProperty(num) && appearIdx[num] >= rear) {
            rear = appearIdx[num] + 1;
        }
        appearIdx[num] = front;
        sliceCnt += front - rear + 1;
    }
    return Math.min(sliceCnt, 1000000000);
}