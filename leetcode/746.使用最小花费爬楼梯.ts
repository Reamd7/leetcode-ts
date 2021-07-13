/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 *
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/description/
 *
 * algorithms
 * Easy (56.57%)
 * Likes:    589
 * Dislikes: 0
 * Total Accepted:    106.2K
 * Total Submissions: 187.7K
 * Testcase Example:  '[10,15,20]'
 *
 * 数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。
 * 
 * 每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。
 * 
 * 请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：cost = [10, 15, 20]
 * 输出：15
 * 解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 * 输出：6
 * 解释：最低花费方式是从 cost[0] 开始，逐个经过那些 1 ，跳过 cost[3] ，一共花费 6 。
 * 
 * 1 100 1 1 1 100 1 1 100 1
 * 0 0   0 0 0 0   0 0 0   1
 * 0 0   0 0 0 0   0 2 101 1
 * 0 0   0 0 0 102 Math.min(2 + 1, 101 + 1) = 3 Math.min(2, 102) = 2 101 1
 * 0 0   0 0 3 + 1 Math.min(102 + 3, )
 * 提示：
 * 
 * 
 * cost 的长度范围是 [2, 1000]。
 * cost[i] 将会是一个整型数据，范围为 [0, 999] 。
 * 
 * 
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  const mem: number[] = Array(cost.length).fill(Infinity);
  for (let index = cost.length - 1; index > -1; index--) {
    mem[index] = Math.min(
      cost[index] + (mem[index + 1] || 0), cost[index] + (mem[index + 2] || 0),
    );
  }
  return Math.min(mem[0], mem[1]);
};
// @lc code=end

export default minCostClimbingStairs;