/*
 * @lc app=leetcode.cn id=326 lang=typescript
 *
 * [326] 3的幂
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  switch(n) {
    case 1:
    case 3:
    case 9:
    case 27:
    case 81:
    case 243:
    case 729:
    case 2187:
    case 6561:
    case 19683:
    case 59049:
    case 177147:
    case 531441:
    case 1594323:
    case 4782969:
    case 14348907:
    case 43046721:
    case 129140163:
    case 387420489:
    case 1162261467:
      return true;
    default:
      return false;
  }
};
// @lc code=end

export default isPowerOfThree;
