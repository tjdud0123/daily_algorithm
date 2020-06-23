from collections import deque


def solution(bridge_length, weight, truck_weights):
    trucks = deque(truck_weights)
    NONE = 0
    bridge = deque([NONE for _ in range(bridge_length)])
    time = 0

    while trucks or any(bridge):
        bridge.popleft()
        time += 1
        if trucks and sum(bridge) + trucks[0] <= weight:
            bridge.append(trucks.popleft())
        else:
            bridge.append(NONE)
    return time
