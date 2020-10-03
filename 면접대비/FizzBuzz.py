def FizzBuzz():
    for i in range(1, 101):
        isDivBy3 = i % 3 == 0
        isDivBy5 = i % 5 == 0
        if isDivBy3 and isDivBy5:
            print('FizzBuzz')
        elif isDivBy3:
            print('Fizz')
        elif isDivBy5:
            print('Buzz')
        else:
            print(i)


FizzBuzz()
'''
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...
'''
