/* 알고리즘 할 때 자주 쓰는 python 문법 => js 변환 */

/* for ... of
 * array에서 요소에 접근
 * 스트링 char에 접근
 */
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
    console.log(element);
}
// expected output: "a", "b", "c"

const s = 'abcd'
for (const char of s) {
    console.log(char);
}
// expected output: "a" "b" "c" "d"
//--------------------------------------------//

/* for ... in
 * array에서 인덱스에 접근 (enumerate 가능)
 * 객체에서 key에 접근
 */
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}
for (const [key, val] of Object.entries(object)) {
    console.log(`${key}: ${val}`);
}
// expected output: "a: 1", "b: 2", "c: 3"

for (const idx in array1) {
    console.log(`${idx}: ${array1[idx]}`);
}
// expected output: 0: a, 1: b, 2: c
//--------------------------------------------//

/* forEach
 * array에서 인덱스, 요소에 접근 (enumerate 가능)
 */
array1.forEach((el, idx) => {
    console.log(`${idx}: ${el}`);
});
// expected output: 0: a, 1: b, 2: c
//--------------------------------------------//

/* for 문
 * 일반적인 반복문
 * 2중 포문
 */
let str = '';
for (let i = 0; i < 9; i++) {
    str = str + i;
}
console.log(str); // "012345678"

for (let i=0; i<n; i++) {
    for (let j=0; j<m; j++) {
        console.log(i, j);
    }
}
//--------------------------------------------//


/* 변수 여러개 한줄 선언
 * div, mod 예시로
 * 2진수화, 제곱 수 예시로
 */
const num = 8

const div = parseInt(num / 3), mod = num % 2;
console.log(div, mod);
// expected output: "2 3"

const byteNum = num.toString(2), powNum = Math.pow(2, num);
// expected output: "1000 256"
//--------------------------------------------//

/* 잘라내기 - slice
 * like python [:]
 * 원본 배열은 그대로 두고 새로운 배열 반환
 * array & string
 */
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // ["camel", "duck"]
console.log(animals.slice(-2)); // ["duck", "elephant"]
console.log(animals.slice(2, -1)); // ["camel", "duck"]

const words = 'The quick brown fox jumps over the lazy dog.';
console.log(words.slice(31)); // "the lazy dog."
console.log(words.slice(4, 19)); // "quick brown fox"
console.log(words.slice(-4)); // "dog."
console.log(words.slice(-9, -5)); // "lazy"
//--------------------------------------------//

/** 제거 - splice
 * like delete, 원본 배열 변형
 * (인덱스, 요소 개수)
 * 비어있는 배열 잘라내도 에러를 내진 않음
 */
console.log(animals.splice(2, 2)); // [ 'camel', 'duck' ]
console.log(animals); // [ 'ant', 'bison', 'elephant' ]

/* 정렬
 * 오름차순 / 내림차순
 * numbers & strings
 */
let months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort(); // 오름차순
console.log(months); // ["Dec", "Feb", "Jan", "March"]
months.reverse(); // 내림차순
console.log(months);  // [ 'March', 'Jan', 'Feb', 'Dec' ]

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b); // 오름차순
console.log(numbers); // [1, 2, 3, 4, 5]
numbers.sort((a, b) => b - a); // [ 5, 4, 3, 2, 1 ]
console.log(numbers); // 내림차순
//--------------------------------------------//

/* 초기화
 * 문자 반복 str * 2
 * 1차, 2차 배열 init
 * hash table init
 */
const word = 'abc'
const doubleStr = word.repeat(2) // 'abcabc'

let visited = Array.from(new Array(n), () => false) // like [false] * n
let visited2 = Array(n).fill(false) // [false] * n

const matrix = Array.from(Array(3), () => Array(2).fill(null))
console.log(matrix) // 3 * 2 null로 세팅된 2차배열

let table = {}
for (const p of participant){
    table[p] = (table[p] || 0) + 1
}

let forRange = [...Array(5).keys()].map(x => x + 1) // [ 1, 2, 3, 4, 5 ]
let forRange2 = Array.from({length: 10}, (_, i) => i+1) // [ 1, 2, 3, ... ,10 ]

