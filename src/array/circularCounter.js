// @flow

function josepheus(intArr: Array<number>, skip: number): Array<number> {
  const outputArr = []

  let idx = 0
  while (intArr.length > 0) {
    idx = (skip - 1 + idx) % intArr.length
    outputArr.push(intArr[idx])
    intArr.splice(idx, 1)
  }

  return outputArr
}

module.exports = josepheus
