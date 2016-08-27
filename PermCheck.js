/**
 * https://codility.com/programmers/task/perm_check/
 * https://codility.com/demo/take-sample-test/perm_check/
 * https://codility.com/demo/results/trainingBU5S9V-ANU/
 */

'use strict';


function solution(input) {

  if (input.length === 1) {
    return (input[0] === 1 )? 1 : 0;
  }
  var inputSort = input.sort(function (a, b) {
      return a-b;
  });

  if (inputSort[0] !== 1) {
    return 0;
  }

  var answer = 1;
  var tempsub, temp2sub, tempMod, tempMod2;
  inputSort.forEach(function (element, index) {
    if (index !== 0) {
      if (element - inputSort[index-1] !== 1) {
        return answer = 0;
      }
    }
  });
  return answer;
};


var input = [4, 1, 3, 2];

// solution(input);
// console.log(solution(input));
// console.log(solution([]));
// console.log(solution([0]));
// console.log(solution([1]));
// console.log(solution([2]));
console.log(solution([1,2]));
console.log(solution([2, 3]));
console.log(solution([2, 4, 8, 16]));
console.log(solution([1, 3, 4]));
// console.log(solution([1, 3, 5, 7]));
// console.log(solution([2, 5, 11, 23]));
// console.log(solution([2, 5]));
// console.log(solution([2]));
