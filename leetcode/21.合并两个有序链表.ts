/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const v: ListNode  = {
    val: NaN,
    next: null,
  };
  let current: ListNode = v;
  let cur1: ListNode | null = l1;
  let cur2: ListNode | null = l2;
  while (current !== null && cur1 !== null && cur2 !== null) {
    if (cur1.val < cur2.val) {
      current.next = cur1;
      current = cur1;
      cur1 = cur1.next;
    } else {
      current.next = cur2;
      current = cur2;
      cur2 = cur2.next;
    }
  }
  current.next = (cur1 !== null) ? cur1 : cur2;
  return v.next;
};
// @lc code=end

export default mergeTwoLists;
