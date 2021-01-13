/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2的幂
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {

  // 8  00001000
  // -8 11111000
  // 8 & -8 （按位与） = 8

  // 8  00001000
  // 7  00000111
  // 8 & 7 = 0

  // 8 >> 1 === 4 => 8 / 2

  return (n > 0) && (n & -n) == n;
};
// @lc code=end

export default isPowerOfTwo
;
