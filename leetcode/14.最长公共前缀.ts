/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];
  const newStrs = strs.sort((a, b) => a.length - b.length);
  let prefix = newStrs[0];
  for (let index = 1; index < newStrs.length; index++) {
    const element = newStrs[index];
    let commonPrefix = '';
    const len = Math.min(prefix.length, element.length);
    for (let j = 0; j < len; j++) {
      if (prefix[j] === element[j]) {
        commonPrefix += prefix[j];
      } else {
        break;
      }
    }
    prefix = commonPrefix;
    if (prefix.length === 0) break;
  }
  return prefix;
};
// @lc code=end
export default longestCommonPrefix;

