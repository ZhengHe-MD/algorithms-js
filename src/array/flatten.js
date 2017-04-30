// @flow

type NestedArray<T> = Array<T | NestedArray<T>>;

function flatten(
  nestedArray: NestedArray<number>,
  baseArr: ?Array<number>
): Array<number> {
  let flatArr: Array<number> = baseArr || [];

  nestedArray.forEach(subNestedArray => {
    if (subNestedArray instanceof Array) {
      flatArr = flatten(subNestedArray, flatArr);
    } else {
      flatArr.push(subNestedArray);
    }
  });

  return flatArr;
}

module.exports = flatten;
