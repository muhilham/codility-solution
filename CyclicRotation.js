/**
 * https://codility.com/demo/take-sample-test/cyclic_rotation/
 * https://codility.com/demo/results/trainingA9SY6X-R9R/
 */
'use strict';

function solution(N, K) {

  if (!Array.isArray(N)) {
    return N;
  }
  if (N.length < 1 || K < 1) {
    return N;
  }
  var a = 0;
  var arrLength = N.length;
  for (var i = 0; i < K; i++) {
    a = N[arrLength - 1];
    N.splice(arrLength - 1, 1);
    N.splice(0, 0, a);
  }

  return N;
}

// solution( [], 0 );
// solution([3, 8, 9, 7, 6], 3 );
// console.log(solution( [], 3 ));
console.log(solution( [], 1 ));
// console.log(solution([3, 8, 9, 7, 6], 3));
// console.log(solution([1, 2], 3 ));
// console.log(solution([1,  2, 3], 2) );
