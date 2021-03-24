/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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
  val: number;
  next: ListNode | null;
}
function removeElements(head: ListNode | null, val: number): ListNode | null {
  const node = {
    val: Infinity,
    next: head,
  };
  let cur = node;

  while (cur !== null) {
    const next = cur.next;
    if (next === null) {
      break;
    } else {
      if (next.val === val) {
        cur.next = next.next;
      } else {
        cur = next;
      }
    }
  }

  return node.next;
};
// @lc code=end

export default removeElements;