//--------------------------------------------//

/* stack & que
 * arr로 구현
 * push, pop, shift
 */
let data = ['a', 'b', 'c', 'd'];
const top = data[data.length-1] || null

data.push('e'); // ['a', 'b', 'c', 'd', 'e']
const pop = data.pop(); // 'e'
/* push - 2개도 가능 */
data.push('1', '2'); // [ 'a', 'b', 'c', 'd', '1', '2' ]

const popLeft = data.shift(); // 'a'
data.unshift('a'); // // ['a', 'b', 'c', 'd']

class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    push(value) {
        this.queue[this.rear++] = value;
    }
    popleft() {
        if (this.queue.length === 0) {
            return null;
        }
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    peek() {
        return this.queue[this.front]
    }
}

const que = new Queue ();
console.log(que) // Queue { queue: [], front: 0, rear: 0 }
que.popleft()
console.log(que)
que.push(1)
que.push(2)
que.push(3)
que.popleft()
console.log(que.peek()) // 2
console.log(que) // Queue { queue: [ <1 empty item>, 2, 3 ], front: 1, rear: 3 }
console.log(que.popleft()) // 2
console.log(que) // Queue { queue: [ <2 empty items>, 3 ], front: 2, rear: 3 }

//--------------------------------------------//

/* reduce
 * 중첩 배열 펼치기
 * 대표예시 sum
 * 배열 갯수 세기 (like Counter)
 */

const doubleArr = [[0, 1], [2, 3], [4, 5]]
const flattened = doubleArr.reduce(( acc, cur ) => acc.concat(cur), []);
// 펼친 결과: [0, 1, 2, 3, 4, 5]

const sumWithInitial = flattened.reduce((prev, cur, idx) => prev + cur + idx, 0);
console.log(sumWithInitial) 
// 0 + 0+0 + 1+1 + 2+2 + 3+3 + 4+4 + 5+5 => 30

const sum = Array
    .from(new Array(5), (_, i) => i + 1)
    .reduce((acc, cur) => acc + cur, 0); // 1 + 2 + 3 + 4 + 5

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
const countedNames = names.reduce((allNames, name) => {
    allNames[name] = (allNames[name] || 0) + 1
    return allNames;
}, {});

// forEach로: names.forEach(val => count[val] = (count[val] || 0) + 1);

console.log(countedNames)
// { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
//--------------------------------------------//

/* 최댓값 / 최솟값
 */
let numbers2 = [44, 2, 5, -1, 3];
const maxNum = Math.max(...numbers2);
const minNum = Math.min(...numbers2);
console.log(maxNum, minNum); // 44 -1
//--------------------------------------------//

/* object
 * keys, values, entries
 * key값들 배열로 반환
 */

const obj = { a: 1, b: 2, c: 3 };

console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.keys(obj)); // ["a", "b", "c"]
console.log(Object.getOwnPropertyNames(obj)); // ["a", "b", "c"]

console.log(obj.hasOwnProperty('a')); // true
console.log('a' in obj); // true

delete obj.a // 제거

// 배열 확인은 includes
// arr.includes('a');

//--------------------------------------------//

/* set
 * 집합
 */
let set1 = new Set(), set2 = new Set([1, 2, 3]); // init
set1.add(1); // 추가
set1.has(2); // 요소 확인
const setLen = set1.size; // 요소 개수
set1.delete(5); // 제거

// 교집합은 다음으로 흉내(simulate)낼 수 있음
var intersection = new Set([...set1].filter(x => set2.has(x)));

// 차집합은 다음으로 흉내낼 수 있음
var difference = new Set([...set1].filter(x => !set2.has(x)));

// 중복요소 제거
const repeated = ['Lee', 'Kim', 'Park', 'Lee', 'Kim'];
const unique = [...new Set(repeated)]; //  [ 'Lee', 'Kim', 'Park' ]

//--------------------------------------------//

/* array & string
 * string으로 .join()
 * array로 .split()
 */
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join(''));
// expected output: "FireAirWater"

