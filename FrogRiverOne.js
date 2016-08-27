/**
 * https://codility.com/demo/take-sample-test/frog_river_one/
 * https://codility.com/demo/results/training4Y8DR2-G9B/
 */


'use strict';

function solution(x, A) {
  var tempInc = 0;
  var current = 0;
  var temp_ = -1;
  for (var i = 1; i <= x; i++) {
    current = A.indexOf(i);
    if (current === -1) {
      tempInc = -1;
      break;
    }
    if (current > temp_) {
      temp_ = current;
    }
  }
  return (tempInc === -1) ? tempInc : temp_;
}

var input = [1, 3, 1, 4, 2, 3, 5, 4];
var input2 = [2, 2, 2, 2, 2, 2];

console.log(solution(3, input));
console.log(solution(2, input2));
// console.log(solution(1, [1]));
console.log(solution(9, [1, 2, 3, 5, 3, 1]));
console.log(solution(3, [1, 3, 1, 3, 2, 1, 3]));

// in which index that frog could escape ?
