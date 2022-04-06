function solution(gems) {
    const gemTypeNum = new Set(gems).size;
    const gemsNum = gems.length;
    let gemMap = new Map();
    gemMap.set(gems[0], 1);
    let left = 0,
        right = 0;
    let cand = [];

    while (left < gemsNum && right < gemsNum) {
        if (gemMap.size < gemTypeNum) {
            right++;
            gemMap.set(gems[right], (gemMap.get(gems[right]) || 0) + 1);
        } else {
            cand.push([left + 1, right + 1]);
            gemMap.set(gems[left], gemMap.get(gems[left]) - 1);
            if (gemMap.get(gems[left]) === 0) gemMap.delete(gems[left]);
            left++;
        }
    }

    cand.sort(([a_l, a_r], [b_l, b_r]) => a_r - a_l - (b_r - b_l));
    return cand[0];
}

function solution2(gems) {
    let answer = [0, gems.length]; // 가장 긴 길이로 초기화합니다.
    let start = 0; // 첫 번째 포인터
    let end = 0; // 두 번째 포인터

    const gemKinds = new Set(gems).size; // 겹치지 않는 보석의 갯수
    const collect = new Map(); // 보석을 담아둘 변수
    collect.set(gems[0], 1); // 시작하면서 첫 보석을 먼저 담는다

    while (start < gems.length && end < gems.length) {
        // 두 포인터가 끝에 도달한다면 종료
        if (collect.size === gemKinds) {
            // 모든 보석을 구매할 수 있다면
            if (end - start < answer[1] - answer[0]) {
                // 구간을 갱신
                answer = [start + 1, end + 1];
            }

            collect.set(gems[start], collect.get(gems[start]) - 1); // 첫 번째 포인터에 해당하는 보석을 한 개 줄인다.

            if (collect.get(gems[start]) === 0) {
                // 만약 0이 됐다면 목록에서 제거된다.
                collect.delete(gems[start]);
            }
            start += 1; // 첫 번째 포인터 증가
        } else {
            // 모든 보석을 구매할 수 없다면
            end += 1; // 두 번째 포인터 증가
            collect.set(gems[end], 1 + (collect.get(gems[end]) || 0)); // 보석을 추가한다.
        }
    }

    return answer; // 결과 반환
}
