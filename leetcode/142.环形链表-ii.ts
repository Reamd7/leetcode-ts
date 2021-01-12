/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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
function detectCycle(__head__: ListNode | null): ListNode | null {
  if (__head__ == null || __head__.next == null) {
    return null;
  }
  let current: ListNode | null = __head__;
  let fast: ListNode | null = __head__;



  while(current !== null && fast !== null) {
    current = current.next || null;
    fast = fast.next?.next || null;
    if (current === fast) {
      const nodeSet = new Set(); // 不符合 O(1) 的要求
      let start = current;
      while (start && !nodeSet.has(start)) {
        nodeSet.add(start);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        start = start!.next;
      }
      let __current__ = __head__;

      while (__current__ && !nodeSet.has(__current__)) {
        __current__ = __current__.next!;
      }
      return __current__ || null;
    }
  }
  return null;
};
// @lc code=end

export default detectCycle;
