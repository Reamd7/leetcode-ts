/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 *
 * https://leetcode-cn.com/problems/house-robber/description/
 *
 * algorithms
 * Medium (50.31%)
 * Likes:    1546
 * Dislikes: 0
 * Total Accepted:    328.1K
 * Total Submissions: 651.8K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 * 2 7 9 3 1
 * 2 0 0 0 0 
 * 2 7 0 0 0
 * 2 7 11 0 0 
 * 2 7 11 10 0
 * 2 7 11 10 12
 * 
 * 2 1 1 0
 * 2 0 0 0
 * 2 2 0 0
 * 2 2 3 0
 * 2 2 3 3
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
function rob(nums: number[]): number {
  let n_1 = nums[0];
  let n_2 = 0;
  let tmp = 0;
  for (let index = 1; index < nums.length; index++) {
    tmp = Math.max(n_1, nums[index] + n_2);
    n_2 = n_1;
    n_1 = tmp;
  }
  return n_1;
};
// @lc code=end

export default rob;