/**
 * https://codility.com/programmers/task/perm_missing_elem/
 * https://codility.com/demo/take-sample-test/perm_missing_elem/
 * https://codility.com/demo/results/trainingKJDYHS-UA3/
 */

'use strict';
function solution(A) {
  A.sort(function (a, b) {
    return a - b;
  });

  if (A[0] !== 1) {
    return 1;
  }
  if (A.length === 1) {
    return 2;
  }

  var answer = 1;
  A.forEach(function (element, index) {
    if ( (element - A[index - 1]) > 1 ) {
      answer = element - 1;
    }
  });
  return (answer === 1) ? A[A.length-1] + 1 : answer;
}

var input = [1, 2, 3, 5];

console.log(solution(input));
console.log(solution([1]));
console.log(solution([0]));
console.log(solution([1, 2]));
console.log(solution([2, 3]));
