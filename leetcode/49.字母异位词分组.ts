/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start

const res: Record<string, number> = { 'a': 2, 'b': 3, 'c': 5, 'd': 7, 'e': 11, 'f': 13, 'g': 17, 'h': 19, 'i': 23, 'j': 29, 'k': 31, 'l': 37, 'm': 41, 'n': 43, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25 };
function stringToIndex(s: string): number {
  return res[s];
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
  const res: string[][] = [];
  for (const v in ResultMap) {
    res.push(ResultMap[v]);
  }
  return res;
};
// @lc code=end

export default groupAnagrams;
