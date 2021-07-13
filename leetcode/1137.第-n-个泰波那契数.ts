/*
 * @lc app=leetcode.cn id=1137 lang=typescript
 *
 * [1137] 第 N 个泰波那契数
 *
 * https://leetcode-cn.com/problems/n-th-tribonacci-number/description/
 *
 * algorithms
 * Easy (55.59%)
 * Likes:    79
 * Dislikes: 0
 * Total Accepted:    33.1K
 * Total Submissions: 59.5K
 * Testcase Example:  '4'
 *
 * 泰波那契序列 Tn 定义如下： 
 * 
 * T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
 * 
 * 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 4
 * 输出：4
 * 解释：
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 25
 * 输出：1389537
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 37
 * 答案保证是一个 32 位整数，即 answer <= 2^31 - 1。
 * 
 * 
 */

// @lc code=start
function tribonacci(n: number): number {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else {
    let n_n = 0;
    let n_1 = 1;
    let n_2 = 1;
    let n_3 = 0;
    for (let i = 3; i <= n; i++) {
      n_n = n_1 + n_2 + n_3;
      n_3 = n_2;
      n_2 = n_1;
      n_1 = n_n;
    }
    return n_n;
  }
};
// @lc code=end

export default tribonacci;