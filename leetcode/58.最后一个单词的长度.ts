/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  const res = s.trimEnd().split(' ');
  return res[res.length - 1].length;
};
// @lc code=end

export default lengthOfLastWord;
