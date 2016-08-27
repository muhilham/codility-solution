/**
 * https://codility.com/demo/take-sample-test/frog_river_one/
 * https://codility.com/demo/results/trainingQFM27H-PXH/
 */


'use strict';


function solution(x, A) {
  var position = A.indexOf(x);

  if (position === -1) {
    return position;
  }

  var indexes = [];
  var tempInc = 0;
  for (var i = 1; i <= x; i++) {
    if (A.indexOf(i) === -1) {
      tempInc = -1;
    }
    indexes.push(A.indexOf(i));
  }

  if (tempInc === -1) {
    return -1;
  }

  var temp_ = -1;
  indexes.forEach(function (element) {
    if (element > temp_) {
      temp_ = element;
    }
  });

  return temp_;
}

var input = [1, 3, 1, 4, 2, 3, 5, 4];
var input2 = [2, 2, 2, 2, 2, 2];

console.log(solution(3, input));
console.log(solution(2, input2));
// console.log(solution(1, [1]));
// console.log(solution(3, [1, 2, 3, 5, 3, 1]));
console.log(solution(3, [1, 3, 1, 3, 2, 1, 3]));

// in which index that frog could escape ?
