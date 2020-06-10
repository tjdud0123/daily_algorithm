# 서영
from math import gcd
def solution(w,h):
    # 최소공배수
    common = gcd(w,h)
    # 조각
    frag_w, frag_h = w // common, h // common
    cut = (frag_w + frag_h - 1) * common
    return w*h - cut
