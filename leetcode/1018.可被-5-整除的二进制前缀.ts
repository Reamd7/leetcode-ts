/*
 * @lc app=leetcode.cn id=1018 lang=typescript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
function prefixesDivBy5(A: number[]): boolean[] {
  let res = 0;
  return A.map(v => {
    res = ((res << 1) + v) % 10;
    return res % 5 === 0;
  });
};
// @lc code=end

export default prefixesDivBy5;
