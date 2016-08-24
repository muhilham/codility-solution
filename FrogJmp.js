/**
 * https://codility.com/demo/results/trainingQDT27K-AUM/
 */

'use strict';

function solution(x, y, d){
  if (x === y) {
    return 0;
  }
  var needToJump = y - x;
  return Math.ceil(needToJump / d);
}

console.log( solution(10, 85, 30)) ;
