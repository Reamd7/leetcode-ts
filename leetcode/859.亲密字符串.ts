/*
 * @lc app=leetcode.cn id=859 lang=typescript
 *
 * [859] 亲密字符串
 */

// @lc code=start
function buddyStrings(A: string, B: string): boolean {
  const A_len = A.length;
  const B_len = B.length;

  if (A_len !== B_len) return false;
  if (A === B) {
    // A 只要有重复的元素就返回true
    const count: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (let index = 0; index < A_len; index++) {
      const v = A[index].charCodeAt(0) - 97;
      if (count[v] > 0) return true;
      count[v] += 1;
    }
    return false;
  } else {
    let hasCompair = false;
    let res = false;
    let A_tar = '';
    let B_tar = '';
    for (let index = 0; index < A_len; index++) {
      const A_ele = A[index];
      const B_ele = B[index];
      if (A_ele !== B_ele) {
        // 肯定是交换点
        if (hasCompair) return false;
        if (A_tar === '') {
          A_tar = B_ele;
          B_tar = A_ele;
        } else {
          hasCompair = true;
          if (A_tar === A_ele && B_ele === B_tar) {
            res = true;
            continue ;
          } else {
            return false;
          }
        }
      }
    }
    return res;
  }

};
// @lc code=end


export default buddyStrings;
