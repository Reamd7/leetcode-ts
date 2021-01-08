/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function stringToIndex(s: string): number {
  return s.charCodeAt(0) - 97;
}
function groupAnagrams(strs: string[]): string[][] {
  const ResultMap: Record<string, string[]> = {};
  strs.forEach(v => {
    const Record = new Array(26);
    for (let index = 0; index < v.length; index++) {
      const Strindex = stringToIndex(v[index]);
      Record[Strindex] ? Record[Strindex] += 1 : (Record[Strindex] = 1);
    };
    const res = JSON.stringify(Record);
    if (ResultMap[res]) {
      ResultMap[res].push(v);
    } else {
      ResultMap[res] = [v];
    }
  });
  return Object.keys(ResultMap).map(v => {
    return ResultMap[v];
  });
};
// @lc code=end

export default groupAnagrams;
