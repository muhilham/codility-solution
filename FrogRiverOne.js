/**
 * https://codility.com/demo/take-sample-test/frog_river_one/
 * https://codility.com/demo/results/trainingPTCWPM-Q4U/
 */


'use strict';

function solution(x, A) {
  if (A.length === 1) {
    if (A[0] !== 1 || x !== 1) {
      return -1;
    }
    return 0;
  }

  var sum = (x*(x+1)) / 2;

  var isRepeated = [];
  var beforeSum = 0;
  var answer = 0;
  A.forEach(function (element, index) {
    if (!isRepeated[element] && element <= x) {
      beforeSum += element;
      isRepeated[element] = true;
      if (beforeSum === sum) {
        return answer = index;
      }
    }
    return;
  });

  return (answer === 0) ? -1 : answer;
}

var input = [1, 3, 1, 4, 2, 3, 5, 4];
var input2 = [2, 2, 2, 2, 2, 2];

console.log(solution(3, input));
console.log(solution(2, input2));
console.log(solution(1, [1]));
console.log(solution(9, [1, 2, 3, 5, 3, 1]));
console.log(solution(3, [1, 3, 1, 3, 2, 1, 3]));

// in which index that frog could escape ?
