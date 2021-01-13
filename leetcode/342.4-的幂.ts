/*
 * @lc app=leetcode.cn id=342 lang=typescript
 *
 * [342] 4的幂
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
  if (n < 1) {
    return false;
  }

  while (n % 4 == 0) {
    // eslint-disable-next-line no-param-reassign
    n /= 4;
  }

  return n == 1;

};
// @lc code=end

export default isPowerOfFour;
