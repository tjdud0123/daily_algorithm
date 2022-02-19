function solution(participant, completion) {
    const NOT_COMPL = 1
    const NAME = 0
    const IS_COMPL = 1

    let dict = {}
    for (let p of participant) {
        dict[p] = (dict[p] || 0) + 1
    }
    for (let c of completion) {
        dict[c] = dict[c] - 1
    }

    let compleStates = Object.entries(dict)
    return compleStates.find(person => person[IS_COMPL] === NOT_COMPL)[NAME]
}