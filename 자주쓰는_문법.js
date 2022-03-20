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

/* 잘라내기
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

const matrix = Array.from(Array(3), () => Array(2).fill(null))
console.log(matrix) // 3 * 2 null로 세팅된 2차배열

let table = {}
for (const p of participant){
    table[p] = (table[p] || 0) + 1
}

let forRange = [...Array(5).keys()].map(x => x + 1)
// [ 1, 2, 3, 4, 5 ]
//--------------------------------------------//

/* stack & que
 * arr로 구현
 * push, pop, shift
 */
let data = ['a', 'b', 'c', 'd'];

data.push('e'); // ['a', 'b', 'c', 'd', 'e']
const pop = data.pop(); // 'e'

const popLeft = data.shift(); // 'a'
data.unshift('a'); // // ['a', 'b', 'c', 'd']
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