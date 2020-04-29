
function solution(user_id, banned_id) {
    // 해당 유저 만들기 { 'fr*d*': [ 'frodo', 'fradi' ], 'abc1**': [ 'abc123' ] }
    let banDict = {}
    for (const ban of banned_id){
        console.log(ban)
        const regex = new RegExp(ban.replace(/\*/g, '.'));
        const matches = user_id.filter(user =>  // [ 'frodo', 'fradi' ]  [ 'abc123' ]
        regex.exec(user) && regex.exec(user)[0].length === user.length
        );
        banDict[ban] = matches
    }

    // 조합 구하기
    let arr = banned_id.map(item => banDict[item]) // [ [ 'frodo', 'fradi' ], [ 'abc123' ] ]
    let comb = allPossibleCases(arr) // [ [ 'frodo', 'abc123' ], [ 'fradi', 'abc123' ] ]
    
    // 중복 제거
    let answer = []
    let length = banned_id.length
    for (const item of comb){
        let temp = new Set(item) // 중복제거
        if ([...temp].length === length){
            let removed = [...temp].sort().join('') // 스트링화해서 중복제거
            if (!answer.includes(removed)) answer.push(removed)
        }
    }
    return answer.length
}

function allPossibleCases(arr) {
        if (arr.length == 1) {
            return arr[0];
        } 
        else {
            var result = [];
            var allCasesOfRest = allPossibleCases(arr.slice(1));  // recur with the rest of array
            for (var i = 0; i < allCasesOfRest.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                    let comb = (arr[0][j] + ',' + allCasesOfRest[i]);
                    result.push(comb.split(','))
                }
            }
        //console.log(result)
        return result;
        }
}