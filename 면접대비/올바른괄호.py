# 스택 사용
def checkNestingWithStack(brackets):
    stack = []
    for b in brackets:
        if b == '(':
            stack.append(b)
        elif not stack:
            return False
        else:
            stack.pop()
    return not stack
# 숫자로 count


def checkNestingWithCount(brackets):
    cnt = 0
    for b in brackets:
        if b == '(':
            cnt += 1
        else:
            cnt -= 1
        if cnt < 0:
            return False
    return cnt == 0


print(checkNestingWithStack("(())()"))
# True
print(checkNestingWithCount(")()("))
# False
