def solution(m, musicinfos):
    music_dic = {}
    LEN = len(m)
    for music in musicinfos:
        start, end, song, scale = music.split(',')
        s_hour, s_minute = map(int, start.split(':'))
        e_hour, e_minute = map(int, end.split(':'))
        play = (e_hour*60 + e_minute) - (s_hour*60 + s_minute)
        played = (scale*LEN)[:play]
        if m in played:
            is_shrp = played.index(m)+LEN
            if len(played)-1 < is_shrp or played[is_shrp] != '#':
                return song
    return None
