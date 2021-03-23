/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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
function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head;
  } else if (head.next === null) {
    return head;
  } else {
    const next = head.next;
    const next_ = swapPairs(next.next);
    next.next = head;
    head.next = next_;
    return next;
  }
};
// @lc code=end
export default swapPairs;
