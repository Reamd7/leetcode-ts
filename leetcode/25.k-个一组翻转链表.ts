/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null) return null;
  else if (head.next === null) return head;
  else if (k === 1) return head;
  else {
    const list: Array<ListNode | null> = new Array(k);
    return reverseKGroupMain(head, k, list);
  }
};

function reverseKGroupMain(head: ListNode | null, k: number, list: Array<ListNode | null>): ListNode | null {
  let node: ListNode | null = head;
  for (let index = k - 1; index > -1; index--) {
    if (node !== null) {
      list[index] = node;
      node = node.next;
    } else {
      return head;
    }
  }
  const newHead = list[0];
  for (let index = 0; index < k; index++) {
    const v = list[index];
    if (index === (k - 1)) {
      if (v !== null) v.next = reverseKGroupMain(node, k, list);
    } else {
      if (v !== null) v.next = list[index + 1];
    }
  }
  return newHead;
}

// @lc code=end

export default reverseKGroup;
