/**
 * https://codility.com/programmers/task/perm_check/
 * https://codility.com/demo/take-sample-test/perm_check/
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
  if ((inputSort.length === 2)) {
    if (inputSort[1] - inputSort[0] !== 1) {
      return 0;
    }
  }
  var answer = 0;
  var tempsub, temp2sub, tempMod, tempMod2;
  inputSort.forEach(function (element, index) {
    if (index !== 0) {
      temp2sub = tempsub;
      tempsub = element - inputSort[index-1];

      tempMod2 = tempMod;
      tempMod = element % inputSort[index-1];

      if (index > 1) {
        if(tempsub === temp2sub || (tempMod === tempMod2) ) {
          answer = 1;
        }
      }
    }
  });

  answer = (inputSort.length > 2) ? answer : 1;
  return answer;
};


var input = [4, 1, 3, 2];

console.log(solution(input));
console.log(solution([2, 4, 8, 16]));
console.log(solution([1, 3, 4]));
console.log(solution([1, 3, 5, 7]));
console.log(solution([2, 5, 11, 23]));
console.log(solution([2, 5]));
console.log(solution([2]));
