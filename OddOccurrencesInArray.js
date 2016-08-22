/**
 * https://codility.com/demo/results/trainingW6PGDQ-5ZC/
 */
'use strict';

function solution(N) {
  if (!Array.isArray(N)) {
    return 0;
  }
  if (N.length == 1) {
    return N[0];
  }
  if (N.length < 1 || N.length % 2 == 0) {
    return 0;
  }

  var value = N;
  value.sort(function (a, b) {
    return a - b;
  });

  var answer = 0;

  value.forEach(function (element, index) {
    if (index !== value.length - 1) {
      if (element !== value[index-1] && element !== value[index+1]) {
        answer = element;
      }
    }

    if (index == value.length - 1 && element !== value[index-1]) {
      answer = element;
    }
  });

  return answer;
}

let input = [9, 3, 9, 3 ,9, 7, 9];

console.log(solution(input));
console.log(solution([1]));
console.log(solution([]));
console.log(solution([201]));
console.log(solution([1, 2]));
console.log(solution([1, 2, 1, 1]));
