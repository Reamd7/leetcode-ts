/*
 * @lc app=leetcode.cn id=860 lang=typescript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
function lemonadeChange(bills: number[]): boolean {
  const count = [0, 0];

  for (const value of bills) {
    if (value === 5) {
      count[0] += 1;
    } else if (value === 10) {
      if (count[0] > 0) {
        count[0] -= 1;
        count[1] += 1;
      } else {
        return false;
      }
    } else {
      // 20
      if (count[1] > 0) {
        if (count[0] > 0) {
          count[1] -= 1;
          count[0] -= 1;
        } else {
          return false;
        }
      } else {
        if (count[0] > 2) {
          count[0] -= 3;
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
// @lc code=end

export default lemonadeChange;
