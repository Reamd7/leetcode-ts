/*
 * @lc app=leetcode.cn id=279 lang=typescript
 *
 * [279] 完全平方数
 *
 * https://leetcode-cn.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (62.56%)
 * Likes:    1007
 * Dislikes: 0
 * Total Accepted:    174.9K
 * Total Submissions: 279.6K
 * Testcase Example:  '12'
 *
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 
 * 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。
 * 
 * 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11
 * 不是。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 12
 * 输出：3 
 * 解释：12 = 4 + 4 + 4
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 13
 * 输出：2
 * 解释：13 = 4 + 9
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 1000
 * 
 * 
 */

// @lc code=start

function numSquares(n: number): number {
  const mem: number[] = Array(n + 1).fill(Infinity);
  mem[0] = 0;
  for (let index = 1; index <= n; index++) { // 1 - n 的所有数字
    for (let j = 1; j * j <= index; j++) { // 1 - index 的 所有完全平方数
      mem[index] = Math.min(
        // ( X - 某个完全平方数 ) + 1 次 => X = historyValue + j * j
        mem[index], mem[index - j * j] + 1,
      );
    }
  }
  return mem[n];
};
// @lc code=end


export default numSquares;