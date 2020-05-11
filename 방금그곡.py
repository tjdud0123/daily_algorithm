def solution(m, musicinfos):
    LEN = len(m)
    cand = []
    m = m.replace('C#', 'c').replace('D#', 'd').replace('F#', 'f')\
        .replace('G#', 'g').replace('A#', 'a')

    for i, music in enumerate(musicinfos):
        music = music.replace('C#', 'c').replace('D#', 'd').replace('F#', 'f')\
            .replace('G#', 'g').replace('A#', 'a')
        start, end, song, scale = music.split(',')
        s_hour, s_minute = map(int, start.split(':'))
        e_hour, e_minute = map(int, end.split(':'))
        play = (e_hour*60 + e_minute) - (s_hour*60 + s_minute)
        played = (scale*LEN)[:play]
        if m in played:
            cand.append((play, i, song))
    cand = sorted(cand, key=lambda x: (-x[0], x[1]))
    return "(None)" if not cand else cand[0][2]
