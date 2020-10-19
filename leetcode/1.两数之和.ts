/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 */

// @lc code=start

function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {}; // hashmap + for
  const res: [number, number] = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    const diff = (target - nums[i]);
    if (map[diff] != undefined) {
      return [map[diff], i];
    }
    map[nums[i]] = i;
  }
  return res;

  // ============================
  // for (let i: number = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] == target) {
  //       return [i, j]
  //     }
  //   }
  // }
  // return [0, 1]
  // ============================

  // const temp = nums.slice().sort((a, b) => a - b);
  // let i = 0;
  // let j = nums.length - 1;
  // while (i < j) {
  //   if ((temp[i] + temp[j]) > target) {
  //     j = j - 1;
  //   } else if ((temp[i] + temp[j]) < target) {
  //     i = i + 1;
  //   } else {
  //     break;
  //   }
  // };

  // let p = 0, k = nums.length - 1;
  // let iVal = temp[i];
  // let jVal = temp[j];
  // for (let index = 0; index < nums.length; index++) {
  //   const el = nums[index];
  //   if (el === iVal) {
  //     p = index
  //     iVal = NaN
  //   } else if (el === jVal) {
  //     k = index
  //     jVal = NaN
  //   }
  //   if (isNaN(iVal) && isNaN(jVal)) break;
  // }
  // return [p, k];
}
// @lc code=end

export default twoSum;
