/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  else if (head.next === null) return head;
  else {
    let cur: ListNode | null = null;
    let node: ListNode | null = head;
    do {
      if (node !== null) {
        const next: ListNode | null = node.next;
        node.next = cur;
        cur = node;
        node = next;
      }
    } while (node !== null);
    return cur;
  }
};

// function reverse(head: ListNode | null): [ListNode | null, ListNode | null] {
//   if (head === null) return [null, null];
//   else if (head.next === null) return [head, head];
//   else {
//     const next = head.next;
//     head.next = null;
//     const node = reverse(next);
//     if (node[1]) {
//       node[1].next = head;
//     }
//     return [node[0], head];
//   }
// }

// @lc code=end

export default reverseList;
