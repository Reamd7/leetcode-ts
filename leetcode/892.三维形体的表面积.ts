/*
 * @lc app=leetcode.cn id=892 lang=typescript
 *
 * [892] 三维形体的表面积
 */

// function S(n: number): number {
//   return 2 * (2 * n + 1);
// }
// function minusS(self: number, top: number, left: number): number {
//   return (Math.min(self, top) + Math.min(self, left)) * 2;
// }
// function totalS(self: number, top: number, left: number): number {
//   return S(self) - minusS(self, top, left);
// }

// @lc code=start
function surfaceArea(grid: number[][]): number {
  const N = grid.length;
  let res = 0;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const self = grid[x][y];
      if (self > 0) {
        const top = x < 1 ? 0 : grid[x - 1][y];
        const left = y < 1 ? 0 : grid[x][y - 1];
        res += (2 * (2 * self + 1) -
          (Math.min(self, top) + Math.min(self, left)) * 2
        );
        // res += totalS(
        //   self,
        //   x < 1 ? 0 : grid[x - 1][y],
        //   y < 1 ? 0 : grid[x][y - 1],
        // );
      }
    }
  }
  return res;
};
// @lc code=end

export default surfaceArea;
