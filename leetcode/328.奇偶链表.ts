/*
 * @lc app=leetcode.cn id=328 lang=typescript
 *
 * [328] 奇偶链表
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
function oddEvenList(head: ListNode | null): ListNode | null {
  let cur = head;
  let EvenCur = cur;
  const EvenHead = EvenCur;

  cur = cur?.next || null;
  let oddCur = cur;
  const oddHead = oddCur;

  while (cur !== null) {
    let next = cur.next;
    if (next !== null) {
      if (EvenCur) {
        EvenCur.next = next;
        EvenCur = next;

        next = next.next;
        if (next !== null) {
          if (oddCur) {
            oddCur.next = next;
            oddCur = next;
            cur = next;
            continue;
          }
        }
      }
    }
    break;
  }


  if (oddHead !== null && EvenCur !== null) {
    EvenCur.next = oddHead;
    oddCur && (oddCur.next = null);
  }
  return EvenHead;
};
// @lc code=end
export default oddEvenList;
