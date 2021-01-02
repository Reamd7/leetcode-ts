/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  const windowLength = 2; // 可变滑动窗口大小 => 使得每个元素最多出现两次

  let count = 1;
  let subArrayCur = 0; // 交换的下标
  let target = nums[0]; // 子数组的最后一个值。

  for (let index = 1; index < nums.length; index++) {
    const element = nums[index];
    if (element > target) { // update new change value
      target = element;
      count = 1;
      subArrayCur += 1; //加一个交换的下标
      // ========================================
      if (index !== subArrayCur) { // [0, 1, 2, 3, 4, 5]
        nums[index] = nums[subArrayCur];
        nums[subArrayCur] = element;
      }
    } else { // continue same change value
      // 滑动窗口
      if (count < windowLength) {
        count += 1;
        subArrayCur += 1; //加一个交换的下标
        // ========================================
        if (index !== subArrayCur) {
          nums[index] = nums[subArrayCur];
          nums[subArrayCur] = element;
        }
      }
    }

    // 排序好了就不会有这个可能性了
    // else if (element == target) { // continue same change value
    //   // 滑动窗口
    //   if (count < windowLength) {
    //     count++;
    //     subArrayCur++; //加一个交换的下标
    //     changeIndex(nums, index, subArrayCur);
    //     // nums[index] = nums[subArrayCur];
    //     // nums[subArrayCur] = element;
    //   }
    // } else {
    //   if (count < windowLength) {
    //   count++;
    //   subArrayCur++; //加一个交换的下标
    //   changeIndex(nums, index, subArrayCur);

    //   nums[index] = nums[subArrayCur];
    //   nums[subArrayCur] = element;
    //   }
    // }

  }
  return subArrayCur + 1;
};
// @lc code=end

export default removeDuplicates;

