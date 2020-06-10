function solution(people, limit) {
    people.sort((a, b) => a - b);
    const number = people.length;
    let together = 0;
    let right = number - 1;
    for (let left = 0; left < number; left++) {
        while (left < right) {
            if (people[left] + people[right] <= limit) {
                together++;
                right--;
                break;
            }
            right--
        }
    }
    return number - together;
}