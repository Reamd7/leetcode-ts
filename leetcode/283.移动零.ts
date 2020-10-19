/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// function exchange(num: number[], start: number, end: number) {
//   if (start === end) return ;
//   for (let index = start; index < end; index++) {
//     num[index] = num[index + 1]
//   }
//   num[end] = 0;
// }

function moveZeroes(nums: number[]): void {
  // let zerocur = nums.length - 1;
  // for (let index = nums.length - 1; index > -1; index--) {
  //   const el = nums[index];
  //   if (el === 0) {
  //     // 进行 index - zerocur 范围的交换
  //     exchange(nums, index, zerocur)
  //   }
  // }

  let exchangeCur = 0; // 交换的下标

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]; // 当前 element
    if (element !== 0) {
      nums[exchangeCur] = element;

      if (exchangeCur !== index) {
        nums[index] = 0;
      }
      exchangeCur++;
    }
  }
};
// @lc code=end

export default moveZeroes;
