function solution(k, room_number) {
    let node = {};
    let result = []
    for (let req of room_number) {
        let confirm = [req]
        while (req in node) {
            req = node[req]
            confirm.push(req)
        }
        result.push(req)
        for (let room of confirm) {
            node[room] = req + 1
        }
    }
    return result;
}