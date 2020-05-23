function solution(s) {
    const LEN = s.length;
    const DIV = parseInt(LEN / 2),
        MOD = LEN % 2;
    return MOD === 1 ? s[DIV] : s.slice(DIV - 1, DIV + 1);
}