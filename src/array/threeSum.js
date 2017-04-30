// @flow

type Tripple = [number, number, number];

function threeSum(intArr: Array<number>): Array<Tripple> {
  const output = [];
  const sortedArr = intArr.slice();
  sortedArr.sort((intA, intB) => intA - intB);

  for (let left = 0; left < sortedArr.length - 2; left++) {
    if (left > 0 && sortedArr[left] === sortedArr[left - 1]) {
      continue;
    }

    let middle = left + 1;
    let right = sortedArr.length - 1;

    while (middle < right) {
      const sum = sortedArr[left] + sortedArr[middle] + sortedArr[right];
      if (sum > 0) {
        right = right - 1;
      } else if (sum < 0) {
        middle = middle + 1;
      } else {
        output.push([sortedArr[left], sortedArr[middle], sortedArr[right]]);
        while (middle < right && sortedArr[middle] === sortedArr[middle + 1]) {
          middle = middle + 1;
        }

        while (middle < right && sortedArr[right] === sortedArr[right - 1]) {
          right = right - 1;
        }

        middle = middle + 1;
        right = right - 1;
      }
    }
  }
  return output;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

module.exports = threeSum;
