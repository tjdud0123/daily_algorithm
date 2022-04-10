/** 트라이 - 기본문제 */
function makeTrie(words) {
    const [COUNT, CHILD] = [0, 1];
    const root = {}; // 먼저 루트 노드를 설정할 변수를 만든다.
    for (const word of words) {
        let current = root;
        for (const letter of word) {
            if (!current[letter]) {
                current[letter] = [0, {}];
            }
            current[letter][COUNT] = (current[letter][COUNT] || 0) + 1; // 카운팅을 위해 1 더해준다.
            current = current[letter][CHILD]; // current는 letter에 해당되는 노드로 이동한다.
        }
    }

    return root; // 반환
}

function solution(words) {
    let answer = 0;
    const trie = makeTrie(words); // Trie 자료구조를 만들어준다.

    for (const word of words) {
        // 입력받은 수 만큼 루프
        let count = 0; // 카운팅을 위한 변수
        let current = trie; // 루트부터 시작
        for (const [index, letter] of [...word].entries()) {
            count += 1;
            if (current[letter][0] <= 1) {
                // 단어가 하나 이하로 남을 경우 종료
                break;
            }
            current = current[letter][1]; // 다음 노드로 이동
        }
        answer += count; // 카운팅을 더해준다
    }

    return answer; // 반환
}
