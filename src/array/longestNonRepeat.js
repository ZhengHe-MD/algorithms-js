// @flow

function longestNonRepeat(str: string): number {
  let start = 0;
  let maxlen = 0;

  const usedChar = {};

  str.split("").forEach((char, idx) => {
    if (char in usedChar) {
      start = usedChar[char] + 1;
    } else {
      maxlen = Math.max(maxlen, idx - start + 1);
    }
    usedChar[char] = idx;
  });

  return maxlen;
}

module.exports = longestNonRepeat;
