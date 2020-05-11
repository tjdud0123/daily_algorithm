// 계좌관리
function solution(reqs) {
    let customer = {};
    let result = [];
    const REQ = 0,
        ID = 1,
        MONEY = 2;
    const REQS = reqs.map(req => req.split(' '));

    for (let command of REQS) {
        const cid = command[ID];
        const money = parseInt(command[MONEY]);
        const c = command[REQ]
        if (c === 'CREATE') {
            if (cid in customer) result.push(403);
            else {
                customer[cid] = money;
                result.push(200)
            }
        } else if (c === 'DEPOSIT') {
            if (!(cid in customer)) result.push(404);
            else {
                customer[cid] += money;
                result.push(200)
            }
        } else {
            if (!(cid in customer)) result.push(404);
            else if (customer[cid] < money) result.push(403);
            else {
                customer[cid] -= money;
                result.push(200)
            }
        }
    }
    return result
}