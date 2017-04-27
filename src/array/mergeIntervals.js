// @flow

type Interval = [number, number];

function mergeIntervals(intervals: Array<Interval>): Array<Interval> {
  const mergedIntervals: Array<Interval> = [];
  const sortedIntervals = intervals.sort((i1, i2) => i1[0] - i2[0]);

  sortedIntervals.forEach(interval => {
    const lastInterval = mergedIntervals[mergedIntervals.length - 1]
    if (
      mergedIntervals.length > 0 &&
      interval[0] <= lastInterval[1]
    ) {
      lastInterval[1] = Math.max(interval[1], lastInterval[1])
    } else {
      mergedIntervals.push(interval)
    }
  });

  return mergedIntervals
}

module.exports = mergeIntervals
