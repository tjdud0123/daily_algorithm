function solution(genres, plays) {

    let genreTable = {};
    genres.forEach((genre, idx) => {
        let data = genreTable[genre] || { total: 0, songs: [] }
        data.total = data.total + plays[idx]
        data.songs = [...data.songs, idx]
        genreTable[genre] = data
    })
    
    const sortedTable = Object.entries(genreTable).sort(([, a], [, b]) => b.total - a.total)
    const songs = sortedTable
        .map(([_, v]) => v.songs)
        .map((songs) => songs.sort((a, b) => plays[b] - plays[a] || a - b))

    return songs.reduce((acc, cur) => [...acc, ...cur.slice(0, 2)], []);
}