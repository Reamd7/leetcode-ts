/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  const windowLength = 2; // 可变滑动窗口大小

  let count = 1;
  let subArrayCur = 0; // 交换的下标
  let target = nums[0]; // 子数组的最后一个值。

  for (let index = 1; index < nums.length; index++) {
    const element = nums[index];
    if (element > target) {
      target = element;
      subArrayCur++; //加一个交换的下标
      nums[index] = nums[subArrayCur];
      nums[subArrayCur] = element;
      count = 1;
    } else if (element == target) {
      // 滑动窗口
      if (count < windowLength) {
        count++;
        subArrayCur++; //加一个交换的下标
        nums[index] = nums[subArrayCur];
        nums[subArrayCur] = element;
      }
    } else {
      if (count < windowLength) {
        count++;
        subArrayCur++; //加一个交换的下标
        nums[index] = nums[subArrayCur];
        nums[subArrayCur] = element;
      }
    }

  }
  return subArrayCur + 1;
};
// @lc code=end

export default removeDuplicates;

