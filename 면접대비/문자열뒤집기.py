string = 'world'
# 파이썬 slice 기능 사용
reversed_string1 = string[::-1]

# for 문 사용
reversed_string2 = ""
for i in range(len(string)-1, -1, -1):
    reversed_string2 += string[i]

# 배열 사용
temp = []
for i in range(len(string)-1, -1, -1):
    temp.append(string[i])
reversed_string3 = ''.join(temp)

print(reversed_string1)  # dlrow
print(reversed_string2)  # dlrow
print(reversed_string3)  # dlrow
