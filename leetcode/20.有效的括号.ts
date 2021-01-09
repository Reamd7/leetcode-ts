/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(stack: string): boolean {
  if (stack.length % 2 === 1) {
    return false;
  }
  const s: string[] = [];
  for (let index = 0; index < stack.length; index++) {
    const c = stack[index];
    if (c == '[') s.push(']');
    else if (c == '(') s.push(')');
    else if (c == '{') s.push('}');
    else if (!s.length || c != s.pop()) return false;
  }
  return !s.length;
};
// @lc code=end

export default isValid;
