/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let pos_0 = 0;
  let pos_2 = nums.length;
  if (pos_2 === 1) {
    return;
  } else {
    for (let index = 0; index < pos_2;) {
      const element = nums[index];
      if (element === 0) {
        nums[index] = nums[pos_0];
        nums[pos_0] = element;
        pos_0 += 1;
        index += 1;
      } else if (element === 1) {
        index += 1;
      } else {
        pos_2 -= 1; // 遇见 2 的时候，只是减少 2 的下标，
        nums[index] = nums[pos_2];
        nums[pos_2] = element;
      }
    }
  }

};
// @lc code=end

export default sortColors;
