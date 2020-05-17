def solution(tickets):
    routes = {}
    
    for start, end in tickets:
        routes[start] = routes.get(start,[]) + [end]
    for r in routes:
        routes[r].sort(reverse=True)

    answer=[]
    stack=["ICN"]
    
    while stack:
        top = stack[-1]
        if top in routes and routes[top]:
            stack.append(routes[top].pop())
        else:
            answer.append(stack.pop())
            
    return answer[::-1]