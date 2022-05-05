def countApplesAndOranges(s, t, a, b, apples, oranges):
    landed_apples = [True for apple in apples if s <= apple+a and apple+a <= t]
    landed_oranges = [True for orange in oranges if s <= orange+b and orange+b <= t]
    print(len(landed_apples))
    print(len(landed_oranges))