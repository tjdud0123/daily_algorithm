def timeInWords(h, m):
    if m == 0:
        return intToEn(h) + ' o\' clock' 
    
    if m <= 30:
        suffix = 'past ' + intToEn(h)
    else:
        suffix = 'to ' + intToEn((h+1)%12)
        m = 60 - m

    if m == 15 or m == 45 :
        return 'quarter '+ suffix
    elif m == 30:
        return 'half '+ suffix
    else:
        minutes_txt = ' minute' + ('s ' if m != 1 else ' ')
        return intToEn(m)+ minutes_txt + suffix

def intToEn(num):
    d = {   0 : 'twelve', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five',
            6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine', 10 : 'ten',
            11 : 'eleven', 12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen',
            15 : 'fifteen', 16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen',
            19 : 'nineteen', 20 : 'twenty',
            30 : 'thirty', 40 : 'forty', 50 : 'fifty', 60 : 'sixty' 
        }

    if (num < 20):
        return d[num]

    if (num < 100):
        div, mod = divmod(num, 10)
        return d[num] if mod == 0 else d[div * 10] + ' ' + d[mod]