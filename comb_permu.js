/* 순열 */

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
}

const example = [1,2,3,4];
const result = getCombinations(example, 3);

console.log(result); // => [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]


/* 조합 */

function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
    const permutations = getPermutations(rest, selectNumber - 1); 
    const attached = permutations.map((permutation) => [fixed, ...permutation]); 
    results.push(...attached); 
    });
  return results;
}

const example = [1,2,3,4];
const result = getPermutations(example, 3);

console.log(result); // => [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 2 ], [ 1, 3, 4 ], [ 1, 4, 2 ], [ 1, 4, 3 ]...]

// 출처, 참고 https://medium.com/@jun.choi.4928
