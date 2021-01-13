/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {

  const dummpyHead: ListNode = {
    val: NaN,
    next: head,
  };
  let slow: ListNode | null = dummpyHead;
  let fast: ListNode | null = dummpyHead;
  let size = 0;
  for (let index = 0; index < k + 1;) { // O(k) / O(size + k % size)
    fast = fast?.next || null;
    if (!fast) {
      // eslint-disable-next-line no-param-reassign
      k = k % size; // 尝试优化性能，减少没必要的交换
      index = 1;
      size = 1;
      fast = head;
    } else {
      size += 1; // 初次如果到底了，就记录size
      index += 1;
    }
  }

  while (fast !== null) {
    slow = slow?.next || null;
    if (!fast.next) break; // 保证了 fast 必为 ListNode;
    fast = fast.next;
  }
  if (slow === fast) return head;

  if (slow && fast) {
    const current = slow.next;
    slow.next = null;
    fast.next = head;
    return current;
  }
  return head;
};
// @lc code=end
export default rotateRight;


