/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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
function hasCycle(__head__: ListNode | null): boolean {
  if (__head__ == null || __head__.next == null) {
    return false;
  }
  let current: ListNode | null = __head__;
  let fast: ListNode | null = __head__;

  while(current !== null && fast !== null) {
    current = current.next?.next || null;
    fast = fast.next;
    if (current === fast) {
      return true;
    }
  }
  return false;
};
export default hasCycle;
// @lc code=end

// const node1: ListNode = {
//   val: 1, next: null,
// };
// const node2: ListNode = {
//   val: 2, next: null,
// };
// const node3: ListNode = {
//   val: 3, next: null,
// };
// const node4: ListNode = {
//   val: 4, next: null,
// };

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node2;
// console.log(
//   hasCycle(node1),
// );
