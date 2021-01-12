/*
 * @lc app=leetcode.cn id=908 lang=typescript
 *
 * [908] 最小差值 I
 */

// @lc code=start
function smallestRangeI(A: number[], K: number): number {
  let max = A[0];
  let min = A[0];
  for (const x of A) {
    min = Math.min(min, x);
    max = Math.max(max, x);
  }
  return Math.max(0, max - min - 2 * K);
};
// @lc code=end

export default smallestRangeI;
