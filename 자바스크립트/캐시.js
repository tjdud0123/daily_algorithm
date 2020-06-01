function solution(cacheSize, cities) {
    let cache = [];
    let answer = 0
    const lowerCities = cities.map(city => city.toLowerCase())

    if (cacheSize === 0) return cities.length * 5
    for (const city of lowerCities) {
        // 캐시위에 있을 때 (hit)
        if (cache.indexOf(city) !== -1) {
            cache = cache.filter(c => c !== city).concat(city)
            answer += 1
            continue;
        }
        // (miss)
        if (cache.length === cacheSize) cache.shift()
        cache.push(city)
        answer += 5
    }
    return answer;
}