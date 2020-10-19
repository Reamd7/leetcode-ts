/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  // 等价于283的思路
  let exchangeCur = 0; // 交换的下标

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]; // 当前 element
    if (element !== val) {
      nums[exchangeCur] = element;

      if (exchangeCur !== index) {
        nums[index] = val;
      }
      exchangeCur++;
    }
  }
  return exchangeCur;
};
// @lc code=end

export default removeElement;
