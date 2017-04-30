// @flow

/*
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice.
Example:
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
*/

function twoSum(intArr: Array<number>, target: number): ?[number, number] {
  const resToIdx = {};
  let tuple = null;
  intArr.forEach((ele, idx) => {
    if (ele in resToIdx) {
      tuple = [resToIdx[ele], idx];
    } else {
      resToIdx[target - ele] = idx;
    }
  });
  return tuple;
}

module.exports = twoSum;
