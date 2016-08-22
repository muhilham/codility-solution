/**
 * https://codility.com/demo/results/trainingGAB8DR-YGN/
 */
'use strict';
function solution(A) {
  var answer = 0;
  A.forEach(function (element) {
    answer = answer ^ element;
  });
  return answer;
}

let input = [9, 3, 9, 3, 5];
console.log(solution(input));

/**
 * turn all of the decimal into binary
 * do XOR operation in all of the binary
 * since XOR operator will make result of your binary into zero when it find the same number
 * example input = [9, 3, 9, 9, 5]
 * what will happen are :
   1001 (9) ==> a
   0011 (3) ==> b
   1001 (9) ==> c
   0011 (3) ==> d
   0101 (5) ==> e
   ======== XOR
   0101 (5)

   a xor c = 0
   b xor d = 0
 *
 * note : xor means campared element has to resulting odd value in order to get 1.
 */
