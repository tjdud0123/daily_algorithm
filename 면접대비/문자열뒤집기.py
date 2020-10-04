import time

string = 'worldshsdjflsdfjdslkffldsjflsjflsjfls' * 999999
# 파이썬 slice 기능 사용
start_time1 = time.time()
reversed_string1 = string[::-1]
end_time1 = time.time()

# for 문 사용
start_time2 = time.time()
reversed_string2 = ""
for i in range(len(string)-1, -1, -1):
    reversed_string2 += string[i]
end_time2 = time.time()

# 배열 사용
start_time3 = time.time()
temp = []
for i in range(len(string)-1, -1, -1):
    temp.append(string[i])
reversed_string3 = ''.join(temp)
end_time3 = time.time()

# 내장함수 사용
start_time4 = time.time()
reversed_string4 = ''.join(reversed(string))
end_time4 = time.time()


print(reversed_string1)  # dlrow
print(reversed_string2)  # dlrow
print(reversed_string3)  # dlrow
print(reversed_string4)  # dlrow


print("WorkingTime: {} sec".format(end_time1-start_time1))
print("WorkingTime: {} sec".format(end_time2-start_time2))
print("WorkingTime: {} sec".format(end_time3-start_time3))
print("WorkingTime: {} sec".format(end_time4-start_time4))
