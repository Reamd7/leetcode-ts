/*
 * @lc app=leetcode.cn id=937 lang=typescript
 *
 * [937] 重新排列日志文件
 */

// @lc code=start
function isNumberContent(content: string) {
  return /\d/.test(content[0]);
}
function reorderLogFiles(logs: string[]): string[] {
  return logs.sort((a, b) => {
    const ASpace = a.indexOf(' ');
    const BSpace = b.indexOf(' ');
    const Acontent = a.slice(ASpace + 1);
    const BContent = b.slice(BSpace + 1);
    const isNumberA = isNumberContent(Acontent);
    const isNumberB = isNumberContent(BContent);
    if (Acontent === BContent) {
      const AAction = a.slice(0, ASpace);
      const BAction = b.slice(0, BSpace);
      return AAction.localeCompare(BAction);
    }

    if (isNumberA) {
      if (isNumberB) {
        return 0;
      } else {
        return 1;
      }
    } else {
      if (isNumberB) {
        return -1;
      } else {
        return Acontent.localeCompare(BContent);
      }
    }
  });
};
// @lc code=end
export default reorderLogFiles;

