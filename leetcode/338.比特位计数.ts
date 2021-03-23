/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 *

 * https://www.zhihu.com/question/444266754/answer/1729863823
 */

// @lc code=start
export default function countBits(num: number): number[] {
  const res: number[] = [0];
  for (let index = 1; index < num + 1; index <<= 1) {
    if (index % 2 === 0) {
      res[index] = res[index - 1] + 1;
    } else {
      res[index] = res[index/2];
    }
  }
  return res;
};
// @lc code=end

export function popcount2(n: number): number {
  let eax = n;
  eax = eax - ((eax >> 1) & 0x55555555);
  eax = (eax & 0x33333333) + ((eax >> 2) & 0x33333333);
  eax = ((eax >> 4) + eax) & 0x0f0f0f0f;
  eax = (eax * 0x01010101) >> 24;
  return eax;
}
