/**
 * https://codility.com/programmers/task/missing_integer/
 * https://codility.com/demo/take-sample-test/missing_integer/
 * https://codility.com/demo/results/training9BRSY7-38U/
 */

'use strict';

function solution(A) {

  if (A.indexOf(1) === -1) {
    return 1;
  }

  if (!A.length) {
    return 1;
  }

  if (A.length === 1) {
    if (A[0] !== 1) {
      return 1;
    };

    return A[0] + 1;
  }

  var inputSort =  A.sort(function (a,b) {
    return a - b;
  });

  var inputDistinct = [];
  var objChecker = {};
  inputSort.forEach(function (element, index) {
    if (objChecker.hasOwnProperty(element)) {
      return;
    }
    inputDistinct.push(element);
    objChecker[element] = 1;
  });

  var answer = false;
  var tmp;
  inputDistinct.forEach(function (element, index) {
    if (answer) {
      return;
    }
    if (index > 0) {

      if (element - inputDistinct[index-1] !== 1) {
        tmp = inputDistinct[index-1] + 1;

        if (tmp > 0) {
          return answer = tmp;
        }
      }
    }
  });

  if (!answer) {
    answer = inputDistinct[inputDistinct.length-1] + 1;
  }

  return answer;
}

var input = [1,3,6,4,1,2];

console.log(solution(input));
console.log(solution([]));
console.log(solution([0]));
console.log(solution([1]));
console.log(solution([1,2]));
console.log(solution([-2,1,3]));
console.log(solution([-2,1,2,3]));
console.log(solution([4, 5, 6, 2]));
