function solution(clothes) {
    let answer = 1;
    let clothes_dict = {}
    const TYPE = 1;
    // 딕셔너리 저장 { headgear: 1, eyewear: 1 }
    for (const c of clothes) {
        const category = c[TYPE]
        clothes_dict[category] = (clothes_dict[category] || 0) + 1
    }
    // 경우의 수
    for (const num of Object.values(clothes_dict)) {
        answer *= num + 1
    }
    return answer - 1;
}