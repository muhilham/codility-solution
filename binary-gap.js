/**
 * https://codility.com/demo/results/trainingA222FH-6NB/
 */

'use strict';

function solution(N) {

  // turn decimal into binary
  var binary = (N >>> 0).toString(2);

  // when there is no 0 in binary
  if (binary.indexOf(0) == -1) {
    return 0;
  }

  var arrBinary = binary.split(1);
  var binaryLength = new Array();

  arrBinary.forEach(function (element, index) {
    if (element != '') {
      binaryLength.push(element.length)
    }
  });

  // when there is no gap
  // example : binary == 110
  if (binary[binary.length - 1] !== '1' && binaryLength.length - 1 == 0) {
    return 0;
  }

  // when the last element array of binary is not 1
  // means that the last element array of binaryLength is not counted as gap
  if (binary[binary.length - 1] !== '1') {
    binaryLength.splice( binaryLength.length - 1, 1 );
  }

  binaryLength.sort(function (a, b) {
    return b - a;
  });

  return binaryLength[0];
}
console.log(solution(15));
solution(6);
// solution(15);
// solution(82);
// console.log(solution(15));
// console.log(solution(82));
