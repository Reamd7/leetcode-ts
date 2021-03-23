/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
  if (head === null) return null;
  else if (head.next === null) return head;
  else {
    let newHead: ListNode | null = null;
    let small: ListNode | null = null;
    let newBig: ListNode | null = null;
    let big: ListNode | null = null;
    let node: ListNode | null = head;
    do {
      if (node) {
        if (node.val < x) {
          if (newHead === null) newHead = node;
          if (small !== null) {
            small.next = node;
          }
          small = node;
        } else {
          if (newBig === null) newBig = node;
          if (big !== null) {
            big.next = node;
          }
          big = node;
        }
      }
      node = node.next;
    } while(node !== null);
    if (small !== null) small.next = newBig;
    if (big !== null) big.next = null;
    if (newHead !== null) {
      return newHead;
    } else {
      return newBig;
    }
  }
};
// @lc code=end

export default partition;
