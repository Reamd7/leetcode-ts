/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (52.28%)
 * Likes:    1745
 * Dislikes: 0
 * Total Accepted:    488.8K
 * Total Submissions: 934.8K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n === 2) return 2;
  if (n === 1) return 1;
  let n_1 = 2;
  let n_2 = 1;
  let n_n = 0;
  for (let index = 3; index <= n; index++) {
    n_n = n_1 + n_2;
    n_2 = n_1;
    n_1 = n_n;
  }
  return n_n;
};
// @lc code=end

export default climbStairs;