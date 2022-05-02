/*
 * @lc app=leetcode.cn id=591 lang=typescript
 *
 * [591] 标签验证器
 */

// @lc code=start
function isUpper(str: string) {
  for (let index = 0; index < str.length; index++) {
    const code = str.charCodeAt(index);
    if (!(code > 64 && code < 91)) {
      return false;
    }
  }
  return true;
}
function isValid(code: string): boolean {
  let hasEnter = false;
  const tagStack: string[] = [];
  for (let index = 0; index < code.length; ) {
    const element = code[index];
    if (element === '<') {
      const nextElement = code[index + 1];
      if (nextElement === '/') {
        if (tagStack.length === 0) return false;
        // may be start in end tag
        const endTagIndex = code.indexOf('>', index + 2);
        if (endTagIndex < 0 || endTagIndex - (index + 2) > 9 || endTagIndex - index === 1) {
          return false;
        }
        const tagName = code.slice(index + 2, endTagIndex);
        const lastTag = tagStack.pop();
        if (tagName !== lastTag) {
          return false;
        } else {
          index = endTagIndex + 1;

          if (index !== code.length && tagStack.length === 0) {
            return false;
          }
        }
      } else if (nextElement === '!') {
        if (index === 0) return false;
        // may be start in CDATA
        const CDATAStart = code.slice(index, index + 9);
        if (CDATAStart === '<![CDATA[') {
          const endTagIndex = code.indexOf(']]>', index + 9);
          if (endTagIndex === -1) {
            return false;
          } else {
            index = endTagIndex + 1;
          }
        } else {
          return false;
        }
      } else {
        // may be start in start tag
        const endTagIndex = code.indexOf('>', index + 1);
        if (endTagIndex < 0 || endTagIndex - (index + 1) > 9 || endTagIndex - index === 1) {
          return false;
        }
        const tagName = code.slice(index + 1, endTagIndex);
        if (!isUpper(tagName)) {
          return false;
        }
        tagStack.push(tagName);
        hasEnter = true;
        index = endTagIndex + 1;
      }
    } else {
      if (index === 0) return false;
      index += 1;
    }
  }
  if (hasEnter === false) return false;
  if (tagStack.length > 0) return false;
  return true;
};
// @lc code=end
export default isValid;