const myString = 'Hello 1 word. Sentence number 2.';
console.log(myString.split(' '));
// [ 'Hello', '1', 'word.', 'Sentence', 'number', '2.' ]
const myString2 = 'Hello';
console.log([...myString2]);
// [ 'H', 'e', 'l', 'l', 'o' ]

// separator가 포획 괄호 ()를 포함하는 정규표현식일 경우, 포획된 결과도 배열에 포함됩니다.
const splitsWithSep = myString.split(/(\d)/);
const splitsWithoutSep = myString.split(/\d/);
console.log(splitsWithSep);
// [ 'Hello ', '1', ' word. Sentence number ', '2', '.' ]
console.log(splitsWithoutSep);
// [ 'Hello ', ' word. Sentence number ', '.' ]

//--------------------------------------------//

/* map
 * index와 함께 저장
 * zip 기능
 */
let costs = [44, 32, 12, 51]
const double = costs.map(x => x * 2);
console.log(double) 
// [ 88, 64, 24, 102 ]

const priorities = costs.map((prior, index) => [index, prior])
console.log(priorities) 
//[ [ 0, 44 ], [ 1, 32 ], [ 2, 12 ], [ 3, 51 ] ]

const zipped = costs.map((el, idx) => [el, double[idx]]);
console.log(zipped)
// [ [ 44, 88 ], [ 32, 64 ], [ 12, 24 ], [ 51, 102 ] ]

//--------------------------------------------//

/* filter
 * some
 * any
 */
const raw = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = raw.filter(w => w.length > 6);
console.log(result);
// ["exuberant", "destruction", "present"]

const numArr = [1, 2, 3, 4, 5];
console.log(numArr.some((element) => element % 2 === 0));
// expected output: true
console.log(numArr.every((element) => element < 4));
// expected output: false
//--------------------------------------------//


/* Time And Date
 * timestamp로 변환
 * 년 / 월 / 일 구하기
 */

const curTstmp = new Date().getTime();

const createdDateObj = new Date(curTstmp);
const year = createdDateObj.getFullYear();
const month = createdDateObj.getMonth() + 1;
const day = createdDateObj.getDate();


/* 이분탐색
 * 정렬된 데이터에서 타겟 인덱스 찾기
 * 조건에서 가능한 최솟값 찾기
 * 조건에서 가능한 최대값 찾기
 */
