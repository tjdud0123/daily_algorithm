function solution(A = [], B = []) {
    let downFishes = [];
    let upAliveCnt = 0
    for (let i = 0; i < A.length; i++) {
        const fish = A[i], isDownDir = B[i];
        // downDir
        if(isDownDir) {
            downFishes.push(fish);
            continue;
        } 
        // upDir
        if (downFishes.length === 0) {
            upAliveCnt++;
        } else {
            while(fish > downFishes.slice(-1)[0]) {
                downFishes.pop();
            }
            if (downFishes.length === 0) {
                upAliveCnt++;
            }
        }
    }
    return upAliveCnt + downFishes.length;
}