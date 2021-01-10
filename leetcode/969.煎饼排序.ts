/*
 * @lc app=leetcode.cn id=969 lang=typescript
 *
 * [969] 煎饼排序
 */

// @lc code=start
function pancakeSort(arr: number[]): number[] {
  const queue = [...arr].sort(((a, b) => (a - b)));
  const N = arr.length;
  const res: number[] = [];

  function reverse(index: number): void {
    res.unshift(index + 1);
    queue.slice(0, index + 1).reverse().forEach((v, i) => (queue[i] = v));
  }

  for (let index = N - 1; index > 0; index--) {
    const element = arr[index];
    const jndex = queue.indexOf(element);
    if (index !== jndex) {
      if (jndex === 0) {
        reverse(index);
      } else {
        reverse(jndex);
        reverse(index);
      }
    }
  }

  return res;
};
// @lc code=end


export default pancakeSort;

