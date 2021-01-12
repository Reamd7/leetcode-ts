/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
interface ListNode {
  val: number
  next: ListNode | null
}
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const res: ListNode = {
    val: NaN,
    next: null,
  };
  let c = res;
  let plus = 0;
  let c1 = l1;
  let c2 = l2;
  while (c1 !== null || c2 !== null) {
    const c1v = c1 ? c1.val : 0;
    const c2v = c2 ? c2.val : 0;
    const sum = c1v + c2v + plus; // max => 19
    plus = sum > 9 ? 1 : 0;
    const val = sum > 9 ? sum - 10 : sum;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const s: ListNode = c1 ? c1 : c2!;
    s.val = val;
    // const s: ListNode = {
    //   val,
    //   next: null
    // };
    c.next = s;
    c = s;
    c1 = c1 ? c1.next : null;
    c2 = c2 ? c2.next : null;
  }
  if (plus === 1) {
    c.next = {
      val: 1,
      next: null,
    };
  }
  return res.next;
};
// @lc code=end

export default addTwoNumbers;
