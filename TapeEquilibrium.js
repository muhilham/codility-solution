/**
 * https://codility.com/programmers/task/tape_equilibrium/
 * https://codility.com/demo/results/training8472FD-E62/
 */
'use strict';
function solution(A) {

  if (A.length < 1) {
    return 0;
  }
  if (A.length == 2) {
    return Math.abs(A[0] - A[1]);
  }
  if (A.length == 1) {
    return Math.abs(A[0]);
  }

  var temp, answer, subtrahend;
  var sum_temp = A[0];
  var sum = A.reduce(function (a, b) {
    return a+b;
  }, 0);

  A.forEach(function (element, index) {
    if (index === 0) {
      temp = Math.abs( element - (sum - element));
      return answer =  temp;
    }

    if ( index < (A.length-1) ) {
      sum_temp += A[index];
      temp = Math.abs(sum_temp - (sum -  sum_temp));

      if (temp < answer) {
        answer = temp;
      }
    }
    return answer;

  });

  return answer;
}

var input = [3, 1, 2, 4, 3];
var input2 =  [-10, -20, -30, -40, 100];

console.log('input', solution(input) );

console.log('input2' ,solution(input2)) ;
