/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (73.75%)
 * Likes:    386
 * Dislikes: 0
 * Total Accepted:    193K
 * Total Submissions: 261.7K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 
 * 
 * 
 * 说明：
 * 
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set(nums1.length > nums2.length ? nums2 : nums1);
  return Array.from(new Set((nums1.length > nums2.length ? nums1 : nums2).filter(v => set.has(v))));
};
// @lc code=end

export default intersection;