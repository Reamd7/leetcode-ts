/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {

  let subArrayCur = 0; // 交换的下标
  let target = nums[0]; // 子数组的最后一个值。

  for (let index = 1; index < nums.length; index++) {
    const element = nums[index];
    if (element > target) {
      target = element;
      subArrayCur++; //加一个交换的下标
      nums[index] = nums[subArrayCur];
      nums[subArrayCur] = element;
    }
  }
  return subArrayCur + 1;
};
// @lc code=end

export default removeDuplicates;
