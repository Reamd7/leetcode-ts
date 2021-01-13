/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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
function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
  if (head === null || head.next === null) return head;
  if (m === n) return head;
  const Virtual: ListNode = {
    val: NaN,
    next: head,
  };
  let prev: ListNode | null = Virtual;
  let end: ListNode = Virtual;

  let index = 1;
  let cu: ListNode | null = head;
  while (cu) {
    const next: ListNode | null = cu?.next || null;
    if (index < m) {
      prev = cu;
    } else if (index > n) {
      prev.next = Virtual.next;
      end.next = cu;
      return m == 1? Virtual.next : head;
    } else {
      if (index === m) {
        end = cu;
      }
      cu.next = Virtual.next;
      Virtual.next = cu;
    }
    cu = next;
    index++;
    // =======================
  }
  prev.next = Virtual.next;
  end.next = cu;
  return m == 1? Virtual.next : head;
};
// @lc code=end

export default reverseBetween;
