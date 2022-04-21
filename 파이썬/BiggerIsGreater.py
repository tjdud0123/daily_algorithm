def biggerIsGreater(w):
    arr = [char for char in w]
    for i in range(len(w)-1, 0, -1):
        if w[i-1] < w[i]:
            min_idx = w.rfind(min([x for x in w[i:] if x > w[i-1]]))
            arr[i-1], arr[min_idx] = arr[min_idx], arr[i-1]
            arr = arr[:i] + sorted(arr[i:])
            return ''.join(arr)
    return 'no answer'