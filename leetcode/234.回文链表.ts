/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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
function isPalindrome(head: ListNode | null): boolean {
  // 快慢指针找到中间
  let slowCur: ListNode | null = head;
  let fastCur: ListNode | null = (head?.next?.next || null);

  while (fastCur !== null) {
    slowCur = slowCur?.next || null;
    fastCur = fastCur?.next?.next || null;
  };

  // 这是另一半，然后进行翻转
  const next = reverseList(slowCur!.next!);
  // 然后进行diff
  let cur: ListNode | null = next;
  let cur1: ListNode | null = head;
  do {
    if (cur && cur1) {
      if (cur.val !== cur1.val) {
        return false;
      }
    }
    cur1 = cur1?.next || null;
    cur = cur?.next || null;
  } while (cur !== null);

  return true;
};
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
// @lc code=end

export default isPalindrome;
