function solution(participant, completion) {
    const [NOT_COMPL, NAME, IS_COMPL] = [1, 0, 1]
    
    let table = {}
    for (const p of participant){
        table[p] = (table[p] || 0) + 1
    }
    for (const c of completion){
        table[c] -= 1
    }
    
    const compleStates = Object.entries(table)
    return compleStates.find(person => person[IS_COMPL] === NOT_COMPL)[NAME]
}