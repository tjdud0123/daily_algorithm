function solution(bridge_length, weight, truck_weights) {
    const NONE = 0;
    let bridge = Array.from(new Array(bridge_length), () => NONE);
    let time = 0;
    let bridgeWeight = 0;

    while (truck_weights.length > 0 || bridge.some(x => x !== 0)) {
        bridgeWeight -= bridge.shift();
        time++;
        const newItem = (bridgeWeight + truck_weights[0] <= weight) ? truck_weights.shift() : NONE;
        bridge.push(newItem)
        bridgeWeight += newItem
    }
    return time;
}