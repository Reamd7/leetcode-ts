/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 *
 * https://leetcode-cn.com/problems/integer-break/description/
 *
 * algorithms
 * Medium (60.05%)
 * Likes:    554
 * Dislikes: 0
 * Total Accepted:    93.9K
 * Total Submissions: 156.4K
 * Testcase Example:  '2'
 *
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 * 
 * 示例 1:
 * 
 * 输入: 2
 * 输出: 1
 * 解释: 2 = 1 + 1, 1 × 1 = 1。
 * 
 * 示例 2:
 * 
 * 输入: 10
 * 输出: 36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 * 
 * 说明: 你可以假设 n 不小于 2 且不大于 58。
 * 
 */

// @lc code=start

function RangeMap<T>(start: number, end: number, callback: (index: number) => T) {
  const res: T[] = [];
  for (let index = start; index < end; index++) {
    res.push(callback(index));
  }
  return res;
}

function integerBreak(n: number): number {
  // if (n === 1 || n === 2) {
  //     return 1
  // } else {
  //     let res = 0;
  //     for (let index = 1; index < n; index++) {
  //         res = Math.max(
  //             res,
  //             Math.max(index * integerBreak(n - index), index * (n - index)) // 这就是状态转移方程
  //         )
  //         // 一次不拆 = 1 * prev，拆递归次数，拆两次
  //     }
  //     return res;
  // }

  // 如果要进行dp
  // 1 = 1
  // 2 = 1
  // 3 = 1 + 2 => Math.max( 1 * (3 - 1), 1 * dp[2], 2 * (3 - 2), 2 * dp[1], dp[2] ) // 就是 下一个值 的求解可能用到上一个值的解
  // 4 = Math.max( 1 * (4 - 1), )
  // 求20
  const mem = [0, 1, 1]; // O(n)的空间记忆
  for (let i = 2; i <= n; i++) {  // 拆分数的下标
    mem[i] = Math.max(...RangeMap(1, i, (j) => {
      return Math.max(j * mem[i - j], j * (i - j));
    }));
  }
  return mem[n];

};
// @lc code=end

export default integerBreak;