const getTargetIdx = (target, data) => {
    data.sort((a, b) => a - b);
    let start = 0, end = data.length - 1;
    while (start <= end) {
        const mid = parseInt((start + end) / 2);
        if (target === data[mid]) {
            return mid;
        } else if (target < data[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

const times = [7, 10]
const getIsImpossible = (n, mid, times) => { 
    return times.reduce((acc, cur) => acc + parseInt(mid / cur), 0) < n;
}
const getPossMin = (n, times) => { 
    let start = 1, end = Math.max(...times)*n
    while (start < end) {
        const mid = parseInt((start + end) / 2);
        if (getIsImpossible(n, mid, times)) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
}

const getPossMax = (stones, k) => {
    let start = 1; // Math.min(...stones)
    let end = 200000000; // Math.max(...stones)
    while (start < end) {
        const mid = parseInt((start + end + 1) / 2); // 나눗셈
        if (getIsPossible(mid, stones, k)) {
            start = mid;
        } else {
            end = mid - 1;
        }
    }
    return end;
}

//--------------------------------------------//

/* 정규표현식 - 속도는 느린편
 * 검색 / 대체 / 추출
 * /패턴/플래그 형태
 */

const re = /(\w+)\s(\w+)/;
const reStr = "John Smith";
const newStr = reStr.replace(re, "$2, $1");
console.log(newStr); // "Smith, John"

const numRegEx = /\d{3}-\d{3,4}-\d{4}/g
const numRegExCapture = /(\d{3})-(\d{3,4})-(\d{4})/g
const str1 = '전화번호는 010-9015-2533, 010-1234-5678 입니다'
const str2 = '전화번호 엄서영'
/* test - boolean 값 반환 */
console.log(numRegEx.test(str1)) // true
console.log(numRegEx.test(str2)) // false
/* exec - 추출한 1개만 반환 */
console.log(numRegEx.exec(str1)) // ['010-9015-2533', ...]
console.log(numRegEx.exec(str2)) // null
/* matchAll, match - 모두 반환, g와 함께 사용 */
console.log(str1.match(numRegEx)) // ['010-9015-2533', '010-1234-5678'
console.log(str2.match(numRegEx)) // null
console.log(str1.match(numRegExCapture)) // null
console.log(str1.matchAll(numRegEx))// [['010-9015-2533', ...], ['010-1234-5678',...]]
/* search - 인덱스 반환 */
console.log(str1.search(numRegEx)) // 6
/* 캡쳐 */
console.log(str1.matchAll(numRegExCapture)) // [[ '010-9015-2533', '010', '9015', '2533', index: 6, ], [...]]

const mailRegEx = /(.+)@(.+)\..+/
const myMail = 'tjdud0123@naver.com'
console.log([...myMail.match(mailRegEx)]) // [ 'tjdud0123@naver.com', 'tjdud0123', 'naver' ]

const beforeCompress = 'AAAAAABBBDFFFFFFFKK' // 비손실 압축 예제
const compressRegExp = /(.)\1*/g
const compressed = beforeCompress
    .match(compressRegExp)
    .reduce((acc, cur) => acc + `${cur.length}${cur.slice(-1)}`, "")
console.log(compressed) // 6A3B1D7F2K

//--------------------------------------------//

/* 소수구하기
 * 에라토스테네스의 체
 */
const MAX = 100
let primeSet = new Set()

// 소수 체크
let primes = [false, false, ...Array(MAX-1).fill(true)]

for (let j = 2; j <= MAX; j++) {
    if (primes[j]) {
        primeSet.add(j)
        for (let k = 2 * j; k <= MAX; k += j) {
            primes[k] = false
        }
    }
}

console.log([...primeSet]) // [ 2,  3,  5,  7, 11, 13, 17, 19, ...]

//--------------------------------------------//

/* swap
 * ES6의 구조 분해 할당 문법을 사용하여 두 변수를 swap
 */
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5

//--------------------------------------------//

/* 동적 속성 이름
 * ES6에 추가된 기능으로 객체의 키를 동적으로 생성
 */
const nameKey = 'name';
const emailKey = 'email';
const person = {
    [nameKey]: 'Usy',
    [emailKey]: 'tjdud0123@naver.com'
};
console.log(person);

// {
//   name: 'Usy',
//   email: 'tjdud0123@naver.com'
// }

//--------------------------------------------//

/* !! 연산자를 사용하여 Boolean 값으로
 * !! 연산자를 이용하여 0, null, 빈 문자열, undefined, NaN을 false로 그 외에는 true로 변경
 */

const check = (variable) => {
    if (!!variable) {
        console.log(variable);
    } else {
        console.log('잘못된 값');
    }
}
  check(null); // 잘못된 값
  check(3.14); // 3.14
  check(undefined); // 잘못된 값
  check(0); // 잘못된 값
  check('Good'); // Good
  check(''); // 잘못된 값
  check(NaN); // 잘못된 값
  check(5); // 5

//--------------------------------------------//

/* 예제
 * 2중 object dictionary 초기화
 * 2개 기준 정렬
 * 함수형 프로그래밍
 */

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
        .map((songs) => songs.sort((a, b) => plays[b] - plays[a] || a - b)) // 이중 정렬

//--------------------------------------------//

/* 힙
 * MaxHeap 구현
 */

class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex] < value) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex  = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while (this.heap[currentIndex] < this.heap[leftIndex] || 
                this.heap[currentIndex] < this.heap[rightIndex]) {
            if (this.heap[leftIndex] < this.heap[rightIndex]) {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[rightIndex];
                this.heap[rightIndex] = temp;
                currentIndex = rightIndex;
            } else {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }

        return returnValue;
    }
}
//--------------------------------------------//