/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (51.12%)
 * Likes:    1002
 * Dislikes: 0
 * Total Accepted:    394.1K
 * Total Submissions: 770.7K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自
 * nums2 的元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [1], m = 1, nums2 = [], n = 0
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums1.length == m + n
 * nums2.length == n
 * 0 
 * 1 
 * -10^9 
 * 
 * 
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // nums1.splice(m, nums1.length - m, ...nums2);
  // nums1.sort((a, b) => a - b);

  let p1 = m - 1, p2 = n - 1;
  let tail = m + n - 1; // num1 的 最后一位
  let cur;
  while (p1 >= 0 || p2 >= 0) { // 双指针迭代
    if (p1 === -1) {        // num1 finished
      cur = nums2[p2--];
    } else if (p2 === -1) { // num2 finished
      cur = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[tail--] = cur;
  }
};
// @lc code=end

export default merge;