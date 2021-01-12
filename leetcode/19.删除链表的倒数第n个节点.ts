/* eslint-disable comma-dangle */
/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第N个节点
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
// 快慢指针。
interface ListNode {
  val: number
  next: ListNode | null
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyHead: ListNode | null = {
    val: NaN,
    next: head,
  };
  let prev: ListNode | null = dummyHead;
  let current: ListNode | null = head;
  let fast: ListNode | null = head;
  for (let index = 0; index < n; index++) {
    fast = fast?.next || null;
  }

  while (fast !== null) {
    prev = current;
    current = current?.next || null;
    fast = fast.next;
  }
  if (prev) {
    prev.next = current ? current.next : null;
  }
  return dummyHead.next;
};

export default removeNthFromEnd;
// console.log(
//   removeNthFromEnd({
//     val: 1,
//     next: {
//       val: 2,
//       next: {
//         val: 3,
//         next: {
//           val: 4,
//           next: {
//             val: 5,
//             next: null
//           }
//         }
//       }
//     }
//   }, 2)
// );
// @lc code=end

