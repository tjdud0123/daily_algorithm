function solution(answers) {
    let dic = {'1':0, '2':0, '3':0};
    const ANS1 = [1, 2, 3, 4, 5];
    const ANS2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const ANS3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((ans, index) => {
        if (ans === ANS1[index%5]) dic['1']++;
        if (ans === ANS2[index%8]) dic['2']++;
        if (ans === ANS3[index%10]) dic['3']++;
    });
    
    const MAX = Math.max(...Object.values(dic))
    const result = Object.entries(dic)
    .filter((item) => item[1] === MAX)
    .map((item) => Number(item[0]))
    
    return result.sort((a, b) => a-b);
}