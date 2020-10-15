lst = [3, 57, 2, 5, 75, 24, 25, 36, 475, 24, 8, 13, 1, 6, 3]

# 버블 정렬


def bubbleSort(lst):
    LEN = len(lst)
    for last_idx in range(LEN-2, 0, -1):  # 각 턴의 마지막 인덱스
        isSwap = False  # 최적화
        for l_idx in range(0, last_idx+1):
            if lst[l_idx] > lst[l_idx+1]:
                lst[l_idx], lst[l_idx+1] = lst[l_idx+1], lst[l_idx]
                isSwap = True
        if not isSwap:  # swap이 일어나지 않았으면 정렬 완료상태
            return lst
    return lst

# 선택 정렬


def selectSort(lst):
    LEN = len(lst)
    for cur_idx in range(0, LEN-1):  # 최소값을 위치시킬 인덱스
        search_start, min_idx = cur_idx+1, cur_idx
        for search_idx in range(search_start, LEN):
            if lst[search_idx] < lst[min_idx]:
                min_idx = search_idx
        lst[cur_idx], lst[min_idx] = lst[min_idx], lst[cur_idx]
    return lst


# 삽입 정렬
def insertSort(lst):
    LEN = len(lst)
    for search_start in range(1, LEN):  # 탐색 시작 인덱스
        while search_start > 0:
            if lst[search_start] < lst[search_start-1]:
                lst[search_start], lst[search_start - 1] \
                    = lst[search_start-1], lst[search_start]
                search_start -= 1
            else:
                break
    return lst

# 퀵 정렬


def quickSort(lst):
    LEN = len(lst)
    if LEN <= 1:
        return lst
    middle = len(lst) // 2  # 최악의 케이스를 막기 위해  pivot을 middle로 설정
    pivot = lst[middle]
    rest = lst[:middle] + lst[middle+1:]
    left = [num for num in rest if num <= pivot]
    right = [num for num in rest if num > pivot]
    return quickSort(left) + [pivot] + quickSort(right)

# 병합 정렬


def merge(left, right):
    merged = []
    while left or right:
        # left나 right 가 비었을 때
        if not left:
            merged += right
            return merged
        elif not right:
            merged += left
            return merged
        # left나 right 첫번째 원소값 비교
        if left[0] < right[0]:
            merged += [left[0]]
            left = left[1:]
        else:
            merged += [right[0]]
            right = right[1:]
    return merged


def mergeSort(lst):
    LEN = len(lst)
    if LEN <= 1:
        return lst
    middle = len(lst) // 2
    left = mergeSort(lst[:middle])
    right = mergeSort(lst[middle:])
    return merge(left, right)


print(mergeSort(lst))
